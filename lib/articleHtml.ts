export interface TocItem {
  id: string;
  text: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

const stripTags = (html: string) => html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").trim();

/** Letters and digits only, for comparing a heading with the post title. */
const normalise = (text: string) => stripTags(text).replace(/&[a-z#0-9]+;/gi, "").replace(/[^a-z0-9]/gi, "").toLowerCase();

/**
 * Render-time clean-up for HTML-string blog posts (the stored content is not modified):
 * - drops embedded JSON-LD scripts (the page emits the schema once)
 * - drops an in-body <h1> that just repeats the post title (it is already the page H1)
 * - demotes any other in-body <h1> to <h2> so the page keeps a single H1
 * - adds stable ids to <h2> headings and returns them as a table of contents
 */
const JSON_LD = /<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;

/** FAQ questions from a FAQPage block embedded in the post HTML (the questions are also visible in the article). */
export function embeddedFaqs(html: string): { question: string; answer: string }[] {
  for (const [, json] of html.matchAll(JSON_LD)) {
    try {
      const data = JSON.parse(json);
      const nodes = (Array.isArray(data) ? data : [data]).flatMap((d) => d?.["@graph"] ?? [d]);
      const faq = nodes.find((d) => d?.["@type"] === "FAQPage");
      if (faq) return faq.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => ({ question: q.name, answer: q.acceptedAnswer.text }));
    } catch {
      // Malformed embedded JSON: skip it rather than break the page
    }
  }
  return [];
}

/** Product mentions linked on first use, most specific first (the generic "vapour absorption chiller" last). */
const PRODUCT_LINKS: [RegExp, string][] = [
  [/\b(?:two[- ]stage|double[- ]effect) (?:vapou?r )?(?:absorption )?(?:chillers?|VAMs?|machines?)\b/i, "/vapour-absorption-chiller/two-stage-chiller"],
  [/\bsingle[- ](?:stage|effect) (?:vapou?r )?(?:absorption )?(?:chillers?|VAMs?|machines?)\b/i, "/vapour-absorption-chiller/single-stage-chiller"],
  [/\bdirect[- ]fired (?:vapou?r )?(?:absorption )?(?:chillers?|VAMs?|machines?)\b/i, "/vapour-absorption-chiller/direct-fired-chiller"],
  [/\b(?:steam|hot[- ]water)(?:[- ]driven|[- ]fired)? (?:vapou?r )?(?:absorption )?(?:VAM )?(?:chillers?|VAMs?)\b/i, "/vapour-absorption-chiller/steam-hot-water-absorption-chiller"],
  [/\b(?:waste[- ]heat|exhaust(?:[- ]gas)?)(?:[- ](?:driven|fired|recovery))? (?:vapou?r )?(?:absorption )?(?:chillers?|VAMs?)\b/i, "/vapour-absorption-chiller/waste-heat-chiller"],
  [/\bmulti[- ]energy (?:absorption )?chillers?\b/i, "/vapour-absorption-chiller/multi-energy-chiller"],
  [/\bpackaged (?:vapou?r )?(?:absorption )?chillers?\b/i, "/vapour-absorption-chiller/packaged-chiller"],
  [/\bsolar(?:[- ](?:driven|powered|thermal))? (?:vapou?r )?absorption chillers?\b/i, "/vapour-absorption-chiller/solar-driven"],
  [/\b(?:magnetic[- ]bearing (?:oil[- ]free )?(?:centrifugal )?chillers?|oil[- ]free (?:magnetic[- ]bearing )?chillers?)\b/i, "/power-efficient-chiller/magnetic-bearing-oil-free"],
  [/\babsorption heat pumps?\b/i, "/absorption-heat-pump"],
  [/\b(?:CCHP|[Tt]rigeneration)(?: systems?| plants?)?\b/, "/cchp-systems"],
  [/\b(?:vapou?r absorption (?:chillers?|machines?)|absorption chillers?)\b/i, "/vapour-absorption-chiller"],
];
const PRODUCT_HREF = /href=["'](?:https:\/\/www\.broadindia\.com)?(\/(?:vapour-absorption-chiller|cchp-systems|power-efficient-chiller|absorption-heat-pump|pumpsets)[^"'#?]*)/gi;
/** Text inside these elements is never auto-linked. */
const NO_LINK = /^<\/?(a|h[1-6]|script|style|code|button)\b/i;

/**
 * Links the first mention of each BROAD product to its page, up to `max` product links per post
 * (counting links the post already has). The stored text is not changed; only <a> tags are added.
 */
export function linkProducts(html: string, max = 3): string {
  const used = new Set(Array.from(html.matchAll(PRODUCT_HREF), (m) => m[1].replace(/\/$/, "")));
  let budget = max - used.size;
  if (budget <= 0) return html;
  let blocked = 0;
  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith("<")) {
        const tag = NO_LINK.exec(part);
        if (tag && !part.endsWith("/>")) blocked += part.startsWith("</") ? -1 : 1;
        return part;
      }
      if (blocked > 0 || budget <= 0) return part;
      for (const [re, href] of PRODUCT_LINKS) {
        if (used.has(href)) continue;
        const m = re.exec(part);
        if (!m) continue;
        used.add(href);
        budget -= 1;
        // One link per text run keeps paragraphs readable
        return `${part.slice(0, m.index)}<a href="${href}">${m[0]}</a>${part.slice(m.index + m[0].length)}`;
      }
      return part;
    })
    .join("");
}

export function prepareArticleHtml(html: string, title?: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const titleKey = title ? normalise(title) : "";

  // Some posts embed their own JSON-LD; the page emits one BlogPosting (and their FAQs, via embeddedFaqs)
  const deduped = html.replace(JSON_LD, "").replace(/<h1(\s[^>]*)?>([\s\S]*?)<\/h1>\s*/gi, (match, _attrs, inner: string) => {
    const key = normalise(inner);
    // Same text, or one contains the other and they are of similar length (not a short section heading)
    const similar = Math.min(key.length, titleKey.length) >= 0.6 * Math.max(key.length, titleKey.length);
    const repeatsTitle = !!titleKey && !!key && (key === titleKey || (similar && (key.includes(titleKey) || titleKey.includes(key))));
    return repeatsTitle ? "" : match;
  });
  const demoted = deduped.replace(/<h1(\s[^>]*)?>/gi, "<h2$1>").replace(/<\/h1>/gi, "</h2>");

  const withIds = demoted.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (match, attrs = "", inner: string) => {
    const text = stripTags(inner);
    if (!text) return match;
    // Heading already has an id in the stored HTML: keep it and list it in the contents
    const existing = /\sid=["']([^"']+)["']/.exec(attrs);
    if (existing) {
      used.add(existing[1]);
      toc.push({ id: existing[1], text });
      return match;
    }
    let id = slugify(text) || `section-${toc.length + 1}`;
    while (used.has(id)) id = `${id}-${toc.length + 1}`;
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}"${attrs}>${inner}</h2>`;
  });

  return { html: linkProducts(withIds), toc };
}

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
 * - drops an in-body <h1> that just repeats the post title (it is already the page H1)
 * - demotes any other in-body <h1> to <h2> so the page keeps a single H1
 * - adds stable ids to <h2> headings and returns them as a table of contents
 */
export function prepareArticleHtml(html: string, title?: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const titleKey = title ? normalise(title) : "";

  const deduped = html.replace(/<h1(\s[^>]*)?>([\s\S]*?)<\/h1>\s*/gi, (match, _attrs, inner: string) => {
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

  return { html: withIds, toc };
}

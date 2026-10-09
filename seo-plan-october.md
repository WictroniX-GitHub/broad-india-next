# BROAD India — SEO · GEO · AEO Implementation Plan (October 2026)

**Date:** 2026-10-06 · **Scope:** Tier 1 (this week) and Tier 2 (this month) of the prioritised action plan
**Codebase:** Next.js 15.5.10 App Router · content in `data/*.ts` · redirects in `lib/redirects.ts` · deployed on Vercel

**Legend:** 🧑‍💻 dev work in this repo · 🙋 needs input or a resource from you · 🌐 off-site or dashboard work (GSC, GTM, IndiaMART)

## Execution status (2026-10-09, branch `seo-october-r1`, uncommitted)

| Item | Status |
|---|---|
| T1-1 footer + `/products/*` redirects | ✅ Done |
| T1-2 404 recovery | ✅ 6 typo/truncated URLs from the GSC export now 301. Only the listicle still 404s (on hold) |
| T1-3 listicle | ⏸ On hold (your decision) |
| T1-4 llms.txt | ✅ Done; 908 address, Gurugram PIN, new pages added |
| T1-5 blog `<head>` | ✅ Done; descriptions trimmed at sentence ends; ISO dates with IST timezone in schema |
| T1-6 sitemap | ✅ Per-page dates, new pages added. Resubmit in GSC after deploy |
| T1-7 titles/metas | ✅ Product pages "Manufacturer in India"; company pages shortened (≤ 60 / ≤ 155) |
| T1-8 one H1 | ✅ Every sitemap URL has one H1 |
| T1-9 OG/Twitter | ✅ All pages except industry pages (excluded on purpose) |
| T1-10 facts | ✅ 908 Luxuria Trade Hub, Gurugram 122002, Wikipedia → parentOrganization. IndiaMART is yours |
| T1-11 baseline | 🟡 Rich Results Test run on code from this branch (results in the chat). Re-run on live URLs after deploy |
| T2-1 consolidation | 📝 Proposal in `blog-consolidation-proposal.md`: 42 merges, 15 × 410. Waiting for sign-off |
| T2-2 product links | ✅ First-mention auto-linking (max 3 per post); top-50 posts with no product link: 25 → 7 |
| T2-3 Team page | ❌ Dropped (your decision) |
| T2-4 product pages | ✅ Question H2s, sizing & price block, CCHP projects from BROAD catalogue, 81% figure |
| T2-5 steam & hot water page | ✅ `/vapour-absorption-chiller/steam-hot-water-absorption-chiller` |
| T2-6 price guide + calculator | ✅ `/vapour-absorption-chiller/price-in-india` (visitor enters own quote) |
| T2-7 LCP | ✅ Homepage JS 463 kB → 188 kB (blog data no longer shipped to the browser); hero quality 75 |
| T2-8 schema | ✅ Product kept (invalid without offers, your decision); duplicate blog BlogPosting removed |

---

## 0. What the codebase shows today

These findings change the scope of some items, so they come before the work list.

| # | Finding | Where | Effect on plan |
|---|---|---|---|
| A | **Blog metadata is streamed, which is the root cause of T1-5.** Next 15.2+ streams `generateMetadata` output into `<body>` for any user agent it does not recognise as a bot. `/blogs/[id]` has no `generateStaticParams`, so every post is rendered on demand and gets streamed metadata. Googlebot gets it in `<head>`, but LinkedIn, Slack, audit tools and many AI fetchers do not. | `app/blogs/[id]/page.tsx`, `next.config.ts` | One config line fixes this (`htmlLimitedBots: /.*/`). Pre-rendering posts helps as well. |
| B | **8 indexable routes have no metadata at all**: `/absorption-heat-pump`, `/pumpsets`, `/power-efficient-chiller`, `/vapour-absorption-chiller/direct-fired-chiller`, `/…/solar-driven`, `/…/waste-heat-chiller`, `/industries`, `/industries/[industry]`. They inherit only the root canonical. | `app/**/page.tsx` | T1-7 and T1-9 must create metadata for these pages, not only rewrite it. |
| C | Footer product links point to `/products/*`, which does not exist. | `components/Footer.tsx:94-97` | Confirms T1-1. |
| D | The VAM manufacturers listicle (`top-5-vapor-absorption-machine-manufacturers-india-2025`) is **commented out**, so its URL now returns 404. | `data/blogs.ts:~9555` | T1-3 is a restore, not a rewrite from scratch. |
| E | `jsw-bellary` and `iocl-vadodara` have `status: "placeholder"`, so they are noindexed and kept out of the sitemap on purpose. | `data/caseStudies.ts:162,189` | T1-6 needs their content finished first, or a decision to publish them as they are. |
| F | The sitemap uses one fixed date (`PAGES_UPDATED`) for every static page, and blog `lastmod` is the publish date. | `app/sitemap.ts` | T1-6 needs a per-page `updatedAt`. |
| G | The homepage carousel renders **3 H1s** (one per slide). Blog content contains **150 `<h1>` tags**, and `BlogContentRenderer` renders them as H1. | `HomePageCarousel.tsx:110`, `BlogContentRenderer.tsx:72`, `data/blogs.ts` | T1-8 can be fixed in the renderer instead of by editing 150 strings. |
| H | The hero image uses `quality={100}`. | `HomePageCarousel.tsx:85` | The quickest LCP win in T2-7. |
| I | Organization schema already exists on the homepage, but its `sameAs` lists the BROAD Group Wikipedia page, which mixes the India subsidiary with its parent. FAQ and Breadcrumb schema components exist but are only used in some places. No `Product` schema exists. | `app/page.tsx:98-180`, `components/ProductFAQ.tsx`, `components/ds/Breadcrumbs.tsx` | T2-8 extends what exists rather than starting from zero. |
| J | The CCHP efficiency figure conflicts: the meta description says **60–80%**, while the page body, stats and home card say **80–90%**. | `app/cchp-systems/layout.tsx:5` vs `page.tsx:26,31` | T2-4 (needs the correct figure from you). |
| K | Company facts differ across pages: "since 2001" and "100+ installations" on About, "over two decades" in llms.txt, and no single source of truth. | `app/about/page.tsx`, `public/llms.txt`, `app/page.tsx` | T1-10: create `lib/company.ts`. |
| L | Blog author is the generic Organization "BROAD India Engineering Team". | `app/blogs/[id]/page.tsx` BlogPosting | T2-3 swaps it for a Person. |

---

## 1. Shared foundations (build first, day 1)

Several items depend on the same plumbing. Building it once keeps every later change small.

| Module | Purpose | Used by |
|---|---|---|
| `lib/company.ts` | One source of truth for name, legal name, founding year, HQ and office addresses, phone numbers, installation count, social profiles and parent organisation | T1-4, T1-10, T2-3, T2-8, footer, About, llms.txt |
| `lib/seo.ts` → `buildMetadata({ title, description, path, image, type })` | Returns a full `Metadata` object (title ≤ 60 chars, description ≤ 155, canonical, OG, Twitter, robots), and warns in dev when limits are exceeded | T1-5, T1-7, T1-9, every page |
| `lib/schema.ts` + `components/JsonLd.tsx` | Typed builders: `organization()`, `product()`, `faqPage()`, `breadcrumbList()`, `person()`, `blogPosting()`, `howTo()` | T2-3, T2-8 |
| `data/products.ts` (extend) | Per-product SEO fields: `seoTitle`, `metaDescription`, `ogImage`, `updatedAt`, `primaryKeyword`, `faqs`, `sizing` | T1-6, T1-7, T2-4 |
| `scripts/seo-check.ts` | Build-time lint: one H1 per page, title and description lengths, canonical present, no internal links to redirected URLs, sitemap entries return 200 | Regression guard for everything |

---

## 2. Tier 1 — Quick wins (this week)

### T1-1 · Fix footer links and 301 every `/products/*` path 🧑‍💻
- **Change:** in `components/Footer.tsx:94-97`, point the links to `/cchp-systems`, `/power-efficient-chiller`, `/absorption-heat-pump` and `/pumpsets`.
- **Redirects** (`lib/redirects.ts`): add explicit rules for `/products/cchp-systems`, `/products/power-efficient-chiller`, `/products/absorption-heat-pumps` → `/absorption-heat-pump`, `/products/pumpsets`, then a catch-all `/products/:slug*` → the closest category (or `/vapour-absorption-chiller`).
- **Also:** grep the whole repo, blog HTML included, for `/products/` and rewrite those internal links so they don't go through a redirect hop.
- **Done when:** `curl -I` on each old path returns a single 301 to a 200, and `seo-check` finds 0 internal links to redirected URLs.

### T1-2 · Recover 404s from Google Search Console 🙋 🧑‍💻 🌐
- **Input needed:** GSC → Pages → "Not found (404)" export (CSV), plus Links → "Top linking pages" if you have it.
- **Process:** map each URL to its best equivalent in a mapping sheet, which you review. Add the rules to `lib/redirects.ts` (the sitemap already excludes redirected blog URLs). Known legacy patterns: `/vapAbsorptionChiller` → `/vapour-absorption-chiller`, `/articles/*` (already partly handled), and old product slugs.
- **Rules:** one hop only. URLs with no real equivalent get a 410 (see T2-1), never a redirect to the homepage.
- **Done when:** every URL in the export returns a 301 or 410, and you click "Validate fix" in GSC.

### T1-3 · Restore the VAM manufacturers listicle as a 2026 edition 🙋 🧑‍💻
- **Recommendation:** restore it **at the old URL** (`/blogs/top-5-vapor-absorption-machine-manufacturers-india-2025`). It held position ~5.8 with 1,389 impressions, so keeping the URL keeps all its equity. Update the title to "2026", refresh the content, and set `isoDate` and `dateModified`. Moving it later to an evergreen slug with a 301 is an option.
- **Content:** fair, verifiable comparison (capacity range, drive sources, service network, references), definition-first intro, comparison table, FAQ block, "Last updated" line. BROAD's entry should be factual, not superlative, so AI answers can cite it.
- **Done when:** the URL returns 200, appears in the sitemap with the new date, and is requested for indexing in GSC.

### T1-4 · Replace llms.txt with the Pillar 4 rewrite 🙋 🧑‍💻
- **Status (2026-10-06):** the rewrite has been received and is in `public/llms.txt`, with a Pumpsets entry added and the phone number formatted. Installation count set to "100+ VAM installations" (2026-10-09). JSW Bellary and IOCL Vadodara removed until their case studies are complete (T1-6). Ready to deploy.
- **Change:** replace `public/llms.txt`. Check every fact against `lib/company.ts` and every URL against the sitemap. Optionally generate `llms.txt` from a route (`app/llms.txt/route.ts`) so it can never drift from the product list.
- **Done when:** every URL in the file returns 200 and the facts match the About page and the schema.

### T1-5 · Put blog title, meta, canonical and OG in `<head>` for every user agent 🧑‍💻
- **Root cause:** finding A, streamed metadata.
- **Changes:**
  1. `next.config.ts`: `htmlLimitedBots: /.*/`, which turns off metadata streaming for all user agents.
  2. `app/blogs/[id]/page.tsx`: add `generateStaticParams()` so posts are pre-rendered at build time, and switch metadata to `buildMetadata()`.
  3. Fix the title truncation: it currently cuts mid-word and appends "…". Use a per-post `meta.title` (≤ 60 chars) where it exists and truncate only as a fallback.
- **Done when:** `curl -A "LinkedInBot" …` and `curl -A "Mozilla/5.0" …` both show `<title>`, description, canonical and `og:*` inside `<head>` for 3 sample posts, and the LinkedIn Post Inspector shows the card.

### T1-6 · Sitemap with real lastmod dates and the 2 case studies 🙋 🧑‍💻 🌐
- **lastmod:** add `updatedAt` to each static page entry (or read it from `data/products.ts`), add `updatedAt` to blogs (defaulting to `isoDate`), and remove the single `PAGES_UPDATED` date.
- **Case studies:** set `jsw-bellary` and `iocl-vadodara` to `complete` once their content is ready (finding E). Their pages already drop `noindex` when they become complete.
- **Then:** resubmit `sitemap.xml` in GSC.
- **Done when:** the sitemap lists 2 more case studies and shows distinct `lastmod` values, and GSC reads it with 0 errors.

### T1-7 · Rewrite the product titles and metas ("Manufacturer / Supplier in India", ≤ 60 chars) 🧑‍💻 🙋
- **Pages** (11 product pages and 3 categories; please confirm which 10 you mean): direct-fired, waste-heat, two-stage, single-stage, multi-energy, packaged, solar-driven, CCHP tri-gen, magnetic-bearing, absorption heat pump, pumpsets.
- **Pattern:** `{Primary keyword} Manufacturer in India | BROAD` (≤ 60 chars). Meta: what it is, the drive source, the capacity range, a proof point and a CTA (≤ 155 chars).
- **Example:** `Direct Fired Absorption Chiller Manufacturer in India | BROAD` (59 chars).
- **Deliverable:** a title and meta table for your sign-off, stored in `data/products.ts` and rendered through `buildMetadata()`. This also fills the 8 pages with no metadata (finding B).
- **Done when:** the table is approved, `seo-check` passes the length limits, and every product URL has a unique title and description.

### T1-8 · One H1 per page 🧑‍💻
- **Homepage:** only slide 1 of the carousel renders an `<h1>`; slides 2 and 3 render `<h2>` (or `<p role="heading">`) with the same styling.
- **Blogs:** `BlogContentRenderer` maps content `h1` → `h2`, and the same applies in `lib/articleHtml.ts` if it parses headings. The post title in `BlogDetailContent.tsx:41` stays the only H1.
- **Other pages:** `seo-check` reports any route with more than one H1, and I fix whatever it finds (the audit's "67 pages").
- **Done when:** `seo-check` reports exactly one H1 on every route.

### T1-9 · OG and Twitter tags on the product and blog templates 🧑‍💻 🙋
- `buildMetadata()` emits OG and Twitter tags on every page. Blogs already have them; this adds them to product, category, industry and case-study pages.
- **OG images (1200×630):** the recommendation is generated images (`opengraph-image.tsx` with `next/og`, brand template, product name and photo), so each product gets a card without design work. The alternative is designed images from your team.
- **Done when:** LinkedIn Post Inspector and an X card check show the correct image, title and description for 3 product URLs and 3 blog URLs.

### T1-10 · Standardise company facts and clean up IndiaMART 🙋 🧑‍💻 🌐
- **In the repo:** `lib/company.ts` becomes the source for the About page, the homepage stats, Organization schema, llms.txt, the footer and the contact page. Grep for "two decades", "100+", "since" and the addresses, and replace hard-coded values.
- **`sameAs`:** remove the BROAD Group Wikipedia link and express the relationship as `parentOrganization: { name: "BROAD Group", sameAs: wikipedia }` instead (finding I).
- **Off-site (you):** remove the Thermax and Kirloskar items from the IndiaMART storefront, and make the name, address and phone match `lib/company.ts` there and on Google Business Profile, JustDial and ExportersIndia.
- **Done when:** a grep shows one installation count across the repo, and the off-site profiles match.

### T1-11 · Baseline: Rich Results Test and the 7 GEO prompts 🌐 🙋
- **After the T1 deploy:** run the Rich Results Test on the homepage, one product page and one blog post. I can run it in the browser if you prefer.
- **GEO baseline:** run the 7 manual prompts in ChatGPT, Perplexity, Gemini and Google AI Overviews. Log whether BROAD is cited, the URL cited, where it appears, and which competitors are named. I'll provide a tracking sheet. Please send me the 7 prompts if they aren't the ones from the audit.

---

## 3. Tier 2 — Strategic fixes (this month)

### T2-1 · Consolidate cannibalising posts and remove off-topic ones 🙋 🧑‍💻
- **Input needed:** GSC Performance export (pages × queries, last 6 months). `thin-posts-report.json` in the repo is the starting point.
- **Process:**
  1. Cluster the 360 posts by primary query: ~10 generic VAC posts, ~8 steam/hot-water posts, and other clusters as found.
  2. For each cluster, the winner is the post with the most clicks and backlinks. Merge the best sections of the others into it and refresh its date.
  3. Losers 301 to the winner (`lib/redirects.ts`). Their entries stay in `blogs.ts` as `redirectTo`, or are deleted.
  4. Off-topic posts (~15): **410 Gone** via `middleware.ts` from a `gone` list. That's faster than noindex for dropping them from the index. Use noindex only for posts you want to keep for readers.
- **Deliverable for sign-off:** a cluster sheet (URL → keep / merge into / 410).
- **Done when:** redirects are deployed, the sitemap drops the merged posts automatically, and GSC impressions consolidate onto the winners within 4–6 weeks.

### T2-2 · Add 2–4 in-body links per post to the matching product page 🧑‍💻
- **Order:** the top 50 posts by impressions (from the same GSC export), then the rest.
- **Method:** editorial insertion with descriptive anchors (for example "two-stage steam absorption chiller", not "click here"), placed where the topic comes up. A keyword-to-product map in `data/linkMap.ts` drives suggestions, and `seo-check` reports posts with fewer than 2 product links.
- **Also:** replace the generic fallback FAQ in `app/blogs/[id]/page.tsx` with post-specific FAQs, or remove it. Identical FAQPage schema on 300+ posts is a spam risk.
- **Done when:** the top 50 posts each have at least 2 contextual product links and `seo-check` passes.

### T2-3 · Team page, Person schema and "Technically reviewed by" 🙋 🧑‍💻
- **Input needed:** for Akshay and 3–6 engineers: name, role, years of experience, qualifications or certifications, key projects, LinkedIn URL, a professional photo, and their **consent to be listed**.
- **Build:**
  - `data/team.ts`
  - `/about/team` (or `/team`) with a bio card for each person
  - `Person` schema with `worksFor`, `sameAs` LinkedIn, `knowsAbout` and `hasCredential`
  - add `author` and `reviewedBy` fields to blogs
  - a byline plus a "Technically reviewed by {name}, {role}" box on posts
  - `BlogPosting.author` becomes a Person, and `reviewedBy` is added
- **Done when:** the Team page is live, the top 50 posts carry a named reviewer, and the Rich Results Test shows a Person author.

### T2-4 · Product pages: question H2s, price/sizing block, CCHP case studies, efficiency fix 🙋 🧑‍💻
- **Question H2s:** each product page gets 3–5 H2s that match real queries, for example "What is a direct-fired absorption chiller?", "How much does it cost in India?", "What capacity do I need?". Each is answered definition-first in 40–60 words so AI Overviews can lift the answer.
- **Price/sizing block:** a new `SizingBlock` component in `PDPTemplate` showing the capacity range (TR), typical input conditions and either an indicative ₹ range or the message "Price depends on X, Y, Z; get a quote".
- **CCHP case studies:** link to or add case studies tagged CCHP. This needs data from you.
- **Efficiency mismatch (finding J):** align on the figure you confirm, and put it in `lib/company.ts` or `data/products.ts` so it is defined in one place.
- **Done when:** every product page has question H2s, a sizing block and FAQ schema, and the CCHP figure is the same everywhere.

### T2-5 · Owner page for "steam & hot water absorption chiller" 🙋 🧑‍💻
- **Recommendation:** `/vapour-absorption-chiller/steam-hot-water-absorption-chiller` as the hub for steam- and hot-water-driven VAM. It compares single-stage and two-stage, gives the steam pressure and hot-water temperature ranges, a selection guide and FAQs, and links down to the single-stage and two-stage pages. Those two pages then target their specific queries so they don't cannibalise the hub.
- The steam/hot-water blog posts merged in T2-1 redirect here, or link here.
- **Done when:** the page is live, linked from the VAC category page, the nav, the related blogs and the sitemap.

### T2-6 · "Vapour Absorption Chiller Price in India" guide and TR/payback calculator 🙋 🧑‍💻
- **Guide** (`/blogs/vapour-absorption-chiller-price-india`, or a resource page): what drives cost (TR, drive source, single vs two-stage, installation, cooling tower), indicative ₹/TR bands, CAPEX vs OPEX, subsidies and accelerated depreciation, and a worked example. Dated "2026".
- **Calculator** (client component): inputs are required TR, operating hours, electricity tariff, steam or fuel cost and the electric chiller kW/TR. Outputs are annual savings versus an electric chiller, simple payback and CO₂ avoided. A "Send me the detailed estimate" CTA leads to the contact form with the values prefilled.
- **AEO:** the calculator's formula and assumptions are shown in text, plus `HowTo` or `FAQPage` schema, so AI answers can cite the method.
- **Input needed:** the ₹/TR bands you're comfortable publishing, plus the default assumptions (COP, steam consumption per TR, and so on) signed off by engineering.

### T2-7 · Mobile LCP from 4.4 s to under 2.5 s 🧑‍💻
1. Hero: `quality={75}`, correct `sizes`, `fetchPriority="high"` (`priority` already preloads it). Re-export the source images capped at 1920 px wide, and add a mobile crop at around 828 px.
2. Render slide 1 as a static server component with no JS needed for first paint; load the carousel and framer-motion with `dynamic(..., { ssr: false })` after first paint.
3. GTM is already `lazyOnload`. Audit the tags inside GTM, then remove any injected schema (see T2-8) and unused pixels.
4. `SmoothScroll` (Lenis) wraps the whole app: load it after interaction, or skip it on mobile.
5. Critical CSS: try `experimental.inlineCss: true` and measure the effect.
6. Font: Inter already uses `display: swap`; also subset it to the weights actually used.
- **Measure:** PageSpeed Insights (mobile) before and after on the homepage, one product page and one blog post. CrUX field data takes about 28 days to reflect the change.
- **Done when:** lab LCP is under 2.5 s on mobile on all 3 URLs, and CLS stays at 0.

### T2-8 · Hard-coded Product, Organization, FAQPage and BreadcrumbList schema 🧑‍💻 🌐
- **Organization** (site-wide, in the root layout): `lib/company.ts` → `Organization` with `@id`, `logo`, `address`, `contactPoint`, a cleaned `sameAs`, `parentOrganization` and `foundingDate`. The page-level schemas reference it by `@id`.
- **Product** (every product page): name, description, image, `brand`, `manufacturer` (@id), `category` and `additionalProperty` (capacity range, drive source, COP). Note that **Google only shows Product rich results when there is `offers`, `review` or `aggregateRating`**. Without real prices or reviews, the schema still helps entity understanding and AI answers but won't produce stars. We will not invent reviews.
- **FAQPage:** reuse `ProductFAQ withSchema` on every product page and on the FAQ page. Only one FAQPage block per URL.
- **BreadcrumbList:** `components/ds/Breadcrumbs withSchema` on every non-home page.
- **GTM (you or me with access):** remove any schema tags injected through GTM so they don't duplicate or conflict.
- **Done when:** the Rich Results Test and Schema Markup Validator show 0 errors on one URL of each type, and GSC Enhancements reports start populating.

---

## 4. Sequencing and releases

Each release ships as a separate PR, so it can be checked and rolled back on its own.

| Release | When | Contents | Blocked by |
|---|---|---|---|
| **R1 — Plumbing and quick fixes** | Days 1–2 | Foundations (§1), T1-1, T1-5, T1-8, T1-9 (generated OG images), `seo-check` | Nothing |
| **R2 — Metadata and facts** | Days 3–4 | T1-7, T1-10 (repo side), T1-6 (lastmod), schema groundwork for T2-8 | Title table sign-off, canonical facts |
| **R3 — Content restores** | Days 4–5 | T1-2 redirects, T1-3 listicle, T1-4 llms.txt, T1-6 case studies | GSC 404 export, Pillar 4 text, case study content |
| **Baseline** | End of week 1 | T1-11: Rich Results Test, the GEO prompts, PSI | R1–R3 deployed |
| **R4 — Schema and performance** | Week 2 | T2-8, T2-7 | GTM access (for removing tags) |
| **R5 — Consolidation** | Weeks 2–3 | T2-1, T2-2 (top 50) | GSC performance export, cluster sheet sign-off |
| **R6 — E-E-A-T** | Week 3 | T2-3 | Team bios and consent |
| **R7 — Commercial pages** | Weeks 3–4 | T2-4, T2-5, T2-6 | Prices and assumptions, CCHP data, efficiency figure |

## 5. Measurement

- **Week 0 baseline:** GSC clicks, impressions and position for the 14 product URLs and the top 50 posts, number of indexed pages, PSI mobile, citations for the 7 GEO prompts.
- **Re-check:** at weeks 2, 4 and 8. Expect indexing and metadata effects in 1–3 weeks, consolidation effects in 4–8 weeks, and CrUX LCP after 28 days.
- **Targets:** every product page shows a "Manufacturer in India" title in the SERP, BROAD is cited in at least 3 of the 7 GEO prompts by week 8, mobile LCP is under 2.5 s, and the GSC 404 count is at or below 5.

---

## 6. Inputs needed from you

| # | Needed for | What |
|---|---|---|
| 1 | T1-4 | ~~The Pillar 4 llms.txt rewrite~~ ✅ received; only the installation count is still needed |
| 2 | T1-2, T2-1, T2-2 | **GSC exports**: Pages → Not found (404); Performance → Pages and Queries (last 6 months) |
| 3 | T1-3 | Decision: restore at the **old URL** (recommended) or a new evergreen slug with a 301; who approves competitor claims |
| 4 | T1-10 | **Canonical facts**: ~~installation count~~ ✅ 100+ VAM installations, founding year (2001?), which office is HQ, registered address, primary phone and email |
| 5 | T2-4 | ✅ CCHP = "up to 81%" total energy utilisation (BROAD project data, CCHP.pdf: 42→81%, 43.5→81%, 39→75%); 60–80% applies to VAM only. Applied 2026-10-09. Still to confirm: the CCHP "3–5 year ROI" |
| 6 | T1-6 | Is the content for **JSW Bellary** and **IOCL Vadodara** ready (photos, figures, client permission)? |
| 7 | T1-7 | Confirm the **"10 product pages"** list, and any brand-mandated wording |
| 8 | T2-3 | **Team bios**, photos, LinkedIn URLs and consent |
| 9 | T2-6 | Publishable **₹/TR price bands** and calculator assumptions signed off by engineering |
| 10 | T2-4 | **CCHP case-study** data (site, capacity, savings, and permission to name the client) |
| 11 | T2-5 | Approve the URL for the steam/hot-water owner page |
| 12 | T2-1 | Preference: **410** (recommended) or noindex for off-topic posts; who signs off the cluster sheet |
| 13 | T2-8, T2-7 | **GTM access**, or someone who can remove the schema and unused tags |
| 14 | All | The **release workflow**: branch → PR to `atulraj10481/…`, who merges, and whether Vercel auto-deploys from `main` |
| 15 | T1-9 | Generated OG images (recommended) or images designed by your team |

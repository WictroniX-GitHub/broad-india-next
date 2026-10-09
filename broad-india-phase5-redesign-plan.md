# BROAD India — Phase 5: Site-wide Redesign, Case Study Template & Articles Clean-up

> **Status (2026-09-29): implemented, uncommitted.** All phases were built in one pass, `next build` and `next lint` pass, and the pages were checked in the browser at 390 px and 1366 px. Deviation from §2: JSW, IOCL and ITC keep their existing `/images/...` paths instead of new per-study folders (only Kejriwal moved to `public/case-studies/kejriwal-geotech/`). Broken gallery images on the old JSW page (`/images/chiller-bg.jpg`, `/images/factory-bg.jpg`, which never existed) are gone.

**Scope:** Bring every remaining page onto the design system already used by Home, Category, PDP and Installations. Redesign Category and PDP boldly without leaving that system. Replace the hardcoded case study page with a data-driven template (Kejriwal first, then JSW, IOCL and ITC). Finish the articles → blogs migration.

**Decisions locked (2026-09-29):**
- **Case studies:** 4 in total. Kejriwal gets full content from its PDF. JSW, IOCL and ITC get the same template with their existing content and images, marked `status: "placeholder"`.
- **Case study PDF:** gated behind a short form before download.
- **Category and PDP creativity:** "bold but on-system". New layouts and interactions, same tokens, no parallax or 3D, and within the JS budget in `broad-india-design-system.md` §9.
- **Pages in scope:** About, Careers, Contact, FAQ, Broad Group, Blogs list and detail, Privacy, Terms and 404.
- **Out of scope:** Industries pages, and the article pages themselves (they no longer exist; see §6).

---

## 0. Design-system audit: what the reference pages actually use

| Element | As implemented on Home / Category / PDP / Installations |
|---|---|
| Font | Inter via `next/font` (`app/layout.tsx`). `globals.css` still declares Arial on `body` (dead rule) |
| Brand colour | Hardcoded Tailwind `blue-600` / `blue-700` (buttons, bars, links). Metric band is `bg-blue-700` with blurred `blue-600/800` glow blobs |
| Neutrals | `gray-900` headings, `gray-600 font-light` body, `slate-50` alternate sections, `slate-900` dark heroes |
| Section header | Centred `text-3xl md:text-5xl font-bold tracking-tight` + `w-24 h-1.5 bg-blue-600 rounded-full` bar + `text-lg text-gray-600 font-light` subtitle |
| Container | `container mx-auto px-4 md:px-8 max-w-7xl`, sections `py-16 md:py-20/24` |
| Buttons | `rounded-full bg-blue-600` pill with `shadow-blue-600/30` and `hover:-translate-y-1`. PDP forms use `rounded-xl` |
| Cards | `rounded-2xl/3xl`, `shadow-[0_8px_30px_rgb(0,0,0,0.08)]`, `.card-hover-lift` |
| Motion | Framer Motion `whileInView` fade-up, `FadeInStagger`, count-up (`react-countup`), marquee, Lenis smooth scroll |
| Icons | `lucide-react`, in circle or rounded-square badges |

**Drift to fix:** the CSS tokens (`--primary` is near-black `222 47% 11%`, and `.btn-primary`, `.tag-pill` and `--brand-blue` are defined but rarely used) don't match what the pages render. The result is two parallel systems.

---

## 1. Phase A — Consolidate the system (do first; everything else builds on it)

1. **Tokens** (`app/globals.css`, `tailwind.config.ts`)
   - Add a `brand` colour scale mapped to CSS vars (`brand-50…900`, anchored on today's `blue-600/700`) and `eco` (green). Leave shadcn `--primary` alone so `components/ui/*` doesn't shift.
   - Remove the dead `body { font-family: Arial }` rule.
   - Add `shadow-card` and `shadow-card-hover` to the Tailwind theme (the `0 8px 30px` value used everywhere).
2. **Shared primitives** (new `components/ds/`), extracted from existing markup rather than invented:
   - `Section` (surface: white / slate / dark / brand; standard padding and container)
   - `SectionHeader` (eyebrow, title, bar, subtitle, `align`)
   - `PageHero` with variants `image` (overlay gradient, used by About/Contact/Careers), `dark` (slate-900 gradient, used by case study/Broad Group) and `split` (text + floating product, used by Category/PDP)
   - `Breadcrumbs` (moved out of Category/PDP; emits `BreadcrumbList` JSON-LD)
   - `Button`: extend the existing `components/ui/button.tsx` cva with `brand`, `outline-brand`, `ghost-light` and `pill` sizes
   - `StatStrip` (count-up with SSR fallback value)
   - `IconFeatureCard`
   - `CTABand`
   - `FormField` (floating label, focus ring, inline error) + `useFormspree(endpoint)` hook (async submit, success/error state; replaces the full-page Formspree redirect)
   - `Accordion`: one implementation. Merge `CategoryFAQ` (inside CategoryTemplate) and `ProductFAQ`, with an optional `FAQPage` schema flag.
3. **Shared data** (new `data/caseStudies.ts`, `data/products.ts`). Case study cards are currently copied into `installations/page.tsx`, `installations/[case-study]/page.tsx`, `CategoryTemplate`, `PDPTemplate` and `RecentInstallations`. Replace all five with imports plus filters (`byProduct`, `byIndustry`).
4. Add §10 "Implemented tokens & components" to `broad-india-design-system.md`.

**Done when:** Home, Category, PDP and Installations render visually unchanged using the new primitives (screenshot diff at 375 / 768 / 1440).

---

## 2. Phase B — Case study template (`/installations/[case-study]`)

### Data model (`data/caseStudies.ts`)
```ts
type CaseStudy = {
  slug: string; client: string; industry: string; location: string; year: string;
  headline: string;            // metric-led, e.g. "1,200 TR of cooling from waste CP steam"
  summary: string;
  productLinks: { label: string; href: string }[];
  facts: { label: string; value: string }[];          // capacity, heat source, models…
  results: { value: number; suffix?: string; prefix?: string; label: string }[];
  sections: { id: "application" | "solution" | "value"; title: string; body: string }[];
  images: { workplace: Img; product: Img[]; workflow?: Img };
  document?: { href: string; title: string; size: string };
  status: "complete" | "placeholder";
};
```
The URL and the nav label both stay **Installations** (confirmed). The page becomes a server component with `generateStaticParams`, `generateMetadata`, `notFound()` for unknown slugs (today every slug renders JSW) and `Article` JSON-LD. Only the gallery and download modal are client islands.

### Layout (desktop; stacks on mobile)
```
┌───────────────────────────── HERO (dark) ──────────────────────────────┐
│ ← All installations   [Textile] [Steam VAM]                            │
│ Kejriwal Geotech Pvt Ltd                         ┌── WORKPLACE ──────┐ │
│ 1,200 TR of cooling from waste CP steam          │ img_01 (framed,   │ │
│ Surat, Gujarat · 2019–20                         │ caption: site)    │ │
│ [Download case study ⤓]  [Talk to an engineer]  └───────────────────┘ │
├──────────────── RESULTS STRIP (brand-700, count-up) ───────────────────┤
│ 850 kW saved │ ₹5.5 Cr/yr saved │ 7-month payback │ 1,200 TR │
├──────────────── CONTENT (7 cols) ───────┬──── PRODUCT & INSTALLATION ──┤
│ Textile sector application              │ sticky gallery: img_02 +      │
│ Chiller details (spec table + models)   │ future install photos,        │
│ Unique value to customer                │ thumbnails + lightbox         │
│ [Download full case study ⤓] (gated)    │ → link to product page       │
├──────────────── HOW IT WORKS (full width) ─────────────────────────────┤
│ workflow.png shown AS-IS (existing image, not redrawn), with caption   │
│ and alt text describing the flow                                       │
├──────────────── RELATED CASE STUDIES (3 cards) → CTA band ─────────────┤
```
- **Workplace image:** framed card in the hero, not a full-bleed background. The supplied files are only ~350 px wide and would blur at hero size.
- **Product & installation images:** one sticky gallery, designed to hold N images so more can be dropped in later.
- **Placeholder studies** (JSW, IOCL, ITC) use the same layout. The download button is hidden when `document` is absent, and sections fall back to the existing Challenge/Solution copy.

### Kejriwal content (rewritten from the PDF, facts unchanged)
- **Application:** Textile plants run CP (continuous polymerisation), POY (partially oriented yarn) and FDY (fully drawn yarn) processes. At Kejriwal, the CP stage releases zero-pressure steam (0 kg/cm²g, 100–105 °C) that the plant had no use for. BROAD single-stage steam chillers now use it as their heat source to cool the POY and FDY lines.
- **Chiller details:** Single-stage steam chillers, 800 TR × 1 + 400 TR × 1. Heat source: steam after CP. Models `BDS121XIII-0.0-38/33-7/12-200` and `BDS242XII-0.0-38/33-7/12-400`. Chilled water 12 → 7 °C, cooling water 33 → 38 °C, condensate 95 °C.
- **Value:** ~850 kW of electrical load avoided, ~₹5.5 crore saved on electricity per year, payback in about 7 months.
- Product link: `/vapour-absorption-chiller/single-stage-chiller`. Industry tag: Textile.

### Assets
Move `public/case_study_01/` to `public/case-studies/kejriwal-geotech/`, with slug-safe names (`workplace.png`, `vam-installation.png`, `workflow.png`, `kejriwal-geotech-case-study.pdf`). Do the same for JSW, IOCL and ITC folders using their current images. The existing Kejriwal images are used as supplied (no higher-res replacements); `workflow.png` is used as-is for the process diagram.

### Gated download (`CaseStudyDownload`, client)
- **Modal fields:** name, work email, company, phone (optional), plus a hidden `case_study` field. Submits through `useFormspree` (existing contact form `xqeypqdv`).
- **On success:** trigger the download, show a "Download again" link, and remember the unlock in `localStorage` (wrapped in try/catch) so returning visitors aren't asked again.
- **Soft gate (confirmed):** the PDF stays reachable by direct URL. Add an `X-Robots-Tag: noindex` header for `/case-studies/**/*.pdf` in `next.config.ts` so search engines don't index it.

### Hub (`/installations`)
Driven by `data/caseStudies.ts`. Filter chips come from the data (Textile, Steel, Oil & Gas, FMCG), and a featured card at the top shows the newest complete study (Kejriwal).

---

## 3. Phase C — Category page redesign (`components/CategoryTemplate.tsx`, 5 category pages)

Existing props stay backward-compatible. New props are optional, so pages can adopt them one at a time.
1. **Split hero:** breadcrumb, title and tagline on the left with two CTAs. On the right, the product image floats on a radial brand glow. Three stat chips overlap the hero's bottom edge.
2. **Sticky scroll-spy tab bar:** Overview · How it works · Range · Industries · Case studies · FAQs. The underline slides to the active tab.
3. **"Find your chiller" selector** (new prop `heatSources`): chips for Steam / Hot water / Exhaust / Direct-fired / Solar. Selecting one highlights the matching products in the range grid and dims the rest. Pure state, no new library.
4. **Range as a bento grid:** one hero card for the flagship model, the rest in smaller cards. Hover reveals the key spec.
5. **Animated working principle:** SVG step diagram in the `WhyNonElectric` visual language, with steps lighting up in sequence when scrolled into view.
6. **Comparison table:** the models side by side, with a sticky header row and row highlight.
7. **Industries icon grid**, **case studies** filtered from shared data, the unified accordion and a `CTABand`.

## 4. Phase D — Product detail redesign (`components/PDPTemplate.tsx`, 9 PDPs)

1. **Split hero** with key-spec chips (capacity range, COP, heat source, temperature). CTAs: Request quote and Download catalogue.
2. **Sticky sub-nav**, plus a **sticky RFQ rail** on desktop (≥1280 px) that becomes a fixed bottom bar on mobile. The existing `ProductRFQForm` moves onto `FormField` and `useFormspree`.
3. **Specs strip** with count-up.
4. **Cycle diagram** (heat source → generator → condenser/evaporator → chilled water). It highlights on scroll or hover. For steam products, reuse the case study workflow values as a real-world example.
5. **Model finder:** a capacity slider (TR) filters `modelTable` rows, with a "closest match" highlight.
6. **Features and benefits** as a bento grid; **applications** as an icon grid.
7. **Proof:** case studies filtered by `productLinks` (Kejriwal appears on the single-stage steam chiller page), plus a testimonial slot.
8. **Downloads**, the unified FAQ accordion, and **related products** (siblings in the same category).

---

## 5. Phase E — Remaining pages

All existing copy, form endpoints, metadata and JSON-LD are kept; only the presentation changes. Also remove `"use client"` and `window.scrollTo` where they are only there for scroll reset (Lenis and the Next router already handle this).

| Page | Redesign |
|---|---|
| **About** | `PageHero image` (OurTeam.jpg) · story split with `StatStrip` (since 2001, 100+ VAM installs) · Mission / Vision / Values as `IconFeatureCard`s (reuse `CoreValues`) · timeline built from existing copy only · Broad Group teaser → `/broad-group` · `TrustedClients` marquee · `CTABand` |
| **Careers** | `PageHero image` · "Why BROAD" icon grid · openings as restyled `CareerCard`s (department chips if >1 department) · application form on `FormField` + `useFormspree` (keeps `mnjgpdbl`), inline success state instead of toast + `alert()` |
| **Contact** | `PageHero split` · three contact-method cards (email, two phones; Lucide icons replace emoji) · Surat & Gurugram office cards (address, click-to-call, "Get directions" link) · redesigned `ContactForm` (async submit, inline validation, product-interest select) · short FAQ strip |
| **FAQ** | Hero with search box + category chips filtering the unified accordion · keep/confirm `FAQPage` schema · `CTABand` |
| **Broad Group** | `PageHero dark` · group story · global stats strip · capability icon grid · link-out band |
| **Blogs list** | Featured latest post (large card) · category chips · 3-col `BlogCard` grid (image, tag, title, date, read time) · "Load more" / pagination · newsletter band |
| **Blog detail** | Reading layout (`max-w-prose`, tuned type scale) · byline, date, read time · sticky TOC on ≥lg for long posts · related posts (by category) · product CTA band. **Content untouched.** |
| **Privacy / Terms** | Shared `LegalLayout`: slim hero, sticky TOC, prose typography, "last updated" |
| **404** | Branded dark hero, quick links (Products, Installations, Blogs, Contact) |

---

## 6. Phase F — Articles → Blogs clean-up

### Current state (verified 2026-09-29)
- **Codebase:** `app/articles/*` was deleted in commit `4abc130`. `data/articles.ts` (39 entries) and `types/article.ts` are no longer imported anywhere, so they're dead code.
- **All 39 article slugs already exist in `data/blogs.ts`.** 15 have identical content. 24 differ slightly, mostly by a few characters (likely SEO link edits); `magnetic-bearing-vs-traditional-hvac-compressors…` was expanded.
- **Redirect exists:** `next.config.ts` has `/articles/:slug*` → `/blogs/:slug*` (301).
- **Live site:**
  - `/articles/absorption-chillers` → `/blogs/absorption-chillers` in 1 hop ✔
  - `/articles` → `/blogs` in **2 hops**
  - `/articles/why-vapor-absorption-chillers-are-the-future-of-cooling` → **2 hops**, because it chains through a later merge redirect. `/articles/vapour-absorption-machine-vam-a-smart-alternative…` behaves the same way.
- **❗ The dates were not preserved.** All 39 migrated posts are re-dated **Aug 1–28, 2026** in `blogs.ts`; the originals are Jan–Sep 2025. `seo-plan-july.md` already flags re-dated and future-dated posts as a P0 data-integrity issue.

### Steps (decided 2026-09-29: blog dates stay as they are)
1. **Dates:** no change. The migrated posts keep their current `blogs.ts` dates, and blog content is untouched.
2. **Redirects:** add an explicit `/articles` → `/blogs`, and point the two merged slugs straight at their final `/blogs/…` target so every old URL is one 301 hop. Keep the generic `/articles/:slug*` rule last.
3. **Remove dead code:** delete `data/articles.ts` and `types/article.ts` (not imported anywhere).
4. **Verify:** after `next build`, run a curl loop over all 39 `/articles/<slug>` URLs and `/articles`. Each must return one 301 → 200. Check `sitemap.ts` contains no `/articles` URLs.

---

## 7. Sequencing & verification

| Order | Work | Why this order |
|---|---|---|
| 1 | Phase F (articles) | Small and independent; fixes the redirect chains |
| 2 | Phase A (system) | Everything else depends on it |
| 3 | Phase B (case studies) | Unblocks the data used by the Category/PDP proof sections |
| 4 | Phase E (Contact, About, Careers first, then the rest) | High-traffic, low-risk template work |
| 5 | Phases C + D (Category, PDP) | Largest change; built on the finished primitives and data |

**Verification for each phase:**
- `next build` + `next lint` pass.
- Browser check at 375 / 768 / 1440 widths.
- Form submissions tested against Formspree.
- Lighthouse performance and CLS don't regress on Home, one Category page and one PDP.
- JSON-LD validated (Rich Results test).
- All phases are done in one pass. Nothing is committed; the user reviews and commits manually.

---

## 8. Resolved decisions (2026-09-29)

1. **Savings wording:** ₹5.5 crore/year, and "850 kW of electrical load" instead of "850 kW per hour".
2. **Gated form:** submits to the existing Formspree contact form `xqeypqdv`, with a hidden `case_study` field so these leads can be told apart.
3. **Gate:** soft gate; PDF reachable by direct link, `noindex` via `X-Robots-Tag`.
4. **Naming:** "Installations" for both URLs and labels.
5. **JSW, IOCL, ITC:** download button hidden until PDFs are supplied.
6. **Images:** use the existing Kejriwal images. The process diagram is the existing `workflow.png`, shown as an image.
7. **Placeholder studies (JSW, IOCL, ITC):** live and linked, but `robots: noindex` and left out of `sitemap.ts` while `status === "placeholder"`. Flipping the status to `"complete"` makes them indexable automatically.
8. **Category/PDP hero images:** download and self-host the current broadusa.com images (under `public/images/products/`), drop the hotlinks and their `remotePatterns` entries, and show them in a framed card instead of a floating cut-out so small source images still look fine. Upgrade later if cut-outs are supplied.
9. **Home page:** `RecentInstallations` reads the 3 latest studies from `data/caseStudies.ts` with Kejriwal first (Kejriwal, JSW, IOCL). ITC stays on the Installations hub.
10. **Articles:** migrated posts keep their current blog dates (no restore).
11. **Delivery:** all phases in one pass, in the order in §7; no commits by Claude.

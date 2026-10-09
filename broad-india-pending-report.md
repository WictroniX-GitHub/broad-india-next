# BROAD India — Phases 1–4: Pending Items Report

**Date:** 2026-09-29 · **Checked against:** the current working tree (Phase 5 redesign included, uncommitted)
**Sources:** `broad-india-phase1-existing-sections.md`, `…phase2-new-home-sections.md`, `…phase3-category-pdp-sections.md`, `…phase4-industries-installations.md`

**Legend:** ✅ Done · 🟡 Partial · ❌ Pending · ❓ Decision needed

> **Update (2026-09-29, quick-fixes round):** catalogues linked, capacity field on product quote forms, Impact count-up, Installations product filter, exclusive FAQ accordions, AMC section dropped. **Decisions:** the master industry list is Home's 9 industries (Petrochemical & Refinery, Pharmaceuticals & Chemical, Power Generation (CCHP), Food & Beverage, Textile, Hospitals & Medical, Commercial Buildings & Hotels, Data Centers & Green Buildings, Aviation & Defense), to be applied when the Industry pages are built. Newsletter sign-up is not needed for now.

## Summary

| Phase | ✅ | 🟡 | ❌ | ❓ |
|---|---|---|---|---|
| 1 — Existing sections (Home + PDP) | 12 | 3 | 1 | 0 |
| 2 — New Home sections | 2 | 4 | 0 | 1 |
| 3 — Category & PDP new sections | 8 | 3 | 0 | 1 |
| 4 — Industries & Installations | 4 | 3 | 3 | 0 |

**Biggest gaps**
1. **Individual Industry pages (Phase 4).** `/industries/[industry]` ignores the URL and renders the same mock page for every industry. There is no per-industry content, product filtering or case-study filtering, and the 6 URLs are near-duplicates in the sitemap.
2. **Industry list mismatch.** The Industries hub lists 6 (Industrial, Commercial, Healthcare, Data Centers, Retail, Hospitality). The Home accordion lists 9 (Petrochemical, Pharma, Textile…). Case studies use 4 (Textile, Steel, Oil & Gas, FMCG). No link connects them, so the Product ⇄ Industry ⇄ Installation triangle is not closed.
3. **Spec sheets (Phase 3).** Catalogues are now linked on 8 product pages, but the 26 named spec sheets / brochures still have no files ("on request"), and Single-Stage, Solar and Packaged have no catalogue.
4. **Newsletter (Phase 2).** There is no email sign-up form and no archive page with a permanent URL per issue; only the carousel exists.

---

## Phase 1 — Existing sections

### Home

| Section | Status | Evidence / gap |
|---|---|---|
| Hero carousel | ✅ | 3 slides with distinct headlines, Ken-Burns zoom, scroll-cue bounce (`HomePageCarousel.tsx`) |
| Intro + stats band | ✅ | Numbers are static strings, so they never render blank (original bug fixed). No count-up here; the Impact band covers that |
| Sustainability icon block | ✅ | Lucide icons (Leaf / Recycle / Globe) replace emoji (`Sustainable.tsx`) |
| Product cards | ✅ | 5 cards linking to all categories (`SpecialistsProduct.tsx`); broadusa images now self-hosted |
| Recent Installations | ✅ | Shared case-study data, Kejriwal first, real names, "Read case study" |
| Core Values | 🟡 | Covered by `MissionFocus.tsx` (Lucide icons). The alternating left/right layout suggested in the doc was not used, and `CoreValues.tsx` is dead code |
| Trusted Clients marquee | 🟡 | CSS marquee, pause on hover and grayscale-to-colour are done. The IOCL logo is still hotlinked from `download.logo.wine` |
| Applications (industry icons) | 🟡 | Replaced by `IndustriesAccordion` (9 industries). The doc wants each item clickable to its Industry page; there are **0 links**, blocked by the Phase 4 industry pages |
| Latest Blogs | ✅ | Blog cards with category and read time from `data/blogs.ts`. Stock-image replacement is a content task (flagged in the doc) |
| Footer CTA | ❌ | The "sticky-reveal contact strip" was never built; the footer has no sticky pattern. A CTA band exists on the new pages |

### Product Detail Page

| Section | Status | Evidence / gap |
|---|---|---|
| Single H1 / no duplicate heading | ✅ | The template renders one H1 (title), with the tagline styled separately |
| Breadcrumb | ✅ | Shared `Breadcrumbs` with JSON-LD |
| Specs strip + feature list | ✅ | Hero spec chips plus a "Performance at a glance" strip |
| Standardised image container | ✅ | Compact `ProductMedia` frame (380 px) |
| Key Features / Applications / Benefits | ✅ | Icon-badge grids and a benefits bento, distinct styling for each |
| CTA banner | ✅ | Replaced by the product RFQ plus a sticky quote rail / mobile bar |

---

## Phase 2 — New Home sections

| Section | Status | Evidence / gap |
|---|---|---|
| 1. Impact & Metrics (expanded) | 🟡 | Count-up **added** (final values stay in the SSR HTML). Still **4** metrics vs the doc's 5–6; extra verified figures needed from BROAD |
| 2. AMC Installations Snapshot | ✅ | **Dropped by decision** (2026-09-29): data unverified, so the unused component was deleted |
| 3. Industries text accordion | 🟡 | Built (9 industries, expand/collapse). The "Learn more about [Industry]" links are missing (depend on Phase 4) |
| 4. Events & Exhibitions gallery | 🟡 | 4 events with titles only; the doc asks for 6–8 with **event name, city and year** captions. Open question from the doc still unresolved: trade shows vs site events |
| 5. Newsletter | 🟡 | Issue carousel plus reader (now includes August). **Missing:** email sign-up form, and an archive page giving each issue a permanent URL |
| 6. "Why Non-Electric Cooling" explainer | ✅ | `WhyNonElectric.tsx`: 4 steps with an animated connector line |
| Section order | ❓ | The doc recommends Impact → Why Non-Electric → AMC → Industries → Events → Newsletter. The current Home order puts Sustainable, Specialists, Installations, Mission and Clients in between. This is an intent check, not a bug |

---

## Phase 3 — Category & PDP new sections

### Category

| Section | Status | Evidence / gap |
|---|---|---|
| Sticky in-page nav + scroll-spy | ✅ | `ScrollSpyNav` |
| Industries Experience | 🟡 | Grid is done. The per-industry links to Industry pages are missing (only an "Explore industries" button to the hub) |
| FAQs | ✅ | Accordion with FAQ schema; **one open at a time** via native `<details name>` (also on /faq) |
| Case Studies | ✅ | `ProofSection` matches by URL and links to case-study pages |

### Product Detail Page

| Section | Status | Evidence / gap |
|---|---|---|
| Specs strip + working-principle diagram | ✅ | `StatStrip` plus `WorkingPrinciple` (sequential highlight). Absorption chillers only; the heat pump, CCHP, magnetic bearing and pumpsets pages have no diagram |
| Model / variant table | ✅ | `ModelFinder` with a capacity slider and row highlight. Sticky header inside long tables is not applicable (tables are short) |
| Industries Experience (product-level) | 🟡 | "Applications" grid exists but is not linked to Industry pages |
| FAQs | ✅ | Per-product accordion |
| Case-study tie-in | ✅ | e.g. Kejriwal appears on the Single-Stage page |
| Product RFQ form | ✅ | Product pre-filled, **Company + Required capacity fields added**, async submit with success state. (No error "shake"; native inline validation instead) |
| Spec sheet / CAD downloads | 🟡 | **Catalogues now linked on 8 of 11 product pages** (`nonElec.pdf` → Direct-Fired, Two-Stage, Waste-Heat, Multi-Energy; `broadElectricChiller.pdf`, `CCHP.pdf`, `heatpump.pdf`, `pumpSet.pdf`). Single-Stage, Solar and Packaged have no matching catalogue. The 26 named spec sheets still have no files ("on request") |
| URL pattern | ❓ | The docs assume `/products/[category]/[product]`; the site uses `/[category]/[product]`. Phase 1 flagged this for reconciliation; current decision is to keep existing URLs (SEO) |

---

## Phase 4 — Industries & Installations

| Section | Status | Evidence / gap |
|---|---|---|
| Industries hub | 🟡 | 6 cards with icons exist but were not moved onto the new design system, and the list doesn't match Home or case studies |
| Industry page: hero / why / products / case studies / FAQs | ❌ | One generic mock page for all slugs (`"use client"`, hardcoded JSW/IOCL cards and 2 products, no metadata per industry) |
| Industry ⇄ product filtering | ❌ | No industry field on products (`data/products.ts`) |
| Industry ⇄ case-study filtering | ❌ | Case-study `industry` values (Textile, Steel…) don't map to hub slugs |
| Installations hub: filter chips + animated grid | ✅ | Filter by industry with counts, featured study |
| Installations hub: filter by product category | ✅ | **Product filter added**, combined with industry, with live counts and a clear-filters state |
| Hub-level FAQs | ✅ | 3 FAQs |
| Case study: snapshot / challenge / solution / results / photos | ✅ | Template complete for Kejriwal. JSW, IOCL and ITC are placeholders (noindex) awaiting content and PDFs. IOCL has **no results metrics** |
| Case study: client logo | 🟡 | The doc asks for "client name/logo". Names are shown; no logos |
| Related case studies | 🟡 | Shows "the other 3"; the doc asks for same industry or product. With 4 studies it makes no difference yet |

---

## Also found (outside the four docs)

- **Duplicate blog URL:** two posts share `/blogs/absorption-chillers`; the second ("Revolutionizing Cooling with Absorption Chillers") is unreachable.
- **Dead code:** `CoreValues`, `Applications`, `Figures`, `Modal`, `PromoPopup` (kept on purpose).
- **Home has two `<h1>`s** (carousel plus a hidden one), pre-existing.

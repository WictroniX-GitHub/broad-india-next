# BROAD India — Phase 3: New Category & Product Detail Page Sections

**Scope:** New sections only — existing sections (stats bar, product grid, downloads, enquiry CTA on Category; the sections covered in Phase 1 on PDP) are not repeated here.

---

## Category Page (`/products/[category]`) — New Sections

### 1. Sticky in-page navigation

| | |
|---|---|
| **Purpose** | Keep long category pages navigable: Overview / How it Works / Models / Industries / Case Studies / FAQs |
| **Format** | Horizontal sticky tab bar, activates once the user scrolls past the hero |
| **Components** | In-page tab nav (Design System) |
| **Micro-interactions** | Underline slides to the active tab; scroll-spy auto-highlights based on scroll position; smooth-scroll on click |

### 2. Industries Experience

| | |
|---|---|
| **Purpose** | Prove category-level track record by sector |
| **Format** | Icon/card grid, filtered to the industries relevant to this category only |
| **Components** | Icon-badge (Lucide) + short proof line, reused from the Applications/Core Values pattern |
| **Micro-interactions** | Staggered scroll-reveal, hover lift |
| **Interlinking** | → Industry pages (Phase 4), filtered to this category |

### 3. FAQs

| | |
|---|---|
| **Purpose** | Reduce sales friction, aid SEO — 6–8 questions, drafted content already exists (Appendix A, earlier document) |
| **Format** | Accordion |
| **Components** | FAQ accordion item (Design System) |
| **Micro-interactions** | Height/opacity expand, chevron rotate 180°, only one item open at a time for a cleaner scroll experience |

### 4. Case Studies / Installations

| | |
|---|---|
| **Purpose** | Category-specific proof, now with real client names (confirmed policy) |
| **Format** | Card grid, 2–3 cards |
| **Components** | Installation card (client name/badge, headline metric, industry tag) |
| **Micro-interactions** | Hover lift, "View full case study" link-reveal on hover |
| **Interlinking** | → Installation pages (Phase 4), filtered to this category |

---

## Product Detail Page (`/products/[category]/[product]`) — New Sections

### 1. Key specs strip + working principle diagram

| | |
|---|---|
| **Purpose** | Immediate scannable technical identification, plus a simple explanation of how this specific model works |
| **Format** | Specs strip (capacity range, COP, energy source, temp range, footprint) + a 3–4 step cycle diagram (heat source → generator → condenser/evaporator → chilled output) |
| **Components** | Stat-card row (compact version of the homepage Impact section); SVG step-node diagram, same visual language as the "Why Non-Electric Cooling" explainer from Phase 2 for consistency |
| **Micro-interactions** | Specs count up on scroll-into-view; diagram steps highlight sequentially on scroll or on hover |

### 2. Model/variant spec table

| | |
|---|---|
| **Purpose** | Core spec reference for engineers — model number × capacity (RT/kW) × dimensions × energy input |
| **Format** | Data table with sticky header row and hover row highlight |
| **Components** | Comparison table (Design System) |
| **Micro-interactions** | Row hover highlight; sticky header within the table on scroll for long tables |
| **Note** | Not every product has multiple variants — the live "Packaged Chiller" page, for example, currently ships one configuration. For single-variant products, collapse this to the specs-strip format above rather than an empty/near-empty table. |

### 3. Industries Experience

| | |
|---|---|
| **Purpose** | Product-level proof by sector |
| **Format** | Same icon/card grid pattern as the category version, scoped to this specific product |
| **Micro-interactions** | Staggered reveal, hover lift |
| **Interlinking** | → Industry pages (Phase 4), filtered to this product |

### 4. FAQs

| | |
|---|---|
| **Purpose** | Product-specific technical/commercial questions — 5–6 questions, drafted content already exists (Appendix A) |
| **Format / Components / Micro-interactions** | Same accordion pattern as Category FAQs |

### 5. Case study / installation tie-in

| | |
|---|---|
| **Purpose** | Direct proof for this exact SKU, real client names |
| **Format** | 1–2 cards, same installation-card component |
| **Interlinking** | → Installation pages (Phase 4), filtered to this exact product |

### 6. Product-specific RFQ form

| | |
|---|---|
| **Purpose** | Convert a warm technical lead without routing through the generic Contact page |
| **Format** | Pre-filled product name field + capacity requirement field + contact details |
| **Components** | Form field component — floating label, animated focus ring, inline validation |
| **Micro-interactions** | Label float on focus, submit success micro-feedback (checkmark/confirmation state), inline validation error state (border color + shake) |

### 7. Spec sheet / CAD downloads

| | |
|---|---|
| **Purpose** | Give engineers/procurement offline reference material |
| **Format** | Download cards — file icon, file name, file size, download button |
| **Components** | Simple download-card using Lucide file/download icons |
| **Micro-interactions** | Download icon animates on hover (arrow-down motion) |

---

## Shared components across Category & PDP

Nearly every new section here reuses a component already defined for Home or established in the Design System — accordion (FAQs), installation card (case studies), icon-badge grid (industries experience), stat-card (specs strip). Very little net-new component work is required in Phase 3; it's mostly applying existing patterns to new content.

## Build order within Phase 3

Recommend building Category and PDP in parallel rather than sequentially, since they share components: **sticky nav → specs strip/diagram → model table → industries experience → case studies → FAQs → RFQ form/downloads.**

# BROAD India — Phase 4: Industries & Installations Pages

**Scope:** Industries hub + individual industry pages, Installations hub + individual case study pages. This is the final phase — it completes the Product ⇄ Industry ⇄ Installation interlinking triangle established across Phases 1–3.

---

## Industries Hub (`/industries`)

| | |
|---|---|
| **Purpose** | Entry point to browse all industries served |
| **Format** | Grid of industry cards (6+), icon + name + one-line challenge framing |
| **Components** | Icon-badge (Lucide) wrapped in a card, same visual language as the Applications block from Phase 1 |
| **Micro-interactions** | Staggered scroll-reveal, hover lift |
| **Interlinking** | → individual Industry pages |

---

## Individual Industry Page (`/industries/[industry]`)

### 1. Hero
| | |
|---|---|
| **Purpose** | Frame this industry's specific cooling/heating pain point |
| **Format** | Simple banner — industry name + headline, no carousel needed here |
| **Micro-interactions** | Fade-in on load |

### 2. Why [industry] needs non-electric cooling
| | |
|---|---|
| **Purpose** | Sector-specific problem/solution framing |
| **Format** | Short editorial block (2–3 paragraphs), optionally with 2–3 supporting points in the icon-list pattern already used for Core Values |
| **Micro-interactions** | Scroll-reveal fade/slide-up |

### 3. Recommended products
| | |
|---|---|
| **Purpose** | Route to the right category/product for this sector |
| **Format** | Card grid, reusing the product-card component |
| **Interlinking** | → Category & Product Detail pages, filtered to this industry |

### 4. Case studies from this industry
| | |
|---|---|
| **Purpose** | Sector-specific proof, real client names |
| **Format** | Card grid, reusing the installation-card component |
| **Interlinking** | → Installation pages, filtered to this industry |

### 5. FAQs
| | |
|---|---|
| **Purpose** | Sector-specific questions (compliance, ROI timelines, infrastructure integration) — 4–6 questions, drafted content already exists (Appendix A) |
| **Format** | Accordion, same component as Category/PDP FAQs |

---

## Installations Hub (`/installations`)

### Filter bar + case study grid

| | |
|---|---|
| **Purpose** | Let visitors browse installations by industry or product category |
| **Format** | Chip-style filter bar above a card grid |
| **Components** | Filter chip (Design System), installation card |
| **Micro-interactions** | Chip fill + micro-bounce on select; grid re-flows with a fade/reorder transition when a filter changes, rather than a hard reload |

### Hub-level FAQs

| | |
|---|---|
| **Purpose** | General process questions (how installations are executed, timelines, AMC/service) — kept at hub level to avoid repeating the same FAQ on every case study |
| **Format** | Accordion, drafted content already exists (Appendix A) |

---

## Individual Case Study Page (`/installations/[case-study]`)

### 1. Project snapshot
| | |
|---|---|
| **Purpose** | Immediate context |
| **Format** | Header block — industry tag, product tag, headline metric, client name/logo (real names, per confirmed policy) |
| **Micro-interactions** | Fade-in on load |

### 2. Challenge
| | |
|---|---|
| **Format** | Short copy, 2–3 sentences |

### 3. Solution
| | |
|---|---|
| **Format** | Short copy naming the specific product/model used |
| **Interlinking** | → the exact Product Detail page used |

### 4. Results
| | |
|---|---|
| **Format** | Stat block, 2–3 headline metrics |
| **Components** | Stat-card, reused from the Home Impact section |
| **Micro-interactions** | Count-up on scroll-into-view |

### 5. Photos
| | |
|---|---|
| **Format** | Image gallery |
| **Components** | Same gallery/lightbox component built for the Phase 2 events gallery |

### 6. Related case studies
| | |
|---|---|
| **Format** | Card row (2–3), same industry or product |
| **Micro-interactions** | Hover lift |
| **Interlinking** | → other Installation pages |

---

## Shared components across Phase 4

Every component used here — card, accordion, filter chip, stat-card, gallery/lightbox — was already established in earlier phases. Phase 4 is almost entirely composition, not new component design, which keeps build effort proportionate to how late it sits in the plan.

## Build order within Phase 4

**Installations hub + case study template first** (it's what Category, PDP, and Industry pages all link into), **then Industries hub + individual pages** last, since they pull in both recommended products and case studies that need to already exist.

---

## Plan complete

This closes out all four phases. Once Phase 4 ships, every page type — Home, Category, Product Detail, Industries, Installations — has both its content structure (from the earlier site spec) and its visual/interaction design (from these four documents), fully interlinked in the Product ⇄ Industry ⇄ Installation triangle.

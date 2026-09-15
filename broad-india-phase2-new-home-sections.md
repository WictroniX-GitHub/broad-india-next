# BROAD India — Phase 2: New Home Page Sections

**Scope:** The six new Home page sections from the Final Plan, designed using the components, icons, effects, and micro-interactions defined in the Design System document.

**Note on overlap:** the Final Plan lists "metrics/impact stat band" as new, but Phase 1 already fixed and styled the existing 3-stat intro band. Treating Phase 2's version as an **expanded, standalone Impact section** further down the page (more metrics, larger format) rather than a duplicate of the Phase 1 fix — flag if you meant something else.

---

## 1. Impact & Metrics (expanded)

| | |
|---|---|
| **Purpose** | Deeper credibility proof beyond the compact intro stat row from Phase 1 |
| **Format** | Full-width band, 5–6 stat-cards (e.g. MW capacity installed, CO₂e reduced, projects completed, states/industries served, years in India, installations under active AMC) |
| **Components** | Stat-card (Lucide icon + animated number + label), from the Design System |
| **Micro-interactions** | Staggered count-up on scroll-into-view (each card delays slightly after the previous); card hover lift |
| **Interlinking** | None required — proof section, standalone |

---

## 2. AMC Installations Snapshot

| | |
|---|---|
| **Purpose** | Show the scale of ongoing serviced relationships (Annual Maintenance Contract), not just recent deployments — with real client names |
| **Format** | Summary stat line ("X+ installations under active AMC nationwide") + card grid of named clients (name, location, product category, year) |
| **Components** | Installation-card component (reused from Phase 1's Recent Installations), AMC status badge |
| **Micro-interactions** | Card hover lift, "View all installations" link-reveal on hover |
| **Interlinking** | "View all installations" → Installations hub (Phase 4) |

---

## 3. Industries — Name & Use-Case (Text)

| | |
|---|---|
| **Purpose** | Deeper, text-based industry proof — distinct from the icon-only "Applications" grid already styled in Phase 1 |
| **Format** | Vertical list of industry names functioning as tabs/accordion triggers; selecting one reveals a short use-case paragraph for that sector |
| **Components** | Reuses the FAQ accordion mechanic from the Design System for consistency (same expand/collapse pattern, different content) |
| **Micro-interactions** | Smooth height/opacity expand on select, active-item highlight, chevron rotate |
| **Interlinking** | "Learn more about [Industry]" link once Industry pages exist (Phase 4) |

---

## 4. Events & Exhibitions Gallery

| | |
|---|---|
| **Purpose** | Show active market presence — trade shows, exhibitions, or site events |
| **Format** | Photo grid/carousel, 6–8 images with captions (event name, city, year) |
| **Components** | Lightweight gallery/lightbox component (CSS scroll-snap, no heavy carousel library) |
| **Micro-interactions** | Thumbnail hover zoom, lightbox fade-in/out on open, horizontal scroll-snap on mobile |
| **Interlinking** | None required, or optional link to an events archive page if one is added later |

**Still open from earlier:** whether this gallery covers trade shows/exhibitions, site commissioning events, or both — affects what photos/captions to source.

---

## 5. Newsletter

| | |
|---|---|
| **Purpose** | Capture recurring engagement, surface the existing monthly newsletter |
| **Format** | Two-part: (a) email signup form, (b) latest issue preview card (cover image, title, one-line summary, read/download CTA) |
| **Components** | Form field component (floating label, animated focus ring), card component for the issue preview |
| **Micro-interactions** | Label float on focus, inline success micro-feedback on submit (e.g. checkmark animation), issue-preview card hover lift |
| **Interlinking** | Issue preview → newsletter archive page (recommend adding one so each issue gets a permanent URL) |

---

## 6. "Why Non-Electric Cooling" Explainer

| | |
|---|---|
| **Purpose** | Educate the buyer on how VAM works before pitching product — the single highest-leverage content addition for a technical buyer who doesn't yet understand the technology |
| **Format** | 3–4 step visual: waste heat → absorption cycle → chilled water → savings, each step with a short label and one-line description |
| **Components** | Numbered step nodes connected by a simple SVG line — no illustration assets needed |
| **Micro-interactions** | Steps reveal sequentially as the user scrolls (staggered fade/slide-in); connecting line "draws in" via SVG stroke animation, triggered once per page load |
| **Interlinking** | Optional "See it in action" link to a Category page once available |

---

## Build order within Phase 2

Recommend this sequence, roughly matching page position top-to-bottom and dependency: **Impact & Metrics → Why Non-Electric Cooling → AMC Installations Snapshot → Industries (text) → Events Gallery → Newsletter.** The explainer works best directly after the hero/impact stats (educate early), while the newsletter sits naturally near the bottom before the footer.

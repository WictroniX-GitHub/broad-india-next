# BROAD India — Design System

**Purpose:** Foundational component, icon, effect, and micro-interaction library referenced by all four redesign phases. No added heavy assets (3D, Lottie, video, extra stock imagery) — everything here is CSS/SVG/lightweight-JS driven.

**Content policy:** Client/company names are shown everywhere on the site — Home, Category, PDP, Industries, and Installations all use real client names and logos where available. No anonymization anywhere.

---

## 1. Current Design Audit

Based on a structural review of broadindia.com as it stands today:

- **Icons are plain emoji** throughout (🌿 ♻️ 🌍 ⚡ 🌱 🔬 🏭 🍎 🧵 🏥 🏢 💻) — renders inconsistently across OS/browsers, carries no brand color, and reads as template-grade for a B2B industrial brand.
- **Imagery is mixed-source** — some real product photography, some images hotlinked directly from the sister site (broadusa.com), and blog thumbnails pulled from Unsplash/Economic Times — off-brand stock with no ownership.
- **Stats band renders blank** ("+ MW HVAC capacity installed" with no number) — almost certainly a client-side counter with no server-rendered fallback value. Needs a functional fix independent of the visual redesign.
- **Cards are flat** — image + title + 1–2 lines, no visible hover state, shadow, or depth treatment.
- **Hero carousel has weak late-slide copy** (e.g. "Want to know more?" as a full headline) — a content gap, not just visual.
- **Layout is uniform single-column, full-width stacked sections** — no alternating rhythm or visual variation between sections.
- **No sticky/scroll-aware navigation, no visible scroll or hover micro-interactions anywhere on the page today.**
- Client names and logos are **already shown today** in "Recent Installations" and "Trusted Clients" — confirms the current instruction to keep company names visible is a continuation of the existing approach, not a new exposure.

*(This audit is based on a structural/content-level page fetch. Exact hex values, spacing tokens, and font-rendering details should be confirmed against a live visual pass or the brand's logo/style file before final styling is locked.)*

---

## 2. Design Principles

1. **Industrial confidence, not template blandness** — the site should read as a serious engineering brand, on par with the Thermax-tier benchmark, not a generic agency template.
2. **Performance first** — every visual flourish is justified against load time. No 3D, no Lottie/JSON animation files, no autoplay hero video.
3. **One system, reused everywhere** — a single icon set, a single card family, a single motion language, applied consistently across Home, Category, PDP, Industries, and Installations.

---

## 3. Color System (direction — confirm exact hex against brand/logo file)

| Role | Suggested direction | Used for |
|---|---|---|
| Primary (brand) | Deep industrial blue | Header, primary buttons, links, active states |
| Secondary (sustainability accent) | Energy/eco green | Sustainability stats, carbon/impact callouts, success states |
| Neutral scale | Cool grays, 5–6 steps | Body text, borders, backgrounds, card surfaces |
| Surface | Off-white / very light gray | Section backgrounds (alternating with white for rhythm) |
| Semantic | Amber (warning/attention), Red (error, form validation) | Form feedback only |

---

## 4. Typography System

- **Recommended typeface:** Inter (or a similar modern grotesk) for both headings and body — free, highly legible at small technical-spec sizes, wide weight range, web-optimized.
- **Scale:** H1 (hero) → H2 (section titles) → H3 (card/subsection titles) → Body → Caption/label, each with a defined weight (600–700 for headings, 400–500 for body).
- **Line length:** cap body paragraphs at ~65–75 characters for readability, especially in technical spec/FAQ content.

---

## 5. Component Library

| Component | Description | Used on |
|---|---|---|
| Primary/Secondary/Ghost buttons | Three states, all with hover micro-interaction (not color-only) | Site-wide |
| Product card | Image, title, 1-liner, hover lift + accent border | Home, Category |
| Stat card | Icon, large animated number, label | Home, Category, PDP |
| Installation/case-study card | Client badge, metric-led headline, industry tag | Home, Installations, Category, PDP |
| Blog/insight card | Image, category tag, title, read time | Home, Insights |
| FAQ accordion item | Expand/collapse with height animation, chevron rotate | Category, PDP, Industries, Installations |
| Sticky header nav | Scroll-shrink, mega-menu for Products, active-link underline | Site-wide |
| In-page tab nav | Animated underline, scroll-spy highlighting | Category, PDP |
| Form fields | Floating label, animated focus ring, inline validation | Contact, RFQ, Newsletter signup |
| Tag/badge | Pill component, consistent color coding by type (industry vs. energy source) | Category, PDP, Industries |
| Comparison table | Sticky header row, row hover highlight | Category |
| Filter chip | Active-state fill + micro-bounce on select | Installations hub |
| Lightbox/gallery | Lightweight, CSS scroll-snap based — no heavy carousel library | Events gallery, case study photos |

---

## 6. Icon System

- Replace all emoji with a single consistent **SVG icon library** — recommend **Lucide** (open-source, tree-shakeable, `lucide-react` available for your Next.js/TypeScript stack, near-zero weight per icon since it's inline SVG, no image requests).
- Icons inherit brand color via `currentColor`; two standard sizes — 20px inline, 32px feature/badge icons.
- Consistent icon-in-circle badge pattern reused across Core Values, Applications, and sustainability blocks.

---

## 7. Effects (subtle, performance-conscious)

- Soft elevation shadows (2–3 levels) for card depth instead of hard borders.
- CSS gradient overlays on hero images for text legibility — no new image assets required.
- `backdrop-filter` blur used sparingly (e.g. sticky nav background on scroll) — no added assets.
- Hover glow/accent border on interactive cards via CSS `box-shadow` transitions.
- No parallax scrolling on large backgrounds — industrial B2B audiences often browse on older hardware/slower connections; skip or keep to a capped, lightweight transform if used at all.

---

## 8. Micro-Interactions (dynamic, lightweight — no extra images, no heavy models)

| Interaction | Where | How |
|---|---|---|
| Animated count-up | Stats band | Intersection Observer triggers count-up on scroll-into-view; **static SSR fallback number** so it's never blank pre-hydration (fixes the current bug) |
| Scroll-reveal fade/slide-up | All major sections | Intersection Observer + CSS transition, no scroll library |
| Card hover lift | Product, installation, blog cards | `translateY(-4px)` + shadow deepen + `scale(1.02)`, 150–200ms ease |
| Button hover/press | All CTAs | Scale + shadow on hover, slight scale-down on press for tactile feel |
| Accordion expand | FAQs | Smooth height/opacity transition, chevron rotates 180° |
| Sticky nav response | Header | Background opacity/blur increases on scroll, slight shrink, active-link underline slides |
| Tab underline slide | Category/PDP in-page nav | Underline indicator animates to active tab; scroll-spy auto-highlights by scroll position |
| Lazy-load fade-in | All images | Native `loading="lazy"` + CSS opacity transition |
| Logo marquee | Trusted Clients band | Pure CSS auto-scroll animation, pause on hover, grayscale-to-color on hover |
| Form field focus | Contact/RFQ/Newsletter forms | Label float animation, inline success/error micro-feedback |
| Filter chip select | Installations hub | Fill animation + micro-bounce on active state |

---

## 9. Technical Constraints & Recommended Libraries

- **Excluded:** 3D/WebGL/GLTF models, Lottie/After Effects JSON animation, autoplay hero video, additional stock imagery beyond what's needed for real product/installation photography.
- **Motion:** CSS transitions/transforms + Intersection Observer for most interactions; **Framer Motion** (React, tree-shakeable) for anything needing sequencing, which fits your existing Next.js/Tailwind stack without adding significant weight.
- **Icons:** `lucide-react` — inline SVG, effectively zero added page weight per icon.
- **Counters:** a small custom hook (~1KB) rather than a full animation library.
- **Budget:** keep total added JS for all interactions under roughly 10–15KB gzipped to preserve current load performance.

# BROAD India — Phase 1: Existing Sections Redesign

**Scope:** Visual/interaction redesign of sections that already exist on the live site today — no new content sections (those are Phases 2–4). Applies the components, icons, effects, and micro-interactions defined in the Design System document.

**Scope note on Home:** Confirmed — this covers all currently-live Home sections (hero, stats band, sustainability icon block, product cards, Recent Installations, Core Values, Trusted Clients, Applications, Latest Blogs, footer CTA), not just the four named in the Final Plan.

**Scope note on PDP:** Based on the live page at `/vapour-absorption-chiller/packaged-chiller`. Note the current URL pattern is `/[category]/[product]`, not `/products/[category]/[product]` as proposed in the architecture document — worth reconciling before Phase 3/4 build.

---

## Home Page — Existing Sections

| Section | Current state | Redesign treatment |
|---|---|---|
| Hero carousel | Multi-slide carousel; later slides have thin headline copy ("Want to know more?") | Trim to 2–3 slides with distinct, stronger headlines per slide; slow CSS Ken-Burns zoom on background (no video weight); headline fade/slide-in on transition; primary-button CTA with hover micro-interaction; scroll-cue indicator with gentle bounce |
| Intro + stats band | Intro paragraph + 3 stat items currently rendering blank | Fix with SSR fallback numbers; wrap each in a stat-card component (icon, animated count-up on scroll-into-view, label); card-level hover lift |
| Sustainability icon block | 3 emoji + text items | Replace emoji with Lucide icons in brand-color circular badges; staggered scroll-reveal (each item fades/slides in with slight delay); subtle icon-badge tilt on hover |
| Product cards ("Our Products") | 5 image + title + text cards, static | Apply product-card component: subtle image zoom on hover, card lift + accent border, standardized image aspect ratio, "View details" link reveal on hover |
| Recent Installations | 3 named-client cards (JSW Bellary, IOCL, ITC), static | Apply installation-card component: client name/badge retained (real names, per confirmed policy), headline metric in accent color where available, hover lift, "View case study" link reveal — becomes the template feeding the full Installations page in Phase 4 |
| Core Values | 3 emoji + heading + text blocks | Same icon-badge treatment as sustainability block for consistency; consider alternating icon-left/icon-right layout for visual rhythm instead of a uniform grid |
| Trusted Clients (logos) | 6 static clickable logos in a grid | Convert to continuous auto-scroll marquee (pure CSS, pause on hover); grayscale by default, color-on-hover — keeps all names visible per confirmed policy while reducing visual noise |
| Applications (industry icons) | 6 emoji + label items | Same Lucide icon-badge system; each item becomes clickable once Industries pages exist (Phase 4); hover lift |
| Latest Blogs | 3 cards using hotlinked stock imagery (Unsplash, Economic Times) | Apply blog-card component (image, category tag, title, read time); flag stock imagery for replacement with owned/licensed photography — a content task separate from this visual pass |
| Footer CTA | Contact strip + standard footer | Sticky-reveal contact strip pattern; button/link hover states consistent with the rest of the system |

---

## Product Detail Page — Existing Sections

| Section | Current state | Redesign treatment |
|---|---|---|
| Breadcrumb + hero | Breadcrumb (Home / Category / Product) + H1 title, duplicated immediately below as an H2 of the same text, then a one-line tagline and intro paragraph | Single clean H1 (remove the duplicate heading — a content fix, not just visual); tagline styled distinctly from body copy; breadcrumb with subtle separators and hover states |
| Product image + spec bullets | One hotlinked product image (from broadusa.com) beside a flat bullet list mixing capacity, gas pressure, fuel type, burner type, functionality, and package contents | Pull the numeric/technical values (capacity, gas pressure, fuel type) into the key-specs-strip component from the Design System; keep descriptive bullets (functionality, package includes) as a clean feature list; standardize the image container's aspect ratio |
| Key Features | 5-item bullet list | Icon + text list using the Lucide icon-badge pattern, staggered scroll-reveal |
| Applications | 4-item bullet list | Same icon-badge/list treatment, visually distinct from Key Features (e.g. alternating background) |
| Benefits | 4-item bullet list | Same list treatment; consider a two-column layout combining Features and Benefits for better visual rhythm |
| CTA banner ("Ready-to-Install Solutions") | Tagline + generic "Contact Us" button | Primary-button hover micro-interaction; button stays generic until the product-specific RFQ form is added in Phase 3 |

**Note:** the existing spec bullets already contain most of the raw data Phase 3's model/variant table will need (capacity range, fuel/energy source, gas pressure) — that's a formatting upgrade more than new content sourcing.

---

## Not covered in Phase 1

New sections (metrics/impact band beyond the fix above, AMC installations snapshot, industries text section, events gallery, newsletter, "why non-electric cooling" explainer, FAQs, industries experience, spec tables, RFQ forms, Industries pages, Installations hub/case-study pages) are addressed in Phases 2–4 per the agreed plan.

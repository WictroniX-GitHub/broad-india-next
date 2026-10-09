# BROAD India — Phase 6: Industry Detail Pages (SEO + AEO + GEO)

**Goal:** Replace the placeholder `/industries/[industry]` page (one mock page for every URL) with **9 real, industry-specific pages**. Each should rank for its keyword cluster (SEO), be picked for answer boxes and "People also ask" (AEO), and be cited by ChatGPT, Gemini, Perplexity and AI Overviews (GEO). Each page gets real content, real proof and purpose-made visuals, and together they close the Product ⇄ Industry ⇄ Installation linking triangle from the Phase 1–4 plans.

**Decisions locked (2026-09-29)**
- **Industry list:** exactly Home's 9 industries. Clients and case studies from other sectors map to the nearest of the 9 (see §4).
- **URLs:** short slugs under `/industries/`, with the keyword carried by the title and H1. The old 6 URLs get 301 redirects.
- **Keywords:** I draft clusters from research (this doc, §3); you validate search volumes in SEMrush/Ubersuggest before copy is written.
- **Images:** real assets first (site photos, product images, client logos), plus **licensed stock** for industry scenes until real photos arrive, plus **custom SVG process diagrams** per industry.
- **ROI blocks:** illustrative worked examples are allowed, clearly labelled "Illustrative sizing" with their assumptions, and reviewed by engineers before publishing.
- **Reviewer byline:** "Reviewed by BROAD India Engineering Team" (the organisational byline, matching the blogs).
- **Rollout:** Wave 1 first (template + Textile, Petrochemical & Refinery, Pharmaceutical & Chemical). The other 6 industries stay on the current page until their wave, and each old URL redirects only when its replacement ships.
- **Spelling:** "Aviation & Defence", slug `aviation-defence`; the Home label is updated to match.

---

## 1. Current state (why this matters)

- `/industries/[industry]` is `"use client"`, ignores the slug, and renders the same mock content (JSW + IOCL cards, 2 products) for all 6 URLs. Google sees 6 near-duplicates, and each has no unique title or meta.
- The hub (`/industries`) lists 6 broad industries that match neither Home (9) nor the case studies.
- Existing blog support by industry: **Power/CCHP 10**, Textile 3, Pharma 2, Food 1, Hospital 1, Data Centre 1, Aviation 1, Commercial 0.
- Industry-specific images: effectively none (IOCL photo, JSW logo). There are **18 client logos** in `public/clients/`.
- The SEO audits score keyword optimisation 38/100 and flag missing schema as the main GEO blocker. Industry pages are the natural home for India-specific, sector-specific answers that AI engines cite.

---

## 2. URL map and redirects

| # | Industry (Home label) | New URL | Old URL → 301 |
|---|---|---|---|
| 1 | Petrochemical & Refinery | `/industries/petrochemical-refinery` | `/industries/industrial` → **`/industries`** (too broad to map to one page) |
| 2 | Pharmaceuticals & Chemical | `/industries/pharmaceutical-chemical` | — |
| 3 | Power Generation (CCHP) | `/industries/power-generation` | — |
| 4 | Food & Beverage Facilities | `/industries/food-beverage` | — |
| 5 | Textile Industries | `/industries/textile` | — |
| 6 | Hospitals & Medical Facilities | `/industries/hospitals` | `/industries/healthcare` → here |
| 7 | Commercial Buildings & Hotels | `/industries/commercial-buildings-hotels` | `/industries/commercial`, `/industries/retail`, `/industries/hospitality` → here |
| 8 | Data Centers & Green Buildings | `/industries/data-centers` | **URL unchanged** (keeps any existing equity) |
| 9 | Aviation & Defence | `/industries/aviation-defence` | — |

The redirects go in `lib/redirects.ts`, so the sitemap automatically excludes the old URLs.

---

## 3. Draft keyword clusters (validate volumes before writing)

Primary keyword → H1/title; secondaries → H2s and body; questions → FAQ and answer blocks. Use **"vapour"** as the main spelling (the site standard) and "vapor" naturally once or twice; the August SEO plan flags a vapour/vapor cannibalisation issue.

| Industry | Primary (H1 / title) | Secondary | Question targets (PAA / AI prompts) |
|---|---|---|---|
| Petrochemical & Refinery | absorption chiller for refinery | vapour absorption machine refinery · waste heat recovery chiller petrochemical · low-pressure steam VAM · process cooling refinery India | Can refinery waste heat drive a chiller? · What is ULP vapour VAM? · How much cooling from 1 t/h of LP steam? |
| Pharmaceutical & Chemical | absorption chiller for pharmaceutical industry | pharma chiller India · GMP chiller · cleanroom HVAC chiller · chemical plant process cooling | Which chiller is used in pharma plants? · Is an absorption chiller GMP/Schedule M compliant? · N+1 redundancy for pharma chillers? |
| Power Generation (CCHP) | trigeneration system India | CCHP India · exhaust-fired VAM · turbine inlet air cooling chiller · gas engine waste heat chiller | Trigeneration vs cogeneration? · How much cooling from a 1 MW gas engine? · What is TIAC? |
| Food & Beverage | absorption chiller for food processing | dairy plant chiller · milk chilling VAM · brewery chiller waste heat · beverage plant cooling | Can a VAM chill milk to 4 °C? · Pasteuriser waste heat for cooling? |
| Textile | chiller for textile industry | VAM for textile mill · humidification plant chiller · POY/FDY cooling · hot water absorption chiller textile | Why do textile mills need chilled water? · Can CP steam run a chiller? (Kejriwal proof) |
| Hospitals | hospital chiller India | HVAC chiller for hospital · OT air conditioning chiller · hospital trigeneration | Best chiller for a hospital? · Absorption chiller vs electric chiller for hospitals? |
| Commercial & Hotels | chiller for hotels and commercial buildings | gas-fired chiller · direct-fired absorption chiller mall · district cooling India | Is a gas chiller cheaper than an electric chiller in India? · Heating + cooling from one machine? |
| Data Centers & Green Buildings | data center cooling India | absorption chiller data center · trigeneration data center · low-PUE cooling · magnetic bearing chiller data center · IGBC/LEED chiller | Can absorption chillers cool a data centre? · How to reduce PUE in India? |
| Aviation & Defence | airport HVAC chiller | airport trigeneration · defence establishment cooling · mission-critical HVAC | (low volume; lowest priority) |

**Validation step (you):** export volume, keyword difficulty and current rank for each primary and secondary term (India). Drop terms with no volume, and promote question terms that surface.

---

## 4. Proof mapping (clients and case studies → 9 industries)

| Industry | Case studies | Client logos (`public/clients/`) |
|---|---|---|
| Petrochemical & Refinery | IOCL Vadodara (placeholder) | Adani Petrochemicals, Gujarat Gas, Indian Peroxide* |
| Pharmaceutical & Chemical | — | Deepak Fertilisers*, FACT*, GFL*, Indian Peroxide* |
| Power Generation (CCHP) | (DLF CHP, mentioned on About) | Nuberg EPC* |
| Food & Beverage | ITC (FMCG, placeholder)* | — |
| Textile | **Kejriwal Geotech (complete)** | Fliatex |
| Hospitals | — | — |
| Commercial & Hotels | — | DLF, Paharpur* |
| Data Centers & Green Buildings | — | IBM* |
| Aviation & Defence | — | — |

\* = nearest-fit mapping that needs confirming by BROAD. **Steel & metals (JSW, AM/NS, Hindalco), paper (Oki Pulp, Tjiwi Kimia) and glass (PGP Glass)** have no natural home in the 9. They stay on `/installations` and the product pages, and appear on the hub in a small "Also serving: steel, paper, glass, fertiliser" strip, with no dedicated page.

Pages with no case study get **worked examples** (clearly labelled "illustrative sizing"), not invented projects.

---

## 5. Page template (every industry page)

Section order is chosen for answer extraction: answer first, evidence next, action last.

| # | Section | SEO / AEO / GEO purpose |
|---|---|---|
| 1 | **Hero:** H1 "Absorption Chillers for [Industry] in India", 2-line promise, industry photo, CTA | Primary keyword in H1 and title; strong LCP image |
| 2 | **Answer box (40–60 words):** "Can [industry] use absorption chillers? Yes, …", a direct, self-contained answer | Featured snippet / AI Overview extraction; definition-first (listed in the August SEO plan) |
| 3 | **At a glance:** 3–4 stat chips (typical TR range, heat source, typical payback, electrical load avoided) | Citable numbers; each has a source or is labelled "typical" |
| 4 | **Cooling challenge in [industry] India:** 2–3 short paragraphs on loads, tariffs, compliance | Topical depth; India context (PAT scheme, BEE, tariffs) |
| 5 | **Where the waste heat comes from:** custom **SVG process diagram** (e.g. CP vapour → VAM → POY/FDY cooling) | Unique visual asset; alt text plus caption carry keywords |
| 6 | **Applications table:** process · required temperature · available heat source · recommended BROAD model | Tables are heavily extracted by AI engines |
| 7 | **Recommended BROAD solutions:** 2–4 product cards (from `data/products.ts`, filtered by industry) with a one-line "why" | Internal links to product pages (triangle) |
| 8 | **Worked example / ROI:** a small calculation with stated assumptions (TR, steam, tariff → kW avoided, ₹/yr, payback) | Original data that GEO rewards; clearly labelled |
| 9 | **Proof:** case-study cards and client logo strip for this industry | E-E-A-T; links to case studies (triangle) |
| 10 | **Standards & compliance:** e.g. Schedule M / WHO-GMP (pharma), FSSAI (food), NBC / ECBC (commercial), IGBC / LEED (green buildings), Uptime tiers (DC) | Trust signals; long-tail queries |
| 11 | **FAQs (6–8):** from PAA and the §3 question targets | FAQPage schema; AEO |
| 12 | **Related reading:** mapped blog posts (2–4) plus the "all industries" hub | Topic cluster; passes authority from 180+ posts |
| 13 | **Industry RFQ:** contact form pre-filled with the industry (hidden field) | Conversion; lead attribution by industry |

**Length:** 1,200–1,800 words of unique copy per page (the audit found product pages thin at under 800).

**Byline:** "Reviewed by BROAD India Engineering Team" plus a last-updated date. This is an E-E-A-T and GEO trust signal.

---

## 6. Structured data (per page)

- `WebPage` + `about` (industry) + `mentions` (products)
- `Service`: serviceType "Absorption chiller / waste-heat cooling for [industry]", `areaServed: India`, `provider: Organization`
- `FAQPage` (visible FAQs only, matching the text 1:1)
- `BreadcrumbList` (Home › Industries › [Industry])
- `ImageObject` for the diagram and hero, with caption
- Hub: `CollectionPage` + `ItemList` of the 9 pages

---

## 7. GEO / AEO specifics

- **`public/llms.txt`:** add an "Industries" section listing the 9 URLs, each with a one-line summary.
- **Citable sentences:** each page gets 3–5 standalone factual statements (numbers with units and a source), written so an AI engine can quote them without the surrounding context.
- **Entity consistency:** same company name, address and phone as the Organization schema; link to the BROAD Group page.
- **Measurement prompts** (run monthly on ChatGPT, Gemini, Perplexity and Claude), e.g. "best chiller for a pharmaceutical plant in India", "can a textile mill use waste heat for cooling", "trigeneration companies in India". Record whether BROAD is cited and which URL.

---

## 8. Images plan

| Asset | Source | Notes |
|---|---|---|
| Hero scene (9) | **Licensed stock** (Unsplash / Pexels, commercial-use licence), self-hosted as WebP under `public/images/industries/` | Descriptive filenames (`pharmaceutical-cleanroom-india.webp`) and keyword-aware alt text. Swap for real photos when they arrive |
| Process diagram (9) | **Custom SVG** (built in code, brand colours, accessible labels) | Unique per industry; zero weight concerns; indexed text labels |
| Product images | Existing `public/images/products/` | Already self-hosted |
| Proof | Client logos (`public/clients/`), case-study photos | Only verified mappings from §4 |
| OG image (9) | Generated per page (hero + title) via `opengraph-image.tsx` | Better share / AI preview cards |

**Shot list for BROAD (to replace stock):** for each industry, 1 wide site photo, 1 VAM-in-plant-room photo and 1 team-on-site photo. Include the location and year for captions.

---

## 9. Implementation (code)

1. `data/industries.ts`: typed content for the 9 industries (slug, name, keyword, answer box, stats, sections, applications table, FAQs, blog ids, images, diagram id, reviewer).
2. `data/products.ts`: add `industries: IndustrySlug[]`. `data/caseStudies.ts`: add `industrySlug`.
3. `app/industries/[industry]/page.tsx`: server component, `generateStaticParams`, `dynamicParams = false` (unknown slugs return 404), `generateMetadata` (unique title / meta / canonical / OG).
4. `components/industry/`: `AnswerBox`, `ApplicationsTable`, `ProcessDiagram` (9 SVG variants), `RoiExample`, `ComplianceList`. Everything else reuses the existing design system (PageHero, StatStrip, ProofSection, ProductFAQ, CTABand).
5. Hub `/industries`: rebuilt on the design system, with 9 cards, the "also serving" strip and ItemList schema.
6. Internal links:
   - Home accordion items get "Learn more" links;
   - category and product "Industries / Applications" cards link to their industry;
   - case-study pages link to their industry page.
7. Housekeeping:
   - old-URL redirects in `lib/redirects.ts`;
   - sitemap updated with the 9 URLs at priority 0.8;
   - `llms.txt` updated.

---

## 10. Rollout order

Ranked by proof available × business value × content readiness:

| Wave | Industries | Why first |
|---|---|---|
| 1 | Textile, Petrochemical & Refinery, Pharmaceutical & Chemical | Real case study (Kejriwal), client logos, blog support; high-value process industries |
| 2 | Power Generation (CCHP), Food & Beverage, Data Centers | 10 CCHP blogs to cluster; strong question-intent keywords |
| 3 | Hospitals, Commercial & Hotels, Aviation & Defence | Little proof yet; publish once some real data or examples are confirmed |

Each wave:
1. Validate the keywords (you).
2. I draft the copy.
3. A BROAD engineer reviews the facts.
4. Build, then check with the Rich Results test and Lighthouse.
5. Submit the URLs in Search Console.
6. Baseline the AI-citation prompts.

---

## 11. Content inputs needed from BROAD (per industry)

- Number of installations in the industry, typical capacity (TR) range, heat sources seen
- Named clients that may be shown (confirm the §4 mappings)
- 1–2 real savings figures, or permission to publish an illustrative ROI example
- Real photos (shot list, §8)

## 12. Success measures (90 days after each wave)

- Each primary keyword indexed, and ranking in the top 20 (top 10 for wave 1)
- Impressions and clicks per industry URL (GSC)
- FAQ / answer-box appearances
- BROAD cited in at least 2 of 4 AI engines for at least 3 industry prompts
- RFQs with an industry attribution (hidden field)

## Sources (research for §3)
- [Thermax: refineries & petrochemical](https://www.thermaxglobal.com/refineries-petrochemical/) · [Thermax: dairy processing](https://www.thermaxglobal.com/food-processing/dairy-processing/) · [Thermax: eco-friendly absorption cooling](https://www.thermaxglobal.com/eco-friendly-cooling-with-absorption-chillers/)
- [Cooling India: water-vapour-driven VAM for refineries](https://www.coolingindia.in/water-vapor-driven-vapor-absorption-machine-refineries-petrochemicals-industries/)
- [IndiaMART: absorption chiller category](https://dir.indiamart.com/impcat/absorption-chiller.html) · [Refindustry: absorption chillers market](https://refindustry.com/news/absorption-chillers-market-2018-2031/)
- [Clarke Energy: data-centre trigeneration](https://www.clarke-energy.com/applications/data-centre-chp-trigeneration/) · [Ignited: trigeneration for an Indian hospital](https://ignited.in/index.php/jast/article/download/2188/4195/10496?inline=1)

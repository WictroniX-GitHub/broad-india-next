**SEO · GEO · AEO AUDIT REPORT**

**<www.broadindia.com>**

BROAD Air Conditioning India Pvt. Ltd.

Baseline Audit #1 | June 15, 2026

Prepared by WictroniX | Confidential

| **Client**<br><br>BROAD Air Conditioning India Pvt. Ltd.                                | **Competitor Benchmark**<br><br>www.thermaxglobal.com                                                 |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Priority Products**<br><br>VAC/VAM · Absorption Heat Pumps · Power-Efficient Chillers | **Buyer Personas**<br><br>Plant/Facility Managers · C-Suite/Sustainability Officers · MEP Consultants |
| **Geographic Target**<br><br>Pan-India · English only (regional later)                  | **Marketing Setup**<br><br>Fully outsourced to agency · Mixed deal sizes / sales cycles               |

# **1\. Master Audit Score Summary**

Scores reflect the absolute checklist - 100 means every check in the framework passed. Partial passes count as 0.5. N/A checks are excluded from the denominator.

| **PILLAR**             | **SCORE**  | **STATUS**  | **P0** | **P1** |
| ---------------------- | ---------- | ----------- | ------ | ------ |
| Technical SEO          | **48/100** | 🔴 Critical | **5**  | 12     |
| On-Page SEO            | **30/100** | 🔴 Critical | **2**  | 11     |
| Off-Page SEO           | **15/100** | 🔴 Critical | **1**  | 8      |
| GEO / AEO              | **15/100** | 🔴 Critical | **1**  | 14     |
| **OVERALL SEO HEALTH** | **27/100** | 🔴 Critical | **9**  | 45     |

**Total P0 Critical: 9 | Total P1 High: 45 | Total P2 Medium: ~28 | Total P3 Low: ~12**

# **2\. Sub-Pillar Breakdown**

## **Technical SEO - 48/100 🔴**

🔴 T1 Crawlability & Indexation **52/100**

🔴 T2 Core Web Vitals & Performance**53/100**

🟡 T3 Mobile & Usability **75/100**

🟡 T4 HTTPS & Security **75/100**

🟡 T5 JavaScript Rendering **79/100**

🔴 T6 Structured Data / Schema **0/100**

🔴 T7 Architecture & Internal Linking**22/100**

🔴 T8 International & Advanced **25/100**

Key bright spots: Next.js SSR/SSG architecture · CLS 0.0 · Brotli compression active (82%) · HTTP/2 · Correct www/non-www canonicalisation

## **On-Page SEO - 30/100 🔴**

🔴 O1 Title Tags & Meta Descriptions**23/100**

🔴 O2 Heading Structure **21/100**

🔴 O3 Keyword Optimisation **38/100**

🔴 O4 Content Quality / E-E-A-T **19/100**

🔴 O5 Internal Linking **10/100**

🟡 O6 Images & Media **70/100**

Key bright spots: URL slugs keyword-rich · OG + Twitter Card tags on homepage · Alt text on all images · Some long-form blog content is genuinely competitive in depth

## **Off-Page SEO - 15/100 🔴**

🔴 F1 Backlink Profile **18/100**

🔴 F2 E-E-A-T & Brand Authority **12/100**

🔴 F3 Digital PR & Link Acquisition**10/100**

🔴 F4 Social & Cross-Platform **20/100**

F5 Competitor Backlink Gap: Behind - 46 referring domains vs est. 1,000-2,000+ for Thermax (10-30× gap)

Key bright spots: LinkedIn page active · ExportersIndia listing present · BROAD Group Wikipedia entity exists (link bridge opportunity) · Organic search is #2 traffic channel in GA4 (925 sessions / 13 weeks)

## **GEO / AEO - 15/100 🔴**

🔴 G1 Content Structure for AI Retrieval**12/100**

🔴 G2 Entity & Brand Signals **14/100**

🔴 G3 AI Crawler Access **19/100**

🔴 G4 Passage-Level Optimisation**24/100**

🔴 G5 Citation Status (Live Testing)**8/100**

G6 GEO Competitor Gap: Behind - Thermax dominant across all tested AI category queries. BROAD India absent from all category-level AI responses.

Key bright spots: Next.js SSR makes content AI-crawlable · Instagram active (333 posts, 1,675 followers) · 200+ installations + Asia's largest CHP project (DLF, Gurgaon) are credibility assets currently invisible to AI systems

# **3\. All P0 Critical Issues - Fix Before Anything Else**

These 9 issues block crawling, indexing, AI discovery, or conversion. Each one is costing the site traffic or leads every day it remains unfixed.

| **#** | **ISSUE**                                                                                                                                                                                                                          | **PILLAR** | **SEV** | **FIX**                                                                                                          |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| **1** | 17 URLs returning 404 - including core product pages (/hvac-systems, /cchp-systems, /vapour-absorption-chiller) and blog posts. URL-encoded spaces (%20) in internal link templates causing systemic breakage                      | T1         | **P0**  | 301-redirect all 17 dead URLs to live equivalents. Fix broken link template used across all blog post CTAs       |
| **2** | Placeholder images from fastly.picsum.photos live in production - 368KB of test/stock images served to real visitors and indexed by Google                                                                                         | T2         | **P0**  | Replace all picsum.photos image sources with real BROAD India product/installation photos immediately            |
| **3** | Render-blocking resources confirmed - JS/CSS blocking first paint. Slows every page load for all visitors.                                                                                                                         | T2         | **P0**  | Defer non-critical JS with async/defer. Inline critical CSS. Add font-display:swap to web fonts                  |
| **4** | SSL certificate expires Aug 21, 2026 (67 days) - Let's Encrypt 90-day cert. Auto-renewal must be verified or site goes HTTP.                                                                                                       | T4         | **P0**  | Verify Certbot/auto-renewal cron is active. Set calendar alert 30 days before expiry (July 22, 2026)             |
| **5** | 17 broken internal links - same URL-encoded broken links appearing at bottom of virtually every blog post, making every post internally orphaned                                                                                   | T7         | **P0**  | Fix CTA link template across all blog posts: replace encoded spaces with correct URL slugs                       |
| **6** | 50+ pages with zero title tags - entire /articles/ section (40 pages) + /contact-us + /faq + /installations + 5 product sub-pages have no title tag                                                                                | O1         | **P0**  | Write unique, keyword-rich title tags (50-60 chars) for all 50+ affected pages. /articles/\* is highest priority |
| **7** | 48+ pages with zero meta descriptions - same pages as above plus additional blog posts with duplicate meta descriptions                                                                                                            | O1         | **P0**  | Write unique meta descriptions (150-160 chars) for all affected pages. Prioritise conversion pages first.        |
| **8** | Toxic backlink profile unknown - no SEMrush/Ahrefs audit has been run. 69 total backlinks from 46 domains with no toxicity screening.                                                                                              | F1         | **P0**  | Run SEMrush backlink audit immediately. Disavow any spam/PBN links via GSC disavow tool                          |
| **9** | Complete absence from AI category-level responses - buyers researching 'absorption chiller India' via ChatGPT, Perplexity, or Google AI Overviews will never encounter BROAD India. Thermax displaces brand on every tested query. | G5         | **P0**  | Immediate GEO programme: llms.txt + FAQ schema + named authors + Organization schema with sameAs links           |

# **4\. Prioritised Action Plan**

## **TIER 1 - Quick Wins (Low Effort · High Impact · Do This Week)**

These actions require no content creation, no new pages, and no developer sprints. They are configuration, template, and file fixes.

| **#**  | **ACTION**                                                                                                                                         | **PILLAR** | **EFFORT** | **IMPACT** | **GOAL**     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ---------- | ------------ |
| **1**  | Create /llms.txt at root - full spec in audit. Include brand description, 10 priority URLs, and contact page. Deploy in 30 mins.                   | G          | Low        | High       | AI Citation  |
| **2**  | Verify robots.txt - confirm GPTBot, PerplexityBot, ClaudeBot, Google-Extended are explicitly allowed. Add if missing.                              | T          | Low        | High       | AI Crawl     |
| **3**  | Fix all 17 broken internal CTA links in blog post template - replace URL-encoded spaces with correct slugs. One template edit fixes all 80+ posts. | T          | Low        | High       | Crawlability |
| **4**  | 301-redirect all 17 confirmed 404 URLs to appropriate live pages. Priority: /hvac-systems → /vapour-absorption-chiller, /cchp-systems → /cchp      | T          | Low        | High       | Indexation   |
| **5**  | Replace fastly.picsum.photos placeholder images with real BROAD India installation/product photography                                             | T          | Low        | High       | Trust/CWV    |
| **6**  | Add H1 to homepage: 'Vapor Absorption Chillers & Non-Electric HVAC Solutions for Indian Industry'                                                  | O          | Low        | High       | Rankings     |
| **7**  | Trim homepage title tag from 77 to 55 chars: 'Vapor Absorption Chillers India \| BROAD India'                                                      | O          | Low        | Med        | CTR          |
| **8**  | Trim homepage meta description from 225 to 155 chars - leads with primary keyword, ends with CTA                                                   | O          | Low        | Med        | CTR          |
| **9**  | Verify SSL auto-renewal is active. Set calendar alert for July 22, 2026 (30 days before expiry).                                                   | T          | Low        | Critical   | Security     |
| **10** | Verify sitemap.xml is submitted in GSC and includes all indexable URLs (confirm /articles/\* not excluded)                                         | T          | Low        | Med        | Indexation   |
| **11** | Create and verify Google Business Profile for BROAD India Surat HQ - NAP: 908 Luxuria Trade Hub, Surat 395007                                      | F          | Low        | High       | Brand/GBP    |
| **12** | Run SEMrush backlink audit - identify and disavow any toxic links via GSC disavow tool                                                             | F          | Low        | Critical   | Link Safety  |

## **TIER 2 - Strategic Fixes (Medium Effort · High Impact · Do This Month)**

These require developer time or structured content work - 1-4 week execution window.

| **#**  | **ACTION**                                                                                                                                                | **PILLAR** | **EFFORT** | **IMPACT** | **GOAL**      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ---------- | ------------- |
| **1**  | Add Organization JSON-LD schema to homepage: include name, url, logo, sameAs (LinkedIn, ExportersIndia, Wikipedia/BROAD Group, Wikidata)                  | T/G        | Med        | High       | Entity/GEO    |
| **2**  | Add Article + Person schema to all /blogs/\* pages - include named author, datePublished, dateModified for every post                                     | T/G        | Med        | High       | E-E-A-T/GEO   |
| **3**  | Add FAQPage schema + visible FAQ section (5-8 questions) to all 3 priority product pages (VAC, Heat Pump, Magnetic Chiller)                               | T/G        | Med        | High       | AI Snippet    |
| **4**  | Write and deploy unique title tags + meta descriptions for all 50+ affected pages - assign to content writer, review for keyword inclusion                | O          | Med        | High       | CTR/Index     |
| **5**  | Assign named author to all blog posts - create author bio page with credentials, LinkedIn link. Add visible byline + date to all posts                    | O/G        | Med        | High       | E-E-A-T       |
| **6**  | Audit /articles/ vs /blogs/ - consolidate duplicate-topic pages. 301-redirect /articles/\* to canonical /blogs/\* equivalents. Merge content where needed | O          | Med        | High       | Deduplication |
| **7**  | Fix JS minification - ensure Next.js build runs with NODE_ENV=production. Eliminate unminified external JS files                                          | T          | Med        | Med        | Performance   |
| **8**  | Enable CDN for all static assets - deploy Cloudflare or Vercel Edge Network in front of broadindia.com                                                    | T          | Med        | Med        | Speed/CWV     |
| **9**  | Standardise NAP across all directory listings: audit IndiaMart, Justdial, TradeIndia - correct to Surat HQ address                                        | F          | Med        | High       | E-E-A-T/Local |
| **10** | Set up GA4 goal tracking - configure contact form submission as conversion event. Set up organic channel grouping. Fix revenue/conversion visibility.     | F          | Med        | Critical   | Attribution   |
| **11** | Build Quora presence - create brand account, answer 5 top absorption chiller questions with India context. Link to relevant blog posts                    | F/G        | Med        | High       | AI Citation   |
| **12** | Add Service schema to /vapour-absorption-chiller, /cchp-systems, and /power-efficient-chiller pages - include description, areaServed: India, provider    | T/G        | Med        | High       | Rich Results  |

## **TIER 3 - Long-Term Plays (High Effort · Compounding Impact · Next Quarter)**

These build the structural authority that compounds over 6-18 months. Start planning now; start executing in Month 2.

| **#**  | **ACTION**                                                                                                                                                                                              | **PILLAR** | **EFFORT** | **IMPACT**  | **GOAL**        |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | --------------- |
| **1**  | Build topic cluster architecture - create 3 VAM pillar pages (one per priority product) each 1,500+ words with FAQ, spec tables, India case study. Interlink all 20+ related blog posts to each pillar. | O          | High       | Compounding | Rankings        |
| **2**  | Publish 'BROAD India VAM Installation Benchmark Report 2026' - India COP data, sector breakdown, payback period analysis. Primary link magnet for trade media and AI citation.                          | F/G        | High       | Compounding | Links+AI        |
| **3**  | Trade media PR programme - pitch 6 articles/year to Energy Manager Today, Construction World, ISHRAE Journal, BuildingEnergy.in. Target DR 40-60 editorial backlinks.                                   | F          | High       | Compounding | Authority       |
| **4**  | Publish 3 detailed client case studies (JSW, IndianOil, DLF CHP project) with quantified results: kWh saved, ROI, payback period, carbon reduction. Structural GEO and sales assets.                    | O/G        | High       | Compounding | Trust/AI        |
| **5**  | Resolve keyword cannibalisation - full GSC + content audit of 80+ blog posts. Consolidate 8+ duplicate-topic clusters. Create canonical content hierarchy across the blog section.                      | O          | High       | High        | Rankings        |
| **6**  | Rewrite all thin product page body copy - VAC, CCHP, Heat Pump, Magnetic Chiller pages to 800-1,200 words each. Include: specs, applications, India industry context, FAQs, and CTA.                    | O          | High       | High        | Conv/GEO        |
| **7**  | Create YouTube channel - publish 3-5 product explainer videos and installation walkthroughs. Add transcripts for every video. Cross-post to Instagram. Builds 5th indexed platform for GEO.             | F/G        | High       | Compounding | AI Citation     |
| **8**  | Create Wikidata entity for BROAD Air Conditioning India - link to broadindia.com, BROAD Group Wikipedia, LinkedIn. Add sameAs to Organization schema. Triggers Knowledge Panel.                         | G          | High       | High        | Knowledge Panel |
| **9**  | ISHRAE and BEE directory submissions - submit to ISHRAE member directory, BEE empanelled vendors list, MNRE vendor panel. Sector-specific trust signals for plant/facility manager buyers.              | F          | Med        | High        | B2B Trust       |
| **10** | Implement hreflang + regional subdirectories (Hindi, Tamil, Gujarati) when volumes justify - begin planning now for execution in Month 6+                                                               | T          | High       | Compounding | Reach           |

# **5\. Manual GEO Test Instructions for Agency**

Run these 5 prompts on ChatGPT-4o, Gemini Advanced, and Perplexity. Report back: is BROAD India cited? Which competitor appears instead?

| **PROMPT** | **QUERY TO RUN**                                                            | **WHAT TO NOTE**                                                                                  |
| ---------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **1**      | What is BROAD India and what HVAC products do they offer?                   | Does AI cite broadindia.com? Describe products accurately? Note any errors in AI description.     |
| **2**      | What are the best vapor absorption chiller manufacturers in India?          | Is BROAD India in the list? Who appears instead? What position is BROAD India if listed?          |
| **3**      | How can Indian factories reduce cooling electricity costs using waste heat? | Is broadindia.com cited as a source? What sources appear? Is any BROAD India blog content quoted? |
| **4**      | BROAD India vs Thermax absorption chillers - which is better?               | Does AI have accurate data on BROAD India? Does it cite broadindia.com? What sources does it use? |
| **5**      | What is a vapor absorption machine and how does it work?                    | Is any broadindia.com blog content cited? Who is cited instead?                                   |

# **6\. Delta Tracking Block - Baseline #1**

This block is the reference point for all future audit comparisons. Every subsequent audit will show \[FIXED\], \[REGRESSED\], \[UNCHANGED\], or \[NEW\] against these baseline scores.

| **FIELD**                                 | **VALUE**                                                                                                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audit Number**                          | #1 - Baseline                                                                                                                                                                     |
| **Date**                                  | June 15, 2026                                                                                                                                                                     |
| **Previous Audit**                        | None - this is the baseline                                                                                                                                                       |
| **Overall Score**                         | 27/100                                                                                                                                                                            |
| **Technical SEO**                         | 48/100                                                                                                                                                                            |
| **On-Page SEO**                           | 30/100                                                                                                                                                                            |
| **Off-Page SEO**                          | 15/100                                                                                                                                                                            |
| **GEO / AEO**                             | 15/100                                                                                                                                                                            |
| **P0 Issues Open**                        | 9                                                                                                                                                                                 |
| **P1 Issues Open**                        | 45                                                                                                                                                                                |
| **Referring Domains (confirmed)**         | 46                                                                                                                                                                                |
| **Total Backlinks (confirmed)**           | 69                                                                                                                                                                                |
| **GA4 Organic Sessions (13w)**            | 925 (Mar 16 - Jun 13, 2026)                                                                                                                                                       |
| **GA4 AI Assistant Sessions (13w)**       | 3                                                                                                                                                                                 |
| **llms.txt**                              | Absent                                                                                                                                                                            |
| **Schema markup**                         | None (0 types implemented)                                                                                                                                                        |
| **Named authors on content**              | None                                                                                                                                                                              |
| **Google Business Profile**               | Not found                                                                                                                                                                         |
| **AI citation status (category queries)** | Absent from all tested category-level AI responses                                                                                                                                |
| **Competitor benchmark**                  | Thermax Global - dominant across all pillars                                                                                                                                      |
| **Top 3 Priorities for Next Session**     | 1\. Fix all 9 P0 issues (Tier 1 action plan) \| 2. Deploy llms.txt + Organization schema + FAQ schema \| 3. Write title tags + meta descriptions for 50+ pages                    |
| **Inputs Used**                           | Website URL, SEO Site Checkup PDF, Ubersuggest Site Audit ZIP, Ubersuggest Bulk Keyword CSV, Ubersuggest Next Actions XLSX, SEMrush Keyword Export, GA4 Snapshot, Live site fetch |
| **Missing Inputs**                        | Lighthouse Report, Full GSC Export, Full SEMrush Backlink Report, GA4 Full Export
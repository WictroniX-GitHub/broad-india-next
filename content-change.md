WORD COUNT & DEPTH SUMMARY
PAGE	VISIBLE BODY WORD COUNT	DEPTH RATING	GEO STRUCTURE
Home	~480 words	🟡 Thin for a category-authority page	No FAQ block, no definition-first opener
Category (VAC hub)	~750 words visible + 4 FAQ answers hidden	🟢 Strong narrative depth	FAQ present but answers not in static HTML
Product (Two-Stage)	~350 words	🔴 Spec-list, thin narrative	No FAQ at all
Contact Us	~40 words	🔴 Effectively zero informational content	No FAQ, no trust signals
PILLAR-STYLE FINDINGS
HOME
CHECK	STATUS	SEVERITY	FINDING	FIX
Definition-first opening (GEO)	✗ FAIL	P1	Opens with tagline, not a direct "what is a VAC" answer	Add 40–60 word definition block above the fold
Quantified data points	⚠ PARTIAL	P1	Stat counters exist but values not in static HTML (likely JS-injected numbers)	Hardcode key stats in HTML, not just animated counters
FAQ presence on homepage	✗ FAIL	P2	No FAQ section; only a link to separate /faq page	Add 3–4 category-level FAQs directly on home for AEO capture
Product card depth	⚠ PARTIAL	P2	Each of 5 products gets ~20 words — no differentiation signal for AI retrieval	Expand each card to 40–50 words with a distinguishing spec
Named author / E-E-A-T	✗ FAIL	P1	No credentialed author or engineer byline anywhere on page	Add "Reviewed by [Engineer name], [credential]" block
CATEGORY — Vapour Absorption Chiller
CHECK	STATUS	SEVERITY	FINDING	FIX
Definition-first opening	✓ PASS	—	Strong: defines VAC vs. mechanical chillers in first paragraph	Keep as content model for other pages
FAQ schema / answer visibility	✗ FAIL	P0	4 FAQ questions render but answers are absent from static HTML — accordion is JS-only, same pattern flagged on Stockstrail	Server-render FAQ answers in HTML + add FAQPage schema
Quantified claims	✓ PASS	—	"90% peak demand reduction," "25-year lifespan" — good passage-level density	Maintain, add source/basis footnote for credibility
Passage independence (G4)	⚠ PARTIAL	P2	Sub-sections readable standalone, but no H2-level Q&A framing	Reformat 1–2 subheads as direct questions
Named author	✗ FAIL	P1	Same gap as home	Same fix
PRODUCT — Two-Stage Chiller
CHECK	STATUS	SEVERITY	FINDING	FIX
Word count / depth	⚠ PARTIAL	P1	~350 words, mostly bulleted specs, only 2 short narrative paragraphs	Expand "How the Two-Stage Process Works" to 150+ words with a worked example
FAQ presence	✗ FAIL	P1	Zero FAQ on any product-level page — biggest AEO gap on the site	Add 3 spec-specific FAQs (COP range, capacity, fuel compatibility) per product page
Definition-first	✗ FAIL	P2	Opens with a benefit tagline, not a definition sentence	Add one-sentence "A two-stage absorption chiller is..." opener
Technical specificity	✓ PASS	—	Strong: exact pressure, temperature, capacity ranges across 4 models	Keep — this is genuinely AI-citable data
Comparison structure	✗ FAIL	P2	No table comparing this model vs. single-stage — user has to leave the page to compare	Add on-page comparison table (aids both UX and AEO)
CONTACT US
CHECK	STATUS	SEVERITY	FINDING	FIX
Informational content	✗ FAIL	P1	Page is a bare form + address block — zero words explaining what happens after submission	Add "What to expect" block: response time, who responds, next steps
FAQ for pre-contact objections	✗ FAIL	P2	No answers to likely blockers (MOQ, service regions, site visit availability)	Add 3–4 FAQs specific to sales-inquiry hesitation
Trust/credibility signals	✗ FAIL	P2	No client logos, no certifications, no named contact person with title	Add "You'll hear from [Name], [Title]" + 1–2 client logos already used on Home
Department routing	✗ FAIL	P3	Single generic form — sales, service, and careers inquiries all funnel identically	Add a "Subject" dropdown pre-filter or separate service-request link
Title/meta spelling consistency	✗ FAIL	P2	Page title and OG tags spell "Vapor" — every other page uses "Vapour"	Standardize to "Vapour" sitewide per prior audit finding
Map embed	✗ FAIL	P3	Two office addresses listed as plain text, no embedded map	Add Google Maps embed for Surat + Gurugram
KEY CROSS-PAGE PATTERN

The category page proves BROAD India can write strong, citable, definition-first content — the gap is that this quality doesn't carry through to product pages (thin, spec-only) or Contact Us (near-zero content). And the FAQ accordion on the category page repeats the exact JS-hidden-answer bug already flagged on Stockstrail — worth checking whether every FAQ block sitewide uses the same component.
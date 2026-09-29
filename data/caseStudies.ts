import type { StaticImageData } from "next/image";

export interface CaseStudyImage {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  location?: string;
  year?: string;
  /** Metric-led headline shown on cards and in the hero. */
  headline: string;
  /** Short metric used on cards, e.g. "1,200 TR". */
  metric: string;
  summary: string;
  productLinks: { label: string; href: string }[];
  facts: { label: string; value: string }[];
  results: { value: string; label: string }[];
  sections: { id: string; title: string; paragraphs: string[] }[];
  images: {
    /** Client site / workplace photo. */
    workplace: CaseStudyImage;
    /** Product and installation photos (gallery). */
    product: CaseStudyImage[];
    /** Process / workflow diagram, shown as-is. */
    workflow?: CaseStudyImage;
  };
  document?: { href: string; title: string; size: string };
  /**
   * placeholder: page is live and linked but noindex and excluded from the sitemap
   * until real content is supplied. Flip to "complete" to make it indexable.
   */
  status: "complete" | "placeholder";
}

/** Ordered newest / most complete first; the Home page shows the first three. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "kejriwal-geotech-surat",
    client: "Kejriwal Geotech Pvt Ltd",
    industry: "Textile",
    location: "Surat, Gujarat",
    year: "2019–20",
    headline: "1,200 TR of process cooling from waste CP steam",
    metric: "1,200 TR · 7-month payback",
    summary:
      "Two BROAD single-stage steam chillers turn zero-pressure steam left over from Kejriwal’s continuous polymerisation line into chilled water for POY and FDY yarn production.",
    productLinks: [{ label: "Single-Stage Absorption Chiller", href: "/vapour-absorption-chiller/single-stage-chiller" }],
    facts: [
      { label: "Chiller type", value: "Single-stage steam absorption chiller" },
      { label: "Cooling capacity", value: "800 TR × 1 + 400 TR × 1" },
      { label: "Heat source", value: "Zero-pressure steam after CP (100–105 °C)" },
      { label: "Models", value: "BDS121XIII-0.0-38/33-7/12-200 · BDS242XII-0.0-38/33-7/12-400" },
      { label: "Chilled water", value: "12 °C → 7 °C" },
      { label: "Cooling water", value: "33 °C → 38 °C" },
      { label: "Condensate", value: "95 °C" },
    ],
    results: [
      { value: "850 kW", label: "Electrical load avoided" },
      { value: "₹5.5 Cr", label: "Electricity saved per year" },
      { value: "7 months", label: "Payback period" },
      { value: "1,200 TR", label: "Cooling capacity installed" },
    ],
    sections: [
      {
        id: "application",
        title: "Textile sector application",
        paragraphs: [
          "Synthetic textile plants run three linked processes: CP (continuous polymerisation), POY (partially oriented yarn) and FDY (fully drawn yarn). The CP stage produces heat that can drive cooling for the downstream POY and FDY lines, whether it is available as steam, hot water from the heat-transfer-medium (HTM) system, zero-pressure steam from CP, or exhaust from on-site power generation.",
          "At Kejriwal, the CP stage releases zero-pressure (0 kg/cm²g) steam at 100–105 °C that the plant had no use for and was venting through the CP vapour chimney.",
        ],
      },
      {
        id: "solution",
        title: "The BROAD solution",
        paragraphs: [
          "BROAD installed two single-stage steam absorption chillers, rated 800 TR and 400 TR, that take this waste steam as their only heat source. They deliver chilled water at 7 °C (returning at 12 °C) to cool the POY and FDY processes, with cooling water circulating between 33 °C and 38 °C through the plant’s cooling towers.",
          "Because the chillers are thermally driven, the cooling comes from heat the plant already had, instead of from electrically driven compressors.",
        ],
      },
      {
        id: "value",
        title: "Unique value to the customer",
        paragraphs: [
          "The installation avoids around 850 kW of electrical load and saves about ₹5.5 crore on the electricity bill every year. The project paid for itself in roughly 7 months.",
        ],
      },
    ],
    images: {
      workplace: {
        src: "/case-studies/kejriwal-geotech/workplace.png",
        alt: "Entrance gate of Kejriwal Textile Park, Surat",
        width: 353,
        height: 219,
        caption: "Kejriwal Textile Park, Surat",
      },
      product: [
        {
          src: "/case-studies/kejriwal-geotech/vam-installation.png",
          alt: "BROAD single-stage steam absorption chiller installed at Kejriwal Geotech",
          width: 350,
          height: 229,
          caption: "BROAD steam VAM in the Kejriwal plant room",
        },
      ],
      workflow: {
        src: "/case-studies/kejriwal-geotech/workflow.png",
        alt: "Process diagram: zero-pressure CP vapour at 100–105 °C from the chimney drives the BROAD VAM, which produces 7 °C chilled water (12 °C return), rejects heat to cooling towers at 38/33 °C and discharges condensate at 95 °C",
        width: 750,
        height: 202,
        caption: "From waste CP steam to chilled water",
      },
    },
    document: {
      href: "/case-studies/kejriwal-geotech/kejriwal-geotech-case-study.pdf",
      title: "Kejriwal Geotech case study (PDF)",
      size: "241 KB",
    },
    status: "complete",
  },
  {
    slug: "jsw-bellary",
    client: "JSW Bellary Steel Complex",
    industry: "Steel",
    location: "Bellary, Karnataka",
    headline: "500 TR cooling capacity via waste heat recovery",
    metric: "500 TR Cooling Capacity",
    summary:
      "Deployed vapour absorption chillers at JSW Group’s Bellary steel complex, one of India’s largest integrated steel plants, delivering industrial-scale process cooling powered by waste heat recovery.",
    productLinks: [{ label: "Waste Heat Chiller", href: "/vapour-absorption-chiller/waste-heat-chiller" }],
    facts: [
      { label: "Chiller type", value: "Waste heat driven vapour absorption chiller" },
      { label: "Cooling capacity", value: "500 TR" },
    ],
    results: [{ value: "500 TR", label: "Cooling capacity" }],
    sections: [
      {
        id: "challenge",
        title: "The challenge",
        paragraphs: [
          "Steel manufacturing generates immense amounts of low-grade waste heat that is traditionally vented into the atmosphere. JSW Group sought a sustainable method to harness this thermal byproduct to generate chilled water for their critical process cooling loops, aiming to reduce their reliance on grid electricity.",
        ],
      },
      {
        id: "solution",
        title: "The solution",
        paragraphs: [
          "We designed and integrated a Waste Heat Driven Vapour Absorption Chiller system. This non-electric cooling solution directly utilizes the hot exhaust gases from the steel plant to drive the refrigeration cycle, providing 500 TR of cooling entirely free of electrical compressor load.",
        ],
      },
    ],
    images: {
      workplace: { src: "/images/JSW_Bellary.avif", alt: "JSW Bellary steel complex" },
      product: [{ src: "/images/JSW_Bellary.avif", alt: "BROAD absorption chiller installation at JSW Bellary" }],
    },
    status: "placeholder",
  },
  {
    slug: "iocl-vadodara",
    client: "Indian Oil Corporation",
    industry: "Oil & Gas",
    location: "Vadodara, Gujarat",
    headline: "Refinery waste heat converted into chilled water",
    metric: "Waste Heat Recovery",
    summary:
      "Installed waste-heat-driven absorption chillers at IOCL’s Vadodara refinery, converting surplus process heat into chilled water for plant cooling, reducing electricity consumption and operational costs.",
    productLinks: [{ label: "Waste Heat Chiller", href: "/vapour-absorption-chiller/waste-heat-chiller" }],
    facts: [{ label: "Chiller type", value: "Waste heat driven vapour absorption chiller" }],
    results: [],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "Installed waste-heat-driven absorption chillers at IOCL’s Vadodara refinery, converting surplus process heat into chilled water for plant cooling, reducing electricity consumption and operational costs.",
        ],
      },
    ],
    images: {
      workplace: { src: "/images/indian-oil-recent-ints.jpg", alt: "Indian Oil Corporation refinery, Vadodara" },
      product: [{ src: "/images/indian-oil-recent-ints.jpg", alt: "BROAD absorption chiller installation at IOCL Vadodara" }],
    },
    status: "placeholder",
  },
  {
    slug: "itc-limited",
    client: "ITC Limited",
    industry: "FMCG",
    headline: "Vapour absorption machines across four plants",
    metric: "VAM for 4 Plants",
    summary:
      "Supplied and commissioned Vapour Absorption Machines across four ITC manufacturing plants for process cooling applications, supporting ITC’s sustainability and carbon-neutrality commitments.",
    productLinks: [{ label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" }],
    facts: [
      { label: "Scope", value: "Vapour Absorption Machines for 4 plants" },
      { label: "Application", value: "Process cooling" },
    ],
    results: [{ value: "4", label: "Manufacturing plants" }],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "Supplied and commissioned Vapour Absorption Machines across four ITC manufacturing plants for process cooling applications, supporting ITC’s sustainability and carbon-neutrality commitments.",
        ],
      },
    ],
    images: {
      workplace: { src: "/images/itc.webp", alt: "ITC Limited manufacturing plant" },
      product: [{ src: "/images/itc.webp", alt: "Vapour absorption machine installation at ITC" }],
    },
    status: "placeholder",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/**
 * Case studies linked to a product page or to any product under a category,
 * e.g. "/vapour-absorption-chiller" matches its single-stage and waste-heat children.
 */
export const caseStudiesForProduct = (href: string) =>
  caseStudies.filter((c) => c.productLinks.some((p) => p.href === href || p.href.startsWith(`${href}/`)));

export const caseStudyIndustries = Array.from(new Set(caseStudies.map((c) => c.industry)));

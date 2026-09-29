export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is a Vapour Absorption Chiller?",
    answer:
      "It's a thermally-driven cooling system that uses water/LiBr solution and heat (from steam, hot water, exhaust, or gas) instead of electricity to produce chilled water - ideal for energy-efficient HVAC.",
    category: "Technology",
  },
  {
    question: "How is an Absorption Heat Pump different from a chiller?",
    answer:
      'Both use similar technology, but a heat pump captures low-grade heat and "lifts" it to higher temperature water (for process or district heating), whereas a chiller produces chilled water.',
    category: "Technology",
  },
  {
    question: "What fuel sources can BROAD systems use?",
    answer:
      "Our absorption chillers and heat pumps work with steam, hot water, exhaust gas, natural gas, oil, or solar, depending on model and configuration.",
    category: "Technical Specifications",
  },
  {
    question: "What certifications do BROAD systems have?",
    answer:
      "We hold global safety and compliance certifications including CE, UL, ETL, ASME, and meet EU energy and refrigerant standards.",
    category: "Certifications",
  },
  {
    question: "What are the benefits of mag‑lev oil-free chillers?",
    answer:
      "These chillers use magnetic bearings to eliminate friction, reduce maintenance, ensure whisper-quiet operation, and deliver superior part-load efficiency (IPLVs up to 11.5).",
    category: "Technology",
  },
  {
    question: "Do Absorption Heat Pumps Save Energy?",
    answer:
      "Yes. Heat pumps recover and upgrade waste heat - achieving efficiencies 2–3 times higher than conventional boilers; energy savings vary by application (15–41% demonstrated).",
    category: "Energy Efficiency",
  },
  {
    question: "Can these systems be used in a CCHP configuration?",
    answer:
      "Absolutely. Our chillers and heat pumps can integrate with cogeneration or trigeneration setups, enabling optimized combined cooling, heating, and power delivery.",
    category: "Applications",
  },
  {
    question: "What support does BROAD India offer?",
    answer:
      "We provide design consultation, site support, commissioning assistance, operator training, and after-sales service, including remote monitoring for key equipment.",
    category: "Support & Service",
  },
  {
    question: "How can I get a quote or technical specification?",
    answer:
      'Please fill out the "Contact Us" form on our website or call/mail us. We usually respond within 2 business days.',
    category: "Support & Service",
  },
  {
    question: "Is water treatment included?",
    answer:
      "Yes, for packaged plants we can supply water treatment and automatic dosing systems to ensure safe, legionella-free operation, including cooling tower systems and pump loops.",
    category: "Technical Specifications",
  },
];

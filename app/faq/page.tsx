"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a Vapour Absorption Chiller?",
    answer:
      "It's a thermally-driven cooling system that uses water/LiBr solution and heat (from steam, hot water, exhaust, or gas) instead of electricity to produce chilled water—ideal for energy-efficient HVAC.",
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
      "These chillers use magnetic bearings to eliminate friction, reduce maintenance, ensure whisper-quiet operation, and deliver superior part-load efficiency (IPLVs up to 13+).",
    category: "Technology",
  },
  {
    question: "Do Absorption Heat Pumps Save Energy?",
    answer:
      "Yes. Heat pumps recover and upgrade waste heat—achieving efficiencies 2–3 times higher than conventional boilers; energy savings vary by application (15–41% demonstrated).",
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

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-[40vh] bg-gradient-to-r from-purple-900 to-purple-700 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Find answers to common questions about BROAD systems
          </p>
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <div className="py-16">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === "All"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Questions
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const globalIndex = faqData.indexOf(faq);
                const isOpen = openItems.includes(globalIndex);

                return (
                  <div
                    key={globalIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-2">
                            {faq.category}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 pr-8">
                            Q{index + 1}: {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-4 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed">
                          <strong>A:</strong> {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our team is
                here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:info@broadindia.com"
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

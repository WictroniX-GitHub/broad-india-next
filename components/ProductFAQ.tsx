"use client";

import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * SSR-safe FAQ accordion using <details>/<summary>.
 * Answers are always rendered in the HTML (visible to crawlers and AEO models).
 * Progressive enhancement: CSS transitions for smooth open/close.
 */
export default function ProductFAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[], title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            {title}
          </h2>
        )}
        <div className="faq-accordion space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg flex justify-between items-center transition-colors bg-gray-50 hover:bg-gray-100 rounded-lg">
                <span className="pr-4 text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="faq-chevron text-blue-600 flex-shrink-0"
                />
              </summary>
              {/* Answer is ALWAYS in the HTML - visible to crawlers */}
              <div className="faq-answer px-6 py-5 text-gray-700 leading-relaxed border-t border-gray-200">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { BlogContentItem } from "@/types/blog";
import Link from "next/link";

interface BlogContentRendererProps {
  content: BlogContentItem[];
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  const midPoint = Math.floor(content.length * 0.6);

  return (
    <div className="prose prose-lg max-w-none">
      {content.map((item, index) => {
        let contentElement = null;

        switch (item.type) {
          case "paragraph":
            contentElement = (
              <p key={`p-${index}`} className="mb-6 text-gray-700 leading-relaxed">
                {item.content}
              </p>
            );
            break;
          case "heading":
            const headingClass = `font-medium text-gray-900 ${
              item.level === 1
                ? "text-4xl mb-6 mt-8"
                : item.level === 2
                ? "text-3xl mb-4 mt-8"
                : item.level === 3
                ? "text-2xl mb-4 mt-6"
                : "text-xl mb-3 mt-6"
            }`;

            if (item.level === 1) {
              contentElement = (
                <h1 key={`h1-${index}`} className={headingClass}>
                  {item.content}
                </h1>
              );
            } else if (item.level === 2) {
              contentElement = (
                <h2 key={`h2-${index}`} className={headingClass}>
                  {item.content}
                </h2>
              );
            } else if (item.level === 3) {
              contentElement = (
                <h3 key={`h3-${index}`} className={headingClass}>
                  {item.content}
                </h3>
              );
            } else if (item.level === 4) {
              contentElement = (
                <h4 key={`h4-${index}`} className={headingClass}>
                  {item.content}
                </h4>
              );
            } else if (item.level === 5) {
              contentElement = (
                <h5 key={`h5-${index}`} className={headingClass}>
                  {item.content}
                </h5>
              );
            } else {
              contentElement = (
                <h6 key={`h6-${index}`} className={headingClass}>
                  {item.content}
                </h6>
              );
            }
            break;
          case "image":
            contentElement = (
              <div key={`img-${index}`} className="my-8">
                <Image
                  src={item.content}
                  alt="Blog content image"
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            );
            break;
          case "list":
            contentElement = (
              <div key={`list-${index}`} className="my-6">
                {item.content && (
                  <p className="mb-3 text-gray-700">{item.content}</p>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {item.items?.map((listItem, listIndex) => (
                    <li key={`li-${listIndex}`}>{listItem}</li>
                  ))}
                </ul>
              </div>
            );
            break;
          case "quote":
            contentElement = (
              <blockquote
                key={`quote-${index}`}
                className="border-l-4 border-blue-500 pl-6 py-4 my-8 italic text-gray-800 bg-blue-50 rounded-r-lg"
              >
                &quot;{item.content}&quot;
              </blockquote>
            );
            break;
          case "code":
            contentElement = (
              <pre
                key={`code-${index}`}
                className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6"
              >
                <code className={`language-${item.language || "text"}`}>
                  {item.content}
                </code>
              </pre>
            );
            break;
          case "faq":
            contentElement = (
              <div key={`faq-${index}`} className="my-6">
                {item.faqItems?.map((faq, faqIndex) => (
                  <FaqAccordion
                    key={`faq-item-${faqIndex}`}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            );
            break;
          default:
            contentElement = null;
        }

        // Return the content block, and if it's the midpoint, inject the CTA right after it
        return (
          <div key={`block-${index}`}>
            {contentElement}
            {index === midPoint && (
              <div className="my-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="m-0 text-lg font-medium text-gray-900">
                    Want us to build this for you?
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 whitespace-nowrap bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    Talk to our team
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="mt-12 mb-8 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to optimize your industrial cooling?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact BROAD India&apos;s technical team to discuss your facility&apos;s cooling requirements and evaluate if absorption technology is the right fit.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

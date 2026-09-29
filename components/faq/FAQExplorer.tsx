"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

/** Search + category chips over an SSR-safe <details> accordion (answers always in the HTML). */
export default function FAQExplorer({ faqs }: { faqs: FAQItem[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const group = useId(); // exclusive accordion via shared <details name>
  const categories = useMemo(() => Array.from(new Set(faqs.map((f) => f.category))), [faqs]);

  const q = query.trim().toLowerCase();
  const visible = faqs.filter(
    (f) =>
      (category === "All" || f.category === category) &&
      (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
  );

  return (
    <div className="mx-auto max-w-4xl">
      <label className="relative block">
        <span className="sr-only">Search questions</span>
        <Search size={20} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, e.g. “steam”, “maintenance”"
          className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </label>

      <div role="group" aria-label="Filter by category" className="mt-6 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
              category === c
                ? "bg-brand-600 text-white shadow-brand"
                : "border border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:text-brand-700"
            )}
          >
            {c === "All" ? "All Questions" : c}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        {visible.map((faq) => (
          <details
            key={faq.question}
            name={group}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow open:shadow-card"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="tag-pill mb-2">{faq.category}</span>
                <span className="block text-lg font-semibold text-gray-900 group-open:text-brand-700">{faq.question}</span>
              </span>
              <ChevronDown size={22} className="mt-1 shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="border-t border-gray-100 px-6 py-5 leading-relaxed text-gray-700">{faq.answer}</div>
          </details>
        ))}
        {visible.length === 0 && (
          <p className="rounded-2xl border border-dashed border-gray-200 py-12 text-center text-gray-500">
            No questions match your search. Try another term, or contact our team below.
          </p>
        )}
      </div>
    </div>
  );
}

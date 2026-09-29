"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudy } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

const ALL = "All";

function ChipGroup({
  label,
  options,
  active,
  count,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  count: (option: string) => number;
  onChange: (option: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <p className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{label}</p>
      <div role="group" aria-label={`Filter by ${label.toLowerCase()}`} className="flex flex-wrap gap-2">
        {[ALL, ...options].map((o) => {
          const on = active === o;
          const n = count(o);
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              disabled={n === 0 && !on}
              onClick={() => onChange(o)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40",
                on ? "scale-105 bg-brand-600 text-white shadow-brand" : "border border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:text-brand-700"
              )}
            >
              {o}
              <span className={cn("rounded-full px-2 py-0.5 text-xs", on ? "bg-white/20" : "bg-gray-100 text-gray-500")}>{n}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Industry + product filter chips (combined) and animated grid for the Installations hub. */
export default function InstallationsExplorer({ studies, industries }: { studies: CaseStudy[]; industries: string[] }) {
  const [industry, setIndustry] = useState(ALL);
  const [product, setProduct] = useState(ALL);

  const productsOf = (s: CaseStudy) => s.productLinks.map((p) => p.label);
  const products = Array.from(new Set(studies.flatMap(productsOf)));

  const matchIndustry = (s: CaseStudy, v = industry) => v === ALL || s.industry === v;
  const matchProduct = (s: CaseStudy, v = product) => v === ALL || productsOf(s).includes(v);
  const visible = studies.filter((s) => matchIndustry(s) && matchProduct(s));

  return (
    <>
      <div className="mb-10 space-y-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
        <ChipGroup
          label="Industry"
          options={industries}
          active={industry}
          count={(o) => studies.filter((s) => matchIndustry(s, o) && matchProduct(s)).length}
          onChange={setIndustry}
        />
        <ChipGroup
          label="Product"
          options={products}
          active={product}
          count={(o) => studies.filter((s) => matchProduct(s, o) && matchIndustry(s)).length}
          onChange={setProduct}
        />
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="rounded-2xl border border-dashed border-gray-200 py-12 text-center text-gray-500">
          No installations match both filters.{" "}
          <button type="button" onClick={() => { setIndustry(ALL); setProduct(ALL); }} className="font-semibold text-brand-600 hover:text-brand-700">
            Clear filters
          </button>
        </p>
      )}
    </>
  );
}

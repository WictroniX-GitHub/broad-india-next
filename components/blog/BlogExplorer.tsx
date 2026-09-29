"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cta } from "@/components/ds/cta";

const PAGE = 12;
const TOP_CHIPS = 8;

interface BlogExplorerProps {
  categories: { name: string; count: number }[];
  /** Pre-rendered cards (server components) with their category, in display order. */
  items: { id: string; category: string; card: ReactNode }[];
}

/**
 * Category chips + "Show more". Every card stays in the HTML (hidden with CSS),
 * so crawlers still see links to all posts from /blogs.
 */
export default function BlogExplorer({ categories, items }: BlogExplorerProps) {
  const [active, setActive] = useState("All");
  const [limit, setLimit] = useState(PAGE);

  const chips = categories.slice(0, TOP_CHIPS);
  const more = categories.slice(TOP_CHIPS);
  const choose = (name: string) => {
    setActive(name);
    setLimit(PAGE);
  };

  const matching = items.filter((i) => active === "All" || i.category === active);
  const visibleIds = new Set(matching.slice(0, limit).map((i) => i.id));

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div role="group" aria-label="Filter by category" className="flex flex-1 gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:flex-wrap md:pb-0">
          {[{ name: "All", count: items.length }, ...chips].map((c) => (
            <button
              key={c.name}
              type="button"
              aria-pressed={active === c.name}
              onClick={() => choose(c.name)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                active === c.name
                  ? "bg-brand-600 text-white shadow-brand"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-brand-200 hover:text-brand-700"
              )}
            >
              {c.name}
              <span className={cn("rounded-full px-2 py-0.5 text-xs", active === c.name ? "bg-white/20" : "bg-gray-100 text-gray-500")}>
                {c.count}
              </span>
            </button>
          ))}
        </div>
        {more.length > 0 && (
          <label className="flex shrink-0 items-center gap-3 text-sm font-semibold text-gray-600">
            More topics
            <select
              value={more.some((m) => m.name === active) ? active : ""}
              onChange={(e) => choose(e.target.value || "All")}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="">Choose…</option>
              {more.map((m) => (
                <option key={m.name} value={m.name}>
                  {m.name} ({m.count})
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.id} className={visibleIds.has(i.id) ? "animate-in fade-in duration-300" : "hidden"}>
            {i.card}
          </div>
        ))}
      </div>

      {matching.length > limit && (
        <div className="mt-12 text-center">
          <button type="button" onClick={() => setLimit((l) => l + PAGE)} className={cta({ variant: "outline", size: "lg" })}>
            Show more posts ({matching.length - limit} more)
          </button>
        </div>
      )}
    </>
  );
}

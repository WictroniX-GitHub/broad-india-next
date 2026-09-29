"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SpyTab {
  id: string;
  label: string;
}

/**
 * Sticky in-page tab bar. The active tab follows scroll position (IntersectionObserver)
 * and the underline slides between tabs. Tabs whose section is missing from the page are hidden.
 */
export default function ScrollSpyNav({ tabs, cta }: { tabs: SpyTab[]; cta?: { label: string; href: string } }) {
  const [present, setPresent] = useState<SpyTab[]>(tabs);
  const [active, setActive] = useState(tabs[0]?.id);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = tabs.filter((t) => document.getElementById(t.id));
    setPresent(found);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" }
    );
    found.forEach((t) => observer.observe(document.getElementById(t.id)!));
    return () => observer.disconnect();
  }, [tabs]);

  // Keep the active tab in view on narrow screens
  useEffect(() => {
    bar.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`)?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  if (present.length < 2) return null;

  return (
    <div className="sticky top-[5.5rem] z-40 border-y border-gray-200/70 bg-white/85 shadow-sm backdrop-blur-lg">
      <div className="container mx-auto flex max-w-7xl items-center gap-6 px-4 md:px-8">
        <nav ref={bar} aria-label="On this page" className="flex flex-1 gap-6 overflow-x-auto [scrollbar-width:none] md:gap-8">
          {present.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              data-tab={tab.id}
              aria-current={active === tab.id ? "true" : undefined}
              className={cn(
                "relative shrink-0 whitespace-nowrap py-4 text-sm font-semibold transition-colors",
                active === tab.id ? "text-brand-700" : "text-gray-500 hover:text-gray-900"
              )}
            >
              {tab.label}
              {active === tab.id && (
                <motion.span layoutId="spy-underline" className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-600" />
              )}
            </a>
          ))}
        </nav>
        {cta && (
          <a
            href={cta.href}
            className="hidden shrink-0 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-brand transition-colors hover:bg-brand-700 md:inline-flex"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}

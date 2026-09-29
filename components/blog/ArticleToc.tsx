"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronDown, ListOrdered, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { TocItem } from "@/lib/articleHtml";
import { cn } from "@/lib/utils";

/** Tracks which section heading is currently being read and how far through the article the reader is. */
function useReadingState(items: TocItem[], articleId: string) {
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const headings = items.map((t) => document.getElementById(t.id)).filter((el): el is HTMLElement => !!el);
    const article = document.getElementById(articleId);
    let frame = 0;

    const update = () => {
      frame = 0;
      // Active = last section heading that has scrolled past the sticky header line
      const line = 140;
      let current: string | null = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id;
        else break;
      }
      setActive(current);
      if (article) {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.6;
        setProgress(Math.min(1, Math.max(0, -rect.top + window.innerHeight * 0.2) / Math.max(total, 1)));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items, articleId]);

  return { active, progress };
}

function TocList({ items, active, onNavigate }: { items: TocItem[]; active: string | null; onNavigate?: () => void }) {
  const activeIndex = items.findIndex((t) => t.id === active);
  return (
    <ol className="relative space-y-1">
      {/* thin track behind the step markers */}
      <span aria-hidden className="absolute bottom-3 left-[13px] top-3 w-px bg-gray-200" />
      {items.map((t, i) => {
        const isActive = i === activeIndex;
        const isDone = activeIndex > -1 && i < activeIndex;
        return (
          <li key={t.id} className="relative">
            <a
              href={`#${t.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "group flex items-start gap-3 rounded-xl py-2 pr-2 text-sm leading-snug transition-colors",
                isActive ? "text-gray-900" : "text-gray-600 hover:text-brand-700"
              )}
            >
              <span
                className={cn(
                  "relative z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold tabular-nums transition-all duration-300",
                  isActive && "border-brand-600 bg-brand-600 text-white shadow-brand",
                  isDone && "border-brand-200 bg-brand-50 text-brand-700",
                  !isActive && !isDone && "border-gray-200 bg-white text-gray-500 group-hover:border-brand-300 group-hover:text-brand-700"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("pt-1", isActive && "font-semibold")}>{t.text}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** Sticky "On this page" card for desktop, with reading progress and the current section highlighted. */
export function ArticleTocCard({ items, articleId }: { items: TocItem[]; articleId: string }) {
  const { active, progress } = useReadingState(items, articleId);
  const pct = Math.round(progress * 100);

  return (
    <nav aria-label="On this page" className="sticky top-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
      <div className="border-b border-gray-100 px-5 pb-4 pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm font-bold text-gray-900">
            <ListOrdered size={16} className="text-brand-600" /> On this page
          </p>
          <span className="text-xs font-semibold tabular-nums text-gray-500">{pct}% read</span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Reading progress">
          <div className="h-full origin-left rounded-full bg-gradient-to-r from-brand-500 to-eco-500 transition-transform duration-200" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>

      <div className="max-h-[calc(100vh-20rem)] overflow-y-auto px-3 py-3 [scrollbar-width:thin]">
        <TocList items={items} active={active} />
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-gray-100 bg-slate-50 px-5 py-3 text-sm">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 font-semibold text-gray-600 hover:text-gray-900"
        >
          <ArrowUp size={14} /> Top
        </button>
        <Link href="/contact-us" className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700">
          <MessageSquare size={14} /> Ask an engineer
        </Link>
      </div>
    </nav>
  );
}

/** Collapsible contents for mobile / tablet, shown above the article. */
export function ArticleTocMobile({ items, articleId }: { items: TocItem[]; articleId: string }) {
  const { active } = useReadingState(items, articleId);
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="On this page" className="mb-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-gray-900">
          <ListOrdered size={16} className="text-brand-600" /> On this page
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">{items.length}</span>
        </span>
        <ChevronDown size={18} className={cn("text-gray-500 transition-transform duration-300", open && "rotate-180")} />
      </button>
      {open && (
        <div className="border-t border-gray-100 px-3 py-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <TocList items={items} active={active} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

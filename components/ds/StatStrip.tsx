"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
  icon?: ReactNode;
}

/** Splits "1,200 TR" / "90%" / "₹5.5 Cr" into prefix, number and suffix; non-numeric values render as-is. */
function parse(value: string) {
  // Years ("2001") read better static than counting up from zero
  if (/^(19|20)\d{2}$/.test(value.trim())) return null;
  const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  // Ranges such as "100–3,300 TR" stay static; only a single figure counts up
  if (!m || /\d/.test(m[3])) return null;
  const raw = m[2].replace(/,/g, "");
  return { prefix: m[1], target: parseFloat(raw), decimals: raw.split(".")[1]?.length ?? 0, grouped: m[2].includes(","), suffix: m[3] };
}

/**
 * Count-up number. Server render and pre-hydration show the final value
 * (never blank, per the design-system audit); animation runs once when scrolled into view.
 */
export function CountUpValue({ value }: { value: string }) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const n = parsed.target * eased;
          const text = parsed.grouped
            ? n.toLocaleString("en-IN", { maximumFractionDigits: parsed.decimals, minimumFractionDigits: parsed.decimals })
            : n.toFixed(parsed.decimals);
          setDisplay(`${parsed.prefix}${text}${parsed.suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

interface StatStripProps {
  stats: Stat[];
  tone?: "light" | "dark" | "card";
  className?: string;
}

export default function StatStrip({ stats, tone = "light", className }: StatStripProps) {
  const cols = stats.length >= 4 ? "md:grid-cols-4" : stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <dl className={cn("grid grid-cols-2 gap-4 md:gap-6", cols, className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "group flex flex-col rounded-2xl p-5 md:p-6 transition-all duration-300",
            tone === "dark" && "border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10",
            tone === "light" && "border border-gray-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover",
            tone === "card" && "bg-slate-50 hover:bg-brand-50"
          )}
        >
          {stat.icon && (
            <div
              className={cn(
                "mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                tone === "dark" ? "bg-white/10 text-white" : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
              )}
            >
              {stat.icon}
            </div>
          )}
          {/* dt precedes dd in the DOM for valid <dl>; flex order shows the number first */}
          <dt className={cn("order-2 mt-1 text-sm font-medium", tone === "dark" ? "text-white/65" : "text-gray-500")}>{stat.label}</dt>
          <dd className={cn("order-1 text-3xl md:text-4xl font-bold tracking-tight", tone === "dark" ? "text-white" : "text-gray-900")}>
            <CountUpValue value={stat.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

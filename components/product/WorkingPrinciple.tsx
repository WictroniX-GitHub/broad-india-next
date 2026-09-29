"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Flame, RefreshCw, Snowflake, Wind } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PrincipleStep {
  icon: ReactNode;
  title: string;
  text: string;
}

/** Lithium bromide–water absorption cycle, shared by every vapour absorption chiller. */
export const ABSORPTION_CYCLE: PrincipleStep[] = [
  { icon: <Flame size={24} />, title: "Heat input", text: "Steam, hot water, exhaust gas or a gas/oil burner heats the generator. No compressor is needed." },
  { icon: <Wind size={24} />, title: "Generator", text: "The heat boils water vapour (the refrigerant) out of the lithium bromide solution." },
  { icon: <Droplets size={24} />, title: "Condenser & evaporator", text: "The vapour condenses, then evaporates under deep vacuum, pulling heat out of the chilled-water circuit." },
  { icon: <RefreshCw size={24} />, title: "Absorber", text: "Concentrated lithium bromide re-absorbs the vapour and the solution returns to the generator." },
  { icon: <Snowflake size={24} />, title: "Chilled water out", text: "Chilled water leaves for process cooling or air conditioning, with water as a zero-ODP, zero-GWP refrigerant." },
];

/**
 * Step diagram in the "Why Non-Electric Cooling" visual language.
 * Steps light up in sequence once scrolled into view (and on hover / focus).
 */
export default function WorkingPrinciple({ steps = ABSORPTION_CYCLE }: { steps?: PrincipleStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [lit, setLit] = useState(steps.length); // SSR / no-JS: everything visible
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLit(0);
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setInterval(() => setLit((n) => (n >= steps.length ? n : n + 1)), 450);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [steps.length]);

  const cols = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6" }[steps.length] ?? "lg:grid-cols-5";
  const progress = steps.length > 1 ? Math.max(0, Math.min(lit, steps.length) - 1) / (steps.length - 1) : 1;

  return (
    <ol ref={ref} className={cn("relative grid gap-8 md:grid-cols-2 lg:gap-4", cols)}>
      {/* connector line (desktop) */}
      <div aria-hidden className="absolute left-[10%] right-[10%] top-10 hidden h-0.5 bg-gray-200 lg:block">
        <div className="h-full origin-left bg-brand-600 transition-transform duration-500 ease-out" style={{ transform: `scaleX(${progress})` }} />
      </div>
      {steps.map((step, i) => {
        const on = i < lit || hover === i;
        return (
          <li
            key={step.title}
            tabIndex={0}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className="group relative flex flex-col items-center text-center outline-none"
          >
            <span
              className={cn(
                "relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 transition-all duration-500",
                on ? "scale-100 border-brand-100 bg-brand-600 text-white shadow-brand" : "scale-90 border-slate-50 bg-white text-gray-400 shadow-card"
              )}
            >
              {step.icon}
              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {i + 1}
              </span>
            </span>
            <h3 className={cn("mt-5 text-lg font-bold transition-colors", on ? "text-gray-900" : "text-gray-500")}>{step.title}</h3>
            <p className={cn("mt-2 max-w-xs text-sm font-light leading-relaxed transition-opacity duration-500", on ? "text-gray-600 opacity-100" : "text-gray-500 opacity-60")}>
              {step.text}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import FormField from "@/components/ds/FormField";
import { cta } from "@/components/ds/cta";
import { cn } from "@/lib/utils";
import { estimatePayback, type ChillerType } from "@/lib/payback";

/** ₹ in Indian units: crore above 1e7, lakh above 1e5. */
function inr(n: number): string {
  const sign = n < 0 ? "−" : "";
  const a = Math.abs(n);
  if (a >= 1e7) return `${sign}₹${(a / 1e7).toFixed(2)} crore`;
  if (a >= 1e5) return `${sign}₹${(a / 1e5).toFixed(1)} lakh`;
  return `${sign}₹${Math.round(a).toLocaleString("en-IN")}`;
}

const num = (v: string) => (v === "" ? 0 : Math.max(0, Number(v)));

export default function PaybackCalculator() {
  const [v, setV] = useState({ tr: "500", hours: "6000", tariff: "8", kwPerTr: "0.7", steamCost: "0", quote: "" });
  const [type, setType] = useState<ChillerType>("single");
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: e.target.value });

  const r = estimatePayback({
    tr: num(v.tr),
    hoursPerYear: num(v.hours),
    tariff: num(v.tariff),
    electricKwPerTr: num(v.kwPerTr),
    chillerType: type,
    steamCostPerTonne: num(v.steamCost),
    quote: num(v.quote) || undefined,
  });

  return (
    <div className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[1.1fr_1fr]">
      <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} aria-label="Payback calculator inputs">
        <FormField label="Cooling load (TR)" name="tr" type="number" min={1} inputMode="decimal" value={v.tr} onChange={set("tr")} />
        <FormField label="Operating hours per year" name="hours" type="number" min={0} max={8760} value={v.hours} onChange={set("hours")} hint="20 h × 300 days = 6,000" />
        <FormField label="Electricity tariff (₹/kWh)" name="tariff" type="number" min={0} step="0.1" value={v.tariff} onChange={set("tariff")} />
        <FormField label="Electric chiller draw (kW/TR)" name="kwPerTr" type="number" min={0} step="0.05" value={v.kwPerTr} onChange={set("kwPerTr")} hint="Your current chiller plant" />
        <fieldset className="sm:col-span-2">
          <legend className="mb-2 text-sm font-medium text-gray-700">Absorption chiller type</legend>
          <div className="grid grid-cols-2 gap-2" role="radiogroup">
            {([
              ["single", "Single-stage", "Low-pressure steam / hot water"],
              ["two", "Two-stage", "4–10 kg/cm² steam"],
            ] as const).map(([id, label, note]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={type === id}
                onClick={() => setType(id)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  type === id ? "border-brand-600 bg-brand-50 text-brand-800" : "border-gray-200 bg-slate-50 text-gray-700 hover:border-gray-300"
                )}
              >
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs text-gray-500">{note}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <FormField label="Steam cost (₹/tonne)" name="steamCost" type="number" min={0} value={v.steamCost} onChange={set("steamCost")} hint="0 if it is waste heat" />
        <FormField label="Your quoted project cost (₹)" name="quote" type="number" min={0} value={v.quote} onChange={set("quote")} hint="Optional, for payback" placeholder="e.g. 30000000" />
      </form>

      <div className="flex flex-col rounded-2xl bg-slate-900 p-6 text-white md:p-8" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Estimated annual saving</p>
        <p className={cn("mt-2 text-4xl font-bold tracking-tight md:text-5xl", r.annualSavings < 0 && "text-red-300")}>{inr(r.annualSavings)}</p>
        <dl className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-white/70">Electric chiller power today</dt><dd className="font-medium">{inr(r.electricCost)}/yr</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/70">Absorption chiller pumps &amp; controls</dt><dd className="font-medium">{inr(r.absorptionPowerCost)}/yr</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/70">Steam</dt><dd className="font-medium">{inr(r.steamCost)}/yr</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-white/70">CO₂ avoided</dt><dd className="font-medium">{Math.round(r.co2TonnesAvoided).toLocaleString("en-IN")} t/yr</dd></div>
          <div className="flex justify-between gap-4 border-t border-white/10 pt-3 text-base">
            <dt className="text-white/80">Simple payback</dt>
            <dd className="font-semibold">
              {r.paybackYears === undefined ? (num(v.quote) ? "No saving at these inputs" : "Enter your quote") : r.paybackYears < 1 ? `${Math.max(1, Math.round(r.paybackYears * 12))} months` : `${r.paybackYears.toFixed(1)} years`}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-xs leading-relaxed text-white/60">
          Planning estimate. Excludes the larger cooling tower an absorption chiller needs, maintenance and financing. BROAD engineers confirm figures in a sizing study.
        </p>
        <Link href="/contact-us" className={cn(cta({ variant: "light", size: "md" }), "mt-6 self-start")}>
          Get a sizing study
        </Link>
      </div>
    </div>
  );
}

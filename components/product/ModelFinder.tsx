"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModelVariant {
  modelNumber: string;
  capacity: string;
  dimensions: string;
  energyInput: string;
}

/** "100 - 3,300 TR" → [100, 3300]; "500 TR" → [500, 500]; otherwise null. */
function parseRange(capacity: string): [number, number] | null {
  const nums = (capacity.match(/[\d,]+(?:\.\d+)?/g) ?? []).map((n) => parseFloat(n.replace(/,/g, ""))).filter((n) => !Number.isNaN(n));
  if (!/TR/i.test(capacity) || nums.length === 0) return null;
  return [Math.min(...nums), Math.max(...nums)];
}

const niceStep = (span: number) => (span > 2000 ? 50 : span > 500 ? 10 : 5);

/**
 * Model table with a cooling-load slider: rows whose TR range covers the chosen load are
 * highlighted as matches. Falls back to a plain table when capacities aren't TR ranges.
 */
export default function ModelFinder({ rows }: { rows: ModelVariant[] }) {
  const ranges = useMemo(() => rows.map((r) => parseRange(r.capacity)), [rows]);
  const valid = ranges.filter(Boolean) as [number, number][];
  const min = valid.length ? Math.min(...valid.map((r) => r[0])) : 0;
  const max = valid.length ? Math.max(...valid.map((r) => r[1])) : 0;
  const finder = valid.length > 0 && max > min;
  const [load, setLoad] = useState<number | null>(null);

  const matches = (i: number) => {
    const r = ranges[i];
    return load !== null && r !== null && load >= r[0] && load <= r[1];
  };
  const matchCount = rows.filter((_, i) => matches(i)).length;

  return (
    <div>
      {finder && (
        <div className="mb-6 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <label htmlFor="load-slider" className="font-semibold text-gray-900">
              What cooling load do you need?
            </label>
            <span className="text-2xl font-bold tabular-nums text-brand-700">
              {load === null ? "Any" : `${load.toLocaleString("en-IN")} TR`}
            </span>
          </div>
          <input
            id="load-slider"
            type="range"
            min={min}
            max={max}
            step={niceStep(max - min)}
            value={load ?? min}
            onChange={(e) => setLoad(Number(e.target.value))}
            className="mt-4 w-full cursor-pointer accent-brand-600"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>{min.toLocaleString("en-IN")} TR</span>
            <span>{max.toLocaleString("en-IN")} TR</span>
          </div>
          {load !== null && (
            <p className="mt-3 text-sm text-gray-600" role="status">
              {matchCount > 0 ? `${matchCount} model${matchCount > 1 ? "s" : ""} cover ${load.toLocaleString("en-IN")} TR.` : "No standard model covers this load. Our engineers can configure a multi-unit system."}{" "}
              <button type="button" onClick={() => setLoad(null)} className="font-semibold text-brand-600 hover:text-brand-700">
                Reset
              </button>
            </p>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-slate-50">
              {["Model", "Cooling Capacity", "Dimensions (L×W×H)", "Energy Input"].map((h) => (
                <th key={h} scope="col" className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const hit = matches(i);
              const dim = load !== null && !hit;
              return (
                <tr
                  key={row.modelNumber + i}
                  className={cn(
                    "border-b border-gray-100 transition-all duration-300 last:border-0",
                    hit ? "bg-brand-50" : "hover:bg-slate-50",
                    dim && "opacity-45"
                  )}
                >
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-900">
                    <span className="inline-flex items-center gap-2">
                      {hit && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      )}
                      {row.modelNumber}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-700">{row.capacity}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-600">{row.dimensions}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-600">{row.energyInput}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

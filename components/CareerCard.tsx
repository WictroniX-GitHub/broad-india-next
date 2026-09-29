"use client";

import { ArrowRight, Briefcase, Download, GraduationCap, IndianRupee, MapPin, Target } from "lucide-react";
import { cta } from "@/components/ds/cta";
import { cn } from "@/lib/utils";

type CareerCardProps = {
  title: string;
  location: string;
  experience: string;
  salary: string;
  qualification: string;
  travelOrFocus: string;
  travelLabel: string;
  highlights: string[];
  jdLink: string;
  onApply: () => void;
};

export default function CareerCard({
  title,
  location,
  experience,
  salary,
  qualification,
  travelOrFocus,
  travelLabel,
  highlights,
  jdLink,
  onApply,
}: CareerCardProps) {
  const meta = [
    { icon: <Briefcase size={16} />, label: "Experience", value: experience },
    { icon: <IndianRupee size={16} />, label: "Salary range", value: salary },
    { icon: <GraduationCap size={16} />, label: "Qualification", value: qualification },
    { icon: <Target size={16} />, label: travelLabel, value: travelOrFocus },
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <header className="relative overflow-hidden bg-slate-900 p-7">
        <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-eco-400/30 bg-eco-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-eco-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-eco-400" />
          Now hiring
        </span>
        <h3 className="relative mt-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
        <p className="relative mt-2 flex items-center gap-1.5 text-sm text-white/65">
          <MapPin size={14} /> {location}
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-7">
        <dl className="grid grid-cols-2 gap-3">
          {meta.map((m) => (
            <div key={m.label} className="rounded-xl bg-slate-50 p-3">
              <dt className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                <span className="text-brand-600">{m.icon}</span>
                {m.label}
              </dt>
              <dd className="text-sm font-semibold text-gray-900">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-700">Role highlights</h4>
          <ul className="space-y-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                <ArrowRight size={16} className="mt-0.5 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="flex gap-3 border-t border-gray-100 p-7">
        <button type="button" onClick={onApply} className={cn(cta({ size: "sm" }), "flex-1 py-3")}>
          Apply now <ArrowRight size={16} />
        </button>
        <a href={jdLink} download className={cn(cta({ variant: "outline", size: "sm" }), "py-3")}>
          <Download size={16} /> Full JD
        </a>
      </footer>
    </article>
  );
}

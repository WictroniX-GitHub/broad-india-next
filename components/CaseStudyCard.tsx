import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: CaseStudy;
  tone?: "light" | "dark";
  /** Large horizontal layout for the featured slot on the Installations hub. */
  featured?: boolean;
  className?: string;
}

export default function CaseStudyCard({ study, tone = "light", featured = false, className }: CaseStudyCardProps) {
  const dark = tone === "dark";
  const cover = study.images.product[0] ?? study.images.workplace;

  return (
    <Link
      href={`/installations/${study.slug}`}
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1",
        featured ? "flex-col lg:flex-row" : "flex-col",
        dark
          ? "border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10"
          : "border border-gray-100 bg-white shadow-sm hover:shadow-card-hover",
        className
      )}
    >
      <div className={cn("relative overflow-hidden bg-slate-800", featured ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]")}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-slate-900/50 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
          {study.industry}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-6 md:p-8", featured && "lg:justify-center lg:p-12")}>
        {study.location && (
          <p className={cn("mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider", dark ? "text-white/50" : "text-gray-500")}>
            <MapPin size={13} /> {study.location}
            {study.year && <span>· {study.year}</span>}
          </p>
        )}
        <h3
          className={cn(
            "font-bold tracking-tight transition-colors",
            featured ? "text-2xl md:text-3xl" : "text-xl",
            dark ? "text-white group-hover:text-brand-300" : "text-gray-900 group-hover:text-brand-700"
          )}
        >
          {study.client}
        </h3>
        <p className={cn("mt-2 text-sm font-semibold", dark ? "text-eco-400" : "text-brand-600")}>{study.metric}</p>
        <p
          className={cn(
            "mt-4 flex-1 font-light leading-relaxed",
            featured ? "text-base md:text-lg" : "text-sm md:text-base line-clamp-3",
            dark ? "text-white/70" : "text-gray-600"
          )}
        >
          {featured ? study.summary : study.headline}
        </p>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
            dark ? "text-white/60 group-hover:text-white" : "text-brand-600 group-hover:text-brand-700"
          )}
        >
          Read case study
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

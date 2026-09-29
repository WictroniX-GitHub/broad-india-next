"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MessageSquare, SlidersHorizontal } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import IconFeatureCard from "@/components/ds/IconFeatureCard";
import CTABand from "@/components/ds/CTABand";
import { cta } from "@/components/ds/cta";
import type { BreadcrumbItem } from "@/components/ds/Breadcrumbs";
import ScrollSpyNav from "@/components/product/ScrollSpyNav";
import ProductMedia from "@/components/product/ProductMedia";
import WorkingPrinciple from "@/components/product/WorkingPrinciple";
import ProofSection, { type ReferenceProject } from "@/components/product/ProofSection";
import ProductFAQ from "@/components/ProductFAQ";
import { findProduct, type HeatSource } from "@/data/products";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types (unchanged public API)                                       */
/* ------------------------------------------------------------------ */

interface StatItem {
  value: string;
  label: string;
}

interface ProductItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IndustryItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

export type CaseStudy = ReferenceProject;

export interface CategoryTemplateProps {
  heroImage: string;
  title: string;
  tagline: string;
  breadcrumbs: BreadcrumbItem[];
  introContent: React.ReactNode;
  stats?: StatItem[];
  products?: ProductItem[];
  features?: IndustryItem[];
  industries?: IndustryItem[];
  faqs?: FAQItem[];
  customSections?: React.ReactNode;
  /** Extra reference projects; BROAD India case studies are matched automatically from data/caseStudies. */
  caseStudies?: CaseStudy[];
  /** Show the absorption-cycle diagram. Defaults to on for the vapour absorption chiller family. */
  showPrinciple?: boolean;
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "range", label: "Range" },
  { id: "how-it-works", label: "How it works" },
  { id: "compare", label: "Compare" },
  { id: "industries", label: "Industries" },
  { id: "case-studies", label: "Case studies" },
  { id: "faqs", label: "FAQs" },
];

/* ------------------------------------------------------------------ */
/*  Range: heat-source selector + bento grid                           */
/* ------------------------------------------------------------------ */

function RangeGrid({ products }: { products: ProductItem[] }) {
  const [source, setSource] = useState<HeatSource | null>(null);
  const enriched = products.map((p) => ({ ...p, meta: findProduct(p.link) }));
  const sources = Array.from(new Set(enriched.flatMap((p) => p.meta?.heatSources ?? []))) as HeatSource[];
  const fits = (p: (typeof enriched)[number]) => !source || (p.meta?.heatSources ?? []).includes(source);
  const single = products.length === 1;

  return (
    <>
      {sources.length > 1 && (
        <div className="mb-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:flex md:items-center md:gap-6 md:p-6">
          <p className="mb-4 flex shrink-0 items-center gap-2 font-semibold text-gray-900 md:mb-0">
            <SlidersHorizontal size={18} className="text-brand-600" /> What heat source do you have?
          </p>
          <div role="group" aria-label="Filter by heat source" className="flex flex-wrap gap-2">
            {sources.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={source === s}
                onClick={() => setSource(source === s ? null : s)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  source === s ? "scale-105 bg-brand-600 text-white shadow-brand" : "bg-slate-100 text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                )}
              >
                {s}
              </button>
            ))}
            {source && (
              <button type="button" onClick={() => setSource(null)} className="px-2 text-sm font-semibold text-gray-500 hover:text-gray-900">
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      <div className={cn("grid gap-6", single ? "lg:grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3")}>
        {enriched.map((p, i) => {
          const hero = i === 0 && !single && products.length > 3;
          const match = fits(p);
          return (
            <Link
              key={p.link}
              href={p.link}
              className={cn(
                "group relative flex overflow-hidden rounded-3xl border bg-white transition-all duration-500",
                hero && "md:col-span-2 lg:row-span-2",
                single ? "flex-col md:flex-row" : "flex-col",
                match ? "border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-card-hover" : "scale-[0.98] border-transparent opacity-40 grayscale",
                source && match && "ring-2 ring-brand-500"
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#eef2f7_75%)]",
                  hero ? "aspect-[16/10] lg:aspect-auto lg:flex-1" : single ? "aspect-[4/3] md:w-1/2" : "aspect-[16/10]"
                )}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes={hero ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                {p.meta?.capacity && (
                  <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.meta.capacity}
                  </span>
                )}
              </div>
              <div className={cn("flex flex-col p-6 md:p-8", single && "md:w-1/2 md:justify-center")}>
                <h3 className={cn("font-bold tracking-tight text-gray-900 transition-colors group-hover:text-brand-700", hero || single ? "text-2xl md:text-3xl" : "text-xl")}>
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 font-light leading-relaxed text-gray-600">{p.description}</p>
                {p.meta?.heatSources && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.meta.heatSources.map((h) => (
                      <li key={h} className={cn("tag-pill", source === h && "bg-brand-600 text-white")}>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  View details <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function CategoryTemplate({
  heroImage,
  title,
  tagline,
  breadcrumbs,
  introContent,
  stats = [],
  products = [],
  features = [],
  industries = [],
  faqs = [],
  customSections,
  caseStudies = [],
  showPrinciple,
}: CategoryTemplateProps) {
  const path = usePathname() ?? "";
  const principle = showPrinciple ?? path.startsWith("/vapour-absorption-chiller");
  const comparable = products.map((p) => findProduct(p.link)).filter((p) => p?.capacity);

  return (
    <div className="bg-white">
      {/* 1. Split hero */}
      <PageHero
        variant="dark"
        breadcrumbs={breadcrumbs}
        eyebrow="Product category"
        title={title}
        subtitle={tagline}
        actions={
          <>
            {products.length > 0 && (
              <a href="#range" className={cta({ variant: "light", size: "lg" })}>
                Explore the range <ArrowRight size={18} />
              </a>
            )}
            <Link href="/contact-us" className={cta({ variant: "ghost-light", size: "lg" })}>
              <MessageSquare size={18} /> Talk to an engineer
            </Link>
          </>
        }
        aside={<ProductMedia src={heroImage} alt={title} priority tone="dark" />}
      >
        {stats.length > 0 && <StatStrip stats={stats} tone="dark" />}
      </PageHero>

      {/* 2. Sticky scroll-spy navigation */}
      <ScrollSpyNav tabs={TABS} cta={{ label: "Get a quote", href: "/contact-us" }} />

      {/* 3. Overview */}
      <Section id="overview" className="scroll-mt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <SectionHeader align="left" eyebrow={title} title="Overview" className="mb-8 md:mb-10" />
            <div className="text-gray-600 font-light leading-relaxed [text-wrap:pretty] [&_h3]:text-gray-900">{introContent}</div>
          </div>
          {features.length > 0 && (
            <aside className="lg:col-span-4">
              <div className="rounded-3xl bg-slate-900 p-7 text-white lg:sticky lg:top-40">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">At a glance</p>
                <ul className="mt-5 space-y-4">
                  {features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-eco-500/20 text-eco-400">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-white/90">{f.title}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className={cn(cta({ variant: "light", size: "sm" }), "mt-7 w-full py-3")}>
                  Get sizing advice <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </Section>

      {/* Custom Sections (Reintegrated Legacy Content) */}
      {customSections && <Section surface="slate">{customSections}</Section>}

      {/* 4. Range */}
      {products.length > 0 && (
        <Section id="range" surface="slate" className="scroll-mt-40">
          <SectionHeader eyebrow="The range" title={products.length > 1 ? "Available Models" : "Our Solution"} subtitle={products.length > 1 ? "Pick your heat source to see which BROAD models can use it." : undefined} />
          <RangeGrid products={products} />
        </Section>
      )}

      {/* 5. Key features */}
      {features.length > 0 && (
        <Section>
          <SectionHeader title="Key Features & Benefits" />
          <FadeInStaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FadeInStaggerItem key={f.title}>
                <IconFeatureCard icon={f.icon} title={f.title} description={f.description} tone="slate" />
              </FadeInStaggerItem>
            ))}
          </FadeInStaggerContainer>
        </Section>
      )}

      {/* 6. Working principle */}
      {principle && (
        <Section id="how-it-works" surface="slate" className="scroll-mt-40">
          <SectionHeader eyebrow="How it works" title="Cooling from heat, not electricity" subtitle="Every BROAD absorption chiller runs the same lithium bromide–water cycle; only the heat source changes." />
          <WorkingPrinciple />
        </Section>
      )}

      {/* 7. Comparison */}
      {comparable.length > 1 && (
        <Section id="compare" className="scroll-mt-40">
          <SectionHeader eyebrow="Compare" title="Which model fits your site?" />
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="sticky top-0">
                <tr className="bg-slate-900 text-white">
                  {["Model", "Capacity", "Energy source", "Highlight", ""].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-sm font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparable.map((p) => (
                  <tr key={p!.href} className="border-b border-gray-100 transition-colors last:border-0 hover:bg-brand-50/60">
                    <th scope="row" className="px-5 py-4 font-semibold text-gray-900">{p!.title}</th>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-700">{p!.capacity}</td>
                    <td className="px-5 py-4 text-gray-600">{p!.drive}</td>
                    <td className="px-5 py-4">
                      <span className="tag-pill tag-pill--green">{p!.highlight}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link href={p!.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                        Details <ArrowRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      {/* 8. Industries */}
      {industries.length > 0 && (
        <Section id="industries" surface="slate" className="scroll-mt-40">
          <SectionHeader title="Industries We Serve" subtitle="Proven track record delivering reliable cooling solutions across diverse sectors." />
          <FadeInStaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <FadeInStaggerItem key={ind.title}>
                <IconFeatureCard icon={ind.icon} title={ind.title} description={ind.description} />
              </FadeInStaggerItem>
            ))}
          </FadeInStaggerContainer>
          <div className="mt-10 text-center">
            <Link href="/industries" className={cta({ variant: "outline" })}>
              Explore industries <ArrowRight size={16} />
            </Link>
          </div>
        </Section>
      )}

      {/* 9. Case studies */}
      <ProofSection path={path} references={caseStudies} subtitle="Real-world implementations of this technology across India." />

      {/* 10. FAQs */}
      {faqs.length > 0 && (
        <Section id="faqs" className="scroll-mt-40">
          <SectionHeader title="Frequently Asked Questions" />
          <ProductFAQ faqs={faqs} bare />
        </Section>
      )}

      <CTABand secondary={{ label: "See installations", href: "/installations" }} />
    </div>
  );
}

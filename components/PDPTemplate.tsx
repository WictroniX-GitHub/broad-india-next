"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Download, FileText, Phone, Send } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import ProductFAQ, { type FAQItem } from "@/components/ProductFAQ";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/ds/PageHero";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import IconFeatureCard from "@/components/ds/IconFeatureCard";
import { cta } from "@/components/ds/cta";
import type { BreadcrumbItem } from "@/components/ds/Breadcrumbs";
import ScrollSpyNav from "@/components/product/ScrollSpyNav";
import ProductMedia from "@/components/product/ProductMedia";
import WorkingPrinciple from "@/components/product/WorkingPrinciple";
import ModelFinder, { type ModelVariant } from "@/components/product/ModelFinder";
import ProofSection, { type ReferenceProject } from "@/components/product/ProofSection";
import { relatedProducts } from "@/data/products";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types (unchanged public API)                                       */
/* ------------------------------------------------------------------ */

interface SpecItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface IconGridItem {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

interface DownloadItem {
  title: string;
  size: string;
  type: string;
  href?: string;
}

export type CaseStudy = ReferenceProject;

export interface PDPTemplateProps {
  heroImage: string;
  title: string;
  tagline: string;
  breadcrumbs: BreadcrumbItem[];
  introContent: React.ReactNode;
  definitionTerm?: string;
  definitionText?: string;
  specs?: SpecItem[];
  features?: IconGridItem[];
  applications?: IconGridItem[];
  benefits?: IconGridItem[];
  modelTable?: ModelVariant[];
  faqs?: FAQItem[];
  downloads?: DownloadItem[];
  certifications?: React.ReactNode;
  customSections?: React.ReactNode;
  /** Extra reference projects; BROAD India case studies are matched automatically from data/caseStudies. */
  caseStudies?: CaseStudy[];
  catalogueUrl?: string;
  /** Show the absorption-cycle diagram. Defaults to on for the vapour absorption chiller family. */
  showPrinciple?: boolean;
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specifications" },
  { id: "sizing", label: "Sizing & price" },
  { id: "how-it-works", label: "How it works" },
  { id: "models", label: "Models" },
  { id: "features", label: "Features" },
  { id: "applications", label: "Applications" },
  { id: "case-studies", label: "Case studies" },
  { id: "faqs", label: "FAQs" },
];

function Block({ id, eyebrow, title, children, className }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("scroll-mt-40 border-b border-gray-100 py-12 last:border-0 md:py-16", className)}>
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>}
      <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 [text-wrap:balance]">{title}</h2>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function PDPTemplate({
  heroImage,
  title,
  tagline,
  breadcrumbs,
  introContent,
  definitionTerm,
  definitionText,
  specs = [],
  features = [],
  applications = [],
  benefits = [],
  modelTable = [],
  faqs = [],
  downloads = [],
  certifications,
  customSections,
  caseStudies = [],
  catalogueUrl,
  showPrinciple,
}: PDPTemplateProps) {
  const path = usePathname() ?? "";
  const principle = showPrinciple ?? path.startsWith("/vapour-absorption-chiller");
  const related = relatedProducts(path);
  const category = breadcrumbs.length > 2 ? breadcrumbs[breadcrumbs.length - 2]?.label : "Product";
  const [lead, ...otherBenefits] = benefits;
  // Question-style headings match how buyers search ("what is a…", "how much…") and give AI answers a clean hook
  const plural = /s$/i.test(title);
  const subject = plural ? title : `${/^[AEIOU]/i.test(title) ? "an" : "a"} ${title}`;
  const whatIs = `What ${plural ? "are" : "is"} ${subject}?`;
  const capacity = specs.find((s) => /capacity/i.test(s.label))?.value;

  return (
    <div className="bg-white pb-20 xl:pb-0">
      {/* 1. Split hero */}
      <PageHero
        variant="light"
        breadcrumbs={breadcrumbs}
        eyebrow={category}
        title={title}
        subtitle={tagline}
        actions={
          <>
            <a href="#rfq" className={cta({ size: "lg" })}>
              <Send size={18} /> Request a quote
            </a>
            {catalogueUrl ? (
              <a href={catalogueUrl} target="_blank" rel="noopener noreferrer" className={cta({ variant: "outline", size: "lg" })}>
                <Download size={18} /> Download catalogue
              </a>
            ) : (
              <a href="#resources" className={cta({ variant: "outline", size: "lg" })}>
                <FileText size={18} /> Technical resources
              </a>
            )}
          </>
        }
        aside={<ProductMedia src={heroImage} alt={title} priority />}
      >
        {specs.length > 0 && (
          <ul className="flex flex-wrap gap-3">
            {specs.slice(0, 4).map((s) => (
              <li key={s.label} className="rounded-2xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">{s.label}</span>
                <span className="font-bold text-gray-900">{s.value}</span>
              </li>
            ))}
          </ul>
        )}
      </PageHero>

      {/* 2. Sticky scroll-spy navigation */}
      <ScrollSpyNav tabs={TABS} cta={{ label: "Request a quote", href: "#rfq" }} />

      {/* 3. Body + sticky quote rail */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="min-w-0">
            <Block id="overview" eyebrow="Overview" title={whatIs}>
              {definitionTerm && definitionText && (
                <div className="mb-8 rounded-2xl border-l-4 border-brand-600 bg-slate-50 p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{definitionTerm}</h3>
                  <p className="leading-relaxed text-gray-700">{definitionText}</p>
                </div>
              )}
              <div className="font-light leading-relaxed text-gray-600 [text-wrap:pretty]">{introContent}</div>
            </Block>

            {(specs.length > 0 || certifications) && (
              <Block id="specs" eyebrow="Key specifications" title="What capacity and performance does it offer?">
                {specs.length > 0 && <StatStrip stats={specs.map((s) => ({ value: s.value, label: s.label, icon: s.icon }))} />}
                {certifications && <div className="mt-10">{certifications}</div>}
              </Block>
            )}

            <Block id="sizing" eyebrow="Sizing & price" title="How is it sized and priced?">
              <div className="space-y-4 text-lg font-light leading-relaxed text-gray-600">
                <p>
                  {capacity && <>BROAD supplies the {title} from {capacity}. </>}
                  There is no list price: the cost depends on the capacity you need, the heat source or fuel conditions at your site, the cooling water system and the installation scope. BROAD quotes each project after a sizing study.
                </p>
                <p className="font-normal text-gray-900">For a sizing study, share:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Peak and average cooling or heating load</li>
                  <li>Heat source or fuel, with its pressure, temperature and flow</li>
                  <li>Operating hours per year and your electricity tariff</li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#rfq" className={cta({ size: "md" })}>
                  <Send size={16} /> Request a sizing study
                </a>
                {path.startsWith("/vapour-absorption-chiller") && (
                  <Link href="/vapour-absorption-chiller/price-in-india#calculator" className={cta({ variant: "outline", size: "md" })}>
                    Estimate your payback
                  </Link>
                )}
              </div>
            </Block>

            {principle && (
              <Block id="how-it-works" eyebrow="How it works" title="How does an absorption chiller work?">
                <WorkingPrinciple />
              </Block>
            )}

            {modelTable.length > 0 && (
              <Block id="models" eyebrow="Model finder" title="Which model fits your heat source?">
                <ModelFinder rows={modelTable} />
              </Block>
            )}

            {features.length > 0 && (
              <Block id="features" eyebrow="Engineering" title="What makes the BROAD design different?">
                <FadeInStaggerContainer className="grid gap-5 sm:grid-cols-2">
                  {features.map((f) => (
                    <FadeInStaggerItem key={f.title}>
                      <IconFeatureCard icon={f.icon} title={f.title} description={f.description} tone="slate" />
                    </FadeInStaggerItem>
                  ))}
                </FadeInStaggerContainer>
              </Block>
            )}

            {lead && (
              <Block eyebrow="Business case" title={`What are the benefits of ${subject}?`}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white md:row-span-2">
                    <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-300">{lead.icon}</div>
                    <h3 className="relative mt-6 text-2xl font-bold tracking-tight">{lead.title}</h3>
                    {lead.description && <p className="relative mt-3 font-light leading-relaxed text-white/75">{lead.description}</p>}
                  </div>
                  {otherBenefits.map((b) => (
                    <IconFeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
                  ))}
                </div>
              </Block>
            )}

            {applications.length > 0 && (
              <Block id="applications" eyebrow="Where it’s used" title="Which industries use it?">
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {applications.map((a) => (
                    <li key={a.title} className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-card">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        {a.icon}
                      </span>
                      <span>
                        <span className="block font-semibold text-gray-900">{a.title}</span>
                        {a.description && <span className="mt-1 block text-sm font-light text-gray-600">{a.description}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {customSections && <section className="border-b border-gray-100 py-12 md:py-16">{customSections}</section>}
          </div>

          {/* Sticky quote rail (desktop) */}
          <aside className="hidden xl:block">
            <div className="sticky top-40 mt-12 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
              <div className="relative aspect-[16/9] bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#eef2f7_75%)]">
                <Image src={heroImage} alt="" fill sizes="20rem" className="object-contain p-4" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{category}</p>
                <p className="mt-1 font-bold leading-snug text-gray-900">{title}</p>
                {specs.length > 0 && (
                  <dl className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-sm">
                    {specs.slice(0, 3).map((s) => (
                      <div key={s.label} className="flex justify-between gap-3">
                        <dt className="text-gray-500">{s.label}</dt>
                        <dd className="text-right font-semibold text-gray-900">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <a href="#rfq" className={cn(cta({ size: "sm" }), "mt-6 w-full py-3")}>
                  <Send size={16} /> Request a quote
                </a>
                <a href="tel:+919427851584" className={cn(cta({ variant: "outline", size: "sm" }), "mt-3 w-full py-3")}>
                  <Phone size={16} /> +91 94278 51584
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 4. Case studies */}
      <ProofSection path={path} references={caseStudies} subtitle="Real-world implementations of this technology across industrial facilities." />

      {/* 5. FAQs */}
      {faqs.length > 0 && (
        <section id="faqs" className="scroll-mt-40 bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader title={`${title}: frequently asked questions`} />
            <ProductFAQ faqs={faqs} bare />
          </div>
        </section>
      )}

      {/* 6. RFQ + resources */}
      <section id="rfq" className="scroll-mt-40 bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ContactForm
                productName={title}
                title="Request a Quote"
                subtitle={`Get custom pricing and engineering specifications for the ${title}.`}
              />
            </div>
            <div id="resources" className="scroll-mt-40 lg:col-span-4">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Technical Resources</h3>
              <div className="flex flex-col gap-4">
                {catalogueUrl && (
                  <a href={catalogueUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
                    <span>
                      <span className="block font-bold text-gray-900 group-hover:text-brand-700">Product catalogue</span>
                      <span className="text-xs uppercase text-gray-500">PDF</span>
                    </span>
                    <Download size={18} className="text-brand-600" />
                  </a>
                )}
                {downloads.map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href ?? "#rfq"}
                    {...(doc.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    <span>
                      <span className="block font-bold text-gray-900 group-hover:text-brand-700">{doc.title}</span>
                      <span className="text-xs uppercase text-gray-500">
                        {doc.type} • {doc.size}
                        {!doc.href && " • on request"}
                      </span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      {doc.href ? <Download size={16} /> : <Send size={16} />}
                    </span>
                  </a>
                ))}
                {downloads.length === 0 && !catalogueUrl && <p className="font-light text-gray-500">Resources are currently being updated.</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related products */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeader align="left" eyebrow="Explore more" title="Related products" />
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.href} href={p.href} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#eef2f7_75%)]">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-6 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6">
                    <span>
                      <span className="block font-bold text-gray-900 group-hover:text-brand-700">{p.title}</span>
                      {p.capacity && <span className="text-sm text-gray-500">{p.capacity}</span>}
                    </span>
                    <ArrowUpRight size={18} className="shrink-0 text-brand-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile / tablet quote bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 backdrop-blur-lg xl:hidden">
        <div className="container mx-auto flex max-w-3xl items-center gap-3">
          <p className="hidden min-w-0 flex-1 truncate text-sm font-semibold text-gray-900 sm:block">{title}</p>
          <a href="tel:+919427851584" aria-label="Call BROAD India" className={cn(cta({ variant: "outline", size: "sm" }), "px-3 py-2.5")}>
            <Phone size={16} />
          </a>
          <a href="#rfq" className={cn(cta({ size: "sm" }), "flex-1 py-2.5 sm:flex-none")}>
            Request a quote <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, Calendar, Factory, MapPin, MessageSquare } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import CTABand from "@/components/ds/CTABand";
import { cta } from "@/components/ds/cta";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import CaseStudyDownload from "@/components/case-study/CaseStudyDownload";
import { ORG_ID, trimDescription } from "@/lib/seo";

type Params = { "case-study": string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ "case-study": c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const study = getCaseStudy((await params)["case-study"]);
  if (!study) return {};
  // Full headline only when it fits Google's ~60-character title width
  const long = `${study.client} Case Study: ${study.headline} | BROAD India`;
  const title = long.length <= 60 ? long : `${study.client} Case Study | BROAD India`;
  const description = trimDescription(study.summary);
  const image = typeof study.images.workplace.src === "string" ? study.images.workplace.src : study.images.workplace.src.src;
  return {
    title,
    description,
    alternates: { canonical: `/installations/${study.slug}` },
    // Placeholder studies stay reachable but out of the index until real content lands.
    robots: study.status === "placeholder" ? { index: false, follow: true } : undefined,
    openGraph: { title, description, type: "article", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const study = getCaseStudy((await params)["case-study"]);
  if (!study) notFound();

  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);
  const { workplace, product, workflow } = study.images;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client}: ${study.headline}`,
    description: study.summary,
    about: study.productLinks.map((p) => p.label),
    image: `https://www.broadindia.com${encodeURI(typeof workplace.src === "string" ? workplace.src : workplace.src.src)}`,
    author: { "@type": "Organization", "@id": ORG_ID, name: "BROAD India", url: "https://www.broadindia.com" },
    publisher: { "@type": "Organization", name: "BROAD Air Conditioning India Pvt. Ltd.", url: "https://www.broadindia.com" },
  };

  const meta = [
    { icon: <Factory size={15} />, text: study.industry },
    study.location && { icon: <MapPin size={15} />, text: study.location },
    study.year && { icon: <Calendar size={15} />, text: study.year },
  ].filter(Boolean) as { icon: React.ReactNode; text: string }[];

  return (
    <div className="bg-white">
      {study.status === "complete" && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}

      {/* 1. Hero: headline + workplace photo */}
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Installations", href: "/installations" },
          { label: study.client },
        ]}
        eyebrow={`${study.industry} case study`}
        title={study.client}
        subtitle={<span className="font-medium text-eco-400">{study.headline}</span>}
        actions={
          <>
            {study.document && (
              <CaseStudyDownload client={study.client} document={study.document} variant="light" size="lg" />
            )}
            <Link href="/contact-us" className={cta({ variant: "ghost-light", size: "lg" })}>
              <MessageSquare size={18} /> Talk to an engineer
            </Link>
          </>
        }
        aside={
          <figure className="relative mx-auto max-w-md lg:ml-auto">
            <div aria-hidden className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gradient-to-br from-brand-500/40 to-eco-500/20 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-800 p-2 shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src={workplace.src} alt={workplace.alt} fill priority sizes="(max-width: 1024px) 90vw, 28rem" className="object-cover" />
              </div>
              <figcaption className="flex items-center gap-2 px-3 pb-2 pt-3 text-sm text-white/70">
                <Building2 size={15} className="text-brand-300" />
                {workplace.caption ?? workplace.alt}
              </figcaption>
            </div>
          </figure>
        }
      >
        <ul className="flex flex-wrap gap-3">
          {meta.map((m) => (
            <li key={m.text} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
              <span className="text-brand-300">{m.icon}</span>
              {m.text}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* 2. Results */}
      {study.results.length > 0 && (
        <Section surface="brand" glow className="py-12 md:py-16">
          <StatStrip stats={study.results} tone="dark" />
        </Section>
      )}

      {/* 3. Content + product & installation gallery */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 [text-wrap:pretty]">{study.summary}</p>

            {study.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                  <span className="h-8 w-1.5 rounded-full bg-brand-600" />
                  {section.title}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-base md:text-lg font-light leading-relaxed text-gray-600 [text-wrap:pretty]">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            {study.facts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900">Chiller details</h2>
                <dl className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-slate-50">
                  {study.facts.map((f) => (
                    <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                      <dt className="text-sm font-semibold text-gray-500">{f.label}</dt>
                      <dd className="break-words font-medium text-gray-900">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {study.document && (
              <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Download the full case study</h2>
                  <p className="mt-1 text-gray-600">Specifications, process diagram and savings in one PDF ({study.document.size}).</p>
                </div>
                <CaseStudyDownload client={study.client} document={study.document} label="Download PDF" className="shrink-0" />
              </div>
            )}
          </article>

          {/* Gallery comes first on mobile so photos are not buried below the text */}
          <aside className="order-first lg:order-none lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Product &amp; installation</p>
              <CaseStudyGallery images={product} />
              {study.productLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group mt-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Product used</span>
                    <span className="mt-1 block font-bold text-gray-900 group-hover:text-brand-700">{p.label}</span>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      {/* 4. How it works: supplied process diagram, shown as-is */}
      {workflow && (
        <Section surface="slate" id="how-it-works">
          <SectionHeader eyebrow="How it works" title={workflow.caption ?? "How the system works"} />
          <figure className="overflow-x-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-card md:p-10">
            <Image
              src={workflow.src}
              alt={workflow.alt}
              width={workflow.width ?? 750}
              height={workflow.height ?? 200}
              sizes="(max-width: 768px) 750px, 1100px"
              className="mx-auto h-auto w-full min-w-[640px] max-w-5xl"
            />
          </figure>
        </Section>
      )}

      {/* 5. Related */}
      <Section surface={workflow ? "white" : "slate"}>
        <SectionHeader
          align="left"
          title="More installations"
          action={
            <Link href="/installations" className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
              <ArrowLeft size={16} /> All installations
            </Link>
          }
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      </Section>

      <CTABand
        title="Have waste heat on site?"
        text="Tell us about your steam, hot water or exhaust source and we’ll estimate the cooling it can deliver, and your payback."
        secondary={{ label: "Explore chillers", href: "/vapour-absorption-chiller" }}
      />
    </div>
  );
}

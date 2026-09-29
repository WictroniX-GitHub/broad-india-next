import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import SectionHeader from "@/components/ds/SectionHeader";
import { caseStudies, caseStudiesForProduct } from "@/data/caseStudies";

/** Reference projects passed directly by a page (e.g. international heat-pump references). */
export interface ReferenceProject {
  id: string | number;
  title: string;
  metric: string;
  industry: string;
  image: string;
  description: string;
}

interface ProofSectionProps {
  id?: string;
  /** Page path used to pick matching case studies from data/caseStudies. */
  path: string;
  references?: ReferenceProject[];
  title?: string;
  subtitle?: string;
}

export default function ProofSection({
  id = "case-studies",
  path,
  references = [],
  title = "Proven in the field",
  subtitle = "Real-world BROAD installations using this technology.",
}: ProofSectionProps) {
  const matched = caseStudiesForProduct(path);
  // No direct match and no page references: show the latest installations, under a neutral heading
  const fallback = !matched.length && !references.length;
  const studies = fallback ? caseStudies.slice(0, 3) : matched.slice(0, 3);
  if (!studies.length && !references.length) return null;
  const heading = fallback ? "Recent BROAD installations" : title;
  const intro = fallback ? "Selected projects from across India." : subtitle;

  return (
    <section id={id} className="relative scroll-mt-40 overflow-hidden bg-slate-900 py-16 text-white md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>
      <div className="container relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          tone="dark"
          align="left"
          eyebrow="Case studies"
          title={heading}
          subtitle={intro}
          action={
            <Link href="/installations" className="inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-white">
              All installations <ArrowRight size={18} />
            </Link>
          }
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} tone="dark" />
          ))}
          {references.map((r) => (
            <article key={r.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <Image src={r.image} alt={r.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-slate-900/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {r.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Global reference</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{r.title}</h3>
                <p className="mt-2 text-sm font-semibold text-eco-400">{r.metric}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/70 line-clamp-4">{r.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

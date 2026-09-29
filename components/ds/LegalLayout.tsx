import type { ReactNode } from "react";
import PageHero from "./PageHero";

interface LegalLayoutProps {
  title: string;
  updated: string;
  toc: { id: string; title: string }[];
  children: ReactNode;
}

/** Shared shell for Privacy / Terms: slim hero, sticky table of contents, readable column. */
export default function LegalLayout({ title, updated, toc, children }: LegalLayoutProps) {
  return (
    <div className="bg-white">
      <PageHero
        variant="light"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
        eyebrow="Legal"
        title={title}
        subtitle={updated}
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <nav aria-label="Sections" className="sticky top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Contents</p>
              <ol className="space-y-2 border-l border-gray-200 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="-ml-px block border-l-2 border-transparent py-0.5 pl-4 text-gray-600 transition-colors hover:border-brand-600 hover:text-brand-700">
                      {t.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="max-w-3xl [&_a]:font-medium [&_a]:text-brand-600 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:tracking-tight [&_li]:text-gray-700 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

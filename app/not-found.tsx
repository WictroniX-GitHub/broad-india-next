import Link from "next/link";
import { ArrowRight, BookOpen, Factory, Mail, Snowflake } from "lucide-react";
import { cta } from "@/components/ds/cta";

const LINKS = [
  { icon: <Snowflake size={20} />, label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
  { icon: <Factory size={20} />, label: "Installations", href: "/installations" },
  { icon: <BookOpen size={20} />, label: "Blogs", href: "/blogs" },
  { icon: <Mail size={20} />, label: "Contact Us", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-slate-900 pb-20 pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <div className="container relative mx-auto max-w-5xl px-4 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Error 404</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-white">Page Not Found</h1>
        <p className="mt-5 max-w-xl text-lg font-light text-white/75">The page you are looking for does not exist.</p>
        <Link href="/" className={`${cta({ variant: "light", size: "lg" })} mt-8`}>
          Back to home <ArrowRight size={18} />
        </Link>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/85 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">{l.icon}</span>
              <span className="font-semibold">{l.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

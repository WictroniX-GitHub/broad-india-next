import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cta } from "./cta";

interface CTABandProps {
  title?: ReactNode;
  text?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  showContacts?: boolean;
  className?: string;
}

export default function CTABand({
  title = "Let’s engineer your next cooling project",
  text = "Share your heat source and cooling load. Our engineers will size the right BROAD solution and estimate your savings.",
  primary = { label: "Discuss your project", href: "/contact-us" },
  secondary,
  showContacts = true,
  className,
}: CTABandProps) {
  return (
    <section className={cn("px-4 py-16 md:px-8 md:py-24", className)}>
      <div className="container relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 md:px-14 md:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-500/40 blur-[100px]" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-eco-500/20 blur-[110px]" />
        </div>
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">{title}</h2>
            <p className="mt-4 text-lg font-light text-white/75 [text-wrap:pretty]">{text}</p>
            {showContacts && (
              <div className="mt-6 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:gap-6">
                <a href="mailto:akshay@broad.net" className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={16} className="text-brand-300" /> akshay@broad.net
                </a>
                <a href="tel:+919427851584" className="inline-flex items-center gap-2 hover:text-white">
                  <Phone size={16} className="text-brand-300" /> +91 94278 51584
                </a>
              </div>
            )}
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link href={primary.href} className={cta({ variant: "light", size: "lg" })}>
              {primary.label} <ArrowRight size={18} />
            </Link>
            {secondary && (
              <Link href={secondary.href} className={cta({ variant: "ghost-light", size: "lg" })}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

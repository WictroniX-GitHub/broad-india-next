import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  /**
   * image: full-bleed photo with gradient, title bottom-left (About, Careers, Contact).
   * dark:  slate-900 with brand glow and optional right-hand aside (case studies, Broad Group, Category, PDP).
   * light: white with optional aside (Blogs, legal pages).
   */
  variant?: "image" | "dark" | "light";
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string | StaticImageData;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  aside?: ReactNode;
  /** Rendered under the hero copy, full width (e.g. stat chips). */
  children?: ReactNode;
  className?: string;
}

const enter = "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both";

export default function PageHero({
  variant = "dark",
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  breadcrumbs,
  actions,
  aside,
  children,
  className,
}: PageHeroProps) {
  const onDark = variant !== "light";

  const copy = (
    <div className={cn("max-w-3xl", enter)}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone={onDark ? "dark" : "light"} className="mb-8" />}
      {eyebrow && (
        <p className={cn("mb-4 text-xs font-semibold uppercase tracking-[0.2em]", onDark ? "text-brand-300" : "text-brand-600")}>
          {eyebrow}
        </p>
      )}
      <h1
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight [text-wrap:balance]",
          onDark ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-lg md:text-xl font-light leading-relaxed [text-wrap:pretty]",
            onDark ? "text-white/80" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
      {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
    </div>
  );

  if (variant === "image") {
    return (
      <section className={cn("relative flex min-h-[62vh] items-end overflow-hidden bg-slate-900 md:min-h-[72vh]", className)}>
        {image && (
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover animate-[kenBurns_20s_ease-out_forwards]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20" />
        <div className="container relative mx-auto max-w-7xl px-4 pb-14 pt-36 md:px-8 md:pb-20">
          {copy}
          {children && <div className={cn("mt-10", enter, "delay-150")}>{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40",
        variant === "dark" ? "bg-slate-900" : "border-b border-gray-100 bg-white",
        className
      )}
    >
      {variant === "dark" && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {image && <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-15" />}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%)]" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>
      )}
      {variant === "light" && (
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-100/70 blur-[100px]" />
      )}
      <div className="container relative mx-auto max-w-7xl px-4 md:px-8">
        {aside ? (
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {copy}
            <div className={cn(enter, "delay-150")}>{aside}</div>
          </div>
        ) : (
          copy
        )}
        {children && <div className={cn("mt-12", enter, "delay-200")}>{children}</div>}
      </div>
    </section>
  );
}

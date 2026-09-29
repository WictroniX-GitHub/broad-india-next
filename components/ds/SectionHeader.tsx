import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  /** Right-aligned slot for a "View all" style link (left-aligned headers only). */
  action?: ReactNode;
  className?: string;
}

/** Title + blue accent bar + subtitle, the section heading used across Home, Category and PDP. */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  as: Heading = "h2",
  action,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center" : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn(centered && "mx-auto max-w-3xl", !centered && "max-w-2xl")}>
        {eyebrow && (
          <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.18em]", dark ? "text-brand-300" : "text-brand-600")}>
            {eyebrow}
          </p>
        )}
        <Heading
          className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight [text-wrap:balance]",
            dark ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </Heading>
        <div className={cn("mt-5 h-1.5 w-24 rounded-full", dark ? "bg-brand-400" : "bg-brand-600", centered && "mx-auto")} />
        {subtitle && (
          <p className={cn("mt-6 text-lg md:text-xl font-light [text-wrap:pretty]", dark ? "text-white/70" : "text-gray-600")}>
            {subtitle}
          </p>
        )}
      </div>
      {action && !centered && <div className="shrink-0">{action}</div>}
    </div>
  );
}

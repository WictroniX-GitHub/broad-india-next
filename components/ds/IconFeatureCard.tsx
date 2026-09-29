import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconFeatureCardProps {
  icon: ReactNode;
  title: string;
  description?: ReactNode;
  tone?: "light" | "dark" | "slate";
  className?: string;
}

/** Icon-in-badge card: Core Values, Applications, Industries and feature grids. */
export default function IconFeatureCard({ icon, title, description, tone = "light", className }: IconFeatureCardProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "group h-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1",
        tone === "light" && "border border-gray-100 bg-white shadow-sm hover:border-brand-200 hover:shadow-card-hover",
        tone === "slate" && "border border-gray-100 bg-slate-50 hover:border-brand-200 hover:bg-white hover:shadow-card-hover",
        dark && "border border-white/10 bg-white/5 hover:bg-white/10",
        className
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",
          dark ? "bg-brand-500/20 text-brand-300" : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"
        )}
      >
        {icon}
      </div>
      <h3 className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-gray-900")}>{title}</h3>
      {description && (
        <p className={cn("mt-2 text-sm md:text-base font-light leading-relaxed", dark ? "text-white/70" : "text-gray-600")}>
          {description}
        </p>
      )}
    </div>
  );
}

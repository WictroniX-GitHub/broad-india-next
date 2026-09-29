import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Surface = "white" | "slate" | "dark" | "brand";

const surfaces: Record<Surface, string> = {
  white: "bg-white text-gray-900",
  slate: "bg-slate-50 text-gray-900",
  dark: "bg-slate-900 text-white",
  brand: "bg-brand-700 text-white",
};

interface SectionProps {
  id?: string;
  surface?: Surface;
  /** Soft brand glow blobs, as used by the Home metrics and installations bands. */
  glow?: boolean;
  width?: "default" | "narrow" | "prose";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

const widths = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  prose: "max-w-3xl",
};

export default function Section({
  id,
  surface = "white",
  glow = false,
  width = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24 scroll-mt-28", surfaces[surface], glow && "overflow-hidden", className)}
    >
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-500/30 blur-[110px]" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-indigo-600/25 blur-[120px]" />
        </div>
      )}
      <div className={cn("container relative mx-auto px-4 md:px-8", widths[width], containerClassName)}>{children}</div>
    </section>
  );
}

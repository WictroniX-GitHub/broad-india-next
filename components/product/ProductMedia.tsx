import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductMediaProps {
  src: string;
  alt: string;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
  sizes?: string;
}

/**
 * Compact framed product image (max ~380 px wide). Source photos are often small (≈200 px),
 * so the image is contained on a soft gradient stage rather than blown up full-bleed.
 */
export default function ProductMedia({ src, alt, priority, tone = "light", className, sizes = "(max-width: 640px) 90vw, 380px" }: ProductMediaProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("relative mx-auto w-full max-w-[380px] lg:mr-0", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute -inset-3 rounded-[2rem] blur-2xl",
          dark ? "bg-gradient-to-br from-brand-500/40 via-indigo-500/20 to-eco-500/20" : "bg-gradient-to-br from-brand-100 via-white to-eco-100/70"
        )}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border p-1.5 shadow-xl",
          dark ? "border-white/15 bg-white/10 backdrop-blur-sm" : "border-gray-100 bg-white"
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#eef2f7_70%)]">
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-contain p-5 md:p-6" />
        </div>
      </div>
    </div>
  );
}

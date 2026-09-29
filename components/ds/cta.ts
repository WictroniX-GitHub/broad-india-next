import { cva, type VariantProps } from "class-variance-authority";

/**
 * Pill call-to-action styles shared by links and buttons across the site.
 * Mirrors the hero CTA used on Home (rounded-full, brand shadow, lift on hover).
 */
export const cta = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-brand-600 text-white shadow-brand hover:bg-brand-700 hover:-translate-y-0.5",
        outline: "border border-gray-300 bg-white text-gray-900 hover:border-brand-600 hover:text-brand-700 hover:-translate-y-0.5",
        light: "bg-white text-slate-900 shadow-lg hover:bg-brand-50 hover:-translate-y-0.5",
        "ghost-light": "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:-translate-y-0.5",
        link: "px-0 py-0 text-brand-600 hover:text-brand-700",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm md:text-base",
        lg: "px-8 py-4 text-base",
      },
    },
    compoundVariants: [{ variant: "link", className: "px-0 py-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type CtaProps = VariantProps<typeof cta>;

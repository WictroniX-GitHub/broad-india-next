import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SITE = "https://www.broadindia.com";

export default function Breadcrumbs({
  items,
  tone = "light",
  schema: withSchema = true,
  className,
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
  /** Set false when the page already emits its own BreadcrumbList JSON-LD. */
  schema?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm font-medium", className)}>
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <ol className="flex flex-wrap items-center gap-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <ChevronRight size={14} className={cn("mx-2", dark ? "text-white/40" : "text-gray-400")} />}
            {item.href ? (
              <Link
                href={item.href}
                className={cn("transition-colors", dark ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-brand-600")}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? "text-white" : "text-gray-900"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

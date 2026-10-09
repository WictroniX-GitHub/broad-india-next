import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/cchp-systems/broad-tri-generational-solutions",
  title: "Turnkey Trigeneration Plant Manufacturer in India | BROAD",
  description: "Turnkey trigeneration (CCHP) plants from BROAD India: engine, absorption chiller and controls engineered as one system for up to 81% energy utilisation.",
  image: "/images/CCHP_1.jpg",
};

export const metadata = pageMetadata(seo);

export default function BroadTriGenerationalSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "BROAD Tri-Generational Solutions", category: "CCHP / Trigeneration System" })) }}
      />
      {children}
    </>
  );
}

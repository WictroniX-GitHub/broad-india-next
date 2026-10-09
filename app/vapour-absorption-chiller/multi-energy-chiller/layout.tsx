import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/multi-energy-chiller",
  title: "Multi-Energy VAM Chiller Manufacturer in India | BROAD",
  description: "Multi-energy absorption chillers that combine exhaust or hot-water waste heat with gas, oil or steam back-up, 100–3,300 TR. Supplied by BROAD India.",
  image: "/images/products/bze-multi-energy-chiller.jpg",
};

export const metadata = pageMetadata(seo);

export default function MultiEnergyChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Multi-Energy Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

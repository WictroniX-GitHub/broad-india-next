import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/solar-driven",
  title: "Solar Absorption Chiller Manufacturer in India | BROAD",
  description: "Solar-driven absorption chillers that run on 70–95°C solar thermal hot water for zero-emission cooling, 100–3,300 TR. Designed and supplied by BROAD India.",
  image: "/images/product-vac-solar-driven.png",
};

export const metadata = pageMetadata(seo);

export default function SolarDrivenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Solar-Driven Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

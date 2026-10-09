import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/waste-heat-chiller",
  title: "Waste Heat Absorption Chiller Manufacturer in India | BROAD",
  description: "Turn exhaust gas, steam or process heat (70–500°C+) into chilled water with BROAD waste heat absorption chillers, 100–3,300 TR. Get a sizing study.",
  image: "/images/wasteHeat.jpg",
};

export const metadata = pageMetadata(seo);

export default function WasteHeatChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Waste Heat Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

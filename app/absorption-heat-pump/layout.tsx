import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/absorption-heat-pump",
  title: "Absorption Heat Pump Manufacturer in India | BROAD",
  description: "Absorption heat pumps that upgrade 30–80°C waste heat to hot water up to 130°C, 1–50 MW, COP 1.7. Cut boiler fuel use. Supplied by BROAD India.",
  image: "/images/Absorption Heat Pump.jpg",
};

export const metadata = pageMetadata(seo);

export default function AbsorptionHeatPumpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Absorption Heat Pump", category: "Heat Pump" })) }}
      />
      {children}
    </>
  );
}

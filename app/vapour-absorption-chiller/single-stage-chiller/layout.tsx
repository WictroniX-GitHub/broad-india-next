import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/single-stage-chiller",
  title: "Single-Stage VAM Chiller Manufacturer in India | BROAD",
  description: "Single-stage absorption chillers for low-pressure steam (0.1–1.5 kg/cm²) or 70–95°C hot water, 100–3,300 TR. Design, supply and service by BROAD India.",
  image: "/images/products/single-stage-chiller.png",
};

export const metadata = pageMetadata(seo);

export default function SingleStageChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Single-Stage Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

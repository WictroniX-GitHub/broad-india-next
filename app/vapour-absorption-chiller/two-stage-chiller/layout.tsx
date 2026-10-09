import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/two-stage-chiller",
  title: "Two-Stage Absorption Chiller Manufacturer in India | BROAD",
  description: "Two-stage absorption chillers with COP 1.1–1.4 for high-pressure steam or 138–180°C hot water, 30–3,300 TR. More cooling per unit of heat. Get a quote.",
  image: "/images/products/bh-model-chiller.jpg",
};

export const metadata = pageMetadata(seo);

export default function TwoStageChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Two-Stage Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

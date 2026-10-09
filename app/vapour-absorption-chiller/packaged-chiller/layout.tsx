import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/packaged-chiller",
  title: "Packaged Absorption Chiller Manufacturer in India | BROAD",
  description: "Factory-assembled packaged absorption chillers, 40–2,200 TR, running on gas, oil or steam with NOx below 10 ppm. Faster installation. Get a BROAD quote.",
  image: "/images/products/packaged-chiller.jpg",
};

export const metadata = pageMetadata(seo);

export default function PackagedChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Packaged Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

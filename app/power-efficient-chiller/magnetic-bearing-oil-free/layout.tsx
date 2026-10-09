import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/power-efficient-chiller/magnetic-bearing-oil-free",
  title: "Magnetic Bearing Chiller Manufacturer in India | BROAD",
  description: "Oil-free magnetic-bearing centrifugal chillers, 100–1,200 TR, with integrated VFD and part-load COP up to 11. Quiet, low-maintenance cooling.",
  image: "/images/products/magnetic-bearing-chiller.jpg",
};

export const metadata = pageMetadata(seo);

export default function MagneticBearingOilFreeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Magnetic-Bearing Oil-Free Chiller", category: "Electric Chiller" })) }}
      />
      {children}
    </>
  );
}

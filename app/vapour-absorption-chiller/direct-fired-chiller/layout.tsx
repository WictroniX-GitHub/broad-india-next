import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/direct-fired-chiller",
  title: "Direct-Fired VAM Chiller Manufacturer in India | BROAD",
  description: "Gas- or oil-fired absorption chiller-heaters from 66 to 3,300 TR with NOx below 10 ppm: cooling and heating from one machine. Get a BROAD India quote.",
  image: "/images/nonElec.jpg",
};

export const metadata = pageMetadata(seo);

export default function DirectFiredChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Direct-Fired Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

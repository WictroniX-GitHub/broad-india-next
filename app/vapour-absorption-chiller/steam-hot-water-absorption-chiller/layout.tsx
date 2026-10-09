import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/vapour-absorption-chiller/steam-hot-water-absorption-chiller",
  title: "Steam & Hot Water Absorption Chiller in India | BROAD",
  description: "Steam and hot water absorption chillers, 30–3,300 TR: single-stage for 0.1–1.5 kg/cm² steam or 70–95°C water, two-stage at COP 1.1–1.4. By BROAD India.",
  image: "/images/products/bds-steam-chiller.jpg",
};

export const metadata = pageMetadata(seo);

export default function SteamHotWaterAbsorptionChillerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "Steam & Hot Water Absorption Chiller", category: "Vapour Absorption Chiller" })) }}
      />
      {children}
    </>
  );
}

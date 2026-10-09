import { pageMetadata, productSchema } from "@/lib/seo";

const seo = {
  path: "/pumpsets",
  title: "HVAC Pumpset Manufacturer in India | BROAD",
  description: "Skid-mounted, factory-tested HVAC pumpsets with integrated VFDs for absorption and electric chiller plants. Plug-and-play installation from BROAD India.",
  image: "/images/broadPump.webp",
};

export const metadata = pageMetadata(seo);

export default function PumpsetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ ...seo, name: "BROAD Packaged Pumpset", category: "HVAC Pumpset" })) }}
      />
      {children}
    </>
  );
}

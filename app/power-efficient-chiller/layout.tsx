import { pageMetadata } from "@/lib/seo";

const seo = {
  path: "/power-efficient-chiller",
  title: "Power-Efficient Chiller Manufacturer in India | BROAD",
  description: "Ultra-efficient electric chillers with oil-free magnetic-bearing compressors and part-load COP up to 11 for facilities that need electric cooling.",
  image: "/images/products/power-efficient-chillers.jpg",
};

export const metadata = pageMetadata(seo);

export default function PowerEfficientChillerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

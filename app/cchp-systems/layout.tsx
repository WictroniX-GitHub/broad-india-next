import { pageMetadata } from "@/lib/seo";

const seo = {
  path: "/cchp-systems",
  title: "CCHP & Trigeneration System Manufacturer in India | BROAD",
  description: "BROAD India CCHP systems combine cogeneration and absorption chilling for up to 81% total energy utilisation, vs ~40% for engine-only power.",
  image: "/images/CCHP_1.jpg",
};

export const metadata = pageMetadata(seo);

export default function CchpSystemsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

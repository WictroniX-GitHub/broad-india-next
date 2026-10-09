import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/faq",
    title: "FAQ | BROAD India Vapour Absorption Chillers & Systems",
    description: "Frequently asked questions about BROAD India's Vapour absorption chillers, CCHP systems, and non-electric HVAC solutions for industrial cooling.",
  }),
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

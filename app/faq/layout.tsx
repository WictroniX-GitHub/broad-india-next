import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BROAD India Vapor Absorption Chillers & Systems",
  description: "Frequently asked questions about BROAD India's vapor absorption chillers, CCHP systems, and non-electric HVAC solutions for industrial cooling.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

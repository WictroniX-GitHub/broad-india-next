import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BROAD India Blog | Insights on Vapor Absorption Chillers",
  description: "Explore BROAD India's blog for expert insights on vapor absorption chillers, CCHP systems, and sustainable cooling technology.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

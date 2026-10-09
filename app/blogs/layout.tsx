import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/blogs",
    title: "BROAD India Blog | Insights on Vapour Absorption Chillers",
    description: "Explore BROAD India's blog for expert insights on Vapour absorption chillers, CCHP systems, and sustainable cooling technology.",
  }),
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

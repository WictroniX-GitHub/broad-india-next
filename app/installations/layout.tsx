import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/installations",
    title: "Installations & Case Studies | BROAD India",
    description: "Explore BROAD India's major installations and case studies of vapor absorption chillers and CCHP systems across various Indian industries.",
  }),
};

export default function InstallationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

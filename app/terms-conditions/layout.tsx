import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/terms-conditions",
    title: "Terms and Conditions | BROAD India",
    description: "Read the terms and conditions for using BROAD India's website and services.",
  }),
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

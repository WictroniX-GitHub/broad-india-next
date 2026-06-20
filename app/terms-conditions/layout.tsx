import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | BROAD India",
  description: "Read the terms and conditions for using BROAD India's website and services.",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

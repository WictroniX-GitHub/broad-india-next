import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BROAD Tri-Generational Solutions | CCHP Systems | BROAD India",
  description: "Discover BROAD India's tri-generational solutions combining cooling, heating, and power for maximum industrial energy efficiency.",
};

export default function TriGenerationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Articles & Insights | BROAD India",
  description: "Read the latest articles on non-electric chillers, vapor absorption machines, and sustainable HVAC solutions by BROAD India.",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Two-Stage Vapor Absorption Chillers | BROAD India",
  description: "High-efficiency two-stage vapor absorption chillers by BROAD India, maximizing cooling output from medium-grade heat sources.",
};

export default function TwoStageChillerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

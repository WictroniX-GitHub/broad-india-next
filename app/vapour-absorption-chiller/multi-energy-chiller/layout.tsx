import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Energy Vapor Absorption Chillers | BROAD India",
  description: "Multi-energy vapor absorption chillers from BROAD India utilize diverse heat sources for optimal energy utilization and cooling efficiency.",
};

export default function MultiEnergyChillerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packaged Vapor Absorption Chillers | BROAD India",
  description: "BROAD India's packaged vapor absorption chillers provide integrated, ready-to-deploy non-electric cooling solutions.",
};

export default function PackagedChillerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

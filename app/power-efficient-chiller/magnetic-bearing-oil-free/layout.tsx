import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magnetic Bearing Oil-Free Chillers | Power Efficient Cooling | BROAD India",
  description: "BROAD India's magnetic bearing oil-free chillers offer ultra-high efficiency and reliable performance for your facility.",
};

export default function MagneticBearingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

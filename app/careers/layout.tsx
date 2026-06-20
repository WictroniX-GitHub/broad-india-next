import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join BROAD India",
  description: "Join BROAD India and be part of the future of sustainable HVAC technology and non-electric cooling solutions.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

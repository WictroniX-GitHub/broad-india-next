import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCHP Systems | Combined Cooling, Heating & Power | BROAD India",
  description: "BROAD India's CCHP (Combined Cooling, Heating & Power) systems integrate cogeneration and absorption technology for 60-80% energy efficiency.",
};

export default function CCHPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

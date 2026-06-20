import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BROAD India | Vapor Absorption Chillers & HVAC Solutions",
  description: "Get in touch with BROAD India for advanced Vapor Absorption Chillers and non-electric HVAC solutions. Reach our Surat or Gurugram offices for inquiries.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

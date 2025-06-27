import type { Metadata } from "next";
import Applications from "@/components/Applications";
import CTA from "@/components/CTA";
import Figures from "@/components/Figures";
import HomePageCarousel from "@/components/HomePageCarousel";
import MissionFocus from "@/components/MissionFocus";
import RecentInstallations from "@/components/RecentInstallations";
import RecentNews from "@/components/RecentNews";
import SpecialistsProduct from "@/components/SpecialistsProduct";
import Sustainable from "@/components/Sustainable";
import TrustedClients from "@/components/TrustedClient";
import IntroText from "@/components/IntroText";

export const metadata: Metadata = {
  title:
    "BROAD India - Leading Non-Electric HVAC Solutions & Vapor Absorption Chillers",
  description:
    "BROAD Air Conditioning India Pvt. Ltd. - Premier provider of energy-efficient vapor absorption chillers, CCHP systems, and sustainable HVAC solutions. Reduce energy costs by up to 50% with our non-electric cooling technology.",
  keywords: [
    "BROAD India",
    "vapor absorption chiller",
    "non-electric chiller",
    "HVAC solutions",
    "energy efficient cooling",
    "waste heat recovery",
    "CCHP systems",
    "sustainable cooling",
    "industrial cooling",
    "absorption heat pump",
  ],
  openGraph: {
    title:
      "BROAD India - Leading Non-Electric HVAC Solutions & Vapor Absorption Chillers",
    description:
      "Premier provider of energy-efficient vapor absorption chillers and sustainable HVAC solutions. Reduce energy costs by up to 50% with our non-electric cooling technology.",
    type: "website",
    locale: "en_IN",
    url: "https://www.broadindia.com",
    siteName: "BROAD India",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "BROAD India - Non-Electric HVAC Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BROAD India - Leading Non-Electric HVAC Solutions",
    description:
      "Premier provider of energy-efficient vapor absorption chillers and sustainable HVAC solutions.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "#eee", paddingLeft: "0" }}>
      <HomePageCarousel />
      <CTA />
      <IntroText />
      <Figures />
      <Sustainable />
      <SpecialistsProduct />
      <RecentInstallations />
      <MissionFocus />
      <TrustedClients />
      <Applications />
      <RecentNews />
      <CTA />
    </div>
  );
}

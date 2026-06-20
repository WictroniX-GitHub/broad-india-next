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
  title: "Vapor Absorption Chillers India | BROAD India",
  description:
    "BROAD India offers vapor absorption chillers, CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
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
    title: "Vapor Absorption Chillers India | BROAD India",
    description:
      "BROAD India offers vapor absorption chillers, CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
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
    title: "Vapor Absorption Chillers India | BROAD India",
    description:
      "BROAD India offers vapor absorption chillers, CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BROAD India",
    "url": "https://www.broadindia.com",
    "logo": "https://www.broadindia.com/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/broad-india/",
      "https://www.exportersindia.com/broad-air-conditioning-india-pvt-ltd/",
      "https://en.wikipedia.org/wiki/Broad_Group"
    ]
  };

  return (
    <div style={{ backgroundColor: "#eee", paddingLeft: "0" }}>
      <h1 className="sr-only">Vapor Absorption Chillers & Non-Electric HVAC Solutions for Indian Industry</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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

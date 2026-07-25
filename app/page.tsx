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
    "name": "BROAD Air Conditioning India Pvt. Ltd.",
    "alternateName": "BROAD India",
    "url": "https://www.broadindia.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.broadindia.com/images/logo.png",
    },
    "description":
      "BROAD India delivers cutting-edge Vapor Absorption Machines (VAM) and non-electric HVAC solutions. India's top supplier of absorption chillers, CCHP systems, and fuel gas recovery chillers since 2001.",
    "foundingDate": "2001",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9427851584",
        "contactType": "sales",
        "email": "akshay@broad.net",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-0124-4012824",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 209, Luxuria Trade Hub, Vr mall, Dumas Rd",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN",
    },
    "sameAs": [
      "https://www.facebook.com/BROADAIRINDIA",
      "https://www.instagram.com/broad_india/",
      "https://x.com/broad_india",
      "https://www.linkedin.com/company/broad-india/",
      "https://www.exportersindia.com/broad-air-conditioning-india-pvt-ltd/",
      "https://en.wikipedia.org/wiki/Broad_Group",
    ],
  };

  const localBusinessSurat = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BROAD Air Conditioning India Pvt. Ltd. — Surat (HQ)",
    "image": "https://www.broadindia.com/images/logo.png",
    "url": "https://www.broadindia.com/contact-us",
    "telephone": "+91-9427851584",
    "email": "akshay@broad.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 209, Luxuria Trade Hub, Vr mall, Dumas Rd, New Magdalla",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN",
    },
    "priceRange": "$$$$",
  };

  const localBusinessGurugram = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BROAD Air Conditioning India Pvt. Ltd. — Gurugram",
    "image": "https://www.broadindia.com/images/logo.png",
    "url": "https://www.broadindia.com/contact-us",
    "telephone": "+91-0124-4012824",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "N-14/27, DLF Phase-2",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
    },
    "priceRange": "$$$$",
  };

  return (
    <div style={{ backgroundColor: "#eee", paddingLeft: "0" }}>
      <h1 className="sr-only">Vapor Absorption Chillers &amp; Non-Electric HVAC Solutions for Indian Industry</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessSurat, localBusinessGurugram]),
        }}
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

import type { Metadata } from "next";
import CTA from "@/components/CTA";
import HomePageCarousel from "@/components/HomePageCarousel";
import MissionFocus from "@/components/MissionFocus";
import RecentInstallations from "@/components/RecentInstallations";
import RecentNews from "@/components/RecentNews";
import SpecialistsProduct from "@/components/SpecialistsProduct";
import Sustainable from "@/components/Sustainable";
import TrustedClients from "@/components/TrustedClient";
import IntroText from "@/components/IntroText";
import PromoPopup from "@/components/PromoPopup";
import ProductFAQ from "@/components/ProductFAQ";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhyNonElectric from "@/components/WhyNonElectric";
import IndustriesAccordion from "@/components/IndustriesAccordion";
import EventsGallery from "@/components/EventsGallery";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Vapour Absorption Chillers India | BROAD India",
  description:
    "BROAD India offers vapour absorption chillers (VAC / VAM), CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
  keywords: [
    "BROAD India",
    "vapour absorption chiller",
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
    title: "Vapour Absorption Chillers India | BROAD India",
    description:
      "BROAD India offers vapour absorption chillers (VAC / VAM), CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
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
    title: "Vapour Absorption Chillers India | BROAD India",
    description:
      "BROAD India offers vapour absorption chillers (VAC / VAM), CCHP systems & non-electric HVAC solutions. Cut cooling costs by 50%. Get a free consultation today.",
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

const homeFaqs = [
  {
    question: "What is a vapour absorption chiller and how does it work?",
    answer:
      "A vapour absorption chiller (VAC) is a cooling system that uses thermal energy - such as waste heat, steam, hot water, or natural gas - instead of electricity to produce chilled water. It works by using a lithium bromide-water absorption cycle: heat drives the refrigerant (water) out of the absorbent (lithium bromide), producing a cooling effect. Unlike conventional electric chillers with mechanical compressors, absorption chillers have virtually no moving parts, resulting in quieter operation, lower maintenance, and a lifespan exceeding 25 years.",
  },
  {
    question: "How much electricity can a non-electric chiller save?",
    answer:
      "A BROAD non-electric absorption chiller can reduce a facility's electrical peak demand for cooling by up to 90%. Because the chiller is driven by heat rather than an electric compressor, it effectively removes the largest single electrical load in most industrial and commercial HVAC setups. This translates to significantly lower electricity bills, protection against tariff hikes, and freed-up power infrastructure for core manufacturing processes.",
  },
  {
    question: "What industries use BROAD India's absorption chillers?",
    answer:
      "BROAD India serves a wide range of sectors including petrochemical plants, oil refineries (IOCL), steel manufacturing (JSW), FMCG (ITC), power generation (NTPC), food & beverage processing, textile manufacturing, pharmaceutical facilities, hospitals, commercial office buildings, hotels, data centres, and green-certified buildings. Any facility with access to waste heat, steam, or natural gas can benefit from absorption cooling technology.",
  },
  {
    question:
      "What is the difference between a VAC/VAM and a conventional electric chiller?",
    answer:
      "The key difference is the energy source: a conventional chiller uses an electricity-powered mechanical compressor, while a VAC/VAM uses a thermal compressor driven by heat. Absorption chillers use water as a natural refrigerant (zero ODP, zero GWP) instead of synthetic refrigerants like HFCs. They have fewer moving parts, lower maintenance requirements, and can recover waste heat that would otherwise be exhausted. The trade-off is a larger physical footprint and slightly lower COP, but the operational cost savings and environmental benefits make them the preferred choice for large-scale industrial cooling.",
  },
];

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
      "BROAD India delivers cutting-edge Vapour Absorption Machines (VAM) and non-electric HVAC solutions. India's top supplier of absorption chillers, CCHP systems, and fuel gas recovery chillers since 2001.",
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
    "name": "BROAD Air Conditioning India Pvt. Ltd. - Surat (HQ)",
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
    "name": "BROAD Air Conditioning India Pvt. Ltd. - Gurugram",
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
    <div className="bg-white">
      <PromoPopup
        imageUrl="/images/CII_Event_Banner.jpeg"
        altText="CII Event Promotion"
      />
      <h1 className="sr-only">Vapour Absorption Chillers (VAC / VAM) &amp; Non-Electric HVAC Solutions for Indian Industry</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessSurat, localBusinessGurugram]),
        }}
      />
      <HomePageCarousel />
      <CTA />
      <IntroText />
      
      <ImpactMetrics />
      <Sustainable />
      
      <WhyNonElectric />
      
      <SpecialistsProduct />
      
      <RecentInstallations />
      
      <MissionFocus />
      <TrustedClients />
      <IndustriesAccordion />
      
      <EventsGallery />
      <RecentNews />
      <Newsletter />
      
      <ProductFAQ faqs={homeFaqs} />
      <CTA />
    </div>
  );
}

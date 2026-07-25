import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BROAD India | Vapor Absorption Chillers & HVAC Solutions",
  description: "Get in touch with BROAD India for advanced Vapor Absorption Chillers and non-electric HVAC solutions. Reach our Surat or Gurugram offices for inquiries.",
  openGraph: {
    title: "Contact BROAD India | Vapor Absorption Chillers & HVAC Solutions",
    description: "Get in touch with BROAD India for advanced Vapor Absorption Chillers and non-electric HVAC solutions. Reach our Surat or Gurugram offices for inquiries.",
    url: "https://www.broadindia.com/contact-us",
    siteName: "BROAD India",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "BROAD India - Non-Electric HVAC Solutions",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BROAD India | Vapor Absorption Chillers & HVAC Solutions",
    description: "Get in touch with BROAD India for advanced Vapor Absorption Chillers and non-electric HVAC solutions. Reach our Surat or Gurugram offices for inquiries.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://www.broadindia.com/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSurat, localBusinessGurugram]),
        }}
      />
      {children}
    </>
  );
}

import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/contact-us",
    title: "Contact BROAD India | Vapour Absorption Chillers & HVAC",
    description: "Get in touch with BROAD India for advanced Vapour Absorption Chillers and non-electric HVAC solutions. Reach our Surat or Gurugram offices for inquiries.",
  }),
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSurat = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BROAD Air Conditioning India Pvt. Ltd. - Surat (HQ)",
    "image": "https://www.broadindia.com/images/BROAD-India-final.png",
    "url": "https://www.broadindia.com/contact-us",
    "telephone": "+91-9427851584",
    "email": "akshay@broad.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 908, Luxuria Trade Hub, Vr mall, Dumas Rd, New Magdalla",
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
    "image": "https://www.broadindia.com/images/BROAD-India-final.png",
    "url": "https://www.broadindia.com/contact-us",
    "telephone": "+91-0124-4012824",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "N-14/27, DLF Phase-2",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122002",
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

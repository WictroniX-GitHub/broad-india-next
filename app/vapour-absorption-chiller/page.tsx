import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductFAQ from "@/components/ProductFAQ";

export const metadata: Metadata = {
  title:
    "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
  description:
    "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers. Energy-efficient, non-electric cooling solutions for industrial applications.",
  keywords: [
    "vapor absorption chiller",
    "non-electric chiller",
    "absorption chiller",
    "direct fired chiller",
    "waste heat chiller",
    "solar chiller",
    "multi-energy chiller",
    "BROAD chiller",
    "industrial cooling",
  ],
  openGraph: {
    title:
      "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
    description:
      "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vapor Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
    description:
      "Explore BROAD India's range of vapor absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers.",
  },
};

const VapourAbsorptionChiller = () => {
  const subCategories = [
    {
      title: "Direct-Fired Vapour Absorption Chiller",
      description:
        "Premium, thermally-driven HVAC solution for industrial and commercial environments. Dual-fuel burner (natural gas or light oil), high-capacity cooling and hot water, ultra-low emissions.",
      href: "/vapour-absorption-chiller/direct-fired-chiller",
      image: "/images/nonElec.jpg",
    },
    {
      title: "Waste‑Heat‑Driven Vapour Absorption Chiller",
      description:
        "Energy recovery solution leveraging low-grade thermal energy from industrial processes. Converts waste heat into chilled and heating water, robust and efficient.",
      href: "/vapour-absorption-chiller/waste-heat-chiller",
      image: "/images/wasteHeat.jpg",
    },
    {
      title: "Two-Stage Absorption Chiller",
      description:
        "Advanced dual-cycle system for high efficiency, reliability, and superior energy savings. Two-stage lithium bromide-water absorption technology.",
      href: "/vapour-absorption-chiller/two-stage-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg",
    },
    {
      title: "Single-Stage Absorption Chiller",
      description:
        "Proven, reliable, and cost-effective cooling using single-stage lithium bromide absorption technology. Ideal for standard industrial and commercial applications.",
      href: "/vapour-absorption-chiller/single-stage-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg",
    },
    {
      title: "Multi-Energy Absorption Chiller",
      description:
        "Flexible solution capable of running on steam, hot water, exhaust gas, and natural gas. Efficient switching between energy inputs for cost optimization.",
      href: "/vapour-absorption-chiller/multi-energy-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg",
    },
    {
      title: "Solar Driven Absorption Chiller",
      description:
        "Environmentally friendly cooling harnessing renewable solar energy. Zero-emission, sustainable solution for commercial and industrial applications.",
      href: "/vapour-absorption-chiller/solar-driven",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png",
    },
    {
      title: "Packaged Absorption Chiller",
      description:
        "Complete, factory-assembled solution for easy installation and reliable performance. Versatile for industrial and commercial cooling and heating needs.",
      href: "/vapour-absorption-chiller/packaged-chiller",
      image:
        "https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a vapor absorption chiller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A vapor absorption chiller is a cooling system that uses heat (like waste heat or steam) instead of electricity to drive the refrigeration cycle, making it a highly energy-efficient and eco-friendly cooling solution."
        }
      },
      {
        "@type": "Question",
        "name": "How does an absorption chiller work without electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It uses a thermal compressor instead of a mechanical one. Heat sources like steam, hot water, natural gas, or waste heat are used to vaporize the refrigerant (typically water) from an absorbent (like lithium bromide), producing a cooling effect with minimal electrical power."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of using a vapor absorption machine in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Benefits include drastically reduced electricity consumption, lower operating costs, utilization of industrial waste heat, and a smaller carbon footprint since they use water as a refrigerant instead of ozone-depleting chemicals."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vapor Absorption Chiller Solutions",
    "description": "Non-electric cooling solutions using vapor absorption technology for industrial and commercial applications across India.",
    "provider": {
      "@type": "Organization",
      "name": "BROAD India",
      "url": "https://www.broadindia.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Industrial Cooling Solutions"
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Vapour Absorption Chillers
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Pioneering Non-Electric Cooling with BROAD Vapour Absorption Chillers
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              In an era where industrial cooling demands are surging and electricity costs in India continue to fluctuate, <strong>BROAD India</strong> provides a transformative solution: the <strong>Vapour Absorption Chiller (VAC)</strong>. Unlike conventional mechanical chillers that rely heavily on grid electricity, our absorption chillers utilize thermal energy - such as industrial waste heat, steam, hot water, natural gas, or even solar energy - to drive the refrigeration cycle. This paradigm shift in HVAC technology offers unprecedented energy efficiency, operational reliability, and environmental sustainability for large-scale commercial and industrial applications.
            </p>
            <p>
              At the core of our technology is a highly efficient lithium bromide-water absorption cycle. Water acts as the natural, zero-ODP (Ozone Depletion Potential), and zero-GWP (Global Warming Potential) refrigerant, while lithium bromide serves as the absorbent. By completely eliminating the need for ozone-depleting CFCs and HCFCs, BROAD chillers align perfectly with India&apos;s stringent environmental regulations and corporate net-zero sustainability goals. Our chillers represent a critical step toward decarbonizing the cooling sector, which currently accounts for a massive portion of national energy consumption.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why India&apos;s Industries are Shifting to Absorption Cooling</h3>
            <p>
              India&apos;s industrial sector, spanning textiles, pharmaceuticals, chemicals, and heavy manufacturing, generates vast amounts of low-grade waste heat. Traditionally exhausted into the atmosphere, this thermal energy can now be captured and monetized. A waste-heat-driven vapour absorption chiller recovers this otherwise lost energy to produce chilled water for process cooling or facility air conditioning, effectively delivering &quot;free cooling&quot; and drastically reducing the facility&apos;s overall energy intensity. This closed-loop approach to thermal management is the cornerstone of a circular energy economy.
            </p>
            <p>
              Furthermore, many regions across India face grid constraints and high peak tariffs. By deploying a BROAD non-electric chiller, facilities can slash their electrical peak demand load by up to 90%, freeing up critical power infrastructure for core manufacturing processes. This electrical independence translates into enhanced operational resilience, protection against tariff hikes, and a rapid return on investment (ROI) that typically pays for the equipment within a few years of operation.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unmatched Reliability and Intelligent Operation</h3>
            <p>
              BROAD Absorption Chillers are engineered with virtually no moving parts within the main refrigeration cycle, bypassing the mechanical wear and tear inherent in electric centrifugal or screw compressors. The result is a whisper-quiet, vibration-free operation with an extended lifespan often exceeding 25 years. Coupled with BROAD&apos;s advanced anti-crystallization controls, automated multi-point vacuum purging systems, and comprehensive IoT-enabled remote monitoring, our chillers ensure uninterrupted, trouble-free performance year after year. 
            </p>
            <p>
              Whether you are upgrading an aging chilled water plant, integrating cooling into a cogeneration setup, or looking to harness solar thermal power, BROAD India has the engineering expertise to customize a thermal cooling solution tailored to your exact load profile and heat availability.
            </p>
            <p className="pt-4 font-medium text-center text-xl text-blue-800">
              Explore our comprehensive portfolio of absorption technologies below to find the perfect solution for your facility.
            </p>
          </div>
        </div>

        {/* Sub-categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {subCategories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative h-56 overflow-hidden rounded-t-lg bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-sm line-clamp-3">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Key Features & Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Non-Electric Operation</h4>
              <p className="text-gray-600 text-sm">
                Operates without electricity, ideal for regions with high power
                costs or limited grid access
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-2">Environmentally Friendly</h4>
              <p className="text-gray-600 text-sm">
                Uses water as refrigerant, no CFCs or HFCs, reduced carbon
                footprint
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold mb-2">Low Maintenance</h4>
              <p className="text-gray-600 text-sm">
                Minimal moving parts, robust construction, long service life
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <ProductFAQ faqs={[
        {
          question: "How does a vapour absorption chiller save electricity?",
          answer: "Unlike conventional electric chillers that rely on power-hungry mechanical compressors, a vapour absorption chiller is driven by heat (like waste heat, steam, or natural gas). This eliminates the main compressor, slashing electrical peak demand by up to 90% and drastically reducing your facility's operational costs."
        },
        {
          question: "What heat sources can drive a BROAD absorption chiller?",
          answer: "BROAD chillers are highly versatile and can be driven by direct-fired natural gas or diesel, industrial waste heat (exhaust gas or jacket water), high or low-pressure steam, hot water, and even solar thermal energy. Multi-energy models can seamlessly switch between these sources."
        },
        {
          question: "What is the lifespan of a BROAD vapour absorption machine (VAM)?",
          answer: "Because there are virtually no moving parts in the main refrigeration cycle, a BROAD absorption chiller experiences almost zero mechanical wear and tear. With proper maintenance, these machines typically operate reliably for over 25 years."
        },
        {
          question: "Are absorption chillers environmentally friendly?",
          answer: "Yes, they are exceptionally green. They utilize pure water as the refrigerant and lithium bromide as the absorbent, completely eliminating ozone-depleting CFCs and HCFCs. Additionally, by recovering industrial waste heat, they significantly reduce fossil fuel consumption and carbon emissions."
        }
      ]} />
    </div>
  );
};

export default VapourAbsorptionChiller;

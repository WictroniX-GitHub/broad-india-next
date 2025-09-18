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

  return (
    <div>
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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            BROAD Vapour Absorption Chiller Product Range
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>BROAD India</strong> offers a comprehensive portfolio of{" "}
            <strong>Vapour Absorption Chillers (VAC)</strong> engineered for
            energy efficiency, reliability, and sustainability. Our solutions
            cover direct-fired, waste-heat-driven, two-stage, single-stage,
            multi-energy, solar-driven, and packaged absorption chillers—each
            designed to meet diverse industrial and commercial cooling and
            heating needs.
            <br />
            Leveraging advanced lithium bromide-water absorption technology,
            BROAD chillers deliver powerful cooling and heating with minimal
            electricity demand, ultra-low emissions, and robust performance. Our
            systems support India&apos;s net-zero and sustainability goals by
            reducing power consumption, eliminating harmful refrigerants, and
            maximizing the use of renewable and waste heat sources.
            <br />
            Explore our product range below to find the ideal solution for your
            facility&apos;s requirements, heat source, and operational
            priorities.
          </p>
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
    </div>
  );
};

export default VapourAbsorptionChiller;

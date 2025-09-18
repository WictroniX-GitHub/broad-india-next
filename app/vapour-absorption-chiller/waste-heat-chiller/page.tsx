import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Waste Heat Driven Vapor Absorption Chiller - Energy Recovery Solutions | BROAD India",
  description:
    "BROAD Waste Heat Driven Vapor Absorption Chillers convert industrial waste heat into cooling energy. Maximize energy efficiency and reduce operating costs with our waste heat recovery chillers.",
  keywords: [
    "waste heat chiller",
    "waste heat recovery",
    "heat recovery chiller",
    "waste heat driven cooling",
    "industrial waste heat",
    "energy recovery",
    "vapor absorption chiller",
    "BROAD waste heat",
    "thermal energy recovery",
  ],
  openGraph: {
    title:
      "Waste Heat Driven Vapor Absorption Chiller - Energy Recovery Solutions | BROAD India",
    description:
      "BROAD Waste Heat Driven Vapor Absorption Chillers convert industrial waste heat into cooling energy. Maximize energy efficiency and reduce costs.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/wasteHeat.jpg",
        width: 1200,
        height: 630,
        alt: "BROAD Waste Heat Driven Vapor Absorption Chiller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Waste Heat Driven Vapor Absorption Chiller - Energy Recovery Solutions | BROAD India",
    description:
      "BROAD Waste Heat Driven Vapor Absorption Chillers convert industrial waste heat into cooling energy.",
    images: ["/images/wasteHeat.jpg"],
  },
};

const WasteHeatChiller = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/wasteHeat.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Waste‑Heat‑Driven Vapour Absorption Chiller
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/vapour-absorption-chiller"
            className="hover:text-blue-600"
          >
            Vapour Absorption Chillers
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Waste Heat Chiller</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waste‑Heat‑Driven Vapour Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-Performance Waste Heat Recovery for Industrial and Commercial
              Cooling & Heating
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-12">
            <Image
              src="/images/wasteHeat.jpg"
              alt="Waste Heat Driven Vapour Absorption Chiller"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              BROAD&apos;s Waste-Heat-Driven Vapour Absorption Chiller is a
              high-performance, energy recovery solution that leverages
              low-grade thermal energy from industrial processes to deliver
              powerful cooling and heating in large-scale commercial and
              industrial settings. This system enables facilities to convert
              waste heat—from exhaust gases, boiler flue gases, or process
              steam—into useful chilled water (above 5°C) and heating water
              (below 95°C), with capacity ranges from 233 kW to 11,630 kW
              (66-3,307 RT).
            </p>
            <h3 className="text-2xl font-bold mb-4">
              What Is BROAD Waste-Heat-Driven Absorption Chiller?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              The chiller utilizes robust lithium bromide-water absorption
              technology and tailor-engineered shell-and-tube heat exchangers,
              ensuring durable operation under variable load conditions. It is
              designed to integrate seamlessly with combined heat and power
              (CHP) plants, industrial boilers, and flue-gas stacks, making it
              ideal for process cooling, CCHP systems, district energy, and
              energy-positive building envelopes.
            </p>
          </div>

          {/* Download Catalogue Section */}
          <div className="text-center mb-8">
            <a
              href="/files/nonElec.pdf"
              download
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Product Catalogue
            </a>
          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Technical Specifications
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Cooling Capacity:</strong> 233 kW to 11,630 kW
                  (66-3,307 RT)
                </li>
                <li>
                  <strong>Chilled Water:</strong> Above 5°C
                </li>
                <li>
                  <strong>Heating Water:</strong> Below 95°C
                </li>
                <li>
                  <strong>Waste Heat Input:</strong> From 150°C upwards
                </li>
                <li>
                  <strong>Technology:</strong> Lithium bromide-water absorption
                </li>
                <li>
                  <strong>Heat Exchangers:</strong> Shell-and-tube design
                </li>
                <li>
                  <strong>Operational Electricity Demand:</strong> Minimal, only
                  for pumps and controls
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li>• Outstanding Coefficient of Performance (COP)</li>
                <li>• Automatic non-condensable gas purge systems</li>
                <li>• Crystallisation prevention circuits</li>
                <li>• Smart controllers with continuous adjustment</li>
                <li>• Effective condenser control</li>
                <li>• Vacuum maintenance systems</li>
                <li>• Modular design and low mechanical complexity</li>
              </ul>
            </div>
          </div>

          {/* Waste Heat Sources */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Compatible Waste Heat Sources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">🔥</div>
                <h4 className="font-semibold">Hot Exhaust Gases</h4>
                <p className="text-sm text-gray-600">
                  From industrial processes
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">🏭</div>
                <h4 className="font-semibold">Boiler Flue Gases</h4>
                <p className="text-sm text-gray-600">From heating systems</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">💨</div>
                <h4 className="font-semibold">Process Steam</h4>
                <p className="text-sm text-gray-600">From manufacturing</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">⚡</div>
                <h4 className="font-semibold">CHP Plants</h4>
                <p className="text-sm text-gray-600">Combined heat and power</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">🔧</div>
                <h4 className="font-semibold">Industrial Boilers</h4>
                <p className="text-sm text-gray-600">
                  Steam generation systems
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-orange-600 text-3xl mb-2">🏗️</div>
                <h4 className="font-semibold">Flue‑Gas Stacks</h4>
                <p className="text-sm text-gray-600">Industrial emissions</p>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏭</div>
                <h4 className="font-semibold">Industrial Parks</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎓</div>
                <h4 className="font-semibold">Campuses</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏥</div>
                <h4 className="font-semibold">Hospitals</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h4 className="font-semibold">Hotels</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌆</div>
                <h4 className="font-semibold">District Energy Systems</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏗️</div>
                <h4 className="font-semibold">Manufacturing Plants</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">💻</div>
                <h4 className="font-semibold">Data Centers</h4>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Environmental & Economic Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">♻️</span>
                </div>
                <h4 className="font-semibold mb-2">Waste Heat Recovery</h4>
                <p className="text-gray-600 text-sm">
                  Captures and converts heat that would otherwise be lost,
                  maximizing energy use
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">💰</span>
                </div>
                <h4 className="font-semibold mb-2">Energy Savings</h4>
                <p className="text-gray-600 text-sm">
                  Significantly reduces operational costs and electricity demand
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold mb-2">Carbon Reduction</h4>
                <p className="text-gray-600 text-sm">
                  Lowers facility carbon footprint by efficiently utilizing
                  waste heat and avoiding harmful refrigerant
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Waste Heat into Valuable Energy
            </h3>
            <p className="text-lg mb-6">
              Discover how our Waste-Heat-Driven Chillers can improve your
              energy efficiency and reduce costs.
            </p>
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteHeatChiller;

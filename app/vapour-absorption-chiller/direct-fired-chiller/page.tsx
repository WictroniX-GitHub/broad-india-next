import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Direct Fired Vapor Absorption Chiller - Natural Gas & Diesel Powered | BROAD India",
  description:
    "BROAD Direct Fired Vapor Absorption Chillers use natural gas, diesel, or biogas for efficient cooling. Ideal for areas without steam supply. Energy-efficient, non-electric cooling solution.",
  keywords: [
    "direct fired chiller",
    "gas fired chiller",
    "diesel chiller",
    "biogas chiller",
    "natural gas chiller",
    "vapor absorption chiller",
    "non-electric cooling",
    "BROAD direct fired",
    "gas powered cooling",
  ],
  openGraph: {
    title:
      "Direct Fired Vapor Absorption Chiller - Natural Gas & Diesel Powered | BROAD India",
    description:
      "BROAD Direct Fired Vapor Absorption Chillers use natural gas, diesel, or biogas for efficient cooling. Ideal for areas without steam supply.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Direct Fired Vapor Absorption Chiller - Natural Gas & Diesel Powered | BROAD India",
    description:
      "BROAD Direct Fired Vapor Absorption Chillers use natural gas, diesel, or biogas for efficient cooling.",
  },
};

const DirectFiredChiller = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/nonElec.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Direct-Fired Vapour Absorption Chiller
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
          <span className="text-gray-800">Direct-Fired Chiller</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Direct-Fired Vapour Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Non-Electric Cooling and Heating Solution for Industrial and
              Commercial Applications
            </p>
          </div>
          {/* Product Image */}
          <div className="mb-12">
            <Image
              src="/images/nonElec.jpg"
              alt="Direct-Fired Vapour Absorption Chiller"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              The BROAD Direct-Fired Vapour Absorption Chiller is a premium,
              thermally-driven HVAC solution engineered for industrial and
              commercial environments seeking reliable, energy-efficient, and
              non-electric cooling and heating. This advanced system leverages
              natural gas or light fuel oil to deliver high-capacity cooling and
              hot water with minimal electricity demand and ultra-low
              emissions—making it ideal for large facilities, data centers,
              manufacturing plants, hospitals, and sites with unstable power
              supply.
            </p>
            <h3 className="text-2xl font-bold mb-4">
              What Is BROAD Direct-Fired Vapour Absorption Chiller?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              This chiller utilizes state-of-the-art lithium bromide-water
              absorption technology for sustainable, high-performance cooling
              ranging from 233 kW to 11,630 kW (66–3,300 RT), and can provide
              hot water up to 65°C. It is powered by a dual-fuel burner (natural
              gas or light oil) and designed for environments where eliminating
              electric-driven cooling is crucial.
            </p>
          </div>{" "}
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
                  (66–3,300 RT)
                </li>
                <li>
                  <strong>Hot Water Output:</strong> Up to 65°C
                </li>
                <li>
                  <strong>Fuel Types:</strong> Natural gas, Light fuel oil
                </li>
                <li>
                  <strong>NOx Emissions:</strong> Below 10 ppm
                </li>
                <li>
                  <strong>Technology:</strong> Lithium bromide-water absorption
                </li>
                <li>
                  <strong>Operation:</strong> Minimal electric input, suitable
                  for high-tariff and unstable grids
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li>• Dual-fuel burner for gas or oil operation</li>
                <li>• Corrosion-resistant heat exchangers</li>
                <li>
                  • Automatic non-condensable gas purging and vacuum maintenance
                  for stable long-term performance
                </li>
                <li>
                  • Intelligent control logic, automated capacity modulation,
                  and crystallization prevention
                </li>
                <li>
                  • Modular design—adaptable for space cooling, process cooling,
                  hot water supply, and supplementary heating
                </li>
              </ul>
            </div>
          </div>
          {/* Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏥</div>
                <h4 className="font-semibold">Hospitals</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h4 className="font-semibold">Hotels</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏢</div>
                <h4 className="font-semibold">Shopping Malls</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">💻</div>
                <h4 className="font-semibold">Data Centers</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏭</div>
                <h4 className="font-semibold">Manufacturing Plants</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌆</div>
                <h4 className="font-semibold">District Energy Systems</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏗️</div>
                <h4 className="font-semibold">
                  Large Buildings & Industrial Plants
                </h4>
              </div>
            </div>
          </div>
          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Energy Efficient</h4>
                <p className="text-gray-600 text-sm">
                  Operates at optimal efficiency even under partial loads,
                  saving costs and power
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold mb-2">Low Carbon Footprint</h4>
                <p className="text-gray-600 text-sm">
                  Ultra-low NOx emissions and ability to run on waste heat
                  sources, supporting sustainability targets
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold mb-2">Reliable Performance</h4>
                <p className="text-gray-600 text-sm">
                  Proven deployments across Asia, Europe, North America, and
                  India
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💰</span>
                </div>
                <h4 className="font-semibold mb-2">
                  Reduced Operational Costs
                </h4>
                <p className="text-gray-600 text-sm">
                  Flexible fuel choices, low energy demand, and advanced
                  capacity modulation{" "}
                </p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-lg mb-6">
              Contact us to discuss how Direct-Fired Vapour Absorption Chillers
              can benefit your facility.
            </p>
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectFiredChiller;

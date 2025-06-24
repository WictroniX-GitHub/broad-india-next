"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DirectFiredChiller = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              The BROAD Direct-Fired Vapour Absorption Chiller is a
              high-efficiency, thermally-driven cooling system that operates
              without the need for electricity. Powered by natural gas or light
              fuel oil, the system offers dependable air conditioning and hot
              water generation for large buildings, industrial plants, district
              energy systems, and facilities with limited grid access.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Engineered with advanced lithium bromide-water absorption
              technology, this chiller delivers cooling capacities ranging from
              233 kW to 11,630 kW (66–3,300 RT), with hot water output of up to
              65 °C. Its dual-fuel burner supports both gas and oil operation,
              offering flexibility in fuel choice while maintaining low
              emissions with NOx levels below 10 ppm. The unit's modular design
              enables it to serve multiple functions, including space cooling,
              process cooling, domestic hot water supply, and supplementary
              heating.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              BROAD's direct-fired model incorporates corrosion-resistant heat
              exchangers, automatic non-condensable gas purging, and vacuum
              maintenance systems to extend service life and maintain stable
              long-term performance. Crystallization prevention, intelligent
              control logic, and automated capacity modulation ensure optimal
              operation under partial load conditions, reducing operational
              costs and improving energy efficiency.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The system requires minimal electrical input making it especially
              suitable for regions with high electricity tariffs or frequent
              power instability. With proven deployments across Asia, Europe,
              and North America, BROAD Direct-Fired Absorption Chillers are
              widely used in hospitals, hotels, shopping malls, data centers,
              and manufacturing facilities seeking reliable, non-electric HVAC
              solutions with reduced carbon footprint.
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
                  <strong>Operation:</strong> Non-electric, minimal electrical
                  input required
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li>• Dual-fuel burner capability</li>
                <li>• Corrosion-resistant heat exchangers</li>
                <li>• Automatic non-condensable gas purging</li>
                <li>• Vacuum maintenance systems</li>
                <li>• Crystallization prevention</li>
                <li>• Intelligent control logic</li>
                <li>• Automated capacity modulation</li>
                <li>• Modular design for multiple functions</li>
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
                <h4 className="font-semibold">Manufacturing</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌆</div>
                <h4 className="font-semibold">District Energy</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏗️</div>
                <h4 className="font-semibold">Industrial Plants</h4>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏢</div>
                <h4 className="font-semibold">Large Buildings</h4>
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
                  Optimal operation under partial load conditions with automated
                  capacity modulation
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold mb-2">Low Emissions</h4>
                <p className="text-gray-600 text-sm">
                  NOx levels below 10 ppm for environmental compliance
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold mb-2">Reliable Operation</h4>
                <p className="text-gray-600 text-sm">
                  Proven deployments across Asia, Europe, and North America
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

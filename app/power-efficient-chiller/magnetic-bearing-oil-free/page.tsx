"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MagneticBearingOilFree = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Magnetic Bearing Oil Free Chiller
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
          <Link href="/power-efficient-chiller" className="hover:text-blue-600">
            Power Efficient Chillers
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Magnetic Bearing Oil Free</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Magnetic Bearing Oil Free Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Power-Efficient Packaged Magnetic Bearing Oil-Free Electric
              Chiller (MagLev Chiller & Heat Pump)
            </p>
          </div>
          {/* Product Image */}
          <div className="mb-12">
            <Image
              src="https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg"
              alt="Magnetic Bearing Oil Free Chiller"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              BROAD's Power-Efficient Chiller is a next-generation,
              factory-packaged solution that integrates high-efficiency magnetic
              bearing centrifugal chillers with optional heat pump capability,
              offering unmatched energy savings, ultra-quiet performance, and
              oil-free reliability for commercial and industrial applications.
              Utilizing Danfoss Turbocor® twin-impeller compressors and R‑513A
              refrigerant, this system eliminates mechanical contact through
              magnetic levitation technology, ensuring near-zero vibration,
              significantly reduced maintenance, and extended equipment
              lifespan.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With IPLV ratings reaching up to 13.26, these chillers are
              engineered to deliver precise cooling capacity modulation with
              variable-speed control as low as 0.1 Hz, maximizing part-load
              performance by over 50% compared to conventional systems. The
              unit's integrated digital control platform, simplified piping
              layout, and compact footprint allow for seamless deployment across
              mission-critical environments such as data centers, healthcare
              facilities, high-rise buildings, and green campuses.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What sets this system apart is its commitment to total operational
              efficiency and sustainability. With built-in backup power to
              protect the rotor during outages, and a design that uses no
              lubricating oil or CFC-based refrigerants, the BROAD Electric
              Chiller complies with global standards such as AHRI, ASHRAE, and
              FEMP, while helping clients achieve ambitious ESG and carbon
              neutrality goals. Whether deployed as a standalone unit or as part
              of a broader district cooling or CCHP system, this chiller
              embodies BROAD's mission to deliver long-life, low-carbon HVAC
              solutions through precision engineering and system integration
              excellence.
            </p>{" "}
          </div>
          {/* Download Catalogue Section */}
          <div className="text-center mb-8">
            <a
              href="/files/broadElectricChiller.pdf"
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
          </div>{" "}
          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Technical Specifications
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Cooling Capacity:</strong> 150 ton to 2000 ton
                </li>
                <li>
                  <strong>IPLV Rating:</strong> Up to 13.26
                </li>
                <li>
                  <strong>COP:</strong> High efficiency (6.5)
                </li>
                <li>
                  <strong>Compressor:</strong> Danfoss Turbocor® twin-impeller
                </li>
                <li>
                  <strong>Refrigerant:</strong> R‑513A (environmentally
                  friendly)
                </li>
                <li>
                  <strong>Variable Speed Control:</strong> As low as 0.1 Hz
                </li>
                <li>
                  <strong>Technology:</strong> Magnetic levitation
                </li>
                <li>
                  <strong>Operation:</strong> Oil-free, near-zero vibration
                </li>
                <li>
                  <strong>Heat Pump Option:</strong> Available
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Performance Specifications
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Adjustable Load:</strong> 10~100%
                </li>
                <li>
                  <strong>Operation Noise:</strong> ≤65dB (A)
                </li>
                <li>
                  <strong>Operation Vibration:</strong> ≤0.30mm
                </li>
                <li>
                  <strong>Life Design:</strong> 30 years
                </li>
                <li>
                  <strong>Electrical Grid Impact:</strong> Minimum (as low as
                  2A)
                </li>
                <li>
                  <strong>Multi Compressors:</strong> Unmatched reliability and
                  flexibility
                </li>
                <li>
                  <strong>Package Design:</strong> Available (option)
                </li>
                <li>
                  <strong>Portfolio:</strong> Oil-free compressor technology
                </li>
              </ul>
            </div>{" "}
          </div>
          {/* Revolutionary Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Revolutionary Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-blue-600 text-2xl mb-2">🧲</div>
                <h4 className="font-semibold text-sm mb-1">
                  Magnetic Bearing Technology
                </h4>
                <p className="text-xs text-gray-600">
                  Eliminates mechanical contact
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-green-600 text-2xl mb-2">🔋</div>
                <h4 className="font-semibold text-sm mb-1">
                  Backup Power Protection
                </h4>
                <p className="text-xs text-gray-600">
                  Built-in rotor protection
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-purple-600 text-2xl mb-2">💻</div>
                <h4 className="font-semibold text-sm mb-1">
                  Digital Control Platform
                </h4>
                <p className="text-xs text-gray-600">
                  Integrated smart controls
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-orange-600 text-2xl mb-2">🔧</div>
                <h4 className="font-semibold text-sm mb-1">
                  Simplified Design
                </h4>
                <p className="text-xs text-gray-600">
                  Compact footprint & piping
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-red-600 text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-sm mb-1">
                  Precise Modulation
                </h4>
                <p className="text-xs text-gray-600">
                  Capacity control accuracy
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-teal-600 text-2xl mb-2">💧</div>
                <h4 className="font-semibold text-sm mb-1">
                  Oil-Free Operation
                </h4>
                <p className="text-xs text-gray-600">
                  No lubricating oil required
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-indigo-600 text-2xl mb-2">⏰</div>
                <h4 className="font-semibold text-sm mb-1">
                  Extended Lifespan
                </h4>
                <p className="text-xs text-gray-600">30-year design life</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-emerald-600 text-2xl mb-2">🔇</div>
                <h4 className="font-semibold text-sm mb-1">Ultra-Quiet</h4>
                <p className="text-xs text-gray-600">≤65dB operation noise</p>
              </div>
            </div>
          </div>
          {/* Performance Advantages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Performance Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-4">50%</div>
                <h4 className="font-semibold mb-2">
                  Better Part-Load Performance
                </h4>
                <p className="text-gray-600 text-sm">
                  Compared to conventional systems
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-blue-600 text-4xl mb-4">0</div>
                <h4 className="font-semibold mb-2">Vibration Level</h4>
                <p className="text-gray-600 text-sm">
                  Near-zero vibration operation
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-purple-600 text-4xl mb-4">13.26</div>
                <h4 className="font-semibold mb-2">Maximum IPLV Rating</h4>
                <p className="text-gray-600 text-sm">
                  Industry-leading efficiency
                </p>
              </div>
            </div>
          </div>
          {/* Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Mission-Critical Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">💻</div>
                <h4 className="font-semibold">Data Centers</h4>
                <p className="text-sm text-gray-600">Ultra-reliable cooling</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏥</div>
                <h4 className="font-semibold">Healthcare Facilities</h4>
                <p className="text-sm text-gray-600">
                  Quiet operation essential
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏢</div>
                <h4 className="font-semibold">High-Rise Buildings</h4>
                <p className="text-sm text-gray-600">
                  Compact, efficient design
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌱</div>
                <h4 className="font-semibold">Green Campuses</h4>
                <p className="text-sm text-gray-600">Sustainability focused</p>
              </div>
            </div>
          </div>
          {/* Compliance Standards */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Global Standards Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h4 className="font-semibold mb-2">AHRI Certified</h4>
                <p className="text-gray-600 text-sm">
                  Air-Conditioning, Heating, and Refrigeration Institute
                  standards for performance and reliability
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">✓</span>
                </div>
                <h4 className="font-semibold mb-2">ASHRAE Compliant</h4>
                <p className="text-gray-600 text-sm">
                  American Society of Heating, Refrigerating and
                  Air-Conditioning Engineers compliance
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">✓</span>
                </div>
                <h4 className="font-semibold mb-2">FEMP Standards</h4>
                <p className="text-gray-600 text-sm">
                  Federal Energy Management Program requirements for government
                  facilities
                </p>
              </div>
            </div>
          </div>
          {/* Environmental Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Environmental & Sustainability Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-green-600">
                  Environmental Impact
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• No CFC-based refrigerants</li>
                  <li>• R‑513A environmentally friendly refrigerant</li>
                  <li>• Reduced carbon footprint</li>
                  <li>• Energy-efficient operation</li>
                  <li>• Supports carbon neutrality goals</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">
                  ESG Compliance
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Helps achieve ESG targets</li>
                  <li>• Supports green building certifications</li>
                  <li>• Long-life, low-carbon solutions</li>
                  <li>• Sustainable HVAC technology</li>
                  <li>• Corporate responsibility alignment</li>
                </ul>
              </div>
            </div>
          </div>
          {/* System Integration */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Flexible System Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Standalone Deployment
                </h4>
                <p className="text-gray-700 mb-4">
                  Perfect for individual building applications requiring
                  high-efficiency cooling with minimal maintenance requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Single building applications</li>
                  <li>• Retrofit installations</li>
                  <li>• Replacement systems</li>
                  <li>• Emergency cooling</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Integrated Systems
                </h4>
                <p className="text-gray-700 mb-4">
                  Seamlessly integrates with broader district cooling systems or
                  CCHP configurations for comprehensive energy solutions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• District cooling networks</li>
                  <li>• CCHP system integration</li>
                  <li>• Campus-wide installations</li>
                  <li>• Multi-building complexes</li>
                </ul>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Experience Next-Generation Cooling Technology
            </h3>
            <p className="text-lg mb-6">
              Discover how our Magnetic Bearing Oil-Free Chillers can transform
              your facility's energy efficiency and operational performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticBearingOilFree;

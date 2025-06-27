"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BroadTriGenerationalSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/CCHP_1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            BROAD Tri-Generational Solutions
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
          <Link href="/cchp-systems" className="hover:text-blue-600">
            CCHP Systems
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">
            BROAD Tri-Generational Solutions
          </span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BROAD Tri-Generational Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive Energy Solutions Delivering Electricity, Cooling,
              and Heating from a Single Integrated System
            </p>
          </div>{" "}
          {/* Product Image */}
          <div className="mb-12">
            <Image
              src="/images/CCHP_2.jpg"
              alt="BROAD CCHP Tri-Generational System"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Download Catalogue Section */}
          <div className="text-center mb-8">
            <a
              href="/files/CCHP.pdf"
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
          {/* System Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              The BROAD CCHP (Combined Cooling, Heating & Power) System delivers
              a comprehensive energy solution by integrating cogeneration and
              thermally driven absorption technology to produce electricity,
              chilled water, and hot water, all from a single waste heat powered
              plant. This trigeneration system harnesses exhaust heat from gas
              turbines or generators, channeling it into high-efficiency
              absorption chillers for cooling and into heat recovery units for
              space or process heating.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Capable of achieving total system efficiencies between 60%–80%,
              BROAD&apos;s CCHP solutions dramatically reduce lifecycle energy
              costs, carbon emissions, and reliance on grid electricity. With
              the same lithium bromide absorption core used in our chillers,
              BROAD CCHP units eliminate CFC/HFC refrigerants while enhancing
              part-load performance through industry-standard vacuum system
              control and heat exchanger integrity.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Proven in large-scale applications such as university medical
              campuses (e.g., University of Maryland), district heating
              networks, and industrial facilities, BROAD&apos;s CCHP systems
              provide plug-and-play distributed energy, even in locations with
              constrained grid eligibility, supporting decarbonization,
              resilience, and ROI across commercial, industrial, and
              institutional sites.
            </p>
          </div>
          {/* System Process Flow */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Tri-Generation Process Flow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl">🔥</span>
                </div>
                <h4 className="font-semibold mb-2">1. Fuel Input</h4>
                <p className="text-gray-600 text-sm">
                  Natural gas or alternative fuels power the prime mover
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">
                  2. Electricity Generation
                </h4>
                <p className="text-gray-600 text-sm">
                  Gas turbines or generators produce electrical power
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">♻️</span>
                </div>
                <h4 className="font-semibold mb-2">3. Heat Recovery</h4>
                <p className="text-gray-600 text-sm">
                  Exhaust heat captured for thermal applications
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🏠</span>
                </div>
                <h4 className="font-semibold mb-2">4. Cooling & Heating</h4>
                <p className="text-gray-600 text-sm">
                  Absorption systems provide chilled and hot water
                </p>
              </div>
            </div>
          </div>
          {/* Technical Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">System Performance</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Total System Efficiency:</strong> 60–80%
                </li>
                <li>
                  <strong>Energy Outputs:</strong> Electricity + Cooling +
                  Heating
                </li>
                <li>
                  <strong>Prime Movers:</strong> Gas turbines, generators
                </li>
                <li>
                  <strong>Absorption Technology:</strong> Lithium bromide-water
                </li>
                <li>
                  <strong>Control System:</strong> Integrated digital platform
                </li>
                <li>
                  <strong>Installation:</strong> Plug-and-play configuration
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Environmental Benefits
              </h3>
              <ul className="space-y-3">
                <li>• Dramatic carbon emissions reduction</li>
                <li>• No CFC/HFC refrigerants</li>
                <li>• Maximum fuel utilization efficiency</li>
                <li>• Reduced grid electricity dependence</li>
                <li>• Supports decarbonization goals</li>
                <li>• Enhanced energy resilience</li>
              </ul>
            </div>
          </div>
          {/* Key Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Proven Applications & Case Studies
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-blue-600 text-3xl mb-4">🏥</div>
                <h4 className="text-lg font-semibold mb-3">
                  University Medical Campuses
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Large-scale educational and healthcare facilities requiring
                  reliable, efficient energy solutions with high uptime
                  requirements.
                </p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>Featured:</strong> University of Maryland medical
                  campus with comprehensive trigeneration system
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-green-600 text-3xl mb-4">🌆</div>
                <h4 className="text-lg font-semibold mb-3">
                  District Heating Networks
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Municipal and community-scale systems providing centralized
                  energy generation with distributed benefits across multiple
                  buildings.
                </p>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <strong>Advantage:</strong> Centralized efficiency, reduced
                  infrastructure costs, community-wide benefits
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-orange-600 text-3xl mb-4">🏭</div>
                <h4 className="text-lg font-semibold mb-3">
                  Industrial Facilities
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Manufacturing and processing plants requiring continuous,
                  cost-effective energy with minimal grid dependence.
                </p>
                <div className="bg-orange-50 p-3 rounded text-sm">
                  <strong>Benefits:</strong> Energy independence, cost control,
                  production continuity assurance
                </div>
              </div>
            </div>
          </div>
          {/* Technology Advantages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Technology Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">
                  Proven Absorption Core
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Same lithium bromide technology as BROAD chillers</li>
                  <li>• Decades of proven performance</li>
                  <li>• Industry-standard vacuum system control</li>
                  <li>• Heat exchanger integrity assurance</li>
                  <li>• Enhanced part-load performance</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-green-600">
                  Integrated Design
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plug-and-play distributed energy</li>
                  <li>• Simplified installation and commissioning</li>
                  <li>• Coordinated control systems</li>
                  <li>• Optimized heat recovery integration</li>
                  <li>• Modular expansion capability</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Economic Benefits */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Economic Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  60-80%
                </div>
                <h4 className="font-semibold mb-2">System Efficiency</h4>
                <p className="text-gray-600 text-sm">
                  Maximum fuel utilization
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">ROI</div>
                <h4 className="font-semibold mb-2">Rapid Payback</h4>
                <p className="text-gray-600 text-sm">
                  Quick return on investment
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  50%
                </div>
                <h4 className="font-semibold mb-2">Cost Reduction</h4>
                <p className="text-gray-600 text-sm">Lifecycle energy costs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <h4 className="font-semibold mb-2">Energy Security</h4>
                <p className="text-gray-600 text-sm">Reliable power supply</p>
              </div>
            </div>
          </div>
          {/* Suitable Environments */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Ideal for Challenging Environments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">🏝️</div>
                <h4 className="font-semibold">Remote Locations</h4>
                <p className="text-sm text-gray-600">
                  Islands, isolated facilities
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">⚡</div>
                <h4 className="font-semibold">Grid Constraints</h4>
                <p className="text-sm text-gray-600">
                  Limited grid access areas
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">💰</div>
                <h4 className="font-semibold">High Energy Costs</h4>
                <p className="text-sm text-gray-600">
                  Expensive electricity regions
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">🌱</div>
                <h4 className="font-semibold">Sustainability Goals</h4>
                <p className="text-sm text-gray-600">
                  Carbon reduction targets
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">🚨</div>
                <h4 className="font-semibold">Emergency Backup</h4>
                <p className="text-sm text-gray-600">
                  Critical facility requirements
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-red-600 text-3xl mb-2">🏢</div>
                <h4 className="font-semibold">Energy Independence</h4>
                <p className="text-sm text-gray-600">
                  Self-sufficient operations
                </p>
              </div>
            </div>
          </div>
          {/* Integration Options */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              System Integration Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Standalone Systems
                </h4>
                <p className="text-gray-700 mb-4">
                  Complete energy solutions for individual facilities requiring
                  independence from grid electricity with comprehensive energy
                  outputs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hospital and healthcare facilities</li>
                  <li>• Manufacturing plants</li>
                  <li>• Data centers</li>
                  <li>• Resort and hospitality complexes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Distributed Networks
                </h4>
                <p className="text-gray-700 mb-4">
                  Multi-building campus or district-wide systems providing
                  centralized generation with distributed energy benefits across
                  facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• University campuses</li>
                  <li>• Industrial parks</li>
                  <li>• Municipal district heating</li>
                  <li>• Commercial complexes</li>
                </ul>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Energy Infrastructure
            </h3>
            <p className="text-lg mb-6">
              Discover how BROAD Tri-Generational Solutions can provide
              comprehensive energy independence while achieving your
              sustainability and cost reduction goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request System Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadTriGenerationalSolutions;

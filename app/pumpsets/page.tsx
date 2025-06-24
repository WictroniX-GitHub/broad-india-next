"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Pumpsets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/broadPump.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            BROAD Factory-Assembled Pumpsets
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BROAD Factory-Assembled Pumpset
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Energy-Efficient Water Distribution | Intelligent Hydronic Systems
              | Ready-to-Deploy Engineering
            </p>
          </div>{" "}
          {/* Product Image */}
          <div className="mb-12">
            <Image
              src="/images/broadPump.webp"
              alt="BROAD Factory-Assembled Pumpset"
              width={800}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Download Catalogue Section */}
          <div className="text-center mb-8">
            <a
              href="/files/pumpSet.pdf"
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
              BROAD's Factory-Assembled Pumpset is a next-generation water
              distribution system engineered for industrial, commercial, and
              utility-scale HVAC applications. Purpose-built to eliminate
              inefficiencies found in traditional pump installations, this
              integrated solution combines advanced inverter-driven pumps,
              zero-resistance valve architecture, automated dosing, and
              pre-tested modular design, ensuring maximum energy savings,
              minimal site work, and superior long-term reliability.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Unlike conventional field-assembled pump systems that often suffer
              from mismatched components, poor commissioning, and ongoing
              maintenance issues, BROAD's factory-engineered approach delivers a
              complete hydronic solution that has been fully tested and
              optimized before delivery. This comprehensive system includes
              intelligent variable frequency drives, precision flow control,
              automated water treatment, and integrated monitoring systems that
              work together seamlessly to maximize performance while minimizing
              operational complexity.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The modular design allows for easy installation and future
              expansion, while the pre-engineered components ensure optimal
              hydraulic efficiency from day one. With built-in redundancy,
              predictive maintenance capabilities, and energy optimization
              algorithms, BROAD Pumpsets deliver reliable water distribution for
              mission-critical applications including data centers, hospitals,
              manufacturing facilities, and large commercial buildings where
              system downtime is not an option.
            </p>
          </div>
          {/* Key Features */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Advanced System Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Inverter-Driven Pumps</h4>
                <p className="text-gray-600 text-sm">
                  Variable frequency drives for optimal energy efficiency
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🚰</span>
                </div>
                <h4 className="font-semibold mb-2">Zero-Resistance Valves</h4>
                <p className="text-gray-600 text-sm">
                  Minimized pressure drops and energy losses
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold mb-2">Automated Dosing</h4>
                <p className="text-gray-600 text-sm">
                  Intelligent water treatment and chemical dosing
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold mb-2">Pre-Tested Modules</h4>
                <p className="text-gray-600 text-sm">
                  Factory-tested and optimized before delivery
                </p>
              </div>
            </div>
          </div>
          {/* Technical Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Energy Efficiency Features
              </h3>
              <ul className="space-y-3">
                <li>• Advanced inverter-driven pump technology</li>
                <li>• Variable frequency drives (VFDs)</li>
                <li>• Zero-resistance valve architecture</li>
                <li>• Optimized hydraulic design</li>
                <li>• Energy monitoring and optimization</li>
                <li>• Predictive performance algorithms</li>
                <li>• Real-time efficiency tracking</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">System Intelligence</h3>
              <ul className="space-y-3">
                <li>• Integrated monitoring systems</li>
                <li>• Automated water treatment dosing</li>
                <li>• Predictive maintenance capabilities</li>
                <li>• Remote monitoring and control</li>
                <li>• Built-in system redundancy</li>
                <li>• Intelligent fault detection</li>
                <li>• Performance optimization software</li>
              </ul>
            </div>
          </div>
          {/* Installation Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              Installation & Deployment Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-4">📦</div>
                <h4 className="font-semibold mb-2">Factory-Assembled</h4>
                <p className="text-gray-600 text-sm">
                  Complete system assembled and tested at factory before
                  shipping
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h4 className="font-semibold mb-2">Minimal Site Work</h4>
                <p className="text-gray-600 text-sm">
                  Reduces on-site construction time and complexity
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-purple-600 text-4xl mb-4">🔧</div>
                <h4 className="font-semibold mb-2">Pre-Tested Integration</h4>
                <p className="text-gray-600 text-sm">
                  All components optimized and verified before delivery
                </p>
              </div>
            </div>
          </div>
          {/* Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Target Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏭</div>
                <h4 className="font-semibold">Industrial Applications</h4>
                <p className="text-sm text-gray-600">
                  Manufacturing facilities
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏢</div>
                <h4 className="font-semibold">Commercial Buildings</h4>
                <p className="text-sm text-gray-600">Office complexes</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">💻</div>
                <h4 className="font-semibold">Data Centers</h4>
                <p className="text-sm text-gray-600">
                  Mission-critical cooling
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏥</div>
                <h4 className="font-semibold">Healthcare Facilities</h4>
                <p className="text-sm text-gray-600">Hospitals and clinics</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🌆</div>
                <h4 className="font-semibold">Utility-Scale HVAC</h4>
                <p className="text-sm text-gray-600">
                  District cooling systems
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏨</div>
                <h4 className="font-semibold">Hospitality</h4>
                <p className="text-sm text-gray-600">Hotels and resorts</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🎓</div>
                <h4 className="font-semibold">Educational Facilities</h4>
                <p className="text-sm text-gray-600">
                  Universities and schools
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-blue-600 text-3xl mb-2">🏬</div>
                <h4 className="font-semibold">Retail Centers</h4>
                <p className="text-sm text-gray-600">Shopping malls</p>
              </div>
            </div>
          </div>
          {/* System Benefits */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              System Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Maximum Energy Savings
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Advanced VFD technology and optimized hydraulic design
                      reduce energy consumption by up to 40%
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Superior Reliability</h4>
                    <p className="text-gray-600 text-sm">
                      Factory testing and built-in redundancy ensure consistent
                      performance and minimal downtime
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm font-bold">
                      ⚡
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Reduced Installation Time
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Pre-assembled modules eliminate field assembly errors and
                      accelerate project completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-orange-600 text-sm font-bold">
                      🎯
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Optimized Performance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Integrated monitoring and control systems continuously
                      optimize system operation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-red-600 text-sm font-bold">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Modular Expansion</h4>
                    <p className="text-gray-600 text-sm">
                      Future capacity increases can be easily accommodated with
                      additional modules
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                    <span className="text-indigo-600 text-sm font-bold">
                      📊
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Predictive Maintenance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Smart monitoring enables proactive maintenance scheduling
                      and prevents unexpected failures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-600">
                Pump Technology
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Variable frequency drive (VFD) control</li>
                <li>• High-efficiency impeller designs</li>
                <li>• Stainless steel construction options</li>
                <li>• Multiple pump configurations</li>
                <li>• Redundant pump arrangements</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-green-600">
                Control Systems
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Intelligent control algorithms</li>
                <li>• Remote monitoring capabilities</li>
                <li>• Energy optimization software</li>
                <li>• Fault detection and diagnostics</li>
                <li>• Integration with BMS systems</li>
              </ul>
            </div>
          </div>
          {/* Competitive Advantages */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why Choose BROAD Pumpsets?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  40%
                </div>
                <h4 className="font-semibold mb-2">Energy Savings</h4>
                <p className="text-gray-600 text-sm">
                  Vs traditional pump systems
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <h4 className="font-semibold mb-2">Faster Installation</h4>
                <p className="text-gray-600 text-sm">Pre-assembled modules</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  99%
                </div>
                <h4 className="font-semibold mb-2">Uptime Reliability</h4>
                <p className="text-gray-600 text-sm">Built-in redundancy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <h4 className="font-semibold mb-2">Remote Monitoring</h4>
                <p className="text-gray-600 text-sm">Continuous optimization</p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Optimize Your Water Distribution System
            </h3>
            <p className="text-lg mb-6">
              Discover how BROAD Factory-Assembled Pumpsets can improve your
              facility's energy efficiency, reliability, and operational
              performance.
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

export default Pumpsets;

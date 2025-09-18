"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Packaged = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Packaged Absorption Chiller
          </h1>
        </div>
      </div>

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
          <span className="text-gray-800">Packaged</span>
        </nav>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Packaged Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Factory-assembled packaged absorption chiller solutions
            </p>
          </div>{" "}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              BROAD India&apos;s Packaged Absorption Chiller offers a complete,
              factory-assembled solution designed for easy installation,
              reliable performance, and versatility across industrial and
              commercial cooling and heating needs.
            </p>
          </div>
          {/* Package Chiller Model Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Package Chiller Model
            </h3>
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg"
                    alt="Package Chiller"
                    width={300}
                    height={279}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Package Chiller (Enclosure, Pump System and Cooling Tower
                  included)
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Direct Fire/Hot water/Steam/Exhaust</li>
                  <li>• Capacity: 40-2200 ton</li>
                  <li>• Gas Pressure: 0.16-0.51 kg/cm² (Standard)</li>
                  <li>• Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)</li>
                  <li>• Functionality: Cooling, Heating, Domestic Hot Water</li>
                  <li>
                    • Package Includes: Enclosure, Pump System, Cooling Tower
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Features, Applications, Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Features */}
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Fully factory tested and optimized for consistent quality and
                  simplified commissioning
                </li>
                <li>
                  Compact, self-contained units that reduce onsite installation
                  time and complexity
                </li>
                <li>
                  Magnetic bearing, oil-free technology available for
                  high-performance applications
                </li>
                <li>
                  Capable of generating cooling, heating, and domestic hot water
                  from multiple heat sources
                </li>
                <li>
                  Designed to significantly reduce electricity consumption and
                  carbon emissions
                </li>
              </ul>
            </div>
            {/* Applications */}
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Applications
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Large commercial buildings</li>
                <li>Industrial process cooling and heating</li>
                <li>
                  District cooling and Combined Cooling, Heating & Power (CCHP)
                  systems
                </li>
                <li>
                  Hotels, hospitals, campuses requiring integrated HVAC
                  solutions
                </li>
              </ul>
            </div>
            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Benefits
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Reduced installation and commissioning costs with
                  factory-assembled units
                </li>
                <li>
                  Flexible fuel options and multi-function HVAC capabilities
                </li>
                <li>
                  Supports sustainability goals by leveraging waste heat, steam,
                  and renewable energy sources
                </li>
                <li>
                  Proven reliability with over two decades of deployments in
                  critical industries and large-scale facilities
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready-to-Install Solutions
            </h3>
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packaged;

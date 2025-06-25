"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MultiEnergy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Multi-Energy Absorption Chiller
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
          <span className="text-gray-800">Multi-Energy</span>
        </nav>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Energy Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible multi-energy source absorption chiller systems
            </p>
          </div>{" "}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              BROAD&apos;s Multi-Energy Absorption Chillers are designed to
              utilize multiple heat sources including steam, hot water, exhaust
              gas, and natural gas, providing ultimate flexibility in energy
              supply. This versatile system can switch between different energy
              sources based on availability and cost optimization.
            </p>
          </div>
          {/* Multi Energy Chiller Models Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Multi Energy Chiller Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* BZE Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg"
                      alt="BZE Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BZE Model, Exhaust and Direct Fired
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-300 ton</li>
                  <li>• Gas Pressure: 0.16-0.51 kg/cm² (Standard)</li>
                  <li>• Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)</li>
                  <li>• Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                  <li>• Exhaust Temperature: 280-532°C</li>
                  <li>• Cooling / Heating / Domestic Hot Water</li>
                </ul>
              </div>

              {/* BHE Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/bhe-300x203-1-200x135.png"
                      alt="BHE Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BHE Model, Hot (Jacket) Water and Exhaust
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-3300 ton</li>
                  <li>• Hot Water Temperature: 71-105°C (Standard)</li>
                  <li>• Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                  <li>• Exhaust Temperature: 305-649°C</li>
                </ul>
              </div>

              {/* BZHE Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzhe1_s-300x204-1-200x136.jpg"
                      alt="BZHE Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BZHE Model, Hot (Jacket) Water and Exhaust + Direct Gas Fire
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-3300 ton</li>
                  <li>• Gas Pressure: 0.16-0.51 kg/cm² (Standard)</li>
                  <li>• Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)</li>
                  <li>• Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                  <li>• Exhaust Temperature: 305-649°C</li>
                  <li>• Hot Water Temperature: 88-105°C (Standard)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Explore Multi-Energy Solutions
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

export default MultiEnergy;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Solar Driven Vapor Absorption Chiller - Renewable Energy Cooling | BROAD India",
  description:
    "BROAD Solar Driven Vapor Absorption Chillers harness solar energy for sustainable cooling solutions. Eco-friendly, renewable energy-powered air conditioning systems.",
  keywords: [
    "solar chiller",
    "solar driven cooling",
    "solar absorption chiller",
    "renewable energy cooling",
    "solar powered AC",
    "sustainable cooling",
    "green cooling technology",
    "BROAD solar chiller",
    "solar thermal cooling",
  ],
  openGraph: {
    title:
      "Solar Driven Vapor Absorption Chiller - Renewable Energy Cooling | BROAD India",
    description:
      "BROAD Solar Driven Vapor Absorption Chillers harness solar energy for sustainable cooling solutions. Eco-friendly renewable energy cooling.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Solar Driven Vapor Absorption Chiller - Renewable Energy Cooling | BROAD India",
    description:
      "BROAD Solar Driven Vapor Absorption Chillers harness solar energy for sustainable cooling solutions.",
  },
};

const SolarDriven = () => {
  return (
    <div>
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Solar Driven Absorption Chiller
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
          <span className="text-gray-800">Solar Driven</span>
        </nav>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Driven Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Environmentally friendly solar-powered absorption cooling systems
            </p>
          </div>{" "}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              BROAD India&apos;s Solar Driven Absorption Chiller is an
              environmentally friendly cooling solution that harnesses renewable
              solar energy to provide sustainable and zero-emission cooling for
              commercial and industrial applications.
            </p>
          </div>
          {/* Solar Driven Chiller Model Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Solar Driven Chiller Model
            </h3>
            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png"
                    alt="Solar Driven Chiller"
                    width={300}
                    height={241}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-3">
                  Solar Driven (Solar Driven with Gas Burner back up)
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Capacity: 40-1000 ton</li>
                  <li>• Hot Water: 71-176°C</li>
                  <li>• Gas Pressure: 0.16-0.51 kg/cm² (Standard)</li>
                  <li>
                    • Fuel Backup: Dual Fuel Burner (gas and oil) for reliable
                    operation during low solar availability
                  </li>
                  <li>• Cooling Only system</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Features, Applications, and Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Features */}
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Integrates seamlessly with solar thermal collectors to convert
                  solar heat into cooling energy
                </li>
                <li>
                  Offers significant operational cost savings by reducing
                  reliance on electricity or fossil fuels
                </li>
                <li>
                  Zero-emission operation due to solar-driven thermal energy use
                </li>
                <li>
                  Dual fuel burner backup ensures continuous cooling during low
                  sunlight or peak demand
                </li>
                <li>
                  Supports India's green energy and carbon reduction goals
                  through renewable energy adoption
                </li>
              </ul>
            </div>
            {/* Applications */}
            <div className="bg-gray-50 rounded-lg p-6 shadow">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Applications
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Industrial facilities with solar thermal energy integration
                </li>
                <li>Large commercial buildings seeking green HVAC systems</li>
                <li>
                  Hotels, hospitals, campuses aiming for renewable energy
                  cooling
                </li>
                <li>
                  Facilities looking to reduce electricity consumption and
                  emissions
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
                  Reduces electricity usage by leveraging abundant solar energy
                </li>
                <li>
                  Lowers carbon footprint with clean, renewable cooling
                  technology
                </li>
                <li>
                  Cost-effective cooling solution with reliable fuel backup
                </li>
                <li>
                  Supports sustainability and energy transition initiatives in
                  India
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Harness Solar Energy for Cooling
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

export default SolarDriven;

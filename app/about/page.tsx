import Image from "next/image";
import type { Metadata } from "next";

import bg from "@/public/images/OurTeam.jpg";
import logo from "@/public/images/logo.png";

export const metadata: Metadata = {
  title: "About BROAD India - Leading HVAC Solutions Provider",
  description:
    "Learn about BROAD Air Conditioning India Pvt. Ltd., a leading provider of non-electric vapor absorption chillers and sustainable HVAC solutions. Discover our mission, values, and commitment to energy-efficient cooling systems.",
  keywords: [
    "BROAD India",
    "HVAC solutions",
    "vapor absorption chillers",
    "non-electric cooling",
    "sustainable HVAC",
    "energy efficient cooling",
  ],
  openGraph: {
    title: "About BROAD India - Leading HVAC Solutions Provider",
    description:
      "Learn about BROAD Air Conditioning India Pvt. Ltd., a leading provider of non-electric vapor absorption chillers and sustainable HVAC solutions.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/logo.png",
        width: 160,
        height: 80,
        alt: "BROAD India Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BROAD India - Leading HVAC Solutions Provider",
    description:
      "Learn about BROAD Air Conditioning India Pvt. Ltd., a leading provider of non-electric vapor absorption chillers and sustainable HVAC solutions.",
    images: ["/images/logo.png"],
  },
};

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-top flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              About BROAD Air Conditioning India Pvt. Ltd.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              BROAD India, a proud subsidiary of China&apos;s BROAD Group, has
              been serving India since 2001 with cutting-edge, sustainable HVAC
              solutions. For over two decades, we&apos;ve delivered 200+ Vapor
              Absorption Machine (VAM) installations across critical industrial
              sectors.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-blue-600">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              To decarbonize industrial cooling across India, we engineer
              non-electric absorption chillers, CCHP (Combined Cooling, Heating
              & Power) systems, waste-heat-powered HVAC, and absorption heat
              pumps—helping industries slash energy usage, reduce carbon
              emissions, and meet regulatory goals for a greener tomorrow.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-blue-600">
              Key Achievements & Impact
            </h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm md:text-base">
              <li>
                Executed and managing the Asia&apos;s largest CHP project in
                DLF, Gurgaon
              </li>
              <li>
                Delivered energy-efficient HVAC systems to sectors like
                petrochemicals, food processing, textiles, healthcare, and
                offices
              </li>
              <li>
                Built over 200 absorption chiller installations, enabling our
                clients to significantly reduce their carbon footprint
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="BROAD India Logo"
              width={160}
              height={80}
              className="w-32 md:w-40"
            />
          </div>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-600">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h4 className="font-semibold mb-2">Innovative Technology</h4>
              <p className="text-sm text-gray-600">
                Pioneers in thermal-driven HVAC applying waste heat, steam,
                diesel, or natural gas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h4 className="font-semibold mb-2">Comprehensive Services</h4>
              <p className="text-sm text-gray-600">
                End-to-end support including manufacturing, installation, and
                after-sales O&M
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🌱</div>
              <h4 className="font-semibold mb-2">Green Engineering Focus</h4>
              <p className="text-sm text-gray-600">
                Aligned with India&apos;s 2070 net-zero goals through clean
                cooling systems
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="font-semibold mb-2">Global Heritage</h4>
              <p className="text-sm text-gray-600">
                Part of BROAD Group—established in 1988, headquartered in
                Changsha
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose BROAD India Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-600">
            Why Choose BROAD India?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Rank #1 for BROAD Vapor Absorption Chiller and Non-Electric
                  Chiller
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Trusted by top brands like NTPC, IOCL, JSW, DLF, ITC, and
                  Bhilosa
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Proven expertise in waste heat recovery systems
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Pioneering cooling solutions for industrial decarbonisation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg mb-6">
            Looking for eco-friendly HVAC solutions that reduce costs and
            emissions?
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="mailto:info@broadindia.com"
              className="flex items-center text-white hover:text-blue-200"
            >
              📩 info@broadindia.com
            </a>
            <a
              href="tel:01244012824"
              className="flex items-center text-white hover:text-blue-200"
            >
              📞 0124‑4012824
            </a>
            <a
              href="tel:9427851584"
              className="flex items-center text-white hover:text-blue-200"
            >
              📞 94278 51584
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

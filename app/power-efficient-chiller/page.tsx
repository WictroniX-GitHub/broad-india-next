import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Power Efficient Chillers - Magnetic Bearing Technology | BROAD India",
  description:
    "BROAD India's power efficient chillers with magnetic bearing technology deliver superior performance and energy savings. Advanced electric chillers for commercial and industrial applications.",
  keywords: [
    "power efficient chiller",
    "magnetic bearing chiller",
    "electric chiller",
    "energy efficient cooling",
    "commercial chiller",
    "industrial chiller",
    "BROAD electric chiller",
    "high efficiency chiller",
  ],
  openGraph: {
    title:
      "Power Efficient Chillers - Magnetic Bearing Technology | BROAD India",
    description:
      "BROAD India's power efficient chillers with magnetic bearing technology deliver superior performance and energy savings.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Power Efficient Chillers - Magnetic Bearing Technology | BROAD India",
    description:
      "BROAD India's power efficient chillers with magnetic bearing technology deliver superior performance and energy savings.",
  },
};

const PowerEfficientChiller = () => {
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
            Power Efficient Chillers
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            BROAD Power Efficient Chiller Solutions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            BROAD&apos;s Power Efficient Chillers represent the next generation
            of electric cooling technology, featuring magnetic bearing
            compressors that deliver unmatched energy efficiency, ultra-quiet
            operation, and oil-free reliability for commercial and industrial
            applications.
          </p>
        </div>

        {/* Sub-category Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Link href="/power-efficient-chiller/magnetic-bearing-oil-free">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg"
                  alt="Magnetic Bearing Oil Free Chiller"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Magnetic Bearing Oil Free Chiller
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  Next-generation, factory-packaged solution with
                  high-efficiency magnetic bearing centrifugal chillers and
                  optional heat pump capability, offering unmatched energy
                  savings and ultra-quiet performance.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Key Features Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Revolutionary Technology Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🧲</span>
              </div>
              <h4 className="font-semibold mb-2">
                Magnetic Bearing Technology
              </h4>
              <p className="text-gray-600 text-sm">
                Eliminates mechanical contact through magnetic levitation for
                zero vibration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Ultra-High Efficiency</h4>
              <p className="text-gray-600 text-sm">
                IPLV ratings up to 13.26 with superior part-load performance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🔇</span>
              </div>
              <h4 className="font-semibold mb-2">Ultra-Quiet Operation</h4>
              <p className="text-gray-600 text-sm">
                Near-zero vibration and significantly reduced noise levels
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🛠️</span>
              </div>
              <h4 className="font-semibold mb-2">Oil-Free Design</h4>
              <p className="text-gray-600 text-sm">
                No lubricating oil required, reduced maintenance and extended
                lifespan
              </p>
            </div>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              Advanced Compressor Technology
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Danfoss Turbocor® twin-impeller compressors</li>
              <li>• R‑513A refrigerant for environmental compliance</li>
              <li>• Variable-speed control as low as 0.1 Hz</li>
              <li>• Precise cooling capacity modulation</li>
              <li>• Built-in backup power protection</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Performance Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Over 50% better part-load performance</li>
              <li>• Significantly reduced maintenance costs</li>
              <li>• Extended equipment lifespan</li>
              <li>• Compact footprint design</li>
              <li>• Digital control platform integration</li>
            </ul>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Ideal Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">💻</div>
              <h4 className="font-semibold">Data Centers</h4>
              <p className="text-sm text-gray-600">Mission-critical cooling</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🏥</div>
              <h4 className="font-semibold">Healthcare Facilities</h4>
              <p className="text-sm text-gray-600">Quiet, reliable operation</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🏢</div>
              <h4 className="font-semibold">High-Rise Buildings</h4>
              <p className="text-sm text-gray-600">
                Efficient vertical systems
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🌱</div>
              <h4 className="font-semibold">Green Campuses</h4>
              <p className="text-sm text-gray-600">
                Sustainable cooling solutions
              </p>
            </div>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Compliance & Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
              <h4 className="font-semibold mb-2">AHRI Certified</h4>
              <p className="text-gray-600 text-sm">
                Air-Conditioning, Heating, and Refrigeration Institute standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <h4 className="font-semibold mb-2">ASHRAE Compliant</h4>
              <p className="text-gray-600 text-sm">
                American Society of Heating, Refrigerating and Air-Conditioning
                Engineers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">✓</span>
              </div>
              <h4 className="font-semibold mb-2">FEMP Standards</h4>
              <p className="text-gray-600 text-sm">
                Federal Energy Management Program requirements
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Experience the Future of Efficient Cooling
          </h3>
          <p className="text-lg mb-6">
            Discover how our Power Efficient Chillers can revolutionize your
            facility&apos;s energy performance.
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PowerEfficientChiller;

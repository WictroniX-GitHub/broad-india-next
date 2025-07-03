"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TwoStageChiller = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Two-Stage Absorption Chiller
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
          <span className="text-gray-800">Two-Stage Chiller</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two-Stage Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced two-stage absorption technology for enhanced efficiency
              and superior performance
            </p>
          </div>
          {/* Chiller Models Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Two Stage Chiller Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* BZ Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzmodel-300x222-1-200x148.jpg"
                    alt="BZ Model"
                    width={200}
                    height={142}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  BZ Model, Hot Water Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Capacity: 30-3300 ton</li>
                  <li>• Gas Pressure: 0.16 - 0.51 kg/cm²</li>
                  <li>• Dual Fuel Burner (Gas and Oil, Low NOx, &lt;10ppm)</li>
                  <li>• Cooling / Heating / Domestic Hot Water</li>
                </ul>
              </div>

              {/* BS Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bsmodel-300x189-1-200x126.jpg"
                    alt="BS Model"
                    width={200}
                    height={142}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  BS Model, Steam Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Capacity: 30-3300 ton</li>
                  <li>• Steam Pressure: 4.2 - 10.5 kg/cm²</li>
                  <li>• Chiller Come With Steam Valve</li>
                  <li>• Cooling Only</li>
                </ul>
              </div>

              {/* BE Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bemodel-300x202-1-200x135.png"
                    alt="BE Model"
                    width={200}
                    height={142}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  BE Model, Exhaust Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Capacity: 40-3300 ton</li>
                  <li>• Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                  <li>• Exhaust Temperature: 280-532°C</li>
                  <li>• Cooling / Heating Only</li>
                </ul>
              </div>

              {/* BH Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg"
                    alt="BH Model"
                    width={200}
                    height={142}
                    className="w-full rounded-md"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  BH Model, Hot Water Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Capacity: 30-3300 ton</li>
                  <li>• Hot Water Temperature: 138 - 180°C</li>
                  <li>• Provides Hot Water Valve</li>
                  <li>• Cooling Only</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">
              BROAD&apos;s Two-Stage Absorption Chiller represents the pinnacle
              of absorption cooling technology, utilizing a sophisticated
              dual-stage process that delivers exceptional coefficient of
              performance (COP) and energy efficiency. This advanced system
              employs two separate absorption cycles working in tandem to
              achieve superior cooling performance while consuming minimal
              high-grade energy input.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The two-stage design allows for more effective heat transfer and
              better utilization of available thermal energy, making it ideal
              for applications requiring high efficiency and consistent
              performance across varying load conditions. With enhanced
              crystallization resistance and improved part-load operation, this
              chiller delivers reliable cooling for demanding industrial and
              commercial applications.
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li>• Advanced two-stage absorption cycle</li>
                <li>• Enhanced coefficient of performance</li>
                <li>• Superior part-load efficiency</li>
                <li>• Improved crystallization resistance</li>
                <li>• Precise temperature control</li>
                <li>• Reduced thermal energy consumption</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Applications</h3>
              <ul className="space-y-3">
                <li>• Large commercial buildings</li>
                <li>• Industrial process cooling</li>
                <li>• District cooling systems</li>
                <li>• High-efficiency HVAC applications</li>
                <li>• Energy-critical facilities</li>
                <li>• Continuous operation environments</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Two-Stage Technology?
            </h3>
            <p className="text-lg mb-6">
              Contact us to learn more about the benefits of two-stage
              absorption chillers for your application.
            </p>
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

export default TwoStageChiller;

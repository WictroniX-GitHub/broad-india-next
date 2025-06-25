"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SingleStage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/03/single-stage-300x157-1-200x105.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Single-Stage Absorption Chiller
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
          <span className="text-gray-800">Single-Stage</span>
        </nav>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Single-Stage Absorption Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable single-stage absorption chiller for standard applications
            </p>
          </div>{" "}
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              BROAD&apos;s Single-Stage Absorption Chiller provides proven,
              cost-effective cooling solutions using reliable single-stage
              lithium bromide absorption technology. These systems offer
              excellent performance for standard commercial and industrial
              cooling applications where simplicity and reliability are
              paramount.
            </p>
          </div>
          {/* Single Stage Chiller Models Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Single Stage Chiller Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* BDH Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/single-stage-300x157-1-200x105.png"
                      alt="BDH Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BDH Model, Single Stage Hot Water Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-1800 ton</li>
                  <li>• Hot Water Temperature: 71-105°C (Standard)</li>
                  <li>• Hot water Valve</li>
                  <li>• Cooling Only</li>
                </ul>
              </div>

              {/* BDE Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/bde_s-300x252-1-200x168.jpg"
                      alt="BDE Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BDE Model, Single Stage Exhaust Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-1163 ton</li>
                  <li>• Exhaust Temperature: 232 - 315°C</li>
                  <li>• Cooling Only</li>
                </ul>
              </div>

              {/* BDS Model */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                <div className="mb-4 flex-shrink-0">
                  <div className="relative h-32 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src="https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg"
                      alt="BDS Model"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">
                  BDS Model, Single Stage Steam Driven
                </h4>
                <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                  <li>• Capacity: 30-2000 ton</li>
                  <li>• Steam Pressure: 0.42-4.2 kg/cm² (Standard)</li>
                  <li>• Offer Steam Valve</li>
                  <li>• Cooling only</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Learn More About Single-Stage Chillers
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

export default SingleStage;

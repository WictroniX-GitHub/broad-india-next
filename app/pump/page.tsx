"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import pumpImg from "@/public/images/broadPump.webp";

const Pump = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            BROAD Pumpset
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">BROAD Pumpset</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={pumpImg}
              alt="Broad Pump"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          <div>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>
                <strong>Miraculous electricity saving</strong> - Zero water
                resistance design enables 60%+ electricity saving compared with
                conventional water distribution systems. Inverter controlled
                water pumps reduce the operating electricity consumption to
                30%~50% of the rated power.
              </li>
              <li>
                <strong>Complete bacteria killing</strong> - Auto dosing device
                charges biocide to the cooling water system automatically to
                eradicate legionnaire&apos;s diseases.
              </li>
              <li>
                <strong>Quick installation</strong> - Installation time is 10%
                of that needed for conventional projects, which saves a lot of
                time cost and labor cost for customers.
              </li>
              <li>
                <strong>Cost and space saving</strong> - One-shot investment
                solves all problems: designing, purchasing, installation,
                commissioning, and 50% footprint reduction.
              </li>
              <li>
                <strong>Worry-free & carefree</strong> - Whole system factory
                made and tested. Customers&apos; management cost saved. All
                European/US safety certificates secured. Central Air
                conditioning industrialization materialized.
              </li>
            </ul>
            <a
              href="/files/pumpSet.pdf"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pump;

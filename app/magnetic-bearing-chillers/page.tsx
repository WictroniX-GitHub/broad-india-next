"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const MagneticBearingChillers = () => {
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
            Magnetic Bearing Oil Free Chillers
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">
          BROAD Magnetic Bearing Oil Free Chiller
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src="https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg"
              alt="Magnetic Bearing Chiller"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>Cooling capacity ranging from 150 ton to 2000 ton</li>
              <li>The Danfoss Turbocor, Portfolio of Oil free Compressors</li>
              <li>
                Multi Compressors provided un-compatible Reliable and flexible
              </li>
              <li>High COP (6.5) and excellent IPLV (maximum 13.26)</li>
              <li>Minimum impact to electrical grid (as low as 2A)</li>
              <li>Adjustable load: 10~100%</li>
              <li>Operation noise: ≤65dB (A)</li>
              <li>Operation vibration: ≤0.30mm</li>
              <li>Life design: 30 years</li>
              <li>Package design (option)</li>
            </ul>
            <a
              href="/files/broadElectricChiller.pdf"
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

export default MagneticBearingChillers;

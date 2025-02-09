"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import nonElec from "@/public/images/nonElec.jpg";
import wasteHeat from "@/public/images/wasteHeat.jpg";

const VapAbsorptionChiller = () => {
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
            Vapour Absorption Chillers
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="shadow p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Direct Fired Chiller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src={nonElec}
              alt="Direct Fired Chiller"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h4 className="text-lg font-semibold">Function</h4>
              <p>Cooling, heating, hot water (separately or simultaneously)</p>
              <h4 className="text-lg font-semibold mt-4">Application</h4>
              <p>
                Provide chilled/heating water for central Air Conditioning
                system. Produces chilled water over 5℃ and heating water below
                95℃.
              </p>
              <h4 className="text-lg font-semibold mt-4">Cooling Capacity</h4>
              <p>233~11,630kW (66~3,307Rt)</p>
              <h4 className="text-lg font-semibold mt-4">Energy Sources</h4>
              <p>
                Natural gas, town gas, biogas, gas/oil dual fuel, gas & waste
                heat hybrid (multi-energy).
              </p>
              <a
                href="/files/nonElec.pdf"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Download Catalogue
              </a>
            </div>
          </div>
        </div>

        <div className="shadow p-6 rounded-lg mt-8">
          <h2 className="text-3xl font-bold mb-4">Waste Heat Chiller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
              src={wasteHeat}
              alt="Waste Heat Chiller"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div>
              <h4 className="text-lg font-semibold">Function</h4>
              <p>Cooling, heating, hot water (separately or simultaneously)</p>
              <h4 className="text-lg font-semibold mt-4">Application</h4>
              <p>
                Provide chilled/heating water for central Air Conditioning
                system.
              </p>
              <h4 className="text-lg font-semibold mt-4">Cooling Capacity</h4>
              <p>233~11,630kW (66~3,307Rt)</p>
              <h4 className="text-lg font-semibold mt-4">Energy Sources</h4>
              <p>
                Waste heat from power generation or industrial waste streams
                (steam, hot water, exhaust, etc.).
              </p>
              <a
                href="/files/nonElec.pdf"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
              >
                Download Catalogue
              </a>
              <a
                href="/Chillers"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 mt-4"
              >
                Know More
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default vapour-absorption-chiller;

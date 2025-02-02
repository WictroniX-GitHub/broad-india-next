"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const Chillers = () => {
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
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Waste Chillers
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-8 bg-gray-300 text-center">
        <p className="text-lg font-semibold">
          Better <span className="font-bold">Chillers</span> for a better world.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row">
          {/* Tab Navigation */}
          <div className="md:w-1/4 bg-blue-100 p-4 rounded-lg mb-4 md:mb-0">
            <nav className="flex flex-col space-y-2">
              <button className="p-3 bg-blue-500 text-white rounded-md">
                Two Stage
              </button>
              <button className="p-3 bg-gray-200 rounded-md">
                Single Stage
              </button>
              <button className="p-3 bg-gray-200 rounded-md">
                Multi Energy
              </button>
              <button className="p-3 bg-gray-200 rounded-md">
                Package Chillers
              </button>
              <button className="p-3 bg-gray-200 rounded-md">
                Solar Driven
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Two Stage Chillers</h2>

            {/* Chiller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg flex items-center">
                <Image
                  src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzmodel-300x222-1-200x148.jpg"
                  alt="BZ Model"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    BZ Model, Hot Water Driven
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2">
                    <li>Capacity: 30-3300 ton</li>
                    <li>Gas Pressure: 0.16 - 0.51 kg/cm²</li>
                    <li>Dual Fuel Burner (Gas and Oil, Low NOx, &lt;10ppm)</li>
                    <li>Cooling / Heating / Domestic Hot Water</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border rounded-lg flex items-center">
                <Image
                  src="https://broadusa.com/broad/wp-content/uploads/2020/03/bsmodel-300x189-1-200x126.jpg"
                  alt="BS Model"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">
                    BS Model, Steam Driven
                  </h3>
                  <ul className="text-sm text-gray-600 mt-2">
                    <li>Capacity: 30-3300 ton</li>
                    <li>Steam Pressure: 4.2 - 10.5 kg/cm²</li>
                    <li>Comes with Steam Valve</li>
                    <li>Cooling Only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Footer */}
      <ContactForm />
    </div>
  );
};

export default Chillers;

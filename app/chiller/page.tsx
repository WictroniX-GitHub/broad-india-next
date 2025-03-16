"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const Chillers = () => {
  const [activeTab, setActiveTab] = useState("twoStage");

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
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4 bg-blue-100 p-4 rounded-lg mb-4 md:mb-0">
          <nav className="flex flex-col space-y-2">
            {[
              { key: "twoStage", label: "Two Stage" },
              { key: "singleStage", label: "Single Stage" },
              { key: "multiEnergy", label: "Multi Energy" },
              { key: "packageChillers", label: "Package Chillers" },
              { key: "solarDriven", label: "Solar Driven" },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`p-3 rounded-md ${
                  activeTab === key ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-lg">
          {activeTab === "twoStage" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Two Stage Chillers</h2>
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
                      <li>
                        Dual Fuel Burner (Gas and Oil, Low NOx, &lt;10ppm)
                      </li>
                      <li>Cooling / Heating / Domestic Hot Water</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bsmodel-300x189-1-200x126.jpg"
                    alt="BZ Model"
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
                      <li>Chiller Come With Steam Valve</li>
                      <li>Cooling Only</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bemodel-300x202-1-200x135.png"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BE Model, Exhaust Driven
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 40-3300 ton</li>
                      <li>Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                      <li>
                        {" "}
                        Exhaust Temperature: 280-532 <span>&#8451;</span>
                      </li>
                      <li>Cooling / Heating Only</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BH Model, Hot Water Driven
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-3300 ton</li>
                      <li>
                        Hot Water Temperature: 138 - 180 <span>&#8451;</span>
                      </li>
                      <li>Provides Hot Water Valve</li>
                      <li>Cooling Only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "singleStage" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Single Stage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/single-stage-300x157-1-200x105.png"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BDH Model, Single Stage Hot Water Driven
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-1800 ton</li>
                      <li>
                        {" "}
                        Hot Water Temperature: 71-105 <span>&#8451;</span>
                        (Standard)
                      </li>
                      <li>Hot water Valve</li>
                      <li>Cooling Only</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bde_s-300x252-1-200x168.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BDE Model, Single Stage Exhaust Drivenn
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-1163 ton</li>
                      <li>
                        Exhaust Temperature: 232 - 315 <span>&#8451;</span>
                      </li>
                      <li>Cooling Only</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BDS Model, Single Stage Steam Driven
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-2000 ton</li>
                      <li>
                        Steam Pressure: 0.42-4.2 kg/cm<sup>2</sup> (Standard)
                      </li>
                      <li>Offer Steam Valve</li>
                      <li>Cooling only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "multiEnergy" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Multi Energy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BZE Model, Exhaust and Direct Fired
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-300 ton</li>
                      Gas Pressure: 0.16-0.51 kg/cm<sup>2</sup> (Standard)
                      <li>
                        Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)
                      </li>
                      <li>Exhaust Pressure Drop : 3 - 8 Inch W.C.</li>
                      <li>
                        Exhaust Temperature: 280-532 <span>&#8451;</span>
                      </li>
                      <li>Cooling / Heating / Domestic Hot Water</li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bhe-300x203-1-200x135.png"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BHE Model, Hot (Jacket) Water and Exhaust
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-3300 ton</li>
                      <li>Hot Water Temperature: 71-105 C (Standard)</li>
                      <li>Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                      <li>
                        Exhaust Temperature: 305-649 <span>&#8451;</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzhe1_s-300x204-1-200x136.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      BZHE Model, Hot (Jacket) Water and Exhaust + Direct Gas
                      Fire
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 30-3300 ton</li>
                      <li>
                        Gas Pressure: 0.16-0.51 kg/cm<sup>2</sup> (Standard)
                      </li>
                      <li>
                        Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)
                      </li>
                      <li>Exhaust Pressure Drop : 3 - 8 Inch W.C.</li>
                      <li>
                        Exhaust Temperature: 305-649 <span>&#8451;</span>
                      </li>
                      <li>
                        Hot Water Temperature: 88-105 <span>&#8451;</span>
                        (Standard)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "packageChillers" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Package Chillers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Package Chiller (Enclosure, Pump System and Cooling Tower
                      included)
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Direct Fire/Hot water/Steam/Exhaust</li>
                      <li>Capacity: 40-2200 ton</li>
                      <li>
                        Gas Pressure: 0.16-0.51 kg/cm<sup>2</sup> (Standard)
                      </li>
                      <li>
                        Dual Fuel Burner (Gas and Oil, Low NOx, &lt; 10ppm)
                      </li>
                      <li>Cooling / Heating / Domestic Hot Water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "solarDriven" && (
            <>
              <h2 className="text-3xl font-bold mb-6">Solar Driven</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg flex items-center">
                  <Image
                    src="https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png"
                    alt="BZ Model"
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Solar Driven (Solar Driven with Gas Burner back up)
                    </h3>
                    <ul className="text-sm text-gray-600 mt-2">
                      <li>Capacity: 40-1000 ton</li>
                      <li>
                        Hot Water: 71-176 <span>&#8451;</span>
                      </li>
                      <li>
                        Gas Pressure: 0.16-0.51 kg/cm<sup>2</sup> (Standard)
                      </li>
                      <li>Dual Fuel Burner</li>
                      <li>Cooling Only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Chillers;

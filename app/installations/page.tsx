"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const installations = [
  {
    id: 1,
    title: "JSW, Bellary",
    image:
      "https://www.jsw.in/sites/default/files/assets/cache/images//jsw-vijayanagar-aerial-315f534x432-resize-534x432-a7542dd51f-75addb3d04bc8b10.jpeg",
    description:
      "The JSW group is amongst the leading conglomerates in India, with presence across the vital sectors of the Indian economy.",
    details: [
      "Location - Bellary, Karnataka",
      "Application - Coke Oven Process Primary Cooling",
      "Cooling capacity: 16198 kW",
      "Model: BS*9 unit",
      "Heat Source: Steam",
      "Shipment date: July 2007, November 2012, 2022",
    ],
  },
  {
    id: 2,
    title: "Indian Oil Corporation, Vadodra",
    image:
      "https://www.constructionweekonline.in/cloud/2021/11/24/StFDepyN-IOCL-6.jpg",
    description:
      "Indian Oil is India's flagship national oil company with business interests straddling the entire hydrocarbon value chain.",
    details: [
      "Location - Vadodara, Gujarat",
      "Application - Process Cooling",
      "Cooling capacity: 7,926kW",
      "Model: BS*2",
      "Heat Source: Steam",
      "Shipment date: September 2013",
    ],
  },
  {
    id: 3,
    title: "ITC Group",
    image: "/images/itc.webp",
    description:
      "ITC group is one biggest business house in India. BROAD will supply VAM for their 4 plants: Haridwar, Kolkata, Pune, Trichy.",
    details: [
      "Location: Haridwar, Kolkata, Pune, Trichy",
      "Application- Process Cooling",
      "Cooling capacity: 886*4 = 3544kW",
      "Model: BDS*4 units",
      "Heat Source: Steam from PC fryer",
      "Shipment date: 2020",
    ],
  },
];

export default function Installations() {
  interface Installation {
    id: number;
    title: string;
    image: string;
    description: string;
    details: string[];
  }

  const [selectedInstallation, setSelectedInstallation] =
    useState<Installation | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center bg-fixed flex justify-center items-center relative"
        style={{
          backgroundImage: `url('https://broadusa.com/broad/wp-content/uploads/2020/04/instllation.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-10">
          <h1 className="text-5xl font-bold text-white">Installations</h1>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="bg-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-6 text-xl">
          <p>
            We have a strategy for <strong>Doing Things Right.</strong>
          </p>
        </div>
      </div>

      {/* Installations List */}
      <div className="max-w-6xl mx-auto my-20 px-6 grid md:grid-cols-3 gap-10">
        {installations.map((install) => (
          <div
            key={install.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <Image
              src={install.image}
              alt={install.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{install.title}</h2>
              <p className="text-gray-600 flex-grow">{install.description}</p>
              <button
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start"
                onClick={() => setSelectedInstallation(install)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInstallation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">
              {selectedInstallation.title}
            </h2>
            <ul className="list-disc ml-5">
              {selectedInstallation.details.map(
                (detail: string, index: number) => (
                  <li key={index} className="text-gray-700">
                    {detail}
                  </li>
                )
              )}
            </ul>
            <button
              className="mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setSelectedInstallation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

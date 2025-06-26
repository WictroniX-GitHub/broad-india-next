"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import pumpImg from "@/public/images/broadPump.webp";

const products = [
  {
    id: 1,
    title: "Vapor Absorption Chiller",
    image: "https://broadusa.com/broad/wp-content/uploads/2020/04/home_DFA.jpg",
    description:
      "Ideal for industries looking to eliminate electricity-driven cooling. Choose from gas, steam, solar, or multi-energy powered chillers that run efficiently on available heat sources.",
    link: "/vapour-absorption-chiller",
  },
  {
    id: 2,
    title: "Power Efficient Chiller",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg",
    description:
      "Designed for high-performance applications where energy savings, quiet operation, and zero oil contamination matter — featuring magnetic bearing, oil-free technology.",
    link: "/power-efficient-chiller",
  },
  {
    id: 3,
    title: "CCHP Systems",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_CCHP-300x195.jpg",
    description:
      "For facilities seeking to generate cooling, heating, and power from a single fuel source — reducing energy costs and carbon footprint with trigeneration.",
    link: "/cchp-systems",
  },
  {
    id: 4,
    title: "Absorption Heat Pumps",
    image: "/images/absorption heat pumps.jpg",
    description:
      "Perfect for process industries and buildings aiming to recover and upgrade low-grade heat for heating applications without adding new energy sources.",
    link: "/absorption-heat-pump",
  },
  {
    id: 5,
    title: "Pumpsets",
    image: pumpImg,
    description:
      "Best suited for industrial HVAC circulation, cooling water transfer, and thermal systems requiring robust, long-lasting pump performance.",
    link: "/pumpsets",
  },
];

export default function SpecialistsProduct() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState(-1);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-3xl font-semibold text-center mb-5">Our Products</h2>
      <p className="text-center text-gray-600 mb-8">
        Precision-engineered High-Efficiency Chillers and Systems that power
        sustainable industries across India.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`shadow-lg rounded-xl p-6 bg-white transition-transform duration-300 cursor-pointer ${
              hoveredId === product.id ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(-1)}
            onClick={() => router.push(product.link)}
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={150}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import pumpImg from "@/public/images/broadPump.webp";

const products = [
  {
    id: 1,
    title: "Vapour Absorption Chiller",
    image: "https://broadusa.com/broad/wp-content/uploads/2020/04/home_DFA.jpg",
    description:
      "Building Central A/C System & Domestic Hot Water. Providing cooling with fuel saving caused by 4 times less energy conversions.",
    link: "/vapAbsorptionChiller",
  },
  {
    id: 2,
    title: "BROAD CCHP System",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_CCHP-300x195.jpg",
    description:
      "Achieves Zero Emission with Exhaust Heat as Power Source - The CCHP System powered by exhaust heat from generator.",
    link: "/Chillers",
  },
  {
    id: 3,
    title: "Magnetic Bearing Oil Free Chillers",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg",
    description:
      "Cooling capacity ranging from 150 ton to 2000 ton, High COP (6.5) and excellent IPLV (maximum 13.26).",
    link: "/magneticBearingChillers",
  },
  {
    id: 4,
    title: "Pump Set",
    image: pumpImg,
    description:
      "Zero water resistance design enables 60%+ electricity saving compared with conventional water distribution systems.",
    link: "/pump",
  },
];

export default function SpecialistsProduct() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState(-1);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-3xl font-semibold text-center mb-5">
        Our Best Quality Products
      </h2>
      <p className="text-center text-gray-600">
        Discover cost-effective cooling and heating solutions with BROAD India's
        energy-efficient HVAC systems and power-efficient absorption chillers.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

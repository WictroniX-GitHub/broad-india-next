"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const coreValues = [
  {
    title: "Environment",
    description:
      "Environmental sustainability is at the heart of everything we do. Our focus on sustainable HVAC solutions ensures we minimize our environmental impact.",
    bgColor: "bg-green-500",
    icon: "🌍",
  },
  {
    title: "Humanity",
    description:
      "BROAD's diverse range of products and services embeds humanity and sustainability, highlighting our commitment to energy-efficient technologies.",
    bgColor: "bg-blue-500",
    icon: "🤝",
  },
  {
    title: "Our Customers",
    description:
      "We aim to be a company that our customers are proud to partner with, delivering innovative and sustainable solutions that meet their needs.",
    bgColor: "bg-orange-500",
    icon: "🏆",
  },
];

export default function CoreValues() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window.innerHeight > window.innerWidth);
  }, []);

  return (
    <div className="overflow-x-hidden py-16 px-6">
      <h2 className="text-3xl font-bold text-center">Core Values</h2>
      <p className="text-center mt-4 text-gray-600">
        Core Values at BROAD Air Conditioning India Pvt. Ltd. (BROAD India), we
        strive daily to uphold our commitment to our customers, maintain
        fairness with our vendors, and show dedication to our employees. We
        prioritize long-term relationships over short-term gains.
      </p>
      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "grid-cols-3"
        } gap-8 mt-10 mx-auto max-w-6xl`}
      >
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl bg-white p-6 text-center flex flex-col items-center"
            data-aos="fade-up"
          >
            <div
              className={`${value.bgColor} w-24 h-24 flex items-center justify-center text-white text-4xl rounded-full`}
            >
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
            <p className="mt-4 text-gray-600">{value.description}</p>
            <button
              className="mt-6 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => router.push("/about")}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

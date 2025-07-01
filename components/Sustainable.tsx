"use client";

import { useState, useEffect } from "react";

export default function Sustainable() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerHeight > window.innerWidth);
  }, []);

  return (
    <div
      className="w-full my-20 bg-fixed bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: "url('http://picsum.photos/id/10/1920/1440')",
        height: isMobile ? "220vh" : "120vh",
      }}
    >
      <div className="mt-5 md:mt-20 w-11/12 md:w-4/5 bg-white/60 backdrop-blur-lg rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-4xl text-center font-semibold">
          Sustainable HVAC Solutions for a{" "}
          <span className="text-green-600">Greener Tomorrow</span>
        </h2>
        <p className="mt-10 text-lg text-gray-700 leading-relaxed">
          BROAD India delivers cutting-edge Vapor Absorption Machines (VAM) and
          non-electric air conditioning systems that drastically reduce power
          consumption and environmental impact. Our products are powered by
          waste heat, steam, hot water, oil, and natural gas, offering
          eco-friendly alternatives to conventional chillers.
        </p>
        <p className="mt-10 text-lg text-gray-700 leading-relaxed">
          With over two decades of experience, we are India&apos;s top supplier
          of absorption chillers, CCHP systems, and fuel gas recovery chillers,
          tailored for industrial and commercial applications.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-around items-center">
          {[
            { title: "Reducing Carbon Footprint", icon: "🌿" },
            { title: "Waste Reduction", icon: "♻️" },
            { title: "Positive Global Impact", icon: "🌍" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-green-600 text-6xl mb-4">{item.icon}</div>
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

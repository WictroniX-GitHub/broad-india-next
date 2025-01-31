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
          Leading the <span className="text-green-600">Green revolution</span>{" "}
          with sustainable HVAC solutions
        </h2>
        <p className="mt-10 text-lg text-gray-700 leading-relaxed">
          Sustainable industrial development guarantees the conservative and
          efficient use of resources. Manufacturers must optimize the supply
          chain, analyzing the extraction of raw materials, production of
          components, design of products, and organization of return markets, to
          achieve resource productivity. BROAD India focuses on introducing the
          next generation of sustainable HVAC solutions to enhance the planet's
          well-being. BROAD builds energy-efficient absorption chillers that
          reduce carbon emissions. BROAD India realizes this vision and delivers
          clean, green solutions.
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

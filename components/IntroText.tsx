"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function IntroText() {
  const { ref: defRef, isVisible: defVisible } = useScrollReveal();
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();

  return (
    <div className="container mx-auto mt-10 px-4 md:px-8 mb-10">
      {/* Definition-first block for GEO/AEO */}
      <div
        ref={defRef}
        className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg transition-all duration-600"
        style={{
          opacity: defVisible ? 1 : 0,
          transform: defVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
          What is a Vapour Absorption Chiller?
        </h3>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          A <strong>vapour absorption chiller (VAC)</strong> is a cooling system
          that uses thermal energy - waste heat, steam, hot water, or natural
          gas - instead of electricity to produce chilled water for industrial
          and commercial HVAC applications. Unlike conventional electric
          compressor-based chillers, absorption chillers have virtually no moving
          parts, use water as a natural refrigerant, and can slash a
          facility&apos;s electrical peak demand by up to 90%.
        </p>
      </div>

      {/* Existing intro paragraph */}
      <div
        ref={introRef}
        className="text-lg text-gray-700 leading-relaxed"
        style={{
          opacity: introVisible ? 1 : 0,
          transform: introVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
        }}
      >
        <p>
          <strong>BROAD India</strong>, a subsidiary of the{" "}
          <strong>BROAD Group,</strong> has been serving the Indian market for
          <strong> 25 years.</strong> We deliver cutting-edge{" "}
          <strong>
            Vapour Absorption Machines (VAM), Vapour Absorption Chillers (VAC),
            Non‑Electric Chillers, and Combined Cooling, Heating &amp; Power (CCHP)
          </strong>{" "}
          systems across India. Our sustainable HVAC solutions leverage waste
          heat recovery, diesel-fired &amp; natural gas-fired chillers, and
          steam/hot-water-powered systems, enabling industries to slash
          electricity usage and carbon emissions while meeting India&apos;s
          growing demand for cleaner, cost-effective cooling.
        </p>
      </div>
    </div>
  );
}

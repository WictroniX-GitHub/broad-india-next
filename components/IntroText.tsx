"use client";

export default function IntroText() {
  return (
    <div className="container mx-auto mt-10 px-4 md:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          BROAD India serving India since 2001 | Vapor Absorption Machines and
          Sustainable HVAC Solutions
        </h1>
        <p className="text-xl text-blue-600 font-semibold">
          India&apos;s Trusted Leader in Non-Electric Chillers and CCHP Systems;
          Decarbonizing India&apos;s Cooling: Waste-Heat HVAC & Energy-Efficient
          Industrial Chillers
        </p>
      </div>

      {/* Key Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">
              MW HVAC capacity installed in industrial setups
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-3xl font-bold text-green-600">200+</div>
            <div className="text-sm text-gray-600">
              VAM/VAC projects completed nationwide
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-3xl font-bold text-orange-600">697,000+</div>
            <div className="text-sm text-gray-600">
              tCO₂e reduction in carbon footprint equivalent to 4 lakh trees
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg text-gray-700 leading-relaxed">
        <p>
          <strong>BROAD India</strong>, a subsidiary of the BROAD Group, has
          been serving the Indian market for 25 years. We deliver cutting-edge
          Vapor Absorption Machines (VAM), Vapor Absorption Chillers (VAC),
          Non‑Electric Chillers, and Combined Cooling, Heating & Power (CCHP)
          systems across India. Our sustainable HVAC solutions leverage waste
          heat recovery, diesel-fired & natural gas-fired chillers, and
          steam/hot-water-powered systems, enabling industries to slash
          electricity usage and carbon emissions.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          Sustainable HVAC Solutions for a Greener Tomorrow
        </h3>
        <p className="mt-4">
          BROAD India delivers cutting-edge Vapor Absorption Machines (VAM) and
          non-electric air conditioning systems that drastically reduce power
          consumption and environmental impact. Our products are powered by
          waste heat, steam, hot water, diesel, and natural gas, offering
          eco-friendly alternatives to conventional chillers.
        </p>
        <p className="mt-4">
          With over two decades of experience, we are India&apos;s top supplier
          of absorption chillers, CCHP systems, and flue gas recovery chillers,
          tailored for industrial and commercial applications.
        </p>
      </div>
    </div>
  );
}

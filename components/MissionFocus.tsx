"use client";

export default function MissionFocus() {
  const focusAreas = [
    {
      title: "Energy Efficiency",
      description:
        "Engineering advanced Vapor Absorption Chillers, non-electric chillers, and VAM systems to slash energy costs and boost performance across heavy industries.",
      icon: "⚡",
    },
    {
      title: "Carbon Reduction",
      description:
        "Delivering zero-electricity and waste‑heat‑powered HVAC solutions that significantly reduce carbon emissions and support India's journey toward net‑zero cooling.",
      icon: "🌱",
    },
    {
      title: "Sustainable Innovation",
      description:
        "Pioneering breakthroughs in CCHP (Combined Cooling, Heating & Power) and absorption heat pumps, pushing the frontier of carbon‑neutral industrial systems for a cleaner future.",
      icon: "🔬",
    },
  ];

  return (
    <div className="container mx-auto mt-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Mission & Focus Areas
        </h2>
        <p className="text-lg text-gray-600">
          At BROAD India, we are driven by purpose and innovation in industrial
          HVAC
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-center">{area.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              {area.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

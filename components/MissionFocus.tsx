"use client";

import { Zap, Sprout, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const focusAreas = [
  {
    title: "Energy Efficiency",
    description:
      "Engineering advanced Vapour Absorption Chillers (VAC / VAM), non-electric chillers, and VAM systems to slash energy costs and boost performance across heavy industries.",
    icon: Zap,
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "Carbon Reduction",
    description:
      "Delivering zero-electricity and waste-heat-powered HVAC solutions that significantly reduce carbon emissions and support India's journey toward net-zero cooling.",
    icon: Sprout,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Sustainable Innovation",
    description:
      "Pioneering breakthroughs in CCHP (Combined Cooling, Heating & Power) and absorption heat pumps, pushing the frontier of carbon-neutral industrial systems for a cleaner future.",
    icon: FlaskConical,
    color: "from-indigo-600 to-indigo-800",
  },
];

export default function MissionFocus() {
  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mb-4" />
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            At BROAD India, we are driven by purpose and innovation in industrial HVAC
          </p>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;

            return (
              <FadeInStaggerItem key={index}>
                <div className="group relative h-full flex flex-col items-center text-center">
                  {/* Icon container with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-gray-200/50 transform group-hover:-translate-y-1 transition-all duration-500`}>
                    <IconComponent size={20} strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {area.description}
                  </p>
                  
                  {/* Subtle decorative line */}
                  <div className="mt-8 w-12 h-1 bg-gray-200 group-hover:bg-blue-600 transition-colors duration-500 rounded-full" />
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

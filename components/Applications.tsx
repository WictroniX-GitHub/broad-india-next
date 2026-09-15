"use client";

import { Factory, Apple, Shirt, Hospital, Building2, Server } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const industries = [
  {
    title: "Petrochemical Plants",
    description: "Process cooling for refineries and chemical manufacturing",
    icon: Factory,
  },
  {
    title: "Food & Beverage Facilities",
    description: "Temperature-controlled environments for processing and storage",
    icon: Apple,
  },
  {
    title: "Textile Industries",
    description: "Precision cooling for dyeing, finishing, and manufacturing",
    icon: Shirt,
  },
  {
    title: "Hospitals & Medical Facilities",
    description: "Reliable HVAC for cleanrooms, OTs, and patient comfort",
    icon: Hospital,
  },
  {
    title: "Commercial Buildings & Hotels",
    description: "Central air conditioning for large-scale comfort cooling",
    icon: Building2,
  },
  {
    title: "Data Centers & Green Buildings",
    description: "Energy-efficient cooling for high-density heat loads",
    icon: Server,
  },
];

export default function Applications() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mb-6" />
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Customized HVAC and chiller systems engineered for India&apos;s most demanding and energy-intensive sectors.
          </p>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <FadeInStaggerItem key={index}>
                <div className="group relative bg-white h-full p-8 rounded-none border-l-4 border-transparent hover:border-blue-600 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <IconComponent size={28} strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {ind.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                      {ind.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Explore Solutions <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

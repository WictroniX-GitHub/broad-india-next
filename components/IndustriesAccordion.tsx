"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Factory, TestTube, Zap, Building, Plane, Apple, Shirt, Hospital, Server } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const industries = [
  {
    id: "petrochemical",
    name: "Petrochemical & Refinery",
    icon: Factory,
    useCase: "In refining and chemical processing, massive amounts of low-grade waste heat are generated. BROAD's absorption chillers recover this thermal energy to produce chilled water for process cooling, significantly reducing electrical load and improving overall plant thermal efficiency.",
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Chemical",
    icon: TestTube,
    useCase: "Pharmaceutical manufacturing requires strict temperature and humidity control 24/7. Our non-electric chillers provide the ultra-reliable, precision cooling required for cleanrooms and batch processing, while eliminating the high OPEX of electric compressors.",
  },
  {
    id: "power",
    name: "Power Generation (CCHP)",
    icon: Zap,
    useCase: "By implementing Combined Cooling, Heating, and Power (CCHP) systems, power plants and large industrial parks can achieve up to 90% total energy utilization. We convert turbine exhaust and jacket water heat into centralized cooling.",
  },
  {
    id: "fnb",
    name: "Food & Beverage Facilities",
    icon: Apple,
    useCase: "Temperature-controlled environments for processing and storage. We provide stable, low-temperature cooling essential for food safety and shelf-life, powered entirely by waste heat from cooking or pasteurization processes.",
  },
  {
    id: "textile",
    name: "Textile Industries",
    icon: Shirt,
    useCase: "Precision cooling for dyeing, finishing, and manufacturing. Our chillers maintain exact humidity and temperature levels, preventing thread breakage and ensuring consistent fabric quality across massive production floors.",
  },
  {
    id: "healthcare",
    name: "Hospitals & Medical Facilities",
    icon: Hospital,
    useCase: "Reliable HVAC for cleanrooms, OTs, and patient comfort. BROAD's non-electric cooling guarantees uninterrupted performance for critical medical environments, even during localized grid failures.",
  },
  {
    id: "commercial",
    name: "Commercial Buildings & Hotels",
    icon: Building,
    useCase: "Central air conditioning for large-scale comfort cooling. Utilizing natural gas or district steam, our heavy-duty chillers offload the electrical grid and provide uninterrupted comfort for high-occupancy spaces.",
  },
  {
    id: "data-centers",
    name: "Data Centers & Green Buildings",
    icon: Server,
    useCase: "Energy-efficient cooling for high-density heat loads. Our systems drastically lower the PUE (Power Usage Effectiveness) of data centers by utilizing thermal energy, paving the way for truly sustainable digital infrastructure.",
  },
  {
    id: "aviation",
    name: "Aviation & Defense",
    icon: Plane,
    useCase: "Mission-critical facilities demand foolproof reliability. BROAD India delivers robust, low-maintenance thermal cooling systems that ensure uptime for critical infrastructure without straining localized power grids.",
  }
];

export default function IndustriesAccordion() {
  const [openId, setOpenId] = useState<string | null>(industries[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32 relative z-10 bg-white lg:bg-transparent pb-4 lg:pb-0"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Deep Industry Expertise
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mb-6" />
            <p className="text-lg text-gray-600 font-light mb-8">
              Explore how specific sectors leverage our non-electric thermal technology to solve their unique process cooling and energy challenges.
            </p>
          </motion.div>

          <div className="lg:w-2/3 w-full">
            <FadeInStaggerContainer staggerDelay={0.1} className="flex flex-col gap-4">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isOpen = openId === ind.id;
                
                return (
                  <FadeInStaggerItem key={ind.id}>
                    <div 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen ? "border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" : "border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      <button
                        onClick={() => toggleOpen(ind.id)}
                        className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            isOpen ? "bg-blue-600 text-white" : "bg-slate-50 text-blue-600"
                          }`}>
                            <Icon size={18} strokeWidth={2.5} />
                          </div>
                          <span className={`text-xl font-bold tracking-tight transition-colors ${
                            isOpen ? "text-blue-700" : "text-gray-900"
                          }`}>
                            {ind.name}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`text-gray-400 ${isOpen ? "text-blue-600" : ""}`}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-8 pt-2">
                              <div className="pl-14">
                                <p className="text-gray-600 leading-relaxed font-light text-lg">
                                  {ind.useCase}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeInStaggerItem>
                );
              })}
            </FadeInStaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

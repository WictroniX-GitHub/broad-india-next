"use client";

import { motion } from "framer-motion";
import { Flame, ArrowRight, Droplet, ZapOff, TrendingDown } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const steps = [
  {
    id: 1,
    icon: Flame,
    title: "1. Capture Waste Heat",
    description: "Surplus thermal energy (exhaust gas, steam, hot water) is recovered from your existing industrial processes or power generation.",
  },
  {
    id: 2,
    icon: Droplet,
    title: "2. Absorption Cycle",
    description: "The recovered heat drives a LiBr absorption refrigeration cycle, boiling the refrigerant without using mechanical compressors.",
  },
  {
    id: 3,
    icon: ZapOff,
    title: "3. Non-Electric Cooling",
    description: "The system produces chilled water for process cooling or air conditioning, operating with near-zero electricity consumption.",
  },
  {
    id: 4,
    icon: TrendingDown,
    title: "4. Massive Savings",
    description: "Electricity demand is cut by up to 90%, drastically reducing OPEX, grid dependence, and your facility's carbon footprint.",
  },
];

export default function WhyNonElectric() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How Non-Electric Cooling Works
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Transforming industrial waste heat into highly efficient, zero-emission process cooling.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0">
            <motion.div 
              className="h-full bg-blue-600 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <FadeInStaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInStaggerItem key={step.id}>
                  <div className="flex flex-col items-center text-center relative group">
                    {/* Icon Node */}
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:border-blue-50 transition-all duration-300 relative z-10">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                    
                    {/* Mobile connecting arrow */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden text-gray-300 my-4">
                        <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-xs px-2">
                      {step.description}
                    </p>
                  </div>
                </FadeInStaggerItem>
              );
            })}
          </FadeInStaggerContainer>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Activity,
  MapPin,
  TrendingDown,
  Settings2,
  CalendarDays,
  ShieldCheck
} from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const metrics = [
  {
    id: 1,
    value: "500+",
    unit: "MW",
    label: "Installed Capacity",
    icon: Activity,
  },
  {
    id: 2,
    value: "697K",
    unit: "Tons",
    label: "CO₂e Reduced",
    icon: TrendingDown,
  },
  {
    id: 4,
    value: "25+",
    unit: "Years",
    label: "In Indian Market",
    icon: CalendarDays,
  },
  {
    id: 6,
    value: "15+",
    unit: "States",
    label: "Service Coverage",
    icon: MapPin,
  },
];

export default function ImpactMetrics() {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Impact Across India</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light">
            Delivering proven scale, sustainability, and operational excellence.
          </p>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <FadeInStaggerItem key={metric.id}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-700 transition-colors duration-300 backdrop-blur-sm border border-white/20">
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight">{metric.value}</span>
                    {metric.unit && (
                      <span className="text-blue-200 font-semibold text-sm md:text-base">{metric.unit}</span>
                    )}
                  </div>
                  <span className="text-sm md:text-base text-blue-100 font-light">{metric.label}</span>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

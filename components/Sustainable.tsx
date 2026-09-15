"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Recycle, Globe } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import sustainableBg from "@/public/images/sustainable-forest.jpg";

const sustainabilityItems = [
  {
    title: "Reducing Carbon Footprint",
    description:
      "Our absorption chillers eliminate the need for ozone-depleting refrigerants and cut electricity-driven carbon emissions by leveraging waste heat, steam, and natural gas as energy sources.",
    icon: Leaf,
  },
  {
    title: "Waste Heat Recovery",
    description:
      "Convert industrial waste heat - exhaust gas, jacket water, low-pressure steam - into chilled water for process cooling, turning a liability into measurable energy savings.",
    icon: Recycle,
  },
  {
    title: "Positive Global Impact",
    description:
      "With 697,000+ TCO₂e eliminated across 100+ projects, BROAD India contributes to India's net-zero cooling targets and supports corporate ESG goals at scale.",
    icon: Globe,
  },
];

export default function Sustainable() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Subtle fade in/out for the overlay
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.6, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/sustainable-forest.jpg')" }}
    >
      {/* Dynamic Overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity }}
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Sustainable HVAC Solutions for a{" "}
            <span className="text-green-400">Greener Tomorrow</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            BROAD India delivers cutting-edge Vapour Absorption Machines (VAM) and
            non-electric air conditioning systems that drastically reduce power
            consumption and environmental impact. Our products are powered by waste
            heat, steam, hot water, and natural gas.
          </p>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <FadeInStaggerItem key={index}>
                <div className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 text-green-300 mb-8 backdrop-blur-md border border-green-400/30 shadow-[0_0_30px_rgba(74,222,128,0.15)] group-hover:shadow-[0_0_50px_rgba(74,222,128,0.4)] group-hover:scale-110 transition-all duration-500">
                    <IconComponent size={36} strokeWidth={1.5} className="group-hover:text-green-200 transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-green-300 transition-colors">{item.title}</h3>
                  <p className="text-white/75 leading-relaxed text-sm md:text-base font-light">{item.description}</p>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

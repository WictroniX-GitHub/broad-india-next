"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import itcImg from "@/public/images/itc.webp";

const installations = [
  {
    id: 1,
    title: "JSW Bellary",
    metric: "500 TR Cooling Capacity",
    industry: "Steel & Manufacturing",
    image: "/images/JSW_Bellary.avif",
    description:
      "Deployed vapour absorption chillers at JSW Group's Bellary steel complex, one of India's largest integrated steel plants, delivering industrial-scale process cooling powered by waste heat recovery.",
  },
  {
    id: 2,
    title: "Indian Oil Corporation",
    metric: "Waste Heat Recovery",
    industry: "Oil & Gas",
    image: "/images/indian-oil-recent-ints.jpg",
    description:
      "Installed waste-heat-driven absorption chillers at IOCL's Vadodara refinery, converting surplus process heat into chilled water for plant cooling - reducing electricity consumption and operational costs.",
  },
  {
    id: 3,
    title: "ITC Limited",
    metric: "VAM for 4 Plants",
    industry: "FMCG & Manufacturing",
    image: itcImg,
    description:
      "Supplied and commissioned Vapour Absorption Machines across four ITC manufacturing plants for process cooling applications, supporting ITC's sustainability and carbon-neutrality commitments.",
  },
];

export default function RecentInstallations() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      {/* Impeccable UI background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Recent Installations</h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto font-light">
            Trusted by India&apos;s leading industrial conglomerates for mission-critical cooling
          </p>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.15} className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {installations.map((install) => (
            <FadeInStaggerItem key={install.id} className="w-[85vw] md:w-auto shrink-0 snap-center h-full">
              <div className="group h-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 relative flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <Image
                      src={install.image}
                      alt={install.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  {/* Subtle gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Industry tag */}
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4 tracking-wide">
                    {install.industry}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {install.title}
                  </h3>

                  {/* Metric highlight */}
                  <p className="text-green-400 font-medium text-sm mb-4">
                    {install.metric}
                  </p>

                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {install.description}
                  </p>

                  {/* Hover link reveal */}
                  <div className="flex items-center text-white/50 font-medium group-hover:text-white transition-colors duration-300">
                    <span className="relative overflow-hidden flex items-center">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">View case study</span>
                      <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">View case study</span>
                    </span>
                    <motion.div
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* Soft glow border effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500 pointer-events-none" />
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

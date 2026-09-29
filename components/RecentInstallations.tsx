"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

// Latest three from shared data (Kejriwal first)
const installations = caseStudies.slice(0, 3);

export default function RecentInstallations() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      {/* Impeccable UI background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Recent Installations</h2>
            <p className="text-white/70 text-base md:text-lg font-light">
              Trusted by India&apos;s leading industrial conglomerates for mission-critical cooling
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link 
              href="/installations" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
            >
              <span>View all installations</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <FadeInStaggerContainer staggerDelay={0.15} className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {installations.map((study) => (
            <FadeInStaggerItem key={study.slug} className="w-[85vw] md:w-auto shrink-0 snap-center h-full">
              <CaseStudyCard study={study} tone="dark" />
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}


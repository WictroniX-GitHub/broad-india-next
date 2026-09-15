"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ImpactMetrics from "@/components/ImpactMetrics";
import EventsGallery from "@/components/EventsGallery";
import InstallationCard, { type Installation } from "@/components/InstallationCard";

// Mock related studies
const RELATED_STUDIES: Installation[] = [
  {
    id: 2,
    title: "Indian Oil Corporation",
    metric: "Waste Heat Recovery",
    industry: "Oil & Gas",
    image: "/images/indian-oil-recent-ints.jpg",
    description: "Installed waste-heat-driven absorption chillers at IOCL's Vadodara refinery, converting surplus process heat into chilled water.",
    slug: "iocl-vadodara"
  },
  {
    id: 3,
    title: "ITC Limited",
    metric: "VAM for 4 Plants",
    industry: "FMCG",
    image: "/images/itc.webp",
    description: "Supplied and commissioned Vapour Absorption Machines across four ITC manufacturing plants for process cooling applications.",
    slug: "itc-limited"
  }
];

const IMAGES = [
  { src: "/images/JSW_Bellary.avif", alt: "JSW Bellary Plant View" },
  { src: "/images/chiller-bg.jpg", alt: "Chiller Installation" },
  { src: "/images/factory-bg.jpg", alt: "Factory Floor" },
];

export default function CaseStudyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. Project Snapshot Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/JSW_Bellary.avif" alt="Background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <Link href="/installations" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 font-medium transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Installations
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium tracking-wide">
              Industrial
            </span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-wide">
              Waste Heat Chiller
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight max-w-3xl leading-tight">
            JSW Bellary Steel Complex
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-medium mb-8 max-w-2xl">
            500 TR Cooling Capacity via Waste Heat Recovery
          </p>
        </div>
      </section>

      {/* 2. Challenge & 3. Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                Steel manufacturing generates immense amounts of low-grade waste heat that is traditionally vented into the atmosphere. JSW Group sought a sustainable method to harness this thermal byproduct to generate chilled water for their critical process cooling loops, aiming to reduce their reliance on grid electricity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                We designed and integrated a massive Waste Heat Driven Vapour Absorption Chiller system. This non-electric cooling solution directly utilizes the hot exhaust gases from the steel plant to drive the refrigeration cycle, providing 500 TR of cooling entirely free of electrical compressor load.
              </p>
              <Link href="/vapour-absorption-chiller/waste-heat-chiller" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                View Waste Heat Chiller <ChevronRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Results */}
      <ImpactMetrics />

      {/* 5. Photos */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Gallery</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <EventsGallery images={IMAGES} compact={true} />
        </div>
      </section>

      {/* 6. Related case studies */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Installations</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
            </div>
            <Link href="/installations" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View all <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {RELATED_STUDIES.map((study) => (
              <InstallationCard key={study.id} installation={study} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/installations" className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full text-blue-600 font-bold shadow-sm">
              View all Installations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

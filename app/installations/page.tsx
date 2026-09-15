"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InstallationCard, { type Installation } from "@/components/InstallationCard";
import ProductFAQ from "@/components/ProductFAQ";

// Mock Data
const ALL_INSTALLATIONS: Installation[] = [
  {
    id: 1,
    title: "JSW Bellary",
    metric: "500 TR Cooling Capacity",
    industry: "Industrial",
    image: "/images/JSW_Bellary.avif",
    description: "Deployed vapour absorption chillers at JSW Group's Bellary steel complex, one of India's largest integrated steel plants.",
    slug: "jsw-bellary"
  },
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

const INDUSTRIES = ["All", "Industrial", "Oil & Gas", "FMCG"];

const HUB_FAQS = [
  {
    question: "How long does a typical installation take?",
    answer: "A standard installation takes anywhere from 4 to 8 weeks depending on site readiness, system capacity, and integration complexity with existing infrastructure."
  },
  {
    question: "Do you provide Annual Maintenance Contracts (AMC)?",
    answer: "Yes, BROAD India provides comprehensive AMCs covering preventive maintenance, performance optimization, and 24/7 technical support."
  },
  {
    question: "Can your chillers integrate with existing BMS systems?",
    answer: "Absolutely. All BROAD chillers come with advanced proprietary control panels that seamlessly integrate with standard Building Management Systems via Modbus, BACnet, or TCP/IP."
  }
];

export default function InstallationsHub() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredInstallations = activeFilter === "All" 
    ? ALL_INSTALLATIONS 
    : ALL_INSTALLATIONS.filter(inst => inst.industry === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Proven Installations Across India
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Explore how India&apos;s leading enterprises leverage BROAD&apos;s non-electric cooling technology to slash emissions and operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {INDUSTRIES.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === industry
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredInstallations.map(installation => (
                <motion.div
                  key={installation.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <InstallationCard installation={installation} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredInstallations.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p>No installations found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Installation & Service FAQs</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          <ProductFAQ faqs={HUB_FAQS} />
        </div>
      </section>
    </div>
  );
}

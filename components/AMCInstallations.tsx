"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Wrench, ShieldCheck } from "lucide-react";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

const amcClients = [
  {
    name: "Indian Oil Corporation",
    location: "Vadodara, Gujarat",
    product: "Vapour Absorption Chiller",
    year: "2018",
  },
  {
    name: "Adani Petrochemicals",
    location: "Mundra, Gujarat",
    product: "Industrial Heat Pump",
    year: "2021",
  },
  {
    name: "ITC Limited",
    location: "Multiple Sites",
    product: "VAC & CCHP Systems",
    year: "2019",
  },
  {
    name: "JSW Steel",
    location: "Bellary, Karnataka",
    product: "Waste Heat Recovery",
    year: "2020",
  },
];

export default function AMCInstallations() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <ShieldCheck size={16} />
              Annual Maintenance Contracts
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              140+ Installations Under Active AMC
            </h2>
            <p className="text-lg text-gray-600 font-light">
              We don&apos;t just commission systems; we maintain lifelong relationships. Our dedicated service network ensures peak performance and longevity for India&apos;s most critical infrastructure.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            href="/installations"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors shrink-0"
          >
            View all installations <ArrowRight size={20} />
          </motion.a>
        </div>

        <FadeInStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amcClients.map((client, index) => (
            <FadeInStaggerItem key={index}>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Settings size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded">Since {client.year}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-1.5">
                  <Wrench size={12} /> {client.product}
                </p>
                
                <div className="w-full h-px bg-gray-100 mb-4" />
                
                <p className="text-sm text-gray-400">
                  {client.location}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}

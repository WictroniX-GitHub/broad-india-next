"use client";

import Link from "next/link";
import { ChevronRight, ZapOff, Leaf, TrendingDown, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import InstallationCard, { type Installation } from "@/components/InstallationCard";
import ProductFAQ from "@/components/ProductFAQ";

// Mock Data
const MOCK_CASE_STUDIES: Installation[] = [
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
  }
];

const MOCK_PRODUCTS = [
  {
    title: "Waste Heat Chiller",
    description: "Utilize low-grade waste heat (exhaust gas, hot water) for zero-electricity cooling.",
    href: "/vapour-absorption-chiller/waste-heat-chiller"
  },
  {
    title: "Direct-Fired Chiller",
    description: "Powered by natural gas or diesel, ideal for facilities lacking reliable grid power.",
    href: "/vapour-absorption-chiller/direct-fired-chiller"
  }
];

const INDUSTRY_FAQS = [
  {
    question: "What is the typical ROI for absorption chillers in this industry?",
    answer: "Depending on your current utility rates and the availability of waste heat, payback periods typically range from 1.5 to 3 years."
  },
  {
    question: "How do these systems impact our carbon footprint?",
    answer: "By replacing electric compressors with thermal energy, facilities often see a 60-80% reduction in Scope 2 emissions related to cooling."
  }
];

export default function IndustryPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <Link href="/industries" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Industries
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-4xl [text-wrap:balance]">
            Industrial & Manufacturing Cooling Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-600 font-medium max-w-3xl leading-relaxed">
            Stop venting money into the atmosphere. Turn industrial waste heat into free process cooling.
          </p>
        </div>
      </section>

      {/* 2. Why this industry needs non-electric cooling */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The True Cost of Electric Cooling</h2>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                In heavy manufacturing, process cooling can account for over 40% of total electrical consumption. Simultaneously, these same facilities vent massive amounts of thermal energy (exhaust gas, steam, hot water) directly into the environment. 
              </p>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                BROAD&apos;s non-electric absorption technology breaks this cycle, allowing you to harness your existing thermal waste to drive your cooling loops.
              </p>
            </motion.div>
            
            <FadeInStaggerContainer className="grid gap-6">
              <FadeInStaggerItem>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ZapOff size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Slash Peak Demand</h3>
                    <p className="text-gray-600 text-sm">Remove compressor loads from your electrical grid, avoiding peak demand charges.</p>
                  </div>
                </div>
              </FadeInStaggerItem>
              <FadeInStaggerItem>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Decarbonize Operations</h3>
                    <p className="text-gray-600 text-sm">Achieve net-zero goals faster by utilizing 100% waste heat for cooling.</p>
                  </div>
                </div>
              </FadeInStaggerItem>
              <FadeInStaggerItem>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <TrendingDown size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Rapid ROI</h3>
                    <p className="text-gray-600 text-sm">Drastically lower OPEX results in typical payback periods of under 3 years.</p>
                  </div>
                </div>
              </FadeInStaggerItem>
            </FadeInStaggerContainer>
          </div>
        </div>
      </section>

      {/* 3. Recommended products */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended for Manufacturing</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MOCK_PRODUCTS.map((prod, idx) => (
              <Link key={idx} href={prod.href} className="group block">
                <div className="p-8 bg-slate-50 border border-gray-100 rounded-2xl h-full flex flex-col transition-all hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{prod.title}</h3>
                  <p className="text-gray-600 font-light mb-6 flex-grow">{prod.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    <span>View Specifications</span>
                    <ChevronRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Case studies */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial Case Studies</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
            </div>
            <Link href="/installations" className="hidden md:inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View all <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_CASE_STUDIES.map((study) => (
              <InstallationCard key={study.id} installation={study} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Industry Specific FAQs</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          <ProductFAQ faqs={INDUSTRY_FAQS} title="" />
        </div>
      </section>
    </div>
  );
}

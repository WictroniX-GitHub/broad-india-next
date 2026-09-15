"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ProductItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IndustryItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: string | number;
  title: string;
  metric: string;
  industry: string;
  image: string;
  description: string;
}

export interface CategoryTemplateProps {
  heroImage: string;
  title: string;
  tagline: string;
  breadcrumbs: BreadcrumbItem[];
  introContent: React.ReactNode;
  stats?: StatItem[];
  products?: ProductItem[];
  features?: IndustryItem[];
  industries?: IndustryItem[];
  faqs?: FAQItem[];
  customSections?: React.ReactNode;
  caseStudies?: CaseStudy[];
}

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function CategoryFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-blue-200 shadow-md" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
            >
              <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${
                isOpen ? "text-blue-700" : "text-gray-900"
              }`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`text-gray-400 shrink-0 ml-4 ${isOpen ? "text-blue-600" : ""}`}
              >
                <ChevronDown size={24} />
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
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

// Default hardcoded case studies as requested by user
const defaultCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "JSW Bellary",
    metric: "500 TR Cooling Capacity",
    industry: "Steel & Manufacturing",
    image: "/images/JSW_Bellary.avif",
    description: "Deployed vapour absorption chillers at JSW Group's Bellary steel complex, delivering industrial-scale process cooling powered by waste heat recovery.",
  },
  {
    id: 2,
    title: "Indian Oil Corporation",
    metric: "Waste Heat Recovery",
    industry: "Oil & Gas",
    image: "/images/indian-oil-recent-ints.jpg",
    description: "Installed waste-heat-driven absorption chillers at IOCL's Vadodara refinery, converting surplus process heat into chilled water for plant cooling.",
  },
  {
    id: 3,
    title: "ITC Limited",
    metric: "VAM for 4 Plants",
    industry: "FMCG & Manufacturing",
    image: "/images/itc.webp",
    description: "Supplied and commissioned Vapour Absorption Machines across four ITC manufacturing plants for process cooling applications.",
  }
];

export default function CategoryTemplate({
  heroImage,
  title,
  tagline,
  breadcrumbs,
  introContent,
  stats = [],
  products = [],
  features = [],
  industries = [],
  faqs = [],
  customSections,
  caseStudies = defaultCaseStudies,
}: CategoryTemplateProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Sticky Nav Tabs
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "models", label: "Models" },
    { id: "industries", label: "Industries" },
    { id: "case-studies", label: "Case Studies" },
    { id: "faqs", label: "FAQs" },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for sticky nav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Ken Burns */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40 z-10" />

        <div className="container mx-auto px-4 md:px-8 relative z-20 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-8">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <ChevronRight size={14} className="mx-2 text-gray-500" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </div>
              ))}
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight [text-wrap:balance]"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-200 font-light [text-wrap:pretty]"
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Sticky In-Page Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`py-4 text-sm font-semibold transition-all relative ${
                  activeTab === tab.id ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Overview (Intro + Stats) */}
      <section id="overview" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 prose prose-lg prose-blue [text-wrap:pretty]">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="text-gray-600 font-light leading-relaxed">
                {introContent}
              </div>
            </div>

            {stats.length > 0 && (
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Sections (Reintegrated Legacy Content) */}
      {customSections && (
        <section className="py-20 bg-slate-50 scroll-mt-24 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            {customSections}
          </div>
        </section>
      )}

      {/* 4. Models Grid ("Our Products") */}
      {products.length > 0 && (
        <section id="models" className="py-20 bg-white scroll-mt-24 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Available Models</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 group/container">
              {products.map((prod, index) => (
                <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-2 [transition-property:all] group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                  <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                    <Image src={prod.image} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{prod.title}</h3>
                    <p className="text-gray-600 font-light mb-6 flex-grow">{prod.description}</p>
                    <Link href={prod.link} className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      View details <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4.5 Key Features */}
      {features.length > 0 && (
        <section className="py-20 bg-slate-50 scroll-mt-24 border-t border-gray-200 relative">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl group/container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Key Features & Benefits</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <FadeInStaggerContainer className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {features.map((feat, index) => {
                return (
                  <FadeInStaggerItem key={index}>
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white h-full text-center hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                      <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {feat.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">{feat.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{feat.description}</p>
                    </div>
                  </FadeInStaggerItem>
                );
              })}
            </FadeInStaggerContainer>
          </div>
        </section>
      )}

      {/* 5. Industries Experience */}
      {industries.length > 0 && (
        <section id="industries" className="py-20 bg-white scroll-mt-24 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl group/container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Industries We Serve</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full" />
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto [text-wrap:pretty]">
                Proven track record delivering reliable cooling solutions across diverse sectors.
              </p>
            </div>

            <FadeInStaggerContainer className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {industries.map((ind, index) => {
                return (
                  <FadeInStaggerItem key={index}>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 group h-full hover:-translate-y-1 group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                      <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {ind.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                      <p className="text-gray-600 font-light">{ind.description}</p>
                    </div>
                  </FadeInStaggerItem>
                );
              })}
            </FadeInStaggerContainer>
          </div>
        </section>
      )}

      {/* 6. Case Studies / Installations */}
      {caseStudies.length > 0 && (
        <section id="case-studies" className="py-20 bg-slate-900 text-white scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight [text-wrap:balance]">Category Installations</h2>
              <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-lg text-white/70 font-light max-w-2xl mx-auto [text-wrap:pretty]">
                Real-world implementations of this technology across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((install) => (
                <div key={install.id} className="group h-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 relative flex flex-col hover:-translate-y-2">
                  <div className="relative w-full h-56 overflow-hidden bg-gray-800">
                    <Image src={install.image} alt={install.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-2 shadow-sm backdrop-blur-md">
                        {install.industry}
                      </span>
                      <h4 className="text-2xl font-bold text-white leading-tight">{install.title}</h4>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-blue-400 font-semibold text-sm mb-4">{install.metric}</p>
                    <p className="text-gray-300 font-light text-sm mb-6 leading-relaxed flex-grow">
                      {install.description}
                    </p>
                    <Link href="/installations" className="mt-auto inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      View full case study <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQs */}
      {faqs.length > 0 && (
        <section id="faqs" className="py-20 bg-slate-50 scroll-mt-24 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Frequently Asked Questions</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>
            <CategoryFAQ items={faqs} />
          </div>
        </section>
      )}

    </div>
  );
}

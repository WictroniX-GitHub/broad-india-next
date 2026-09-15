"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import ProductFAQ, { type FAQItem } from "@/components/ProductFAQ";
import ContactForm from "@/components/ContactForm";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SpecItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface IconGridItem {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

interface ModelVariant {
  modelNumber: string;
  capacity: string;
  dimensions: string;
  energyInput: string;
}

interface DownloadItem {
  title: string;
  size: string;
  type: string;
}

export interface CaseStudy {
  id: string | number;
  title: string;
  metric: string;
  industry: string;
  image: string;
  description: string;
}

export interface PDPTemplateProps {
  heroImage: string;
  title: string;
  tagline: string;
  breadcrumbs: BreadcrumbItem[];
  introContent: React.ReactNode;
  definitionTerm?: string;
  definitionText?: string;
  specs?: SpecItem[];
  features?: IconGridItem[];
  applications?: IconGridItem[];
  benefits?: IconGridItem[];
  modelTable?: ModelVariant[];
  faqs?: FAQItem[];
  downloads?: DownloadItem[];
  certifications?: React.ReactNode;
  customSections?: React.ReactNode;
  caseStudies?: CaseStudy[];
  catalogueUrl?: string;
}

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function ProductRFQForm({ productName }: { productName: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
        <p className="text-gray-600 font-light">Get custom pricing and engineering specifications for the {productName}.</p>
      </div>
      
      <form action="https://formspree.io/f/xqeypqdv" method="post" className="space-y-6">
        {/* Hidden field for product context */}
        <input type="hidden" name="Product_Interest" value={productName} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Company Name</label>
            <input type="text" name="company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Required Capacity (e.g. 500 TR)</label>
            <input type="text" name="capacity" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Project Details</label>
          <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" />
        </div>

        <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
          <Send size={18} /> Request Quote
        </button>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function PDPTemplate({
  heroImage,
  title,
  tagline,
  breadcrumbs,
  introContent,
  definitionTerm,
  definitionText,
  specs = [],
  features = [],
  applications = [],
  benefits = [],
  modelTable = [],
  faqs = [],
  downloads = [],
  certifications,
  customSections,
  caseStudies = [],
}: PDPTemplateProps) {
  
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. Clean Hero */}
      <section className="relative pt-32 pb-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8 font-medium">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight size={14} className="mx-2 text-gray-400" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-900">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight [text-wrap:balance]"
              >
                {title}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-xl text-blue-600 font-medium mb-8"
              >
                {tagline}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg text-gray-600 font-light leading-relaxed mb-8 [text-wrap:pretty]"
              >
                {definitionTerm && definitionText && (
                  <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{definitionTerm}</h3>
                    <p className="text-gray-700 m-0">{definitionText}</p>
                  </div>
                )}
                {introContent}
              </motion.div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#rfq" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1">
                  Request Specifications
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <Image src={heroImage} alt={title} fill className="object-contain p-8" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Certifications & Key Specs Strip */}
      <section className="py-16 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {certifications && (
            <div className="mb-12">
              {certifications}
            </div>
          )}

          {specs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{spec.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">{spec.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Specs Data Table */}
      {modelTable.length > 0 && (
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Model Specifications</h3>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="py-5 px-6 font-semibold text-gray-900 whitespace-nowrap sticky top-0 bg-slate-50">Model Number</th>
                    <th className="py-5 px-6 font-semibold text-gray-900 whitespace-nowrap sticky top-0 bg-slate-50">Cooling Capacity</th>
                    <th className="py-5 px-6 font-semibold text-gray-900 whitespace-nowrap sticky top-0 bg-slate-50">Dimensions (L×W×H)</th>
                    <th className="py-5 px-6 font-semibold text-gray-900 whitespace-nowrap sticky top-0 bg-slate-50">Energy Input</th>
                  </tr>
                </thead>
                <tbody>
                  {modelTable.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{row.modelNumber}</td>
                      <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{row.capacity}</td>
                      <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{row.dimensions}</td>
                      <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{row.energyInput}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 4. Features & Benefits Icon Grids */}
      <section className="py-20 bg-slate-50 border-b border-gray-100 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {features.length > 0 && (
              <div className="flex-1 group/container">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Key Features</h3>
                <FadeInStaggerContainer className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                  {features.map((item, idx) => {
                    return (
                      <FadeInStaggerItem key={idx}>
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 [transition-property:all] group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center mb-4 transition-colors">
                            {item.icon}
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          {item.description && <p className="text-sm text-gray-600 font-light">{item.description}</p>}
                        </div>
                      </FadeInStaggerItem>
                    );
                  })}
                </FadeInStaggerContainer>
              </div>
            )}
            
            {applications.length > 0 && (
              <div className="flex-1 group/container">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Applications</h3>
                <FadeInStaggerContainer className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                  {applications.map((item, idx) => {
                    return (
                      <FadeInStaggerItem key={idx}>
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 [transition-property:all] group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center mb-4 transition-colors">
                            {item.icon}
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          {item.description && <p className="text-sm text-gray-600 font-light">{item.description}</p>}
                        </div>
                      </FadeInStaggerItem>
                    );
                  })}
                </FadeInStaggerContainer>
              </div>
            )}
            
          </div>

          {benefits.length > 0 && (
            <div className="mt-16 group/container">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Core Benefits</h3>
              <FadeInStaggerContainer className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                {benefits.map((item, idx) => {
                  return (
                    <FadeInStaggerItem key={idx}>
                      <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 [transition-property:all] group-hover/container:[&:not(:hover)]:opacity-70 group-hover/container:[&:not(:hover)]:scale-[0.98]">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center mb-4 transition-colors">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        {item.description && <p className="text-sm text-gray-600 font-light">{item.description}</p>}
                      </div>
                    </FadeInStaggerItem>
                  );
                })}
              </FadeInStaggerContainer>
            </div>
          )}
        </div>
      </section>

      {/* Custom Restored Legacy Sections */}
      {customSections && (
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            {customSections}
          </div>
        </section>
      )}

      {/* 5. Case Studies / Installations */}
      {caseStudies.length > 0 && (
        <section className="py-20 bg-slate-900 text-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight [text-wrap:balance]">Proven in the Field</h3>
              <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6 rounded-full" />
              <p className="text-lg text-white/70 font-light max-w-2xl mx-auto [text-wrap:pretty]">
                Real-world implementations of this specific model across industrial facilities.
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5.5 FAQs */}
      {faqs.length > 0 && (
        <section id="faqs" className="py-20 bg-slate-50 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight [text-wrap:balance]">Frequently Asked Questions</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>
            <ProductFAQ faqs={faqs} />
          </div>
        </section>
      )}

      {/* 6. RFQ Form & Downloads */}
      <section id="rfq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <ContactForm />
            </div>
            
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Resources</h3>
              {downloads.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {downloads.map((doc, idx) => (
                    <a key={idx} href="#" className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1">
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{doc.title}</h4>
                        <p className="text-xs text-gray-500 uppercase">{doc.type} • {doc.size}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 duration-300">
                        <Download size={16} />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 font-light">Resources are currently being updated.</p>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

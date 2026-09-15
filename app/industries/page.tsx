"use client";

import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import IndustryCard, { type Industry } from "@/components/IndustryCard";
import { 
  Building2, 
  Factory, 
  Stethoscope, 
  Server, 
  ShoppingCart, 
  Hotel
} from "lucide-react";

const INDUSTRIES: Industry[] = [
  {
    id: 1,
    name: "Industrial & Manufacturing",
    challenge: "Process cooling that consumes massive electricity and impacts bottom-line profitability.",
    icon: <Factory size={28} />,
    slug: "industrial"
  },
  {
    id: 2,
    name: "Commercial Real Estate",
    challenge: "HVAC systems account for up to 60% of total building energy consumption.",
    icon: <Building2 size={28} />,
    slug: "commercial"
  },
  {
    id: 3,
    name: "Healthcare",
    challenge: "Requires 100% reliable, continuous cooling for critical wards without power grid dependency.",
    icon: <Stethoscope size={28} />,
    slug: "healthcare"
  },
  {
    id: 4,
    name: "Data Centers",
    challenge: "High-density thermal loads demanding ultra-efficient, low-PUE cooling architectures.",
    icon: <Server size={28} />,
    slug: "data-centers"
  },
  {
    id: 5,
    name: "Retail & Malls",
    challenge: "Vast open spaces that are extremely expensive to cool during peak summer hours.",
    icon: <ShoppingCart size={28} />,
    slug: "retail"
  },
  {
    id: 6,
    name: "Hospitality",
    challenge: "Balancing guest comfort across hundreds of rooms while maintaining tight operational margins.",
    icon: <Hotel size={28} />,
    slug: "hospitality"
  }
];

export default function IndustriesHub() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              Discover how BROAD&apos;s non-electric and ultra-efficient cooling technologies solve the unique thermal challenges of every major sector.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <FadeInStaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <FadeInStaggerItem key={industry.id}>
                <IndustryCard industry={industry} />
              </FadeInStaggerItem>
            ))}
          </FadeInStaggerContainer>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white mt-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t see your industry?</h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto mb-10">
            Our absorption chillers and heat pumps are highly customizable. Contact our engineering team for a free thermal analysis of your facility.
          </p>
          <a href="/contact-us" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1">
            Request Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

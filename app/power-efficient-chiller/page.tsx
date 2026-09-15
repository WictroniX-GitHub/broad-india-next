"use client";

import CategoryTemplate from "@/components/CategoryTemplate";
import {
  Zap, Shield, Gauge, Server, Hospital, Building2, Hotel
} from "lucide-react";

export default function PowerEfficientChillerCategory() {
  return (
    <CategoryTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg"
      title="Power Efficient Chillers"
      tagline="Ultra-high-efficiency electric cooling using magnetic levitation"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Power Efficient Chiller" },
      ]}
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            While BROAD India is globally renowned for non-electric absorption chillers, we recognize that some facilities require ultra-high-efficiency electric cooling. Our Power Efficient Chiller line utilises advanced magnetic-bearing, oil-free centrifugal compressor technology to deliver the highest Coefficient of Performance (COP) available in the commercial HVAC market - reaching up to 11 under part-load conditions.
          </p>
          <p className="text-lg leading-relaxed">
            By eliminating the oil management system entirely, these chillers remove the single biggest cause of efficiency degradation in conventional electric chillers: oil coating the heat exchange tubes. The result is a cooling system that maintains its day-one efficiency year after year, operates with whisper-quiet acoustics, and significantly reduces ongoing maintenance requirements.
          </p>
        </>
      }
      stats={[
        { value: "Up to 11", label: "Part-Load COP" },
        { value: "Zero", label: "Lubricating Oil" },
        { value: "< 73 dB", label: "Acoustics" },
      ]}
      products={[
        {
          title: "Magnetic Bearing Oil-Free Chiller",
          description: "Frictionless compressor technology delivering unmatched efficiency, silence, and reliability without the complications of an oil management system.",
          image: "https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg",
          link: "/power-efficient-chiller/magnetic-bearing-oil-free"
        }
      ]}
      features={[
        { icon: <Gauge size={28} />, title: "Magnetic Levitation", description: "The compressor shaft rotates without physical contact, eliminating friction, mechanical wear, and efficiency losses." },
        { icon: <Shield size={28} />, title: "100% Oil-Free Operation", description: "No oil pumps, filters, heaters, or separators. Heat exchangers remain permanently clean for sustained high efficiency." },
        { icon: <Zap size={28} />, title: "Integrated VFD", description: "Built-in Variable Frequency Drive continuously matches compressor speed to the building's cooling load for exceptional part-load efficiency." },
      ]}
      industries={[
        { icon: <Server size={24} />, title: "Data Centres", description: "High-density cooling with maximum uptime and ultra-low PUE." },
        { icon: <Hospital size={24} />, title: "Hospitals & Clinics", description: "Reliable, whisper-quiet operation critical for healthcare environments." },
        { icon: <Building2 size={24} />, title: "Premium Office Buildings", description: "Slash annual HVAC energy bills while achieving high LEED certification scores." },
        { icon: <Hotel size={24} />, title: "Luxury Hotels & Resorts", description: "Ensure guest comfort with zero vibration and low acoustic footprints." },
      ]}
      faqs={[
        {
          question: "Why is 'oil-free' operation so important for chiller efficiency?",
          answer: "In conventional chillers, lubricating oil inevitably mixes with the refrigerant and circulates through the system. Over time, this oil coats the copper tubes in the heat exchangers, acting as an insulator. Even a thin layer of oil can reduce heat transfer efficiency by 10-15%. By completely eliminating oil, magnetic-bearing chillers maintain their original 'day-one' efficiency for the entire life of the equipment.",
        },
        {
          question: "How does the part-load efficiency compare to conventional chillers?",
          answer: "It is significantly better. Most commercial buildings operate at partial cooling loads (40-70% capacity) for over 90% of the year. Magnetic-bearing chillers use an integrated Variable Frequency Drive (VFD) to slow down the compressor at partial loads. Because there is no mechanical friction, the compressor remains incredibly efficient at low speeds, achieving Integrated Part Load Value (IPLV) COPs of 9 to 11, compared to 5 to 6 for standard chillers.",
        },
        {
          question: "Are magnetic-bearing chillers more expensive to maintain?",
          answer: "No, they are actually much cheaper to maintain. Conventional chillers require regular oil analysis, oil changes, oil filter replacements, and eventually, expensive mechanical bearing replacements. A magnetic-bearing compressor has no oil management system and no physical wear on the bearings, virtually eliminating mechanical maintenance.",
        },
      ]}
      customSections={
        <div className="my-12">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">Global Standards & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 font-bold text-2xl mb-4">AHRI Certified</div>
              <p className="text-gray-600 font-light">Performance verified to international standards</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-green-600 font-bold text-2xl mb-4">ASHRAE Compliant</div>
              <p className="text-gray-600 font-light">Meets stringent energy efficiency requirements</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-purple-600 font-bold text-2xl mb-4">FEMP Standards</div>
              <p className="text-gray-600 font-light">Exceeds Federal Energy Management Program guidelines</p>
            </div>
          </div>
        </div>
      }
    />
  );
}

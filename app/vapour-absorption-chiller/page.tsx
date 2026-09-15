import React from "react";
import type { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { ZapOff, Leaf, Wrench, Factory, TestTube, Apple } from "lucide-react";

export const metadata: Metadata = {
  title: "Vapour Absorption Chillers - Non-Electric Cooling Solutions | BROAD India",
  description: "Explore BROAD India's range of Vapour absorption chillers including direct-fired, waste heat, solar-driven, and multi-energy chillers. Energy-efficient, non-electric cooling solutions for industrial applications.",
  keywords: [
    "Vapour absorption chiller", "non-electric chiller", "absorption chiller",
    "direct fired chiller", "waste heat chiller", "solar chiller",
    "multi-energy chiller", "BROAD chiller", "industrial cooling"
  ],
};

const VapourAbsorptionChiller = () => {
  const introContent = (
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
      <p>
        In an era where industrial cooling demands are surging and electricity costs in India continue to fluctuate, <strong>BROAD India</strong> provides a transformative solution: the <strong>Vapour Absorption Chiller (VAC)</strong>. Unlike conventional mechanical chillers that rely heavily on grid electricity, our absorption chillers utilize thermal energy - such as industrial waste heat, steam, hot water, natural gas, or even solar energy - to drive the refrigeration cycle. This paradigm shift in HVAC technology offers unprecedented energy efficiency, operational reliability, and environmental sustainability for large-scale commercial and industrial applications.
      </p>
      <p>
        At the core of our technology is a highly efficient lithium bromide-water absorption cycle. Water acts as the natural, zero-ODP (Ozone Depletion Potential), and zero-GWP (Global Warming Potential) refrigerant, while lithium bromide serves as the absorbent. By completely eliminating the need for ozone-depleting CFCs and HCFCs, BROAD chillers align perfectly with India&apos;s stringent environmental regulations and corporate net-zero sustainability goals. Our chillers represent a critical step toward decarbonizing the cooling sector, which currently accounts for a massive portion of national energy consumption.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why India&apos;s Industries are Shifting to Absorption Cooling</h3>
      <p>
        India&apos;s industrial sector, spanning textiles, pharmaceuticals, chemicals, and heavy manufacturing, generates vast amounts of low-grade waste heat. Traditionally exhausted into the atmosphere, this thermal energy can now be captured and monetized. A waste-heat-driven vapour absorption chiller recovers this otherwise lost energy to produce chilled water for process cooling or facility air conditioning, effectively delivering &quot;free cooling&quot; and drastically reducing the facility&apos;s overall energy intensity.
      </p>
      <p>
        Furthermore, many regions across India face grid constraints and high peak tariffs. By deploying a BROAD non-electric chiller, facilities can slash their electrical peak demand load by up to 90%, freeing up critical power infrastructure for core manufacturing processes.
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unmatched Reliability and Intelligent Operation</h3>
      <p>
        BROAD Absorption Chillers are engineered with virtually no moving parts within the main refrigeration cycle, bypassing the mechanical wear and tear inherent in electric centrifugal or screw compressors. The result is a whisper-quiet, vibration-free operation with an extended lifespan often exceeding 25 years.
      </p>
    </div>
  );

  return (
    <CategoryTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg"
      title="Vapour Absorption Chillers"
      tagline="Pioneering Non-Electric Cooling with Thermal Energy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers" }
      ]}
      introContent={introContent}
      stats={[
        { value: "90%", label: "Electric Peak Load Reduction" },
        { value: "25+", label: "Years Lifespan" },
        { value: "Zero", label: "ODP & GWP Refrigerant" },
        { value: "100+", label: "Installations Across India" }
      ]}
      products={[
        {
          title: "Direct-Fired Vapour Absorption Chiller",
          description: "Premium, thermally-driven HVAC solution for industrial and commercial environments. Dual-fuel burner (natural gas or light oil).",
          image: "/images/nonElec.jpg",
          link: "/vapour-absorption-chiller/direct-fired-chiller"
        },
        {
          title: "Waste‑Heat‑Driven Absorption Chiller",
          description: "Energy recovery solution leveraging low-grade thermal energy from industrial processes to produce chilled water.",
          image: "/images/wasteHeat.jpg",
          link: "/vapour-absorption-chiller/waste-heat-chiller"
        },
        {
          title: "Two-Stage Absorption Chiller",
          description: "Advanced dual-cycle system for high efficiency, reliability, and superior energy savings using steam or exhaust.",
          image: "https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg",
          link: "/vapour-absorption-chiller/two-stage-chiller"
        },
        {
          title: "Single-Stage Absorption Chiller",
          description: "Proven, reliable, and cost-effective cooling using single-stage lithium bromide absorption technology.",
          image: "https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg",
          link: "/vapour-absorption-chiller/single-stage-chiller"
        },
        {
          title: "Multi-Energy Absorption Chiller",
          description: "Flexible solution capable of running on steam, hot water, exhaust gas, and natural gas simultaneously.",
          image: "https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg",
          link: "/vapour-absorption-chiller/multi-energy-chiller"
        },
        {
          title: "Packaged Absorption Chiller",
          description: "Complete, factory-assembled solution for easy installation and reliable performance. Versatile cooling.",
          image: "https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg",
          link: "/vapour-absorption-chiller/packaged-chiller"
        }
      ]}
      features={[
        {
          title: "Non-Electric Operation",
          description: "Operates without electricity, ideal for regions with high power costs or limited grid access",
          icon: <ZapOff size={28} />
        },
        {
          title: "Environmentally Friendly",
          description: "Uses water as refrigerant, no CFCs or HFCs, significantly reduced carbon footprint",
          icon: <Leaf size={28} />
        },
        {
          title: "Low Maintenance",
          description: "Minimal moving parts, robust construction, ensuring a long and reliable service life",
          icon: <Wrench size={28} />
        }
      ]}
      industries={[
        {
          title: "Petrochemical & Refinery",
          description: "Utilize massive amounts of low-grade waste heat to produce chilled water for process cooling.",
          icon: <Factory size={24} />
        },
        {
          title: "Pharmaceuticals",
          description: "Ultra-reliable, precision cooling required for cleanrooms and batch processing without the high OPEX.",
          icon: <TestTube size={24} />
        },
        {
          title: "Food & Beverage",
          description: "Stable, low-temperature cooling essential for food safety powered entirely by waste heat.",
          icon: <Apple size={24} />
        }
      ]}
      faqs={[
        {
          question: "How does a vapour absorption chiller save electricity?",
          answer: "Unlike conventional electric chillers that rely on power-hungry mechanical compressors, a vapour absorption chiller is driven by heat (like waste heat, steam, or natural gas). This eliminates the main compressor, slashing electrical peak demand by up to 90% and drastically reducing your facility's operational costs."
        },
        {
          question: "What heat sources can drive a BROAD absorption chiller?",
          answer: "BROAD chillers are highly versatile and can be driven by direct-fired natural gas or diesel, industrial waste heat (exhaust gas or jacket water), high or low-pressure steam, hot water, and even solar thermal energy. Multi-energy models can seamlessly switch between these sources."
        },
        {
          question: "What is the lifespan of a BROAD vapour absorption machine (VAM)?",
          answer: "Because there are virtually no moving parts in the main refrigeration cycle, a BROAD absorption chiller experiences almost zero mechanical wear and tear. With proper maintenance, these machines typically operate reliably for over 25 years."
        },
        {
          question: "Are absorption chillers environmentally friendly?",
          answer: "Yes, they are exceptionally green. They utilize pure water as the refrigerant and lithium bromide as the absorbent, completely eliminating ozone-depleting CFCs and HCFCs. Additionally, by recovering industrial waste heat, they significantly reduce fossil fuel consumption and carbon emissions."
        }
      ]}
    />
  );
};

export default VapourAbsorptionChiller;

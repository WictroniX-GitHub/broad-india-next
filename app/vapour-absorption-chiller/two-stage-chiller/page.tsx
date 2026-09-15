"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Flame, Shield, Gauge,
  Hospital, Hotel, Building2, Server, Factory, Landmark,
  DollarSign, Settings, BarChart3, Droplets,
} from "lucide-react";

export default function TwoStageChiller() {
  return (
    <PDPTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg"
      title="Two-Stage Absorption Chiller"
      tagline="Advanced dual-cycle absorption technology for maximum efficiency and superior energy savings"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Two-Stage Chiller" },
      ]}
      definitionTerm="Two-Stage Absorption Chiller"
      definitionText="A two-stage absorption chiller is an advanced cooling system that uses two sequential absorption-regeneration cycles to extract more energy from the driving heat source. This dual-cycle design achieves a higher Coefficient of Performance (COP) than single-stage models - typically 1.1–1.4 versus 0.7–0.8 - delivering more cooling per unit of input energy while using lithium bromide and water as natural, zero-GWP working fluids."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Two-Stage Absorption Chiller is an advanced, dual-cycle system designed for high efficiency, reliability, and superior energy savings in industrial and commercial HVAC applications. Using innovative lithium bromide-water absorption technology and a two-stage process, it achieves an outstanding Coefficient of Performance (COP) of 1.1–1.4 while maintaining precise temperature control and robust part-load operation.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">How the Two-Stage Process Works</h3>
          <p className="text-lg leading-relaxed mb-4">
            In a two-stage absorption chiller, the driving heat source (gas flame, steam, hot water, or exhaust gas) first enters a high-temperature generator, where it vaporises refrigerant (water) from the concentrated lithium bromide solution. The remaining heat from this first stage then passes to a second, lower-temperature generator, where it drives a second round of vaporisation. This cascading process extracts significantly more useful cooling from the same heat input compared to a single-stage machine.
          </p>
          <p className="text-lg leading-relaxed">
            For example, a facility with 10 MW of available waste heat at 180°C can produce approximately 12–14 MW of cooling with a two-stage chiller, versus only 7–8 MW with a single-stage unit - nearly doubling the cooling output without any additional fuel consumption. This makes two-stage technology the preferred choice for facilities prioritising energy efficiency and return on investment.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "30–3,300 TR" },
        { label: "Efficiency", value: "COP 1.1–1.4" },
        { label: "Hot water input", value: "138–180°C" },
        { label: "Energy source", value: "Gas / Steam / Exhaust" },
      ]}
      modelTable={[
        {
          modelNumber: "BZ Model (Gas Fired)",
          capacity: "30–3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Gas (0.16–0.51 kg/cm²)"
        },
        {
          modelNumber: "BS Model (Steam Driven)",
          capacity: "30–3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Steam (4.2–10.5 kg/cm²)"
        },
        {
          modelNumber: "BE Model (Exhaust Driven)",
          capacity: "40–3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Exhaust (280–532°C)"
        },
        {
          modelNumber: "BH Model (Hot Water Driven)",
          capacity: "30–3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Hot Water (138–180°C)"
        }
      ]}
      features={[
        { icon: <BarChart3 size={20} />, title: "Two-Stage Absorption Cycle", description: "Dual-cycle design delivers enhanced efficiency and consistent performance, especially under varying load conditions." },
        { icon: <Zap size={20} />, title: "Exceptional COP & Part-Load Efficiency", description: "Achieves COP of 1.1–1.4 - significantly more cooling per unit of input energy, maximising operational savings." },
        { icon: <Gauge size={20} />, title: "Wide Application Range", description: "Serves cooling, heating, and domestic hot water needs in large buildings, process industries, and district cooling systems." },
        { icon: <Shield size={20} />, title: "Crystallisation Resistance", description: "Advanced system design with anti-crystallisation controls reduces risk of lithium bromide crystallisation, improving uptime." },
        { icon: <Thermometer size={20} />, title: "Precise Temperature Control", description: "Low thermal input requirements and accurate temperature modulation for further energy optimisation." },
      ]}
      applications={[
        { icon: <Building2 size={20} />, title: "Large Commercial Buildings" },
        { icon: <Factory size={20} />, title: "Industrial Process Cooling" },
        { icon: <Landmark size={20} />, title: "District Energy Systems" },
        { icon: <Hospital size={20} />, title: "Hospitals & Campuses" },
        { icon: <Hotel size={20} />, title: "Hotels" },
        { icon: <Server size={20} />, title: "Continuous Cooling Facilities" },
      ]}
      benefits={[
        { icon: <Zap size={20} />, title: "Superior Efficiency", description: "Two-stage cycle reduces high-grade energy consumption compared to single-stage, delivering more cooling per rupee spent on fuel." },
        { icon: <Shield size={20} />, title: "Reliable Performance", description: "Engineered for demanding, energy-critical environments with 25+ year operational lifespans and minimal mechanical wear." },
        { icon: <Leaf size={20} />, title: "Environmental Compliance", description: "Enhanced contribution to sustainability goals - zero-ODP refrigerant, ultra-low NOx, and lower carbon intensity per TR of cooling." },
      ]}
      faqs={[
        {
          question: "What COP range does a BROAD two-stage absorption chiller achieve?",
          answer: "BROAD two-stage absorption chillers achieve a COP (Coefficient of Performance) in the range of 1.1 to 1.4, depending on the model and driving heat source. This is significantly higher than single-stage chillers, which typically achieve 0.7–0.8 COP. The two-stage design extracts more cooling from the same heat input by using a cascading dual-generator process.",
        },
        {
          question: "What is the difference between a two-stage and a single-stage absorption chiller?",
          answer: "The primary difference is efficiency. A two-stage chiller uses two sequential generators to extract heat in two stages, achieving roughly 40–70% higher COP than a single-stage unit. Single-stage chillers are simpler and suited to facilities with lower-grade heat sources (below 100°C), while two-stage chillers require higher-temperature inputs (steam at 4–10 kg/cm², hot water at 138–180°C, or direct gas firing) but deliver significantly more cooling per unit of fuel consumed.",
        },
        {
          question: "What heat sources can drive a BROAD two-stage chiller?",
          answer: "BROAD two-stage chillers are available in four drive configurations: the BZ model (direct gas/oil-fired, 0.16–0.51 kg/cm² gas pressure), the BS model (steam-driven, 4.2–10.5 kg/cm²), the BE model (exhaust-gas-driven, 280–532°C), and the BH model (hot-water-driven, 138–180°C). Multi-energy models can switch between sources for maximum operational flexibility.",
        },
      ]}
      downloads={[
        { title: "Two-Stage Chiller Brochure", size: "4.7 MB", type: "PDF" },
        { title: "Technical Integration Manual", size: "2.9 MB", type: "PDF" },
      ]}
    />
  );
}

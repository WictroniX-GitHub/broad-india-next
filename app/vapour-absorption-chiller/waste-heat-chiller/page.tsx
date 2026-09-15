"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Shield, Gauge,
  Hospital, Building2, Factory, Landmark,
  DollarSign, Settings, Droplets, Recycle,
} from "lucide-react";

export default function WasteHeatChiller() {
  return (
    <PDPTemplate
      heroImage="/images/wasteHeat.jpg"
      title="Waste-Heat-Driven Vapour Absorption Chiller"
      tagline="Convert surplus industrial heat into free cooling - zero additional fuel, maximum energy recovery"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Waste Heat Chiller" },
      ]}
      definitionTerm="Waste-Heat-Driven Absorption Chiller"
      definitionText="A waste-heat-driven absorption chiller captures low-grade thermal energy that would otherwise be exhausted into the atmosphere - such as exhaust gas, jacket water, or low-pressure steam from engines, turbines, or industrial processes - and converts it into chilled water for cooling. Because the driving energy is 'free' waste heat, these chillers deliver cooling at near-zero marginal fuel cost."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            BROAD India&apos;s Waste-Heat-Driven Vapour Absorption Chiller is an energy recovery solution that leverages low-grade thermal energy from industrial processes. By converting waste heat - exhaust gas from turbines, jacket water from engines, or low-pressure steam - into chilled water, this system delivers what is effectively &quot;free cooling&quot; and drastically reduces a facility&apos;s overall energy intensity.
          </p>
          <p className="text-lg leading-relaxed">
            India&apos;s industrial sector generates vast amounts of surplus heat from power generation, chemical processing, steel manufacturing, and refining. Rather than exhausting this energy into the atmosphere, BROAD&apos;s waste-heat chillers monetise it - turning a thermal liability into measurable operational savings and lower carbon emissions. This closed-loop approach is the cornerstone of a circular energy economy.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "100–3,300 TR" },
        { label: "Heat source range", value: "70–500°C+" },
        { label: "Marginal energy cost", value: "Zero Fuel Cost" },
        { label: "Heat source type", value: "Steam / Exhaust" },
      ]}
      modelTable={[
        {
          modelNumber: "Exhaust Driven",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Turbine Exhaust (280–532°C)"
        },
        {
          modelNumber: "Jacket Water Driven",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Engine Water (70–95°C)"
        }
      ]}
      features={[
        { icon: <Recycle size={20} />, title: "Full Waste Heat Recovery", description: "Captures exhaust gas (280–532°C), jacket water (70–95°C), and low-pressure steam to produce chilled water at no additional fuel cost." },
        { icon: <Shield size={20} />, title: "Robust Industrial Design", description: "Corrosion-resistant heat exchangers and anti-crystallisation controls engineered for 24/7 operation in harsh industrial environments." },
        { icon: <Settings size={20} />, title: "Automated Operation", description: "Intelligent load-following controls automatically modulate capacity based on available waste heat and cooling demand." },
        { icon: <Wrench size={20} />, title: "Low Maintenance", description: "Virtually no moving parts in the refrigeration cycle - minimal wear, minimal servicing, and operational lifespans exceeding 25 years." },
        { icon: <Zap size={20} />, title: "Near-Zero Electricity", description: "Only minimal electricity needed for control systems and pumps - the absorption cycle itself is entirely heat-driven." },
      ]}
      applications={[
        { icon: <Factory size={20} />, title: "Petrochemical & Chemical Plants" },
        { icon: <Factory size={20} />, title: "Steel & Metal Manufacturing" },
        { icon: <Landmark size={20} />, title: "Power Plants & Cogeneration" },
        { icon: <Factory size={20} />, title: "Oil Refineries" },
        { icon: <Building2 size={20} />, title: "Cement & Glass Plants" },
        { icon: <Hospital size={20} />, title: "Pharmaceutical Facilities" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Free Cooling", description: "Driving energy is waste heat - delivering cooling at near-zero marginal fuel cost with rapid ROI, often within 2–3 years." },
        { icon: <Leaf size={20} />, title: "Carbon Reduction", description: "Eliminates the need for electrically-driven compressor chillers, significantly reducing CO₂ emissions and supporting ESG targets." },
        { icon: <Zap size={20} />, title: "Grid Independence", description: "Reduces electrical peak demand by up to 90%, freeing up power infrastructure for core manufacturing processes." },
        { icon: <Shield size={20} />, title: "Operational Resilience", description: "Independent of grid stability - ideal for facilities in regions with unreliable power supply or high peak tariffs." },
      ]}
      faqs={[
        {
          question: "What types of waste heat can drive a BROAD absorption chiller?",
          answer: "BROAD waste-heat chillers can be driven by a wide range of heat sources: exhaust gas from gas turbines, diesel engines, or furnaces (280–532°C); jacket water from engines (70–95°C); low-pressure steam (0.3–2 kg/cm²); and hot water from industrial processes (70–180°C). The chiller model is selected based on the temperature, flow rate, and availability of your specific waste heat source.",
        },
        {
          question: "How much cooling can waste heat produce?",
          answer: "The cooling output depends on the quantity and temperature of the waste heat. As a general guideline, for every 1 MW of available waste heat at 300°C+, a BROAD exhaust-driven chiller can produce approximately 0.7–1.0 MW of cooling. For lower-temperature sources (hot water at 90°C), the ratio is approximately 0.5–0.7 MW of cooling per MW of heat input.",
        },
        {
          question: "What is the payback period for a waste-heat absorption chiller?",
          answer: "Because the driving energy is free waste heat, the payback period is typically 2–3 years for facilities with consistent waste heat availability. The ROI is calculated based on the electricity savings from displacing conventional electric chillers, plus any carbon credit or compliance benefits. Facilities running turbines, engines, or furnaces 24/7 see the fastest returns.",
        },
      ]}
      downloads={[
        { title: "Waste-Heat Recovery Brochure", size: "3.7 MB", type: "PDF" },
        { title: "Industrial Savings Whitepaper", size: "5.1 MB", type: "PDF" },
      ]}
    />
  );
}

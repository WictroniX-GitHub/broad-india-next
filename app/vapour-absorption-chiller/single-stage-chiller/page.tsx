"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Shield, Gauge,
  Hospital, Hotel, Building2, Factory, Landmark,
  DollarSign, Settings, Droplets, ArrowRightLeft,
} from "lucide-react";

export default function SingleStageChiller() {
  return (
    <PDPTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/03/single-stage-300x157-1-200x105.png"
      title="Single-Stage Absorption Chiller"
      tagline="Reliable, low-maintenance cooling driven by low-grade waste heat and hot water"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Single-Stage Chiller" },
      ]}
      definitionTerm="Single-Stage Absorption Chiller"
      definitionText="A single-stage absorption chiller is a thermal cooling system that uses a single generator to vaporise refrigerant (water) from the absorbent (lithium bromide). Because it only requires one stage of heat input, it can operate on low-grade thermal energy - such as hot water as low as 70°C or low-pressure steam (0.1–1.5 kg/cm²). While its COP (0.7–0.8) is lower than a two-stage machine, its ability to run on low-grade waste heat makes it an exceptionally cost-effective energy recovery solution."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Single-Stage Absorption Chiller is designed to monetise low-grade thermal energy that would otherwise be wasted. Ideal for industrial processes, cogeneration plants, and district energy systems, this chiller converts low-pressure steam or hot water into reliable, continuous chilled water for HVAC or process cooling.
          </p>
          <p className="text-lg leading-relaxed">
            While single-stage chillers have a lower Coefficient of Performance (COP) compared to two-stage models, their distinct advantage lies in their heat source requirements. They can effectively utilise waste heat as low as 70°C, making them the perfect solution for recovering heat from jacket water, low-pressure exhaust steam, or solar thermal collectors - turning previously unusable thermal energy into valuable cooling.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "100–3,300 TR" },
        { label: "Hot water input", value: "70–95°C" },
        { label: "Steam pressure", value: "0.1–1.5 kg/cm²" },
        { label: "Efficiency", value: "COP 0.7–0.8" },
      ]}
      modelTable={[
        {
          modelNumber: "Single-Stage Steam",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Low-Pressure Steam"
        },
        {
          modelNumber: "Single-Stage Hot Water",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Hot Water (70–95°C)"
        }
      ]}
      features={[
        { icon: <Thermometer size={20} />, title: "Low-Grade Heat Utilisation", description: "Operates efficiently on hot water (70–95°C) or low-pressure steam, capturing heat that two-stage chillers cannot use." },
        { icon: <Shield size={20} />, title: "Simplified Single-Generator Design", description: "Fewer components than two-stage chillers, resulting in lower capital cost, simpler operation, and exceptional reliability." },
        { icon: <Settings size={20} />, title: "Anti-Crystallisation Technology", description: "Advanced control logic prevents lithium bromide crystallisation even under fluctuating heat input conditions." },
        { icon: <Zap size={20} />, title: "Minimal Electric Load", description: "Consumes only 1–3% of the electricity required by a conventional mechanical chiller of equivalent capacity." },
        { icon: <Wrench size={20} />, title: "Low Maintenance", description: "Virtually no moving parts in the primary refrigeration cycle, ensuring a 25+ year lifespan with minimal servicing." },
      ]}
      applications={[
        { icon: <Factory size={20} />, title: "Industrial Process Cooling" },
        { icon: <Landmark size={20} />, title: "Cogeneration & Trigeneration" },
        { icon: <Building2 size={20} />, title: "District Cooling Systems" },
        { icon: <Hospital size={20} />, title: "Hospitals & Campuses" },
        { icon: <Hotel size={20} />, title: "Hotels & Commercial Buildings" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Monetise Low-Grade Heat", description: "Turn previously unusable low-temperature waste heat into valuable cooling, generating a rapid return on investment." },
        { icon: <Leaf size={20} />, title: "Zero ODP & Low GWP", description: "Uses water as a natural refrigerant and lithium bromide as the absorbent - environmentally benign and future-proof." },
        { icon: <Zap size={20} />, title: "Peak Demand Reduction", description: "Significantly reduces electrical peak demand, avoiding high demand charges and freeing up grid capacity." },
        { icon: <Shield size={20} />, title: "Quiet & Vibration-Free", description: "Absence of large mechanical compressors ensures whisper-quiet operation and zero structural vibration." },
      ]}
      faqs={[
        {
          question: "When should I choose a single-stage over a two-stage absorption chiller?",
          answer: "The choice depends on your heat source. Choose a single-stage chiller if you have low-grade waste heat available - specifically, hot water between 70°C and 95°C, or low-pressure steam (0.1–1.5 kg/cm²). A two-stage chiller cannot operate efficiently on these low temperatures. However, if you have high-pressure steam (4+ kg/cm²), direct gas/oil firing, or exhaust gas above 280°C, a two-stage chiller is the better choice because it will deliver 40–70% more cooling (higher COP) from the same heat input.",
        },
        {
          question: "What is the minimum hot water temperature required for a single-stage chiller?",
          answer: "BROAD single-stage absorption chillers can operate with hot water entering temperatures as low as 70°C, though nominal capacity is typically rated at 90°C to 95°C. At lower temperatures, the chiller will derate (produce less cooling capacity), which our engineers will account for during the design phase.",
        },
        {
          question: "Can a single-stage chiller be used with solar thermal collectors?",
          answer: "Yes, single-stage chillers are the standard choice for solar cooling applications. Solar thermal collectors typically produce hot water in the 70°C to 95°C range, which perfectly matches the drive requirements of a single-stage lithium bromide absorption chiller.",
        },
      ]}
      downloads={[
        { title: "Single-Stage Chiller Brochure", size: "3.1 MB", type: "PDF" },
        { title: "Waste Heat Recovery Guidelines", size: "1.9 MB", type: "PDF" },
      ]}
    />
  );
}

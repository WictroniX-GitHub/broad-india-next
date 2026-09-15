"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Thermometer, Shield, Gauge, Sun,
  Hospital, Hotel, Building2, Factory, Landmark,
  DollarSign, Droplets, ArrowRightLeft, School,
} from "lucide-react";

export default function SolarDrivenChiller() {
  return (
    <PDPTemplate
      heroImage="/images/product-vac-solar-driven.png"
      title="Solar-Driven Vapour Absorption Chiller"
      tagline="Harness the power of the sun for 100% renewable, zero-emission air conditioning"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Solar Driven" },
      ]}
      definitionTerm="Solar-Driven Absorption Chiller"
      definitionText="A solar-driven absorption chiller uses solar thermal collectors (such as parabolic troughs or evacuated tubes) to heat water to 70–95°C. This solar-heated water is then fed directly into a single-stage lithium bromide absorption chiller to drive the cooling cycle. It is a highly synergistic technology: maximum cooling demand typically occurs during peak solar irradiance, meaning the sun provides the exact energy needed, precisely when it's needed most."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Solar-Driven Vapour Absorption Chiller represents the pinnacle of sustainable HVAC technology. By pairing our highly efficient single-stage absorption chillers with advanced solar thermal collectors, facilities can achieve what was previously thought impossible: large-scale, commercial air conditioning powered entirely by renewable solar energy, with virtually zero electricity consumption.
          </p>
          <p className="text-lg leading-relaxed">
            Unlike solar PV (photovoltaic) systems that convert sunlight to electricity (with significant energy losses) to run conventional compressors, a solar thermal cooling system uses the sun&apos;s heat directly. This direct thermal-to-thermal conversion is significantly more efficient and requires far less physical space for the collector array. When paired with a thermal storage tank, the system can even provide continuous cooling through the night or during cloudy periods.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "100–3,300 TR" },
        { label: "Energy source", value: "Solar Thermal" },
        { label: "Hot water input", value: "70–95°C" },
        { label: "Carbon emissions", value: "Zero" },
      ]}
      modelTable={[
        {
          modelNumber: "Solar Single-Stage",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by capacity",
          energyInput: "Solar Thermal (70–95°C)"
        }
      ]}
      features={[
        { icon: <Sun size={20} />, title: "Direct Thermal Utilization", description: "Uses solar heat directly to drive the cooling cycle, avoiding the efficiency losses associated with PV-to-electric-to-mechanical conversion." },
        { icon: <ArrowRightLeft size={20} />, title: "Hybrid Capability", description: "Can be configured as a multi-energy system to automatically switch to natural gas or grid-steam backup during extended periods of low sunlight." },
        { icon: <Shield size={20} />, title: "Thermal Storage Integration", description: "Seamlessly integrates with insulated hot water or chilled water storage tanks to bridge the gap between solar availability and cooling demand." },
        { icon: <Zap size={20} />, title: "Ultra-Low Power Consumption", description: "The chiller requires less than 2 kW of electricity for internal pumps and controls - easily covered by a tiny off-grid PV panel if desired." },
        { icon: <Leaf size={20} />, title: "Zero Global Warming Potential", description: "Uses water as the refrigerant and lithium bromide as the absorbent - 100% natural, zero ODP, and zero GWP." },
      ]}
      applications={[
        { icon: <Building2 size={20} />, title: "Green Commercial Buildings" },
        { icon: <School size={20} />, title: "University Campuses" },
        { icon: <Hotel size={20} />, title: "Eco-Resorts & Hotels" },
        { icon: <Hospital size={20} />, title: "Healthcare Facilities" },
        { icon: <Landmark size={20} />, title: "Government & Public Buildings" },
        { icon: <Factory size={20} />, title: "Sustainable Manufacturing" },
      ]}
      benefits={[
        { icon: <Leaf size={20} />, title: "Ultimate Sustainability", description: "Achieve net-zero cooling, drastically reduce scope 2 emissions, and secure highest-tier LEED or IGBC green building certifications." },
        { icon: <DollarSign size={20} />, title: "Immune to Tariff Hikes", description: "Lock in your cooling energy costs for the next 25 years. You own the energy source, completely shielding your facility from grid electricity price volatility." },
        { icon: <Sun size={20} />, title: "Perfect Load Matching", description: "Cooling demand naturally peaks when solar radiation is strongest, resulting in highly efficient, self-balancing system operation." },
        { icon: <Shield size={20} />, title: "Long-Term Reliability", description: "With no large mechanical compressors to wear out, the chiller is designed for a 25+ year lifespan with minimal maintenance." },
      ]}
      faqs={[
        {
          question: "How does solar thermal cooling differ from using solar panels (PV) with an electric chiller?",
          answer: "Solar PV converts sunlight into electricity (typically at 15-20% efficiency) which is then used to power a mechanical compressor. Solar thermal cooling uses collectors to capture the sun's heat directly (often at 60-70% efficiency) to drive a thermal absorption chiller. Direct thermal utilization is significantly more space-efficient, requiring fewer square meters of collectors per ton of cooling compared to a PV array.",
        },
        {
          question: "What happens on cloudy days or at night?",
          answer: "Solar cooling systems are typically designed with insulated hot water storage tanks (thermal batteries). Excess solar heat collected during the day is stored in the tank and used to drive the chiller at night or during cloudy periods. Additionally, BROAD chillers can be configured as hybrid (multi-energy) units that automatically switch to a backup fuel source, such as natural gas, if the solar thermal storage is depleted.",
        },
        {
          question: "What temperature does the solar hot water need to be?",
          answer: "BROAD single-stage absorption chillers require hot water in the range of 70°C to 95°C to operate efficiently. This temperature is easily achievable using standard commercial solar thermal collectors, such as evacuated tube collectors or flat-plate collectors, even in moderate climates.",
        },
      ]}
      downloads={[
        { title: "Solar-Driven Cooling Brochure", size: "3.4 MB", type: "PDF" },
        { title: "Net-Zero Architecture Guide", size: "4.8 MB", type: "PDF" },
      ]}
    />
  );
}

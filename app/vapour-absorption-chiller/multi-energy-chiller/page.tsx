"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Shield, Gauge, Flame,
  Hospital, Hotel, Building2, Factory, Landmark,
  DollarSign, Settings, Droplets, RefreshCw, Power, Server
} from "lucide-react";

export default function MultiEnergyChiller() {
  return (
    <PDPTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg"
      title="Multi-Energy Absorption Chiller"
      tagline="Maximum operational flexibility - seamlessly switch between multiple heat sources and fuels"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Multi-Energy Chiller" },
      ]}
      definitionTerm="Multi-Energy Absorption Chiller"
      definitionText="A multi-energy absorption chiller is a hybrid thermal cooling system designed to operate on two or more distinct heat sources - either simultaneously or alternately. For example, it can run on exhaust gas from a turbine during peak hours, and seamlessly switch to direct-fired natural gas when the turbine is offline. This provides ultimate energy security and ensures uninterrupted cooling regardless of upstream process fluctuations."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Multi-Energy Vapour Absorption Chiller is the ultimate solution for facilities that require mission-critical cooling but face variable heat source availability. By integrating multiple generators into a single unit, this chiller can harness exhaust gas, steam, hot water, and direct-fired natural gas/oil - adapting dynamically to whatever energy source is most abundant or cost-effective at any given moment.
          </p>
          <p className="text-lg leading-relaxed">
            This technology is particularly valuable in Combined Cooling, Heating, and Power (CCHP) and trigeneration plants, where the primary heat source (e.g., turbine exhaust) may fluctuate based on electrical demand. When the primary waste heat drops, the chiller&apos;s intelligent control system automatically modulates a supplementary heat source (like a direct-fired burner or auxiliary steam) to make up the difference, ensuring consistent chilled water output without operator intervention.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "100–3,300 TR" },
        { label: "Energy switching", value: "Seamless" },
        { label: "Supplementary fuel", value: "Gas / Oil / Steam" },
        { label: "Primary waste heat", value: "Exhaust / Hot Water" },
      ]}
      modelTable={[
        {
          modelNumber: "Hybrid Multi-Energy Series",
          capacity: "100 - 3,300 TR",
          dimensions: "Varies by configuration",
          energyInput: "Multi-Source (Exhaust, Steam, Gas, Oil)"
        }
      ]}
      features={[
        { icon: <RefreshCw size={20} />, title: "Seamless Fuel Switching", description: "Automatically transitions between waste heat and supplementary fuel without interrupting chilled water production." },
        { icon: <Power size={20} />, title: "Simultaneous Operation", description: "Can operate on both waste heat and direct-fired fuel simultaneously to meet peak cooling loads when waste heat alone is insufficient." },
        { icon: <Settings size={20} />, title: "Intelligent Load Management", description: "Advanced PLC controls monitor heat source availability and automatically modulate the burner or steam valve to maintain setpoints." },
        { icon: <Zap size={20} />, title: "Optimised Efficiency", description: "Prioritises free waste heat first, only engaging paid supplementary fuel when absolutely necessary to minimise operational costs." },
        { icon: <Shield size={20} />, title: "Uninterrupted Cooling", description: "Provides N+1 redundancy in energy sources, ensuring critical processes or comfort cooling are never compromised by upstream outages." },
      ]}
      applications={[
        { icon: <Landmark size={20} />, title: "Trigeneration & CCHP Plants" },
        { icon: <Factory size={20} />, title: "Process Industries with Variable Heat" },
        { icon: <Hospital size={20} />, title: "Mission-Critical Hospitals" },
        { icon: <Server size={20} />, title: "Data Centres" },
        { icon: <Building2 size={20} />, title: "District Energy Systems" },
      ]}
      benefits={[
        { icon: <Shield size={20} />, title: "Energy Security", description: "Never rely on a single energy source again. Protect your facility against natural gas shortages, grid outages, or process shutdowns." },
        { icon: <DollarSign size={20} />, title: "Cost Optimisation", description: "Automatically utilise the cheapest available energy source hour-by-hour, maximising ROI and operational savings." },
        { icon: <Leaf size={20} />, title: "Sustainable Resilience", description: "Maximise the use of carbon-free waste heat while maintaining the reliability of a conventional fossil-fuel backup." },
        { icon: <Wrench size={20} />, title: "Space Savings", description: "Eliminates the need to install separate waste-heat chillers and backup direct-fired chillers - combining both into a single footprint." },
      ]}
      faqs={[
        {
          question: "Can a multi-energy chiller run on exhaust gas and natural gas at the same time?",
          answer: "Yes. This is one of the primary benefits of a multi-energy (hybrid) chiller. If the available exhaust gas from your turbine or engine can only provide 60% of your required cooling load, the chiller's integrated direct-fired burner will automatically ignite to provide the remaining 40% using natural gas, ensuring your cooling demand is met exactly.",
        },
        {
          question: "What combinations of energy sources are possible?",
          answer: "Common combinations include Exhaust Gas + Direct-Fired (Gas/Oil), Exhaust Gas + Steam, Hot Water + Direct-Fired, and Steam + Direct-Fired. The specific combination is custom-engineered based on the heat sources available at your facility.",
        },
        {
          question: "How does the chiller decide which energy source to use?",
          answer: "The chiller's advanced PLC control system is programmed to prioritize 'free' waste heat (like exhaust or hot water). It constantly monitors the chilled water outlet temperature and the waste heat input. If the waste heat drops and the chilled water temperature begins to rise above the setpoint, the control system automatically modulates the supplementary heat source (burner or steam valve) to make up the deficit.",
        },
      ]}
      downloads={[
        { title: "Multi-Energy Chiller Brochure", size: "3.8 MB", type: "PDF" },
        { title: "Hybrid Energy Systems Guide", size: "2.5 MB", type: "PDF" },
      ]}
    />
  );
}

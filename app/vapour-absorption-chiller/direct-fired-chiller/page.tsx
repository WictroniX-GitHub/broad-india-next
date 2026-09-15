"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Flame, Shield, Gauge,
  Hospital, Hotel, Building2, Server, Factory, Landmark, Warehouse,
  DollarSign, Settings, Droplets,
} from "lucide-react";

export default function DirectFiredChiller() {
  return (
    <PDPTemplate
      heroImage="/images/nonElec.jpg"
      title="Direct-Fired Vapour Absorption Chiller"
      tagline="Non-electric cooling and heating powered by natural gas or diesel - ultra-low NOx, high-capacity performance"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Direct-Fired Chiller" },
      ]}
      definitionTerm="Direct-Fired Absorption Chiller"
      definitionText="A direct-fired absorption chiller is a thermal cooling system that burns natural gas or light fuel oil in an integrated burner to drive the lithium bromide-water absorption cycle. Unlike waste-heat or steam-driven models, it operates independently of any external heat source - making it ideal for facilities without boilers or excess process heat, while still eliminating the need for electricity-hungry mechanical compressors."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Direct-Fired Vapour Absorption Chiller is a premium, thermally-driven HVAC solution engineered for industrial and commercial environments seeking reliable, energy-efficient, and non-electric cooling and heating. This advanced system leverages natural gas or light fuel oil to deliver high-capacity cooling and hot water with minimal electricity demand and ultra-low emissions - making it ideal for large facilities, data centres, manufacturing plants, hospitals, and sites with unstable power supply.
          </p>
          <p className="text-lg leading-relaxed">
            With a cooling capacity range of 233 kW to 11,630 kW (66–3,300 RT) and hot water output up to 65°C, the direct-fired chiller utilises state-of-the-art lithium bromide-water absorption technology. Its dual-fuel burner achieves NOx emissions below 10 ppm - among the lowest in the industry - ensuring compliance with India&apos;s strictest environmental regulations while delivering substantial electricity savings.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "66–3,300 TR" },
        { label: "Hot water output", value: "Up to 65°C" },
        { label: "Fuel type", value: "Natural Gas / Light Oil" },
        { label: "Emissions", value: "< 10 ppm NOx" },
      ]}
      modelTable={[
        {
          modelNumber: "Direct-Fired Series",
          capacity: "66 - 3,300 TR",
          dimensions: "Varies by Capacity",
          energyInput: "Natural Gas / Light Oil"
        }
      ]}
      catalogueUrl="/files/nonElec.pdf"
      features={[
        { icon: <Flame size={20} />, title: "Dual-Fuel Burner", description: "Operates on natural gas or light fuel oil with seamless switching - ultra-low NOx emissions below 10 ppm." },
        { icon: <Shield size={20} />, title: "Corrosion-Resistant Heat Exchangers", description: "Built for decades of reliable operation with advanced materials that resist the corrosive effects of lithium bromide." },
        { icon: <Settings size={20} />, title: "Automated Vacuum Purging", description: "Automatic non-condensable gas purging and vacuum maintenance for stable, long-term performance without manual intervention." },
        { icon: <Zap size={20} />, title: "Intelligent Control Logic", description: "Automated capacity modulation and crystallisation prevention ensure optimal efficiency across fluctuating load profiles." },
        { icon: <Wrench size={20} />, title: "Modular Multi-Function Design", description: "Adaptable for space cooling, process cooling, hot water supply, and supplementary heating from a single unit." },
      ]}
      applications={[
        { icon: <Hospital size={20} />, title: "Hospitals" },
        { icon: <Hotel size={20} />, title: "Hotels" },
        { icon: <Building2 size={20} />, title: "Shopping Malls" },
        { icon: <Server size={20} />, title: "Data Centres" },
        { icon: <Factory size={20} />, title: "Manufacturing Plants" },
        { icon: <Landmark size={20} />, title: "District Energy Systems" },
        { icon: <Warehouse size={20} />, title: "Large Industrial Plants" },
      ]}
      benefits={[
        { icon: <Zap size={20} />, title: "Energy Efficient", description: "Operates at optimal efficiency even under partial loads, saving costs and power versus electric compressor-based chillers." },
        { icon: <Leaf size={20} />, title: "Low Carbon Footprint", description: "Ultra-low NOx emissions and zero-ODP refrigerant support sustainability targets and environmental compliance." },
        { icon: <Shield size={20} />, title: "Reliable Performance", description: "Proven deployments across Asia, Europe, and India with 25+ year operational lifespans and minimal mechanical wear." },
        { icon: <DollarSign size={20} />, title: "Reduced Operational Costs", description: "Flexible fuel choices, low energy demand, and advanced capacity modulation deliver rapid return on investment." },
      ]}
      faqs={[
        {
          question: "What fuel types can a BROAD direct-fired absorption chiller use?",
          answer: "The BROAD direct-fired chiller features a dual-fuel burner that can operate on natural gas or light fuel oil (diesel). The burner achieves ultra-low NOx emissions below 10 ppm on both fuel types. Facilities can switch between fuels based on availability and cost, providing operational flexibility and fuel security.",
        },
        {
          question: "What cooling capacity range is available?",
          answer: "BROAD direct-fired absorption chillers are available in capacities from 233 kW to 11,630 kW (66 to 3,300 TR). This range covers everything from mid-sized commercial buildings and hospitals to large industrial facilities and district cooling systems.",
        },
        {
          question: "Can a direct-fired chiller provide both cooling and heating?",
          answer: "Yes. The BROAD direct-fired absorption chiller can simultaneously or independently provide chilled water for cooling, hot water up to 65°C for domestic hot water or process heating, and supplementary space heating - all from a single unit and a single fuel source, making it a true multi-function HVAC solution.",
        },
      ]}
      downloads={[
        { title: "Direct-Fired Chiller Brochure", size: "4.1 MB", type: "PDF" },
        { title: "Installation Guidelines", size: "2.3 MB", type: "PDF" },
      ]}
    />
  );
}

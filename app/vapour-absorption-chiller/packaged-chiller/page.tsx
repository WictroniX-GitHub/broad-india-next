"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Flame, Shield,
  Hospital, Hotel, Building2, Server, Factory, Landmark, Warehouse,
  DollarSign, Settings, Gauge,
} from "lucide-react";

export default function PackagedChiller() {
  return (
    <PDPTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg"
      title="Packaged Absorption Chiller"
      tagline="Complete, factory-assembled absorption chiller solutions - ready to install, ready to cool"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Packaged Chiller" },
      ]}
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-4">
            BROAD India&apos;s Packaged Absorption Chiller offers a complete, factory-assembled solution designed for easy installation, reliable performance, and versatility across industrial and commercial cooling and heating needs. Every unit is factory-tested and optimised before shipment, ensuring consistent quality and dramatically simplified on-site commissioning.
          </p>
          <p className="text-lg leading-relaxed">
            With a capacity range of 40–2,200 TR and multi-fuel flexibility, the packaged chiller is ideal for facilities that need rapid deployment of non-electric cooling without dedicating engineering resources to complex field assembly. The integrated enclosure protects the equipment in outdoor installations, while the included pump system and cooling tower eliminate the need for separate procurement.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "40–2,200 TR" },
        { label: "Energy source", value: "Gas/Oil/Steam" },
        { label: "Gas pressure", value: "0.16–0.51 kg/cm²" },
        { label: "NOx emissions", value: "< 10 ppm" },
      ]}
      modelTable={[
        {
          modelNumber: "BPE-40 to BPE-2200",
          capacity: "40 TR - 2,200 TR",
          dimensions: "Varies by capacity (Compact Package)",
          energyInput: "Direct Fire / Hot water / Steam / Exhaust"
        }
      ]}
      features={[
        { icon: <Settings size={20} />, title: "Factory Tested & Optimised", description: "Every unit is fully tested at the factory for consistent quality and simplified commissioning on site." },
        { icon: <Wrench size={20} />, title: "Compact Self-Contained Unit", description: "Reduces on-site installation time and complexity - enclosure, pumps, and cooling tower all included." },
        { icon: <Zap size={20} />, title: "Multi-Source Operation", description: "Capable of generating cooling, heating, and domestic hot water from natural gas, steam, hot water, or exhaust." },
        { icon: <Gauge size={20} />, title: "Magnetic Bearing Available", description: "Oil-free, magnetic-bearing technology option for high-performance applications demanding zero oil contamination." },
        { icon: <Leaf size={20} />, title: "Reduced Electricity & Emissions", description: "Designed to significantly cut electricity consumption and carbon emissions versus conventional electric chillers." },
      ]}
      applications={[
        { icon: <Building2 size={20} />, title: "Large Commercial Buildings" },
        { icon: <Factory size={20} />, title: "Industrial Process Cooling" },
        { icon: <Landmark size={20} />, title: "District Cooling / CCHP" },
        { icon: <Hospital size={20} />, title: "Hospitals" },
        { icon: <Hotel size={20} />, title: "Hotels & Campuses" },
        { icon: <Warehouse size={20} />, title: "Outdoor Installations" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Lower Installation Costs", description: "Factory-assembled units reduce on-site construction, procurement, and commissioning costs significantly." },
        { icon: <Flame size={20} />, title: "Flexible Fuel Options", description: "Multi-fuel capability (gas, oil, steam, exhaust) and multi-function HVAC in a single compact package." },
        { icon: <Leaf size={20} />, title: "Sustainability Goals", description: "Leverage waste heat, steam, and renewable energy sources to meet corporate ESG and net-zero targets." },
        { icon: <Shield size={20} />, title: "Proven Reliability", description: "Over two decades of deployments in critical industries and large-scale facilities worldwide." },
      ]}
      faqs={[
        {
          question: "What is included in a BROAD Packaged Absorption Chiller?",
          answer: "A BROAD Packaged Chiller is a complete, factory-assembled unit that includes the absorption chiller itself, a weather-proof enclosure, the chilled water and cooling water pump systems, and the cooling tower - all pre-integrated and factory-tested. This eliminates the need for separate procurement and on-site assembly of each component.",
        },
        {
          question: "What capacity range is available for the Packaged Chiller?",
          answer: "The Packaged Absorption Chiller is available in capacities ranging from 40 TR to 2,200 TR (approximately 140 kW to 7,740 kW). This range covers requirements from mid-sized commercial buildings to large industrial process cooling installations.",
        },
        {
          question: "What fuel types can the Packaged Chiller use?",
          answer: "The Packaged Chiller features a dual-fuel burner that can run on natural gas or light fuel oil. It can also be configured for steam-driven, hot-water-driven, or exhaust-gas-driven operation, making it extremely versatile for facilities with varying heat source availability.",
        },
      ]}
      downloads={[
        { title: "Packaged Chiller Product Brochure", size: "2.4 MB", type: "PDF" },
        { title: "Technical Specifications Sheet", size: "1.1 MB", type: "PDF" },
        { title: "Installation & Operation Manual", size: "5.6 MB", type: "PDF" },
        { title: "CAD Drawings (Standard Dimensions)", size: "8.2 MB", type: "DWG" },
      ]}
    />
  );
}

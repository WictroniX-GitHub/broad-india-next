"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Shield, Settings, 
  Building2, Factory, Landmark, Hospital, Server, Hotel,
  DollarSign, Wrench, Droplets, Activity,
} from "lucide-react";

export default function Pumpsets() {
  return (
    <PDPTemplate
      heroImage="/images/broadPump.webp"
      title="Factory-Assembled Pumpsets"
      tagline="Pre-engineered, skid-mounted pumping solutions for seamless HVAC integration"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pumpsets" },
      ]}
      definitionTerm="Factory-Assembled Pumpset"
      definitionText="A factory-assembled pumpset is a pre-engineered, skid-mounted fluid circulation system. Instead of procuring pumps, variable frequency drives (VFDs), valves, sensors, and piping separately and assembling them on-site, a factory-assembled pumpset integrates all these components onto a single steel base at the manufacturing facility. It is fully wired, piped, and hydro-tested before shipping, requiring only power and fluid connections upon arrival."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            BROAD India&apos;s Factory-Assembled Pumpsets are designed to eliminate the complexities, delays, and quality control issues associated with traditional on-site pump room construction. Engineered specifically to complement our vapour absorption and power-efficient chillers, these skids provide reliable chilled water, cooling water, and hot water circulation for demanding industrial and commercial applications.
          </p>
          <p className="text-lg leading-relaxed">
            By shifting the construction from a chaotic job site to a controlled manufacturing environment, we guarantee precision engineering. Every pumpset features perfectly aligned shafts, fully integrated VFD controls for optimal energy efficiency, and rigorous hydro-testing to ensure zero leaks. The result is a plug-and-play solution that slashes installation time from weeks to mere hours.
          </p>
        </>
      }
      specs={[
        { label: "Flow capacity", value: "Custom" },
        { label: "Control system", value: "Integrated VFD" },
        { label: "Quality assurance", value: "Hydro-Tested" },
        { label: "Configuration", value: "Skid-Mounted" },
      ]}
      modelTable={[
        {
          modelNumber: "Custom Skid-Mounted Pumpset",
          capacity: "Custom Flow & Head",
          dimensions: "Varies by Configuration",
          energyInput: "Electric (Integrated VFD)"
        }
      ]}
      features={[
        { icon: <Settings size={20} />, title: "Plug-and-Play Design", description: "Arrives fully assembled on a rigid steel skid. Simply connect the inlet/outlet piping and power supply to begin operation." },
        { icon: <Zap size={20} />, title: "VFD Integration", description: "Factory-wired Variable Frequency Drives dynamically adjust pump speed to match HVAC load, maximizing energy savings." },
        { icon: <Shield size={20} />, title: "Precision Alignment", description: "Laser-aligned pump and motor shafts minimize vibration, reducing mechanical wear and extending bearing life." },
        { icon: <Droplets size={20} />, title: "Corrosion Resistance", description: "Constructed with HVAC-grade materials and premium coatings designed to withstand industrial cooling water and thermal fluids." },
        { icon: <Wrench size={20} />, title: "Single Source Responsibility", description: "One warranty and one point of contact for the entire pumping system, eliminating finger-pointing between multiple vendors." },
      ]}
      applications={[
        { icon: <Factory size={20} />, title: "Industrial Process Cooling" },
        { icon: <Building2 size={20} />, title: "Commercial HVAC Systems" },
        { icon: <Landmark size={20} />, title: "District Cooling Plants" },
        { icon: <Server size={20} />, title: "Data Centre Chilled Water" },
        { icon: <Hospital size={20} />, title: "Hospital Utility Rooms" },
        { icon: <Hotel size={20} />, title: "Hospitality Complexes" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Reduced Installation Cost", description: "Drastically cuts on-site labor costs, welding, electrical work, and commissioning time." },
        { icon: <Shield size={20} />, title: "Guaranteed Reliability", description: "Factory hydro-testing and quality control ensure the system operates flawlessly from day one, with no field-assembly defects." },
        { icon: <Zap size={20} />, title: "Optimised Efficiency", description: "Components are thermodynamically matched to the chiller system, ensuring the hydraulic profile operates at peak efficiency." },
      ]}
      faqs={[
        {
          question: "What components are included in a factory-assembled pumpset?",
          answer: "A standard BROAD pumpset includes the centrifugal pumps and motors, suction guides, triple-duty valves, Variable Frequency Drives (VFDs), pressure and temperature sensors, control panels, and all interconnecting piping, fully assembled and wired on a rigid structural steel base.",
        },
        {
          question: "Why is factory assembly better than on-site construction?",
          answer: "Factory assembly happens in a controlled environment, ensuring perfect pipe welding, precise laser alignment of pump shafts, and comprehensive electrical testing. On-site construction is subject to weather delays, spatial constraints, variable labor quality, and higher risks of leaks or misalignment. Factory skids turn a complex construction project into a simple equipment drop-in.",
        },
        {
          question: "Can the pumpsets integrate with the building's BMS?",
          answer: "Yes. The integrated control panels on our pumpsets feature standard communication protocols (like Modbus or BACnet) allowing seamless integration with your Building Management System (BMS) and the chiller's master control panel for synchronized, energy-efficient operation.",
        },
      ]}
      downloads={[
        { title: "Factory Assembled Pumpsets Brochure", size: "2.8 MB", type: "PDF" },
        { title: "Technical Integration Guide", size: "1.5 MB", type: "PDF" },
      ]}
    />
  );
}

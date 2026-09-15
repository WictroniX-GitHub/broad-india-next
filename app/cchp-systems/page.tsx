"use client";

import CategoryTemplate from "@/components/CategoryTemplate";
import {
  Zap, Leaf, Shield, Flame,
  Hospital, Hotel, Building2, Landmark, Server,
  Battery, Factory as FactoryIcon
} from "lucide-react";

export default function CCHPSystems() {
  return (
    <CategoryTemplate
      heroImage="/images/CCHP_1.jpg"
      title="CCHP (Combined Cooling, Heating & Power)"
      tagline="Trigeneration systems delivering up to 90% total energy utilisation"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "CCHP Systems" },
      ]}
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            BROAD India is a pioneer in CCHP and trigeneration solutions, offering comprehensive systems that fundamentally transform how large facilities consume energy. By integrating gas turbines or reciprocating engines with our world-class vapour absorption chillers, we enable industrial complexes, data centres, and commercial hubs to generate their own power while simultaneously fulfilling their massive HVAC demands - all from a single fuel source.
          </p>
          <p className="text-lg leading-relaxed">
            The efficiency gains are staggering. A conventional grid-power + electric-chiller setup typically achieves a total energy utilisation of just 40–45%. A BROAD CCHP system captures the waste heat from the generator&apos;s exhaust and jacket water, converting it into free cooling and heating. This pushes total system efficiency to 80–90%, delivering massive reductions in both operational expenditure and carbon emissions.
          </p>
        </>
      }
      stats={[
        { value: "80-90%", label: "Total Energy Efficiency" },
        { value: "3-5", label: "Years Typical ROI" },
        { value: "100%", label: "Grid Independence" },
      ]}
      products={[
        {
          title: "BROAD Tri-Generational Solutions",
          description: "Integrated turnkey trigeneration plants for industrial and district energy. We act as the central system integrator for power and thermal cooling.",
          image: "/images/CCHP_1.jpg",
          link: "/cchp-systems/broad-tri-generational-solutions"
        }
      ]}
      features={[
        { icon: <Battery size={28} />, title: "Maximum Energy Utilisation", description: "Achieves up to 90% total energy efficiency by capturing both electrical and thermal output from a single fuel source." },
        { icon: <Zap size={28} />, title: "Dynamic Load Balancing", description: "Advanced controls allow the system to intelligently balance electrical and thermal outputs based on real-time facility demand." },
        { icon: <Shield size={28} />, title: "Seamless Integration", description: "BROAD absorption chillers are engineered to perfectly match the exhaust profiles of all major gas turbine and reciprocating engine manufacturers." },
        { icon: <Flame size={28} />, title: "Fuel Flexibility", description: "Can operate on natural gas, biogas, or landfill gas, providing a pathway to renewable, carbon-neutral trigeneration." },
      ]}
      industries={[
        { icon: <Server size={24} />, title: "Data Centres", description: "Ensure 100% uptime with independent power and simultaneous cooling from turbine exhaust." },
        { icon: <Hospital size={24} />, title: "Hospitals & Medical Hubs", description: "Critical power generation paired with massive cooling and heating loads for sterilization and HVAC." },
        { icon: <Landmark size={24} />, title: "Airports & Transport Hubs", description: "Power vast terminals while converting waste heat into air conditioning for passenger comfort." },
        { icon: <FactoryIcon size={24} />, title: "Industrial Manufacturing", description: "Continuous process plants leverage CCHP to slash energy costs and secure power reliability." },
        { icon: <Hotel size={24} />, title: "Large Hotel & Resort Complexes", description: "Generate electricity while supplying chilled water for AC and hot water for hospitality needs." },
        { icon: <Building2 size={24} />, title: "District Energy Systems", description: "Centralized power and thermal energy distribution for smart cities and massive campuses." },
      ]}
      faqs={[
        {
          question: "What is the difference between Cogeneration (CHP) and Trigeneration (CCHP)?",
          answer: "Cogeneration (Combined Heat and Power - CHP) produces two forms of energy: electricity and heat. Trigeneration (Combined Cooling, Heating, and Power - CCHP) adds an absorption chiller to the system, allowing the waste heat to be converted into chilled water for air conditioning or process cooling, resulting in three forms of useful energy from one fuel source.",
        },
        {
          question: "What types of generators work with BROAD CCHP chillers?",
          answer: "BROAD absorption chillers can recover heat from virtually any prime mover, including gas turbines, microturbines, and reciprocating internal combustion engines. We customize the chiller's generators to match the specific exhaust temperature (typically 300°C to 600°C) and jacket water profiles of your chosen power generation equipment.",
        },
        {
          question: "Is CCHP economically viable in India?",
          answer: "Yes, highly viable. With industrial grid electricity tariffs remaining high and the increasing push for carbon reduction, facilities with simultaneous demands for power and cooling (like data centers, hospitals, and continuous process industries) can achieve a Return on Investment (ROI) in as little as 3 to 5 years by implementing a gas-fired CCHP system.",
        },
      ]}
      customSections={
        <div className="space-y-16">
          <div className="prose max-w-none text-gray-700 leading-relaxed text-justify">
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Driving Corporate Sustainability and Net-Zero Targets</h3>
            <p>As organizations across India face increasing pressure to decarbonize, BROAD CCHP solutions offer a tangible, high-impact pathway. By maximizing the thermal efficiency of primary fuels and virtually eliminating the need for grid-purchased electricity for cooling and heating, these systems drastically reduce a facility&apos;s carbon footprint.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">Tri-Generation Process Flow</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <span className="text-red-600 text-3xl">🔥</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">1. Fuel Input</h4>
                <p className="text-gray-600 text-sm">Natural gas or alternative fuels power the prime mover</p>
              </div>
              <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <span className="text-blue-600 text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2. Electricity Generation</h4>
                <p className="text-gray-600 text-sm">Gas turbines or generators produce electrical power</p>
              </div>
              <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <span className="text-green-600 text-3xl">♻️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">3. Heat Recovery</h4>
                <p className="text-gray-600 text-sm">Exhaust heat captured for thermal applications</p>
              </div>
              <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <span className="text-orange-600 text-3xl">🏠</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">4. Cooling & Heating</h4>
                <p className="text-gray-600 text-sm">Absorption systems provide chilled and hot water</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

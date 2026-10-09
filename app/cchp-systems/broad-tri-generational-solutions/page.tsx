"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Shield, Gauge, Flame,
  Hospital, Hotel, Building2, Factory, Landmark, Server,
  DollarSign, Activity, Factory as FactoryIcon, Battery, Wrench,
} from "lucide-react";

export default function TriGenerationalSolutions() {
  return (
    <PDPTemplate
      heroImage="/images/CCHP_1.jpg"
      title="BROAD Tri-Generational Solutions"
      tagline="Integrated turnkey trigeneration plants for industrial and district energy"
      catalogueUrl="/files/CCHP.pdf"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "CCHP Systems", href: "/cchp-systems" },
        { label: "Tri-Generational Solutions" },
      ]}
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            Beyond supplying world-class absorption chillers, BROAD India offers comprehensive, turnkey Tri-Generational (CCHP) solutions. We act as the central system integrator, taking full responsibility for the thermal and mechanical engineering of your entire trigeneration plant - from initial feasibility and thermodynamic modeling to final commissioning and lifecycle maintenance.
          </p>
          <p className="text-lg leading-relaxed">
            Designing a CCHP plant requires precise matching of electrical load profiles with cooling demand, and ensuring that the absorption chiller is perfectly tuned to the exhaust characteristics of the chosen prime mover. By choosing BROAD&apos;s integrated solutions, you eliminate the friction between multiple vendors. We ensure the turbine, the heat recovery system, and the absorption chiller operate as a single, highly optimised organism that dynamically adapts to your facility&apos;s shifting demands.
          </p>
        </>
      }
      specs={[
        { label: "Total efficiency", value: "Up to 81%" },
        { label: "Delivery model", value: "Turnkey" },
        { label: "Control system", value: "Integrated" },
        { label: "Fuel configuration", value: "Custom" },
      ]}
      modelTable={[
        {
          modelNumber: "Custom Turnkey Plant",
          capacity: "100 - 10,000+ TR",
          dimensions: "Facility scale",
          energyInput: "Gas Turbine / Engine Exhaust"
        }
      ]}
      features={[
        { icon: <Shield size={20} />, title: "Single Point of Responsibility", description: "BROAD handles the thermodynamic design, equipment integration, and performance guarantees, reducing risk for the client." },
        { icon: <Activity size={20} />, title: "Master Plant Control", description: "Proprietary SCADA systems that provide holistic, real-time control over both power generation and thermal cooling assets." },
        { icon: <Battery size={20} />, title: "Optimised Heat Recovery", description: "Custom-engineered heat exchangers and chillers designed specifically for the exhaust profile of your chosen turbine." },
        { icon: <Zap size={20} />, title: "Dynamic Load Management", description: "Automated logic that balances electrical generation and cooling output based on time-of-day tariffs and facility demand." },
      ]}
      applications={[
        { icon: <Landmark size={20} />, title: "District Cooling & Heating" },
        { icon: <Server size={20} />, title: "Hyperscale Data Centres" },
        { icon: <FactoryIcon size={20} />, title: "Integrated Manufacturing Plants" },
        { icon: <Hospital size={20} />, title: "Large Hospital Complexes" },
        { icon: <Building2 size={20} />, title: "Smart City Infrastructure" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Guaranteed Performance", description: "Integrated design ensures the theoretical efficiencies of CCHP are actually realised in real-world operation." },
        { icon: <Leaf size={20} />, title: "Maximum Decarbonisation", description: "Holistic system tuning ensures the lowest possible carbon intensity per megawatt of total energy delivered." },
        { icon: <Wrench size={20} />, title: "Streamlined Maintenance", description: "A single service contract and unified technical support for the entire thermal and cooling infrastructure." },
      ]}
      faqs={[
        {
          question: "Does BROAD supply the gas turbines or engines for the trigeneration plant?",
          answer: "While BROAD manufactures the absorption chillers and heat recovery components, we partner with leading global manufacturers (such as Solar Turbines, GE, Jenbacher, and Caterpillar) for the prime movers. As the system integrator, we manage the procurement, thermodynamic matching, and integration of these components into a unified turnkey solution.",
        },
        {
          question: "What is involved in a BROAD trigeneration feasibility study?",
          answer: "Our engineers analyze your facility's hourly electrical and cooling load profiles for a full year. We then thermodynamically model different turbine and chiller combinations, factoring in local natural gas prices and grid electricity tariffs, to determine the optimal system sizing, capital cost, and projected Return on Investment (ROI).",
        },
        {
          question: "Can an existing power generation plant be retrofitted into a trigeneration system?",
          answer: "Yes. This is known as a 'bottoming cycle' retrofit. If your facility already has captive power generation (gas turbines or diesel gensets) that is exhausting heat to the atmosphere, BROAD can retrofit a custom waste-heat absorption chiller to capture that exhaust and produce free cooling, upgrading your plant to a highly efficient trigeneration system.",
        },
      ]}
      downloads={[
        { title: "BROAD CCHP Catalogue", size: "3.5 MB", type: "PDF", href: "/files/CCHP.pdf" },
        { title: "System Integration Capabilities", size: "2.1 MB", type: "PDF" },
        { title: "Case Studies: District Cooling", size: "3.8 MB", type: "PDF" },
      ]}
      // BROAD CCHP projects with measured results, from the BROAD CCHP catalogue (/files/CCHP.pdf)
      caseStudies={[
        {
          id: "psl-pet",
          title: "Pakistan Synthetic Limited (PET), Hub",
          metric: "Plant efficiency 42% → 81%",
          industry: "Plastics · 2 MW + 1 MW gas engines",
          image: "/images/CCHP_2.jpg",
          description: "A BROAD multi-energy chiller (1,857 kW, ≈ 528 TR) recovers flue gas and jacket water heat from MTU and Jenbacher engines, replacing electric chillers.",
        },
        {
          id: "alkaram",
          title: "Alkaram Textile, Nooriabad",
          metric: "Plant efficiency 43.5% → 81%",
          industry: "Textile · 2 × 1.5 MW gas engines",
          image: "/images/CCHP_1.jpg",
          description: "Two BROAD exhaust and jacket water chillers (1,590 kW + 1,100 kW, ≈ 765 TR) cool a new 240-loom air-jet weaving plant.",
        },
        {
          id: "125-broad",
          title: "125 Broad Street, New York",
          metric: "Carbon footprint cut by over 70%",
          industry: "Commercial office · 1 MW gas engine",
          image: "/images/cchp.jpg",
          description: "A 320 RT BROAD hot water chiller is part of a CCHP plant expected to save over $1.25 million a year and cut electricity use by 42%+.",
        },
      ]}
      customSections={
        <div className="space-y-12 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Technology Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold mb-6 text-blue-600 flex items-center">
                <span className="bg-blue-50 p-2 rounded-lg mr-3">⚙️</span>
                Proven Absorption Core
              </h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Same lithium bromide technology as BROAD chillers</li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Decades of proven performance</li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Industry-standard vacuum system control</li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Heat exchanger integrity assurance</li>
                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Enhanced part-load performance</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold mb-6 text-green-600 flex items-center">
                <span className="bg-green-50 p-2 rounded-lg mr-3">🧩</span>
                Integrated Design
              </h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Plug-and-play distributed energy</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Simplified installation and commissioning</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Seamless operation in remote locations</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Optimized for environments with grid constraints</li>
                <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Comprehensive system-wide warranty</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}

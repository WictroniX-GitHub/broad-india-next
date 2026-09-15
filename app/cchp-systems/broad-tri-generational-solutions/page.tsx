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
        { label: "Total efficiency", value: "80–90%" },
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
        { title: "Turnkey Trigeneration Brochure", size: "4.5 MB", type: "PDF" },
        { title: "System Integration Capabilities", size: "2.1 MB", type: "PDF" },
        { title: "Case Studies: District Cooling", size: "3.8 MB", type: "PDF" },
      ]}
      caseStudies={[
        {
          id: 1,
          title: "University Medical Campuses",
          metric: "High uptime trigeneration system",
          industry: "Healthcare & Education",
          image: "/images/CCHP_2.jpg",
          description: "Large-scale educational and healthcare facilities requiring reliable, efficient energy solutions with high uptime requirements. Featured: University of Maryland medical campus with comprehensive trigeneration system.",
        },
        {
          id: 2,
          title: "District Heating Networks",
          metric: "Centralized energy generation",
          industry: "Municipal & Community",
          image: "/images/CCHP_1.jpg",
          description: "Municipal and community-scale systems providing centralized energy generation with distributed benefits across multiple buildings. Advantage: Centralized efficiency, reduced infrastructure costs, community-wide benefits.",
        },
        {
          id: 3,
          title: "Industrial Facilities",
          metric: "Continuous process cooling and power",
          industry: "Manufacturing",
          image: "/images/Absorption Heat Pump.jpg",
          description: "Manufacturing and processing plants requiring continuous, cost-effective energy with minimal grid dependence. Benefits: Energy independence, cost control, production continuity assurance.",
        }
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

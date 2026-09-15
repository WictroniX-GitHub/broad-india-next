"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Shield, Gauge, Flame,
  Factory, Landmark, Droplets, Building2,
  DollarSign, Activity, Recycle, ArrowUpRight,
} from "lucide-react";

export default function AbsorptionHeatPump() {
  return (
    <PDPTemplate
      heroImage="/images/Absorption Heat Pump.jpg"
      title="Absorption Heat Pumps"
      tagline="Recover and upgrade low-grade industrial waste heat into high-value heating"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Absorption Heat Pump" },
      ]}
      definitionTerm="Absorption Heat Pump (AHP)"
      definitionText="An absorption heat pump (AHP) is a thermally-driven energy recovery system. Unlike an absorption chiller that produces cooling, an AHP captures low-grade waste heat (e.g., 30–80°C cooling water) that is normally discarded into the environment, and uses a high-grade driving heat source (like steam or natural gas) to 'pump' or upgrade that waste heat to a much higher, useful temperature (e.g., 90–130°C) for process heating or district heating networks."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            In many heavy industries and thermal power plants, massive amounts of low-grade heat (30–80°C) are continuously dissipated into the atmosphere through cooling towers or dumped into rivers, while simultaneously, fossil fuels are burned to generate high-grade heat for processes or district heating. The BROAD Absorption Heat Pump is designed to break this inefficient cycle.
          </p>
          <p className="text-lg leading-relaxed">
            By utilising the lithium bromide absorption cycle, our AHPs recover this vast, untapped low-grade thermal energy and upgrade it to a usable temperature. This process essentially multiplies the efficiency of the driving heat source, delivering up to 1.7 times more heating energy than the fuel consumed. It is a critical technology for deep industrial decarbonisation, turning thermal waste streams into high-value process heating.
          </p>
        </>
      }
      specs={[
        { label: "Heating capacity", value: "1–50 MW" },
        { label: "Waste heat input", value: "30–80°C" },
        { label: "Hot water output", value: "Up to 130°C" },
        { label: "Heating efficiency", value: "COP 1.7" },
      ]}
      modelTable={[
        {
          modelNumber: "Type I (Temperature Amplifier)",
          capacity: "1 - 50 MW",
          dimensions: "Varies by capacity",
          energyInput: "Steam / Natural Gas"
        },
        {
          modelNumber: "Type II (Heat Transformer)",
          capacity: "1 - 50 MW",
          dimensions: "Varies by capacity",
          energyInput: "Medium Grade Waste Heat"
        }
      ]}
      features={[
        { icon: <Recycle size={20} />, title: "Massive Waste Heat Recovery", description: "Recovers vast quantities of low-grade heat (30–80°C) that conventional heat exchangers cannot utilize." },
        { icon: <Activity size={20} />, title: "Class I & Class II Operations", description: "Available in Type I (amplifies heating capacity using high-grade drive heat) and Type II (amplifies temperature using medium-grade drive heat without additional fuel)." },
        { icon: <Flame size={20} />, title: "Flexible Drive Sources", description: "Can be driven by steam, natural gas, or exhaust gas, depending on the facility's existing energy infrastructure." },
        { icon: <Droplets size={20} />, title: "Water Savings", description: "By recovering heat rather than rejecting it through cooling towers, AHPs drastically reduce evaporative cooling water consumption." },
        { icon: <Shield size={20} />, title: "Industrial Durability", description: "Engineered for 24/7 continuous operation in harsh environments, featuring specialized corrosion-resistant materials." },
      ]}
      applications={[
        { icon: <Landmark size={20} />, title: "Thermal Power Plants (Coal/Gas)" },
        { icon: <Factory size={20} />, title: "Petrochemical & Refining" },
        { icon: <Building2 size={20} />, title: "District Heating Networks" },
        { icon: <Factory size={20} />, title: "Steel & Metallurgy" },
        { icon: <Factory size={20} />, title: "Pulp & Paper Manufacturing" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "15–40% Energy Savings", description: "Produces significantly more heating energy than the driving fuel consumed, slashing primary boiler fuel costs." },
        { icon: <Leaf size={20} />, title: "Deep Decarbonisation", description: "Directly displaces fossil fuel combustion for heating, delivering massive reductions in industrial CO₂ emissions." },
        { icon: <Droplets size={20} />, title: "Eliminate Cooling Tower Plumes", description: "Reduces the thermal load on cooling towers, eliminating visible vapor plumes and thermal pollution in local waterways." },
      ]}
      faqs={[
        {
          question: "What is the difference between a Type I and Type II Absorption Heat Pump?",
          answer: "A Type I AHP uses a small amount of high-grade heat (like steam or gas) to recover a large amount of low-grade waste heat, producing a medium-temperature hot water output. Its primary goal is to amplify total heating capacity (COP ~1.7). A Type II AHP (Heat Transformer) uses a medium-grade waste heat source (e.g., 90°C) to produce a smaller amount of high-grade heat (e.g., 130°C steam) without any additional driving fuel. Its primary goal is to amplify temperature (COP ~0.45).",
        },
        {
          question: "How does an AHP save water?",
          answer: "In a typical industrial plant, low-grade waste heat must be dissipated using cooling towers, which consume vast amounts of water through evaporation. By using an AHP to extract that heat and repurpose it for process heating, the thermal load on the cooling towers is significantly reduced, resulting in massive evaporative water savings.",
        },
        {
          question: "What are the most common applications for AHPs in India?",
          answer: "The largest applications are in thermal power plants (recovering heat from condenser cooling water to pre-heat boiler feedwater), petrochemical refineries (recovering distillation column overhead heat), and large manufacturing plants that require simultaneous cooling and process heating.",
        },
      ]}
      downloads={[
        { title: "Absorption Heat Pump Brochure", size: "3.5 MB", type: "PDF" },
        { title: "Technical Specifications Sheet", size: "1.2 MB", type: "PDF" },
        { title: "Case Study: Industrial Heat Recovery", size: "2.8 MB", type: "PDF" },
      ]}
      caseStudies={[
        {
          id: 1,
          title: "Thailand Paper Mill",
          metric: "Recovered 3.3 MW of cooling water heat",
          industry: "Paper & Pulp",
          image: "/images/Absorption Heat Pump.jpg",
          description: "Deployed globally across power plants, industrial parks, and municipal heating stations. This system excels in challenging industrial environments recovering waste heat from dyeing mills, breweries, power plant cooling loops, and boiler exhausts to produce high-temperature water between 140–190 ºF for immediate use.",
        },
        {
          id: 2,
          title: "South Korean Power Station",
          metric: "Converted 48 MW of waste heat for district heating",
          industry: "Power Generation",
          image: "/images/Absorption Heat Pump.jpg",
          description: "Result: Up to 41% savings in heating energy and rapid ROI. These systems excel in challenging environments, capturing low grade heat and producing high-temperature water.",
        }
      ]}
      customSections={
        <div className="space-y-12">
          <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transforming Thermal Power Plants and Heavy Industry</h3>
            <p>For thermal power plants in India, energy efficiency dictates profitability. By deploying a BROAD Absorption Heat Pump, power plants can recover the massive latent heat lost in condenser cooling water. This recovered heat is then used to preheat the boiler feedwater or supply a district heating network. The result is a direct <strong>15% to 20% reduction in coal or fuel consumption</strong> while maintaining the same electrical output, fundamentally improving the plant&apos;s heat rate and extending the operational lifespan of the boilers.</p>
            <p>In the broader industrial sector - including textiles, chemicals, paper mills, and food processing - facilities generate massive volumes of low-temperature effluent and exhaust gases. A BROAD AHP captures this waste heat to produce process heating water up to 90°C (194°F). This completely offsets or eliminates the need for fossil-fuel-fired boilers, slashing fuel costs and rapidly accelerating the facility&apos;s return on investment. Some industrial applications have documented up to 41% total energy savings following the integration of our heat pump technology.</p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Zero-Emission Pathway to Decarbonization</h3>
            <p>As India accelerates its commitment to reducing industrial emissions, the shift away from coal-fired and oil-fired boilers is imperative. The BROAD Absorption Heat Pump offers a clean, zero-emission alternative that aligns with the strictest environmental standards. Because the system utilizes a closed-loop lithium bromide-water absorption cycle, it uses water as the natural refrigerant, entirely eliminating ozone-depleting CFCs and HFCs.</p>
            <p>Furthermore, BROAD&apos;s heat pumps are engineered for unparalleled longevity and reliability. Without the heavy moving parts of mechanical compressors, the system operates with minimal vibration and noise. Equipped with robust corrosion-resistant heat exchangers, intelligent anti-crystallization controls, and continuous automatic vacuum purging, a BROAD AHP guarantees stable, uninterrupted heat delivery even under fluctuating ambient conditions.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 rounded-3xl shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Unmatched Performance & Reliability</h2>
                <p className="text-xl mb-12 text-white/90 font-light [text-wrap:balance]">With its unmatched ability to stabilize heat output even in fluctuating load conditions, BROAD Absorption Heat Pumps redefine sustainable heating by merging environmental responsibility with robust engineering.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-bold mb-2">2-3x</div>
                    <div className="text-lg font-semibold text-blue-100">Efficiency Multiplier</div>
                    <div className="text-sm text-white/70">vs conventional boilers</div>
                  </div>
                  <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-bold mb-2">140-190°F</div>
                    <div className="text-lg font-semibold text-blue-100">Output Temperature</div>
                    <div className="text-sm text-white/70">High-grade heat production</div>
                  </div>
                  <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-5xl font-bold mb-2">0%</div>
                    <div className="text-lg font-semibold text-blue-100">Harmful Refrigerants</div>
                    <div className="text-sm text-white/70">Water-based, eco-friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

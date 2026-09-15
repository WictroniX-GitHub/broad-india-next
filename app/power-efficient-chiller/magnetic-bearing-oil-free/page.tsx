"use client";

import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Shield, Gauge, Activity,
  Hospital, Hotel, Building2, Server, Droplets,
  DollarSign, Wrench, BarChart3, Wind, Settings,
} from "lucide-react";

export default function MagneticBearingOilFree() {
  return (
    <PDPTemplate
      heroImage="https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg"
      title="Magnetic Bearing Oil-Free Chiller"
      tagline="Frictionless compression for unmatched efficiency, silence, and reliability"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Power Efficient Chillers", href: "/power-efficient-chiller" },
        { label: "Magnetic Bearing Oil Free" },
      ]}
      definitionTerm="Magnetic Levitation Compressor"
      definitionText="A magnetic levitation compressor uses electromagnetism to suspend the compressor's rotating shaft in mid-air, completely removing physical contact between moving parts. Because there is no metal-to-metal friction, the system does not require lubricating oil. This eliminates the mechanical wear, energy losses, and complex oil management systems (pumps, separators, heaters) found in traditional centrifugal or screw compressors."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            The BROAD Magnetic Bearing Oil-Free Chiller represents the pinnacle of electric cooling technology. By combining a frictionless magnetic levitation compressor with an integrated Variable Frequency Drive (VFD) and advanced falling-film evaporator technology, it delivers unparalleled energy efficiency, especially under part-load conditions where commercial buildings operate most of the time.
          </p>
          <p className="text-lg leading-relaxed">
            Eliminating lubricating oil from the refrigeration cycle has a profound impact on long-term performance. In conventional chillers, oil inevitably migrates into the heat exchangers, coating the tubes and insulating them - a phenomenon known as &quot;oil fouling.&quot; This causes efficiency to degrade year after year. Our 100% oil-free design ensures the chiller maintains its exceptional &quot;day-one&quot; performance for its entire operational life.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "100–1,200 TR" },
        { label: "Compressor type", value: "Frictionless" },
        { label: "Part-load COP", value: "Up to 11" },
        { label: "Noise footprint", value: "Ultra-Low" },
      ]}
      modelTable={[
        {
          modelNumber: "Magnetic Bearing Centrifugal",
          capacity: "100–1,200 TR",
          dimensions: "Varies by capacity",
          energyInput: "Electric (Integrated VFD)",
        },
      ]}
      features={[
        { icon: <Droplets size={20} />, title: "100% Oil-Free Design", description: "Zero oil means no oil fouling in heat exchangers, guaranteeing sustained high efficiency over the chiller's entire 25+ year lifespan." },
        { icon: <Zap size={20} />, title: "Unmatched Part-Load Efficiency", description: "Integrated VFD precisely matches compressor speed to cooling demand, achieving Integrated Part Load Value (IPLV) COPs up to 11." },
        { icon: <Wind size={20} />, title: "Ultra-Quiet Operation", description: "The absence of mechanical friction and oil pump noise results in remarkably quiet operation, typically below 73 dBA." },
        { icon: <Shield size={20} />, title: "Surge Prevention", description: "Advanced active magnetic bearing control continuously monitors the shaft position thousands of times per second, ensuring stable operation even at low loads." },
        { icon: <Settings size={20} />, title: "2-Amp Starting Current", description: "Soft-start technology draws only 2 amps during startup, completely eliminating the massive electrical spikes common with traditional chillers." },
      ]}
      applications={[
        { icon: <Server size={20} />, title: "Hyperscale Data Centres" },
        { icon: <Hospital size={20} />, title: "Healthcare Facilities" },
        { icon: <Building2 size={20} />, title: "LEED Certified Commercial Buildings" },
        { icon: <Hotel size={20} />, title: "Luxury Hospitality" },
        { icon: <Shield size={20} />, title: "Pharmaceutical Cleanrooms" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Drastic Operating Cost Reduction", description: "Lower energy consumption combined with zero oil-related maintenance slashes Total Cost of Ownership (TCO) by up to 40%." },
        { icon: <Wrench size={20} />, title: "Simplified Maintenance", description: "No oil changes, no filter replacements, no oil analysis, and no mechanical bearings to rebuild. Maintenance is largely reduced to standard sensor and tube checks." },
        { icon: <Shield size={20} />, title: "Reliability & Uptime", description: "Fewer moving parts and the elimination of the complex oil management subsystem mean fewer points of potential failure." },
      ]}
      faqs={[
        {
          question: "How does the chiller cope with sudden power outages if the shaft is magnetically levitated?",
          answer: "In the event of a sudden power failure, the compressor's motor acts as a generator. As the shaft spins down, its rotational kinetic energy is converted into electrical energy, which is used to power the magnetic bearings until the shaft comes to a complete, safe stop on internal backup touchdown bearings. This fail-safe mechanism prevents any damage to the equipment.",
        },
        {
          question: "What is 'oil fouling' and why is it a problem in traditional chillers?",
          answer: "Oil fouling occurs when the lubricating oil in a traditional compressor escapes into the refrigerant loop and coats the internal surfaces of the copper heat exchange tubes. Because oil is an insulator, even a microscopic layer severely reduces the chiller's ability to transfer heat, increasing energy consumption by 10-15% over time. Magnetic bearing chillers have zero oil, so they never experience oil fouling.",
        },
        {
          question: "What is the typical ROI for upgrading to a magnetic bearing chiller?",
          answer: "While the initial capital cost is higher than a standard centrifugal or screw chiller, the Return on Investment (ROI) is typically between 2 to 4 years. This rapid payback is driven by massive energy savings at part-load conditions (where the chiller operates most of the time) and the elimination of expensive oil-related maintenance.",
        },
      ]}
      downloads={[
        { title: "Magnetic Bearing Chiller Brochure", size: "3.2 MB", type: "PDF" },
        { title: "Part-Load Efficiency Guide", size: "1.8 MB", type: "PDF" },
      ]}
      customSections={
        <div className="my-12">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">Global Standards & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 font-bold text-2xl mb-4">AHRI Certified</div>
              <p className="text-gray-600 font-light">Performance verified to international standards</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-green-600 font-bold text-2xl mb-4">ASHRAE Compliant</div>
              <p className="text-gray-600 font-light">Meets stringent energy efficiency requirements</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-purple-600 font-bold text-2xl mb-4">FEMP Standards</div>
              <p className="text-gray-600 font-light">Exceeds Federal Energy Management Program guidelines</p>
            </div>
          </div>
        </div>
      }
    />
  );
}

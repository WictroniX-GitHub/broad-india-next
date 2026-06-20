"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CCHPSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a CCHP System?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A CCHP (Combined Cooling, Heating & Power) system, or trigeneration, is an energy-efficient solution that generates electricity, chilled water, and hot water simultaneously from a single fuel source or waste heat."
        }
      },
      {
        "@type": "Question",
        "name": "How efficient are BROAD's CCHP systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By capturing and utilizing waste heat that would otherwise be exhausted, BROAD CCHP systems achieve total system efficiencies between 60% and 80%, drastically reducing lifecycle energy costs and carbon emissions."
        }
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CCHP Systems (Combined Cooling, Heating & Power)",
          "description": "Trigeneration systems integrating cogeneration and absorption technology for simultaneous electricity, cooling, and heating with 60-80% efficiency.",
          "provider": { "@type": "Organization", "name": "BROAD India", "url": "https://www.broadindia.com" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Combined Cooling Heating and Power"
        }) }}
      />
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/CCHP_1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            CCHP Systems
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Maximizing Energy Yield with BROAD CCHP (Combined Cooling, Heating & Power) Systems
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              In the quest for total energy optimization and decarbonization, traditional power generation models fall short - often wasting up to 60% of their primary fuel energy as exhausted heat. <strong>BROAD India&apos;s CCHP (Combined Cooling, Heating & Power) Systems</strong>, also known as trigeneration, revolutionize this paradigm. By integrating advanced cogeneration engines or turbines with our world-class thermally driven absorption technology, our CCHP plants capture and repurpose that exhausted heat. The result? A single integrated plant that simultaneously produces electricity, chilled water for air conditioning or process cooling, and hot water for heating operations.
            </p>
            <p>
              This synergistic approach elevates total system energy efficiency from a conventional 30-40% to an astounding <strong>60%–80%</strong>. For heavy industries, commercial complexes, district cooling networks, and institutional campuses across India, a BROAD CCHP system translates to massive reductions in primary fuel consumption, drastically lower operational expenditures (OPEX), and unparalleled energy security.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Strategic Advantage of Trigeneration in India</h3>
            <p>
              India&apos;s rapid industrialization combined with an increasingly strained national power grid demands decentralized, reliable, and highly efficient energy solutions. A BROAD CCHP plant empowers facilities to become self-sufficient microgrids. By generating electricity on-site, facilities bypass transmission and distribution (T&D) losses - which can be substantial - and insulate themselves from unpredictable grid outages and peak tariff penalties.
            </p>
            <p>
              Simultaneously, the high-temperature exhaust gas and jacket cooling water from the power generator (running on natural gas, biogas, or other fuels) are routed directly into a BROAD multi-energy or exhaust-driven vapour absorption chiller. Instead of consuming expensive grid electricity to run mechanical chillers, the facility achieves &quot;free cooling&quot; driven entirely by the generator&apos;s waste heat. During winter months or in industrial processes requiring heat, the system seamlessly redirects thermal energy to provide high-grade heating water or steam.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Driving Corporate Sustainability and Net-Zero Targets</h3>
            <p>
              The environmental impact of transitioning to a BROAD CCHP system is profound. By utilizing the same unit of fuel to produce three distinct utility streams, facilities drastically cut their carbon footprint. The absorption chillers themselves use pure water as the refrigerant, ensuring zero Ozone Depletion Potential (ODP) and zero Global Warming Potential (GWP). For corporations operating in India that are committed to strict ESG (Environmental, Social, and Governance) targets, a trigeneration plant is one of the most effective capital investments to accelerate the journey toward Net-Zero emissions.
            </p>
            <p>
              Furthermore, the integration of BROAD&apos;s intelligent control systems ensures that the CCHP plant dynamically balances the electrical and thermal loads in real-time. Whether operating in base-load, thermal-following, or electrical-following modes, the system optimizes fuel consumption to guarantee the highest possible economic return under varying operational conditions.
            </p>

            <p className="pt-4 font-medium text-center text-xl text-blue-800">
              Discover how our trigeneration technology operates and explore its proven applications below.
            </p>
          </div>
        </div>

        {/* Sub-category Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Link href="/cchp-systems/broad-tri-generational-solutions">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/CCHP_2.jpg"
                  alt="BROAD Tri-Generational Solutions"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  BROAD Tri-Generational Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  Comprehensive trigeneration systems that integrate gas
                  turbines or generators with absorption chillers for
                  simultaneous electricity, cooling, and heating production with
                  60-80% total system efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* System Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            How CCHP Systems Work
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">1. Power Generation</h4>
                <p className="text-gray-600 text-sm">
                  Gas turbines or generators produce electricity for immediate
                  use or grid export
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">♻️</span>
                </div>
                <h4 className="font-semibold mb-2">2. Waste Heat Recovery</h4>
                <p className="text-gray-600 text-sm">
                  Exhaust heat from power generation is captured and channeled
                  to absorption systems
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🏠</span>
                </div>
                <h4 className="font-semibold mb-2">3. Cooling & Heating</h4>
                <p className="text-gray-600 text-sm">
                  Waste heat drives absorption chillers for cooling and heat
                  recovery units for heating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              Energy Efficiency Benefits
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 60-80% total system efficiency</li>
              <li>• Dramatic reduction in lifecycle energy costs</li>
              <li>• Maximum utilization of fuel input energy</li>
              <li>• Superior part-load performance</li>
              <li>• Reduced grid electricity dependence</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Environmental Advantages</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Significant carbon emissions reduction</li>
              <li>• No CFC/HFC refrigerants used</li>
              <li>• Supports decarbonization goals</li>
              <li>• Enhanced energy resilience</li>
              <li>• Contributes to carbon neutrality targets</li>
            </ul>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Technology Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🔧</div>
              <h4 className="font-semibold">Lithium Bromide Core</h4>
              <p className="text-sm text-gray-600">
                Same proven absorption technology as BROAD chillers
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🎛️</div>
              <h4 className="font-semibold">Vacuum System Control</h4>
              <p className="text-sm text-gray-600">
                Industry-standard control for optimal performance
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">🔄</div>
              <h4 className="font-semibold">Heat Exchanger Integrity</h4>
              <p className="text-sm text-gray-600">
                Robust design for long-term reliability
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-blue-600 text-3xl mb-2">⚙️</div>
              <h4 className="font-semibold">Plug-and-Play Design</h4>
              <p className="text-sm text-gray-600">
                Easy installation and integration
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Proven Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
              <div className="text-blue-600 text-3xl mb-4 text-center">🏥</div>
              <h4 className="text-lg font-semibold mb-3 text-center">
                University Medical Campuses
              </h4>
              <p className="text-gray-600 text-sm mb-3 flex-grow">
                Large-scale installations providing comprehensive energy
                solutions for educational and healthcare facilities.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm mt-auto">
                <strong>Example:</strong> University of Maryland medical campus
                deployment
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
              <div className="text-green-600 text-3xl mb-4 text-center">🌆</div>
              <h4 className="text-lg font-semibold mb-3 text-center">
                District Heating Networks
              </h4>
              <p className="text-gray-600 text-sm mb-3 flex-grow">
                Municipal and community-scale systems providing distributed
                energy for multiple buildings and facilities.
              </p>
              <div className="bg-green-50 p-3 rounded text-sm mt-auto">
                <strong>Benefit:</strong> Centralized efficiency with
                distributed benefits
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
              <div className="text-orange-600 text-3xl mb-4 text-center">
                🏭
              </div>
              <h4 className="text-lg font-semibold mb-3 text-center">
                Industrial Facilities
              </h4>
              <p className="text-gray-600 text-sm mb-3 flex-grow">
                Manufacturing and industrial sites requiring reliable,
                cost-effective energy solutions with high uptime requirements.
              </p>
              <div className="bg-orange-50 p-3 rounded text-sm mt-auto">
                <strong>Advantage:</strong> Energy independence and cost control
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                60-80%
              </div>
              <h4 className="font-semibold mb-2">Total System Efficiency</h4>
              <p className="text-gray-600 text-sm">
                Combined electrical and thermal efficiency
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                3-in-1
              </div>
              <h4 className="font-semibold mb-2">Energy Outputs</h4>
              <p className="text-gray-600 text-sm">
                Electricity, cooling, and heating
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <h4 className="font-semibold mb-2">Continuous Operation</h4>
              <p className="text-gray-600 text-sm">
                Reliable year-round energy supply
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">ROI</div>
              <h4 className="font-semibold mb-2">Rapid Payback</h4>
              <p className="text-gray-600 text-sm">
                Quick return on investment
              </p>
            </div>
          </div>
        </div>

        {/* Suitable Locations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">
            Ideal for Challenging Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-red-600">
                Constrained Grid Access
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Remote industrial facilities</li>
                <li>• Islands and isolated communities</li>
                <li>• Areas with unreliable grid power</li>
                <li>• Locations with high electricity costs</li>
                <li>• Emergency backup power requirements</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-green-600">
                Sustainability Goals
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Carbon neutrality targets</li>
                <li>• Energy resilience requirements</li>
                <li>• Green building certifications</li>
                <li>• Corporate sustainability initiatives</li>
                <li>• Government decarbonization mandates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Revolutionize Your Energy Strategy
          </h3>
          <p className="text-lg mb-6">
            Discover how BROAD CCHP Systems can provide comprehensive energy
            solutions while reducing costs and emissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Consultation
            </Link>
            <Link
              href="/cchp-systems/broad-tri-generational-solutions"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCHPSystems;

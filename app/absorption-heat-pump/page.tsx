import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductFAQ from "@/components/ProductFAQ";

export const metadata: Metadata = {
  title: "Absorption Heat Pumps - Waste Heat Recovery Systems | BROAD India",
  description:
    "BROAD India's absorption heat pumps recover waste heat from industrial processes, achieving 15-20% energy savings. Ideal for thermal power plants, industrial heating, and district heating applications.",
  keywords: [
    "absorption heat pump",
    "waste heat recovery",
    "industrial heat pump",
    "thermal power plant",
    "energy saving",
    "process heating",
    "district heating",
    "BROAD heat pump",
    "waste heat utilization",
  ],
  openGraph: {
    title: "Absorption Heat Pumps - Waste Heat Recovery Systems | BROAD India",
    description:
      "BROAD India's absorption heat pumps recover waste heat from industrial processes, achieving 15-20% energy savings.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Absorption Heat Pumps - Waste Heat Recovery Systems | BROAD India",
    description:
      "BROAD India's absorption heat pumps recover waste heat from industrial processes, achieving 15-20% energy savings.",
  },
};

const AbsorptionHeatPump = () => {
  const applications = [
    {
      title: "Thermal Power Plant Systems",
      description:
        "Achieves 15–20% energy-saving by upgrading waste cooling water (59–86 °F) to preheat boiler feedwater using steam drive",
      example:
        "Thai paper factory deploying a 3.3 MW system, and South Korea's 48 MW plant for district heating",
      icon: "🏭",
    },
    {
      title: "Industrial Process Heating",
      description:
        "Delivers up to 41% energy savings by recycling low-temperature waste streams (86–122 °F) across various industries",
      example:
        "Korean eco-park, Austrian district heating system, Chinese brewery - dyeing, breweries, steel finishing, oil field operations",
      icon: "🏗️",
    },
    {
      title: "Exhaust-Driven Heat Recovery",
      description:
        "Delivers 8–15% energy efficiency gains by capturing boiler, turbine, or chiller exhaust (140–356 °F) to produce heating water at ~185 °F",
      example:
        "Biomass plants (Denmark), event centers (Beijing National Games Centre), and energy plants in South Korea",
      icon: "♻️",
    },
  ];

  const highlights = [
    {
      title: "Thermal Lift Efficiency",
      description:
        "Achieves Heating Coefficients of Performance (COP) between 2.0–3.0 - delivering two to three times more heat per unit thermal input compared to conventional boilers, and enabling payback through energy savings.",
      icon: "⚡",
    },
    {
      title: "Eco-Friendly Refrigerant",
      description:
        "Utilizes water and lithium bromide, a non-CFC, non-HFC refrigerant pair, ensuring compliance with global environmental regulations.",
      icon: "🌱",
    },
    {
      title: "Robust Construction",
      description:
        "Incorporates corrosion-resistant heat exchangers and vacuum stability safeguards, along with automatic purge, crystallisation prevention systems, and intelligent control modules for long-term, trouble-free operation.",
      icon: "🔧",
    },
    {
      title: "Versatile Thermal Inputs",
      description:
        "Accepts low-temperature waste heat sources (surface or cooling water at 59–122 °F) and combines with higher-grade heat (steam, hot water, exhaust gas) for flexible deployment across industrial and municipal systems.",
      icon: "🔄",
    },
    {
      title: "Uninterrupted Heating",
      description:
        "Offers stable heat delivery even under ambient or supply fluctuations, without requiring back‑up electric heating - unlike traditional electric heat pump systems.",
      icon: "🎯",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an absorption heat pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An absorption heat pump is a thermal energy solution that recovers low-grade waste heat and converts it into high-temperature water for heating applications, using a thermal compressor instead of an electrical one."
        }
      },
      {
        "@type": "Question",
        "name": "How much energy can an absorption heat pump save?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BROAD's absorption heat pumps can achieve 15-20% energy savings by upgrading waste cooling water to preheat boiler feedwater, and up to 41% savings by recycling low-temperature waste streams."
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
      {/* Hero Section */}
      <div
        className="w-full h-[72vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/Absorption Heat Pump.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Absorption Heat Pumps
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Industrial Waste Heat Recovery with BROAD Absorption Heat Pumps
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              In many industrial operations and power plants across India, vast quantities of low-grade thermal energy - typically between 15°C and 50°C - are continuously rejected into the atmosphere via cooling towers or discharged into water bodies. This represents a staggering loss of potential energy. The <strong>BROAD Absorption Heat Pump (AHP)</strong> is an advanced thermal energy solution engineered precisely to capture this untapped resource. By recovering low-grade waste heat and &quot;pumping&quot; it to a higher, usable temperature, our absorption heat pumps provide high-temperature water for district heating, boiler feedwater preheating, and critical industrial processes.
            </p>
            <p>
              Unlike conventional mechanical heat pumps that rely on electricity-hungry compressors, the BROAD Absorption Heat Pump utilizes a thermal compressor driven by a heat source - such as steam, high-temperature hot water, exhaust gas, or natural gas. This means the system elevates energy efficiency far beyond traditional boiler-based heating methods, delivering an extraordinary <strong>Coefficient of Performance (COP) between 2.0 and 3.0</strong>. In practical terms, this translates to generating two to three times the heating output per unit of driving energy consumed.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Transforming Thermal Power Plants and Heavy Industry</h3>
            <p>
              For thermal power plants in India, energy efficiency dictates profitability. By deploying a BROAD Absorption Heat Pump, power plants can recover the massive latent heat lost in condenser cooling water. This recovered heat is then used to preheat the boiler feedwater or supply a district heating network. The result is a direct <strong>15% to 20% reduction in coal or fuel consumption</strong> while maintaining the same electrical output, fundamentally improving the plant&apos;s heat rate and extending the operational lifespan of the boilers.
            </p>
            <p>
              In the broader industrial sector - including textiles, chemicals, paper mills, and food processing - facilities generate massive volumes of low-temperature effluent and exhaust gases. A BROAD AHP captures this waste heat to produce process heating water up to 90°C (194°F). This completely offsets or eliminates the need for fossil-fuel-fired boilers, slashing fuel costs and rapidly accelerating the facility&apos;s return on investment. Some industrial applications have documented up to 41% total energy savings following the integration of our heat pump technology.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Zero-Emission Pathway to Decarbonization</h3>
            <p>
              As India accelerates its commitment to reducing industrial emissions, the shift away from coal-fired and oil-fired boilers is imperative. The BROAD Absorption Heat Pump offers a clean, zero-emission alternative that aligns with the strictest environmental standards. Because the system utilizes a closed-loop lithium bromide-water absorption cycle, it uses water as the natural refrigerant, entirely eliminating ozone-depleting CFCs and HFCs.
            </p>
            <p>
              Furthermore, BROAD&apos;s heat pumps are engineered for unparalleled longevity and reliability. Without the heavy moving parts of mechanical compressors, the system operates with minimal vibration and noise. Equipped with robust corrosion-resistant heat exchangers, intelligent anti-crystallization controls, and continuous automatic vacuum purging, a BROAD AHP guarantees stable, uninterrupted heat delivery even under fluctuating ambient conditions.
            </p>

            <p className="pt-4 font-medium text-center text-xl text-blue-800">
              Explore the engineering advantages and proven global applications of our absorption heat pump technology below.
            </p>
          </div>
        </div>

        {/* Main Product Image */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="h-full">
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <Image
                src="/images/Absorption Heat Pump.jpg"
                alt="BROAD Absorption Heat Pump"
                fill
                className="object-contain"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Thermal-Driven Heat Transfer Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg">
                Unlike conventional electric heat pumps, BROAD&apos;s absorption
                technology operates without CFCs or HFCs, instead using
                environmentally benign water as the refrigerant, ensuring clean
                energy use with a low carbon footprint.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Key Features Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Engineering Highlights & Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">
                    {highlight.icon}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Deployment Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Global Deployment & Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                BROAD Absorption Heat Pumps are deployed globally across power
                plants, industrial parks, and municipal heating stations in
                countries including{" "}
                <strong>
                  South Korea, Denmark, Austria, China, and Thailand
                </strong>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                These systems excel in challenging industrial environments
                recovering waste heat from dyeing mills, breweries, power plant
                cooling loops, and boiler exhausts to produce high-temperature
                water between <strong>140–190 ºF</strong> for immediate use.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">
                  Thailand Paper Mill
                </h4>
                <p className="text-gray-600 text-sm">
                  Recovered <strong>3.3 MW</strong> of cooling water heat
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">
                  South Korean Power Station
                </h4>
                <p className="text-gray-600 text-sm">
                  Converted <strong>48 MW</strong> of waste heat for district
                  heating
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-green-700">
              Result: Up to <span className="text-2xl">41% savings</span> in
              heating energy and rapid ROI
            </p>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Proven Applications & Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2">{app.icon}</div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {app.description}
                    </CardDescription>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-blue-800">
                        <span className="font-semibold">Example:</span>{" "}
                        {app.example}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Unmatched Performance & Reliability
            </h2>
            <p className="text-xl mb-8 opacity-90">
              With its unmatched ability to stabilize heat output even in
              fluctuating load conditions, BROAD Absorption Heat Pumps redefine
              sustainable heating by merging environmental responsibility with
              robust engineering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">2-3x</div>
                <div className="text-lg font-semibold">
                  Efficiency Multiplier
                </div>
                <div className="text-sm opacity-80">
                  vs conventional boilers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">140-190°F</div>
                <div className="text-lg font-semibold">Output Temperature</div>
                <div className="text-sm opacity-80">
                  High-grade heat production
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">0%</div>
                <div className="text-lg font-semibold">
                  Harmful Refrigerants
                </div>
                <div className="text-sm opacity-80">
                  Water-based, eco-friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Heating System?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover how BROAD Absorption Heat Pumps can deliver unprecedented
              energy savings and environmental benefits for your facility.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <ProductFAQ faqs={[
        {
          question: "How does an absorption heat pump differ from a standard boiler?",
          answer: "While a boiler burns fuel to generate heat directly (meaning it can never be more than 100% efficient), an absorption heat pump uses a smaller amount of driving heat to recover and upgrade massive amounts of free, low-grade waste heat from the environment or industrial processes. This allows it to achieve efficiencies (COP) of 200% to 300%."
        },
        {
          question: "What temperature of waste heat can be recovered?",
          answer: "BROAD Absorption Heat Pumps can effectively capture and utilize low-grade waste heat typically ranging from 15°C to 50°C. This is heat that is normally rejected into the atmosphere via cooling towers or discharged into rivers by power plants and factories."
        },
        {
          question: "What are the main applications for these heat pumps?",
          answer: "They are primarily used in large-scale district heating networks, thermal power plants (to preheat boiler feedwater and save coal), and heavy industries like textiles, chemicals, and paper mills that require substantial amounts of high-temperature process water (up to 90°C)."
        },
        {
          question: "What is the typical return on investment (ROI)?",
          answer: "Due to the massive reduction in primary fuel (like coal or natural gas) consumption, industrial facilities and power plants often see a full return on investment within 1.5 to 3 years, followed by decades of 'free' recovered thermal energy."
        }
      ]} />
    </div>
  );
};

export default AbsorptionHeatPump;

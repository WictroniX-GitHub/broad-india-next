"use client";

import Link from "next/link";
import PDPTemplate from "@/components/PDPTemplate";
import {
  Zap, Leaf, Wrench, Thermometer, Shield, Gauge, Droplets,
  Hospital, Hotel, Factory, Landmark, FlaskConical,
  DollarSign,
} from "lucide-react";

/*
 * Owner page for "steam & hot water absorption chiller". Figures come from BROAD model data already
 * published on the single-stage and two-stage pages, the BROAD catalogue (/files/nonElec.pdf) and the
 * Kejriwal Geotech case study. Steam use per TR is derived from COP: heat per TR = 3.517 kW / COP.
 */

const SELECTION = [
  { source: "Low-pressure or waste steam, 0.1–1.5 kg/cm²", model: "Single-stage steam chiller", cop: "0.7–0.8", steam: "≈ 7.5–8.5 kg/h per TR" },
  { source: "Hot water, 70–95°C (jacket water, process or solar)", model: "Single-stage hot water chiller", cop: "0.7–0.8", steam: "-" },
  { source: "Steam, 4.2–10.5 kg/cm²", model: "Two-stage steam chiller (BS)", cop: "1.1–1.4", steam: "≈ 4.5–5.5 kg/h per TR" },
  { source: "Hot water, 138–180°C", model: "Two-stage hot water chiller (BH)", cop: "1.1–1.4", steam: "-" },
];

export default function SteamHotWaterChiller() {
  return (
    <PDPTemplate
      heroImage="/images/products/bds-steam-chiller.jpg"
      title="Steam & Hot Water Absorption Chiller"
      tagline="Turn process steam, waste steam or hot water into chilled water, with single-stage and two-stage models from 30 to 3,300 TR"
      catalogueUrl="/files/nonElec.pdf"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
        { label: "Steam & Hot Water Chiller" },
      ]}
      definitionTerm="Steam & Hot Water Absorption Chiller"
      definitionText="A steam or hot water absorption chiller is an indirect-fired vapour absorption machine (VAM) that uses steam or hot water, instead of electricity or a burner, to drive a lithium bromide-water cooling cycle. BROAD builds it in two forms: single-stage, for low-pressure steam (0.1–1.5 kg/cm²) or 70–95°C hot water at COP 0.7–0.8, and two-stage, for 4.2–10.5 kg/cm² steam or 138–180°C hot water at COP 1.1–1.4."
      introContent={
        <>
          <p className="text-lg leading-relaxed mb-6">
            Most Indian plants that run boilers, turbines, engines or process lines already have steam or hot water to spare. A BROAD steam or hot water absorption chiller uses that heat to make chilled water, so the plant&apos;s cooling no longer depends on electric compressors. The only electricity drawn is for the solution and refrigerant pumps and the cooling water system.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Which model fits your heat source?</h3>
          <p className="text-lg leading-relaxed mb-6">
            The choice between single-stage and two-stage depends on the temperature or pressure of the heat you have. Single-stage machines accept low-grade heat that a two-stage machine cannot use. Two-stage machines need hotter input but give 40–70% more cooling from the same heat.
          </p>
          <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Heat source available</th>
                  <th scope="col" className="px-4 py-3 font-semibold">BROAD model</th>
                  <th scope="col" className="px-4 py-3 font-semibold">COP</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Approx. steam use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {SELECTION.map((row) => (
                  <tr key={row.model}>
                    <td className="px-4 py-3">{row.source}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.model}</td>
                    <td className="px-4 py-3">{row.cop}</td>
                    <td className="px-4 py-3">{row.steam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">How much steam does it use?</h3>
          <p className="text-lg leading-relaxed">
            One ton of refrigeration (TR) is 3.517 kW of cooling, so the heat a chiller needs per TR is 3.517 kW divided by its COP. A single-stage machine at COP 0.75 needs about 4.7 kW of heat per TR, roughly 7.5–8.5 kg/h of low-pressure steam. A two-stage machine at COP 1.25 needs about 2.8 kW per TR, roughly 4.5–5.5 kg/h of 8 kg/cm² steam. These are planning estimates; BROAD engineers confirm the figure for your steam conditions during sizing. To turn them into running cost and payback, use the{" "}
            <Link href="/vapour-absorption-chiller/price-in-india#calculator" className="font-semibold text-brand-600 hover:text-brand-700">VAM price and payback calculator</Link>.
          </p>
        </>
      }
      specs={[
        { label: "Cooling capacity", value: "30–3,300 TR" },
        { label: "Steam pressure", value: "0.1–10.5 kg/cm²" },
        { label: "Hot water input", value: "70–180°C" },
        { label: "Efficiency", value: "COP 0.7–1.4" },
      ]}
      modelTable={[
        { modelNumber: "Single-Stage Steam", capacity: "100–3,300 TR", dimensions: "Varies by capacity", energyInput: "Steam (0.1–1.5 kg/cm²)" },
        { modelNumber: "Single-Stage Hot Water", capacity: "100–3,300 TR", dimensions: "Varies by capacity", energyInput: "Hot Water (70–95°C)" },
        { modelNumber: "BS Model (Two-Stage Steam)", capacity: "30–3,300 TR", dimensions: "Varies by capacity", energyInput: "Steam (4.2–10.5 kg/cm²)" },
        { modelNumber: "BH Model (Two-Stage Hot Water)", capacity: "30–3,300 TR", dimensions: "Varies by capacity", energyInput: "Hot Water (138–180°C)" },
      ]}
      features={[
        { icon: <Thermometer size={20} />, title: "Runs on Low-Grade Heat", description: "Single-stage models use steam from 0.1 kg/cm² and hot water from 70°C, heat that most plants vent or send to cooling towers." },
        { icon: <Gauge size={20} />, title: "Two-Stage Efficiency", description: "BS and BH two-stage models reach COP 1.1–1.4, giving 40–70% more cooling than single-stage from the same steam." },
        { icon: <Shield size={20} />, title: "Anti-Crystallisation Controls", description: "Control logic protects the lithium bromide solution when steam pressure or hot water temperature fluctuates." },
        { icon: <Droplets size={20} />, title: "Natural Refrigerant", description: "Water is the refrigerant and lithium bromide the absorbent: zero ODP, zero GWP and no refrigerant phase-down risk." },
        { icon: <Wrench size={20} />, title: "Few Moving Parts", description: "No mechanical compressor in the cooling cycle, so wear and vibration are low and service life runs beyond 25 years." },
      ]}
      applications={[
        { icon: <Factory size={20} />, title: "Textile & Polyester Plants" },
        { icon: <FlaskConical size={20} />, title: "Pharmaceutical & Chemical Plants" },
        { icon: <Landmark size={20} />, title: "Power Plants & Cogeneration" },
        { icon: <Factory size={20} />, title: "Steel & Process Industry" },
        { icon: <Hospital size={20} />, title: "Hospitals & Campuses" },
        { icon: <Hotel size={20} />, title: "Hotels & Commercial Buildings" },
      ]}
      benefits={[
        { icon: <DollarSign size={20} />, title: "Cooling From Heat You Already Pay For", description: "At Kejriwal Geotech, Surat, 1,200 TR of steam chillers avoid about 850 kW of electrical load and paid back in roughly 7 months." },
        { icon: <Zap size={20} />, title: "Lower Peak Demand", description: "Moving cooling off electric compressors cuts the plant's peak electrical demand and frees grid or captive power for production." },
        { icon: <Leaf size={20} />, title: "Lower Scope 2 Emissions", description: "Less grid electricity for cooling means lower Scope 2 emissions, with no synthetic refrigerants to report." },
      ]}
      caseStudies={[
        { id: "columbia", title: "Columbia University, New York", metric: "6,676 kW (≈ 1,900 TR)", industry: "Campus · Steam", image: "/images/products/bds-steam-chiller.jpg", description: "Two BROAD steam-driven absorption chillers supply campus cooling. BROAD Group reference project." },
        { id: "bmz", title: "BMZ Steel Works, Belarus", metric: "8,800 kW (≈ 2,500 TR)", industry: "Steel · Hot water", image: "/images/products/bh-model-chiller.jpg", description: "Ten BROAD hot water absorption chillers run on heat recovered from the steel plant. BROAD Group reference project." },
      ]}
      faqs={[
        {
          question: "What is a steam absorption chiller?",
          answer: "A steam absorption chiller is a vapour absorption machine that uses steam as its heat source to produce chilled water. Steam heats a lithium bromide solution, driving off water vapour that acts as the refrigerant. BROAD single-stage steam chillers run on 0.1–1.5 kg/cm² steam at COP 0.7–0.8, and two-stage (BS) models run on 4.2–10.5 kg/cm² steam at COP 1.1–1.4.",
        },
        {
          question: "Should I choose a single-stage or two-stage steam chiller?",
          answer: "Choose by steam pressure. Below about 1.5 kg/cm², including waste or flash steam, use a single-stage chiller. If you have steam at 4.2–10.5 kg/cm², a two-stage chiller gives 40–70% more cooling from the same steam, so it costs less to run per TR.",
        },
        {
          question: "How much steam does a vapour absorption chiller consume per TR?",
          answer: "Heat needed per TR is 3.517 kW divided by the chiller's COP. That works out to roughly 7.5–8.5 kg/h of low-pressure steam per TR for a single-stage machine (COP about 0.75) and roughly 4.5–5.5 kg/h of 8 kg/cm² steam per TR for a two-stage machine (COP about 1.25). BROAD confirms the exact figure for your steam conditions during sizing.",
        },
        {
          question: "What is the minimum hot water temperature for an absorption chiller?",
          answer: "BROAD single-stage hot water chillers operate from about 70°C, with nominal capacity rated at 90–95°C. Below the rated temperature the chiller derates, which is allowed for at the design stage. Two-stage BH models need hot water at 138–180°C.",
        },
        {
          question: "Can an absorption chiller run on waste or zero-pressure steam?",
          answer: "Yes. At Kejriwal Geotech in Surat, two BROAD single-stage chillers (800 TR and 400 TR) run only on zero-pressure steam left over from a continuous polymerisation line, delivering 7°C chilled water for yarn production.",
        },
      ]}
      downloads={[{ title: "BROAD Non-Electric Chiller Catalogue", size: "5.0 MB", type: "PDF", href: "/files/nonElec.pdf" }]}
    />
  );
}

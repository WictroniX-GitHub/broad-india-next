import Link from "next/link";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import CTABand from "@/components/ds/CTABand";
import ProductFAQ from "@/components/ProductFAQ";
import PaybackCalculator from "@/components/PaybackCalculator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/vapour-absorption-chiller/price-in-india",
  title: "Vapour Absorption Chiller Price in India (2026) | BROAD",
  description: "What sets the price of a vapour absorption chiller in India, how running costs compare with electric chillers, and a calculator to work out your payback.",
  image: "/images/products/broad-product-range.jpg",
});

// No list prices: every figure below comes from BROAD model data or the Kejriwal Geotech case study.
const DRIVERS = [
  { title: "Cooling capacity (TR)", text: "BROAD absorption chillers run from 30 to 3,300 TR. Cost rises with capacity, but cost per TR falls on larger machines.", href: "/vapour-absorption-chiller" },
  { title: "Model and heat source", text: "Single-stage machines for low-pressure steam or 70–95°C hot water are simpler. Two-stage, direct-fired, exhaust and multi-energy models add a second generator, a burner or extra heat exchangers.", href: "/vapour-absorption-chiller/steam-hot-water-absorption-chiller" },
  { title: "Heat source conditions", text: "Lower steam pressure or cooler hot water means less cooling per unit of machine, so a larger chiller is needed for the same TR. Sizing at your real conditions keeps the price accurate.", href: "/vapour-absorption-chiller/single-stage-chiller" },
  { title: "Cooling water system", text: "An absorption chiller rejects roughly twice the heat of an electric chiller, so it needs a larger cooling tower and pumps. BROAD packaged pumpsets cut this pumping power by 70–85%.", href: "/pumpsets" },
  { title: "Installation scope", text: "Steam or hot water piping, foundations, controls integration and commissioning vary by site and can be a large share of the project.", href: "/installations" },
];

const FAQS = [
  {
    question: "What is the price of a vapour absorption chiller in India?",
    answer: "There is no single list price. The cost of a vapour absorption chiller (VAM) in India depends on capacity (30–3,300 TR for BROAD), the model and heat source, the steam or hot water conditions at your site, the cooling water system and the installation scope. BROAD quotes each project after a sizing study. Use the calculator on this page to see whether the running-cost savings justify the investment.",
  },
  {
    question: "Is a vapour absorption chiller more expensive than an electric chiller?",
    answer: "Usually it costs more to buy, but much less to run when it uses waste heat or low-cost steam. An absorption chiller's own pumps and controls draw only about 1–3% of the electricity an equivalent electric chiller uses, so most of the electric chiller's power bill becomes a saving.",
  },
  {
    question: "What is the payback period of a vapour absorption chiller?",
    answer: "Payback is the project cost divided by the annual saving. With free waste heat and long running hours it can be very short: at Kejriwal Geotech in Surat, 1,200 TR of BROAD steam chillers save about ₹5.5 crore a year and paid back in roughly 7 months. With purchased steam, the steam cost is subtracted from the saving and payback is longer.",
  },
  {
    question: "What running costs does a vapour absorption chiller have?",
    answer: "Three: electricity for its pumps and controls (about 1–3% of an equivalent electric chiller), the cost of the steam, hot water or fuel that drives it (zero for true waste heat), and the cooling water system. Single-stage machines use roughly 8 kg/h of low-pressure steam per TR and two-stage machines roughly 5 kg/h per TR.",
  },
];

export default function VamPriceIndia() {
  return (
    <div className="bg-white">
      <PageHero
        variant="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Vapour Absorption Chillers", href: "/vapour-absorption-chiller" },
          { label: "Price in India" },
        ]}
        eyebrow="Cost guide · 2026"
        title="Vapour absorption chiller price in India"
        subtitle="There is no list price for an absorption chiller: the right number depends on your heat source and load. Here is what drives the cost, how running costs compare with an electric chiller, and a calculator for your payback."
      >
        <StatStrip
          tone="dark"
          stats={[
            { value: "30–3,300 TR", label: "BROAD capacity range" },
            { value: "1–3%", label: "Electricity of an electric chiller" },
            { value: "7 months", label: "Payback at Kejriwal Geotech" },
          ]}
          className="max-w-3xl"
        />
      </PageHero>

      <Section width="prose">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">How much does a vapour absorption chiller cost?</h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          The purchase price of a vapour absorption chiller (VAM) is set by its capacity, its model, the heat source it runs on and the work needed to connect it. That is why BROAD quotes each project after a sizing study rather than publishing a price list.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          For most buyers the deciding number is not the price but the payback. An absorption chiller usually costs more to buy than an electric chiller, but when it runs on waste heat or low-cost steam it removes most of the cooling power bill, which is often a plant&apos;s largest electrical load.
        </p>
      </Section>

      <Section surface="slate">
        <SectionHeader align="left" title="What drives the price" subtitle="Five factors set most of the cost of an absorption chiller project." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DRIVERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{d.title}</h3>
              <p className="mb-4 text-gray-600">{d.text}</p>
              <Link href={d.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section width="prose">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Running cost: absorption vs electric chiller</h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          An electric chiller&apos;s running cost is mostly its compressor power, around 0.7 kW per TR (at Kejriwal Geotech, 1,200 TR of cooling had drawn about 850 kW). An absorption chiller has no compressor; its pumps and controls draw about 1–3% of that. Its other running cost is the heat that drives it: nothing for true waste heat, or the cost of the steam if it comes from a boiler.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Steam use follows from the chiller&apos;s COP: heat per TR is 3.517 kW divided by COP, which is roughly 8 kg/h of low-pressure steam per TR for a single-stage machine (COP 0.7–0.8) and roughly 5 kg/h per TR for a two-stage machine (COP 1.1–1.4). If you buy steam, a two-stage machine halves much of that cost.
        </p>
      </Section>

      <Section surface="slate" width="prose">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Worked example: Kejriwal Geotech, Surat</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Kejriwal Geotech installed two BROAD single-stage steam chillers, 800 TR and 400 TR, driven only by zero-pressure steam left over from its continuous polymerisation line. The 1,200 TR plant avoids about 850 kW of electrical load, saves about ₹5.5 crore a year in electricity and paid back in roughly 7 months.{" "}
          <Link href="/installations/kejriwal-geotech-surat" className="font-semibold text-brand-600 hover:text-brand-700">
            Read the case study
          </Link>
          .
        </p>
      </Section>

      <Section id="calculator">
        <SectionHeader
          align="left"
          title="Payback calculator"
          subtitle="Enter your load, tariff and the quote you have received. The defaults show a 500 TR plant running 6,000 hours a year on free waste heat."
        />
        <PaybackCalculator />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-500">
          How it works: annual saving = electric chiller power cost − absorption chiller pump power (3% of the electric chiller) − steam cost. Steam use is 8 kg/h per TR (single-stage) or 5 kg/h per TR (two-stage). CO₂ uses India&apos;s grid factor of about 0.72 kg per kWh (CEA). Payback = your quote ÷ annual saving.
        </p>
      </Section>

      <Section surface="slate">
        <SectionHeader title="Price and payback FAQs" />
        <ProductFAQ faqs={FAQS} bare />
      </Section>

      <CTABand />
    </div>
  );
}

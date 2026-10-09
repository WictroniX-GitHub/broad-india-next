import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, Check, FlaskConical, Globe2, Leaf, Wrench } from "lucide-react";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import IconFeatureCard from "@/components/ds/IconFeatureCard";
import CTABand from "@/components/ds/CTABand";
import TrustedClients from "@/components/TrustedClient";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

import bg from "@/public/images/OurTeam.jpg";
import logo from "@/public/images/BROAD-India-final.png";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/about",
    title: "About BROAD India - Leading HVAC Solutions Provider",
    description: "Learn about BROAD Air Conditioning India Pvt. Ltd., a leading provider of non-electric Vapour absorption chillers and sustainable HVAC solutions.",
  }),
  keywords: [
    "BROAD India",
    "HVAC solutions",
    "Vapour absorption chillers",
    "non-electric cooling",
    "sustainable HVAC",
    "energy efficient cooling",
  ],
};

const APART = [
  { icon: <FlaskConical size={22} />, title: "Innovative Technology", description: "Pioneers in thermal-driven HVAC applying waste heat, steam, diesel, or natural gas" },
  { icon: <Wrench size={22} />, title: "Comprehensive Services", description: "End-to-end support including manufacturing, installation, and after-sales O&M" },
  { icon: <Leaf size={22} />, title: "Green Engineering Focus", description: "Aligned with India's 2070 net-zero goals through clean cooling systems" },
  { icon: <Globe2 size={22} />, title: "Global Heritage", description: "Part of BROAD Group - established in 1988, headquartered in Changsha" },
];

const WHY = [
  "Rank #1 for BROAD Vapour Absorption Chiller and Non-Electric Chiller",
  "Trusted by top brands like NTPC, IOCL, JSW, DLF, ITC, and Bhilosa",
  "Proven expertise in waste heat recovery systems",
  "Pioneering cooling solutions for industrial decarbonisation",
];

const ACHIEVEMENTS = [
  "Executed and managing the Asia's largest CHP project in DLF, Gurgaon",
  "Delivered energy-efficient HVAC systems to sectors like petrochemicals, food processing, textiles, healthcare, and offices",
  "Built 100+ absorption chiller installations, enabling our clients to significantly reduce their carbon footprint",
];

export default function About() {
  return (
    <div className="bg-white">
      <PageHero
        variant="image"
        image={bg}
        imageAlt="The BROAD India team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About BROAD India"
        title="Decarbonising India’s cooling since 2001"
        subtitle="BROAD Air Conditioning India Pvt. Ltd. is the Indian arm of China’s BROAD Group, engineering non-electric, heat-driven HVAC for India’s industry."
      />

      {/* Story + stats */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 [text-wrap:balance]">
              About BROAD Air Conditioning India Pvt. Ltd.
            </h2>
            <div className="mt-5 h-1.5 w-24 rounded-full bg-brand-600" />
            <p className="mt-6 text-lg font-light leading-relaxed text-gray-600">
              BROAD India, a proud subsidiary of China&apos;s BROAD Group, has been serving India since 2001 with cutting-edge,
              sustainable HVAC solutions. For over two decades, we&apos;ve delivered 100+ Vapour Absorption Machine (VAM)
              installations across critical industrial sectors.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-100 to-eco-100/60 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-card md:p-8">
              <Image src={logo} alt="BROAD India logo" width={160} height={80} className="mb-6 w-32" />
              <StatStrip
                tone="card"
                stats={[
                  { value: "2001", label: "Serving India since" },
                  { value: "100+", label: "VAM installations" },
                  { value: "1988", label: "BROAD Group founded" },
                  { value: "2070", label: "Net-zero goal we build for" },
                ]}
                className="md:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section surface="dark" glow>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Our Mission</p>
            <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-white/85">
              To decarbonize industrial cooling across India, we engineer non-electric absorption chillers, CCHP (Combined
              Cooling, Heating &amp; Power) systems, waste-heat-powered HVAC, and absorption heat pumps - helping industries
              slash energy usage, reduce carbon emissions, and meet regulatory goals for a greener tomorrow.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Key Achievements &amp; Impact</p>
            <ul className="mt-4 space-y-4">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-3 text-white/85">
                  <Award size={20} className="mt-0.5 shrink-0 text-eco-400" />
                  <span className="font-light leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What sets us apart */}
      <Section surface="slate">
        <SectionHeader title="What Sets Us Apart" />
        <FadeInStaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {APART.map((item) => (
            <FadeInStaggerItem key={item.title}>
              <IconFeatureCard {...item} />
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
      </Section>

      {/* Why choose */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader align="left" title="Why Choose BROAD India?" className="mb-0 md:mb-0" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w} className="flex gap-3 rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-eco-500/15 text-eco-600">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-gray-700">{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/broad-group" className="group mt-12 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
          Discover the global BROAD Group <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Section>

      <TrustedClients />

      <CTABand
        title="Get in Touch"
        text="Looking for eco-friendly HVAC solutions that reduce costs and emissions?"
      />
    </div>
  );
}

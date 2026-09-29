import Link from "next/link";
import { ArrowDown, Globe2, Leaf, Rocket } from "lucide-react";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import IconFeatureCard from "@/components/ds/IconFeatureCard";
import { cta } from "@/components/ds/cta";
import CareersBoard from "@/components/careers/CareersBoard";

const WHY = [
  {
    icon: <Leaf size={22} />,
    title: "Mission-driven work",
    description: "Help decarbonise Indian industry by replacing electric cooling with heat-driven BROAD systems.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "World-class technology",
    description: "Work with the sustainable cooling technology of BROAD Group, built over 35+ years globally.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Room to grow",
    description: "We’re looking for engineers who are curious, driven, and ready to grow with us across India.",
  },
];

export default function Careers() {
  return (
    <div className="bg-white">
      <PageHero
        variant="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        eyebrow="We’re hiring"
        title={
          <>
            Join our <span className="text-brand-300">global</span> team in India
          </>
        }
        subtitle="Be part of a mission-driven company bringing world-class sustainable cooling technology to India. We’re looking for engineers who are curious, driven, and ready to grow."
        actions={
          <Link href="#openings" className={cta({ variant: "light", size: "lg" })}>
            View open positions <ArrowDown size={18} />
          </Link>
        }
      >
        <StatStrip
          tone="dark"
          className="max-w-3xl"
          stats={[
            { value: "4", label: "Cities" },
            { value: "35+", label: "Years global" },
            { value: "2001", label: "In India since" },
          ]}
        />
      </PageHero>

      <Section>
        <SectionHeader title="Why build your career at BROAD" />
        <div className="grid gap-6 md:grid-cols-3">
          {WHY.map((w) => (
            <IconFeatureCard key={w.title} {...w} tone="slate" />
          ))}
        </div>
      </Section>

      <CareersBoard />
    </div>
  );
}

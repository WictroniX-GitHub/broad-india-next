import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, Building, Building2, Droplets, Fan, Gauge, Landmark, Recycle, Snowflake, TrainFront, Wind } from "lucide-react";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import IconFeatureCard from "@/components/ds/IconFeatureCard";
import CTABand from "@/components/ds/CTABand";
import { cta } from "@/components/ds/cta";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import bg from "@/public/images/bgbg.jpg";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/broad-group",
    title: "BROAD Group - Global Leader in Sustainable Technology",
    description: "Learn about BROAD Group, established in 1988, a pioneer in sustainable technology and energy-efficient solutions.",
  }),
  keywords: [
    "BROAD Group",
    "sustainable technology",
    "low carbon technology",
    "energy efficient solutions",
    "original innovation",
    "green technology",
    "environmental solutions",
    "BROAD global",
  ],
};

const SUBSIDIARIES = [
  { icon: <Snowflake size={22} />, title: "BROAD Air Conditioning Co., Ltd.", description: "Non-electric air conditioning systems are produced by BROAD Air Conditioning Co., Ltd." },
  { icon: <Fan size={22} />, title: "BROAD Clean Air Technology Co., Ltd.", description: "Produces fresh air machines and air purifiers." },
  { icon: <Building size={22} />, title: "BROAD Nearly Zero Energy Building Co., Ltd.", description: "Energy-efficient building retrofitting is the area of expertise for BROAD Nearly Zero Energy Building Co., Ltd." },
  { icon: <Gauge size={22} />, title: "BROAD Energy Service Co., Ltd.", description: "Provides energy consulting and management solutions." },
  { icon: <Recycle size={22} />, title: "BROAD Renewable Resources Co., Ltd.", description: "Uses waste resources to produce clean oil." },
  { icon: <Building2 size={22} />, title: "BROAD Sustainable Building Co., Ltd.", description: "Supplies ultra-strong and ultra-light B-CORE slabs." },
  { icon: <Droplets size={22} />, title: "BROAD Holon Co., Ltd.", description: "The B-CORE Holon buildings are manufactured in a plant by BROAD Holon Co., Ltd." },
  { icon: <Wind size={22} />, title: "BROAD Wind Power Co., Ltd.", description: "Develops wind power generation systems." },
  { icon: <Landmark size={22} />, title: "BROAD B-CORE Road and Bridge Co., Ltd.", description: "Bridges and elevated motorways are designed by BROAD B-CORE Road and Bridge Co., Ltd." },
  { icon: <TrainFront size={22} />, title: "BROAD Vacuum Loop Co., Ltd.", description: "Works on high-speed vacuum transportation." },
];

export default function BroadGroup() {
  return (
    <div className="bg-white">
      <PageHero
        variant="image"
        image={bg}
        imageAlt="BROAD Group"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "BROAD Group" }]}
        eyebrow="Our parent company"
        title="BROAD Group"
        subtitle="For Humanity’s Future: Using Original Low Carbon & Durable Technology for the Earth"
      >
        <StatStrip
          tone="dark"
          className="max-w-3xl"
          stats={[
            { value: "1988", label: "Established" },
            { value: "80+", label: "Countries served" },
            { value: "10", label: "Specialist subsidiaries" },
          ]}
        />
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader align="left" eyebrow="Who we are" title="Original innovation since 1988" className="mb-0 md:mb-0" />
          <div className="space-y-5 text-lg font-light leading-relaxed text-gray-600">
            <p>
              BROAD Group is a privately held company that was established in 1988 with RMB 30,000. Since its founding, the
              company has created hundreds of high-tech goods and has never imitated any of its competitors&apos; innovations.
            </p>
            <p>
              &quot;For Humanity&apos;s Future: Using Original Low Carbon &amp; Durable Technology for the Earth&quot; is the
              mission statement of BROAD Group, employing innovative, human-safe, and clean technology. The BROAD Group, which
              has its headquarters in Changsha, exports its goods to more than 80 nations.
            </p>
          </div>
        </div>
      </Section>

      <Section surface="slate">
        <SectionHeader title="BROAD subsidiaries" subtitle="The following is a list of BROAD subsidiaries:" />
        <FadeInStaggerContainer staggerDelay={0.06} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SUBSIDIARIES.map((s) => (
            <FadeInStaggerItem key={s.title}>
              <IconFeatureCard {...s} />
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
        <div className="mt-12 text-center">
          <a href="https://en.broad.com" target="_blank" rel="noopener noreferrer" className={cta({ variant: "outline" })}>
            Visit BROAD Group website <ArrowUpRight size={18} />
          </a>
        </div>
      </Section>

      <CTABand />
    </div>
  );
}

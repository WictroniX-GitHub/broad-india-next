import { caseStudies, caseStudyIndustries } from "@/data/caseStudies";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import SectionHeader from "@/components/ds/SectionHeader";
import StatStrip from "@/components/ds/StatStrip";
import CTABand from "@/components/ds/CTABand";
import CaseStudyCard from "@/components/CaseStudyCard";
import InstallationsExplorer from "@/components/case-study/InstallationsExplorer";
import ProductFAQ from "@/components/ProductFAQ";

const HUB_FAQS = [
  {
    question: "How long does a typical installation take?",
    answer: "A standard installation takes anywhere from 4 to 8 weeks depending on site readiness, system capacity, and integration complexity with existing infrastructure.",
  },
  {
    question: "Do you provide Annual Maintenance Contracts (AMC)?",
    answer: "Yes, BROAD India provides comprehensive AMCs covering preventive maintenance, performance optimization, and 24/7 technical support.",
  },
  {
    question: "Can your chillers integrate with existing BMS systems?",
    answer: "Absolutely. All BROAD chillers come with advanced proprietary control panels that seamlessly integrate with standard Building Management Systems via Modbus, BACnet, or TCP/IP.",
  },
];

export default function InstallationsHub() {
  const featured = caseStudies.find((c) => c.status === "complete");

  return (
    <div className="bg-white">
      <PageHero
        variant="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Installations" }]}
        eyebrow="Installations & case studies"
        title="Proven installations across India"
        subtitle="Explore how India’s leading enterprises leverage BROAD’s non-electric cooling technology to slash emissions and operational costs."
      >
        <StatStrip
          tone="dark"
          stats={[
            { value: "100+", label: "VAM installations in India" },
            { value: "2001", label: "Serving India since" },
            { value: `${caseStudyIndustries.length}`, label: "Industries in these studies" },
          ]}
          className="max-w-3xl"
        />
      </PageHero>

      {featured && (
        <Section surface="slate" className="pb-0 md:pb-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Featured case study</p>
          <CaseStudyCard study={featured} featured />
        </Section>
      )}

      <Section surface="slate">
        <SectionHeader align="left" title="All installations" subtitle="Filter by industry to find projects like yours." />
        <InstallationsExplorer studies={caseStudies} industries={caseStudyIndustries} />
      </Section>

      <Section>
        <SectionHeader title="Installation & service FAQs" />
        <ProductFAQ faqs={HUB_FAQS} bare />
      </Section>

      <CTABand />
    </div>
  );
}

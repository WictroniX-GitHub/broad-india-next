import { faqData } from "@/data/faqs";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import CTABand from "@/components/ds/CTABand";
import FAQExplorer from "@/components/faq/FAQExplorer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        variant="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about BROAD systems"
      />
      <Section surface="slate">
        <FAQExplorer faqs={faqData} />
      </Section>
      <CTABand
        title="Still have questions?"
        text="Can’t find the answer you’re looking for? Our team is here to help."
        primary={{ label: "Contact Us", href: "/contact-us" }}
      />
    </div>
  );
}

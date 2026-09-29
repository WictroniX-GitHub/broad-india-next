import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import bg from "@/public/images/contactBG.jpg";

const METHODS = [
  { icon: <Mail size={22} />, label: "Email", value: "akshay@broad.net", href: "mailto:akshay@broad.net" },
  { icon: <Phone size={22} />, label: "Sales (mobile)", value: "+91 94278 51584", href: "tel:+919427851584" },
  { icon: <Phone size={22} />, label: "Gurugram office", value: "0124 401 2824", href: "tel:+911244012824" },
];

const OFFICES = [
  {
    city: "Surat Office",
    tag: "Head office",
    address: "Office No. 209, Luxuria Trade Hub, Vr mall, Dumas Rd, Road, New Magdalla, Surat, Gujarat 395007",
  },
  {
    city: "Gurugram Office",
    tag: "North India",
    address: "N-14/27, DLF Phase-2, Gurugram, Haryana",
  },
];

const directions = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function ContactUs() {
  return (
    <div className="bg-white">
      <PageHero
        variant="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Contact Us"
        title="We’re here to help"
        subtitle="Talk to BROAD Air Conditioning India Pvt. Ltd. about vapour absorption chillers, CCHP and non-electric HVAC for your site."
        aside={
          <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <Image src={bg} alt="" fill priority sizes="(max-width: 1024px) 90vw, 32rem" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
          </div>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {METHODS.map((m) => (
            <a
              key={m.value}
              href={m.href}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-white group-hover:text-brand-700">
                {m.icon}
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">{m.label}</span>
                <span className="mt-0.5 block font-semibold text-white">{m.value}</span>
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <Section surface="slate">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Contact Details</p>
              <p className="mt-2 text-lg font-bold text-gray-900">BROAD Air Conditioning India Pvt. Ltd.</p>
            </div>
            {OFFICES.map((o) => (
              <div key={o.city} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-card md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-gray-900">{o.city}</h2>
                      <span className="tag-pill">{o.tag}</span>
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-600">{o.address}</p>
                    <a
                      href={directions(o.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Get directions <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

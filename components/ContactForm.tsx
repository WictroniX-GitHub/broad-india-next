"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import FormField from "@/components/ds/FormField";
import { cta } from "@/components/ds/cta";
import { FORMSPREE_CONTACT, useFormspree } from "@/components/ds/useFormspree";
import { cn } from "@/lib/utils";

const INTERESTS = [
  "Vapour Absorption Chiller",
  "CCHP / Tri-generation",
  "Power-Efficient (Magnetic Bearing) Chiller",
  "Absorption Heat Pump",
  "Pumpsets",
  "Service / AMC",
  "Other",
];

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  /** Pre-fills the product context when used on a product page. */
  productName?: string;
  className?: string;
}

/** Enquiry form (Formspree contact endpoint) with async submit and inline success state. */
export default function ContactForm({
  title = "Get in Touch",
  subtitle = "Tell us about your site and cooling requirement. We usually respond within one working day.",
  productName,
  className,
}: ContactFormProps) {
  const { status, handleSubmit, reset } = useFormspree(FORMSPREE_CONTACT);

  return (
    <div className={cn("rounded-3xl border border-gray-100 bg-white p-6 shadow-card md:p-10", className)}>
      {status === "success" ? (
        <div className="py-10 text-center" role="status">
          <CheckCircle2 size={52} className="mx-auto text-eco-500" />
          <h3 className="mt-4 text-2xl font-bold text-gray-900">Thank you, we&apos;ve received your message</h3>
          <p className="mt-2 text-gray-600">Our team will get back to you shortly.</p>
          <button type="button" onClick={reset} className={cn(cta({ variant: "outline", size: "sm" }), "mt-6")}>
            Send another message
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
          {subtitle && <p className="mt-2 font-light text-gray-600">{subtitle}</p>}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {productName && <input type="hidden" name="Product_Interest" value={productName} />}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="First name" name="fname" required autoComplete="given-name" />
              <FormField label="Last name" name="lname" required autoComplete="family-name" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Email" name="email" type="email" required autoComplete="email" />
              <FormField label="Phone" name="phone" type="tel" required autoComplete="tel" />
            </div>
            {!productName && <FormField as="select" label="Interested in" name="interest" options={INTERESTS} />}
            {productName && (
              <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Company" name="company" autoComplete="organization" />
                <FormField label="Required capacity" name="capacity" placeholder="e.g. 500 TR" hint="Approximate cooling load, if known" />
              </div>
            )}
            <FormField
              label="Subject"
              name="subject"
              required
              defaultValue={productName ? `Enquiry: ${productName}` : undefined}
            />
            <FormField as="textarea" label="Message" name="message" required placeholder="Heat source, required capacity (TR), site location…" />
            {status === "error" && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong. Please try again, or email akshay@broad.net.
              </p>
            )}
            <button type="submit" disabled={status === "submitting"} className={cn(cta({ size: "lg" }), "w-full md:w-auto")}>
              {status === "submitting" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {status === "submitting" ? "Sending…" : "Submit"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

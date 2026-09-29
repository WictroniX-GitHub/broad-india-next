"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import CareerCard from "@/components/CareerCard";
import SectionHeader from "@/components/ds/SectionHeader";
import FormField from "@/components/ds/FormField";
import { cta } from "@/components/ds/cta";
import { FORMSPREE_CAREERS, useFormspree } from "@/components/ds/useFormspree";
import { cn } from "@/lib/utils";

// const serviceEngineerHighlights = [
//   "Field service on Absorption Chillers & HVAC systems",
//   "PLC control system operation & maintenance",
//   "Energy-saving services, AMC & spare parts promotion",
//   "User training, CPD sessions & service reporting",
// ];

const OPENINGS = [
  // {
  //   title: "Service Engineer", role: "Service Engineer", location: "Surat, Gujarat", experience: "2–3 Years",
  //   salary: "3.5 – 7.5 LPA", qualification: "B.E. Mech / Elec", travelLabel: "Travel", travelOrFocus: "PAN India",
  //   highlights: serviceEngineerHighlights, jdLink: "/files/JD_Service engineer BROAD INDIA.pdf",
  // },
  {
    title: "Customer Manager",
    role: "Customer Manager",
    location: "Surat · Delhi · Mumbai · Raipur",
    experience: "2–3 Years",
    salary: "3.5 – 7.5 LPA",
    qualification: "B.E. Mech / Elec",
    travelLabel: "Focus",
    travelOrFocus: "Sales & Growth",
    highlights: [
      "Market mapping, intelligence & competitor profiling",
      "Lead generation, pipeline management & client acquisition",
      "Energy audits & customised solution proposals",
      "Financial modelling, cost-benefit analysis & contract sign-off",
    ],
    jdLink: "/files/JD_Customer Manager BROAD INDIA.pdf",
  },
  {
    title: "Project Design & Planning Engineer",
    role: "Project Engineer",
    location: "Surat, Gujarat",
    experience: "3–7 Years",
    salary: "Competitive",
    qualification: "B.E. Mech",
    travelLabel: "Focus",
    travelOrFocus: "Design & Engineering",
    highlights: [
      "Develop and review P&IDs, BOQ, and piping layouts",
      "Design instrumentation schemes and maintain CAD/BIM drawings",
      "Project planning, scheduling, and engineering deliverables",
      "Coordinate with clients, consultants, and site teams",
    ],
    jdLink: "/files/JD Project Design & Planning Engineer BROAD India.pdf",
  },
];

const ROLE_OPTIONS = [
  // { value: "Service Engineer", label: "Service Engineer – Surat" },
  { value: "Customer Manager", label: "Customer Manager / Sales Manager – Multiple Locations" },
  { value: "Project Engineer", label: "Project Engineer - Surat" },
];

export default function CareersBoard() {
  const [selectedRole, setSelectedRole] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const { status, handleSubmit, reset } = useFormspree(FORMSPREE_CAREERS, () => setSelectedRole(""));

  const handleApply = (role: string) => {
    setSelectedRole(role);
    reset();
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="openings" className="scroll-mt-28 bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeader eyebrow="Open positions" title="Find the role that fits your strengths" />
          <div className="grid gap-8 md:grid-cols-2">
            {OPENINGS.map((job) => (
              <CareerCard key={job.title} {...job} onApply={() => handleApply(job.role)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div ref={formRef} className="container mx-auto max-w-4xl scroll-mt-28 px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-card">
            <div className="relative overflow-hidden bg-slate-900 px-8 py-12 text-center md:px-16">
              <div aria-hidden className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
              <h2 className="relative text-3xl md:text-4xl font-bold text-white">Apply for a Position</h2>
              <p className="relative mt-3 text-white/60">Submit your details below and we&apos;ll be in touch within 3 working days.</p>
            </div>

            {status === "success" ? (
              <div className="p-10 text-center md:p-16" role="status">
                <CheckCircle2 size={52} className="mx-auto text-eco-500" />
                <h3 className="mt-4 text-2xl font-bold text-gray-900">Application submitted successfully!</h3>
                <p className="mt-2 text-gray-600">Thank you. Our team will review your profile and get back to you.</p>
                <button type="button" onClick={reset} className={cn(cta({ variant: "outline", size: "sm" }), "mt-6")}>
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="First name" name="firstName" required placeholder="Rahul" autoComplete="given-name" />
                  <FormField label="Last name" name="lastName" required placeholder="Sharma" autoComplete="family-name" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="Email address" name="email" type="email" required placeholder="rahul@example.com" autoComplete="email" />
                  <FormField label="Contact number" name="phone" type="tel" required placeholder="+91 98765 43210" autoComplete="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ff-role" className="block text-sm font-semibold text-gray-700">
                    Applying for<span className="ml-0.5 text-brand-600">*</span>
                  </label>
                  <select
                    id="ff-role"
                    name="role"
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full cursor-pointer rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">Select a role</option>
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>
                <FormField
                  label="Resume drive link"
                  name="resume"
                  type="url"
                  required
                  placeholder="Share the drive link of your resume"
                  hint="Google Drive, OneDrive or Dropbox link with view access."
                />
                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    There was an error submitting your application. Please try again.
                  </p>
                )}
                <button type="submit" disabled={status === "submitting"} className={cn(cta({ size: "lg" }), "w-full")}>
                  {status === "submitting" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {status === "submitting" ? "Submitting Application..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

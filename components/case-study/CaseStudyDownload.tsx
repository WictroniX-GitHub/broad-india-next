"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { CheckCircle2, Download, Loader2, X } from "lucide-react";
import FormField from "@/components/ds/FormField";
import { cta, type CtaProps } from "@/components/ds/cta";
import { FORMSPREE_CONTACT, useFormspree } from "@/components/ds/useFormspree";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "broad-case-study-unlocked";

function isUnlocked() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberUnlock() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable (private mode) - visitor will simply be asked again */
  }
}

function triggerDownload(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = href.split("/").pop() ?? "case-study.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

interface CaseStudyDownloadProps {
  client: string;
  document: { href: string; title: string; size: string };
  label?: string;
  variant?: CtaProps["variant"];
  size?: CtaProps["size"];
  className?: string;
}

/**
 * Soft-gated case study download. The visitor submits name / email / company to Formspree
 * (the contact form, tagged with a hidden `case_study` field), then the PDF downloads.
 * The unlock is remembered in localStorage so returning visitors are not asked again.
 */
export default function CaseStudyDownload({
  client,
  document: doc,
  label = "Download case study",
  variant = "primary",
  size = "md",
  className,
}: CaseStudyDownloadProps) {
  const [open, setOpen] = useState(false);
  const { status, handleSubmit, reset } = useFormspree(FORMSPREE_CONTACT, () => {
    rememberUnlock();
    triggerDownload(doc.href);
  });

  const onClick = () => {
    if (isUnlocked()) {
      triggerDownload(doc.href);
      return;
    }
    reset();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    window.document.getElementById("ff-name")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.document.addEventListener("keydown", onKey);
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.removeEventListener("keydown", onKey);
      window.document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={onClick} className={cn(cta({ variant, size }), className)}>
        <Download size={18} /> {label}
      </button>

      {/* Portal to <body>: ancestors with CSS transforms (hero entrance animation) would otherwise trap position:fixed */}
      {open &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cs-download-title"
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm animate-in fade-in duration-200 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl animate-in slide-in-from-bottom-6 duration-300 sm:rounded-3xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="py-6 text-center">
                <CheckCircle2 size={48} className="mx-auto text-eco-500" />
                <h2 id="cs-download-title" className="mt-4 text-2xl font-bold text-gray-900">
                  Your download has started
                </h2>
                <p className="mt-2 text-gray-600">Thanks for your interest. Our team may follow up about your project.</p>
                <a href={doc.href} download className={cn(cta({ variant: "outline", size: "sm" }), "mt-6")}>
                  <Download size={16} /> Download again
                </a>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Case study</p>
                <h2 id="cs-download-title" className="mt-2 pr-8 text-2xl font-bold tracking-tight text-gray-900">
                  Get the {client} case study
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Tell us where to reach you and the PDF ({doc.size}) downloads immediately.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input type="hidden" name="_subject" value={`Case study download: ${client}`} />
                  <input type="hidden" name="case_study" value={client} />
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <FormField label="Full name" name="name" required autoComplete="name" />
                  <FormField label="Work email" name="email" type="email" required autoComplete="email" />
                  <FormField label="Company" name="company" required autoComplete="organization" />
                  <FormField label="Phone" name="phone" type="tel" autoComplete="tel" hint="Optional" />
                  {status === "error" && (
                    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      Something went wrong. Please try again, or email akshay@broad.net.
                    </p>
                  )}
                  <button type="submit" disabled={status === "submitting"} className={cn(cta({ size: "lg" }), "w-full")}>
                    {status === "submitting" ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                    {status === "submitting" ? "Sending…" : "Download PDF"}
                  </button>
                  <p className="text-center text-xs text-gray-400">We use your details only to respond to your enquiry.</p>
                </form>
              </>
            )}
          </div>
        </div>,
          document.body
        )}
    </>
  );
}

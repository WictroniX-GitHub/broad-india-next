"use client";

import { useState, type FormEvent } from "react";

export const FORMSPREE_CONTACT = "https://formspree.io/f/xqeypqdv";
export const FORMSPREE_CAREERS = "https://formspree.io/f/mnjgpdbl";

type Status = "idle" | "submitting" | "success" | "error";

/** Async Formspree submit with inline status, replacing the full-page Formspree redirect. */
export function useFormspree(endpoint: string, onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  return { status, handleSubmit, reset: () => setStatus("idle") };
}

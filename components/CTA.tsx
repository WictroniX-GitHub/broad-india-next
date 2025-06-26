"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function CTA() {
  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 shadow-lg rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Looking to slash energy costs and cut carbon emissions?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Get in touch today to explore how our non-electric cooling systems and
          CCHP solutions can empower your business — locally in Surat & Gurgaon,
          nationwide.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="mailto:info@broadindia.com"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            📧 info@broadindia.com
          </a>
          <a
            href="tel:9427851584"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            📞 94278 51584
          </a>
          <a
            href="tel:01244012824"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            📞 0124‑4012824
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

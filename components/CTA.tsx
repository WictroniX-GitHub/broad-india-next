"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function CTA() {
  return (
    <div className="container mx-auto mt-10 px-4 md:px-6">
      <div className="relative overflow-hidden bg-white rounded-xl border border-gray-100 p-6 md:p-8" style={{ boxShadow: "var(--shadow-md)" }}>
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-green-500" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Tagline */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              India&apos;s Trusted Leader in{" "}
              <span className="text-blue-700">Non-Electric Cooling</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Decarbonizing India&apos;s cooling with waste-heat HVAC and energy-efficient absorption chillers
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <a
                href="mailto:akshay@broad.net"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
              >
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                akshay@broad.net
              </a>
              <a
                href="tel:9427851584"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
              >
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                +91 94278 51584
              </a>
            </div>
            <Link
              href="/contact-us"
              className="btn-primary text-sm whitespace-nowrap"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Industry {
  id: string | number;
  name: string;
  challenge: string;
  icon: React.ReactNode;
  slug?: string;
}

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const href = industry.slug ? `/industries/${industry.slug}` : "#";

  return (
    <Link href={href} className="block h-full group">
      <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full flex flex-col items-start hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 group-hover:bg-blue-100/50 transition-transform duration-700 pointer-events-none" />
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm border border-blue-100/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10">
          {industry.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight z-10 group-hover:text-blue-600 transition-colors">
          {industry.name}
        </h3>
        <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow z-10">
          {industry.challenge}
        </p>

        {/* Link indicator */}
        <div className="mt-auto flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300 z-10">
          <span className="mr-2">Explore Solutions</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

"use client";

import React from "react";

type CareerCardProps = {
  title: string;
  location: string;
  experience: string;
  salary: string;
  qualification: string;
  travelOrFocus: string;
  travelLabel: string;
  highlights: string[];
  jdLink: string;
  onApply: () => void;
};

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  location,
  experience,
  salary,
  qualification,
  travelOrFocus,
  travelLabel,
  highlights,
  jdLink,
  onApply,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      {/* Card Header */}
      <div className="p-7 border-b border-gray-100 bg-gradient-to-br from-[#0D1E3C] to-[#1A3460] relative overflow-hidden">
        <div className="absolute -right-5 -top-5 w-24 h-24 rounded-full bg-blue-400/10" />
        <div className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 text-[#00A3E0] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-pulse" />
          Now Hiring
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-2 relative z-10">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-white/60 text-sm relative z-10">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-7 flex-1 flex flex-col gap-6">
        {/* Meta Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              Experience
            </div>
            <div className="text-sm font-semibold text-[#0D1E3C]">
              {experience}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              Salary Range
            </div>
            <div className="text-sm font-semibold text-[#0D1E3C]">{salary}</div>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              Qualification
            </div>
            <div className="text-sm font-semibold text-[#0D1E3C]">
              {qualification}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              {travelLabel}
            </div>
            <div className="text-sm font-semibold text-[#0D1E3C]">
              {travelOrFocus}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest uppercase text-blue-700 mb-3">
            Role Highlights
          </h4>
          <ul className="space-y-2.5">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="text-[#00A3E0] font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-7 border-t border-gray-100 flex gap-3">
        <button
          onClick={onApply}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Apply Now
        </button>
        <a
          href={jdLink}
          download
          className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl text-gray-500 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 text-sm font-semibold transition-all duration-200 whitespace-nowrap active:scale-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Full JD
        </a>
      </div>
    </div>
  );
};

export default CareerCard;

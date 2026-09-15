"use client";

import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/lib/useCountUp";
import { Zap, Leaf, Building2 } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  end: number;
  suffix: string;
  label: string;
  inView: boolean;
}

function StatCard({ icon, end, suffix, label, inView }: StatCardProps) {
  const { displayValue } = useCountUp({ end, enabled: inView });

  return (
    <div className="flex-1 text-center px-4 py-6 card-hover-lift rounded-xl bg-white/10 backdrop-blur-sm">
      <div className="flex justify-center mb-3">
        <div className="icon-badge bg-white/20 text-white">
          {icon}
        </div>
      </div>
      <div className="font-bold text-4xl md:text-5xl text-white tabular-nums">
        {displayValue}{suffix}
      </div>
      <p className="mt-2 text-white/80 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Figures() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full py-12 md:py-16 flex justify-center items-center">
      <div
        ref={ref}
        className="w-11/12 md:w-4/5 max-w-5xl rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 flex flex-col md:flex-row items-stretch justify-evenly gap-4 p-6 md:p-8"
        style={{ boxShadow: "var(--shadow-xl)" }}
      >
        <StatCard
          icon={<Zap size={24} />}
          end={500}
          suffix="+"
          label="MW HVAC capacity installed in industrial setups"
          inView={inView}
        />
        <StatCard
          icon={<Leaf size={24} />}
          end={697000}
          suffix="+"
          label="TCO₂e reduction in carbon footprint"
          inView={inView}
        />
        <StatCard
          icon={<Building2 size={24} />}
          end={200}
          suffix="+"
          label="VAM/VAC projects completed nationwide"
          inView={inView}
        />
      </div>
    </div>
  );
}

"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Figures() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div className="w-full h-[32rem] md:h-[16rem] flex justify-center items-center">
      <div className="shadow-sm w-4/5 h-full rounded-2xl bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col md:flex-row items-center justify-evenly text-white p-6">
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref1}>
            {inView1 && <CountUp end={500} />}+
          </div>
          <p className="mt-2">
            MW HVAC capacity installed in industrial setups
          </p>
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref2}>
            {inView2 && <CountUp end={697000} />}+
          </div>
          <p className="mt-2">TCO₂e reduction in carbon footprint</p>
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref3}>
            {inView3 && <CountUp end={200} />}+
          </div>
          <p className="mt-2">VAM/VAC projects completed nationwide</p>
        </div>
      </div>
    </div>
  );
}

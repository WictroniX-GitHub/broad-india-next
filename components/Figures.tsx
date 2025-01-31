"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Figures() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerHeight > window.innerWidth);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  return (
    <div className="w-full h-[32rem] md:h-[16rem] flex justify-center items-center">
      <div className="shadow-sm w-4/5 h-full rounded-2xl bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col md:flex-row items-center justify-evenly text-white p-6">
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref1}>
            {inView1 && <CountUp end={478} />}
          </div>
          <p className="mt-2">MW+ Air Conditioning installed in India</p>
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref2}>
            {inView2 && <CountUp end={697000} />}
          </div>
          <p className="mt-2">TCO2e Reduction in Carbon Footprint</p>
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold text-4xl" ref={ref3}>
            {inView3 && <CountUp end={360000} />}
          </div>
          <p className="mt-2">Trees saved</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "@/public/images/bgbg.jpg";

export default function BroadGroup() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[60vh] bg-cover bg-center bg-fixed flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-10">
          <h1 className="text-5xl font-bold text-white">BROAD Group</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>
              BROAD Group is a privately-owned enterprise founded in 1988 with
              RMB 30,000. The company has developed hundreds of hi-tech products
              and has never copied any technology of its peers since inception.
              The mission of BROAD Group is “For Humanity's Future: Using
              original low carbon & durable technology for the earth. Using
              original clean & safe technology for humans.” Headquartered in
              Changsha, BROAD Group has exported products to over 80 countries.
              BROAD subsidiaries are listed below:
            </p>
            <ol className="list-decimal ml-5 mt-3 space-y-2">
              <li>
                BROAD Air Conditioning Co., Ltd. - Manufactures non-electric air
                conditioning systems.
              </li>
              <li>
                BROAD Clean Air Technology Co., Ltd. - Produces fresh air
                machines and air purifiers.
              </li>
              <li>
                BROAD Nearly Zero Energy Building Co., Ltd. - Specializes in
                energy-efficient building retrofitting.
              </li>
              <li>
                BROAD Energy Service Co., Ltd. - Provides energy consulting and
                management solutions.
              </li>
            </ol>
          </div>
          <div>
            <ol start={5} className="list-decimal ml-5 mt-3 space-y-2">
              <li>
                BROAD Renewable Resources Co., Ltd. - Produces clean oil from
                waste materials.
              </li>
              <li>
                BROAD Sustainable Building Co., Ltd. - Supplies ultra-strong and
                ultra-light B-CORE slabs.
              </li>
              <li>
                BROAD Holon Co., Ltd. - Manufactures factory-made B-CORE Holon
                buildings.
              </li>
              <li>
                BROAD Wind Power Co., Ltd. - Develops wind power generation
                systems.
              </li>
              <li>
                BROAD B-CORE Road and Bridge Co., Ltd. - Designs elevated
                expressways and bridges.
              </li>
              <li>
                BROAD Vacuum Loop Co., Ltd. - Works on high-speed vacuum
                transportation.
              </li>
            </ol>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="http://en.broad.com" className="text-blue-600 font-semibold">
            Visit BROAD Group website
          </a>
        </div>
      </div>
    </div>
  );
}

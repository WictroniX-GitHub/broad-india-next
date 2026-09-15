"use client";

import Image from "next/image";
import bhilosa from "@/public/images/bhilosa.png";
import ntpc from "@/public/images/NTPC_Logo.svg.png";
import itc from "@/public/images/ITC_Limited_Logo.svg.png";

const row1 = [
  { name: "NTPC", image: ntpc },
  { name: "ITC", image: itc },
  { name: "IOCL", image: "https://download.logo.wine/logo/Indian_Oil_Corporation/Indian_Oil_Corporation-Logo.wine.png" },
  { name: "Bhilosa", image: bhilosa },
  { name: "JSW", image: "/images/JSWSTEEL.NS-5d2dda26.png" },
  { name: "DLF", image: "/images/DLF_logo.svg" },
  { name: "AM/NS", image: "/clients/AM_NS.png" },
  { name: "Adani Petrochemicals", image: "/clients/Adani_Petrochemicals.png" },
  { name: "Hindalco", image: "/clients/Aditya_Birla_Hindalco.png" },
  { name: "DCM", image: "/clients/DCM.png" },
  { name: "Deepak Fertiliser", image: "/clients/Deepak_Feritilizer.png" },
  { name: "FACT", image: "/clients/Fact.png" },
];

const row2 = [
  { name: "Filatex", image: "/clients/Fliatex.png" },
  { name: "GFL", image: "/clients/GFL.png" },
  { name: "Gujarat Gas", image: "/clients/Gujarat_Gas.png" },
  { name: "Hero", image: "/clients/Hero.png" },
  { name: "IBM", image: "/clients/IBM.png" },
  { name: "Indian Peroxide", image: "/clients/Indian_Peroxide.png" },
  { name: "Nuberg EPC", image: "/clients/Nuberg_EPC.png" },
  { name: "Oki Pulp & Paper", image: "/clients/Oki_Pulp.png" },
  { name: "PGP Glass", image: "/clients/PGP_Glass.png" },
  { name: "Paharpur", image: "/clients/Paharpur.png" },
  { name: "SPL", image: "/clients/SPL.png" },
  { name: "Tjiwi Kimia", image: "/clients/Tjiwi_kimia.png" },
];

export default function TrustedClients() {
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-500 mt-4 text-lg md:text-xl font-light">
          Powering India&apos;s largest industrial and commercial facilities
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative overflow-hidden flex flex-col gap-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Forward) */}
        <div className="marquee-container w-full">
          <div className="marquee-track py-2">
            {duplicatedRow1.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-10 hover:scale-105 transition-transform duration-300 w-64 h-24"
                title={client.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={220}
                    height={100}
                    className="object-contain max-h-20 w-auto"
                    unoptimized={typeof client.image === 'string' && client.image.startsWith('http')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse) */}
        <div className="marquee-container w-full">
          <div className="marquee-track py-2" style={{ animationDirection: "reverse" }}>
            {duplicatedRow2.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-10 hover:scale-105 transition-transform duration-300 w-64 h-24"
                title={client.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={220}
                    height={100}
                    className="object-contain max-h-20 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

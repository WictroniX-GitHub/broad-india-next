"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import bhilosa from "@/public/images/bhilosa.png";

const clients = [
  {
    name: "NTPC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Thermal_Power_logo.svg/1200px-National_Thermal_Power_logo.svg.png",
    link: "https://www.ntpc.co.in/",
  },
  {
    name: "ITC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png",
    link: "https://www.itcportal.com/",
  },
  {
    name: "IOCL",
    image:
      "https://download.logo.wine/logo/Indian_Oil_Corporation/Indian_Oil_Corporation-Logo.wine.png",
    link: "https://iocl.com/",
  },
  {
    name: "Bhilosa",
    image: bhilosa,
    link: "https://bhilosa.com/",
  },
  {
    name: "JSW",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png",
    link: "https://www.jsw.in/",
  },
  {
    name: "DLF",
    image:
      "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    link: "https://www.dlf.in/",
  },
];

export default function TrustedClients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerHeight > window.innerWidth);
  }, []);

  return (
    <div className="my-20 bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center">Trusted Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <a
            key={index}
            href={client.link}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay={`${100 * (index + 1)}`}
          >
            <Image
              src={client.image}
              alt={client.name}
              width={200}
              height={100}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

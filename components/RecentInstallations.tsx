"use client";

import Image from "next/image";
import itcImg from "@/public/images/itc.webp";

const installations = [
  {
    id: 1,
    title: "JSW Bellary",
    image:
      "https://www.jswsteel.in/sites/default/files/assets/cache/images//facilitiesvijayanagarsection41-resize-552x290-a7542dd51f-3f1af835a4930653.png",
    description:
      "The JSW group is amongst the leading conglomerates in India, with presence across the vital sectors of the Indian economy.",
  },
  {
    id: 2,
    title: "Indian Oil Corporation Vadodara, Gujarat",
    image:
      "https://www.constructionweekonline.in/cloud/2021/11/24/StFDepyN-IOCL-6.jpg",
    description:
      "Indian Oil is India's flagship national oil company with business interests straddling the entire hydrocarbon value chain.",
  },
  {
    id: 3,
    title: "ITC",
    image: itcImg,
    description:
      "ITC group is one of the biggest business houses in India. BROAD will supply VAM for their 4 plants. Application - Process Cooling.",
  },
];

export default function RecentInstallations() {
  return (
    <div className="w-full my-40 py-20 bg-gradient-to-t from-blue-700 to-blue-500 text-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Recent Installations
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {installations.map((install) => (
          <div
            key={install.id}
            className="bg-white/40 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="relative w-full h-64">
              <Image
                src={install.image}
                alt={install.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h4 className="mt-4 text-xl font-bold text-white">
              {install.title}
            </h4>
            <p className="mt-2 text-white/75">{install.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

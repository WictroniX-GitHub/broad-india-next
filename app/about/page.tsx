"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Tab } from "@headlessui/react";

import bg from "@/public/images/broadIndGrp.jpeg";
import logo from "@/public/images/logo.png";
import bti from "@/public/images/broad_town_intro3.jpg";
import awards1 from "@/public/images/awards1.jpeg";
import awards2 from "@/public/images/awards2.jpeg";
import awards3 from "@/public/images/awards3.jpeg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-top flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              BROAD Air Conditioning India Pvt. Ltd.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              A subsidiary of BROAD Group, China, BROAD has been serving the
              Indian market since 2001, offering innovative and sustainable HVAC
              solutions. With over 200 VAM installations, we provide
              comprehensive service, operations, and maintenance (O&M) across
              India.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-6">
              Key Achievements
            </h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm md:text-base">
              <li>
                Asia&apos;s Largest CHP Project: Managing the largest combined
                heat and power (CHP) project in DLF, Gurugram.
              </li>
              <li>
                Industry Applications: BROAD chillers are utilized in
                petrochemical, food processing, textile, healthcare, and office
                sectors.
              </li>
              <li>
                Commitment to Sustainability: Our dedication to delivering
                energy-efficient air conditioning systems that reduce
                environmental impact supports our vision for a greener planet.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="BROAD India Logo"
              width={160}
              height={80}
              className="w-32 md:w-40"
            />
          </div>
        </div>
      </div>

      <Tab.Group>
        <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tab List Box */}
          <Tab.List className="bg-gray-100 p-4 rounded-lg shadow-lg md:col-span-1 flex md:flex-col overflow-auto md:overflow-visible">
            {["About", "Awards", "BROAD Town HQ"].map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `w-full md:w-auto px-4 py-2 rounded-lg text-left ${
                    selected ? "bg-blue-600 text-white" : "text-gray-700"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          {/* Tab Panels (Content) */}
          <Tab.Panels className="md:col-span-3 bg-white p-6 rounded-lg shadow-lg">
            {/* About Section - Default */}
            <Tab.Panel>
              <h2 className="text-3xl font-semibold">About BROAD India</h2>
              <p className="mt-4 text-lg text-gray-700">
                BROAD India has been at the forefront of the absorption chiller
                market since 2001, delivering innovative and thermally driven
                absorption technology for modern industries.
              </p>
            </Tab.Panel>

            {/* Awards Section */}
            <Tab.Panel>
              <h2 className="text-3xl font-semibold">
                Awards and Recognitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Image src={awards1} alt="Award 1" className="rounded-lg" />
                <Image src={awards2} alt="Award 2" className="rounded-lg" />
                <Image src={awards3} alt="Award 3" className="rounded-lg" />
              </div>
            </Tab.Panel>

            {/* BROAD Town HQ */}
            <Tab.Panel>
              <h2 className="text-3xl font-semibold">
                BROAD Town Headquarters
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                BROAD Town is the headquarters of BROAD Group, located in the
                eastern suburbs of Changsha City, covering an area of 1km².
              </p>
              <Image
                src={bti}
                alt="BROAD Town"
                className="w-full mt-6 rounded-lg"
              />
            </Tab.Panel>

            {/* Add similar <Tab.Panel> blocks for History, Culture, etc. */}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

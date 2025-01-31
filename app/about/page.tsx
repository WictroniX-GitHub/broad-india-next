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
    <div>
      <div
        className="w-full h-[75vh] bg-cover bg-top flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-10">
          <h1 className="text-5xl font-bold text-white">About</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">
              BROAD Air Conditioning India Pvt. Ltd.
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              A subsidiary of BROAD Group, China, BROAD has been serving the
              Indian market since 2001, offering innovative and sustainable HVAC
              solutions. With over 200 VAM installations, we provide
              comprehensive service, operations, and maintenance (O&M) across
              India.
            </p>
            <h3 className="text-2xl font-semibold mt-6">Key Achievements</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                Asia's Largest CHP Project: Managing the largest combined heat
                and power (CHP) project in DLF, Gurugram.
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
            <Image src={logo} alt="BROAD India Logo" width={200} height={100} />
          </div>
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex justify-center space-x-4 border-b-2 border-gray-300 py-4">
          {[
            "About",
            "Awards",
            "History",
            "Culture",
            "Declaration",
            "Values",
            "BROAD Town HQ",
            "FAQ",
          ].map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                selected
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-2"
                  : "text-gray-700 hover:text-blue-500 pb-2"
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="max-w-6xl mx-auto px-6 mt-10">
          <Tab.Panel>
            <h2 className="text-3xl font-semibold">
              About BROAD Air Conditioning India Pvt. Ltd.
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              BROAD India has been at the forefront of the absorption chiller
              market since its inception in 2001, delivering innovative and
              thermally driven absorption technology for modern industries.
            </p>
            <h3 className="text-2xl font-semibold mt-6">
              Dedicated Customer Support
            </h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>
                For optimal system operation, proper training is required.
              </li>
              <li>Consistent service and maintenance.</li>
              <li>Easy access to replacement parts and units.</li>
              <li>Sustainable and flexible solutions.</li>
            </ul>
          </Tab.Panel>

          <Tab.Panel>
            <h2 className="text-3xl font-semibold">Awards and Recognitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Image src={awards1} alt="Award 1" className="rounded-lg" />
              <Image src={awards2} alt="Award 2" className="rounded-lg" />
              <Image src={awards3} alt="Award 3" className="rounded-lg" />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <h2 className="text-3xl font-semibold">
              A Brief Introduction to BROAD Town
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
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

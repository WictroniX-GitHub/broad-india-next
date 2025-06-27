"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function CTA() {
  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "India’s Trusted Leader in <span class='text-blue-500'>Non-Electric Chillers and CCHP Systems.</span>"
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "Decarbonizing India’s Cooling: <span class='text-blue-500'>Waste-Heat HVAC and Energy-Efficient Chillers.</span>"
                )
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h2>
        <hr className="my-4" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:info@broadindia.com"
              className="flex items-center text-black"
            >
              📧 info@broadindia.com
            </a>
            <a href="tel:9427851584" className="flex items-center text-black">
              📞 9427851584
            </a>
            <a href="tel:01244012824" className="flex items-center text-black">
              📞 01244012824
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
            <span className="text-gray-600 mr-2">
              Do you have a project we can help with?
            </span>
            <Link
              href="/contact-us"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

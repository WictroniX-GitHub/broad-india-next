"use client";

import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import bg from "@/public/images/contactBG.jpg";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[75vh] bg-cover bg-center bg-fixed flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-10">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20 px-6">
        <h2 className="text-3xl font-semibold mb-5">We&apos;re Here to Help</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="text-gray-700 font-medium">
              BROAD Air Conditioning India Pvt. Ltd.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <span className="mr-3 text-blue-500">📧</span>
                <a href="mailto:info@broadindia.com" className="text-blue-600">
                  info@broadindia.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-green-500">📞</span>
                <a href="tel:9427851584" className="text-gray-700">
                  9427851584
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-green-500">📞</span>
                <a href="tel:01244012824" className="text-gray-700">
                  01244012824
                </a>
              </div>
            </div>
            <hr className="my-4" />
            <h4 className="text-lg font-semibold">Surat Office:</h4>
            <p className="text-gray-700">
              908, Luxuria Trade Hub, Near VR Mall, Surat - 395007
            </p>
            <hr className="my-4" />
            <h4 className="text-lg font-semibold">Gurugram Office:</h4>
            <p className="text-gray-700">
              N-14/27, DLF Phase-2, Gurugram, Haryana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

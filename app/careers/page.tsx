"use client";

import React, { useState, useEffect } from "react";
import CareerCard from "@/components/CareerCard";
import bg from "@/public/images/careers.jpg";

const Careers = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="w-full h-[75vh] bg-cover bg-top flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Career
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-24 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">
          Join Our Global Team!
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <CareerCard position="Service Engineer" location="Surat" />
          <CareerCard
            position="Sales Engineer"
            location="Surat, Gurgaon and Bangalore"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <p>
            We're looking for talented Sales and Service professionals in Surat
            and Bangalore to help bring our cutting-edge HVAC products to the
            market.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Apply Now</h4>
            <form
              id="job_application_form"
              action="https://formsubmit.co/email"
              method="post"
              encType="multipart/form-data"
              onSubmit={() => setLoading(true)}
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/careers"
              />
              <input
                type="hidden"
                name="_subject"
                value="Careers: BROAD India"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="First_Name"
                    className="block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="First_Name"
                    id="First_Name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Last_Name"
                    className="block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="Last_Name"
                    id="Last_Name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="Email_Address"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email_Address"
                    id="Email_Address"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Contact_Number"
                    className="block text-sm font-medium"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="Contact_Number"
                    id="Contact_Number"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="resume" className="block text-sm font-medium">
                  Upload Your Resume
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  name="resume"
                  id="resume"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

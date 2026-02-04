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
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] md:h-[75vh] bg-cover bg-top flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 md:p-10">
          <h1
            className="text-white text-3xl md:text-6xl font-bold"
            data-aos="fade-up"
          >
            Career
          </h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto py-12 md:py-24 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Join Our Global Team!
        </h2>

        {/* Job Listings */}
        <div className="flex flex-wrap justify-center gap-6">
          <CareerCard position="Service Engineer" location="Surat" />
          <CareerCard
            position="Sales Engineer"
            location="Surat, Gurgaon and Bangalore"
          />
        </div>

        {/* About the Job Section */}
        <div className="max-w-4xl mx-auto mt-12 space-y-6 text-gray-700">
          <p className="text-lg md:text-xl">
            We&apos;re looking for talented Sales and Service professionals in
            Surat and Bangalore to help bring our cutting-edge HVAC products to
            the market.
          </p>

          {/* Who We're Looking For */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Who We&apos;re Looking For:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Engineers (Electrical and Mechanical)</li>
            <li>MBA graduates working in relevant fields</li>
            <li>Team players with a global mindset</li>
            <li>Visionaries who thrive in a dynamic environment</li>
            <li>Problem solvers and forward-thinkers</li>
            <li>Passionate, dedicated professionals</li>
          </ul>
          {/* </div> */}

          {/* Key Responsibilities */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Key Responsibilities:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Build and maintain strong relationships with HVAC contractors and
              clients.
            </li>
            <li>
              Identify and pursue new business opportunities within the HVAC
              industry.
            </li>
            <li>Provide expert advice on our range of HVAC products.</li>
            <li>Achieve and exceed sales targets.</li>
            <li>Stay up-to-date with industry trends and product knowledge.</li>
          </ul>
          {/* </div> */}

          {/* What We Offer */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            What We Offer:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Competitive salary and commission structure.</li>
            <li>Collaborative and growth-oriented work environment.</li>
            <li>Opportunity to make a significant impact in the industry.</li>
          </ul>
          <p className="mt-4 font-semibold text-lg">
            Ready to be a part of our global success story? Apply today and be a
            part of something big!
          </p>
        </div>
        {/* </div> */}

        {/* Apply Now Form */}
        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Apply Now</h3>
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
              value="https://www.broadindia.com/careers"
            />
            <input type="hidden" name="_subject" value="Careers: BROAD India" />

            {/* Name Fields */}
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

            {/* Email & Contact */}
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

            {/* Resume Upload */}
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

            {/* Submit Button */}
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
  );
};

export default Careers;

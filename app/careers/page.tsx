"use client";

import React, { useState, useEffect, useRef } from "react";
import CareerCard from "@/components/CareerCard";


const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApply = (role: string) => {
    setSelectedRole(role);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjgpdbl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        (e.target as HTMLFormElement).reset();
        setSelectedRole("");
      } else {
        alert("There was an error submitting your application. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);

      alert("There was an error submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const serviceEngineerHighlights = [
    "Field service on Absorption Chillers & HVAC systems",
    "PLC control system operation & maintenance",
    "Energy-saving services, AMC & spare parts promotion",
    "User training, CPD sessions & service reporting",
  ];

  const customerManagerHighlights = [
    "Market mapping, intelligence & competitor profiling",
    "Lead generation, pipeline management & client acquisition",
    "Energy audits & customised solution proposals",
    "Financial modelling, cost-benefit analysis & contract sign-off",
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-screen font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-[#0D1E3C] overflow-hidden py-24 md:py-32 px-6">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgba(0,163,224,0.18)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_-10%,rgba(0,86,168,0.3)_0%,transparent_60%)]" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,163,224,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,163,224,0.15) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-400/10 border border-blue-400/30 text-[#00A3E0] text-[11px] font-bold tracking-[3px] uppercase px-5 py-2 rounded-full mb-8">
            We&apos;re Hiring
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Join Our <span className="text-[#00A3E0]">Global</span><br />Team in India
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Be part of a mission-driven company bringing world-class sustainable cooling technology to India. We&apos;re looking for engineers who are curious, driven, and ready to grow.
          </p>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00A3E0]">4</div>
              <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mt-1">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00A3E0]">35+</div>
              <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mt-1">Years Global</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00A3E0]">2001</div>
              <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mt-1">In India Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1E3C] mb-4 tracking-tight">Open Positions</h2>
          <p className="text-gray-500 text-lg">Find the role that fits your strengths.</p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <CareerCard 
            title="Service Engineer"
            location="Surat, Gujarat"
            experience="2–3 Years"
            salary="3.5 – 7.5 LPA"
            qualification="B.E. Mech / Elec"
            travelLabel="Travel"
            travelOrFocus="PAN India"
            highlights={serviceEngineerHighlights}
            jdLink="/files/JD_Service engineer BROAD INDIA.pdf"
            onApply={() => handleApply("Service Engineer")}
          />
          <CareerCard 
            title="Customer Manager"
            location="Surat · Delhi · Mumbai · Raipur"
            experience="2–3 Years"
            salary="3.5 – 7.5 LPA"
            qualification="B.E. Mech / Elec"
            travelLabel="Focus"
            travelOrFocus="Sales & Growth"
            highlights={customerManagerHighlights}
            jdLink="/files/JD_Customer Manager BROAD INDIA.pdf"
            onApply={() => handleApply("Customer Manager")}
          />
        </div>

        {/* Application Form Section */}
        <div ref={formRef} className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/5 items-center">
          <div className="bg-gradient-to-br from-[#0D1E3C] to-[#1A3460] py-12 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Apply for a Position</h2>
            <p className="text-white/50 text-base">Submit your details below and we&apos;ll be in touch within 3 working days.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-8 md:p-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">First Name</label>
                <input 
                  required
                  type="text" 
                  name="firstName" 
                  placeholder="Rahul" 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Last Name</label>
                <input 
                  required
                  type="text" 
                  name="lastName" 
                  placeholder="Sharma" 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email" 
                  placeholder="rahul@example.com" 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Contact Number</label>
                <input 
                  required
                  type="tel" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Applying For</label>
              <select 
                required
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7E92' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 24px center'
                }}
              >
                <option value="">— Select a role —</option>
                <option value="Service Engineer">Service Engineer – Surat</option>
                <option value="Customer Manager">Customer Manager / Sales Manager – Multiple Locations</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Resume Drive Link</label>
              <input 
                required
                type="url" 
                name="resume" 
                placeholder="Share the drive link of your resume" 
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-[#0D1E3C] outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-[0.98]"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              )}
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </div>
      </main>

      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#0e7c3e] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <p className="font-semibold">Application submitted successfully!</p>
        </div>
      </div>

    </div>
  );
};

export default Careers;

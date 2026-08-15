import React from "react";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio & Case Studies | Markaz Enterprises Karachi",
  description: "Explore Markaz Enterprises case studies: 100kW solar installations, luxury construction projects, corporate interior fitouts, custom ERP software, and IP CCTV networks across Pakistan.",
  keywords: [
    "Markaz Enterprises Portfolio",
    "Solar Installation Case Study Karachi",
    "Construction Portfolio Pakistan",
    "Corporate Interior Fitout Case Study",
    "Software ERP Project Portfolio",
    "CCTV Case Study Industrial",
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative min-h-[280px] lg:min-h-[340px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/88 via-slate-900/75 to-indigo-900/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 text-center space-y-4 w-full">
            <span className="inline-flex px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black tracking-widest text-blue-200 uppercase backdrop-blur-sm">
              Proof of Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Our Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Speaks for Itself</span>
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              500+ completed projects across 11 specialist divisions — measurable results, transparent timelines, and client-verified outcomes.
            </p>
          </div>
        </section>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}

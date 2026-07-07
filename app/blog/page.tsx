import React from "react";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Insights & Expert Blog | Markaz Enterprises",
  description: "Read expert guides on solar energy net metering, grey structure construction costs in Pakistan, consolidated ERP benefits, and digital marketing strategies from Markaz Enterprises.",
  keywords: [
    "Solar Energy Blog Pakistan",
    "Construction Cost Guide Karachi 2026",
    "ERP Software Benefits",
    "Digital Marketing Tips Pakistan",
    "Industry Insights Karachi",
    "Net Metering Guide 2026",
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center space-y-5 w-full">
            <span className="inline-flex px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-black tracking-widest text-blue-200 uppercase backdrop-blur-sm">
              Industry Intelligence
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Expert Insights &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Industry Guides</span>
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Data-driven articles on solar energy, construction costs, enterprise software, and digital growth strategies for Pakistani businesses.
            </p>
          </div>
        </section>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

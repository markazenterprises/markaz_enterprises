import React from "react";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Markaz Enterprises — Free Consultation Karachi",
  description: "Reach out to Markaz Enterprises for a free project consultation in Karachi. Construction, Solar Energy, Software Development, CCTV, Interior Design — call or WhatsApp today.",
  keywords: [
    "Contact Markaz Enterprises",
    "Free Construction Consultation Karachi",
    "Solar Energy Quote Pakistan",
    "Project Inquiry Karachi",
    "Office Contact Karachi",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-100" style={{ background: "#060c1a" }}>
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative min-h-[52vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/88 via-slate-900/75 to-indigo-900/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center space-y-5 w-full">
            <span className="inline-flex px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-black tracking-widest text-blue-200 uppercase backdrop-blur-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Great Together</span>
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Free project consultations. No commitment required. Our team responds within 2 business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="https://wa.me/92343660833?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                💬 WhatsApp 1: +9234-3660833
              </a>
              <a href="https://wa.me/923412899849?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                💬 WhatsApp 2: +92341-2899849
              </a>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

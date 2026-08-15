import React from "react";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import { Shield, Star, Zap, Users, Leaf, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us, Mission & Standards | Markaz Enterprises Karachi",
  description: "Learn about Markaz Enterprises — Pakistan's premier provider of Solar Energy, Custom Lithium Battery Storage, Turnkey Construction, and Technology across 11 service divisions. 10+ years, 500+ projects.",
  keywords: [
    "About Markaz Enterprises",
    "Solar Energy Contractor Karachi",
    "Lithium Battery Packs Pakistan",
    "Multi-Industry Solutions Pakistan",
    "Quality Assurance Contractor Karachi",
    "Muhammad Athar Siddiqui CEO"
  ],
};

const coreValueIcons = [
  <Shield key="shield" className="w-5 h-5 text-[#F5A623]" />,
  <Users key="users" className="w-5 h-5 text-[#0EA5E9]" />,
  <Zap key="zap" className="w-5 h-5 text-purple-600" />,
  <Star key="star" className="w-5 h-5 text-emerald-600" />,
  <Leaf key="leaf" className="w-5 h-5 text-teal-600" />,
  <TrendingUp key="trend" className="w-5 h-5 text-[#F5A623]" />,
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <main className="flex-1">

        {/* ── Full-Screen Hero with Image ── */}
        <section className="relative min-h-[300px] lg:min-h-[360px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D]/90 via-[#132C54]/75 to-[#0B1E3D]/88" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center space-y-4 w-full">
            <span className="inline-flex px-3 py-1 bg-white/10 border border-[#F5A623]/25 rounded-full text-[10px] font-black tracking-widest text-[#F5A623] uppercase backdrop-blur-sm">
              Corporate Identity
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Pakistan&apos;s Most Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#E08E00]">
                Multi-Industry Partner
              </span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {SITE_INFO.brand.overview}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <a href="/contact" className="px-6 py-2.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] font-bold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#F5A623]/30">
                Start a Project
              </a>
              <a href="/portfolio" className="px-6 py-2.5 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all backdrop-blur-sm">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-[#0B1E3D] py-10 border-y border-[#F5A623]/20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {SITE_INFO.homepage.trust_bar.map((stat, i) => (
              <div key={i} className="space-y-1 py-4">
                <div className="text-3xl sm:text-4xl font-black text-[#F5A623]">{stat.stat}</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Mission & Vision with image ── */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80"
                  alt="Markaz Enterprises team meeting"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-xs font-black uppercase tracking-widest text-[#F5A623]">Est. 2014 · Karachi</div>
                  <div className="text-xl font-black">Building Pakistan&apos;s Future</div>
                </div>
              </div>

              {/* Right: Mission/Vision Cards */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-[#F5A623] uppercase">Our Purpose</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4 leading-tight">
                    Why We Exist &amp; Where We&apos;re Headed
                  </h2>
                </div>
                <BorderGlow
                  edgeSensitivity={20}
                  glowColor="220 80 60"
                  backgroundColor="#EFF6FF"
                  borderRadius={16}
                  glowRadius={40}
                  glowIntensity={0.8}
                  coneSpread={25}
                  animated={true}
                  colors={["#F5A623", "#E08E00"]}
                >
                  <div className="p-6 space-y-2">
                    <div className="text-[#F5A623] text-xs font-black uppercase tracking-widest">Our Mission</div>
                    <h3 className="text-lg font-black text-slate-900">Why We Exist</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{SITE_INFO.brand.mission}</p>
                  </div>
                </BorderGlow>
                <BorderGlow
                  edgeSensitivity={20}
                  glowColor="220 80 60"
                  backgroundColor="#EEF2FF"
                  borderRadius={16}
                  glowRadius={40}
                  glowIntensity={0.8}
                  coneSpread={25}
                  animated={true}
                  colors={["#E08E00", "#F5A623"]}
                >
                  <div className="p-6 space-y-2">
                    <div className="text-[#E08E00] text-xs font-black uppercase tracking-widest">Our Vision</div>
                    <h3 className="text-lg font-black text-slate-900">Where We&apos;re Headed</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{SITE_INFO.brand.vision}</p>
                  </div>
                </BorderGlow>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-black tracking-widest text-[#F5A623] uppercase">Our Principles</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Core Values That Drive Us</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_INFO.brand.core_values.map((val, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3 hover:border-[#F5A623]/40 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 bg-[#F5A623]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                    {coreValueIcons[i]}
                  </div>
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#F5A623] transition-colors">{val.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us Image Section ── */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-black tracking-widest text-[#F5A623] uppercase">Competitive Advantage</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Why Businesses Choose Markaz Enterprises
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "One Trusted Partner", desc: "Eliminate the complexity of coordinating multiple contractors across different industries." },
                    { title: "Transparent Pricing", desc: "Detailed BOQ and milestone billing — no hidden charges, no surprises." },
                    { title: "Nationwide Execution", desc: "Projects delivered across Karachi, Lahore, Islamabad, and all major cities." },
                    { title: "Proven Track Record", desc: "500+ completed projects with 98% client satisfaction across 11 service divisions." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm text-slate-900">{item.title}</div>
                        <div className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] font-bold rounded-xl text-sm transition-all hover:scale-105 shadow-md shadow-[#F5A623]/20">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop&q=75" alt="Construction" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop&q=75" alt="CCTV" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=75" alt="Interior" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=75" alt="Solar" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process & Methodology ── */}
        <ProcessSection />

        {/* ── CTA Banner ── */}
        <section className="py-20 bg-gradient-to-r from-[#0B1E3D] to-[#132C54] text-white border-t border-[#F5A623]/15">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Ready to Start a Project?</h2>
            <p className="text-white/70 leading-relaxed">
              {SITE_INFO.homepage.final_cta.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] font-black rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                {SITE_INFO.homepage.final_cta.cta1}
              </a>
              <a href={`https://wa.me/${SITE_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-black rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                {SITE_INFO.homepage.final_cta.cta2}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

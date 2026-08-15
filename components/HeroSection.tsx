"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Building2, Shield, Cpu, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const bg = heroRef.current.querySelector(".hero-parallax-bg") as HTMLElement;
      if (bg) bg.style.transform = `translateY(${scrolled * 0.25}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="hero-parallax-bg absolute inset-0 will-change-transform scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark glass overlay — deep navy tint */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(11,30,61,0.90) 0%, rgba(19,44,84,0.78) 40%, rgba(11,30,61,0.88) 100%)",
        backdropFilter: "blur(2px) saturate(130%)",
      }} />

      {/* Edge vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(2,6,23,0.65) 100%)"
      }} />

      {/* Subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#F5A623]/6 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5A623]/25 backdrop-blur-xl"
            style={{ background: "rgba(245,166,35,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-wider text-[#F5A623] uppercase">
              Multi-Industry Solutions · Pakistan
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Powering, Building &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Digitizing
            </span>{" "}
            Businesses
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Specializing in industrial solar power, custom LiFePO4 battery packs &amp; smart BMS integration — alongside turnkey commercial construction, executive interiors, and bespoke enterprise software across Pakistan.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center">
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#E08E00] hover:from-[#E08E00] hover:to-[#c47600] text-[#0F172A] font-extrabold px-7 py-3 rounded-xl shadow-xl shadow-[#F5A623]/25 hover:shadow-[#F5A623]/40 transition-all duration-300 group text-xs"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 text-white border font-extrabold px-7 py-3 rounded-xl transition-all duration-300 text-xs backdrop-blur-xl hover:bg-amber-500/20 hover:border-amber-400/40"
              style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.18)" }}
            >
              Explore Battery Products
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-[10px] font-bold text-[#F5A623]/80 uppercase tracking-wider">
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> 500+ Projects</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> 11 Divisions</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> Pakistan-Wide</span>
          </div>

          {/* Glass Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              { icon: Building2, color: "text-[#F5A623]",   bg: "rgba(245,166,35,0.15)",  border: "rgba(245,166,35,0.28)",  title: "One-Stop Solution",    desc: "Eliminate coordinating between multiple contractors." },
              { icon: Shield,    color: "text-emerald-300", bg: "rgba(16,185,129,0.15)",  border: "rgba(16,185,129,0.25)", title: "5-Stage QA Protocol",  desc: "ISO-level quality assurance and strict timelines." },
              { icon: Cpu,       color: "text-[#0EA5E9]",   bg: "rgba(14,165,233,0.15)",  border: "rgba(14,165,233,0.25)", title: "Tech Integration",    desc: "Modern frameworks, custom software & CCTV automation." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-2xl text-left transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  WebkitBackdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#divisions"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}

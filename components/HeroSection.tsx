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

      {/* Dark glass overlay — image visible but tinted dark */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(2,6,23,0.82) 0%, rgba(15,23,42,0.72) 40%, rgba(30,27,75,0.78) 100%)",
        backdropFilter: "blur(2px) saturate(130%)",
      }} />

      {/* Edge vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(2,6,23,0.65) 100%)"
      }} />

      {/* Subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-xl"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-wider text-blue-200 uppercase">
              Multi-Industry Solutions · Pakistan
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Building, Powering &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400">
              Digitizing
            </span>{" "}
            Businesses
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From turnkey commercial construction and premium interior works to custom software engineering,
            security networks, and industrial solar energy — Markaz Enterprises is your single trusted partner.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center">
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-7 py-3 rounded-xl shadow-xl shadow-blue-900/40 hover:shadow-blue-600/40 transition-all duration-300 group text-xs"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 text-white border font-extrabold px-7 py-3 rounded-xl transition-all duration-300 text-xs backdrop-blur-xl"
              style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.18)" }}
            >
              View Our Work
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-[10px] font-bold text-blue-200/80 uppercase tracking-wider">
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> 500+ Projects</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> 10 Divisions</span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="flex items-center gap-2"><span className="text-emerald-400 text-sm font-black">✓</span> Pakistan-Wide</span>
          </div>

          {/* Glass Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              { icon: Building2, color: "text-blue-300", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.25)", title: "One-Stop Solution", desc: "Eliminate coordinating between multiple contractors." },
              { icon: Shield,    color: "text-emerald-300", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.25)", title: "5-Stage QA Protocol", desc: "ISO-level quality assurance and strict timelines." },
              { icon: Cpu,       color: "text-indigo-300", bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.25)", title: "Tech Integration", desc: "Modern frameworks, custom software & CCTV automation." },
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

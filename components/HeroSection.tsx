"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Building2, Shield, Cpu, ChevronDown } from "lucide-react";
import Radar from "@/components/ui/Radar";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect on hero bg
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const bg = heroRef.current.querySelector(".hero-parallax-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background Image */}
      <div
        className="hero-parallax-bg absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateY(0)",
        }}
      />

      {/* Blue-tinted gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/85" />

      {/* Radar animation — preserved */}
      <div className="absolute inset-0 z-[1] pointer-events-auto opacity-30">
        <Radar
          speed={1}
          scale={0.5}
          ringCount={10}
          spokeCount={10}
          ringThickness={0.05}
          spokeThickness={0.01}
          sweepSpeed={1}
          sweepWidth={2}
          sweepLobes={1}
          color="#3B82F6"
          backgroundColor="transparent"
          falloff={2}
          brightness={1.3}
          enableMouseInteraction={true}
          mouseInfluence={0.1}
        />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Live status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-[10px] font-extrabold tracking-wider text-blue-200 uppercase">
              Multi-Industry Solutions · Pakistan
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Building, Powering &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400">
              Digitizing
            </span>{" "}
            Businesses
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            From turnkey commercial construction and premium interior works to custom software engineering,
            security networks, and industrial solar energy — Markaz Enterprises is your single trusted partner.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center">
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-extrabold px-6 py-3 rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group text-xs"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-extrabold px-6 py-3 rounded-xl transition-all duration-300 text-xs backdrop-blur-sm"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 text-blue-300" />
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[10px] font-bold text-blue-200 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-black">✓</span> 500+ Projects
            </span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-black">✓</span> 10 Divisions
            </span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-black">✓</span> Pakistan-Wide
            </span>
          </div>

          {/* Feature cards row */}
          <div
            onMouseMove={handleMouseMove}
            className="spotlight-card grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3"
          >
            {[
              { icon: Building2, color: "text-blue-300", bg: "bg-blue-500/20", title: "One-Stop Solution", desc: "Eliminate coordinating between multiple contractors." },
              { icon: Shield,    color: "text-emerald-300", bg: "bg-emerald-500/20", title: "5-Stage QA Protocol", desc: "ISO-level quality assurance and strict timelines." },
              { icon: Cpu,       color: "text-indigo-300", bg: "bg-indigo-500/20", title: "Tech Integration", desc: "Modern frameworks, custom software & CCTV automation." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm hover:bg-white/15 transition-colors text-left"
              >
                <div className={`p-2.5 ${item.bg} ${item.color} rounded-xl flex-shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-blue-200/80 mt-0.5">{item.desc}</p>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}

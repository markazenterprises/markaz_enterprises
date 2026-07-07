import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import {
  Building2, Palette, Cpu, Shield, Code2, Smartphone,
  Layers, BarChart3, Megaphone, Sun, Wrench, LayoutDashboard
} from "lucide-react";

export const metadata: Metadata = {
  title: "All 10 Service Divisions | Markaz Enterprises Karachi",
  description: "Explore all 10 specialist divisions of Markaz Enterprises — from Turnkey Construction and Solar Energy to Custom Software, CCTV, Interior Design, and Digital Marketing across Pakistan.",
  keywords: [
    "Markaz Enterprises Divisions",
    "Construction Company Karachi",
    "Solar Energy Pakistan",
    "Software House Karachi",
    "CCTV Security Systems",
    "Interior Design Karachi",
    "Digital Marketing Agency Pakistan",
    "Multi-Industry Solutions",
  ],
};

const divisionIcons: Record<string, React.ReactNode> = {
  DIV01: <Building2 className="w-8 h-8" />,
  DIV02: <Palette className="w-8 h-8" />,
  DIV03: <Wrench className="w-8 h-8" />,
  DIV04: <Shield className="w-8 h-8" />,
  DIV05: <Code2 className="w-8 h-8" />,
  DIV06: <Smartphone className="w-8 h-8" />,
  DIV07: <Layers className="w-8 h-8" />,
  DIV08: <BarChart3 className="w-8 h-8" />,
  DIV09: <Megaphone className="w-8 h-8" />,
  DIV10: <Sun className="w-8 h-8" />,
};

const divisionColors: Record<string, string> = {
  DIV01: "from-blue-600 to-blue-800",
  DIV02: "from-indigo-600 to-indigo-800",
  DIV03: "from-slate-600 to-slate-800",
  DIV04: "from-blue-700 to-indigo-900",
  DIV05: "from-blue-600 to-indigo-700",
  DIV06: "from-indigo-500 to-purple-600",
  DIV07: "from-cyan-600 to-blue-700",
  DIV08: "from-emerald-600 to-teal-700",
  DIV09: "from-purple-600 to-pink-600",
  DIV10: "from-blue-500 to-emerald-500",
};

const divisionSlugs: Record<string, string> = {
  DIV01: "construction",
  DIV02: "interior",
  DIV03: "home-appliances",
  DIV04: "cctv",
  DIV05: "software",
  DIV06: "mobile",
  DIV07: "software-development",
  DIV08: "analytics",
  DIV09: "marketing",
  DIV10: "solar",
};

export default function DivisionsPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <main className="flex-1">
        {/* Full-Screen Hero with Image */}
        <section className="relative min-h-[300px] lg:min-h-[360px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center space-y-4 w-full">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-black tracking-widest text-blue-200 uppercase backdrop-blur-sm">
              <LayoutDashboard className="w-3.5 h-3.5" /> Enterprise Divisions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              10 Specialist{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Service Divisions</span>
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Pakistan&apos;s only consolidated multi-industry solutions provider — delivering Construction, Energy, Technology, and Marketing excellence under one trusted brand.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <Link href="/contact" className="px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                Get Free Consultation
              </Link>
              <Link href="/portfolio" className="px-6 py-2.5 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all backdrop-blur-sm">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SITE_INFO.divisions.map((div) => {
                const slug = divisionSlugs[div.id] || div.id.toLowerCase();
                return (
                  <BorderGlow
                    key={div.id}
                    edgeSensitivity={20}
                    glowColor="220 80 60"
                    backgroundColor="#FFFFFF"
                    borderRadius={16}
                    glowRadius={40}
                    glowIntensity={1.0}
                    coneSpread={30}
                    animated={true}
                    colors={["#3b82f6", "#6366f1", "#10b981"]}
                    className="group"
                  >
                    <div className="p-6 space-y-4 text-slate-900">
                      {/* Division Icon & ID */}
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${divisionColors[div.id] || "from-blue-600 to-indigo-700"} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {divisionIcons[div.id] || <Layers className="w-8 h-8" />}
                        </div>
                        <span className="text-xs font-black text-slate-500 tracking-widest border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg">
                          {div.id}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h2 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                          {div.title}
                        </h2>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{div.intro}</p>
                      </div>

                      {/* Services List */}
                      <div className="flex flex-wrap gap-1.5">
                        {div.services.slice(0, 4).map((svc, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-md font-medium">
                            {svc}
                          </span>
                        ))}
                        {div.services.length > 4 && (
                          <span className="text-xs px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-md font-bold">
                            +{div.services.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Brands if any */}
                      {div.brands && div.brands.length > 0 && (
                        <div className="text-xs text-slate-500">
                          <span className="font-bold text-slate-400">Brands: </span>
                          {div.brands.join(", ")}
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href={`/divisions/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Explore Division →
                      </Link>
                    </div>
                  </BorderGlow>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-6">
            <h2 className="text-3xl font-black text-white">Can&apos;t Find Your Service?</h2>
            <p className="text-blue-100 text-sm">Our multi-division capabilities often extend beyond what&apos;s listed. Contact us for a custom consultation — no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                Request Free Consultation
              </Link>
              <a href={`https://wa.me/923343660833`} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

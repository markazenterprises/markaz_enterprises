import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { PRODUCTS_DATA } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import {
  Zap, ShieldCheck, ArrowRight,
  MessageCircle, Phone, Sparkles, Sliders, CheckCircle, Cpu, Sun, BatteryCharging
} from "lucide-react";

export const metadata: Metadata = {
  title: "LiFePO4 Lithium Battery & Solar Storage Catalogue | Markaz Enterprises",
  description: "Explore Markaz Enterprises' complete catalogue of Grade-A EVE LiFePO4 cells, Smart Inverter BMS, 48V wall-mount energy storage systems, LCD displays, and custom casings in Pakistan.",
  keywords: [
    "LiFePO4 Battery Pakistan",
    "Lithium Battery Pack Karachi",
    "EVE 100Ah 314Ah Cell",
    "Smart BMS Inverter Communication",
    "48V 100Ah Wall Mount Battery",
    "24V 200Ah Battery Pack",
    "JK Smart BMS Pakistan",
    "Solar Energy Storage Pakistan"
  ],
};

const CATEGORIES = [
  "Complete Battery Systems",
  "Battery Cells",
  "Battery Management Systems",
  "Displays",
  "Terminals & Casings"
] as const;

export default function ProductsPage() {
  const allProducts = Object.values(PRODUCTS_DATA);

  return (
    <div className="min-h-screen flex flex-col text-slate-100 selection:bg-amber-500 selection:text-slate-950" style={{ background: "#060c1a" }}>
      <main className="flex-1">

        {/* ── Professional Energy Solutions Hero Banner ── */}
        <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden border-b border-slate-800">
          {/* Real project installation background with professional dark overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/projects/foxess-inverter-battery-installation.jpg')",
              filter: "brightness(0.35) contrast(1.15) saturate(1.1)",
            }}
          />
          {/* High-tech gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040813] via-[#060c1a]/90 to-[#040813]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-transparent to-black/60" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
            <div className="max-w-3xl space-y-5 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] font-black tracking-widest text-amber-300 uppercase">
                  Solar &amp; LiFePO4 Energy Hardware
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
                Industrial Solar &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500">
                  Lithium Battery Systems
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
                Authentic Grade-A EVE prismatic cells, closed-loop inverter communication BMS units (CAN/RS485), and heavy-duty battery storage hardware engineered for extreme reliability across Pakistan.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/custom-battery-quote"
                  className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black px-7 py-3.5 rounded-xl shadow-lg shadow-amber-950/40 text-xs uppercase tracking-wider transition-all"
                >
                  <Sliders className="w-4 h-4" /> Request Custom Pack Sizing
                </Link>
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20solar%20battery%20catalogue.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all border border-slate-700 backdrop-blur-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Engineering Team
                </a>
              </div>
            </div>

            {/* Hardware Trust Metric Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              {[
                { icon: BatteryCharging, title: "Grade-A EVE Cells", desc: "100Ah · 314Ah · 315Ah Pro" },
                { icon: Cpu, title: "Smart Inverter BMS", desc: "CAN/RS485 Multi-Protocol" },
                { icon: ShieldCheck, title: "5-Year Pack Warranty", desc: "5000+ Cycle Lifetime" },
                { icon: Zap, title: "Turnkey Solar ESS", desc: "48V 100Ah & 24V 200Ah Ready" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-white">{item.title}</h3>
                    <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Category Anchors */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-bold text-slate-400 mr-2">Jump to:</span>
              {CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products List by Category ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {CATEGORIES.map((cat) => {
            const productsInCat = allProducts.filter((p) => p.category === cat);
            const sectionId = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <section key={cat} id={sectionId} className="space-y-8 scroll-mt-24">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest">
                      <Zap className="w-4 h-4" />
                      <span>Product Category</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {cat}
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {productsInCat.length} {productsInCat.length === 1 ? "Item" : "Items"} in Catalogue
                  </span>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productsInCat.map((product) => {
                    const isFlagship = product.isFlagship;

                    return (
                      <div
                        key={product.slug}
                        className={`group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                          isFlagship
                            ? "bg-slate-900/90 border-amber-500/40 shadow-xl shadow-amber-950/20"
                            : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {/* Flagship Top Bar */}
                        {isFlagship && (
                          <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />
                        )}

                        {/* Uncropped Image Container */}
                        <div className="relative h-60 w-full bg-[#081222] p-4 flex items-center justify-center overflow-hidden border-b border-slate-800/80">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-3 max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                          />

                          {/* Badges Overlay */}
                          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
                            {isFlagship && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                                <Sparkles className="w-3 h-3" /> Flagship System
                              </span>
                            )}
                            {product.isDraftSpec && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-black uppercase tracking-wider">
                                Draft Spec
                              </span>
                            )}
                            {product.warranty && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] font-bold tracking-wider ml-auto">
                                <ShieldCheck className="w-3 h-3" /> {product.warranty}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Body Details */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                          <div className="space-y-3">
                            <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block">
                              {product.id} · {product.category}
                            </span>
                            <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors leading-snug">
                              {product.h1}
                            </h3>
                            <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed min-h-[32px]">
                              {product.subtitle}
                            </p>

                            {/* Key Specs Grid */}
                            <div className="pt-1 grid grid-cols-2 gap-2">
                              {product.specs.slice(0, 4).map((spec, sIdx) => (
                                <div key={sIdx} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 space-y-0.5 min-h-[50px] flex flex-col justify-center">
                                  <span className="text-[10px] text-slate-500 font-semibold block truncate">{spec.label}</span>
                                  <span className="text-[11px] text-slate-200 font-black block truncate">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Row */}
                          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                            <Link
                              href={`/products/${product.slug}`}
                              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs rounded-xl transition-colors group/btn"
                            >
                              <span>View Specs</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>
                            <a
                              href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.title)}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`WhatsApp Quote for ${product.title}`}
                              className="p-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-xl transition-colors flex-shrink-0"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* ── Custom Battery Solution Callout Banner ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="45 100 50"
            backgroundColor="rgba(10, 18, 36, 0.95)"
            borderRadius={28}
            glowRadius={60}
            glowIntensity={1.0}
            animated={true}
            colors={["#f59e0b", "#3b82f6", "#10b981"]}
          >
            <div className="p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-black uppercase tracking-wider">
                  <Sliders className="w-3.5 h-3.5" /> Bespoke Engineering
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Need a Custom Voltage, Capacity or Casing Spec?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We engineer tailored LiFePO4 battery packs for industrial lifters, material handling machines, off-grid telecom stations, high-draw inverters, and custom form factors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/custom-battery-quote"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-950/40 text-xs uppercase tracking-wider transition-all"
                >
                  Configure Custom Pack
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${SITE_INFO.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-extrabold px-6 py-4 rounded-2xl border border-slate-700 text-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  Call Engineer
                </a>
              </div>
            </div>
          </BorderGlow>
        </section>

      </main>
      <Footer />
    </div>
  );
}

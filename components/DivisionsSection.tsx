"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

const DIVISIONS = [
  {
    id: "DIV01",
    slug: "construction",
    badge: "Construction",
    title: "Turnkey Construction",
    tagline: "Full-Spectrum Commercial & Residential Building",
    desc: "From grey structure to final handover, our construction division manages every phase — architectural drawing approvals, procurement, skilled labour, and quality audits — all under one contract.",
    highlights: ["SBCA-approved architectural drawings", "Grade-A steel & certified concrete", "5-stage QA protocol on every build", "Nationwide project execution"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=80",
    accent: "from-blue-600 to-blue-800",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "DIV02",
    slug: "interior",
    badge: "Interior Design",
    title: "Premium Interior Design",
    tagline: "Luxury Spaces for Homes, Offices & Commercial Venues",
    desc: "Our interior division creates bespoke environments — from residential living rooms to corporate headquarters — featuring Italian materials, custom joinery, acoustic engineering, and full AV integration.",
    highlights: ["Custom modular furniture & joinery", "Acoustic fabric wall paneling", "Tempered glass partition systems", "Lutron smart lighting design"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80",
    accent: "from-pink-600 to-rose-700",
    badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    id: "DIV10",
    slug: "solar",
    badge: "Solar Energy",
    title: "Hybrid Solar Energy Solutions",
    tagline: "Grid-Tied, Off-Grid & Hybrid Solar Systems Across Pakistan",
    desc: "We design, supply, and install industrial-grade solar systems using Tier-1 panels and inverters, handle NEPRA net metering licensing, and provide cloud-based monitoring for your installation.",
    highlights: ["Longi & JA Solar Tier-1 panels", "Huawei & SMA inverter systems", "NEPRA net metering processing", "30-day remote cloud monitoring"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&auto=format&fit=crop&q=80",
    accent: "from-amber-500 to-yellow-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "DIV04",
    slug: "cctv",
    badge: "CCTV & Security",
    title: "IP CCTV & Surveillance Networks",
    tagline: "4K IP Cameras, NVR Systems & Remote Monitoring",
    desc: "From single-site retail to multi-acre industrial facilities, we install and commission Hikvision and Dahua IP camera systems with central NVR rooms, mobile monitoring apps, and UPS backup.",
    highlights: ["4K Hikvision & Dahua IP cameras", "Central NVR command room setup", "Thermal perimeter motion sensors", "24/7 remote mobile monitoring"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&auto=format&fit=crop&q=80",
    accent: "from-emerald-600 to-teal-700",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "DIV05",
    slug: "software",
    badge: "Software & ERP",
    title: "Custom Software & ERP Development",
    tagline: "Business Applications Built for Pakistani Enterprises",
    desc: "We build custom ERP systems, multi-location inventory platforms, CRM portals, and web applications — tailored to the exact workflows of Pakistani businesses across retail, logistics, and manufacturing.",
    highlights: ["Multi-location inventory ERP", "CRM & sales pipeline systems", "Barcode scanning & dispatch modules", "PowerBI analytics dashboards"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    accent: "from-indigo-600 to-purple-700",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "DIV06",
    slug: "mobile",
    badge: "Mobile Apps",
    title: "Mobile App Development",
    tagline: "Android & iOS Apps for Businesses & Startups",
    desc: "Our mobile team builds native and cross-platform applications using React Native and Flutter — from e-commerce and delivery apps to enterprise field-management and customer portals.",
    highlights: ["React Native & Flutter development", "Android & iOS simultaneous launch", "REST API & Firebase integration", "App Store & Play Store submission"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80",
    accent: "from-cyan-600 to-blue-700",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "DIV09",
    slug: "marketing",
    badge: "Digital Marketing",
    title: "Digital Marketing & Lead Generation",
    tagline: "SEO, PPC, Social Media & B2B Lead Funnels",
    desc: "We run targeted Google Search and Meta ad campaigns, build high-converting landing pages, manage social media, and set up automated email funnels to fill your sales pipeline with qualified leads.",
    highlights: ["Google Search & Display PPC", "Meta Ads (Facebook & Instagram)", "SEO content strategy & backlinks", "HubSpot & Mailchimp automation"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=80",
    accent: "from-orange-500 to-red-600",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "DIV08",
    slug: "analytics",
    badge: "Data Analytics",
    title: "Business Intelligence & Analytics",
    tagline: "PowerBI Dashboards, Reporting & Data Strategy",
    desc: "Turn raw business data into actionable intelligence with custom PowerBI dashboards, automated reporting pipelines, KPI tracking systems, and data warehousing solutions.",
    highlights: ["PowerBI & Tableau dashboards", "Automated daily/weekly reports", "Multi-source data consolidation", "KPI & OKR tracking systems"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    accent: "from-violet-600 to-indigo-700",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "DIV03",
    slug: "home-appliances",
    badge: "Home Appliances",
    title: "Home Appliances & Décor",
    tagline: "Premium Branded Appliances & Home Decoration",
    desc: "We supply and install a curated range of branded home appliances — kitchen systems, HVAC, water purification, and décor — from internationally recognised brands at competitive prices.",
    highlights: ["Kitchen appliance supply & install", "HVAC & air conditioning systems", "Water purification solutions", "Premium home décor items"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80",
    accent: "from-slate-600 to-slate-800",
    badgeColor: "bg-slate-50 text-slate-700 border-slate-200",
  },
  {
    id: "DIV07",
    slug: "software-development",
    badge: "Architecture & IT",
    title: "Architectural Planning & IT Infrastructure",
    tagline: "3D BIM Modelling, Structural Engineering & IT Network Setup",
    desc: "Our architecture and IT infrastructure division provides 3D BIM modelling, structural engineering validation, and enterprise IT network setups including LAN/WAN cabling, server rooms, and rack installations.",
    highlights: ["AutoCAD & Revit BIM modelling", "Structural load calculation & PE stamp", "LAN/WAN cabling & network racks", "Server room design & setup"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80",
    accent: "from-blue-700 to-indigo-900",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-300",
  },
];

const INITIAL_SHOW = 4;

export default function DivisionsSection() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? DIVISIONS : DIVISIONS.slice(0, INITIAL_SHOW);

  return (
    <>
      {/* Trust Stats Bar */}
      <section className="bg-blue-600 py-12 border-y border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "10", label: "Specialized Divisions" },
              { num: "10+ Yrs", label: "Proven Experience" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "Pakistan", label: "Nationwide Execution" },
            ].map((stat, idx) => (
              <div key={idx} className="py-4 px-2 space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-white">{stat.num}</span>
                <span className="block text-[11px] sm:text-xs text-blue-100 font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-xs font-black tracking-widest text-blue-500 uppercase">
              Corporate Capabilities
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              10 Specialized Service Divisions
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              One trusted partner across construction, technology, security, and energy — delivering measurable results across Pakistan.
            </p>
          </div>

          {/* Alternating Division Cards */}
          <div className="space-y-8">
            {visible.map((div, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <BorderGlow
                  key={div.id}
                  edgeSensitivity={20}
                  glowColor="220 80 60"
                  backgroundColor="#FFFFFF"
                  borderRadius={16}
                  glowRadius={40}
                  glowIntensity={0.8}
                  coneSpread={25}
                  animated={true}
                  colors={["#3b82f6", "#6366f1", "#10b981"]}
                  className="shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 group ${isEven ? "" : "lg:[direction:rtl]"}`}
                  >
                    {/* Image Side */}
                    <div className={`relative min-h-[220px] lg:min-h-[280px] overflow-hidden ${isEven ? "" : "lg:[direction:ltr]"}`}>
                      <img
                        src={div.image}
                        alt={div.title}
                        className="absolute inset-0 object-cover w-full h-full group-hover:scale-102 transition-transform duration-700"
                      />
                      {/* gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? "from-transparent to-slate-900/10" : "from-slate-900/10 to-transparent"}`} />

                      {/* Division ID badge */}
                      <div className="absolute top-5 left-5">
                        <span className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border ${div.badgeColor}`}>
                          {div.badge}
                        </span>
                      </div>

                      {/* Gradient accent bar at bottom */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${div.accent}`} />
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center p-6 lg:p-8 bg-white space-y-3 overflow-hidden ${isEven ? "" : "lg:[direction:ltr]"}`}>
                      {/* ID label */}
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black text-slate-400 tracking-widest border border-slate-200 bg-slate-50 px-2 py-0.5 rounded">
                          {div.id}
                        </span>
                        <div className={`h-px flex-1 bg-gradient-to-r ${div.accent} opacity-30`} />
                      </div>

                      {/* Title */}
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                          {div.title}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{div.tagline}</p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-3">
                        {div.desc}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {div.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-xs font-medium">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-1">
                        <Link
                          href={`/divisions/${div.slug}`}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${div.accent} text-white font-bold rounded-lg text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md`}
                        >
                          Explore {div.badge} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              );
            })}
          </div>

          {/* See More / See Less Toggle */}
          {!showAll ? (
            <div className="text-center mt-10 space-y-3">
              <p className="text-slate-500 text-xs font-medium">
                Showing {INITIAL_SHOW} of {DIVISIONS.length} divisions
              </p>
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md shadow-blue-500/20"
              >
                See All 10 Service Divisions <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center mt-16 space-y-4">
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-slate-300 hover:border-blue-400 text-slate-600 hover:text-blue-600 font-bold rounded-xl text-sm uppercase tracking-wide transition-all"
              >
                Show Less
              </button>
              <div className="pt-2">
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors"
                >
                  View dedicated Divisions page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

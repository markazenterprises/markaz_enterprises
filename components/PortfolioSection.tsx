"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

const PORTFOLIO_PROJECTS = [
  {
    id: "proj1",
    slug: "100kw-solar-textile-factory-karachi",
    title: "100kW Hybrid Solar Installation",
    category: "Solar",
    client: "Textile Manufacturing Factory, Karachi",
    metric: "PKR 500k/mo saved",
    desc: "A complete hybrid solar grid solution addressing load-shedding and carbon footprint reduction. Includes net metering setup and remote monitoring.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&auto=format&fit=crop&q=75",
    colors: ['#3b82f6', '#10b981', '#6366f1'],
    featured: true
  },
  {
    id: "proj2",
    slug: "gulshan-luxury-residence-construction",
    title: "Gulshan Luxury Turnkey Residence",
    category: "Construction",
    client: "Private Owner, Gulshan-e-Iqbal",
    metric: "500 Sq Yd · 12 months",
    desc: "Premium 500 Sq Yd turnkey home with custom structural design, luxury Italian finishings, and smart home automation integration.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=75",
    colors: ['#3b82f6', '#8b5cf6', '#6366f1'],
    featured: false
  },
  {
    id: "proj3",
    slug: "corporate-office-interior-clifton",
    title: "Premium Corporate Office Space",
    category: "Interior Design",
    client: "FinTech Hub, Clifton, Karachi",
    metric: "4,000 Sq Ft · 8 weeks",
    desc: "Modern open-plan office with acoustic paneling, glass partitions, bespoke ergonomic workstations, and coordinated brand colours throughout.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=75",
    colors: ['#3b82f6', '#8b5cf6', '#ec4899'],
    featured: false
  },
  {
    id: "proj4",
    slug: "multi-channel-warehouse-erp-system",
    title: "Multi-Channel Warehouse ERP System",
    category: "IT & Software",
    client: "Logistics Enterprise, Karachi",
    metric: "65% ops efficiency gain",
    desc: "Custom business software coordinating dispatch tracking, real-time inventory across 5 branches, barcode scanning, and invoice reconciliation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=75",
    colors: ['#6366f1', '#3b82f6', '#10b981'],
    featured: true
  },
  {
    id: "proj5",
    slug: "32-camera-ip-surveillance-port-qasim",
    title: "32-Camera IP Surveillance Network",
    category: "CCTV & Security",
    client: "Industrial Complex, Port Qasim",
    metric: "24/7 coverage · 30-day DVR",
    desc: "Full indoor/outdoor IP surveillance featuring motion detection, PTZ cameras, VMS, remote access, and redundant backup NVR storage.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&auto=format&fit=crop&q=75",
    colors: ['#10b981', '#3b82f6', '#6366f1'],
    featured: false
  },
  {
    id: "proj6",
    slug: "national-seo-lead-gen-campaign",
    title: "National SEO & Lead Funnel Campaign",
    category: "Digital Marketing",
    client: "Manufacturing Group, Lahore",
    metric: "+70% qualified leads/mo",
    desc: "Structured keyword targeting, technical SEO overhaul, PPC campaigns, and automated email nurturing increasing qualified monthly leads by 70%.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=75",
    colors: ['#f97316', '#3b82f6', '#6366f1'],
    featured: false
  },
  {
    id: "proj7",
    slug: "react-native-field-app-logistics",
    title: "React Native Rider Dispatch App",
    category: "IT & Software",
    client: "Logistics Dispatch Enterprise, Karachi",
    metric: "+40% delivery speed",
    desc: "A high-performance React Native and Flutter field-agent application with real-time GPS tracking, automated SMS updates, and offline data sync.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=75",
    colors: ['#3b82f6', '#6366f1', '#10b981'],
    featured: false
  },
  {
    id: "proj8",
    slug: "powerbi-retail-analytics-dashboard",
    title: "PowerBI Retail Analytics Pipeline",
    category: "IT & Software",
    client: "Departmental Chain Store, Karachi",
    metric: "-22% stock wastage",
    desc: "Unified corporate database ETL pipeline feeding real-time PowerBI dashboards for executive revenue monitoring and automated stock replenishment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=75",
    colors: ['#6366f1', '#3b82f6', '#8b5cf6'],
    featured: false
  },
  {
    id: "proj9",
    slug: "central-hvac-commercial-building",
    title: "Commercial HVAC & VRF Installation",
    category: "Home Appliances",
    client: "Corporate Office Tower, Clifton",
    metric: "-35% electric bills",
    desc: "Turnkey commercial HVAC and Daikin VRF multi-split central air conditioning installation with advanced temperature automation controls.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=75",
    colors: ['#475569', '#3b82f6', '#1e293b'],
    featured: false
  },
  {
    id: "proj10",
    slug: "corporate-network-server-room-setup",
    title: "IT Data Center & Server Room Setup",
    category: "Architecture & IT",
    client: "National Logistics Hub, Port Qasim",
    metric: "99.99% network uptime",
    desc: "Enterprise IT server room design, structured Cat6 cabling, Cisco network switch configurations, APC UPS power backups, and cold-aisle containment cooling.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=75",
    colors: ['#3b82f6', '#4f46e5', '#0f172a'],
    featured: false
  }
];

const TABS = ["All", "Construction", "Interior Design", "IT & Software", "CCTV & Security", "Solar", "Digital Marketing", "Home Appliances", "Architecture & IT"];

const CATEGORY_COLORS: Record<string, string> = {
  "Solar": "bg-amber-50 text-amber-700 border-amber-200",
  "Construction": "bg-blue-50 text-blue-700 border-blue-200",
  "Interior Design": "bg-pink-50 text-pink-700 border-pink-200",
  "IT & Software": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "CCTV & Security": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Digital Marketing": "bg-orange-50 text-orange-700 border-orange-200",
  "Home Appliances": "bg-slate-50 text-slate-700 border-slate-200",
  "Architecture & IT": "bg-blue-50 text-blue-900 border-blue-300",
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p =>
        p.category.toLowerCase().includes(activeTab.toLowerCase()) ||
        activeTab.toLowerCase().includes(p.category.toLowerCase())
      );

  return (
    <section id="portfolio" className="py-14 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-sm font-black tracking-widest text-blue-500 uppercase">Proven Track Record</h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Completed Case Studies</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Real projects, real results — explore our portfolio across construction, solar, software &amp; more.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-extrabold rounded-xl border transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((proj) => {
            const badgeCls = CATEGORY_COLORS[proj.category] || "bg-slate-50 text-slate-600 border-slate-200";
            return (
              <Link
                key={proj.id}
                href={`/portfolio/${proj.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
              >
                {/* Cover Image */}
                <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Metric overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                      {proj.metric}
                    </span>
                  </div>
                  {proj.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-blue-500 text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full border ${badgeCls}`}>
                      {proj.category}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                      <MapPin className="w-2.5 h-2.5" /> Pakistan
                    </span>
                  </div>

                  <h4 className="text-slate-900 font-extrabold text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-slate-400 text-[10px] italic font-medium">Client: {proj.client}</p>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium flex-1 line-clamp-2">
                    {proj.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Case Study</span>
                    <span className="flex items-center gap-1 text-xs font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors">
                      View Details <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md shadow-blue-500/20"
          >
            View All Case Studies <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

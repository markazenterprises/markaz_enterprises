"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, ChevronUp, MessageCircle,
  Clock, ExternalLink, ArrowRight
} from "lucide-react";
import { SITE_INFO } from "@/app/site_info";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "All Divisions", href: "/divisions" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio & Case Studies", href: "/portfolio" },
  { name: "Industry Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const DIVISION_LINKS = [
  { name: "Solar Energy Solutions", href: "/divisions/solar", id: "DIV10" },
  { name: "Batteries & Custom Packs", href: "/divisions/batteries", id: "DIV11" },
  { name: "Turnkey Construction", href: "/divisions/construction", id: "DIV01" },
  { name: "Interior Design & Décor", href: "/divisions/interior", id: "DIV02" },
  { name: "Home Appliances & HVAC", href: "/divisions/home-appliances", id: "DIV03" },
  { name: "CCTV & Security Systems", href: "/divisions/cctv", id: "DIV04" },
  { name: "IT & Web Development", href: "/divisions/software", id: "DIV05" },
  { name: "Mobile App Engineering", href: "/divisions/mobile", id: "DIV06" },
  { name: "Architecture & IT Infrastructure", href: "/divisions/software-development", id: "DIV07" },
  { name: "Data Analytics & BI", href: "/divisions/analytics", id: "DIV08" },
  { name: "Digital Marketing", href: "/divisions/marketing", id: "DIV09" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B1E3D] border-t border-[#F5A623]/10 overflow-hidden">
      {/* Ambient glow orbs — brand themed */}
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-[#F5A623]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-[#132C54]/80 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter Strip */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="glass-dark rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white font-black text-base">Stay Ahead — Get Industry Updates</p>
              <p className="text-slate-400 text-xs mt-0.5">Solar ROI guides, construction tips & tech insights direct to your inbox</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full sm:w-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for newsletter"
                className="flex-1 sm:w-56 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold placeholder-slate-500 focus:outline-none focus:border-[#F5A623] focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] text-xs font-black rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA Strip */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="glass-dark rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-black text-base">Start Your Project Today</p>
              <p className="text-slate-400 text-xs mt-0.5">Free consultation · Fast response · Pakistan-wide coverage</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20start%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5 transition-all animate-pulse"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp 1: {SITE_INFO.contact.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20start%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-green-650 text-white shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp 2: {SITE_INFO.contact.phone2}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider btn-ghost"
              >
                Send Brief <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.05]">

          {/* Col 1: Brand — 4 cols */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-[#F5A623]/70 shadow-lg shadow-[#F5A623]/15 group-hover:border-[#E08E00] transition-colors">
                <Image src="/logo.svg" alt="Markaz Enterprises Logo" fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white block group-hover:text-blue-400 transition-colors">MARKAZ</span>
                <span className="text-[10px] font-black tracking-[0.25em] text-amber-400 block -mt-1">ENTERPRISES</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Pakistan&apos;s most trusted consolidated multi-industry solutions provider — delivering
              Construction, Solar Energy, CCTV Security, Software, Mobile Apps, Interior Design,
              and Digital Marketing under one brand roof.
            </p>

            {/* Contact quick access */}
            <div className="space-y-2.5">
              <a href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 transition-colors font-semibold group">
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-800/40 flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors font-bold">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                WhatsApp 1: {SITE_INFO.contact.phone}
              </a>
              <a href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 transition-colors font-semibold group">
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-800/40 flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors font-bold">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                WhatsApp 2: {SITE_INFO.contact.phone2}
              </a>
              <a href={`mailto:${SITE_INFO.contact.email}`} className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition-colors font-semibold group">
                <div className="w-7 h-7 rounded-lg bg-amber-600/20 border border-amber-800/40 flex items-center justify-center group-hover:bg-amber-600/30 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                {SITE_INFO.contact.email}
              </a>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-800/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="leading-relaxed">{SITE_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-800/40 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                </div>
                Mon–Sat: 9:00 AM – 6:00 PM PKT
              </div>
            </div>
          </div>

          {/* Col 2: Navigation — 2 cols */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-black text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-xs font-medium hover:text-[#F5A623] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#F5A623] transition-colors flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: All Divisions — 3 cols */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-black text-xs uppercase tracking-widest">
              All 11 Divisions
            </h4>
            <ul className="space-y-2">
              {DIVISION_LINKS.map((div) => (
                <li key={div.href}>
                  <Link
                    href={div.href}
                    className="text-slate-400 text-xs font-medium hover:text-[#F5A623] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[10px] font-black text-slate-600 group-hover:text-[#E08E00] transition-colors w-10 flex-shrink-0">
                      {div.id}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{div.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services + Legal — 3 cols */}
          <div className="md:col-span-3 space-y-6">
            {/* Top services */}
            <div className="space-y-3">
              <h4 className="text-white font-black text-xs uppercase tracking-widest">
                Popular Services
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "LiFePO4 Battery Catalogue", href: "/products" },
                  { name: "Custom Battery Quote", href: "/custom-battery-quote" },
                  { name: "Solar Installation Karachi", href: "/services/solar-installation-karachi" },
                  { name: "NEPRA Net Metering License", href: "/services/net-metering-nepra-license" },
                  { name: "Grey Structure Construction", href: "/services/grey-structure-construction" },
                  { name: "Corporate Office Interior", href: "/services/corporate-office-interior" },
                  { name: "CCTV Installation", href: "/services/cctv-surveillance-installation" },
                  { name: "Custom ERP Software", href: "/services/custom-erp-software-pakistan" },
                ].map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="text-slate-400 text-xs font-medium hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage badge */}
            <div className="glass-dark rounded-xl p-3.5 space-y-1.5">
              <p className="text-white font-black text-xs">🗺️ Pakistan-Wide Coverage</p>
              <p className="text-slate-300 text-[10px] leading-relaxed">
                Karachi · Lahore · Islamabad · Multan · Hyderabad · Rawalpindi
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-center sm:text-left">
            <span className="text-slate-400">
              © {new Date().getFullYear()} Markaz Enterprises. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <Link href="/privacy" className="hover:text-[#F5A623] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#F5A623] transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" target="_blank" className="hover:text-[#F5A623] transition-colors">Sitemap</Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            id="back-to-top"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass-dark text-slate-300 hover:text-white font-bold text-xs transition-all hover:-translate-y-0.5 hover:border-[#F5A623]/50"
          >
            Top <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

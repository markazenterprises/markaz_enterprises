"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, Sun, BatteryCharging, ShoppingBag, Sliders } from "lucide-react";
import { SITE_INFO } from "@/app/site_info";

const NAV_LINKS = [
  { name: "Home",         href: "/" },
  { name: "Divisions",    href: "/divisions" },
  { name: "About Us",     href: "/about" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Insights",     href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [energyDropdownOpen, setEnergyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEnergyDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEnergyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isEnergyActive =
    pathname.startsWith("/products") ||
    pathname.startsWith("/custom-battery-quote") ||
    pathname === "/divisions/solar" ||
    pathname === "/divisions/batteries";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-[#0B1E3D]/98 backdrop-blur-md border-b border-[#F5A623]/10"
      }`}
    >
      {/* ── Top info bar ────────────────────────────── */}
      <div className="bg-[#0B1E3D] text-slate-300 text-[11px] py-1.5 px-4 border-b border-[#F5A623]/15">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-semibold"
                >
                  {SITE_INFO.contact.phone}
                </a>
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-semibold"
                >
                  {SITE_INFO.contact.phone2}
                </a>
              </span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <a
                href={`mailto:${SITE_INFO.contact.email}`}
                className="hover:text-amber-400 transition-colors font-semibold"
              >
                {SITE_INFO.contact.email}
              </a>
            </span>
          </div>
          <span className="text-amber-400 font-bold">
            ● Solar &amp; Lithium Battery Solutions · 11 Divisions Pakistan
          </span>
        </div>
      </div>

      {/* ── Main nav bar ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#F5A623] shadow-md shadow-[#F5A623]/20 transition-transform group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Markaz Enterprises Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-none">
            <span className={`font-black text-lg tracking-tight block transition-colors ${scrolled ? "text-white" : "text-white"}`}>
              MARKAZ
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-[#F5A623] block">
              ENTERPRISES
            </span>
          </div>
        </Link>

        {/* Nav links — center */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {/* Home */}
          <Link
            href="/"
            className={`relative px-3.5 py-2 text-[13px] font-bold rounded-lg transition-all duration-200 ${
              pathname === "/"
                ? "text-[#F5A623] bg-[#F5A623]/10"
                : scrolled
                ? "text-slate-200 hover:text-[#F5A623] hover:bg-[#F5A623]/08"
                : "text-slate-200 hover:text-[#F5A623] hover:bg-white/10"
            }`}
          >
            Home
          </Link>

          {/* Energy Solutions Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setEnergyDropdownOpen(true)}
            onMouseLeave={() => setEnergyDropdownOpen(false)}
          >
            <button
              onClick={() => setEnergyDropdownOpen(!energyDropdownOpen)}
              className={`relative px-3.5 py-2 text-[13px] font-bold rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
                isEnergyActive
                  ? scrolled
                    ? "text-amber-600 bg-amber-50"
                    : "text-amber-400 bg-white/10"
                  : scrolled
                  ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50/70"
                  : "text-slate-200 hover:text-amber-300 hover:bg-white/10"
              }`}
              aria-expanded={energyDropdownOpen}
            >
              <span>Energy Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${energyDropdownOpen ? "rotate-180 text-amber-400" : ""}`} />
              <span
                className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-amber-500 transition-all duration-300 ${
                  isEnergyActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {energyDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-2xl bg-[#0B1E3D]/98 backdrop-blur-2xl border border-[#F5A623]/20 p-2 shadow-2xl space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link
                  href="/divisions/solar"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#132C54] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white group-hover:text-amber-300 block">Solar Energy Division</span>
                    <span className="text-[10px] text-slate-400 block">Hybrid, On-Grid &amp; NEPRA Licensing</span>
                  </div>
                </Link>

                <Link
                  href="/divisions/batteries"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#132C54] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white group-hover:text-emerald-300 block">Batteries &amp; Custom Packs</span>
                    <span className="text-[10px] text-slate-400 block">LiFePO4 Cells, BMS &amp; ESS</span>
                  </div>
                </Link>

                <Link
                  href="/products"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#132C54] transition-colors group border-t border-[#F5A623]/15 pt-2"
                >
                  <div className="p-2 rounded-lg bg-[#F5A623]/20 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white group-hover:text-[#F5A623] block">Product Catalogue</span>
                    <span className="text-[10px] text-slate-400 block">EVE Cells, Smart BMS, Casings</span>
                  </div>
                </Link>

                <Link
                  href="/custom-battery-quote"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#132C54] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#F5A623]/15 text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-[#0F172A] transition-colors">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white group-hover:text-[#F5A623] block">Custom Battery Quote</span>
                    <span className="text-[10px] text-slate-400 block">Configure Voltage &amp; Capacity</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Other Nav links */}
          {NAV_LINKS.slice(1).map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-bold rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#F5A623] bg-[#F5A623]/10"
                    : scrolled
                    ? "text-slate-200 hover:text-[#F5A623] hover:bg-[#F5A623]/08"
                    : "text-slate-200 hover:text-[#F5A623] hover:bg-white/10"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-[#F5A623] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link
            href="/products"
            className="text-[11px] font-bold text-amber-300 hover:text-amber-200 px-3 py-2 rounded-xl transition-colors border border-amber-500/30 bg-amber-500/10"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="btn-primary text-[11px] py-2.5 px-5 rounded-xl"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? "bg-[#132C54] text-white hover:bg-[#F5A623]/20 hover:text-[#F5A623]"
              : "bg-[#132C54] text-white hover:bg-[#F5A623]/20"
          }`}
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile nav drawer ──────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1E3D]/98 backdrop-blur-xl border-b border-[#F5A623]/15 px-5 py-5 space-y-1 shadow-2xl">
          <Link
            href="/"
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/" ? "bg-[#F5A623] text-[#0F172A]" : "text-slate-200 hover:bg-[#132C54] hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* Energy Solutions Sub-Header in Mobile */}
          <div className="pt-2 pb-1 px-4 text-[10px] font-black uppercase tracking-wider text-amber-400">
            Energy &amp; Battery Solutions
          </div>
          <Link
            href="/products"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname.startsWith("/products") ? "bg-amber-500 text-slate-950" : "text-amber-300 hover:bg-slate-800"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Product Catalogue</span>
          </Link>
          <Link
            href="/divisions/batteries"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/divisions/batteries" ? "bg-emerald-600 text-white" : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <BatteryCharging className="w-4 h-4" />
            <span>Batteries Division (DIV11)</span>
          </Link>
          <Link
            href="/divisions/solar"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/divisions/solar" ? "bg-amber-600 text-white" : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Solar Energy (DIV10)</span>
          </Link>
          <Link
            href="/custom-battery-quote"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              pathname === "/custom-battery-quote" ? "bg-purple-600 text-white" : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Custom Battery Quote</span>
          </Link>

          <div className="pt-2 pb-1 px-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
            General Divisions &amp; Company
          </div>
          {NAV_LINKS.slice(1).map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-[#F5A623] text-[#0F172A]"
                    : "text-slate-200 hover:bg-[#132C54] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              className="block text-center btn-primary text-[11px] py-3 rounded-xl"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

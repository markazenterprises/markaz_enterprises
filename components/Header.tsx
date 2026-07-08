"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-slate-950/95 backdrop-blur-md"
      }`}
    >
      {/* ── Top info bar ───────────────────────────────── */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800/80">
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
            ● Multi-Industry Solutions Partner · Pakistan
          </span>
        </div>
      </div>

      {/* ── Main nav bar ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-blue-500 shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
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
            <span className={`font-black text-lg tracking-tight block transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
              MARKAZ
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-blue-500 block">
              ENTERPRISES
            </span>
          </div>
        </Link>

        {/* Nav links — center */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-bold rounded-lg transition-all duration-200 group ${
                  isActive
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-400 bg-white/10"
                    : scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50/70"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
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
              ? "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              : "bg-slate-800 text-white hover:bg-slate-700"
          }`}
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile nav drawer ──────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-5 py-5 space-y-1 shadow-2xl">
          {[
            ...NAV_LINKS,
            { name: "Contact", href: "/contact" },
          ].map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-200 hover:bg-slate-800 hover:text-white"
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

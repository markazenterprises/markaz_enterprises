"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu, X, Home, Grid3x3, Info, Briefcase,
  BookOpen, Phone, ChevronRight,
  MessageCircle, Mail
} from "lucide-react";
import { SITE_INFO } from "@/app/site_info";

const NAV_LINKS = [
  { name: "Home",        href: "/",          icon: Home },
  { name: "Divisions",   href: "/divisions",  icon: Grid3x3 },
  { name: "About Us",    href: "/about",      icon: Info },
  { name: "Case Studies",href: "/portfolio",  icon: Briefcase },
  { name: "Insights",    href: "/blog",       icon: BookOpen },
  { name: "Contact",     href: "/contact",    icon: Phone },
];

interface SidebarNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SidebarNav({ isOpen, onToggle }: SidebarNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHref(window.location.pathname);
    }
  }, []);

  return (
    <>
      {/* ── Mobile Hamburger Trigger ─────────────────────────── */}
      <button
        onClick={onToggle}
        id="sidebar-toggle"
        aria-label="Toggle navigation menu"
        className={`lg:hidden fixed top-4 left-4 z-[60] p-2.5 rounded-xl transition-all duration-300 shadow-lg ${
          isOpen
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-700 border border-slate-200"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* ── Mobile Overlay ───────────────────────────────────── */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[45] bg-slate-900/40 backdrop-blur-sm"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar Panel ────────────────────────────────────── */}
      <aside
        className={`sidebar-nav glass-nav flex flex-col ${isOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => { if (isOpen) onToggle(); }}>
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-blue-500 shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Markaz Enterprises Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-slate-900 block leading-tight">
                MARKAZ
              </span>
              <span className="text-[10px] font-black tracking-[0.25em] text-blue-500 block">
                ENTERPRISES
              </span>
            </div>
          </Link>
        </div>

        {/* Quick contact strip */}
        <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
          <a
            href={`tel:${SITE_INFO.contact.phone}`}
            className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {SITE_INFO.contact.phone}
          </a>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-3">
            Navigation
          </p>
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => { setActiveHref(link.href); if (isOpen) onToggle(); }}
                className={`nav-item group ${isActive ? "active" : ""}`}
              >
                <span className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-blue-100 text-blue-600" : "text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50"
                }`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="flex-1">{link.name}</span>
                {isActive && <ChevronRight className="w-4 h-4 text-blue-400" />}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="pt-4 pb-2">
            <div className="h-px bg-slate-100" />
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={() => { if (isOpen) onToggle(); }}
            className="block w-full text-center btn-primary text-xs py-3 px-4 rounded-xl mt-2 uppercase tracking-wider"
          >
            Free Consultation
          </Link>
        </nav>

        {/* Bottom: Social + Status */}
        <div className="px-5 py-5 border-t border-slate-100 space-y-4">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_INFO.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_INFO.contact.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
             <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-100 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-100 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Pakistan · Mon–Sat 9AM–6PM
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

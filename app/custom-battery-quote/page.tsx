"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { SITE_INFO } from "@/app/site_info";
import {
  Sliders, BatteryCharging, Send, CheckCircle2, MessageSquare,
  Phone, Mail, MapPin, ChevronLeft, ShieldCheck, Zap, Sparkles
} from "lucide-react";

export default function CustomBatteryQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    application: "Solar Energy Storage",
    voltage: "48V / 51.2V",
    capacityAh: "100Ah",
    dimensions: "",
    quantity: "1 unit",
    bmsRequirement: "Smart Inverter Communication (CAN/RS485)",
    commProtocol: "CAN Bus + RS485",
    casingType: "Wall-Mount Steel Casing",
    projectNotes: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError("Full Name and WhatsApp / Phone Number are required.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Custom Battery Configuration Inquiry - Markaz Enterprises*
• *Client Name:* ${formData.name}
• *Phone / WA:* ${formData.phone}
• *Company:* ${formData.company || "Individual"}
• *Email:* ${formData.email || "N/A"}
• *Application:* ${formData.application}
• *Voltage:* ${formData.voltage}
• *Capacity:* ${formData.capacityAh}
• *Quantity:* ${formData.quantity}
• *BMS Choice:* ${formData.bmsRequirement}
• *Protocol:* ${formData.commProtocol}
• *Casing:* ${formData.casingType}
• *Dimensions / Notes:* ${formData.dimensions || formData.projectNotes || "Standard enclosure"}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-100 selection:bg-amber-500 selection:text-slate-950" style={{ background: "#060c1a" }}>
      <main className="flex-1">

        {/* ── Breadcrumb Bar ── */}
        <section className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Products Catalogue</span>
            </Link>
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-wider hidden sm:inline-block">
              Custom Battery Engineering
            </span>
          </div>
        </section>

        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden">
          {/* Real installation photo backdrop */}
          <div className="absolute inset-0">
            <Image
              src="/projects/foxess-inverter-battery-installation.jpg"
              alt="LiFePO4 battery installation"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark overlays: deep navy tint + subtle circuit pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040c1a]/95 via-[#071428]/85 to-[#040c1a]/75" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_50%,rgba(59,130,246,0.08),transparent)]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2394a3b8' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2394a3b8' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="max-w-2xl space-y-6">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sliders className="w-3.5 h-3.5" /> Engineering &amp; Custom Sizing
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Request a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                  Custom LiFePO4
                </span>{" "}
                Battery Pack Quote
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Specify your target voltage, Ah capacity, physical dimensions, and inverter communications. Our engineering division in Karachi will generate a full component BOQ and formal pricing within 24 hours.
              </p>

              {/* Trust badges row */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "Grade-A EVE Cells" },
                  { label: "Smart Active BMS" },
                  { label: "5-Year Warranty" },
                  { label: "Karachi Assembled" },
                ].map(({ label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 border border-white/15 text-white/85 text-xs font-semibold backdrop-blur-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── Main Form + Info Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Info Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">
                  Why Custom Lithium Packs?
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Engineered to Exact Application Loads
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Off-the-shelf lead-acid and generic battery boxes often fall short in high-cycle, demanding Pakistani industrial and residential conditions. We build packs with Grade-A EVE prismatic cells, genuine smart active balancing BMS, pure copper busbars, and robust steel enclosures.
                </p>
              </div>

              {/* Guarantees List */}
              <div className="space-y-3">
                {[
                  {
                    title: "Grade-A Matched EVE Cells",
                    desc: "Every cell is impedance-tested and voltage-balanced before assembly.",
                  },
                  {
                    title: "Active Balance Smart BMS",
                    desc: "Closed-loop communication with Growatt, Deye, Victron & FoxESS inverters.",
                  },
                  {
                    title: "Custom Form Factor & Casings",
                    desc: "Fitted to your exact equipment bay, wall space, or rack dimensions.",
                  },
                  {
                    title: "Fast Turnaround in Karachi",
                    desc: "Quick turnaround on custom configurations with local testing and warranty support.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">
                  Prefer Direct Discussion?
                </span>
                <h4 className="text-sm font-extrabold text-white">
                  Connect Directly with our Lead Battery Engineer
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Specs on WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE_INFO.contact.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold text-xs rounded-xl border border-slate-700 transition-all"
                  >
                    <Phone className="w-4 h-4 text-blue-400" /> {SITE_INFO.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <BorderGlow
                edgeSensitivity={25}
                glowColor="45 100 50"
                backgroundColor="rgba(10, 18, 36, 0.98)"
                borderRadius={28}
                glowRadius={50}
                glowIntensity={0.9}
                animated={true}
                colors={["#f59e0b", "#3b82f6", "#10b981"]}
              >
                <div className="p-6 sm:p-10 space-y-6">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-white">Configuration Quote Request Received!</h3>
                      <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-amber-400">{formData.name}</span>. Our battery engineering team has received your custom spec ({formData.voltage}, {formData.capacityAh}, {formData.application}) and will provide a component BOQ within 24 hours.
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                        <a
                          href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=${generateWhatsAppMessage()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl transition-all shadow-lg"
                        >
                          <MessageSquare className="w-4 h-4" /> Fast-Track via WhatsApp
                        </a>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700"
                        >
                          Configure Another Pack
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">
                          Step 1 of 2: Technical Specifications
                        </span>
                        <h3 className="text-xl font-black text-white">Custom Battery Parameters</h3>
                      </div>

                      {formError && (
                        <div className="p-3 bg-rose-500/20 text-rose-300 rounded-xl text-xs font-bold border border-rose-500/30">
                          {formError}
                        </div>
                      )}

                      {/* Technical Specs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Application *</label>
                          <select
                            value={formData.application}
                            onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="Solar Energy Storage">Solar Energy Storage (Hybrid/Off-Grid)</option>
                            <option value="UPS & Home Inverter Backup">UPS &amp; Home Inverter Backup</option>
                            <option value="Electric Lifters & Material Handling">Electric Lifters &amp; Material Handling</option>
                            <option value="Hydraulic Lifting Equipment">Hydraulic Lifting Equipment</option>
                            <option value="Electric Vehicle / Conversion">Electric Vehicle (EV) / Conversion</option>
                            <option value="Telecom & Base Station Backup">Telecom &amp; Base Station Backup</option>
                            <option value="Marine & RV Power">Marine &amp; RV Power</option>
                            <option value="Other Custom Application">Other Custom Application</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Nominal Voltage *</label>
                          <select
                            value={formData.voltage}
                            onChange={(e) => setFormData({ ...formData, voltage: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="12V / 12.8V (4S)">12V / 12.8V (4S LiFePO4)</option>
                            <option value="24V / 25.6V (8S)">24V / 25.6V (8S LiFePO4)</option>
                            <option value="48V / 51.2V (15S/16S)">48V / 51.2V (15S/16S Standard ESS)</option>
                            <option value="60V (20S)">60V (20S)</option>
                            <option value="72V (24S)">72V (24S)</option>
                            <option value="High Voltage (>100V)">High-Voltage Commercial (&gt;100V)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Required Capacity (Ah) *</label>
                          <select
                            value={formData.capacityAh}
                            onChange={(e) => setFormData({ ...formData, capacityAh: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="100Ah (EVE Grade-A)">100Ah (EVE Grade-A LF100LA)</option>
                            <option value="200Ah (EVE Grade-A)">200Ah (EVE Grade-A 3.2V 200Ah)</option>
                            <option value="314Ah (EVE High-Capacity)">314Ah (EVE 6000+ Cycles)</option>
                            <option value="315Ah Pro (EVE Enhanced)">315Ah Pro (EVE High Density)</option>
                            <option value="Other Custom Ah">Other Custom Ah Specification</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Quantity</label>
                          <select
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="1 unit">1 unit (Prototype / Sample / Residential)</option>
                            <option value="2 - 5 units">2 – 5 units</option>
                            <option value="6 - 20 units">6 – 20 units (Commercial Project)</option>
                            <option value="20+ units">20+ units (Bulk Fleet / Enterprise)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">BMS Specification</label>
                          <select
                            value={formData.bmsRequirement}
                            onChange={(e) => setFormData({ ...formData, bmsRequirement: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="Smart Inverter Communication (CAN/RS485)">Smart Inverter Communication (CAN/RS485)</option>
                            <option value="JK Active Balancing 100A-200A">JK Active Balancing 100A–200A w/ Bluetooth</option>
                            <option value="Standard Continuous 60A/100A">Standard Continuous 60A/100A Protection</option>
                            <option value="Heavy-Duty 200A Metal Enclosed">Heavy-Duty 200A Metal Enclosed Housing</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Casing / Enclosure Preference</label>
                          <select
                            value={formData.casingType}
                            onChange={(e) => setFormData({ ...formData, casingType: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          >
                            <option value="Wall-Mount Steel Casing">Wall-Mount Steel Casing (w/ Screen &amp; Breaker)</option>
                            <option value="Server Rack-Mount 16S Enclosure">Server Rack-Mount 16S Enclosure</option>
                            <option value="Heavy-Duty Floor Case w/ Handles">Heavy-Duty Floor Case w/ Handles</option>
                            <option value="Compact 4S/8S Drop-In Case">Compact 4S/8S Drop-In Case</option>
                            <option value="No Casing (DIY Cells & BMS only)">No Casing (Cells + BMS + Busbars only)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">Physical Dimensions / Constraints (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. Max space available: 600mm × 400mm × 250mm, Weight limit 60kg"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      {/* Contact Info Header */}
                      <div className="pt-4 border-t border-slate-800">
                        <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">
                          Step 2 of 2: Contact &amp; Delivery Location
                        </span>
                        <h3 className="text-xl font-black text-white mt-1">Your Details</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            placeholder="e.g. Engr. Salman Raza"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">WhatsApp / Mobile *</label>
                          <input
                            type="text"
                            placeholder="0343-XXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Company / Organization</label>
                          <input
                            type="text"
                            placeholder="e.g. Industrial Automation Pvt Ltd"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1.5">Email Address</label>
                          <input
                            type="email"
                            placeholder="salman@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">Additional Project Requirements / Inverter Model</label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Need communication cable for Growatt SPF 5000 ES inverter. Required delivery to Korangi Industrial Area Karachi."
                          value={formData.projectNotes}
                          onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-shimmer bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black py-4 rounded-xl shadow-xl shadow-amber-950/30 text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" /> Submit Custom Battery Specification
                      </button>
                    </form>
                  )}
                </div>
              </BorderGlow>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

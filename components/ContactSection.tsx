"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { SITE_INFO } from "@/app/site_info";
import BorderGlow from "@/components/ui/BorderGlow";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "Solar Energy Solutions",
    budget: "PKR 500,000 - 1,500,000",
    description: "",
    contactMethod: "WhatsApp"
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError("Full Name and Phone Number are required.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 border-b border-[#F5A623]/10 relative" style={{ background: "#0B1E3D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <h2 className="text-sm font-black tracking-widest text-[#F5A623] uppercase">
                Get In Touch
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Request a Consultation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you need a hybrid solar audit, turnkey construction estimate, software development proposal, or CCTV installation, our team is ready to connect.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-700/50 shadow-sm" style={{ background: "rgba(15,23,42,0.8)" }}>
                <div className="p-3 bg-[#F5A623]/20 text-[#F5A623] rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">WhatsApp Support</h4>
                  <a href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-[#F5A623] block">
                    {SITE_INFO.contact.phone} (Primary)
                  </a>
                  <a href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-400 hover:text-[#F5A623] block mt-0.5">
                    {SITE_INFO.contact.phone2} (Secondary)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-700/50 shadow-sm" style={{ background: "rgba(15,23,42,0.8)" }}>
                <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Email Address</h4>
                  <a href={`mailto:${SITE_INFO.contact.email}`} className="text-xs font-semibold text-slate-400 hover:text-[#F5A623] block">
                    {SITE_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-700/50 shadow-sm" style={{ background: "rgba(15,23,42,0.8)" }}>
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Karachi Head Office</h4>
                  <p className="text-xs font-semibold text-slate-400 leading-relaxed">
                    {SITE_INFO.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#132C54] border border-[#F5A623]/20 text-white rounded-3xl space-y-3">
              <span className="text-[10px] font-black text-[#F5A623] uppercase tracking-widest block">Direct Executive Connect</span>
              <h5 className="font-extrabold text-sm">Need immediate assistance for a commercial RFP?</h5>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl transition-colors shadow-lg"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp 1
                </a>
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-colors shadow-lg"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp 2
                </a>
              </div>
            </div>
          </div>

          {/* Form Right wrapped in BorderGlow */}
          <div className="lg:col-span-7 flex flex-col">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="210 90 60"
              backgroundColor="#0d1526"
              borderRadius={28}
              glowRadius={40}
              colors={['#F5A623', '#E08E00', '#0EA5E9']}
              className="w-full h-full"
            >
              <div className="p-8 sm:p-10 text-white space-y-6" style={{ background: "rgba(10,17,32,0.97)" }}>
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-white">Consultation Request Received!</h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Thank you, <span className="font-bold text-[#F5A623]">{formData.name}</span>. Our division specialist will contact you via {formData.contactMethod} shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] font-bold text-xs rounded-xl"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h4 className="font-extrabold text-xl text-slate-900 mb-6">Send Project Inquiry</h4>

                    {formError && (
                      <div className="p-3 bg-rose-500/20 text-rose-300 rounded-xl text-xs font-bold border border-rose-500/30">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-400 block mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Athar Siddiqui"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 block mb-1.5">Phone / WhatsApp *</label>
                        <input
                          type="text"
                          placeholder="0343-XXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-400 block mb-1.5">Email Address</label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 block mb-1.5">Target Division</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#132C54] border border-[#F5A623]/20 text-xs font-semibold text-white focus:outline-none focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
                        >
                          <option value="Solar Energy Solutions">Solar Energy Solutions</option>
                          <option value="Battery Systems & Custom Packs">Battery Systems &amp; Custom Packs</option>
                          <option value="Construction & Civil Works">Construction &amp; Civil Works</option>
                          <option value="Interior Design & Fitouts">Interior Design &amp; Fitouts</option>
                          <option value="IT & Software Engineering">IT &amp; Software Engineering</option>
                          <option value="CCTV & Security Networks">CCTV &amp; Security Networks</option>
                          <option value="Digital Marketing & Lead Gen">Digital Marketing &amp; Lead Gen</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1.5">Project Details / Scope</label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe your scope, location in Pakistan, and required timeline..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132C54] border border-[#F5A623]/20 text-xs font-semibold text-white focus:outline-none focus:border-[#F5A623] resize-none focus:ring-2 focus:ring-[#F5A623]/20"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-shimmer bg-gradient-to-r from-[#F5A623] to-[#E08E00] hover:from-[#E08E00] hover:to-[#c47600] text-[#0F172A] font-extrabold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" /> Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}

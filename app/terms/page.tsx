import React from "react";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Markaz Enterprises",
  description: "Terms and Conditions governing the use of Markaz Enterprises website and services in Pakistan. Project agreements, liability, and service terms.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-widest text-blue-600 uppercase">Legal</span>
            <h1 className="text-4xl font-black text-slate-900">Terms of Service</h1>
            <p className="text-slate-500 text-sm">Last Updated: June 2026</p>
          </div>

          {[
            {
              title: "1. Acceptance of Terms",
              body: "By accessing the Markaz Enterprises website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of this website."
            },
            {
              title: "2. Services Provided",
              body: "Markaz Enterprises provides construction, interior design, CCTV security, IT software development, mobile app development, digital marketing, data analytics, and solar energy installation services. The specific scope, timeline, and pricing for each project are defined in a separate written agreement or Bill of Quantities (BOQ)."
            },
            {
              title: "3. Project Agreements",
              body: "All projects commence upon signing of a formal agreement or payment of an advance as agreed. Verbal commitments are not binding. Any changes to project scope must be documented in writing and may affect pricing and timelines."
            },
            {
              title: "4. Payment Terms",
              body: "Standard payment terms are milestone-based as specified in individual project agreements. Delayed payments may result in work suspension. Advance payments are generally non-refundable once project work has commenced."
            },
            {
              title: "5. Warranties & Liability",
              body: "Markaz Enterprises warrants its workmanship for the periods specified in individual agreements (typically 12 months for construction and 6 months for IT systems). We are not liable for consequential, indirect, or incidental damages beyond the project contract value."
            },
            {
              title: "6. Intellectual Property",
              body: "All designs, software code, documentation, and creative assets produced by Markaz Enterprises are the property of the client upon full payment. Portfolio usage rights are retained by Markaz Enterprises unless explicitly waived in writing."
            },
            {
              title: "7. Governing Law",
              body: "These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved through negotiation in good faith or, if necessary, through the courts of courts of Karachi."
            },
            {
              title: "8. Contact",
              body: "For questions about these terms, contact us at themarkazenterprises@gmail.com or 0334-3660833."
            }
          ].map((section, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-2">
              <h2 className="text-lg font-black text-slate-900">{section.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

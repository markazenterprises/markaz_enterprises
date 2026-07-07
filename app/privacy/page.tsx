import React from "react";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Markaz Enterprises",
  description: "Privacy Policy for Markaz Enterprises website. How we collect, use and protect your personal information when you contact us or use our services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-widest text-blue-600 uppercase">Legal</span>
            <h1 className="text-4xl font-black text-slate-900">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last Updated: June 2026</p>
          </div>

          {[
            {
              title: "1. Information We Collect",
              body: "When you fill out our contact form, request a quote, or communicate with us via WhatsApp or email, we collect: your name, phone number, email address, and any project details you choose to share. We do not collect sensitive financial or payment information through our website."
            },
            {
              title: "2. How We Use Your Information",
              body: "Your information is used exclusively to: respond to your project inquiry, send you a cost estimate or proposal, and schedule a consultation with our team. We do not sell, rent, or share your personal information with third parties for marketing purposes."
            },
            {
              title: "3. Data Storage & Security",
              body: "All inquiry data submitted through our website is stored securely. We use industry-standard security protocols to protect your information from unauthorized access, alteration, or disclosure."
            },
            {
              title: "4. Cookies",
              body: "Our website uses essential cookies to ensure basic functionality. We do not use tracking cookies or third-party advertising cookies that would identify you across other websites."
            },
            {
              title: "5. Third-Party Services",
              body: "We use WhatsApp Business for direct communication. When you click our WhatsApp button, you are redirected to WhatsApp's platform, which is governed by Meta's Privacy Policy. We have no control over WhatsApp's data practices."
            },
            {
              title: "6. Your Rights",
              body: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make such a request, contact us at themarkazenterprises@gmail.com."
            },
            {
              title: "7. Contact",
              body: "For privacy-related inquiries, contact Markaz Enterprises at: themarkazenterprises@gmail.com or call 0334-3660833."
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

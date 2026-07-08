import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { SERVICES_DATA } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import { CheckCircle2, Phone, MessageCircle, ChevronLeft, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) return { title: "Service Not Found | Markaz Enterprises" };
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      siteName: "Markaz Enterprises",
      locale: "en_PK",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 py-3.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <Link href="/divisions" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <span className="text-slate-700 font-semibold">{data.h1}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-black tracking-widest text-blue-600 uppercase">
                Specialist Service
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
                {data.h1}
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                  Get Free Consultation
                </Link>
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp}?text=Hello%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(data.h1)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              {data.features && data.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">What&apos;s Included</h2>
                  <div className="space-y-3">
                    {data.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">Why Choose Markaz Enterprises?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🏆", title: "Proven Expertise", desc: "500+ successful projects delivered across Pakistan." },
                    { icon: "📋", title: "Transparent Pricing", desc: "Detailed BOQ upfront — no hidden charges or surprises." },
                    { icon: "⚡", title: "Fast Turnaround", desc: "Milestone-based execution with real-time progress updates." },
                    { icon: "🤝", title: "Dedicated Support", desc: "Account manager assigned from day one through project handover." },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="font-black text-slate-900 text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="space-y-3">
                <h2 className="text-xl font-black text-slate-900">Explore Related Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(SERVICES_DATA)
                    .filter(([s]) => s !== slug)
                    .slice(0, 4)
                    .map(([s, d]) => (
                      <Link key={s} href={`/services/${s}`} className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 bg-slate-50 border border-slate-100 rounded-lg p-3 transition-colors font-semibold">
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" /> {d.h1}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <BorderGlow
                edgeSensitivity={20}
                glowColor="220 80 60"
                backgroundColor="#0d1526"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={0.9}
                coneSpread={25}
                animated={true}
                colors={["#3b82f6", "#6366f1", "#10b981"]}
              >
                <div className="p-6 space-y-5 text-white" style={{ background: "rgba(10,17,32,0.97)" }}>
                  <h3 className="text-lg font-black text-white">Request This Service</h3>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20discuss%20service%20details.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp 1: {SITE_INFO.contact.phone}
                    </a>
                    <a
                      href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20to%20discuss%20service%20details.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-650 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp 2: {SITE_INFO.contact.phone2}
                    </a>
                    <Link href="/estimator" className="block text-center py-3 px-4 bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold rounded-xl text-sm transition-colors border border-slate-700">
                      💰 Use Budget Estimator
                    </Link>
                  </div>
                </div>
              </BorderGlow>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Our Coverage</h3>
                {["Karachi", "Lahore", "Islamabad", "Multan", "Hyderabad", "All Pakistan"].map((city, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-t border-blue-700">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-5">
            <h2 className="text-3xl font-black text-white">Start Your Project Today</h2>
            <p className="text-blue-100 text-sm">Free consultation. Detailed proposal within 48 hours.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
              Get Official Quote →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

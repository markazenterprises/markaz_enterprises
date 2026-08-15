import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { DIVISIONS_DATA } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import {
  CheckCircle2, ArrowRight, Phone, MessageCircle, ChevronLeft, Star
} from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

// Per-division hero images
const DIVISION_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  construction: {
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=70",
    ]
  },
  interior: {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop&q=70",
    ]
  },
  solar: {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "/projects/foxess-inverter-battery-installation.jpg",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&auto=format&fit=crop&q=80",
    ]
  },
  batteries: {
    hero: "/projects/foxess-inverter-battery-installation.jpg",
    gallery: [
      "/projects/foxess-inverter-battery-installation.jpg",
      "/products/48v-100ah-lifepo4-wall-mount-system.png",
      "/products/8s-16s-200a-smart-inverter-bms.png",
    ]
  },
  cctv: {
    hero: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&auto=format&fit=crop&q=70",
    ]
  },
  software: {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=70",
    ]
  },
  mobile: {
    hero: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=600&auto=format&fit=crop&q=70",
    ]
  },
  marketing: {
    hero: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=70",
    ]
  },
  analytics: {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=600&auto=format&fit=crop&q=70",
    ]
  },
  "home-appliances": {
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909144-f13d4cde6d0a?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=70",
    ]
  },
  "software-development": {
    hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=70",
    ]
  },
};

const DEFAULT_IMAGES = {
  hero: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&auto=format&fit=crop&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=70",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=70",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=70",
  ]
};

export async function generateStaticParams() {
  return Object.keys(DIVISIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = DIVISIONS_DATA[slug];
  if (!data) return { title: "Division Not Found | Markaz Enterprises" };
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

const DIVISION_CASE_STUDIES: Record<string, { slug: string; title: string; metric: string }> = {
  "construction": { slug: "gulshan-luxury-residence-construction", title: "500 Sq Yd Luxury Turnkey Residence", metric: "500 Sq Yd · 12 months" },
  "interior": { slug: "corporate-office-interior-clifton", title: "Premium Corporate Office Space", metric: "4,000 Sq Ft · 8 weeks" },
  "solar": { slug: "100kw-solar-textile-factory-karachi", title: "100kW Hybrid Solar Installation", metric: "PKR 500k/mo saved" },
  "batteries": { slug: "100kw-solar-textile-factory-karachi", title: "Industrial Solar Storage & Battery Integration", metric: "5.0kWh – 100kWh Systems" },
  "cctv": { slug: "32-camera-ip-surveillance-port-qasim", title: "32-Camera IP Surveillance Network", metric: "24/7 coverage · 30-day DVR" },
  "software": { slug: "multi-channel-warehouse-erp-system", title: "Multi-Channel Warehouse ERP System", metric: "65% ops efficiency gain" },
  "mobile": { slug: "react-native-field-app-logistics", title: "React Native Rider Dispatch App", metric: "+40% delivery speed" },
  "marketing": { slug: "national-seo-lead-gen-campaign", title: "National SEO & Lead Funnel Campaign", metric: "+70% qualified leads/mo" },
  "analytics": { slug: "powerbi-retail-analytics-dashboard", title: "PowerBI Retail Analytics Pipeline", metric: "-22% stock wastage" },
  "home-appliances": { slug: "central-hvac-commercial-building", title: "Commercial HVAC & VRF Installation", metric: "-35% electric bills" },
  "software-development": { slug: "corporate-network-server-room-setup", title: "IT Data Center & Server Room Setup", metric: "99.99% network uptime" },
};

const DIVISION_CROSS_LINKS: Record<string, { slug: string; name: string }[]> = {
  "construction": [
    { slug: "interior", name: "Premium Interior Design" },
    { slug: "solar", name: "Solar Energy Solutions" },
    { slug: "software-development", name: "Architecture & IT" }
  ],
  "interior": [
    { slug: "construction", name: "Turnkey Construction" },
    { slug: "home-appliances", name: "Home Appliances" }
  ],
  "solar": [
    { slug: "batteries", name: "Battery Systems & Custom Packs" },
    { slug: "construction", name: "Turnkey Construction" },
    { slug: "analytics", name: "Data Analytics & BI" }
  ],
  "batteries": [
    { slug: "solar", name: "Solar Energy Solutions" },
    { slug: "analytics", name: "Data Analytics & Telemetry" },
    { slug: "construction", name: "Turnkey Construction" }
  ],
  "cctv": [
    { slug: "software-development", name: "Architecture & IT" },
    { slug: "software", name: "IT & Web Development" }
  ],
  "software": [
    { slug: "mobile", name: "Mobile App Engineering" },
    { slug: "analytics", name: "Data Analytics & BI" },
    { slug: "software-development", name: "Architecture & IT" }
  ],
  "mobile": [
    { slug: "software", name: "IT & Web Development" },
    { slug: "analytics", name: "Data Analytics & BI" }
  ],
  "marketing": [
    { slug: "analytics", name: "Data Analytics & BI" },
    { slug: "software", name: "IT & Web Development" }
  ],
  "analytics": [
    { slug: "software", name: "IT & Web Development" },
    { slug: "marketing", name: "Digital Marketing" },
    { slug: "solar", name: "Solar Energy Solutions" }
  ],
  "home-appliances": [
    { slug: "interior", name: "Premium Interior Design" },
    { slug: "construction", name: "Turnkey Construction" }
  ],
  "software-development": [
    { slug: "construction", name: "Turnkey Construction" },
    { slug: "cctv", name: "CCTV & Security" },
    { slug: "software", name: "IT & Web Development" }
  ]
};

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const data = DIVISIONS_DATA[slug];

  if (!data) return notFound();

  const relatedCaseStudy = DIVISION_CASE_STUDIES[slug];
  const relatedCrossLinks = DIVISION_CROSS_LINKS[slug];

  const siteDiv = SITE_INFO.divisions.find((d) => d.id === data.divisionId);
  const imgs = DIVISION_IMAGES[slug] || DEFAULT_IMAGES;

  return (
    <div className="min-h-screen flex flex-col text-slate-100 overflow-x-hidden" style={{ background: "#060c1a" }}>
      <main className="flex-1" style={{ background: "#060c1a" }}>
        {/* Breadcrumb */}
        <div className="border-b border-slate-800/60 py-3.5 px-6" style={{ background: "#080f1d" }}>
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-650" />
            <Link href="/divisions" className="hover:text-blue-400 transition-colors">Divisions</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-650" />
            <span className="text-white font-semibold">{data.h1}</span>
          </div>
        </div>

        {/* Hero with division image */}
        <section className="relative min-h-[300px] lg:min-h-[360px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${imgs.hero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/95 via-[#0B1E3D]/70 to-[#0B1E3D]/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-20 w-full">
            <div className="max-w-3xl space-y-3">
              {data.divisionId && (
                <span className="inline-flex px-2.5 py-1 bg-[#F5A623] text-[#0F172A] backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest uppercase">
                  {data.divisionId} — Specialist Division
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {data.h1}
              </h1>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/contact" className="px-5 py-2.5 bg-[#F5A623] hover:bg-[#E08E00] text-[#0F172A] font-extrabold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#F5A623]/25">
                  Get Free Consultation
                </Link>
                {(slug === "batteries" || slug === "solar") && (
                  <>
                    <Link href="/products" className="px-5 py-2.5 bg-[#132C54] hover:bg-[#1e3d6e] border border-[#F5A623]/30 text-white font-black rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                      ⚡ Product Catalogue
                    </Link>
                    <Link href="/custom-battery-quote" className="px-5 py-2.5 bg-[#E08E00] hover:bg-[#F5A623] text-[#0F172A] font-extrabold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                      🛠️ Custom Battery Sizing
                    </Link>
                  </>
                )}
                <a
                  href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20am%20interested%20in%20${encodeURIComponent(data.h1)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-md"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Strip */}
        <div className="bg-[#0B1E3D] py-6 border-y border-[#F5A623]/20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center text-white">
            {[
              { num: "500+", label: "Projects Done" },
              { num: "10+ Yrs", label: "Experience" },
              { num: "98%", label: "Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-2xl font-black text-[#F5A623]">{s.num}</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Division Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Features + Services + FAQs */}
            <div className="lg:col-span-2 space-y-10">

              {/* Image Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {imgs.gallery.map((src, i) => {
                  const isProductAsset = src.startsWith("/products/");
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl overflow-hidden shadow-md ${
                        i === 0 ? "col-span-2 row-span-1 aspect-[16/9]" : "aspect-square"
                      } ${isProductAsset ? "bg-[#081222] border border-slate-800 p-4 flex items-center justify-center" : "bg-slate-100"}`}
                    >
                      <img
                        src={src}
                        alt={`${data.h1} ${i + 1}`}
                        className={`${
                          isProductAsset ? "object-contain max-h-full max-w-full" : "object-cover w-full h-full"
                        } hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                  );
                })}
              </div>

              {data.features && data.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">What&apos;s Included</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {siteDiv && siteDiv.services.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">All Services in This Division</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {siteDiv.services.map((svc, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.faqs && data.faqs.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {data.faqs.map((faq, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2 hover:border-blue-200 transition-colors">
                        <h3 className="text-base font-black text-slate-900 flex items-start gap-2">
                          <Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />{faq.q}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
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
                  <h3 className="text-lg font-black text-white">Request a Free Quote</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Get a detailed scope and pricing proposal from our specialist team within 48 hours.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(data.h1)}.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp 1: {SITE_INFO.contact.phone}
                    </a>
                    <a
                      href={`https://wa.me/${SITE_INFO.contact.whatsapp2.replace('+', '')}?text=Hello%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(data.h1)}.`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-650 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp 2: {SITE_INFO.contact.phone2}
                    </a>
                    <Link href="/contact" className="block text-center py-3 px-4 bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold rounded-xl text-sm transition-colors border border-slate-700">
                      Send Project Brief →
                    </Link>
                  </div>
                </div>
              </BorderGlow>

              {siteDiv?.brands && siteDiv.brands.length > 0 && (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Trusted Brands</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteDiv.brands.map((brand, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold shadow-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Company Stats</h3>
                {[
                  { num: "500+", label: "Projects Delivered" },
                  { num: "10+", label: "Years Experience" },
                  { num: "98%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500 text-sm font-semibold">{stat.label}</span>
                    <span className="text-slate-900 font-black text-lg">{stat.num}</span>
                  </div>
                ))}
              </div>

              {/* Related Case Study */}
              {relatedCaseStudy && (
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-black text-blue-700 uppercase tracking-wider">🏆 Case Study</h3>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{relatedCaseStudy.title}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{relatedCaseStudy.metric}</p>
                  </div>
                  <Link href={`/portfolio/${relatedCaseStudy.slug}`} className="block text-center py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm">
                    Read Case Study →
                  </Link>
                </div>
              )}

              {/* Related Divisions Cross-Links */}
              {relatedCrossLinks && relatedCrossLinks.length > 0 && (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                  <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">🔗 Related Divisions</h3>
                  <div className="space-y-2">
                    {relatedCrossLinks.map((cross, i) => (
                      <Link key={i} href={`/divisions/${cross.slug}`} className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        {cross.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Footer Strip */}
        <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-5">
            <h2 className="text-3xl font-black text-white">Ready to Begin Your Project?</h2>
            <p className="text-blue-100 text-sm">Talk to our {data.h1} specialists today — free consultation, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
                Request Official Proposal →
              </Link>
              <a
                href={`https://wa.me/${SITE_INFO.contact.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

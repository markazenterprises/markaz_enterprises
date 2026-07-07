import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { PORTFOLIO_DATA } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import { ChevronLeft, Phone, MessageCircle, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(PORTFOLIO_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = PORTFOLIO_DATA[slug];
  if (!data) return { title: "Case Study Not Found | Markaz Enterprises" };
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      siteName: "Markaz Enterprises",
      locale: "en_PK",
      type: "article",
    },
  };
}

const CASE_STUDY_DETAILS: Record<string, {
  client: string;
  timeline: string;
  challenge: string;
  solution: string;
  image: string;
  results: { label: string; value: string }[];
  quote: string;
  quoteAuthor: string;
  techStack: string[];
}> = {
  "100kw-solar-textile-factory-karachi": {
    client: "Medium-scale textile factory, Karachi",
    timeline: "Completed in 12 days",
    challenge: "Monthly electricity bills exceeding PKR 800,000 with frequent load-shedding disrupting 3-shift production cycles.",
    solution: "100kW hybrid solar system installation using Longi 400W monocrystalline panels, Huawei 100kW inverter, and Pylontech battery bank. NEPRA net metering license processed and approved.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Bill Reduction", value: "72%" },
      { label: "Full ROI Timeline", value: "3.8 Years" },
      { label: "Downtime Incidents", value: "0" },
      { label: "Monthly Savings", value: "PKR 580,000+" },
    ],
    quote: "The team was professional from day one. Installation completed in 12 days and we started saving immediately. Best investment decision we made.",
    quoteAuthor: "Factory Owner, Textile Industry Karachi",
    techStack: ["Longi 400W Panels ×250", "Huawei 100kW Inverter", "Pylontech Battery Bank", "Cloud Monitoring Portal", "NEPRA Net Metering"],
  },
  "gulshan-luxury-residence-construction": {
    client: "Private homeowner, Gulshan-e-Iqbal, Karachi",
    timeline: "14-month turnkey execution",
    challenge: "Client required a 500 Sq Yd executive residence with custom architectural design, luxury finishing, and smart home integration — all within a fixed budget and strict timeline.",
    solution: "Complete turnkey execution from SBCA-approved architectural drawings to grey structure, marble flooring, Italian kitchen, and Lutron smart home integration.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Total Area", value: "500 Sq Yd" },
      { label: "Timeline", value: "14 Months" },
      { label: "Budget Variance", value: "< 2%" },
      { label: "Milestone Delays", value: "Zero" },
    ],
    quote: "Markaz delivered exactly what was promised — on time, on budget. The marble finishings and smart automation exceeded expectations.",
    quoteAuthor: "Homeowner, Gulshan-e-Iqbal",
    techStack: ["SBCA Approved Architectural CAD", "Grade A Steel & Certified Concrete", "Italian Marble Flooring", "Lutron Smart Home System", "Custom Modular Kitchen"],
  },
  "corporate-office-interior-clifton": {
    client: "FinTech startup, Clifton Karachi",
    timeline: "45 days from concept to handover",
    challenge: "Open-plan office of 4,500 Sq Ft required acoustic soundproofing, glass partitioned executive boardrooms, and a collaborative tech-forward workspace aesthetic.",
    solution: "Full interior fitout with acoustic fabric paneling, tempered glass partitions, custom ergonomic workstations, integrated AV systems, and biometric access control.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Total Area", value: "4,500 Sq Ft" },
      { label: "Workstations", value: "80+" },
      { label: "Noise Reduction", value: "40 dB" },
      { label: "Delivery", value: "45 Days" },
    ],
    quote: "The acoustic treatment transformed our open-plan noise into a professional workspace. The glass boardrooms look stunning on video calls.",
    quoteAuthor: "CEO, FinTech Company, Karachi",
    techStack: ["Acoustic Fabric Wall Panels", "Tempered Glass Partitions", "Custom Ergonomic Desks", "LED Lighting Design", "Biometric Access Control"],
  },
  "multi-channel-warehouse-erp-system": {
    client: "Logistics hub, Karachi",
    timeline: "4 months from requirements to live deployment",
    challenge: "Managing inventory across 3 warehouse locations with manual spreadsheets led to stock discrepancies, dispatch errors, and 6-hour daily reconciliation overhead.",
    solution: "Custom multi-module ERP system with real-time barcode scanning, automated dispatch tracking, multi-location inventory sync, and financial reconciliation dashboards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Stock Accuracy", value: "99.8%" },
      { label: "Dispatch Errors", value: "−85%" },
      { label: "Time Saved Daily", value: "5+ Hours" },
      { label: "ROI Timeline", value: "8 Months" },
    ],
    quote: "The ERP paid for itself within 8 months just from dispatch error reduction. The team understood our workflows perfectly.",
    quoteAuthor: "Operations Manager, Logistics Group",
    techStack: ["Next.js Web Application", "Node.js REST API", "PostgreSQL Database", "Barcode Scanner Integration", "PowerBI Dashboards"],
  },
  "32-camera-ip-surveillance-port-qasim": {
    client: "Manufacturing facility, Port Qasim Industrial Zone",
    timeline: "Installed in 5 days",
    challenge: "4-acre industrial facility lacked proper perimeter surveillance, resulting in two theft incidents in 12 months and inadequate employee safety monitoring.",
    solution: "32-camera 4K IP CCTV network with central NVR command room, perimeter thermal motion sensors, night vision coverage, and remote mobile monitoring access.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Cameras Installed", value: "32 × 4K IP" },
      { label: "Installation Days", value: "5" },
      { label: "Post-Install Incidents", value: "0" },
      { label: "Uptime", value: "99.9%" },
    ],
    quote: "No incidents in 8 months since installation. The remote mobile access means our security team can monitor from anywhere.",
    quoteAuthor: "Factory Manager, Port Qasim",
    techStack: ["Hikvision 4K IP Cameras ×32", "64-Channel NVR System", "Thermal Motion Perimeter Sensors", "Mobile App Remote Access", "UPS Backup Power"],
  },
  "national-seo-lead-gen-campaign": {
    client: "Commercial manufacturing group, Lahore",
    timeline: "Results visible within 60 days",
    challenge: "Zero digital presence and entirely referral-dependent sales pipeline. Goal: generate 50+ qualified monthly leads through digital channels within 6 months.",
    solution: "Comprehensive digital strategy: Google Search PPC campaigns for high-intent keywords, SEO content pipeline, LinkedIn B2B outreach, and automated email nurturing funnel.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Monthly Lead Volume", value: "+280%" },
      { label: "Google Keyword Rank", value: "Top 3 (8 keywords)" },
      { label: "Cost Per Lead", value: "−60%" },
      { label: "Pipeline Value", value: "PKR 12M+" },
    ],
    quote: "We went from zero online leads to 70+ qualified calls per month. The ROI has been remarkable — best marketing decision we made.",
    quoteAuthor: "Director Sales, Manufacturing Group Lahore",
    techStack: ["Google Search Ads", "SEO Content Strategy", "LinkedIn Campaign Manager", "HubSpot CRM Integration", "Email Automation Sequences"],
  },
  "react-native-field-app-logistics": {
    client: "Logistics Dispatch Enterprise, Karachi",
    timeline: "Completed in 45 days",
    challenge: "Field riders struggled with manual dispatch confirmations, route issues, and high delivery failure rate during peak logistics hours.",
    solution: "Custom React Native mobile app with real-time GPS tracking, offline data storage sync, automated customer SMS receipt notifications, and local payment options.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Delivery Speed", value: "40% Boost" },
      { label: "Courier Error", value: "0%" },
      { label: "Active Riders", value: "150+" },
      { label: "Admin Overhead", value: "-30%" },
    ],
    quote: "The field rider app is extremely stable and clean. Our package tracking is now real-time and customer service issues reduced to zero.",
    quoteAuthor: "Operations Director, Swift Courier Logistics",
    techStack: ["React Native Framework", "Flutter SDK", "Firebase Realtime DB", "Mapbox APIs", "SMS API Integrations"],
  },
  "powerbi-retail-analytics-dashboard": {
    client: "Multi-branch retail departmental chain, Karachi",
    timeline: "30-day automated system deployment",
    challenge: "Scattered data across five branches delayed reporting by 14 days and led to regular perishable inventory waste and stock inaccuracies.",
    solution: "High-performance Python ETL data pipeline consolidating sales records into a Postgres database, visualized dynamically via automated PowerBI executive reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Stock Wastage", value: "-22%" },
      { label: "Report Latency", value: "Real-time" },
      { label: "Weekly Items", value: "1.2 Million" },
      { label: "Stock Turnover", value: "+18%" },
    ],
    quote: "We now make inventory procurement decisions based on real-time data instead of guesses. Perishable waste dropped immediately.",
    quoteAuthor: "General Manager, Central Retail Chain",
    techStack: ["PowerBI Business Suite", "PostgreSQL Database", "Python ETL Pipeline", "AWS Redshift", "SQL Server Connector"],
  },
  "central-hvac-commercial-building": {
    client: "Commercial Office Tower, Clifton, Karachi",
    timeline: "Completed in 3 weeks",
    challenge: "Astronomical building cooling bills and frequent maintenance calls due to outdated split unit system in a multi-floor tower.",
    solution: "Turnkey Daikin VRF multi-split central air conditioning installation with active building management system automation monitoring and custom zone thermostats.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Electric Bill", value: "-35% Saved" },
      { label: "Temp Variance", value: "±0.5 °C" },
      { label: "Cooling Load", value: "120 Tons" },
      { label: "SLA Incidents", value: "0" },
    ],
    quote: "Markaz designed a seamless central VRF system. The cooling zoning is perfect and our overall electric utility costs fell by more than 35%.",
    quoteAuthor: "Tower Facility Manager, Horizon Corporate Tower",
    techStack: ["Daikin VRF System", "BMS Temperature Controllers", "Galvanized Duct Routing", "AMC Priority SLA"],
  },
  "corporate-network-server-room-setup": {
    client: "National distribution company, Port Qasim, Karachi",
    timeline: "Installed in 8 days",
    challenge: "Network packet drops and server overheating halted distribution processing, delaying truck dispatch workflows.",
    solution: "Design and installation of enterprise-grade server room, structured Cat6 rack cabling routing, Cisco Catalyst switches, and backup online UPS backup power.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=80",
    results: [
      { label: "Server Uptime", value: "99.99%" },
      { label: "Temp Stability", value: "Constant 19°C" },
      { label: "Cabling Ports", value: "380 Active" },
      { label: "UPS Runtime", value: "4 Hours" },
    ],
    quote: "Pristine cable routing and solid active cooling. Since Markaz handed over the network server room, we have had zero downtime.",
    quoteAuthor: "Head of IT, National distribution logistics",
    techStack: ["Structured Cat6 Routing", "Cisco Catalyst Hardware", "APC Smart-UPS", "Active Cold-Aisle Containment"],
  },
};

const PORTFOLIO_PARENT_DIVISIONS: Record<string, { slug: string; anchor: string }> = {
  "100kw-solar-textile-factory-karachi": { slug: "solar", anchor: "solar energy Karachi partner" },
  "gulshan-luxury-residence-construction": { slug: "construction", anchor: "construction company Karachi" },
  "corporate-office-interior-clifton": { slug: "interior", anchor: "interior design company Pakistan" },
  "multi-channel-warehouse-erp-system": { slug: "software", anchor: "custom ERP Pakistan provider" },
  "32-camera-ip-surveillance-port-qasim": { slug: "cctv", anchor: "CCTV installation Karachi" },
  "national-seo-lead-gen-campaign": { slug: "marketing", anchor: "SEO company Pakistan" },
  "react-native-field-app-logistics": { slug: "mobile", anchor: "mobile app development Karachi" },
  "powerbi-retail-analytics-dashboard": { slug: "analytics", anchor: "business intelligence Karachi" },
  "central-hvac-commercial-building": { slug: "home-appliances", anchor: "home appliances Karachi" },
  "corporate-network-server-room-setup": { slug: "software-development", anchor: "IT network infrastructure Karachi" },
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const data = PORTFOLIO_DATA[slug];
  if (!data) return notFound();

  const details = CASE_STUDY_DETAILS[slug];
  const parentDivision = PORTFOLIO_PARENT_DIVISIONS[slug];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 py-3.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <span className="text-slate-700 truncate max-w-xs font-semibold">{data.h1}</span>
          </div>
        </div>

        {/* Hero with full-screen image */}
        <section className="relative min-h-[300px] lg:min-h-[360px] flex items-end overflow-hidden">
          {details ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${details.image}')` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-20 w-full">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex px-2.5 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest text-white uppercase">
                  Case Study
                </span>
                {details && (
                  <>
                    <span className="flex items-center gap-1 text-[11px] text-blue-200 font-semibold"><Clock className="w-3 h-3" /> {details.timeline}</span>
                    <span className="flex items-center gap-1 text-[11px] text-blue-200 font-semibold"><CheckCircle2 className="w-3 h-3" /> {details.client}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {data.h1}
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>


        {/* Case Study Body */}
        {details ? (
          <section className="py-14 px-6">
            <div className="max-w-7xl mx-auto space-y-10">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-10">
                  {/* Parent Division Context Link */}
                  {parentDivision && (
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 text-slate-700 text-xs sm:text-sm font-medium">
                      This project was executed by Markaz Enterprises, a leading{" "}
                      <Link href={`/divisions/${parentDivision.slug}`} className="text-blue-600 hover:text-blue-700 underline font-black">
                        {parentDivision.anchor}
                      </Link>{" "}
                      offering comprehensive turnkey solutions across Pakistan.
                    </div>
                  )}

                  {/* Results Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {details.results.map((r, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1.5 shadow-sm">
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-600">{r.value}</div>
                        <div className="text-xs text-slate-505 font-bold uppercase tracking-wider">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-black text-slate-900">The Challenge</h2>
                    <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
                      <p className="text-rose-950 text-sm leading-relaxed font-semibold">{details.challenge}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-black text-slate-900">Our Solution</h2>
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                      <p className="text-blue-950 text-sm leading-relaxed font-semibold">{details.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-black text-slate-900">Technologies &amp; Materials Used</h2>
                    <div className="flex flex-wrap gap-2.5">
                      {details.techStack.map((tech, i) => (
                        <span key={i} className="text-sm px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-xl font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Quote */}
                  <div className="relative bg-slate-50 border-l-4 border-blue-500 rounded-r-2xl p-6 space-y-3 shadow-sm">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <blockquote className="text-slate-900 text-base font-semibold leading-relaxed italic">
                      &ldquo;{details.quote}&rdquo;
                    </blockquote>
                    <p className="text-blue-600 text-sm font-black">— {details.quoteAuthor}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <BorderGlow
                    edgeSensitivity={20}
                    glowColor="220 80 60"
                    backgroundColor="#FFFFFF"
                    borderRadius={16}
                    glowRadius={40}
                    glowIntensity={0.9}
                    coneSpread={25}
                    animated={true}
                    colors={["#10b981", "#3b82f6", "#6366f1"]}
                  >
                    <div className="p-6 space-y-5 text-slate-900">
                      <h3 className="text-lg font-black text-slate-900">Start a Similar Project</h3>
                      <p className="text-slate-550 text-xs leading-relaxed font-medium">
                        Ready to achieve similar results? Our team will prepare a custom proposal for you within 48 hours.
                      </p>
                      <div className="space-y-3">
                        <a href={`tel:${SITE_INFO.contact.phone}`} className="flex items-center gap-3 w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm">
                          <Phone className="w-4 h-4" /> {SITE_INFO.contact.phone}
                        </a>
                        <a
                          href={`https://wa.me/${SITE_INFO.contact.whatsapp}`}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp Us
                        </a>
                        <Link href="/contact" className="block text-center py-3 px-4 bg-blue-50 hover:bg-blue-100/50 text-blue-600 font-bold rounded-xl text-sm transition-colors border border-blue-100">
                          Send Project Brief →
                        </Link>
                      </div>
                    </div>
                  </BorderGlow>

                  {/* Other Case Studies */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">More Case Studies</h3>
                    {Object.entries(PORTFOLIO_DATA)
                      .filter(([s]) => s !== slug)
                      .slice(0, 3)
                      .map(([s, d]) => (
                        <Link key={s} href={`/portfolio/${s}`} className="block text-xs text-slate-600 hover:text-blue-600 transition-colors py-1.5 border-b border-slate-200 last:border-0 font-medium">
                          {d.h1}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-slate-500">Full case study details coming soon. Contact us to discuss this project.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-sm">
                Contact Us →
              </Link>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-t border-blue-700">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-5">
            <h2 className="text-3xl font-black text-white">Ready for Similar Results?</h2>
            <p className="text-blue-100 text-sm">Free consultation. Custom proposal within 48 hours. No commitment required.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-md">
              Request Free Consultation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

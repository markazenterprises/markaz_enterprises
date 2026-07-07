import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { BLOG_DATA } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import type { Metadata } from "next";
import { ChevronLeft, Phone, MessageCircle, Clock, BookOpen } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(BLOG_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = BLOG_DATA[slug];
  if (!data) return { title: "Article Not Found | Markaz Enterprises" };
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

const ARTICLE_CONTENT: Record<string, {
  readTime: string;
  publishDate: string;
  category: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedService: { label: string; href: string };
}> = {
  "net-metering-pakistan-step-by-step-guide": {
    readTime: "8 min read",
    publishDate: "June 2026",
    category: "Solar Energy",
    sections: [
      {
        heading: "What is Net Metering in Pakistan?",
        body: "Net metering is a billing mechanism approved by NEPRA (National Electric Power Regulatory Authority) that allows solar system owners to feed excess electricity back into the national grid and receive credit on their electricity bills. Instead of paying for all the electricity you consume, you only pay for the net amount — the difference between what you produced and what you used.",
      },
      {
        heading: "Who is Eligible for Net Metering?",
        body: "As of 2026, net metering is available to: residential consumers (1kW–1MW systems), commercial and industrial consumers (1kW–1MW systems), and net metering licensees connected to K-Electric's distribution network in Karachi or WAPDA-affiliated DISCOs across Pakistan. You must own a grid-tied or hybrid solar system to apply.",
      },
      {
        heading: "Step-by-Step NEPRA Net Metering Process",
        body: "Step 1 — Solar System Implementation: Install a NEPRA-compliant grid-tied or hybrid solar inverter with bi-directional metering capability. Step 2 — Application to Distribution Company (DISCO/K-Electric): Submit a formal net metering application including your system specifications, single-line diagram, and installer credentials. Step 3 — Technical Inspection: A DISCO technical team inspects your installation for compliance. Step 4 — Bi-Directional Meter Installation: K-Electric or DISCO installs a bi-directional smart meter to track both import and export. Step 5 — NTN & License Activation: Your system is activated as a licensed generation unit on the NEPRA registry.",
      },
      {
        heading: "Financial ROI of Net Metering in Pakistan",
        body: "At current electricity rates (PKR 45–65/unit for commercial consumers), a 100kW solar system in Karachi generates approximately PKR 550,000–700,000 worth of electricity per month. After net metering, most commercial consumers report 65–80% reduction in monthly bills. Typical ROI periods range from 3–5 years depending on system size, tariff, and annual sun hours.",
      },
      {
        heading: "Common Net Metering Mistakes to Avoid",
        body: "1. Installing a non-NEPRA-compliant inverter — always confirm inverter certification before purchase. 2. Skipping the DISCO pre-approval — working without DISCO approval can result in system disconnection. 3. Oversizing the system — NEPRA limits individual net metering systems to 1MW; most commercial licenses top out at 500kW. 4. Not hiring a licensed solar contractor — NEPRA requires installer credentials for license processing.",
      },
    ],
    faqs: [
      { q: "How long does NEPRA net metering approval take in Karachi?", a: "Typically 45–90 days from application submission to bi-directional meter installation. K-Electric is known to process faster than rural DISCOs." },
      { q: "What happens to excess electricity I send to the grid?", a: "You receive a per-unit credit at the published applicable tariff rate, which is offset against your import units in the same billing cycle." },
      { q: "Can I apply for net metering myself or do I need a contractor?", a: "NEPRA requires applications to be submitted through a licensed solar contractor. Markaz Enterprises handles the full application process on your behalf." },
    ],
    relatedService: { label: "View Our Solar Energy Division", href: "/divisions/solar" },
  },
  "grey-structure-costs-karachi-2026": {
    readTime: "6 min read",
    publishDate: "June 2026",
    category: "Construction",
    sections: [
      {
        heading: "What is Grey Structure Construction?",
        body: "Grey structure refers to the bare structural skeleton of a building — everything before interior finishing. This includes the foundation, reinforced concrete columns and beams, slab casting, brickwork masonry, and rough plastering. Grey structure is the first major phase of any residential or commercial construction project.",
      },
      {
        heading: "Grey Structure Cost Per Square Foot — Karachi 2026",
        body: "Based on current material and labor rates in Karachi (June 2026): Economy Grey Structure (standard brick, steel, local cement) costs PKR 2,200–2,600 per sq ft. Standard Grey Structure (Grade 40 steel, certified cement, engineered mix) costs PKR 2,600–3,200 per sq ft. Premium Grey Structure (high-grade materials, structural engineering report, seismic compliance) costs PKR 3,200–4,000 per sq ft.",
      },
      {
        heading: "Major Cost Components Breakdown",
        body: "Steel Reinforcement: 30–35% of total grey structure cost. Current steel price ranges PKR 280–320/kg for Grade 40 bars. Cement: 15–20% of cost. Premium cement (Bestway, DG Khan, Lucky) runs PKR 1,400–1,600/50kg bag. Brickwork & Masonry: 20–25%. Aggregate, Sand & Formwork: 10–15%. Labor: 20–25% depending on skill level and supervision requirements.",
      },
      {
        heading: "Hidden Costs in Grey Structure Construction",
        body: "Many contractors quote attractively low per-sq-ft rates but exclude: SBCA architectural drawing fee (PKR 50,000–150,000), soil investigation/boring tests (PKR 30,000–80,000), water supply and temporary electricity during construction, site clearance and excavation, and site manager supervision fees. Always request a fully-inclusive BOQ (Bill of Quantities) rather than a per-sq-ft rate.",
      },
      {
        heading: "How to Reduce Grey Structure Costs Without Compromising Quality",
        body: "1. Purchase steel and cement directly from authorized dealers — eliminate contractor markup. 2. Build during September–February when labor availability and pricing is more favorable. 3. Avoid unnecessary structural overengineering — have a qualified structural engineer validate the design for the actual load requirements. 4. Negotiate milestone-based payment terms to maintain contractor accountability.",
      },
    ],
    faqs: [
      { q: "How long does grey structure take to complete for a 250 Sq Yd house?", a: "Typically 3–5 months for a standard two-story house, depending on design complexity, labor team size, and weather conditions." },
      { q: "Should I use 40 or 60 grade steel for residential construction?", a: "Grade 40 (Fe415) is the minimum standard for residential use in Pakistan. For high-rise or earthquake-prone areas, Grade 60 (Fe500) is recommended." },
      { q: "Can Markaz Enterprises provide a fixed-price grey structure contract?", a: "Yes. We offer fixed-price, milestone-based grey structure contracts with full BOQ transparency and no hidden cost surprises." },
    ],
    relatedService: { label: "Explore Our Construction Division", href: "/divisions/construction" },
  },
  "consolidated-business-erp-benefits": {
    readTime: "7 min read",
    publishDate: "June 2026",
    category: "Software & ERP",
    sections: [
      {
        heading: "The Problem with Multi-Vendor Software",
        body: "Most growing Pakistani businesses operate with a patchwork of disconnected software tools: one vendor for inventory management, another for accounting, a third for HR payroll, and spreadsheets for everything else. This creates what IT professionals call 'data silos' — isolated databases that cannot communicate with each other, requiring daily manual data entry, reconciliation, and error-checking that consumes hours of productive time.",
      },
      {
        heading: "What is a Consolidated ERP System?",
        body: "An Enterprise Resource Planning (ERP) system is a single unified software platform that integrates all core business functions under one database and user interface. A consolidated ERP for a Pakistani trading or manufacturing business typically includes: inventory & warehouse management, purchase orders & supplier management, sales & invoicing, accounts payable/receivable & financial reporting, HR & payroll, and logistics & dispatch tracking.",
      },
      {
        heading: "5 Concrete Benefits of ERP Consolidation",
        body: "1. Eliminate Data Entry Duplication: When a sales order is entered once, it automatically updates inventory, triggers procurement if stock is low, generates an invoice, and posts to accounts — no re-entry across multiple systems. 2. Real-Time Business Visibility: Management dashboards show live stock levels, pending receivables, and sales vs target in real time — not yesterday's exports. 3. Audit Trail & Compliance: Every transaction is logged with user, timestamp, and original value — eliminates accounting discrepancies. 4. Scalability: A custom ERP grows with your business — add new branches, product lines, or user roles without switching platforms. 5. Reduced Software Licensing Costs: One platform replaces 4–6 separate SaaS subscriptions.",
      },
      {
        heading: "Custom ERP vs Off-the-Shelf Solutions in Pakistan",
        body: "Off-the-shelf ERP solutions (SAP, Oracle, Microsoft Dynamics) are powerful but cost PKR 2–10 million annually in licensing and require extensive customization for Pakistani business workflows (Urdu invoicing, PKR currency, local tax structures). Custom-built ERPs designed specifically for Pakistani SMEs can be delivered at a fraction of this cost and are tailored to your exact processes — with no unnecessary features and full source code ownership.",
      },
      {
        heading: "How Long Does ERP Implementation Take?",
        body: "A well-planned custom ERP for an SME typically takes 3–6 months: 2–4 weeks for requirements gathering and database design, 8–12 weeks for core module development, 2–3 weeks for user acceptance testing and staff training, and 1–2 weeks for live deployment and data migration. Proper change management and staff training are the most critical success factors.",
      },
    ],
    faqs: [
      { q: "How much does a custom ERP cost in Pakistan?", a: "For an SME with 10–50 users covering inventory, accounts, and HR, a custom ERP typically costs PKR 800,000–2,500,000 depending on complexity. This is typically recouped within 12–18 months." },
      { q: "Can the ERP work offline if our internet goes down?", a: "Yes — we architect ERP systems with local server deployment options and offline sync capabilities, critical for Pakistani businesses with unreliable connectivity." },
      { q: "Do you provide training and post-launch support?", a: "Absolutely. All ERP deployments include a 2-week on-site training period and a 12-month SLA support contract with guaranteed response times." },
    ],
    relatedService: { label: "Explore Our Software & ERP Division", href: "/divisions/software" },
  },
};

const BLOG_PARENT_DIVISIONS: Record<string, { slug: string; anchor: string }> = {
  "net-metering-pakistan-step-by-step-guide": { slug: "solar", anchor: "solar energy Karachi partner" },
  "grey-structure-costs-karachi-2026": { slug: "construction", anchor: "construction company Pakistan" },
  "consolidated-business-erp-benefits": { slug: "software", anchor: "custom ERP Pakistan provider" }
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const data = BLOG_DATA[slug];
  if (!data) return notFound();

  const article = ARTICLE_CONTENT[slug];
  const parentDivision = BLOG_PARENT_DIVISIONS[slug];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 py-3.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Insights</Link>
            <ChevronLeft className="w-3 h-3 rotate-180 text-slate-400" />
            <span className="text-slate-700 truncate max-w-xs font-semibold">{data.h1}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 space-y-5">
            {article && (
              <div className="flex flex-wrap gap-3 text-xs text-slate-500 font-medium">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 font-bold uppercase tracking-wider">{article.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-500" /> {article.readTime}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-indigo-500" /> {article.publishDate}</span>
              </div>
            )}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              {data.h1}
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {article ? (
                <>
                  {/* Contextual link up to parent pillar */}
                  {parentDivision && (
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 text-slate-700 text-xs sm:text-sm font-medium">
                      This guide is brought to you by Markaz Enterprises, a leading{" "}
                      <Link href={`/divisions/${parentDivision.slug}`} className="text-blue-600 hover:text-blue-700 underline font-black">
                        {parentDivision.anchor}
                      </Link>{" "}
                      division offering end-to-end commercial solutions in Pakistan.
                    </div>
                  )}
                  {article.sections.map((section, i) => (
                    <div key={i} className="space-y-3">
                      <h2 className="text-xl font-black text-slate-900">{section.heading}</h2>
                      <p className="text-slate-600 text-sm leading-relaxed">{section.body}</p>
                    </div>
                  ))}

                  {/* FAQs */}
                  {article.faqs.length > 0 && (
                    <div className="space-y-4 pt-6 border-t border-slate-200">
                      <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
                      {article.faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
                          <h3 className="text-base font-black text-slate-900">{faq.q}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Banner */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center space-y-4 text-white shadow-lg">
                    <h3 className="text-xl font-black text-white">Need Professional Help?</h3>
                    <p className="text-blue-100 text-sm">Markaz Enterprises specializes in {article.category} solutions across Pakistan. Get a free consultation today.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Link href={article.relatedService.href} className="px-6 py-2.5 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-md">
                        {article.relatedService.label} →
                      </Link>
                      <Link href="/contact" className="px-6 py-2.5 bg-blue-900/40 text-white border border-white/20 font-bold rounded-xl text-sm hover:bg-blue-900/60 transition-colors">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-16 text-slate-500">
                  <p>Full article content coming soon.</p>
                  <Link href="/blog" className="text-blue-600 font-bold hover:underline mt-4 inline-block">← Back to Insights</Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <BorderGlow
                edgeSensitivity={20}
                glowColor="220 80 60"
                backgroundColor="#FFFFFF"
                borderRadius={16}
                glowRadius={35}
                glowIntensity={0.8}
                coneSpread={25}
                animated={true}
                colors={["#3b82f6", "#6366f1"]}
              >
                <div className="p-5 space-y-4 text-slate-900">
                  <h3 className="text-base font-black text-slate-900">Talk to an Expert</h3>
                  <div className="space-y-2.5">
                    <a href={`tel:${SITE_INFO.contact.phone}`} className="flex items-center gap-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors shadow-sm">
                      <Phone className="w-3.5 h-3.5" /> {SITE_INFO.contact.phone}
                    </a>
                    <a
                      href={`https://wa.me/${SITE_INFO.contact.whatsapp}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </BorderGlow>

              {/* Other Articles */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4">
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">More Articles</h3>
                {Object.entries(BLOG_DATA)
                  .filter(([s]) => s !== slug)
                  .map(([s, d]) => (
                    <Link key={s} href={`/blog/${s}`} className="block text-xs text-slate-600 hover:text-blue-600 transition-colors py-2 border-b border-slate-200 last:border-0 leading-relaxed font-medium">
                      {d.h1}
                    </Link>
                  ))}
              </div>

              {/* Division Links */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Our Divisions</h3>
                {[
                  { name: "Solar Energy", href: "/divisions/solar" },
                  { name: "Construction", href: "/divisions/construction" },
                  { name: "Software & ERP", href: "/divisions/software" },
                  { name: "CCTV Security", href: "/divisions/cctv" },
                  { name: "Digital Marketing", href: "/divisions/marketing" },
                ].map((d, i) => (
                  <Link key={i} href={d.href} className="block text-xs text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    → {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BorderGlow from "@/components/ui/BorderGlow";
import { PRODUCTS_DATA, ProductItem } from "@/app/data/routesData";
import { SITE_INFO } from "@/app/site_info";
import {
  ChevronLeft, CheckCircle2, ShieldCheck, Sparkles, MessageCircle,
  Phone, AlertTriangle, Sliders, ArrowRight, Layers, Tag
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];
  if (!product) return { title: "Product Not Found | Markaz Enterprises" };

  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      title: product.title,
      description: product.description,
      siteName: "Markaz Enterprises",
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) return notFound();

  const relatedProducts = Object.values(PRODUCTS_DATA)
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col text-slate-100 selection:bg-amber-500 selection:text-slate-950" style={{ background: "#060c1a" }}>
      <main className="flex-1">

        {/* ── Breadcrumb & Top Bar ── */}
        <section className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Products Catalogue</span>
            </Link>

            <span className="text-[11px] font-bold text-slate-500 hidden sm:inline-block">
              {product.category} · {product.id}
            </span>
          </div>
        </section>

        {/* ── Main Product Display ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Product Images (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Main Image — dark container, fully uncropped */}
              <div className="rounded-3xl bg-[#081222] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Flagship top bar */}
                {product.isFlagship && (
                  <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500" />
                )}
                <div className="relative flex items-center justify-center p-8 min-h-[340px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={480}
                    height={480}
                    priority
                    className="object-contain max-h-[320px] w-auto mx-auto drop-shadow-2xl"
                  />
                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 pointer-events-none">
                    {product.isFlagship && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                        <Sparkles className="w-3.5 h-3.5" /> Flagship Product
                      </span>
                    )}
                    {product.certifications && (
                      <div className="flex gap-1 ml-auto">
                        {product.certifications.map((cert) => (
                          <span key={cert} className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] font-black">
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {/* Primary thumbnail */}
                  <div className="relative rounded-2xl bg-[#081222] border-2 border-amber-500/50 overflow-hidden flex items-center justify-center min-h-[80px] p-2">
                    <Image
                      src={product.image}
                      alt="Primary view"
                      width={150}
                      height={100}
                      className="object-contain max-h-[80px] w-auto mx-auto"
                    />
                  </div>
                  {product.gallery.map((imgUrl, gIdx) => (
                    <div key={gIdx} className="relative rounded-2xl bg-[#081222] border border-slate-800 overflow-hidden flex items-center justify-center min-h-[80px] p-2">
                      <Image
                        src={imgUrl}
                        alt={`Detail view ${gIdx + 1}`}
                        width={150}
                        height={100}
                        className="object-contain max-h-[80px] w-auto mx-auto"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Warranty / Assurance Badge */}
              {product.warranty && (
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-black text-blue-200 block uppercase tracking-wider">Manufacturer Warranty</span>
                    <span className="text-sm font-bold text-white block">{product.warranty}</span>
                  </div>
                </div>
              )}

              {/* Draft Spec Warning (if applicable) */}
              {product.isDraftSpec && (
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/50 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-black text-rose-300 block uppercase tracking-wider">Preliminary Specification</span>
                    <p className="text-[11px] text-rose-200/90 leading-relaxed">
                      Specifications for this dual-processor unit reflect manufacturer draft marketing documentation. Final production tolerances and firmware parameters are subject to formal confirmation.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Details & Specs Table (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category & ID */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-black text-amber-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Item SKU: {product.id}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {product.h1}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                  Key Technical Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                  Detailed Specifications (From Official Pamphlets)
                </span>
                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80">
                  <table className="w-full text-left text-xs border-collapse">
                    <tbody>
                      {product.specs.map((spec, sIdx) => (
                        <tr
                          key={sIdx}
                          className={`border-b border-slate-800/80 ${
                            sIdx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/60"
                          }`}
                        >
                          <td className="py-3 px-4 font-bold text-slate-400 w-1/3 sm:w-2/5">
                            {spec.label}
                          </td>
                          <td className="py-3 px-4 font-black text-white">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Target Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">
                    Recommended Applications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-semibold"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Action Box */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-black uppercase text-amber-400 tracking-wider">Inquire &amp; Order</span>
                    <h4 className="text-base font-black text-white">Ready to Order or Request BOQ Pricing?</h4>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Karachi Stock &amp; Custom Assembly
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={`https://wa.me/${SITE_INFO.contact.whatsapp.replace('+', '')}?text=Hello%20Markaz%20Enterprises%2C%20I%20would%20like%20a%20formal%20quote%20for%20the%20${encodeURIComponent(product.h1)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> Request Quote via WhatsApp
                  </a>
                  <Link
                    href="/custom-battery-quote"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-extrabold py-3.5 px-6 rounded-xl border border-slate-700 text-xs uppercase tracking-wider transition-all"
                  >
                    <Sliders className="w-4 h-4" /> Custom Config
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* ── Related Products Carousel/Grid ── */}
          {relatedProducts.length > 0 && (
            <section className="pt-12 border-t border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Related in {product.category}
                </h3>
                <Link
                  href={`/products#${product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-slate-950 rounded-xl p-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="250px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                      {rel.id}
                    </span>
                    <h4 className="text-sm font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {rel.h1}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>

      </main>
      <Footer />
    </div>
  );
}

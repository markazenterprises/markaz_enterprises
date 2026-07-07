"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

const BLOG_POSTS = [
  {
    slug: "net-metering-pakistan-step-by-step-guide",
    category: "Solar Energy",
    title: "Net Metering in Pakistan: Complete Step-by-Step Guide for Karachi Factories",
    date: "June 2026",
    readTime: "8 min read",
    desc: "An in-depth breakdown of NEPRA regulations, net metering license application timelines, and ROI calculations for commercial hybrid setups.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=70",
    colors: ['#3b82f6', '#10b981', '#6366f1']
  },
  {
    slug: "grey-structure-costs-karachi-2026",
    category: "Construction",
    title: "Understanding Grey Structure Costs in Karachi: Material Estimates for 2026",
    date: "May 2026",
    readTime: "6 min read",
    desc: "Current steel, cement, and aggregate pricing per square foot, helping you plan your next residential or commercial building project.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=70",
    colors: ['#3b82f6', '#8b5cf6', '#6366f1']
  },
  {
    slug: "consolidated-business-erp-benefits",
    category: "IT Solutions",
    title: "Why Multi-Vendor Software Sells Short: Benefits of a Consolidated Business ERP",
    date: "April 2026",
    readTime: "7 min read",
    desc: "How integration between inventory, CRM, and accounts under a single umbrella saves hours and avoids communication silos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=70",
    colors: ['#6366f1', '#3b82f6', '#10b981']
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-14 bg-[#F4F7FF] text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-black tracking-widest text-blue-500 uppercase">
            Industry Intelligence
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Insights &amp; Technical Guides
          </h3>
          <p className="text-slate-500 text-sm font-medium">
            Expert articles and operational guides tailored to Pakistani market regulations, construction economics, and renewable energy investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="group">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="220 80 60"
                backgroundColor="#FFFFFF"
                borderRadius={20}
                glowRadius={30}
                colors={post.colors}
                className="w-full h-full"
              >
                <div className="flex flex-col h-full overflow-hidden text-slate-900">
                  {/* Cover image */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100 font-extrabold">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-base text-slate-900 leading-snug line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-medium">
                        {post.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-semibold">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                      >
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_INFO } from "@/app/site_info";

const PROJECT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80",
    label: "Turnkey Construction"
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&auto=format&fit=crop&q=80",
    label: "Solar Energy Systems"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80",
    label: "Corporate Interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    label: "Enterprise Software"
  },
];

export default function ProcessSection() {
  const [activeQaStep, setActiveQaStep] = useState(0);
  const [activePmStep, setActivePmStep] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  const qaSteps: any[] = (SITE_INFO.about as any)?.quality_assurance?.steps || [
    { num: "01", title: "Site & Requirements Survey", desc: "Initial technical audit, structural validation, and load analysis before any commitment is made." },
    { num: "02", title: "Material & Component Verification", desc: "Checking tier-1 materials against international standard benchmarks prior to procurement." },
    { num: "03", title: "In-Progress Milestones Inspection", desc: "Stage-wise audits before approving construction progress or software merge requests." },
    { num: "04", title: "Pre-Handover Testing", desc: "Stress testing, thermal scanning, and security network audits before final delivery." },
    { num: "05", title: "AMC & Warranty Execution", desc: "Long-term maintenance agreements and responsive local support post-handover." },
  ];

  const pmSteps: any[] = (SITE_INFO.about as any)?.project_methodology?.steps || [
    { step: 1, name: "Discovery", desc: "Aligning on goals, scope, and technical specifications with the client." },
    { step: 2, name: "Design", desc: "Architectural blueprints, software wireframes, and engineering schematics." },
    { step: 3, name: "Procurement", desc: "Sourcing certified Tier-1 panels, construction materials, or software licenses." },
    { step: 4, name: "Execution", desc: "On-site construction, wiring installation, or active code development sprint." },
    { step: 5, name: "Testing", desc: "Rigorous quality checks, load testing, and security verification." },
    { step: 6, name: "Handover", desc: "Final client walkthrough, system training, and documentation delivery." },
    { step: 7, name: "AMC", desc: "Ongoing SLA monitoring and preventative maintenance visits." },
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-[#F8FAFF] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── Section Header & Story ── */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-xs font-black tracking-widest text-blue-500 uppercase">Who We Are</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Corporate Mission &amp; Story
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-3xl mx-auto">
            {SITE_INFO.about?.brand_story ||
              "Founded in Karachi, Markaz Enterprises began with a simple mission: to give businesses and homeowners access to expert solutions across every domain. Over the past decade, we have grown into Pakistan's leading multi-industry solutions provider."}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
            With 10 specialized divisions, we coordinate complex multi-tier commercial projects — combining local engineering expertise with international standards.
          </p>
        </div>

        {/* ── Interactive Image Gallery (Centered Showcase) ── */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-150 bg-slate-100">
            <img
              key={activeImg}
              src={PROJECT_IMAGES[activeImg].src}
              alt={PROJECT_IMAGES[activeImg].label}
              className="object-cover w-full h-full transition-opacity duration-350"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-black rounded-full border border-blue-100 uppercase tracking-wider">
                {PROJECT_IMAGES[activeImg].label}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            {PROJECT_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                  activeImg === i ? "border-blue-500 shadow-sm scale-102" : "border-transparent opacity-65 hover:opacity-90"
                }`}
              >
                <img src={img.src} alt={img.label} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Mission, Vision & Core Values (Wide Bottom Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          {/* Mission & Vision Column */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100/50 shadow-sm space-y-2 flex-1">
              <h4 className="font-black text-xs text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Our Mission
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{SITE_INFO.brand?.mission}</p>
            </div>
            <div className="p-5 bg-indigo-50/60 rounded-2xl border border-indigo-100/50 shadow-sm space-y-2 flex-1 mt-4 lg:mt-0">
              <h4 className="font-black text-xs text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Our Vision
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{SITE_INFO.brand?.vision}</p>
            </div>
          </div>

          {/* Core Values Column (Spans 2 columns on large screen) */}
          <div className="lg:col-span-2 space-y-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Our Core Values</h4>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Full Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SITE_INFO.brand?.core_values?.map((val: any, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs block text-slate-900 leading-tight">{val.name}</span>
                    <span className="text-[10px] text-slate-500 leading-normal block mt-0.5">{val.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── QA & PM Steppers ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
          {/* QA Stepper */}
          <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-4">
            <div>
              <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-emerald-500" />
                5-Stage Quality Assurance
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Quality control checkpoints:</p>
            </div>

            <div className="flex border-b border-slate-200 gap-1 overflow-x-auto pb-0">
              {qaSteps.map((step: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveQaStep(idx)}
                  className={`text-xs font-extrabold pb-2.5 transition-all border-b-2 px-2.5 whitespace-nowrap -mb-px ${
                    activeQaStep === idx
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-slate-400 hover:text-slate-700"
                  }`}
                >
                  Stage {step.num || idx + 1}
                </button>
              ))}
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 min-h-[90px] flex flex-col justify-center">
              <span className="text-[9px] text-emerald-600 font-black tracking-widest uppercase block mb-1">
                ✓ Verified Checkpoint
              </span>
              <h5 className="font-bold text-sm text-slate-900 mb-1">
                {qaSteps[activeQaStep]?.title || qaSteps[activeQaStep]?.name}
              </h5>
              <p className="text-xs text-slate-600 leading-normal">
                {qaSteps[activeQaStep]?.desc}
              </p>
            </div>
          </div>

          {/* PM Stepper */}
          <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-4">
            <div>
              <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-4.5 h-4.5 text-blue-500" />
                Project Management Roadmap
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Execution lifecycle stages:</p>
            </div>

            <div className="flex border-b border-slate-200 gap-1 overflow-x-auto pb-0">
              {pmSteps.map((step: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActivePmStep(idx)}
                  className={`text-xs font-extrabold pb-2.5 transition-all border-b-2 px-2.5 whitespace-nowrap -mb-px ${
                    activePmStep === idx
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-slate-400 hover:text-slate-700"
                  }`}
                >
                  P{step.step || idx + 1}
                </button>
              ))}
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 min-h-[90px] flex flex-col justify-center">
              <span className="text-[9px] text-blue-600 font-black tracking-widest uppercase block mb-1">
                Phase {pmSteps[activePmStep]?.step || activePmStep + 1}
              </span>
              <h5 className="font-bold text-sm text-slate-900 mb-1">
                {pmSteps[activePmStep]?.name || pmSteps[activePmStep]?.title}
              </h5>
              <p className="text-xs text-slate-600 leading-normal">
                {pmSteps[activePmStep]?.desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

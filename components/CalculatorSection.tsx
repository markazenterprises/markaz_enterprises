"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Sun, Building2, Video, Code2, CheckCircle2 } from "lucide-react";
import BorderGlow from "@/components/ui/BorderGlow";

interface CalculatorSectionProps {
  initialService?: string;
}

export default function CalculatorSection({ initialService = "solar" }: CalculatorSectionProps) {
  const [calcService, setCalcService] = useState(initialService);
  const [calcSolarBill, setCalcSolarBill] = useState(150000);
  const [calcConstArea, setCalcConstArea] = useState(2500);
  const [calcConstQuality, setCalcConstQuality] = useState("finished");
  const [calcCctvCameras, setCalcCctvCameras] = useState(8);
  const [calcCctvType, setCalcCctvType] = useState("ip");
  const [calcItType, setCalcItType] = useState("ecommerce");
  const [calcResult, setCalcResult] = useState<any>(null);

  useEffect(() => {
    if (initialService) {
      setCalcService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    calculateQuote();
  }, [calcService, calcSolarBill, calcConstArea, calcConstQuality, calcCctvCameras, calcCctvType, calcItType]);

  const calculateQuote = () => {
    if (calcService === "solar") {
      const capacityKw = Math.round(calcSolarBill / 10000);
      const minCapacity = Math.max(5, capacityKw);
      const costPerKw = 115000;
      const totalCost = minCapacity * costPerKw;
      const monthlySavings = calcSolarBill * 0.72;
      const paybackYears = (totalCost / (monthlySavings * 12)).toFixed(1);

      setCalcResult({
        capacity: `${minCapacity} kW System`,
        estimatedCost: `PKR ${totalCost.toLocaleString()} - ${(totalCost * 1.15).toLocaleString()}`,
        savings: `PKR ${Math.round(monthlySavings).toLocaleString()} / month`,
        payback: `${paybackYears} Years`,
        note: `Estimates based on Longi Tier-1 solar panels and hybrid inverter setup with Net Metering.`
      });
    } else if (calcService === "construction") {
      const rate = calcConstQuality === "grey" ? 2600 : 4800;
      const baseCost = calcConstArea * rate;
      setCalcResult({
        capacity: `${calcConstArea.toLocaleString()} Sq Ft`,
        estimatedCost: `PKR ${baseCost.toLocaleString()} - ${(baseCost * 1.1).toLocaleString()}`,
        savings: "Built to International Standards",
        payback: "Property Asset Value Increase",
        note: `Rate: PKR ${rate}/sq ft for ${calcConstQuality === "grey" ? "Grey Structure only" : "Premium Turnkey Finishing"} including structural validation.`
      });
    } else if (calcService === "cctv") {
      const perCameraRate = calcCctvType === "ip" ? 16000 : 9000;
      const baseCost = calcCctvCameras * perCameraRate + 25000;
      setCalcResult({
        capacity: `${calcCctvCameras} Cameras`,
        estimatedCost: `PKR ${baseCost.toLocaleString()} - ${(baseCost * 1.15).toLocaleString()}`,
        savings: "24/7 Remote Surveillance",
        payback: "Loss & Intrusion Prevention",
        note: `Includes ${calcCctvType === "ip" ? "High-definition IP cameras" : "Analog HD cameras"}, NVR/DVR storage, cabling, and mobile app configuration.`
      });
    } else if (calcService === "it") {
      let costRange = "";
      let note = "";
      if (calcItType === "corporate") {
        costRange = "PKR 90,000 - 150,000";
        note = "Custom Next.js corporate landing page with lead forms and responsive optimization.";
      } else if (calcItType === "ecommerce") {
        costRange = "PKR 180,000 - 320,000";
        note = "Interactive eCommerce store featuring catalog, shopping cart, online payment, and admin dashboard.";
      } else {
        costRange = "PKR 500,000 - 1,200,000+";
        note = "Bespoke business CRM/ERP system customized with database architecture, workflow automation, and custom modules.";
      }
      setCalcResult({
        capacity: calcItType.toUpperCase(),
        estimatedCost: costRange,
        savings: "Automation & Process Efficiency",
        payback: "Varies by Project Scope",
        note: note
      });
    }
  };

  return (
    <section id="quote-calculator" className="py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-black tracking-widest text-blue-500 uppercase">
            Instant Budget Estimation
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Interactive Cost Estimator
          </h3>
          <p className="text-slate-500 text-base">
            Select a service division and customize parameters to calculate immediate cost estimates and ROI projections.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "solar", label: "Solar Energy", icon: Sun },
            { id: "construction", label: "Construction", icon: Building2 },
            { id: "cctv", label: "CCTV & Security", icon: Video },
            { id: "it", label: "IT & Software", icon: Code2 },
          ].map((srv) => {
            const Icon = srv.icon;
            const active = calcService === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setCalcService(srv.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-md ${
                  active
                    ? "bg-blue-600 text-white shadow-blue-500/30 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-amber-400" : "text-slate-400"}`} />
                {srv.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Estimator Layout with Dual BorderGlow Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form Left wrapped in BorderGlow */}
          <div className="lg:col-span-6 flex flex-col">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="220 90 60"
              backgroundColor="#FFFFFF"
              borderRadius={24}
              glowRadius={35}
              colors={['#3b82f6', '#6366f1', '#38bdf8']}
              className="w-full h-full flex-1"
            >
              <div className="p-8 space-y-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    Configure Scope Parameters
                  </h4>

                  {/* Solar Controls */}
                  {calcService === "solar" && (
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-bold text-slate-600">Monthly Electricity Bill (PKR)</label>
                          <span className="text-sm font-black text-amber-400">PKR {calcSolarBill.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min={30000}
                          max={1000000}
                          step={10000}
                          value={calcSolarBill}
                          onChange={(e) => setCalcSolarBill(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                          <span>30k</span>
                          <span>500k</span>
                          <span>1M+</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Construction Controls */}
                  {calcService === "construction" && (
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-bold text-slate-600">Covered Area (Sq Ft)</label>
                          <span className="text-sm font-black text-amber-400">{calcConstArea.toLocaleString()} Sq Ft</span>
                        </div>
                        <input
                          type="range"
                          min={500}
                          max={20000}
                          step={250}
                          value={calcConstArea}
                          onChange={(e) => setCalcConstArea(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-600 block mb-2">Finishing Standard</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setCalcConstQuality("grey")}
                            className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all ${
                              calcConstQuality === "grey"
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 border border-slate-200"
                            }`}
                          >
                            Grey Structure Only
                          </button>
                          <button
                            onClick={() => setCalcConstQuality("finished")}
                            className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all ${
                              calcConstQuality === "finished"
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 border border-slate-200"
                            }`}
                          >
                            Premium Turnkey Finish
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CCTV Controls */}
                  {calcService === "cctv" && (
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-xs font-bold text-slate-300">Number of Cameras</label>
                          <span className="text-sm font-black text-amber-400">{calcCctvCameras} Cameras</span>
                        </div>
                        <input
                          type="range"
                          min={2}
                          max={64}
                          step={2}
                          value={calcCctvCameras}
                          onChange={(e) => setCalcCctvCameras(Number(e.target.value))}
                          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-2">Camera Technology</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setCalcCctvType("ip")}
                            className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all ${
                              calcCctvType === "ip"
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 text-slate-300 border border-slate-700"
                            }`}
                          >
                            HD IP Surveillance (NVR)
                          </button>
                          <button
                            onClick={() => setCalcCctvType("analog")}
                            className={`py-3 px-4 rounded-xl text-xs font-extrabold transition-all ${
                              calcCctvType === "analog"
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800 text-slate-300 border border-slate-700"
                            }`}
                          >
                            Analog HD Cameras (DVR)
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IT Controls */}
                  {calcService === "it" && (
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-slate-300 block">Select Solution Type</label>
                      {[
                        { id: "corporate", title: "Corporate Web Application", desc: "Next.js high-speed landing & lead capture portal." },
                        { id: "ecommerce", title: "eCommerce Store", desc: "Full online store with catalog, payment & admin dashboard." },
                        { id: "erp", title: "Custom Business ERP / CRM", desc: "Bespoke operational software tailored to workflow." },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setCalcItType(item.id)}
                          className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                            calcItType === item.id
                              ? "border-blue-500 bg-blue-500/20"
                              : "border-slate-800 bg-slate-900 hover:bg-slate-800"
                          }`}
                        >
                          <h5 className="font-extrabold text-sm text-white">{item.title}</h5>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href="#contact"
                    className="w-full btn-shimmer bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3.5 rounded-xl block text-center shadow-lg transition-transform hover:scale-102"
                  >
                    Request Official Proposal for Scope
                  </a>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Result Card Right Wrapped in BorderGlow */}
          <div className="lg:col-span-6 flex flex-col">
            <BorderGlow
              edgeSensitivity={35}
              glowColor="40 95 60"
              backgroundColor="#FFFFFF"
              borderRadius={24}
              glowRadius={40}
              colors={['#f59e0b', '#10b981', '#38bdf8']}
              className="w-full h-full flex-1"
            >
              <div className="p-8 space-y-6 text-white flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-xs font-black text-amber-400 tracking-wider uppercase">Live Calculated Output</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                      Active Estimation
                    </span>
                  </div>

                  <div className="my-8 space-y-6">
                    <div>
                      <span className="text-xs text-slate-500 font-semibold uppercase block mb-1">Scope Capacity</span>
                      <span className="text-2xl font-extrabold text-slate-900">{calcResult?.capacity || "-"}</span>
                    </div>

                    <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 space-y-1">
                      <span className="text-xs text-slate-500 font-semibold uppercase block">Estimated Turnkey Investment</span>
                      <span className="text-2xl sm:text-3xl font-black text-blue-600 block">{calcResult?.estimatedCost || "-"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Expected Value / Savings</span>
                        <span className="text-sm font-extrabold text-emerald-600 block mt-0.5">{calcResult?.savings || "-"}</span>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Estimated Payback / ROI</span>
                        <span className="text-sm font-extrabold text-blue-600 block mt-0.5">{calcResult?.payback || "-"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>{calcResult?.note}</p>
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}

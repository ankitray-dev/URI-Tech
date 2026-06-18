"use client";

import React from 'react';
import { Users, FileText, Building2, LineChart, Check } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  { title: "Understand Your Need", desc: "We start with a detailed brief: role requirements, team culture, timeline, and budget." },
  { title: "Source & Screen", desc: "Our recruiters tap our network and run multi-stage screening to shortlist the best fits." },
  { title: "You Interview", desc: "We send a curated shortlist. You interview, give feedback, and we iterate fast." },
  { title: "Place & Support", desc: "Once you select, we handle offer negotiation, documentation, and onboarding." }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-bold text-slate-500 mb-4 tracking-wide uppercase">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2 text-orange-500">{'>'}</span>
            <span className="text-orange-500">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">What We Offer</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            End-to-end staffing and HR solutions built for modern, fast-moving businesses.
          </p>
        </div>
      </section>

      {/* Services Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        
        {/* Service 1: IT Staffing */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow group">
          <div className="w-full lg:w-5/12 bg-orange-500 rounded-[2rem] h-64 md:h-80 flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <Users className="w-24 h-24 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">IT Staffing</h2>
            <p className="font-bold text-orange-500 mb-4 tracking-wide">The right tech talent, when you need them.</p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              We connect businesses with pre-vetted IT professionals from developers and architects to QA engineers and project managers. Our pool spans full-stack, cloud, data, and infrastructure talent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> On-demand talent</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Pre-screened candidates</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Filled within 7-14 days</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Flexible engagement</div>
            </div>
            <button className="mt-8 text-orange-500 font-extrabold hover:text-orange-600 flex items-center transition-colors">
              Explore IT Staffing <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Service 2: Contract Hiring (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow group">
          <div className="w-full lg:w-5/12 bg-orange-500 rounded-[2rem] h-64 md:h-80 flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <FileText className="w-24 h-24 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Contract Hiring</h2>
            <p className="font-bold text-orange-500 mb-4 tracking-wide">Flexible staffing for short-term needs.</p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              Scale your workforce up or down with contract professionals who hit the ground running. Ideal for project-based work, seasonal demand spikes, and bridge hiring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Duration 1 month+</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Full compliance</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Quick turnaround</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Option to convert</div>
            </div>
            <button className="mt-8 text-orange-500 font-extrabold hover:text-orange-600 flex items-center transition-colors">
              Explore Contract Hiring <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Service 3: Permanent Placement */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow group">
          <div className="w-full lg:w-5/12 bg-orange-500 rounded-[2rem] h-64 md:h-80 flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <Building2 className="w-24 h-24 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Permanent Placement</h2>
            <p className="font-bold text-orange-500 mb-4 tracking-wide">Find long-term candidates who truly fit.</p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              Our permanent placement service goes beyond matching resumes. We assess technical skills, soft skills, and cultural alignment to deliver candidates who stay and grow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Deep assessment</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Industry-specialist</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> 90-day guarantee</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> End-to-end support</div>
            </div>
            <button className="mt-8 text-orange-500 font-extrabold hover:text-orange-600 flex items-center transition-colors">
              Explore Permanent Placement <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Service 4: HR Consulting (Reversed Layout) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow group">
          <div className="w-full lg:w-5/12 bg-orange-500 rounded-[2rem] h-64 md:h-80 flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <LineChart className="w-24 h-24 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">HR Consulting</h2>
            <p className="font-bold text-orange-500 mb-4 tracking-wide">Strategic HR guidance to unlock your people potential.</p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              From building your HR function from scratch to optimizing existing processes, our HR consulting team partners with you on performance management, compensation strategy, and compliance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> HR process design</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Compensation benchmarking</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Performance management</div>
              <div className="flex items-center text-slate-900 font-bold text-sm"><Check className="w-5 h-5 text-orange-500 mr-3" /> Statutory compliance</div>
            </div>
            <button className="mt-8 text-orange-500 font-extrabold hover:text-orange-600 flex items-center transition-colors">
              Explore HR Consulting <span className="ml-2">→</span>
            </button>
          </div>
        </div>

      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">A simple, transparent process from first call to first day.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto pt-2">
            <div className="hidden md:block absolute top-[23px] left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-orange-300 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-extrabold flex items-center justify-center text-xl mb-6 shadow-xl relative z-10 mx-auto md:mx-0 ring-8 ring-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-3 text-lg">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

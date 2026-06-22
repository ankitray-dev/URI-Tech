"use client";

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown, Filter, X } from 'lucide-react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: "Senior React Developer", company: "Infosys Ltd.", location: "Bhubaneswar, Odisha", type: "Full-Time", experience: "5-8 yrs", salary: "12-18 LPA", tags: ["React", "TypeScript", "Next.js"], posted: "2 days ago" },
  { id: 2, title: "DevOps Engineer", company: "TCS", location: "Bangalore, Karnataka", type: "Full-Time", experience: "3-6 yrs", salary: "20-28 LPA", tags: ["AWS", "Docker", "Kubernetes"], posted: "5 days ago" },
  { id: 3, title: "HR Business Partner", company: "Wipro Technologies", location: "Hyderabad, Telangana", type: "Full-Time", experience: "4-7 yrs", salary: "8-12 LPA", tags: ["HR Strategy", "Talent Management", "MBA"], posted: "3 days ago" },
  { id: 4, title: "Cloud Infrastructure Architect", company: "Cognizant", location: "Remote", type: "Contract", experience: "8+ yrs", salary: "35-50 LPA", tags: ["AWS", "Azure", "Terraform"], posted: "Today" },
  { id: 5, title: "UI/UX Designer", company: "Zoho Corporation", location: "Mumbai, Maharashtra", type: "Full-Time", experience: "3-5 yrs", salary: "8-15 LPA", tags: ["Figma", "Prototyping", "Design Systems"], posted: "3 days ago" },
  { id: 6, title: "Data Analyst", company: "HCL Technologies", location: "Delhi, NCR", type: "Full-Time", experience: "1-3 yrs", salary: "7-11 LPA", tags: ["SQL", "Power BI", "Python"], posted: "4 days ago" },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 border-b border-slate-200 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-bold text-slate-500 mb-4 tracking-wide uppercase">
            <Link href="/" className="hover:text-orange-500 cursor-pointer transition-colors">Home</Link>
            <span className="mx-2 text-orange-500">{'>'}</span>
            <span className="text-orange-500">Jobs</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Find Your Next Opportunity</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Browse hundreds of live IT and tech roles across India's top companies.
          </p>
        </div>
      </section>

      {/* Sticky Search Bar - z-[60] ensures it stays above filters */}
      <div className="bg-white border-b border-slate-200 sticky top-[80px] z-[60] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Job title, skill, or keyword..." 
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="relative w-full md:w-48">
                <select className="w-full appearance-none bg-white border border-slate-200 px-4 py-3.5 rounded-xl font-bold text-slate-700 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 cursor-pointer">
                  <option>All Types</option>
                  <option>Full-Time</option>
                  <option>Contract</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10 items-start relative">
        
        {/* Mobile Filter Overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 bg-slate-900/50 z-[100] lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMobileFilterOpen(false)} />
        )}

        {/* Sidebar Filters - z-[10] so it slides under the search bar */}
        <aside className={`
          fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[110]
          lg:static lg:w-72 lg:bg-transparent lg:shadow-none lg:shrink-0 lg:translate-x-0 lg:sticky lg:top-[180px] lg:z-[10]
          ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full overflow-y-auto p-6 lg:p-0 lg:max-h-[calc(100vh-200px)] no-scrollbar">
            
            <div className="bg-white lg:rounded-[2rem] lg:border lg:border-slate-200 lg:p-8 lg:shadow-sm">
              <div className="flex justify-between items-center mb-8 lg:hidden">
                <h2 className="font-extrabold text-slate-900 text-2xl">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 hover:text-orange-500 rounded-full transition-colors">
                  <X className="w-6 h-6"/>
                </button>
              </div>

              <h2 className="hidden lg:block font-extrabold text-slate-900 mb-6 text-xl">Filters</h2>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Department</h3>
                <div className="space-y-4">
                  {['IT & Software', 'Finance & Accounting', 'HR', 'Operations', 'Sales'].map(dept => (
                    <label key={dept} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                      <span className="text-slate-600 group-hover:text-slate-900 text-sm font-bold transition-colors">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Work Mode</h3>
                <div className="space-y-4">
                  {['On-site', 'Remote', 'Hybrid'].map(mode => (
                    <label key={mode} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                      <span className="text-slate-600 group-hover:text-slate-900 text-sm font-bold transition-colors">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Salary Range</h3>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Min" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
                  <span className="text-slate-400 font-bold">-</span>
                  <input type="number" placeholder="Max" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
                </div>
              </div>

              <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Job Listings Grid */}
        <div className="flex-1 w-full lg:z-0">
          <div className="mb-8 flex justify-between items-end gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Job Listings</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden lg:block text-slate-500 font-medium text-sm">Showing {MOCK_JOBS.length} results</span>
              <button onClick={() => setIsMobileFilterOpen(true)} className="lg:hidden flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 shadow-sm hover:border-orange-500 hover:text-orange-500 transition-colors">
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {MOCK_JOBS.map(job => (
              <div key={job.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-bold text-slate-500">{job.company}</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">{job.posted}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-orange-500 mb-4 transition-colors leading-tight">{job.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600 font-bold"><MapPin className="w-4 h-4 mr-2 text-slate-400" /> {job.location}</div>
                  <div className="flex items-center text-sm text-slate-600 font-bold"><Briefcase className="w-4 h-4 mr-2 text-slate-400" /> {job.type}</div>
                </div>
                <div className="mb-6">
                   <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-extrabold text-sm rounded-lg">{job.salary}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8 flex-1">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <button className="flex-1 text-slate-700 font-bold hover:text-orange-500 transition-colors text-center py-3.5 border border-slate-200 rounded-xl">
                    View Details
                  </button>
                  <button className="flex-1 bg-orange-500 text-white font-bold px-4 py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

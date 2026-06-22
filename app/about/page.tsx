"use client";

import React from 'react';
import { 
  Eye, Zap, Gem, Shield, Handshake, Users, CheckCircle
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section with Dotted Background */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <span>Home</span>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">About URI Tech</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            We connect talent with opportunity and have been doing it for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Images Grid (Placeholder boxes matching the design) */}
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
            <div className="bg-slate-100 rounded-3xl h-full w-full object-cover"></div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="bg-slate-100 rounded-3xl h-full w-full object-cover"></div>
              <div className="bg-orange-500 rounded-3xl h-full w-full flex items-center justify-center p-6 text-center text-white font-bold shadow-lg shadow-orange-500/20">
                Est. 2009 - Bhubaneswar, India
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Built on the Belief That the Right Hire Changes Everything
            </h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                URI Tech was founded in Bhubaneswar, Odisha with a single mission: to bridge the gap between exceptional tech talent and the forward-thinking companies that need them. What started as a small recruitment desk has grown into a trusted staffing partner for over 200 companies across India.
              </p>
              <p>
                We understand the unique pressures of the tech industry: the pace of change, the demand for niche skills, the cost of a bad hire. That's why every placement we make is backed by a rigorous screening process, deep industry knowledge, and a genuine commitment to long-term fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      
      {/* Stats Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { num: '5000+', label: 'Placements' },
            { num: '200+', label: 'Client Companies' },
            { num: '15+', label: 'Years Experience' },
            { num: '95%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-center hover:border-orange-200 transition-colors">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.num}</div>
              <div className="text-sm md:text-base font-bold text-slate-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-500 p-10 md:p-14 rounded-[2rem] text-white shadow-xl shadow-orange-500/10">
            <h4 className="text-orange-100 font-bold tracking-wider text-sm uppercase mb-4">Our Mission</h4>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">To connect the right talent with the right opportunity, every time.</h3>
            <p className="text-orange-50 text-lg leading-relaxed">We exist to make hiring less painful and more precise. We do this by investing deeply in candidate relationships, staying current on industry trends, and maintaining honest, transparent communication with every client and candidate we work with.</p>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[2rem]">
            <h4 className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4">Our Vision</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">To be India's most trusted IT staffing and recruitment partner.</h3>
            <p className="text-slate-600 text-lg leading-relaxed">We're building toward a future where no great technologist goes undiscovered, and no company struggles to find the talent they need to grow. We want to be the bridge that makes Indian tech thrive.</p>
          </div>
        </div>
      </section>

      {}

      {/* What We Stand For */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: 'Transparency', desc: 'We say what we mean, and we mean what we say. No surprises.' },
            { icon: Zap, title: 'Speed', desc: 'Great candidates move fast. So do we.' },
            { icon: Gem, title: 'Quality', desc: 'We\'d rather send you 3 great candidates than 30 mediocre ones.' },
            { icon: Shield, title: 'Long-term Fit', desc: 'We measure success in years, not placements.' },
            { icon: Handshake, title: 'Expertise', desc: 'Our recruiters specialize. They know your industry, not just your job description.' },
            { icon: Users, title: 'Partnership', desc: 'We\'re not a vendor. We\'re an extension of your team.' }
          ].map((value, i) => (
            <div key={i} className="p-8 border border-slate-200 rounded-3xl bg-white hover:border-orange-500 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}

      {/* The People Behind URI Tech */}
      <section className="py-20 bg-slate-50 mt-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">The People Behind URI Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar Nayak', role: 'Founder & CEO', bio: '15 years in IT recruitment. Passionate about placing people in roles where they thrive.', initials: 'RK' },
              { name: 'Priya Sahu', role: 'Head of Talent Acquisition', bio: 'Specialist in tech and engineering hiring. Has personally placed 1,200+ candidates.', initials: 'PS' },
              { name: 'Amit Patra', role: 'Client Relations Lead', bio: 'Works directly with enterprise clients to build long-term hiring partnerships.', initials: 'AP' }
            ].map((member, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-6">
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-slate-500 font-medium mb-6 text-sm">{member.role}</p>
                <p className="text-slate-600 text-sm italic leading-relaxed">"{member.bio}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leading Companies Hire Through URI Tech */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why Leading Companies Hire Through URI Tech
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Hiring teams choose us for focused shortlists, honest communication, and recruiters who understand the real work behind every role.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { title: 'Pre-Screened Talent Pool', desc: 'Every candidate is interviewed and verified before you see them.' },
              { title: 'Fast Turnaround', desc: 'Average time-to-shortlist: 5 business days.' },
              { title: 'Industry-Specialist Recruiters', desc: "We hire recruiters who've worked in tech, not just recruited for it." },
              { title: 'Replacement Guarantee', desc: 'Permanent placements: free replacement within 90 days if needed.' },
              { title: 'Pan-India Network', desc: 'Active pools across Bhubaneswar, Bangalore, Hyderabad, Delhi, Mumbai.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* Trusted By Companies (Carousel) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Trusted by Companies Across India</h2>
        </div>
        
        {/* Inline styles for the marquee animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="relative w-full overflow-hidden flex">
          {/* Left/Right Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee gap-4 px-4">
            {[...['HCL', 'Cognizant', 'Tech Mahindra', 'Mphasis', 'Hexaware', 'NIIT Technologies', 'Mindtree', 'Infosys', 'Wipro', 'TCS'], ...['HCL', 'Cognizant', 'Tech Mahindra', 'Mphasis', 'Hexaware', 'NIIT Technologies', 'Mindtree', 'Infosys', 'Wipro', 'TCS']].map((company, i) => (
              <div key={i} className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-semibold shadow-sm hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default shrink-0">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

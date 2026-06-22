"use client";

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Linkedin, Twitter, Facebook, CheckCircle, ChevronDown
} from 'lucide-react';

const FAQS = [
  { q: "How quickly can you fill a position?", a: "For most mid-level IT roles, we can deliver a shortlist of 3-5 pre-screened candidates within 5 business days." },
  { q: "Do you work with startups or only enterprise clients?", a: "We work with companies of all sizes, from seed-stage startups building their founding engineering team to enterprise corporations scaling up." },
  { q: "What industries do you specialize in?", a: "Our core focuses are IT & Software, Manufacturing, Finance & Accounting, Retail & E-commerce, and Healthcare tech." },
  { q: "Is there a fee for job seekers?", a: "No, our placement services are completely free for job seekers. We are compensated by our client companies." },
  { q: "What is your replacement guarantee?", a: "We offer a 90-day free replacement guarantee for all permanent placements to ensure long-term fit." },
  { q: "How do I submit my CV if I don't see a matching job?", a: "Use the 'I'm Looking for a Job' form on this page. We'll add you to our talent pool and reach out when a matching role opens up." }
];

export default function ContactPage() {
  const [formType, setFormType] = useState<'hiring' | 'job'>('hiring');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <span>Home</span>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Whether you're hiring or job hunting, we'd love to hear from you.
          </p>
        </div>
      </section>

      {}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Let's Talk</h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Reach out and one of our team members will respond within one business day. We work with businesses of all sizes across India.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-500 mt-1">+91 674 6066050</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500 mt-1">info@uritechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Address</h3>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    B-36, 2nd Floor, Rupali Street, Sahid Nagar,<br/>Bhubaneswar - 751007, Odisha
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-12">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {}
          {/* Right: Interactive Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-lg text-slate-500">Thank you. We will be in touch shortly.</p>
              </div>
            )}

            {/* Form Toggle */}
            <div className="flex bg-slate-100 p-1.5 rounded-xl mb-10">
              <button 
                onClick={() => setFormType('hiring')}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${formType === 'hiring' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                I'm Hiring
              </button>
              <button 
                onClick={() => setFormType('job')}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${formType === 'job' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                I'm Looking for a Job
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {formType === 'hiring' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company Name <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">{formType === 'hiring' ? 'Work Email' : 'Email Address'} <span className="text-red-500">*</span></label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {formType === 'hiring' ? (
                <>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Number of Positions</label>
                    <input type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Requirement Details <span className="text-red-500">*</span></label>
                    <textarea required rows={4} placeholder="Tell us about the role, skills needed, and timeline..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Target Job Role <span className="text-red-500">*</span></label>
                    <input required type="text" placeholder="e.g. Frontend Developer" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">LinkedIn Profile URL</label>
                    <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                  </div>
                </>
              )}
              
              <button type="submit" className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 mt-4">
                {formType === 'hiring' ? 'Submit Hiring Inquiry' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {}

      {/* Map Banner Center */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
            <MapPin className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Bhubaneswar, Odisha</h2>
          <p className="text-lg text-slate-500">B-36, 2nd Floor, Rupali Street, Sahid Nagar, Bhubaneswar - 751007, Odisha</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

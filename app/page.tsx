"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, MapPin, Briefcase, Menu, X, Star, 
  ArrowUpRight, Building2, Users, FileText, 
  Settings, Mail, Phone, Facebook, Instagram, Linkedin,
  CheckCircle, Globe, Activity, ShoppingCart,
  ChevronRight, Check, BadgeCheck, LineChart, ArrowRight,
  Eye, Zap, Gem, Shield, Handshake, ChevronDown, ChevronUp,
  HeartPulse, Database
} from 'lucide-react';

// --- MOCK DATA ---

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Infosys Ltd.",
    location: "Bhubaneswar, Odisha",
    type: "Full-Time",
    experience: "3-5 yrs",
    salary: "12 - 18 LPA INR",
    salaryMin: 12,
    salaryMax: 18,
    tags: ["React", "TypeScript", "Node.js"],
    posted: "2 days ago",
    logo: "/avatars/avatar-1.svg"
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "TCS",
    location: "Bangalore, Karnataka",
    type: "Full-Time",
    experience: "4-6 yrs",
    salary: "20 - 28 LPA INR",
    salaryMin: 20,
    salaryMax: 28,
    tags: ["AWS", "Docker", "Kubernetes"],
    posted: "3 days ago",
    logo: "/avatars/avatar-2.svg"
  },
  {
    id: 3,
    title: "HR Business Partner",
    company: "Wipro Technologies",
    location: "Hyderabad, Telangana",
    type: "Full-Time",
    experience: "5-8 yrs",
    salary: "8 - 12 LPA INR",
    salaryMin: 8,
    salaryMax: 12,
    tags: ["HR Strategy", "Talent Management", "MBA"],
    posted: "5 days ago",
    logo: "/avatars/avatar-3.svg"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Architect",
    company: "Cognizant",
    location: "Remote",
    type: "Contract",
    experience: "7+ yrs",
    salary: "35 - 50 LPA INR",
    salaryMin: 35,
    salaryMax: 50,
    tags: ["AWS", "Azure", "Terraform"],
    posted: "Today",
    logo: "/avatars/avatar-4.svg"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Zoho Corporation",
    location: "Mumbai, Maharashtra",
    type: "Full-Time",
    experience: "2-4 yrs",
    salary: "8 - 15 LPA INR",
    salaryMin: 8,
    salaryMax: 15,
    tags: ["Figma", "Prototyping", "Design Systems"],
    posted: "2 days ago",
    logo: "/avatars/avatar-1.svg"
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "HCL Technologies",
    location: "Delhi, NCR",
    type: "Full-Time",
    experience: "1-3 yrs",
    salary: "7 - 11 LPA INR",
    salaryMin: 7,
    salaryMax: 11,
    tags: ["SQL", "Power BI", "Python"],
    posted: "4 days ago",
    logo: "/avatars/avatar-2.svg"
  }
];

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Software Engineer at Infosys",
    image: "/avatars/testimonial-1.svg",
    content: "URI Tech fundamentally transformed my career trajectory. Their intuitive job matching connected me with top-tier recruiters, drastically reducing my search time. The personalized approach and preparation tips were invaluable.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Rajan Gupta",
    role: "Placement Head, XYZ University",
    image: "/avatars/testimonial-2.svg",
    content: "URI Tech is an indispensable partner in our campus placement drives. They bring high-quality opportunities to our students and streamline the process end-to-end. We've seen a 40% increase in successful placements.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "HR Director, TechFlow",
    image: "/avatars/testimonial-3.svg",
    content: "The URI Tech team understands our requirements perfectly. They don't just send resumes; they send pre-screened candidates that fit our culture. Highly recommended for any business looking to scale their technical teams.",
    rating: 5
  }
];

// --- CUSTOM HOOKS ---

const useDataStream = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Dormant WebSocket implementation for future real-time streaming
    const socketUrl = `wss://api.uritech.internal/v2/${endpoint}`;
    let socket: WebSocket | null = null;

    const initializeSocket = () => {
      /*
      socket = new WebSocket(socketUrl);
      socket.onopen = () => setIsConnected(true);
      socket.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          setData(prev => [payload, ...prev]);
        } catch (err) {}
      };
      socket.onclose = () => setIsConnected(false);
      */
    };
    
    // Fallback to mock data for visual rendering
    if (endpoint === 'jobs') setData(MOCK_JOBS);
    
    return () => {
      if (socket) socket.close();
    };
  }, [endpoint]);

  return { data, isConnected };
};

// --- COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' as any }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 inline-flex justify-center items-center";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-orange-500 hover:text-orange-500 focus:ring-orange-200",
    dark: "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-800 shadow-sm",
    outline: "bg-transparent text-slate-700 border border-slate-300 hover:border-orange-500 hover:text-orange-500",
    ghost: "text-slate-600 hover:text-orange-500 hover:bg-orange-50"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const DottedPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
       style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fed7aa 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
  </div>
);

const Navbar = ({ currentPage, navigateTo }: { currentPage: string, navigateTo: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <span className="text-2xl font-extrabold tracking-tight text-orange-500">URI</span>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 ml-1">Tech</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <Button onClick={() => navigateTo('contact')}>Get Started</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-orange-500 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { navigateTo(link.id); setIsOpen(false); }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.id ? 'bg-orange-50 text-orange-500' : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <Button className="w-full" onClick={() => { navigateTo('contact'); setIsOpen(false); }}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ navigateTo }: { navigateTo: (p: string) => void }) => {
  return (
    <footer className="bg-white pb-8 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Orange Call To Action Banner */}
      <div className="relative bg-orange-500 rounded-3xl p-10 md:p-16 text-center text-white mb-12 overflow-hidden shadow-lg">
        {/* Network Pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '32px 32px'
             }}>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Dream Team?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for your next opportunity or searching for top talent — URI Tech is your strategic hiring partner.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-md inline-flex items-center hover:bg-slate-50 transition-colors shadow-sm"
          >
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Boxed Footer Links */}
      <div className="border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6 cursor-pointer" onClick={() => navigateTo('home')}>
                 <span className="text-2xl font-extrabold text-orange-500 tracking-tight">URI</span>
                 <span className="text-2xl font-extrabold text-slate-900 tracking-tight ml-1">Tech</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-4">Head office</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                 <li>MeetUniversity.Com</li>
                 <li>B-4, First Floor, B Block,</li>
                 <li>Sector 63, Noida, Uttar</li>
                 <li>Pradesh 201301</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 mt-8 md:mt-0">Contact us</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                 <li>Phone - +12345-67890</li>
                 <li>Email - info@abc.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 mt-8 lg:mt-0">Services</h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                 <li><button onClick={() => navigateTo('services')} className="hover:text-orange-500 transition-colors">IT Staffing</button></li>
                 <li><button onClick={() => navigateTo('services')} className="hover:text-orange-500 transition-colors">Contract Hiring</button></li>
                 <li><button onClick={() => navigateTo('services')} className="hover:text-orange-500 transition-colors">Permanent Placement</button></li>
                 <li><button onClick={() => navigateTo('services')} className="hover:text-orange-500 transition-colors">HR Consulting</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 mt-8 lg:mt-0">Company</h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                 <li><button onClick={() => navigateTo('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                 <li><button onClick={() => navigateTo('home')} className="hover:text-orange-500 transition-colors">Industries</button></li>
                 <li><button onClick={() => navigateTo('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
              </ul>
            </div>
         </div>

         <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">© 2026 URI Tech. All rights reserved.</p>
            <div className="flex space-x-5 text-slate-700">
               <a href="#" className="hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5"/></a>
               <a href="#" className="hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="w-4 h-4 fill-current mt-0.5" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
               </a>
               <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin className="w-5 h-5"/></a>
            </div>
         </div>
      </div>
    </footer>
  );
};

// --- PAGE COMPONENTS ---

const HomePage = ({ navigateTo }: { navigateTo: (p: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">Top Placements</span>
              <span className="w-1 h-1 bg-orange-300 rounded-full"></span>
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">100+ Companies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Unlock Your <br className="hidden md:block"/> Career with <br className="hidden md:block"/>
              <span className="text-orange-500">Exclusive Campus Jobs</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Land your dream job faster with exclusive placements, real-time hiring insights, and direct connections to top recruiters, all in one platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button onClick={() => navigateTo('contact')}>Hire Talent</Button>
              <Button variant="secondary" onClick={() => navigateTo('jobs')}>Find Jobs</Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-200" 
                       src={`/avatars/hero-avatar-${i}.svg`} alt="User" 
                       onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=User+${i}&background=f97316&color=fff` }}/>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <span className="text-slate-800 text-sm font-bold ml-2">4.8</span>
                </div>
                <span className="text-xs text-slate-500">From 500+ reviews</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-7 relative">
            <img 
              src="/images/hero-image.jpg" 
              alt="Students collaborating" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=800";
              }}
            />
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Services We Offer" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'IT Staffing', icon: Users, desc: 'Access a pool of vetted IT professionals ready to hit the ground running for your team.' },
              { title: 'Contract Hiring', icon: FileText, desc: 'Flexible contract staffing for short-term projects, leaves, and seasonal demands.' },
              { title: 'Permanent Placement', icon: Building2, desc: 'Find the perfect full-time candidates for long-term success and cultural fit.' },
              { title: 'HR Consulting', icon: Settings, desc: 'Strategic HR solutions to optimize your talent management framework and policies.' }
            ].map((service, idx) => (
              <div key={idx} onClick={() => navigateTo('services')} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-slate-900 mb-4">About Us</h2>
           <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              URI Tech is a leading IT staffing and recruitment firm with over 15 years of experience connecting top-tier technology professionals with innovative companies.
Our mission is to bridge the gap between exceptional talent and forward-thinking organizations. We understand the unique challenges of the tech industry and provide customized staffing solutions that drive business success.
With a dedicated team of recruiters and a vast network of IT professionals, we deliver quality candidates faster, ensuring you stay ahead in today's competitive market.
           </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '5000+', label: 'Placements' },
            { num: '200+', label: 'Client Companies' },
            { num: '15+', label: 'Years Experience' },
            { num: '95%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:border-orange-200 transition-colors cursor-pointer" onClick={() => navigateTo('about')}>
              <div className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2">{stat.num}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve - Centered Flow */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Industries We Serve" subtitle="Specialized staffing solutions across key technology sectors." centered={true} />
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {[
              { name: 'IT & Software', icon: '/industries/it-software.svg', fallback: Globe },
              { name: 'Manufacturing & Logistics', icon: '/industries/manufacturing.svg', fallback: Settings },
              { name: 'Finance & Accounting', icon: '/industries/finance.svg', fallback: Activity },
              { name: 'Retail & E-Commerce', icon: '/industries/retail.svg', fallback: ShoppingCart },
              { name: 'Healthcare & Pharmaceuticals', icon: '/industries/healthcare.svg', fallback: HeartPulse }
            ].map((ind, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(30%-1rem)] bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center hover:border-orange-500 transition-colors cursor-pointer text-center">
                <div className="w-24 h-24 flex items-center justify-center bg-orange-50 rounded-full text-orange-500 mb-6">
                  <img src={ind.icon} alt="" className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                  <ind.fallback className="w-12 h-12 hidden" />
                </div>
                <span className="font-bold text-lg text-slate-800">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Clients Say" centered={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full mr-3 bg-slate-200"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=f97316&color=fff` }} 
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get In Touch - Home Page Specific */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-slate-500 text-lg">Ready to find your next hire or career opportunity? Contact us today.</p>
          </div>
          <div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                     <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
                  <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                     <input type="email" required placeholder="johndoe@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input type="text" required placeholder="Company name" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
               </div>
               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Requirement</label>
                  <textarea required rows={4} placeholder="Tell us about your staffing needs......" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" />
               </div>
               <Button type="submit" variant="dark" className="w-full py-4 text-lg">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

const JobsPage = () => {
  const { data: jobs } = useDataStream('jobs');
  const [minSalary, setMinSalary] = useState(0);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => (job.salaryMax || 0) >= minSalary);
  }, [jobs, minSalary]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-20">
      <div className="bg-white border-b border-slate-200 relative pt-12 pb-16">
        <DottedPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm font-medium text-slate-500 mb-4">Home <ChevronRight className="w-3 h-3 inline mx-1"/> <span className="text-orange-500">Jobs</span></div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Find Your Next Opportunity</h1>
          <p className="text-slate-600 text-lg">Browse hundreds of live IT and tech roles across India's top companies.</p>
        </div>
      </div>

      <div className="bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input type="text" placeholder="Job title, skills, or company" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Location</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white">
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Pune</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Job Type</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white">
                <option>All Types</option>
                <option>Full-Time</option>
                <option>Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Experience</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none bg-white">
                <option>All Levels</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-48">
              <h2 className="font-bold text-slate-900 mb-6 text-lg">Filters</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Department</h3>
                <div className="space-y-3">
                  {['IT & Software', 'Finance & Accounting', 'HR', 'Operations', 'Sales'].map(dept => (
                    <label key={dept} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-slate-600 text-sm group-hover:text-orange-500">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-800 mb-3">Work Mode</h3>
                <div className="space-y-3">
                  {['On-site', 'Remote', 'Hybrid'].map(mode => (
                    <label key={mode} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-slate-600 text-sm group-hover:text-orange-500">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-slate-800">Min Salary</h3>
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">{minSalary > 0 ? `${minSalary} LPA+` : 'Any'}</span>
                </div>
                <input
                  type="range" min="0" max="50" step="1" value={minSalary}
                  onChange={(e) => setMinSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <Button className="w-full py-2 text-sm">Apply Filters</Button>
            </div>
          </aside>

          <div className="flex-1">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Open Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-500 text-xs font-medium">{job.company}</p>
                    <span className="text-slate-400 text-xs">{job.posted}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-4">{job.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-slate-400" /> {job.location}</div>
                    <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2 text-slate-400" /> {job.type}</div>
                    <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-slate-400" /> {job.experience}</div>
                  </div>

                  <div className="mb-6">
                     <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 font-semibold text-xs rounded-full">
                       {job.salary}
                     </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <button className="flex-1 text-center py-2 text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">View Details</button>
                    <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-orange-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
              <div>
                <h3 className="text-2xl font-bold mb-2">Don't see your perfect role?</h3>
                <p className="text-orange-100">Submit your CV and we'll reach out when something matches.</p>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-4">
                <button className="bg-white text-orange-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-50 transition-colors">Upload Your CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const serviceDetails = [
    { 
      title: 'IT Staffing', 
      icon: Users, 
      tagline: 'The right tech talent, when you need them.',
      desc: 'We connect businesses with pre-vetted IT professionals from developers and architects to QA engineers and project managers. Our pool spans full-stack, cloud, data, and infrastructure talent, ready to join your team fast.', 
      features: ['On-demand talent placement', 'Pre-screened and interview-ready candidates', 'Roles filled within 7-14 days', 'Flexible engagement models'] 
    },
    { 
      title: 'Contract Hiring', 
      icon: FileText, 
      tagline: 'Flexible staffing for short-term needs and seasonal peaks.',
      desc: 'Scale your workforce up or down with contract professionals who hit the ground running. Ideal for project-based work, seasonal demand spikes, and bridge hiring between permanent appointments.', 
      features: ['Contract durations from 1 month to 2 years', 'Full compliance and payroll handled', 'Quick turnaround on urgent requirements', 'Option to convert to permanent hire'] 
    },
    { 
      title: 'Permanent Placement', 
      icon: BadgeCheck, 
      tagline: 'Find long-term candidates who truly fit your culture.',
      desc: 'Our permanent placement service goes beyond matching resumes to job descriptions. We assess technical skills, soft skills, and cultural alignment to deliver candidates who stay and grow with your company.', 
      features: ['Deep candidate assessment process', 'Industry-specialist recruiters', '90-day replacement guarantee', 'End-to-end onboarding support'] 
    },
    { 
      title: 'HR Consulting', 
      icon: LineChart, 
      tagline: "Strategic HR guidance to unlock your people's potential.",
      desc: 'From building your HR function from scratch to optimizing existing processes, our HR consultants bring hands-on experience across policy design, performance frameworks, compliance, and talent strategy.', 
      features: ['HR process design and documentation', 'Compensation and benefits benchmarking', 'Performance management frameworks', 'Statutory compliance and labour law advisory'] 
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 relative pt-16 pb-20">
        <DottedPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm font-medium text-slate-500 mb-4">Home <ChevronRight className="w-3 h-3 inline mx-1"/> <span className="text-orange-500">Services</span></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">What We Offer</h1>
          <p className="text-slate-600 text-lg max-w-2xl">End-to-end staffing and HR solutions built for modern, fast-moving businesses.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Our Services</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Tailored Staffing Solutions for Every Business Need</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you need to scale your tech team quickly, find a permanent leadership hire, or optimize your HR function, URI Tech delivers the right talent at the right time.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <ul className="space-y-6">
              {serviceDetails.map((item, idx) => (
                <li key={idx} className={`flex items-center text-lg font-bold text-slate-800 ${idx !== 3 ? 'pb-6 border-b border-slate-100' : ''}`}>
                  <Check className="w-6 h-6 text-orange-500 mr-4" strokeWidth={3} /> {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Service Cards (Alternating Layout) */}
        <div className="space-y-16 mb-32">
          {serviceDetails.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`bg-white rounded-3xl border border-slate-200 p-8 md:p-12 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center shadow-sm hover:shadow-md transition-shadow`}>
                <div className="w-full md:w-2/5 bg-orange-500 rounded-3xl h-[300px] flex items-center justify-center shrink-0 shadow-inner">
                  <service.icon className="w-24 h-24 text-white" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-orange-500 font-semibold mb-6">{service.tagline}</p>
                  <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-orange-500 mr-2 mt-0.5 shrink-0"/> {feature}
                      </div>
                    ))}
                  </div>
                  <button className="text-orange-500 font-bold flex items-center hover:text-orange-600 transition-colors">
                    Explore {service.title} <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* How We Work Timeline */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">How We Work</h2>
          <p className="text-slate-500 mb-16">A simple, transparent process from first call to first day.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[1px] border-b border-dashed border-slate-300 z-0"></div>
            
            {[
              { num: 1, title: 'Understand Your Need', desc: 'We start with a detailed brief: role requirements, team culture, timeline, and budget.' },
              { num: 2, title: 'Source & Screen', desc: 'Our recruiters tap our network and run multi-stage screening to shortlist the best fits.' },
              { num: 3, title: 'You Interview', desc: 'We send a curated shortlist. You interview, give feedback, and we iterate fast.' },
              { num: 4, title: 'Place & Support', desc: 'Once you select, we handle offer negotiation, documentation, and onboarding.' }
            ].map(step => (
              <div key={step.num} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center mb-6 shadow-md mx-auto md:mx-0">{step.num}</div>
                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 relative pt-16 pb-20">
        <DottedPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm font-medium text-slate-500 mb-4">Home <ChevronRight className="w-3 h-3 inline mx-1"/> <span className="text-orange-500">About Us</span></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">About URI Tech</h1>
          <p className="text-slate-600 text-lg max-w-2xl">We connect talent with opportunity and have been doing it for over 15 years.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/hero-image.jpg" className="w-full h-full object-cover" alt="Team meeting" onError={(e) => e.currentTarget.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'} />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-orange-50 rounded-3xl overflow-hidden shadow-md border-4 border-white">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-90" alt="Office space" />
            </div>
            <div className="absolute bottom-6 left-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
              Est. 2009 - Bhubaneswar, India
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Our Story</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Built on the Belief That the Right Hire Changes Everything</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              URI Tech was founded in Bhubaneswar, Odisha with a single mission: to bridge the gap between exceptional tech talent and the forward-thinking companies that need them. What started as a small recruitment desk has grown into a trusted staffing partner for over 200 companies across India.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We understand the unique pressures of the tech industry: the pace of change, the demand for niche skills, the cost of a bad hire. That's why every placement we make is backed by a rigorous screening process, deep industry knowledge, and a genuine commitment to long-term fit.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24 py-12 border-y border-slate-100">
           {[
             { num: '5000+', label: 'Placements' },
             { num: '200+', label: 'Client Companies' },
             { num: '15+', label: 'Years Experience' },
             { num: '95%', label: 'Client Satisfaction' }
           ].map((stat, i) => (
             <div key={i}>
               <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.num}</div>
               <div className="text-sm font-medium text-slate-500">{stat.label}</div>
             </div>
           ))}
        </div>

        {/* Mission / Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-sm">
            <h4 className="text-xs font-bold text-orange-200 uppercase tracking-wider mb-4">Our Mission</h4>
            <h2 className="text-3xl font-bold mb-6 leading-tight">To connect the right talent with the right opportunity, every time.</h2>
            <p className="text-orange-100 leading-relaxed">
              We exist to make hiring less painful and more precise. We do this by investing deeply in candidate relationships, staying current on industry trends, and maintaining honest, transparent communication with every client and candidate we work with.
            </p>
          </div>
          <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
            <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-4">Our Vision</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">To be India's most trusted IT staffing and recruitment partner.</h2>
            <p className="text-slate-600 leading-relaxed">
              We're building toward a future where no great technologist goes undiscovered, and no company struggles to find the talent they need to grow. We want to be the bridge that makes Indian tech thrive.
            </p>
          </div>
        </div>

        {/* What We Stand For */}
        <div className="mb-24">
          <SectionHeading title="What We Stand For" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Transparency', icon: Eye, desc: 'We say what we mean, and we mean what we say. No surprises.' },
              { title: 'Speed', icon: Zap, desc: 'Great candidates move fast. So do we.' },
              { title: 'Quality', icon: Gem, desc: "We'd rather send you 3 great candidates than 30 mediocre ones." },
              { title: 'Long-term Fit', icon: Search, desc: 'We measure success in years, not placements.' },
              { title: 'Expertise', icon: Database, desc: 'Our recruiters specialize. They know your industry, not just your job description.' },
              { title: 'Partnership', icon: Handshake, desc: "We're not a vendor. We're an extension of your team." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-orange-200 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24 bg-slate-50 rounded-3xl p-12 border border-slate-100">
          <SectionHeading title="The People Behind URI Tech" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: 'RK', name: 'Rajesh Kumar Nayak', role: 'Founder & CEO', quote: '"15 years in IT recruitment. Passionate about placing people in roles where they thrive."' },
              { initials: 'PS', name: 'Priya Sahu', role: 'Head of Talent Acquisition', quote: '"Specialist in tech and engineering hiring. Has personally placed 1,200+ candidates."' },
              { initials: 'AP', name: 'Amit Patra', role: 'Client Relations Lead', quote: '"Works directly with enterprise clients to build long-term hiring partnerships."' }
            ].map((person, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 text-center shadow-sm">
                <div className="w-20 h-20 bg-orange-50 text-orange-500 font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {person.initials}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{person.role}</p>
                <p className="text-slate-500 text-sm italic">"{person.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Why Leading Companies Hire Through URI Tech</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Hiring teams choose us for focused shortlists, honest communication, and recruiters who understand the real work behind every role.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Pre-Screened Talent Pool', desc: 'Every candidate is interviewed and verified before you see them.' },
                { title: 'Fast Turnaround', desc: 'Average time-to-shortlist: 5 business days.' },
                { title: 'Industry-Specialist Recruiters', desc: "We hire recruiters who've worked in tech, not just recruited for it." },
                { title: 'Replacement Guarantee', desc: 'Permanent placements: free replacement within 90 days if needed.' },
                { title: 'Pan-India Network', desc: 'Active pools across Bhubaneswar, Bangalore, Hyderabad, Delhi, Mumbai.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 bg-orange-50 rounded-full mr-4 shrink-0 p-1">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="text-center pt-16 border-t border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-10">Trusted by Companies Across India</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {['HCL', 'Cognizant', 'Tech Mahindra', 'Mphasis', 'Hexaware', 'NIIT Technologies', 'Mindtree', 'Infosys', 'Wipro', 'TCS'].map((company, idx) => (
              <div key={idx} className="px-8 py-4 bg-white border border-slate-200 rounded-full font-semibold text-slate-500 shadow-sm text-sm hover:border-orange-300 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState<'hiring' | 'job'>('hiring');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', positions: '', role: '', details: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const MOCK_FAQS = [
    { question: "How quickly can you fill a position?", answer: "For most mid-level IT roles, we can deliver a shortlist of 3-5 pre-screened candidates within 5 business days." },
    { question: "Do you work with startups or only enterprise clients?", answer: "We work with businesses of all sizes, from seed-stage startups needing their first engineering hires to Fortune 500 enterprises scaling their teams." },
    { question: "What industries do you specialize in?", answer: "Our primary focus is IT & Software, Finance, Healthcare tech, Retail & E-commerce, and Manufacturing tech systems." },
    { question: "Is there a fee for job seekers?", answer: "No, our services are completely free for candidates and job seekers. We are compensated by our client companies." },
    { question: "What is your replacement guarantee?", answer: "We offer a 90-day replacement guarantee for permanent placements. If the candidate leaves or is let go within 90 days, we will find a replacement at no additional cost." },
    { question: "How do I submit my CV if I don't see a matching job?", answer: "Use the 'I'm Looking for a Job' form on this page. We'll add you to our talent pool and reach out when a matching role opens up." }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', company: '', email: '', phone: '', positions: '', role: '', details: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 relative pt-16 pb-20">
        <DottedPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm font-medium text-slate-500 mb-4">Home <ChevronRight className="w-3 h-3 inline mx-1"/> <span className="text-orange-500">Contact</span></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Whether you're hiring or job hunting, we'd love to hear from you.</p>
        </div>
      </div>

      {/* Main Content & Form */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Talk</h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-md">
              Reach out and one of our team members will respond within one business day. We work with businesses of all sizes across India.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-5">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1 border border-orange-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-500">+91 674 6066050</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1 border border-orange-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-500">info@uritechnologies.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1 border border-orange-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Address</h3>
                  <p className="text-slate-500 max-w-xs leading-relaxed">B-36, 2nd Floor, Rupali Street, Sahid Nagar, Bhubaneswar - 751007, Odisha</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted</h3>
                <p className="text-slate-500">Thank you! We've received your details and will be in touch shortly.</p>
              </div>
            )}

            <div className="flex bg-slate-50 rounded-full p-1 mb-8 border border-slate-200">
              <button 
                onClick={() => setActiveTab('hiring')}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'hiring' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-600 hover:text-orange-500'}`}
              >
                I'm Hiring
              </button>
              <button 
                onClick={() => setActiveTab('job')}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'job' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-600 hover:text-orange-500'}`}
              >
                I'm Looking for a Job
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                {activeTab === 'hiring' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email <span className="text-red-500">*</span></label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>

                {activeTab === 'hiring' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Positions</label>
                    <input type="number" min="1" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.positions} onChange={e => setFormData({...formData, positions: e.target.value})} />
                  </div>
                )}

                {activeTab === 'hiring' && (
                   <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Job Role / Department</label>
                     <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                   </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {activeTab === 'hiring' ? 'Requirement Details' : 'Message'} <span className="text-red-500">*</span>
                </label>
                <textarea required rows={4} placeholder={activeTab === 'hiring' ? "Tell us about the role, skills needed, and timeline..." : "Tell us about your experience and what you're looking for..."} className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" value={formData.requirement} onChange={e => setFormData({...formData, requirement: e.target.value})}></textarea>
              </div>
              
              <Button className="w-full py-4 text-lg" type="submit">
                {activeTab === 'hiring' ? 'Submit Hiring Inquiry' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-slate-50 py-16 border-y border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-4">
             <MapPin className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Bhubaneswar, Odisha</h2>
          <p className="text-slate-500 text-sm">B-36, 2nd Floor, Rupali Street, Sahid Nagar, Bhubaneswar - 751007, Odisha</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" centered={true} />
        <div className="space-y-0">
          {MOCK_FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none hover:text-orange-500 transition-colors"
              >
                <span className="font-bold text-slate-900 text-sm md:text-base pr-8">{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="pb-6 pr-8 text-slate-500 text-sm leading-relaxed animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigateTo={setCurrentPage} />;
      case 'jobs': return <JobsPage />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigateTo={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col selection:bg-orange-200 selection:text-orange-900">
      <Navbar currentPage={currentPage} navigateTo={setCurrentPage} />
      <main className="flex-1 flex flex-col">
        {renderContent()}
      </main>
      <Footer navigateTo={setCurrentPage} />
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Menu, X, Heart, Users, Trophy, GraduationCap,
  Target, Calendar, Mail, Instagram, CheckCircle,
  ArrowRight, UserPlus, Handshake, Play, MapPin,
  Youtube, Linkedin, Twitter, ChevronRight
} from 'lucide-react';

// ==========================================
// MODULE 1: CONSTANTS & DATA
// ==========================================

const COLORS = {
  navy: '#273867',
  sand: '#da8f7f',
  teal: '#28bbc3',
  ice: '#8098bd',
  white: '#ffffff'
};

const PILLARS_DATA = [
  {
    title: "The Academy",
    icon: GraduationCap,
    items: ["Specialized Training", "Video Analysis", "Player Statistics"]
  },
  {
    title: "Mentorship",
    icon: Users,
    description: "Financial Literacy, Mental Health, Leadership, Nutrition",
    tags: true
  },
  {
    title: "Networking",
    icon: Handshake,
    description: "Connecting corporates to teams for CSR. Linking talent to scholarships and creating job opportunities."
  },
  {
    title: "Events",
    icon: Calendar,
    description: "3x3 Showcases, Full-court tournaments, and Community basketball clinics."
  }
];

const ROADMAP_DATA = {
  shortTerm: [
    { title: "Scout 50+ Players", icon: UserPlus, desc: "Profile female talent for agency representation." },
    { title: "Community Clinics", icon: Target, desc: "Clinics in Buru, Koma, and Umoja." },
    { title: "Online Platform", icon: Play, desc: "Launch media channels and grow reach." }
  ],
  longTerm: [
    { title: "3 Community Courts", icon: MapPin, desc: "Safe playing spaces by Year 7." },
    { title: "Scholarship Fund", icon: GraduationCap, desc: "Support 10+ players annually." },
    { title: "Top Ranked in Africa", icon: Trophy, desc: "Hub for elite women's basketball." }
  ]
};

// ==========================================
// MODULE 2: SHARED UI COMPONENTS
// ==========================================

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  // Styles updated for a sportier, more dynamic feel
  const baseStyles = "relative overflow-hidden px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 group";

  const variants = {
    primary: `bg-[#da8f7f] text-[#273867] hover:bg-[#c97b6b] shadow-lg hover:shadow-[#da8f7f]/50`,
    secondary: `bg-[#28bbc3] text-white hover:bg-[#22a1a8] shadow-lg hover:shadow-[#28bbc3]/50`,
    outline: `border-2 border-[#da8f7f] text-[#da8f7f] hover:bg-[#da8f7f] hover:text-[#273867]`,
    dark: `bg-[#273867] text-white hover:bg-[#1e2b4f] border border-[#273867]`,
    ghost: `bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200`,
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16 space-y-4 relative">
    <h2 className={`text-5xl md:text-6xl font-black tracking-tighter italic ${light ? 'text-white' : 'text-[#273867]'}`}>
      {title.toUpperCase()}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl font-medium max-w-2xl mx-auto ${light ? 'text-[#8098bd]' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
    {/* Decorative underline simulating a court marking */}
    <div className="flex justify-center items-center gap-2 mt-4">
      <div className={`h-1 w-12 rounded-full ${light ? 'bg-[#28bbc3]' : 'bg-[#da8f7f]'}`}></div>
      <div className={`h-1 w-2 rounded-full ${light ? 'bg-[#da8f7f]' : 'bg-[#28bbc3]'}`}></div>
      <div className={`h-1 w-12 rounded-full ${light ? 'bg-[#28bbc3]' : 'bg-[#da8f7f]'}`}></div>
    </div>
  </div>
);

// ==========================================
// MODULE 3: FEATURE COMPONENTS
// ==========================================

const Navigation = ({ scrolled, onOpenMenu, onJoinClick }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#273867]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* LOGO UPDATE: Replaced "ND" box with the image */}
        <Image
          src="/logopic.png"
          alt="Nia Dada Logo"
          width={48}
          height={48}
          className="w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
        <span className="text-2xl font-black tracking-tighter text-white">Nia Dada</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['About', 'Pillars', 'Roadmap', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-[#da8f7f] font-bold uppercase text-sm tracking-widest transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#da8f7f] transition-all group-hover:w-full"></span>
          </a>
        ))}
        <Button variant="secondary" className="px-6 py-2 text-xs" onClick={onJoinClick}>
          Join Academy
        </Button>
      </div>

      <button className="md:hidden text-white hover:text-[#da8f7f] transition-colors" onClick={onOpenMenu}>
        <Menu size={32} strokeWidth={2.5} />
      </button>
    </div>
  </nav>
);

const Hero = ({ onJoin, onPartner }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-[#273867]">
    {/* Dynamic Background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#273867] via-[#273867]/90 to-[#273867]/40"></div>
      {/* Sporty decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#28bbc3]/20 rounded-full blur-sm"></div>
      <div className="absolute -bottom-12.5 -left-12.5 w-64 h-64 bg-[#da8f7f]/10 rounded-full blur-2xl"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 pt-20">
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#da8f7f] text-[#273867] font-bold text-xs tracking-widest uppercase transform -skew-x-12 shadow-lg animate-in slide-in-from-left fade-in duration-700">
          <span className="transform skew-x-12">Est. Kenya 2024</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] italic animate-in slide-in-from-bottom fade-in duration-1000 delay-100">
          PLAY WITH <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#da8f7f] via-white to-[#28bbc3]">PURPOSE.</span> <br />
          EMPOWER HER.
        </h1>

        <p className="text-xl md:text-2xl text-[#8098bd] max-w-2xl font-medium leading-relaxed border-l-4 border-[#28bbc3] pl-6 animate-in slide-in-from-bottom fade-in duration-1000 delay-200">
          An initiative focused on empowering girls and women through basketball in Kenya. Building athletes, leaders, and changemakers.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-in slide-in-from-bottom fade-in duration-1000 delay-300">
          <Button variant="secondary" onClick={onJoin} className="md:w-auto">
            <UserPlus size={20} /> Join The Academy
          </Button>
          <Button variant="outline" onClick={onPartner} className="md:w-auto">
            <Handshake size={20} /> Partner With Us
          </Button>
        </div>

        <div className="pt-8 flex items-center gap-4 text-[#8098bd] text-sm font-semibold tracking-wide">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#273867] bg-white flex items-center justify-center overflow-hidden">
                <Users size={16} className="text-[#273867]" />
              </div>
            ))}
          </div>
          <p>Join 50+ registered players in Nairobi</p>
        </div>
      </div>
    </div>

    {/* Bottom Slope for dynamic transition */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-16 md:h-24 fill-white">
        <path d="M1200 120L0 16.48V0h1200v120z" className="opacity-100"></path>
      </svg>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white relative">
    <div className="container mx-auto px-6">
      <SectionHeading title="The Hybrid Model" subtitle="Sustaining impact through structure." />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Foundation Card */}
        <div className="group relative bg-gray-50 rounded-4xl p-8 border-2 border-transparent hover:border-[#da8f7f] transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#da8f7f]/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-[#da8f7f]/20 transition-all"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#273867] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-all duration-500">
              <Heart size={32} />
            </div>
            <h3 className="text-3xl font-black text-[#273867] mb-3 uppercase italic">The Foundation</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              The heart of our work. We focus on holistic development through mentorship, mental health support, menstrual hygiene camps, and building community courts in underserved areas like Buru, Koma, and Umoja.
            </p>
          </div>
        </div>

        {/* Agency Card */}
        <div className="group relative bg-[#273867] rounded-4xl p-8 border-2 border-transparent hover:border-[#28bbc3] transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden text-white">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#28bbc3]/10 rounded-full blur-2xl -ml-16 -mb-16 group-hover:bg-[#28bbc3]/20 transition-all"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#28bbc3] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg -rotate-3 group-hover:rotate-0 transition-all duration-500">
              <Trophy size={32} />
            </div>
            <h3 className="text-3xl font-black text-white mb-3 uppercase italic">The Agency</h3>
            <p className="text-[#8098bd] leading-relaxed font-medium">
              The engine of opportunity. We professionally represent players, negotiate contracts, secure scholarships, and produce high-quality documentaries to tell the untold stories of Kenyan women&apos;s basketball.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pillars = () => (
  <section id="pillars" className="py-24 bg-gray-50 relative overflow-hidden">
    {/* Decorative background lines */}
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#273867 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Our Pillars" subtitle="Four distinct ways we drive change." />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS_DATA.map((pillar, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-[#28bbc3] hover:transform hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#273867]/5 rounded-xl flex items-center justify-center mb-6 text-[#273867] group-hover:bg-[#273867] group-hover:text-white transition-colors duration-300">
              <pillar.icon size={28} />
            </div>
            <h3 className="text-xl font-black text-[#273867] mb-4 uppercase">{pillar.title}</h3>
            {pillar.items ? (
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-600">
                    <CheckCircle size={16} className="text-[#da8f7f] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm font-medium text-gray-600 leading-relaxed">
                <p className="mb-3">{pillar.description}</p>
                {pillar.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pillar.description.split(', ').map((tag, t) => (
                      <span key={t} className="text-[10px] uppercase font-bold bg-[#da8f7f]/10 text-[#273867] px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section id="roadmap" className="py-24 bg-[#273867] text-white relative overflow-hidden">
    {/* Slanted Separator Top */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-12 fill-gray-50">
        <path d="M1200 120L0 16.48V0h1200v120z" className="opacity-100"></path>
      </svg>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Vision Map" subtitle="Our strategic path to victory." light />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mt-16">
        {/* Short Term */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="px-4 py-1 rounded bg-[#28bbc3] text-[#273867] font-black uppercase text-sm transform -skew-x-12">Phase 1</div>
            <h3 className="text-3xl font-black italic text-[#28bbc3]">SHORT TERM</h3>
          </div>
          <div className="space-y-6">
            {ROADMAP_DATA.shortTerm.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#28bbc3]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#28bbc3]/20 flex items-center justify-center text-[#28bbc3] shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-[#8098bd] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long Term */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="px-4 py-1 rounded bg-[#da8f7f] text-[#273867] font-black uppercase text-sm transform -skew-x-12">Phase 2</div>
            <h3 className="text-3xl font-black italic text-[#da8f7f]">LONG TERM</h3>
          </div>
          <div className="space-y-6">
            {ROADMAP_DATA.longTerm.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#da8f7f]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#da8f7f]/20 flex items-center justify-center text-[#da8f7f] shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-[#8098bd] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Impact = ({ onDonate }) => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-6">
      <div className="rounded-[2.5rem] bg-linear-to-br from-[#273867] to-[#1e2b4f] p-8 md:p-16 relative overflow-hidden shadow-2xl text-center">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#da8f7f] opacity-10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28bbc3] opacity-10 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 italic">WHY SUPPORT US?</h2>
          <p className="text-lg md:text-2xl text-[#8098bd] leading-relaxed font-medium mb-12">
            &quot;For us, it&apos;s more than just basketball. We use it as an entry point to build stronger leaders and communities. Your support creates safer spaces for girls to play, grow, and transform their futures.&quot;
          </p>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            <div className="inline-block px-3 py-1 bg-[#da8f7f] text-[#273867] text-xs font-black uppercase rounded mb-4">Current Drive</div>
            <h3 className="text-2xl font-bold text-white mb-2">Community Outreach</h3>
            <p className="text-gray-300 mb-6">
              Gathering pads, sports bras, socks, and equipment for teams in <span className="text-[#28bbc3] font-bold">Buru, Koma, and Umoja</span>.
            </p>
            <Button variant="secondary" onClick={onDonate}>Donate Equipment <ArrowRight size={18} /></Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onLinkClick }) => (
  <footer id="contact" className="bg-[#1e2b4f] text-white pt-24 pb-12 px-12 border-t border-[#28bbc3]/20 relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            {/* LOGO UPDATE: Replaced "ND" box with the image */}
            <Image
              src="/logopic.png"
              alt="Nia Dada Logo"
              width={64}
              height={64}
              className="w-auto object-contain"
            />
            {/* Kept text hidden on smaller screens if needed, or displayed for clarity */}
            <span className="text-2xl font-black tracking-tighter text-[#da8f7f]">Nia Dada</span>
          </div>
          <p className="text-[#8098bd] mb-8 leading-relaxed font-medium">
            Empowering girls and women through basketball in Kenya. Creating the next generation of champions on and off the court.
          </p>
          <div className="flex gap-4">
            {[Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#da8f7f] hover:text-[#273867] transition-all duration-300 hover:-translate-y-1">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black mb-6 text-[#28bbc3] uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-4">
            {['About', 'Pillars', 'Roadmap', 'Partner With Us'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => onLinkClick(item.toLowerCase().includes('partner') ? 'partner' : `#${item.toLowerCase().replace(' ', '')}`)}
                  className="text-[#8098bd] hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight size={14} className="text-[#da8f7f] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-6 text-[#da8f7f] uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-[#8098bd]">
            <li className="flex items-center gap-3 font-medium"><Mail size={18} className="text-[#28bbc3]" /> niadadakenya@gmail.com</li>
            <li className="flex items-center gap-3 font-medium"><Instagram size={18} className="text-[#28bbc3]" /> @Niadada_kenya</li>
            <li className="flex items-center gap-3 font-medium"><Twitter size={18} className="text-[#28bbc3]" /> @Hoops123</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {['#niadada', '#playwithpurpose', '#empowerher'].map(hash => (
              <span key={hash} className="text-[10px] font-bold uppercase bg-black/30 px-3 py-1 rounded-full text-gray-400 border border-white/5">{hash}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#8098bd]/10 pt-8 text-center text-[#8098bd]/60 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Nia Dada Foundation. All rights reserved.</p>
        <p>Made with ❤️ by Xtreme Tech</p>
      </div>
    </div>
  </footer>
);

const Modals = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#273867]/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl relative shadow-2xl animate-in fade-in zoom-in duration-300 my-8">
        <div className="h-2 bg-linear-to-r from-[#da8f7f] to-[#28bbc3] w-full absolute top-0 left-0 rounded-t-3xl"></div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>
        <div className="p-8 md:p-10">
          <h3 className="text-3xl font-black text-[#273867] mb-8 border-b pb-4 uppercase italic">
            {activeModal === 'player' ? 'Join The Academy' : 'Partner With Us'}
          </h3>

          {activeModal === 'player' ? (
            <form className="space-y-5" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              data.formType = 'player_registration';

              const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              if (response.ok) {
                alert("Application Submitted Successfully!");
                onClose();
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name</label>
                  <input type="text" name="fullName" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">DOB</label>
                  <input type="date" name="dob" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Height (cm)</label>
                  <input type="number" name="height" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="175" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Position</label>
                  <select name="position" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium">
                    <option>Point Guard</option>
                    <option>Shooting Guard</option>
                    <option>Small Forward</option>
                    <option>Power Forward</option>
                    <option>Center</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Tell us your story</label>
                <textarea name="story" rows="3" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="Why do you want to join Nia Dada?"></textarea>
              </div>
              <div className="bg-[#da8f7f]/10 p-5 rounded-xl border border-[#da8f7f]/20">
                <h4 className="font-bold text-[#273867] mb-3 flex items-center gap-2 text-sm uppercase"><Heart size={16} className="text-[#da8f7f]" /> Welfare Check</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                    <input type="checkbox" name="mentorship_interested" className="w-4 h-4 rounded text-[#28bbc3] focus:ring-[#28bbc3]" />
                    I am interested in mentorship programs
                  </label>
                  <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                    <input type="checkbox" name="gear_support_needed" className="w-4 h-4 rounded text-[#28bbc3] focus:ring-[#28bbc3]" />
                    I need support with sports gear (shoes, pads, etc.)
                  </label>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row gap-4 mt-8">
                <Button type="button" variant="ghost" onClick={onClose} className="w-full md:w-1/3 justify-center">Close</Button>
                <Button type="submit" variant="primary" className="w-full md:w-2/3 justify-center">Submit Registration</Button>
              </div>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              data.formType = 'partner_proposal';

              const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              if (response.ok) {
                alert("Proposal Sent Successfully!");
                onClose();
              }
            }}>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Organization Name</label>
                <input type="text" name="organization_name" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="Company Ltd" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Contact Person</label>
                  <input type="text" name="contact_person" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Partnership Interest</label>
                <select name="partnership_interest" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium">
                  <option>Corporate Sponsorship</option>
                  <option>CSR Activity (Community Courts)</option>
                  <option>Equipment Donation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message</label>
                <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#28bbc3] outline-none transition-all font-medium" placeholder="Collaboration ideas..."></textarea>
              </div>
              <div className="flex flex-col-reverse md:flex-row gap-4 mt-8">
                <Button type="button" variant="ghost" onClick={onClose} className="w-full md:w-1/3 justify-center">Close</Button>
                <Button type="submit" variant="dark" className="w-full md:w-2/3 justify-center">Send Proposal</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MODULE 4: MAIN APP COMPONENT
// ==========================================

export default function NiaDadaApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (dest) => {
    if (dest === 'partner') {
      setActiveModal('partner');
    } else {
      window.location.href = dest;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50 selection:bg-[#da8f7f] selection:text-[#273867]">
      {/* Module: Navigation */}
      <Navigation
        scrolled={scrolled}
        onOpenMenu={() => setIsMenuOpen(!isMenuOpen)}
        onJoinClick={() => setActiveModal('player')}
      />

      {/* Module: Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#273867] pt-24 px-6 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {['About', 'Pillars', 'Roadmap', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-3xl font-black italic hover:text-[#da8f7f]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
            <Button variant="secondary" className="w-full justify-center mt-4" onClick={() => { setActiveModal('player'); setIsMenuOpen(false); }}>
              Join Academy
            </Button>
          </div>
        </div>
      )}

      {/* Module: Hero Section */}
      <Hero
        onJoin={() => setActiveModal('player')}
        onPartner={() => setActiveModal('partner')}
      />

      {/* Module: About Section */}
      <About />

      {/* Module: Pillars Section */}
      <Pillars />

      {/* Module: Roadmap Section */}
      <Roadmap />

      {/* Module: Impact Section */}
      <Impact onDonate={() => setActiveModal('partner')} />

      {/* Module: Footer */}
      <Footer onLinkClick={handleLinkClick} />

      {/* Module: Modals */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 bg-warm-50 overflow-hidden">
      {/* Warm subtle background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-crimson/[0.04] to-transparent -z-10 skew-x-12 transform translate-x-32"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 z-10 text-left">
            {/* Badge — warm accent */}
            <div className="opacity-0 animate-slide-up stagger-1 inline-flex items-center px-4 py-2 rounded-full bg-brand-crimson/[0.08] border border-brand-crimson/10 text-brand-crimson text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
              </span>
              Trusted by 500+ Corporations
            </div>
            
            {/* H1 — Outfit heading for premium authority */}
            <h1 className="opacity-0 animate-slide-up stagger-2 text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy leading-[1.05] tracking-tight font-heading">
              Departmental-Grade <br />
              <span className="text-brand-crimson">Tax Shield</span> <span className="text-warm-500">for Business.</span>
            </h1>
            
            {/* Body text — refined spacing */}
            <p className="opacity-0 animate-slide-up stagger-3 mt-8 text-body-lg text-warm-600 leading-relaxed max-w-2xl font-medium">
              Protect your enterprise from compliance risks with 10+ years of departmental expertise. 
              We deliver litigation-ready GST solutions and professional training designed to navigate India&apos;s complex tax landscape.
            </p>
            
            {/* CTA Buttons — enhanced mass */}
            <div className="opacity-0 animate-slide-up stagger-4 mt-12 flex flex-col sm:flex-row gap-5">
              <Link href="/services/gst#contact" className="btn-primary !px-12 !py-5 text-base shadow-elevation-2 hover:shadow-elevation-3 group">
                <span className="flex items-center gap-2">
                  Get Secure Audit
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/training" className="btn-secondary !px-12 !py-5 text-base hover:bg-warm-100">
                Professional Academy
              </Link>
            </div>
            
            {/* Trust Metrics — cleaner layout */}
            <div className="opacity-0 animate-slide-up stagger-5 mt-16 pt-12 border-t border-warm-200 grid grid-cols-3 gap-10">
              <div className="group">
                <p className="text-4xl font-black text-brand-navy group-hover:text-brand-crimson transition-colors duration-300">10+</p>
                <p className="text-[10px] font-bold text-warm-500 uppercase tracking-widest mt-2">Years Exp.</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-brand-navy group-hover:text-brand-crimson transition-colors duration-300">500+</p>
                <p className="text-[10px] font-bold text-warm-500 uppercase tracking-widest mt-2">Clients</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-brand-navy group-hover:text-brand-crimson transition-colors duration-300">100%</p>
                <p className="text-[10px] font-bold text-warm-500 uppercase tracking-widest mt-2">Compliance</p>
              </div>
            </div>
          </div>

          {/* Right Column — Premium Imagery */}
          <div className="lg:col-span-5 relative mt-20 lg:mt-0 opacity-0 animate-slide-up stagger-3">
            <div className="relative z-10 p-4 rounded-[3rem] glass-morphism shadow-elevation-hero border border-white/40">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-inner">
                <Image 
                  src="/hero-shield.png" 
                  alt="Tax Kavach Professional Security" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Decorative Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent pointer-events-none"></div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  Secure Audit System
                </div>
              </div>
              
              {/* Floating Badge — Glassmorphism */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-elevation-3 border border-warm-200/50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-crimson to-brand-crimson-dark rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-crimson/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-black text-brand-navy">Government Verified</p>
                  <p className="text-[10px] font-bold text-warm-500 uppercase tracking-tighter">Departmental Grade Audit</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-crimson/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-navy/5 blur-3xl rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

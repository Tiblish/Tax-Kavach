import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 bg-warm-50 overflow-hidden">
      {/* Warm subtle background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-crimson/[0.03] to-transparent -z-10 skew-x-12 transform translate-x-20"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 z-10 text-left">
            {/* Badge — warm accent */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-crimson/[0.06] border border-brand-crimson/10 text-brand-crimson text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
              </span>
              10+ Years of Expertise
            </div>
            
            {/* H1 — Navy heading for warmth + authority */}
            <h1 className="text-4xl lg:text-6xl xl:text-display font-black text-brand-navy leading-[1.1] tracking-tight">
              Decades of Tax Expertise. <br />
              <span className="text-brand-crimson">Your Shield Against</span> <span className="text-warm-500">Compliance Risks.</span>
            </h1>
            
            {/* Body text — warm grey */}
            <p className="mt-8 text-body-lg text-warm-600 leading-relaxed max-w-2xl font-medium">
              Led by a team with 10+ years of experience in GST and Income Tax. 
              Expert-led solutions and professional training for a complex tax landscape.
            </p>
            
            {/* CTA Buttons — crimson primary + warm secondary */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/services/gst#contact" className="btn-primary text-base !px-10 !py-4 text-center">
                Consult an Expert
              </Link>
              <Link href="/training" className="btn-secondary text-base !px-10 !py-4 text-center">
                Explore Training
              </Link>
            </div>
            
            {/* Trust Metrics */}
            <div className="mt-12 pt-10 border-t border-warm-200 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black text-brand-crimson">10+</p>
                <p className="text-xs font-semibold text-warm-500 uppercase tracking-wider mt-1">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-crimson">500+</p>
                <p className="text-xs font-semibold text-warm-500 uppercase tracking-wider mt-1">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-crimson">100%</p>
                <p className="text-xs font-semibold text-warm-500 uppercase tracking-wider mt-1">Compliance</p>
              </div>
            </div>
          </div>

          {/* Right Column — Elevated card with warm gradient */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="relative z-10 bg-white p-3 rounded-4xl shadow-elevation-hero border border-warm-200/80">
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark aspect-[4/5] rounded-3xl flex items-center justify-center overflow-hidden relative">
                {/* Warm accent overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-crimson/20 to-transparent"></div>
                {/* Minimalist Professional Graphic */}
                <svg className="w-40 h-40 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              
              {/* Floating Badge — warm styling */}
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-elevation-2 border border-warm-200/50 flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-warm-900">Secure & Verified</p>
                  <p className="text-xs text-warm-500">Audit-Ready Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-crimson/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-crimson/[0.02] rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

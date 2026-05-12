import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      {/* Background: Nested surface nesting — light gray panel for visual separation */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -z-10 skew-x-12 transform translate-x-20"></div>
      {/* Subtle grid pattern overlay for texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #003366 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 z-10 text-left">
            {/* Badge — clear visual label */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              10+ Years of Expertise
            </div>
            
            {/* H1 — 16px base × 4 = 64px display. High contrast brand-blue on white */}
            <h1 className="text-4xl lg:text-6xl xl:text-display font-black text-brand-blue leading-[1.1] tracking-tight">
              Decades of Tax Expertise. <br />
              <span className="text-brand-grey">Your Shield Against Compliance Risks.</span>
            </h1>
            
            {/* Body — 18px (body-lg) with 1.6 line-height for readability */}
            <p className="mt-8 text-body-lg text-brand-grey leading-relaxed max-w-2xl font-medium">
              Led by a team with 10+ years of experience in GST and Income Tax. 
              Expert-led solutions and professional training for a complex tax landscape.
            </p>
            
            {/* CTA Buttons — 48px+ height, solid fills for affordance clarity */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/services/gst#contact" className="btn-primary text-base !px-10 !py-4 text-center">
                Consult an Expert
              </Link>
              <Link href="/training" className="btn-secondary text-base !px-10 !py-4 text-center">
                Explore Training
              </Link>
            </div>
            
            {/* Trust Metrics — separated by a subtle border for visual hierarchy */}
            <div className="mt-12 pt-10 border-t border-slate-100 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black text-brand-blue">10+</p>
                <p className="text-xs font-semibold text-brand-steel uppercase tracking-wider mt-1">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-blue">500+</p>
                <p className="text-xs font-semibold text-brand-steel uppercase tracking-wider mt-1">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-blue">100%</p>
                <p className="text-xs font-semibold text-brand-steel uppercase tracking-wider mt-1">Compliance</p>
              </div>
            </div>
          </div>

          {/* Right Column — Elevated card with surface elevation */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="relative z-10 bg-white p-3 rounded-4xl shadow-elevation-hero border border-slate-100/80">
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark aspect-[4/5] rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Minimalist Professional Graphic */}
                <svg className="w-40 h-40 text-white/15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              
              {/* Floating Badge — elevated surface with shadow */}
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-elevation-2 border border-slate-100/50 flex items-center gap-3">
                <div className="w-11 h-11 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Secure & Verified</p>
                  <p className="text-xs text-brand-steel">Audit-Ready Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-blue/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-blue/[0.02] rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

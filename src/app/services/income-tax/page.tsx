"use client";

import Navbar from '@/components/Navbar';
import GSTTicker from '@/components/GSTTicker';
import InquiryForm from '@/components/InquiryForm';

export default function IncomeTaxPage() {
  return (
    <main className="min-h-screen bg-warm-100 selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      <div className="pt-[72px]">
        <GSTTicker />
      </div>

      {/* Hero — Strategic Wealth Authority */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
               <div className="opacity-0 animate-slide-up stagger-1 inline-flex items-center px-4 py-2 rounded-full bg-brand-crimson/[0.08] border border-brand-crimson/10 text-brand-crimson text-[10px] font-black uppercase tracking-[0.25em] mb-8">
                 <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
                 </span>
                 Strategic Wealth Protection
               </div>
               <h1 className="opacity-0 animate-slide-up stagger-2 text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy leading-[1.05] tracking-tight mb-8 font-heading">
                 Departmental <br />
                 <span className="text-brand-crimson">Scrutiny Defense.</span>
               </h1>
               <p className="opacity-0 animate-slide-up stagger-3 text-body-lg text-warm-600 font-medium max-w-2xl leading-relaxed mb-12">
                 Expert tax planning and high-stakes representational services led by former departmental officials. We deliver strategic structural optimization for HNWIs and corporate entities.
               </p>
               <div className="opacity-0 animate-slide-up stagger-4 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                 <a href="#contact" className="btn-primary !px-12 !py-5 text-base shadow-elevation-2 hover:shadow-elevation-3 group">
                   <span className="flex items-center gap-2">
                     Consult Senior Partner
                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                   </span>
                 </a>
               </div>
            </div>
            
            <div className="lg:col-span-5 mt-20 lg:mt-0 opacity-0 animate-slide-up stagger-3">
               <div className="relative group">
                  <div className="absolute -inset-6 bg-brand-crimson/[0.05] rounded-[3rem] blur-3xl group-hover:bg-brand-crimson/[0.08] transition-all duration-700"></div>
                  <div className="relative bg-white p-3 rounded-[3.5rem] border border-warm-200/50 overflow-hidden shadow-elevation-hero glass-morphism">
                     <div className="aspect-square bg-gradient-to-br from-warm-50 to-white flex items-center justify-center p-16 rounded-[2.5rem] relative">
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-crimson/[0.08] to-transparent rounded-b-[2.5rem]"></div>
                        <svg className="w-full h-full text-brand-navy/[0.04] transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 12.1c-2.1 0-4-1.1-5.1-2.8.1-.6 1.1-1.2 2.1-1.6.9-.3 1.9-.5 3-.5s2.1.2 3 .5c1 .4 2 1 2.1 1.6-1.1 1.7-3 2.8-5.1 2.8z"/>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Expertise Pillars — Deep Surface */}
      <section className="py-24 lg:py-36 bg-warm-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="opacity-0 animate-slide-up stagger-1 inline-block px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Strategic Domains
            </div>
            <h2 className="opacity-0 animate-slide-up stagger-2 text-4xl lg:text-6xl font-black text-brand-navy tracking-tight mb-4 font-heading">
              Elite <span className="text-brand-crimson">Representation</span>
            </h2>
            <p className="opacity-0 animate-slide-up stagger-3 text-warm-600 font-bold text-body-lg max-w-xl mx-auto leading-relaxed">
              Sophisticated solutions for complex individual and corporate portfolios, designed for ultimate stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="opacity-0 animate-slide-up stagger-2 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Corporate Filing</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>ITR 1-7 Strategic Filing</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Advanced TDS/TCS Audits</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Statutory Tax Engineering</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="opacity-0 animate-slide-up stagger-3 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Wealth Strategy</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Capital Gains Optimization</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Family Office Structural Advisory</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Sectional Incentive Harvesting</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="opacity-0 animate-slide-up stagger-4 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.105c1.547-1.871 2.402-4.225 2.402-6.466V11a3 3 0 00-6 0v1.001c0 2.241.855 4.595 2.402 6.466m4.75 4.47l-.923 2.117a1 1 0 01-1.846 0l-.923-2.117m11.237-4.47c1.547-1.871 2.402-4.225 2.402-6.466V11a3 3 0 00-6 0v1.001c0 2.241.855 4.595 2.402 6.466m-7.25 4.47l.923 2.117a1 1 0 001.846 0l.923-2.117" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Scrutiny Defense</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>143(3) Forensic Defense</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>IT Notice Resolution</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>High-Value Representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Departmental Edge — Premium Contrast */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="opacity-0 animate-slide-up stagger-1 bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded-[3.5rem] p-10 lg:p-24 relative overflow-hidden shadow-elevation-hero">
             <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
             
             <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 mb-12 lg:mb-0">
                   <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full mb-8">
                      The Departmental Edge
                   </div>
                   <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading mb-8">
                      Anticipating the <span className="text-brand-crimson">Auditor.</span>
                   </h2>
                   <div className="w-20 h-1.5 bg-brand-crimson/50 rounded-full"></div>
                </div>
                <div className="lg:col-span-7">
                   <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                      Wealth protection requires more than just knowing the rules; it requires understanding the <strong className="text-white">Internal Directives</strong> of the Income Tax Department.
                   </p>
                   <p className="text-white/80 text-xl font-medium leading-relaxed">
                      Our team consists of former officials who bring an &ldquo;Insider&apos;s Eye&rdquo; to your portfolio. We don&apos;t just prepare your files; we build them to survive the rigorous logic of the <strong className="text-white">IT Scrutiny Systems</strong>.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Lead Capture — Elite CTA */}
      <section id="contact" className="py-24 lg:py-36 bg-warm-100 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-slide-up stagger-1">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading mb-4">
              Strategic <span className="text-brand-crimson">Consultation</span>
            </h2>
            <p className="text-warm-600 font-bold text-lg">Discuss your portfolio with our senior tax engineers.</p>
          </div>
          <InquiryForm defaultService="Income Tax Consultation" />
        </div>
      </section>
    </main>
  );
}

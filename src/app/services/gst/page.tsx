"use client";

import Navbar from '@/components/Navbar';
import GSTTicker from '@/components/GSTTicker';
import InquiryForm from '@/components/InquiryForm';
import NoticeDecoder from '@/components/NoticeDecoder';
import { useState } from 'react';

export default function GSTServicesPage() {
  const [noticeMessage, setNoticeMessage] = useState("");

  const scrollToContact = (noticeType: string) => {
    setNoticeMessage(`I have received a ${noticeType} notice and would like expert assistance with the response and documentation.`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-warm-100 selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      <div className="pt-[72px]">
        <GSTTicker />
      </div>

      {/* Hero — Departmental Authority */}
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
                 National Tax Compliance Standards
               </div>
               <h1 className="opacity-0 animate-slide-up stagger-2 text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy leading-[1.05] tracking-tight mb-8 font-heading">
                 Forensic <span className="text-brand-crimson">GST Audit</span> <br />
                 <span className="text-warm-500">& Litigation Defense.</span>
               </h1>
               <p className="opacity-0 animate-slide-up stagger-3 text-body-lg text-warm-600 font-medium max-w-2xl leading-relaxed mb-12">
                 Leverage over a decade of departmental experience to shield your enterprise. We deliver litigation-proof compliance strategies and forensic reconciliations that withstand the most rigorous assessments.
               </p>
               <div className="opacity-0 animate-slide-up stagger-4 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                 <a href="#contact" className="btn-primary !px-12 !py-5 text-base shadow-elevation-2 hover:shadow-elevation-3 group">
                   <span className="flex items-center gap-2">
                     Book Expert Audit
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
                          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 15.17l7.59-7.59L19 9l-9 9z"/>
                        </svg>
                        {/* Floating Security Badge */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-crimson text-white rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars — Deep Surface Cards */}
      <section className="py-24 lg:py-36 bg-warm-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="opacity-0 animate-slide-up stagger-1 inline-block px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Core GST Domains
            </div>
            <h2 className="opacity-0 animate-slide-up stagger-2 text-4xl lg:text-6xl font-black text-brand-navy tracking-tight mb-4 font-heading">
              Strategic <span className="text-brand-crimson">Excellence</span>
            </h2>
            <p className="opacity-0 animate-slide-up stagger-3 text-warm-600 font-bold text-body-lg max-w-xl mx-auto leading-relaxed">
              Comprehensive protection across every departmental touchpoint, built on forensic precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="opacity-0 animate-slide-up stagger-2 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Compliance & Filing</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Strategic Registration</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Optimized GSTR-1/3B</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Annual GSTR-9/9C Shield</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="opacity-0 animate-slide-up stagger-3 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Forensic Analysis</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>ITC Forensic Audit</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>E-Way Bill Intelligence</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Audit-Proof Readiness</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="opacity-0 animate-slide-up stagger-4 card-premium !p-10">
              <div className="w-16 h-16 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-6 font-heading tracking-tight">Litigation Defense</h3>
              <ul className="space-y-4 text-warm-600 font-bold text-body">
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>SCN Technical Response</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Appellate Representation</li>
                <li className="flex items-center group"><span className="w-2 h-2 bg-brand-crimson rounded-full mr-4 transition-transform group-hover:scale-150"></span>Anti-Evasion Defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Edge — Brand Depth */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-warm-50/50 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="opacity-0 animate-slide-up stagger-1 bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded-[3.5rem] p-10 lg:p-24 relative overflow-hidden shadow-elevation-hero">
             <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] skew-x-12 translate-x-32"></div>
             
             <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 mb-12 lg:mb-0">
                   <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full mb-8">
                      The Departmental Legacy
                   </div>
                   <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading mb-8">
                      We Know the <span className="text-brand-crimson">Internal Logic.</span>
                   </h2>
                   <div className="w-20 h-1.5 bg-brand-crimson/50 rounded-full"></div>
                </div>
                <div className="lg:col-span-7">
                   <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                      Tax Kavach originates from the deep intellectual bedrock of the <strong className="text-white">Central GST Department</strong>. With over a decade of national-level departmental expertise, we provide high-authority solutions across all of India, decoding complexity that others simply manage.
                   </p>
                   <p className="text-white/80 text-xl font-medium leading-relaxed">
                      We specialize in preempting evasion alerts and establishing structural integrity. We don&apos;t just prepare your files; we render them <strong className="text-brand-crimson">Audit-Immune</strong>.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Notice Decoder — Interactive Tooling */}
      <section className="py-24 lg:py-36 bg-warm-100 relative">
        <div className="max-w-5xl mx-auto px-4">
          <NoticeDecoder onSelect={scrollToContact} />
        </div>
      </section>

      {/* Lead Capture — Final CTA */}
      <section id="contact" className="py-24 lg:py-36 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-slide-up stagger-1">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading mb-4">
              Secure Your <span className="text-brand-crimson">Legacy</span>
            </h2>
            <p className="text-warm-600 font-bold text-lg">Initiate your departmental-grade defense strategy today.</p>
          </div>
          <InquiryForm initialMessage={noticeMessage} />
        </div>
      </section>
    </main>
  );
}

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
    <main className="min-h-screen bg-warm-100">
      <Navbar />
      <div className="pt-[72px]">
        <GSTTicker />
      </div>

      {/* Hero — White surface on warm base */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-crimson/[0.06] border border-brand-crimson/10 text-brand-crimson text-[10px] font-bold uppercase tracking-widest mb-6">
                 <span className="w-2 h-2 bg-brand-accent rounded-full mr-2.5 animate-pulse"></span>
                 Audit Kolkata-II Expertise
               </div>
               <h1 className="text-4xl lg:text-6xl xl:text-display font-black text-brand-navy leading-[1.05] tracking-tight mb-6">
                 Decades of GST Audit Expertise. <br />
                 <span className="text-warm-500">Your Shield Against Litigation.</span>
               </h1>
               <p className="text-body-lg text-warm-600 font-medium max-w-2xl leading-relaxed mb-10">
                 Expert-led forensic audits and compliance strategies from a team with over 10 years of experience in the GST Department. We understand the auditor&apos;s mind.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <a href="#contact" className="btn-primary text-base !px-10 !py-4 text-center">
                   Book a Free Health Check
                 </a>
               </div>
            </div>
            
            <div className="lg:col-span-5 mt-16 lg:mt-0">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-crimson/[0.03] rounded-4xl blur-2xl group-hover:bg-brand-crimson/[0.06] transition-all duration-500"></div>
                  <div className="relative bg-white p-2 rounded-4xl border border-warm-200/80 overflow-hidden shadow-elevation-hero">
                     <div className="aspect-square bg-gradient-to-br from-warm-100 to-white flex items-center justify-center p-12 rounded-3xl relative">
                        {/* Crimson accent gradient overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-brand-crimson/10 to-transparent rounded-b-3xl"></div>
                        <svg className="w-full h-full text-brand-navy/[0.07]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 15.17l7.59-7.59L19 9l-9 9z"/>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core GST Domains */}
      <section className="py-24 lg:py-30 bg-warm-100 relative">
        <div className="section-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-crimson/[0.06] text-brand-crimson text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
              Our Expertise
            </div>
            <h2 className="text-heading font-black text-brand-navy uppercase tracking-tight mb-3">Core GST Domains</h2>
            <p className="text-warm-600 font-medium text-body-lg">Comprehensive protection across all departmental touchpoints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-warm-200/80 shadow-elevation-1 card-interactive">
              <div className="w-14 h-14 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-heading-sm font-bold text-brand-navy mb-4">Compliance & Filing</h3>
              <ul className="space-y-3 text-warm-600 font-medium text-body">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>GST Registration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>Monthly GSTR-1/3B</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>Annual GSTR-9/9C</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-warm-200/80 shadow-elevation-1 card-interactive">
              <div className="w-14 h-14 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-heading-sm font-bold text-brand-navy mb-4">Forensic & Audit</h3>
              <ul className="space-y-3 text-warm-600 font-medium text-body">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>2B Reconciliation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>E-Way Bill Analysis</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>Audit-Ready Systems</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-warm-200/80 shadow-elevation-1 card-interactive">
              <div className="w-14 h-14 bg-brand-crimson/[0.06] text-brand-crimson rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-heading-sm font-bold text-brand-navy mb-4">Litigation Support</h3>
              <ul className="space-y-3 text-warm-600 font-medium text-body">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>SCN Responses</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>Tribunal Representation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>Tax Evasion Defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Edge — Navy gradient with crimson accents */}
      <section className="py-24 lg:py-30 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded-4xl p-10 lg:p-20 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(27,42,74,0.3)]">
             {/* Crimson accent line at top */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson rounded-t-4xl"></div>
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] skew-x-12"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5"></div>
             
             <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                <div className="lg:col-span-5 mb-10 lg:mb-0">
                   <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                      Our Background
                   </div>
                   <h2 className="text-heading lg:text-heading-lg font-black text-white leading-tight mb-6">
                      Why Experience Matters in GST.
                   </h2>
                   <div className="w-16 h-1 bg-brand-crimson/60 rounded-full"></div>
                </div>
                <div className="lg:col-span-7">
                   <p className="text-white/80 text-body-lg font-medium leading-relaxed mb-6">
                      Tax Kavach isn&apos;t just a consultancy; it&apos;s a team with deep roots in the <strong className="text-white">GST Department (Audit Kolkata-II)</strong>. Having spent over a decade on the &ldquo;other side&rdquo; of the table, we know exactly where auditors look for vulnerabilities.
                   </p>
                   <p className="text-white/80 text-body-lg font-medium leading-relaxed">
                      We specialize in tax evasion detection prevention and forensic reconciliation. We don&apos;t just file your returns; we ensure they are <strong className="text-white">Audit-Proof</strong>.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Notice Decoder */}
      <section className="py-24 lg:py-30 bg-warm-100 relative">
        <div className="section-divider"></div>
        <div className="max-w-4xl mx-auto px-4">
          <NoticeDecoder onSelect={scrollToContact} />
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contact" className="py-24 lg:py-30 bg-white relative">
        <div className="section-divider"></div>
        <div className="max-w-4xl mx-auto px-4">
          <InquiryForm initialMessage={noticeMessage} />
        </div>
      </section>
    </main>
  );
}

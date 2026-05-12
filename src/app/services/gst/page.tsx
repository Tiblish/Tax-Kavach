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
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <GSTTicker />
      </div>

      {/* Hero... */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-[10px] font-black uppercase tracking-widest mb-8">
                  Audit Kolkata-II Expertise
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-brand-blue leading-[1.05] tracking-tight mb-8">
                 Decades of GST Audit Expertise. <br />
                 <span className="text-brand-grey">Your Shield Against Litigation.</span>
               </h1>
               <p className="text-xl text-brand-grey font-medium max-w-2xl leading-relaxed mb-12">
                 Expert-led forensic audits and compliance strategies from a team with over 10 years of experience in the GST Department. We understand the auditor's mind.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-tight hover:bg-blue-900 transition-all shadow-2xl shadow-blue-100">
                   Book a Free Compliance Health Check
                 </button>
               </div>
            </div>
            
            <div className="lg:col-span-5 mt-16 lg:mt-0">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-blue/5 rounded-[40px] blur-2xl group-hover:bg-brand-blue/10 transition-all"></div>
                  <div className="relative bg-brand-light p-1 rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl">
                     <div className="aspect-square bg-white flex items-center justify-center p-12">
                        <svg className="w-full h-full text-brand-blue/10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 15.17l7.59-7.59L19 9l-9 9z"/>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">Core GST Domains</h2>
            <p className="text-brand-grey font-semibold text-lg">Comprehensive protection across all departmental touchpoints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Compliance & Filing</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>GST Registration</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Monthly GSTR-1/3B</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Annual GSTR-9/9C</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Forensic & Audit</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>2B Reconciliation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>E-Way Bill Analysis</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Audit-Ready Systems</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Litigation Support</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>SCN Responses</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Tribunal Representation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Tax Evasion Defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Insider Edge Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-[50px] p-12 lg:p-24 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,51,102,0.4)]">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
             
             <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 mb-12 lg:mb-0">
                   <div className="inline-block px-4 py-2 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded mb-6">
                      Our Background
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                      Why Experience Matters in GST.
                   </h2>
                   <div className="w-20 h-1 bg-white mb-8"></div>
                </div>
                <div className="lg:col-span-7">
                   <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                      Tax Kavach isn't just a consultancy; it's a team with deep roots in the **GST Department (Audit Kolkata-II)**. Having spent over a decade on the "other side" of the table, we know exactly where auditors look for vulnerabilities.
                   </p>
                   <p className="text-white/80 text-xl font-medium leading-relaxed">
                      We specialize in tax evasion detection prevention and forensic reconciliation. We don't just file your returns; we ensure they are **Audit-Proof**.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Notice Decoder Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <NoticeDecoder onSelect={scrollToContact} />
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4">
          <InquiryForm initialMessage={noticeMessage} />
        </div>
      </section>
    </main>
  );
}

import Navbar from '@/components/Navbar';
import GSTTicker from '@/components/GSTTicker'; // Reusing for general updates
import InquiryForm from '@/components/InquiryForm';

export default function IncomeTaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <GSTTicker />
      </div>

      {/* Income Tax Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-brand-grey text-[10px] font-black uppercase tracking-widest mb-8">
                  Strategic Wealth Protection
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-brand-blue leading-[1.05] tracking-tight mb-8">
                 Mastering the Nuances of the IT Act. <br />
                 <span className="text-brand-grey">Strategic Shield for Your Wealth.</span>
               </h1>
               <p className="text-xl text-brand-grey font-medium max-w-2xl leading-relaxed mb-12">
                 Expert tax planning and scrutiny representation led by a team with decades of experience in the Income Tax Department. We don't just file; we strategize.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <button className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-tight hover:bg-blue-900 transition-all shadow-2xl shadow-blue-100">
                   Schedule a Tax Consultation
                 </button>
               </div>
            </div>
            
            <div className="lg:col-span-5 mt-16 lg:mt-0">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-slate-100 rounded-[40px] blur-2xl group-hover:bg-slate-200 transition-all"></div>
                  <div className="relative bg-white p-1 rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl">
                     <div className="aspect-square bg-white flex items-center justify-center p-12">
                        <svg className="w-full h-full text-brand-blue/5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 12.1c-2.1 0-4-1.1-5.1-2.8.1-.6 1.1-1.2 2.1-1.6.9-.3 1.9-.5 3-.5s2.1.2 3 .5c1 .4 2 1 2.1 1.6-1.1 1.7-3 2.8-5.1 2.8z"/>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars (Income Tax Edition) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">Core IT Domains</h2>
            <p className="text-brand-grey font-semibold text-lg">Sophisticated solutions for complex individual and corporate portfolios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Personal & Corporate Filing</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>ITR 1-7 Filing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>TDS/TCS Compliance</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Statutory Tax Audits</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Strategic Tax Planning</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Wealth Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Section 80C/D Strategy</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Capital Gains Optimization</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.105c1.547-1.871 2.402-4.225 2.402-6.466V11a3 3 0 00-6 0v1.001c0 2.241.855 4.595 2.402 6.466m4.75 4.47l-.923 2.117a1 1 0 01-1.846 0l-.923-2.117m11.237-4.47c1.547-1.871 2.402-4.225 2.402-6.466V11a3 3 0 00-6 0v1.001c0 2.241.855 4.595 2.402 6.466m-7.25 4.47l.923 2.117a1 1 0 001.846 0l.923-2.117" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Litigation & Scrutiny</h3>
              <ul className="space-y-4 text-brand-grey font-medium">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>IT Notice Handling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>143(3) Assessments</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>Appellate Representation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Departmental Edge Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[50px] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-blue/20 to-transparent"></div>
             
             <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 mb-12 lg:mb-0">
                   <div className="inline-block px-4 py-2 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded mb-6">
                      The Departmental Edge
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                      We Understand the Auditor's Mind.
                   </h2>
                   <div className="w-20 h-1 bg-brand-blue mb-8"></div>
                </div>
                <div className="lg:col-span-7 text-white/80 text-xl font-medium leading-relaxed">
                   <p className="mb-8">
                      Successful Income Tax management requires more than just knowing the rules; it requires understanding how those rules are applied during an assessment.
                   </p>
                   <p>
                      Our team consists of **former tax officials** who bring decades of internal departmental knowledge. We don't just prepare your files; we build them to withstand the rigorous internal assessment logic of the Income Tax Department.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <InquiryForm defaultService="Income Tax Consultation" />
        </div>
      </section>
    </main>
  );
}

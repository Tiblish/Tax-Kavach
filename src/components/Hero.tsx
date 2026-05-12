import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-white overflow-hidden">
      {/* Background patterns for a corporate feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -z-10 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 z-10 text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              10+ Years of Expertise
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-brand-blue leading-[1.1] tracking-tight">
              Decades of Tax Expertise. <br />
              <span className="text-brand-grey">Your Shield Against Compliance Risks.</span>
            </h1>
            
            <p className="mt-8 text-xl text-brand-grey leading-relaxed max-w-2xl font-medium">
              Led by a team with 10+ years of experience in GST and Income Tax. 
              Expert-led solutions and professional training for a complex tax landscape.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <button className="bg-brand-blue text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-900 transition-all shadow-xl shadow-blue-200">
                Consult an Expert
              </button>
              <button className="bg-white text-brand-blue border-2 border-brand-blue px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all">
                Explore Training
              </button>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-brand-blue">10+</p>
                <p className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-blue">500+</p>
                <p className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-blue">100%</p>
                <p className="text-sm font-semibold text-brand-grey uppercase tracking-wider">Compliance</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,51,102,0.15)] border border-gray-100">
              <div className="bg-brand-blue aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Minimalist Professional Graphic */}
                <svg className="w-48 h-48 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Secure & Verified</p>
                  <p className="text-xs text-brand-grey">Audit-Ready Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-50 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-50/50 rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Services = () => {
  const pillars = [
    {
      title: "GST Solutions",
      description: "Departmental-grade compliance management and litigation-proof representational services.",
      items: ["Strategic Audit Readiness", "Forensic Reconciliation", "Show Cause Notice Defense", "Departmental Appeals"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Income Tax Services",
      description: "Advanced tax planning and scrutiny management for HNWIs and corporate entities.",
      items: ["Strategic Tax Planning", "Scrutiny Representation", "Capital Gains Structural Analysis", "International Tax Advisory"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Professional Academy",
      description: "Practical, case-study-led training designed to build the next generation of tax experts.",
      items: ["GST Practitioner Certification", "Advanced Accounting Workshops", "Corporate Compliance Training", "Live Case Study Analysis"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.246.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-warm-100 relative">
      <div className="section-divider"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="opacity-0 animate-slide-up inline-block px-4 py-1.5 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.25em] rounded-full mb-6">
            Our Core Services
          </div>
          <h2 className="opacity-0 animate-slide-up stagger-1 text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading">
            The Three Pillars of <span className="text-brand-crimson">Excellence</span>
          </h2>
          <p className="opacity-0 animate-slide-up stagger-2 mt-6 text-warm-600 text-body-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Expert financial and educational solutions designed to help you thrive in a complex regulatory environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`opacity-0 animate-slide-up stagger-${idx + 1} card-premium group flex flex-col h-full`}
            >
              {/* Icon container — animated background */}
              <div className="w-16 h-16 bg-warm-100 text-brand-crimson rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-crimson group-hover:text-white transition-all duration-500 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-black text-brand-navy mb-4 font-heading group-hover:text-brand-crimson transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-warm-600 font-medium mb-8 flex-grow text-body leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-4 mb-10">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-warm-700">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Button — high affordance */}
              <button className="mt-auto w-full py-4 bg-surface border-2 border-border-subtle rounded-2xl text-brand-navy font-black text-xs uppercase tracking-[0.15em] group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300 shadow-sm hover:shadow-elevation-2">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

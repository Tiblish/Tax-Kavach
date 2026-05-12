import React from 'react';

const Services = () => {
  const pillars = [
    {
      title: "GST Solutions",
      description: "Comprehensive management for all your GST needs.",
      items: ["Registration & Returns", "Forensic Audits", "Litigation Support", "Departmental Appeals"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Income Tax Services",
      description: "Strategizing and filing to minimize your tax liability.",
      items: ["Tax Planning", "ITR Filing", "Scrutiny Representation", "Capital Gains Analysis"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Professional Training",
      description: "Advanced learning for the next generation of tax experts.",
      items: ["GST Practitioner Courses", "Accounting Workshops", "Certification Programs", "Live Case Studies"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.246.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    /* Surface Nesting: brand-light base → white cards = visual separation */
    <section className="py-24 lg:py-30 bg-brand-light relative">
      {/* Subtle top border for section separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-heading font-black text-brand-blue tracking-tight">The Three Pillars of Excellence</h2>
          <p className="mt-4 text-brand-grey text-body-lg font-medium max-w-2xl mx-auto">
            Comprehensive financial and educational solutions designed to navigate the modern regulatory landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 lg:p-10 rounded-3xl shadow-elevation-1 hover:shadow-elevation-3 border border-slate-100/80 flex flex-col h-full card-interactive"
            >
              {/* Icon container with hover state transition */}
              <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-heading-sm font-bold text-brand-blue mb-3">{pillar.title}</h3>
              <p className="text-brand-grey font-medium mb-6 flex-grow text-body leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-slate-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Button with affordance: solid border + hover fill for clear interactivity */}
              <button className="mt-auto w-full py-3.5 border-2 border-slate-200 rounded-xl text-brand-blue font-bold text-sm uppercase tracking-wider group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 min-h-[48px]">
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

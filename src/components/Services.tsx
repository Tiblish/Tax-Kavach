import React from 'react';

const Services = () => {
  const pillars = [
    {
      title: "GST Solutions",
      description: "Comprehensive management for all your GST needs.",
      items: ["Registration & Returns", "Forensic Audits", "Litigation Support", "Departmental Appeals"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Income Tax Services",
      description: "Strategizing and filing to minimize your tax liability.",
      items: ["Tax Planning", "ITR Filing", "Scrutiny Representation", "Capital Gains Analysis"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Professional Training",
      description: "Advanced learning for the next generation of tax experts.",
      items: ["GST Practitioner Courses", "Accounting Workshops", "Certification Programs", "Live Case Studies"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.246.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-brand-blue tracking-tight">The Three Pillars of Excellence</h2>
          <p className="mt-4 text-brand-grey text-lg font-medium max-w-2xl mx-auto">
            Comprehensive financial and educational solutions designed to navigate the modern regulatory landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">{pillar.title}</h3>
              <p className="text-brand-grey font-medium mb-8 flex-grow">
                {pillar.description}
              </p>
              <ul className="space-y-4">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-4 border-2 border-brand-blue/10 rounded-xl text-brand-blue font-bold group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
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

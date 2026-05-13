"use client";

import Navbar from '@/components/Navbar';
import InquiryForm from '@/components/InquiryForm';
import CourseList from '@/components/CourseList';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-warm-100 selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      
      {/* Academy Hero Section — Authority & Mastery */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-dark">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] skew-x-12 transform translate-x-32"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="opacity-0 animate-slide-up stagger-1 inline-flex items-center px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/5">
             🎓 Tax Kavach Academy
          </div>
          <h1 className="opacity-0 animate-slide-up stagger-2 text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 font-heading">
            Master the <span className="text-brand-crimson">Internal Logic.</span> <br />
            <span className="text-brand-crimson-light font-light italic">From Theory to Litigation.</span>
          </h1>
          <p className="opacity-0 animate-slide-up stagger-3 text-body-lg lg:text-xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            Expert-led practical training designed by a GST Department veteran. Learn to navigate the GST portal with the precision of a tax official.
          </p>
          <div className="opacity-0 animate-slide-up stagger-4 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#courses" className="btn-primary !bg-brand-crimson !px-12 !py-5 text-base shadow-2xl hover:shadow-brand-crimson/20">
              Explore Modules
            </a>
            <a href="#enroll" className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-black text-base uppercase tracking-tight hover:bg-white/5 transition-all flex items-center justify-center hover:-translate-y-1">
              Apply for Enrollment
            </a>
          </div>
        </div>
        
        {/* Abstract geometric elements */}
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/5 rounded-full animate-pulse"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 border border-white/[0.03] rounded-full"></div>
      </section>

      {/* The Protocol Modules Section */}
      <section id="courses" className="py-24 lg:py-36 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="opacity-0 animate-slide-up stagger-1 inline-block px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Curriculum
            </div>
            <h2 className="opacity-0 animate-slide-up stagger-2 text-4xl lg:text-6xl font-black text-brand-navy tracking-tight mb-4 font-heading">
              The Academy <span className="text-brand-crimson">Protocol</span>
            </h2>
            <p className="opacity-0 animate-slide-up stagger-3 text-warm-600 font-bold text-body-lg max-w-xl mx-auto">
              Systematic training paths designed for absolute departmental mastery.
            </p>
          </div>

          <div className="opacity-0 animate-slide-up stagger-3">
            <CourseList />
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section — Visual Contrast */}
      <section className="py-24 lg:py-36 bg-warm-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 skew-y-3 -translate-y-20 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 mb-16 lg:mb-0 opacity-0 animate-slide-up stagger-2">
               <div className="relative p-3 bg-white rounded-[3rem] shadow-elevation-hero overflow-hidden glass-morphism">
                  <div className="aspect-video bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded-[2.5rem] flex items-center justify-center p-20 text-white/10 relative overflow-hidden">
                     <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-crimson to-brand-accent"></div>
                     <div className="absolute inset-0 bg-brand-crimson/5 animate-pulse"></div>
                     <svg className="w-full h-full relative z-10" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM5.5 10.12L12 13l6.5-2.88V12L12 15l-6.5-3v-1.88z" />
                     </svg>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="opacity-0 animate-slide-up stagger-1 inline-block px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                Our Methodology
              </div>
              <h2 className="opacity-0 animate-slide-up stagger-2 text-4xl lg:text-6xl font-black text-brand-navy mb-8 leading-tight font-heading tracking-tight">
                Natural Acquisition <br /><span className="text-brand-crimson">of Tax Logic.</span>
              </h2>
              <div className="opacity-0 animate-slide-up stagger-3 space-y-8 text-warm-600 font-bold text-xl leading-relaxed">
                <p>
                  At Tax Kavach, we don&apos;t believe in rote memorization. Our methodology focuses on <strong className="text-brand-navy">Direct Object-to-Word Association</strong> with the actual GST portal.
                </p>
                <p>
                  You will learn by interacting with real-world scenarios, understanding the internal departmental logic behind every form. You won&apos;t just be filing returns; you&apos;ll be predicting auditor behavior.
                </p>
                <div className="pt-8 flex gap-12 justify-center lg:justify-start">
                   <div className="flex flex-col">
                      <span className="text-5xl font-black text-brand-crimson">90%</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-warm-500 mt-3">Practical Labs</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-5xl font-black text-brand-navy">Elite</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-warm-500 mt-3">Led Coaching</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form — Elite CTA */}
      <section id="enroll" className="py-24 lg:py-36 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-slide-up stagger-1">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading mb-4">
              Apply for <span className="text-brand-crimson">Enrollment</span>
            </h2>
            <p className="text-warm-600 font-bold text-lg">Secure your place in the next cohort of tax strategists.</p>
          </div>
          <InquiryForm type="training" defaultService="Beginner Shield" />
        </div>
      </section>

      {/* Trust Footer — Final Brand Statement */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark py-20 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
        <div className="absolute inset-0 bg-white/[0.02] -z-0"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <p className="text-white/40 font-black uppercase tracking-[0.4em] mb-8 text-[10px]">Accredited Expertise</p>
           <h2 className="text-white text-3xl lg:text-5xl font-bold italic font-heading leading-tight mb-12">
             &ldquo;Empowering the next generation of Tax Strategists with Departmental-Grade precision.&rdquo;
           </h2>
           <div className="w-20 h-1.5 bg-brand-crimson mx-auto rounded-full"></div>
        </div>
      </section>
    </main>
  );
}

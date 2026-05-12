import Navbar from '@/components/Navbar';
import InquiryForm from '@/components/InquiryForm';
import CourseList from '@/components/CourseList';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Navbar />
      
      {/* Academy Hero Section — Deep blue surface */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] skew-x-12 transform translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
             🎓 Tax Kavach Training Academy
          </div>
          <h1 className="text-4xl lg:text-6xl xl:text-display font-black text-white leading-[1.05] tracking-tight mb-6">
            Master the GST Portal. <br />
            <span className="text-white/50 font-light italic">From Theory to Litigation.</span>
          </h1>
          <p className="text-body-lg lg:text-xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            Expert-led practical training designed by a GST Department veteran. <br />
            Learn the <span className="text-white underline decoration-brand-accent underline-offset-4">logic</span>, not just the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#courses" className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-base uppercase tracking-tight hover:bg-blue-50 transition-all shadow-2xl min-h-[52px] flex items-center justify-center">
              Explore Modules
            </a>
            <a href="#enroll" className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-xl font-bold text-base uppercase tracking-tight hover:bg-white/5 transition-all min-h-[52px] flex items-center justify-center">
              Apply for Enrollment
            </a>
          </div>
        </div>
        
        {/* Abstract geometric elements */}
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 border border-white/[0.03] rounded-full"></div>
      </section>

      {/* The Protocol Modules Section — White on brand-light */}
      <section id="courses" className="py-24 lg:py-30 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
              Curriculum
            </div>
            <h2 className="text-heading font-black text-brand-blue uppercase tracking-tight mb-3">The Academy Protocol</h2>
            <p className="text-brand-grey font-medium text-body-lg">Systematic training paths for every stage of your career.</p>
          </div>

          <CourseList />
        </div>
      </section>

      {/* Teaching Philosophy Section — brand-light base */}
      <section className="py-24 lg:py-30 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 mb-12 lg:mb-0">
               <div className="relative p-2 bg-white rounded-4xl shadow-elevation-hero overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-3xl flex items-center justify-center p-16 text-white/10">
                     <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM5.5 10.12L12 13l6.5-2.88V12L12 15l-6.5-3v-1.88z" />
                     </svg>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                Our Methodology
              </div>
              <h2 className="text-heading lg:text-heading-lg font-black text-brand-blue mb-6 leading-tight uppercase tracking-tight">
                Natural Acquisition <br />of Tax Logic.
              </h2>
              <div className="space-y-6 text-brand-grey font-medium text-body-lg leading-relaxed">
                <p>
                  At Tax Kavach, we don&apos;t believe in rote memorization of sections. Our methodology focuses on <strong className="text-brand-blue">Direct Object-to-Word Association</strong> with the actual GST portal.
                </p>
                <p>
                  You will learn by interacting with real-world scenarios, understanding the internal departmental logic behind every form and every audit query. By the end of the course, you won&apos;t just be filing returns; you&apos;ll be predicting auditor behavior.
                </p>
                <div className="pt-4 flex gap-10">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-blue">90%</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-steel mt-1">Practical Labs</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-blue">Expert</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-steel mt-1">Led Coaching</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form — White surface */}
      <section id="enroll" className="py-24 lg:py-30 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4">
          <InquiryForm type="training" defaultService="Beginner Shield" />
        </div>
      </section>

      {/* Trust Footer — Brand blue gradient */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.02]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
           <p className="text-white/50 font-bold uppercase tracking-[0.3em] mb-5 text-xs">Accredited Expertise</p>
           <h2 className="text-white text-heading font-bold italic">&ldquo;Empowering the next generation of Tax Strategists.&rdquo;</h2>
           <div className="w-12 h-1 bg-white/20 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>
    </main>
  );
}

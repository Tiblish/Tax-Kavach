import Navbar from '@/components/Navbar';
import InquiryForm from '@/components/InquiryForm';
import CourseList from '@/components/CourseList';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Academy Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-brand-blue">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
             Tax Kavach Training Academy
          </div>
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1] tracking-tighter mb-8">
            Master the GST Portal. <br />
            <span className="opacity-50 font-light italic">From Theory to Litigation.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
            Expert-led practical training designed by a GST Department veteran. <br />
            Learn the <span className="text-white underline decoration-blue-400">logic</span>, not just the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#courses" className="bg-white text-brand-blue px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-blue-50 transition-all shadow-2xl">
              Explore Modules
            </a>
            <a href="#enroll" className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-white/5 transition-all">
              Apply for Enrollment
            </a>
          </div>
        </div>
        
        {/* Abstract geometric elements */}
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 border border-white/5 rounded-full"></div>
      </section>

      {/* The Protocol Modules Section */}
      <section id="courses" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">The Academy Protocol</h2>
            <p className="text-brand-grey font-semibold text-lg">Systematic training paths for every stage of your career.</p>
          </div>

          <CourseList />
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 mb-16 lg:mb-0">
               <div className="relative p-2 bg-white rounded-[40px] shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-brand-blue rounded-[38px] flex items-center justify-center p-20 text-white/10">
                     <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM5.5 10.12L12 13l6.5-2.88V12L12 15l-6.5-3v-1.88z" />
                     </svg>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6">
              <h2 className="text-4xl lg:text-5xl font-black text-brand-blue mb-8 leading-tight uppercase tracking-tighter">
                Natural Acquisition <br />of Tax Logic.
              </h2>
              <div className="space-y-8 text-brand-grey font-medium text-lg leading-relaxed">
                <p>
                  At Tax Kavach, we don't believe in rote memorization of sections. Our methodology focuses on **Direct Object-to-Word Association** with the actual GST portal.
                </p>
                <p>
                  You will learn by interacting with real-world scenarios, understanding the internal departmental logic behind every form and every audit query. By the end of the course, you won't just be filing returns; you'll be predicting auditor behavior.
                </p>
                <div className="pt-4 flex gap-8">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-blue">90%</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-grey">Practical Labs</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-blue">Expert</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-grey">Led Coaching</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InquiryForm type="training" defaultService="Beginner Shield" />
        </div>
      </section>

      {/* Trust Footer */}
      <section className="bg-brand-blue py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
           <p className="text-white/60 font-black uppercase tracking-[0.4em] mb-6">Accredited Expertise</p>
           <h2 className="text-white text-3xl font-bold mb-10 italic">"Empowering the next generation of Tax Strategists."</h2>
           <div className="w-16 h-1 bg-white/20 mx-auto"></div>
        </div>
      </section>
    </main>
  );
}

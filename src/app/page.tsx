import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TaxInsights from '@/components/TaxInsights';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-50 selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Tax Insights Section — White surface on warm base → depth separation */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="opacity-0 animate-slide-up stagger-1">
              <div className="inline-block px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
                Knowledge Hub
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-navy tracking-tight font-heading">
                Tax <span className="text-brand-crimson">Insights</span>
              </h2>
              <p className="mt-6 text-warm-600 font-bold max-w-xl text-body-lg leading-relaxed">
                Direct forensic analysis from our team of departmental GST and Income Tax experts.
              </p>
            </div>
            <Link href="/resources" className="opacity-0 animate-slide-up stagger-2 group text-brand-crimson font-black flex items-center hover:text-brand-crimson-dark transition-colors text-xs uppercase tracking-[0.2em]">
              View All Insights
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="opacity-0 animate-slide-up stagger-3">
            <TaxInsights />
          </div>
          
        </div>
      </section>

      {/* Trust & Authority Banner — Elite Call to Action */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.1]">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[140%] border-r border-white/20 skew-x-12"></div>
        </div>
        
        {/* Crimson accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="opacity-0 animate-slide-up stagger-1 text-white text-4xl lg:text-6xl font-black mb-12 tracking-tight leading-tight font-heading">
            &ldquo;Securing your financial interests with <br className="hidden sm:block" />Departmental-Grade precision.&rdquo;
          </h2>
          <div className="opacity-0 animate-slide-up stagger-2 flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/services/gst#contact" 
              className="btn-primary !px-12 !py-5 text-base shadow-2xl hover:shadow-brand-crimson/20"
            >
              Schedule a Secure Audit
            </Link>
            <Link 
              href="/admin" 
              className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-2xl font-black text-base hover:bg-white/10 transition-all uppercase tracking-widest flex items-center justify-center hover:-translate-y-1"
            >
              Manage Content
            </Link>
          </div>
          <div className="opacity-0 animate-slide-up stagger-3 w-20 h-1.5 bg-brand-crimson mx-auto mt-16 rounded-full"></div>
        </div>
      </section>
    </main>
  );
}

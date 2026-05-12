import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TaxInsights from '@/components/TaxInsights';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Tax Insights Section — White surface on brand-light → creates depth separation */}
      <section className="py-24 lg:py-30 bg-white relative">
        {/* Top gradient divider for section separation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                Knowledge Hub
              </div>
              <h2 className="text-heading font-black text-brand-blue tracking-tight uppercase">Tax Insights</h2>
              <p className="mt-3 text-brand-grey font-medium max-w-xl text-body-lg">
                Direct analysis from our team of GST and Income Tax experts.
              </p>
            </div>
            <Link href="/resources" className="group text-brand-blue font-bold flex items-center hover:text-brand-blue-dark transition-colors text-sm uppercase tracking-wider">
              View All Insights
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <TaxInsights />
          
        </div>
      </section>

      {/* Trust & Authority Banner — brand-blue surface with geometric texture */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[120%] border-r border-white/30 skew-x-12"></div>
          <div className="absolute top-[-10%] left-[20%] w-[40%] h-[120%] border-r border-white/10 skew-x-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white text-heading lg:text-heading-lg font-black mb-8 tracking-tight leading-tight">
            &ldquo;Securing your financial interests with <br className="hidden sm:block" />precise, expert-led compliance.&rdquo;
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/services/gst#contact" 
              className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all uppercase tracking-tight shadow-2xl min-h-[52px] flex items-center justify-center"
            >
              Schedule a Secure Audit
            </Link>
            <Link 
              href="/admin" 
              className="bg-transparent text-white border-2 border-white/20 px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all uppercase tracking-tight min-h-[52px] flex items-center justify-center"
            >
              Manage Content
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

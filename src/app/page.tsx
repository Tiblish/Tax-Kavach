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
      
      {/* Tax Insights Section (Firestore Feed) */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <div className="inline-block px-4 py-1 bg-brand-blue/5 text-brand-blue text-xs font-bold uppercase tracking-widest rounded mb-4">
                Knowledge Hub
              </div>
              <h2 className="text-4xl font-black text-brand-blue tracking-tight uppercase">Tax Insights</h2>
              <p className="mt-4 text-brand-grey font-medium max-w-xl text-lg">
                Direct analysis from our team of GST and Income Tax experts.
              </p>
            </div>
            <Link href="/resources" className="group text-brand-blue font-bold flex items-center hover:text-blue-800 transition-colors">
              View All Insights
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <TaxInsights />
          
        </div>
      </section>

      {/* Trust & Authority Footer Banner */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[120%] border-r border-white/20 skew-x-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white text-4xl font-black mb-10 tracking-tight leading-tight">
            "Securing your financial interests with <br />precise, expert-led compliance."
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-brand-blue px-12 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-all uppercase tracking-tighter shadow-2xl">
              Schedule a Secure Audit
            </Link>
            <Link href="/admin" className="bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all uppercase tracking-tighter">
              Manage Content
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

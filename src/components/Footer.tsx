import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-navy-dark text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Crimson accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight font-heading">TAX <span className="text-brand-crimson">KAVACH</span></h3>
            <p className="text-warm-400 text-sm leading-relaxed font-medium">
              A strategic tax shield built on 10+ years of departmental-grade expertise. We empower enterprises through elite litigation defense and professional training.
            </p>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/" className="text-warm-500 hover:text-brand-crimson transition-all duration-300 w-fit">Home</Link>
              <Link href="/training" className="text-warm-500 hover:text-brand-crimson transition-all duration-300 w-fit">Academy</Link>
              <Link href="/resources" className="text-warm-500 hover:text-brand-crimson transition-all duration-300 w-fit">Research & Insights</Link>
            </div>
          </div>

          {/* Column 2: Service Pillars */}
          <div>
            <h4 className="font-black mb-8 text-warm-500 uppercase text-[10px] tracking-[0.25em] font-heading">Our Expertise</h4>
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="/services/gst" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">GST Compliance & Audit</Link>
              <Link href="/services/income-tax" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Tax Planning & Advisory</Link>
              <Link href="/services/gst" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Litigation & Appeals</Link>
              <Link href="/services/income-tax" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Forensic Scrutiny</Link>
            </div>
          </div>

          {/* Column 3: Global Connect */}
          <div>
            <h4 className="font-black mb-8 text-warm-500 uppercase text-[10px] tracking-[0.25em] font-heading">Connect</h4>
            <div className="flex flex-col space-y-4 text-sm text-warm-400 font-medium">
              <p>Inquiries: <span className="text-white block mt-1">support@taxkavach.com</span></p>
              <p>National Presence: <span className="text-white block mt-1">Serving Enterprises Across India</span></p>
              <div className="pt-6">
                <Link 
                  href="/admin" 
                  className="inline-flex items-center px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-warm-300 hover:bg-white/10 hover:text-white transition-all duration-300 text-[10px] font-black tracking-[0.15em]"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  ADMIN PORTAL
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div>
            <h4 className="font-black mb-8 text-warm-500 uppercase text-[10px] tracking-[0.25em] font-heading">Legal</h4>
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="#" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Privacy Policy</Link>
              <Link href="#" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Terms of Engagement</Link>
              <Link href="#" className="text-warm-400 hover:text-white transition-all duration-300 w-fit">Compliance Disclaimer</Link>
            </div>
          </div>

        </div>

        {/* Bottom bar — Precision typography */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-warm-700">
          <p>© {new Date().getFullYear()} Tax Kavach. All Rights Reserved.</p>
          <p className="text-warm-800 flex items-center gap-3">
            <span className="w-1 h-1 bg-brand-crimson rounded-full"></span>
            Litigation-Ready Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

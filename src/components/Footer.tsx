import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-navy-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Crimson accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-black tracking-tight">TAX <span className="text-brand-crimson">KAVACH</span></h3>
            <p className="text-warm-400 text-sm leading-relaxed">
              Decades of departmental expertise turned into your strategic tax shield. Professional audit, litigation, and training.
            </p>
            <div className="flex flex-col space-y-2.5 text-sm">
              <Link href="/" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Home</Link>
              <Link href="/training" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Training Academy</Link>
              <Link href="/resources" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Resources & Insights</Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold mb-6 text-warm-500 uppercase text-xs tracking-widest">Our Services</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/services/gst" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">GST Compliance & Audit</Link>
              <Link href="/services/income-tax" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Income Tax Planning</Link>
              <Link href="/services/gst" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Departmental Representation</Link>
              <Link href="/services/income-tax" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Forensic Tax Audit</Link>
            </div>
          </div>

          {/* Column 3: Contact & Secure Access */}
          <div>
            <h4 className="font-bold mb-6 text-warm-500 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex flex-col space-y-3 text-sm text-warm-400">
              <p>Email: <span className="text-white font-medium">support@taxkavach.com</span></p>
              <p>Location: <span className="text-white font-medium">Kolkata, West Bengal</span></p>
              <div className="pt-4">
                <Link 
                  href="/admin" 
                  className="inline-flex items-center px-4 py-2.5 border border-warm-600/40 rounded-xl text-warm-400 hover:bg-white/5 hover:text-white hover:border-warm-500 transition-all duration-200 text-xs font-bold min-h-[44px]"
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2.5 animate-pulse"></span>
                  SECURE ADMIN LOGIN
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-warm-500 uppercase text-xs tracking-widest">Legal</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="#" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Privacy Policy</Link>
              <Link href="#" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Terms of Engagement</Link>
              <Link href="#" className="text-warm-400 hover:text-white transition-colors duration-200 w-fit">Disclaimer</Link>
            </div>
          </div>

        </div>

        {/* Bottom bar with subtle separator */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-warm-600">
          <p>© {new Date().getFullYear()} Tax Kavach. Built for Audit Kolkata-II Excellence.</p>
          <p className="text-warm-700">Powered by Departmental Expertise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-tighter italic">TAX KAVACH</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Decades of departmental expertise turned into your strategic tax shield. Professional audit, litigation, and training.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-brand-steel transition-colors">Home</Link>
              <Link href="/training" className="hover:text-brand-steel transition-colors">Training Academy</Link>
              <Link href="/resources" className="hover:text-brand-steel transition-colors">Resources & Insights</Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold mb-6 text-brand-steel uppercase text-xs tracking-widest">Our Services</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/services/gst" className="hover:text-brand-steel transition-colors">GST Compliance & Audit</Link>
              <Link href="/services/income-tax" className="hover:text-brand-steel transition-colors">Income Tax Planning</Link>
              <Link href="/services/gst" className="hover:text-brand-steel transition-colors">Departmental Representation</Link>
              <Link href="/services/income-tax" className="hover:text-brand-steel transition-colors">Forensic Tax Audit</Link>
            </div>
          </div>

          {/* Column 3: Contact & Secure Access */}
          <div>
            <h4 className="font-bold mb-6 text-brand-steel uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-400">
              <p>Email: <span className="text-white">support@taxkavach.com</span></p>
              <p>Location: <span className="text-white">Kolkata, West Bengal</span></p>
              <div className="pt-4">
                <Link 
                  href="/admin" 
                  className="inline-flex items-center px-4 py-2 border border-brand-steel/50 rounded-full text-brand-steel hover:bg-brand-steel hover:text-brand-blue transition-all text-xs font-bold"
                >
                  <span className="mr-2">●</span> SECURE ADMIN LOGIN
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-brand-steel uppercase text-xs tracking-widest">Legal</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="#" className="hover:text-brand-steel transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-steel transition-colors">Terms of Engagement</Link>
              <Link href="#" className="hover:text-brand-steel transition-colors">Disclaimer</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Tax Kavach Headless Platform. Built for Audit Kolkata-II Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

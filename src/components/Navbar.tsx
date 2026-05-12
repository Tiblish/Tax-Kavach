import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'GST Services', href: '/services/gst' },
    { name: 'Income Tax', href: '/services/income-tax' },
    { name: 'Training', href: '/training' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/services/gst#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,51,102,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo + Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-elevation-1 overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95">
              <Link href="/" aria-label="Tax Kavach Home">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </Link>
            </div>
            <Link href="/" className="text-xl font-black tracking-tighter text-brand-blue">
              TAX KAVACH
            </Link>
          </div>
          
          {/* Navigation Links — Text labels always visible (Affordance) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative text-[13px] font-bold text-brand-grey hover:text-brand-blue transition-colors duration-200 tracking-wide uppercase py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA — Solid fill with shadow = "mass" affordance */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="hidden sm:inline-flex text-xs font-bold text-brand-grey hover:text-brand-blue uppercase tracking-widest transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Admin
            </Link>
            <Link 
              href="/services/gst#contact"
              className="btn-primary text-xs !px-6 !py-3"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

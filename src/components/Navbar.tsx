import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'GST Services', href: '/gst-services' },
    { name: 'Income Tax', href: '/income-tax' },
    { name: 'Training', href: '/training' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 overflow-hidden group cursor-pointer">
              <Link href="/">
                 {/* When you have a logo file, replace this SVG with an <img> tag */}
                 <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </Link>
            </div>
            <Link href="/" className="text-2xl font-black tracking-tighter text-brand-blue">
              TAX KAVACH
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[14px] font-bold text-gray-600 hover:text-brand-blue transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link href="/login" className="mr-6 text-sm font-black text-brand-grey hover:text-brand-blue uppercase tracking-widest transition-colors">
              Admin
            </Link>
            <button className="bg-brand-blue text-white px-7 py-3 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-blue-900 transition-all shadow-md active:scale-95">
              Consult an Expert
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

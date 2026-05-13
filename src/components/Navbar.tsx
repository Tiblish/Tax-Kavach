"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility and focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        ) as NodeListOf<HTMLElement>;
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === document.body) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Auto-focus the close button when opened
    const timer = setTimeout(() => {
       if (menuRef.current) {
         const closeBtn = menuRef.current.querySelector('button');
         closeBtn?.focus();
       }
    }, 50);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = mobileOpen ? 'hidden' : originalStyle;
    return () => { document.body.style.overflow = originalStyle; };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'GST Services', href: '/services/gst' },
    { name: 'Income Tax', href: '/services/income-tax' },
    { name: 'Training', href: '/training' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/services/gst#contact' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-surface/90 backdrop-blur-xl shadow-elevation-1 border-b border-border-subtle'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo + Brand */}
            <div className="flex-shrink-0 flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-crimson to-brand-crimson-dark rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-crimson/20 overflow-hidden cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 active:scale-95">
                <Link href="/" aria-label="Tax Kavach Home">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                </Link>
              </div>
              <Link href="/" className="text-xl font-black tracking-tight text-brand-navy font-heading">
                TAX <span className="text-brand-crimson">KAVACH</span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative text-sm font-bold text-warm-700 hover:text-brand-crimson transition-all duration-300 px-5 py-2.5 rounded-xl hover:bg-brand-crimson/[0.04]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="hidden sm:inline-flex text-[10px] font-black text-warm-400 hover:text-brand-crimson tracking-[0.2em] uppercase transition-all duration-300 py-2 px-4"
              >
                Admin
              </Link>
              <Link 
                href="/services/gst#contact"
                className="hidden sm:inline-flex btn-primary !text-xs !px-6 !py-3 shadow-elevation-1 hover:shadow-elevation-2"
              >
                Consult Now
              </Link>

              {/* Hamburger Button — visible below lg */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl bg-warm-100 hover:bg-warm-200 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-crimson/20"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-brand-navy rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                  <span className={`block h-0.5 w-full bg-brand-navy rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-brand-navy rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-brand-navy/20 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      
      <div
        ref={menuRef}
        id="mobile-menu-panel"
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-[320px] glass-morphism shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-warm-200/30">
          <span className="text-lg font-black text-brand-navy tracking-tight font-heading">
            TAX <span className="text-brand-crimson">KAVACH</span>
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-warm-100 hover:bg-warm-200 transition-colors"
          >
            <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="px-6 py-10 space-y-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-6 py-4 text-[17px] font-black text-brand-navy hover:text-brand-crimson hover:bg-brand-crimson/[0.04] rounded-2xl transition-all duration-300 opacity-0 translate-x-4 ${mobileOpen ? 'opacity-100 translate-x-0' : ''}`}
              style={{ transitionDelay: `${150 + idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className={`absolute bottom-0 left-0 right-0 p-8 border-t border-warm-200/30 space-y-4 opacity-0 translate-y-4 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : ''}`} style={{ transitionDelay: '500ms' }}>
          <Link
            href="/services/gst#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full text-center text-sm font-black !py-4 shadow-elevation-2"
          >
            Book Free Audit
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-[10px] font-black text-warm-400 hover:text-brand-crimson py-2 uppercase tracking-[0.2em] transition-colors"
          >
            Portal Access
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

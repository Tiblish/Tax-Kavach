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
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] border-b border-warm-200/60'
            : 'bg-white/80 backdrop-blur-xl border-b border-warm-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[72px] items-center">
            {/* Logo + Brand */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-crimson to-brand-crimson-dark rounded-xl flex items-center justify-center text-white shadow-md overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95">
                <Link href="/" aria-label="Tax Kavach Home">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                </Link>
              </div>
              <Link href="/" className="text-lg font-black tracking-tight text-warm-900">
                TAX <span className="text-brand-crimson">KAVACH</span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative text-[13px] font-semibold text-warm-600 hover:text-brand-crimson transition-colors duration-200 tracking-wide px-4 py-2 rounded-lg hover:bg-brand-crimson/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link 
                href="/login" 
                className="hidden sm:inline-flex text-xs font-semibold text-warm-500 hover:text-brand-crimson tracking-wider transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-warm-50"
              >
                Admin
              </Link>
              <Link 
                href="/services/gst#contact"
                className="hidden sm:inline-flex btn-primary text-xs !px-5 !py-2.5"
              >
                Consult an Expert
              </Link>

              {/* Hamburger Button — visible below lg */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-warm-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-crimson"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-warm-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block h-0.5 w-full bg-warm-700 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block h-0.5 w-full bg-warm-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay + Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      
      {/* Slide-out panel */}
      <div
        ref={menuRef}
        id="mobile-menu-panel"
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-100">
          <span className="text-base font-black text-warm-900 tracking-tight">
            TAX <span className="text-brand-crimson">KAVACH</span>
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-warm-100 transition-colors"
          >
            <svg className="w-5 h-5 text-warm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="px-4 py-6 space-y-1">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-4 py-3.5 text-[15px] font-semibold text-warm-700 hover:text-brand-crimson hover:bg-brand-crimson/5 rounded-xl transition-all duration-200"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-warm-100 bg-warm-50/50 space-y-3">
          <Link
            href="/services/gst#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full text-center text-sm !py-3.5"
          >
            Consult an Expert
          </Link>
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-xs font-semibold text-warm-500 hover:text-brand-crimson py-2 transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

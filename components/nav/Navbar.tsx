'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#pricing',  label: 'Pricing' },
  { href: '#social',   label: 'Customers' },
  { href: '#cta',      label: 'Enterprise' },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeLink, setActiveLink]   = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuOpen && menuRef.current && !menuRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="NexusAI home">
          <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center shadow-glow-gold group-hover:scale-110 transition-transform duration-200">
            <Image
              src="/svgs/cube-16-solid.svg"
              alt=""
              width={16}
              height={16}
              className="brightness-0 invert"
              aria-hidden="true"
            />
          </div>
          <span className="font-mono font-700 text-lg tracking-tight text-gradient">
            NexusAI
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link ${activeLink === href ? 'text-arctic-powder' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-sm py-2 px-4">Sign in</button>
          <a href="#pricing" className="btn-primary text-sm py-2 px-4">
            Start free
            <Image src="/svgs/arrow-trending-up.svg" alt="" width={14} height={14} className="brightness-0" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-forsythia"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className={`block w-5 h-0.5 bg-arctic-powder transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-arctic-powder transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-arctic-powder transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation"
        className={`md:hidden glass-dark border-t border-border-subtle overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-4 gap-1" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center px-4 py-3 rounded-lg text-mystic-mint hover:text-arctic-powder hover:bg-white/5 transition-colors font-medium"
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-border-subtle mt-2">
            <a href="#pricing" className="btn-primary w-full justify-center text-sm">
              Start free trial
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

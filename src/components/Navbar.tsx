import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030305]/90 backdrop-blur-md border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-2 text-xl sm:text-2xl font-heading font-extrabold tracking-wide text-white">
          <span className="text-white">Minh</span>
          <span className="text-brand-purple">Editor</span>
          <span className="text-[10px] font-mono text-zinc-500 font-normal hidden sm:inline ml-2 border border-zinc-800 px-2 py-0.5 rounded">CV Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-heading font-bold uppercase tracking-widest text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-purple transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Media & Phone */}
        <div className="hidden md:flex items-center space-x-5 text-sm text-zinc-300">
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center space-x-2 text-xs font-mono bg-brand-purple/15 hover:bg-brand-purple/25 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/30 transition"
          >
            <i className="fa-solid fa-phone text-[10px] text-brand-purple"></i>
            <span>{personalInfo.phone}</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} title="Email" className="hover:text-brand-purple transition">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.youtube.com/@AurexRemix" target="_blank" rel="noreferrer" title="YouTube" className="hover:text-brand-purple transition">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <i className={mobileMenuOpen ? 'fa-solid fa-xmark text-brand-purple' : 'fa-solid fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07070b] border-b border-zinc-800 px-6 py-6 space-y-4 text-sm font-heading font-bold uppercase tracking-wider text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-brand-purple transition"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-zinc-800 text-lg text-zinc-400">
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-purple">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-purple">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.youtube.com/@AurexRemix" target="_blank" rel="noreferrer" className="hover:text-brand-purple">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


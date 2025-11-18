import React, { useState, useEffect } from 'react';
import { Menu, X, Music4 } from 'lucide-react';
import { NAV_ITEMS, PRODUCER_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter hover:text-accent transition-colors">
          <Music4 className="w-8 h-8 text-accent" />
          <span>{PRODUCER_NAME.toUpperCase()}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-semibold text-slate-300 hover:text-accent tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-accent text-darker font-bold rounded-full hover:bg-white transition-all transform hover:scale-105"
          >
            Let's Work
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darker/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-slate-300 hover:text-accent tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-3"
          >
           
            <div className="text-xl lg:text-2xl font-serif font-bold text-gray-900">
              <div>Clause & Co </div>
              <div className="text-sm lg:text-base font-normal">Associates</div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex items-center space-x-8"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-gray-900 font-serif italic transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-gray-800 hover:text-gray-900 font-serif italic transition-colors duration-200"
            >
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-gray-800 hover:text-gray-900 font-serif italic transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-gray-900  italic transition-colors duration-200"
            >
              Contact Us
            </button>
          </motion.div>

          {/* CTA + Phone numbers (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden lg:flex items-center space-x-4"
          >
            {/* <Image src="/cta.png" alt="Let's Connect" width={140} height={40} className="h-7 w-auto" /> */}
            <div className="flex flex-col text-right leading-tight">
              <div className="text-gray-800 font-semibold">US 1: +1 (302) 560-0010</div>
              <div className="text-gray-800 font-semibold">US 2: +1 (415) 555-0199</div>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
        {/* Mobile full-screen overlay menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 md:hidden"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Panel */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white h-screen w-full shadow-xl flex flex-col "
              >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
                    </div>
                    <div className="text-lg font-serif font-medium text-gray-900">Clause & Co. Associates</div>
                  </div>
                  <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-gray-800 hover:bg-gray-100">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-4">
                    <button onClick={() => { setIsMenuOpen(false); scrollToSection('about'); }} className="block w-full text-left text-2xl font-serif text-gray-900 py-3 border-b">About</button>
                    <button onClick={() => { setIsMenuOpen(false); scrollToSection('expertise'); }} className="block w-full text-left text-2xl font-serif text-gray-900 py-3 border-b">Practice Areas</button>
                    <button onClick={() => { setIsMenuOpen(false); scrollToSection('clients'); }} className="block w-full text-left text-2xl font-serif text-gray-900 py-3 border-b">Resources</button>
                    <button onClick={() => { setIsMenuOpen(false); scrollToSection('contact'); }} className="block w-full text-left text-2xl font-serif text-gray-900 py-3 border-b">Contact Us</button>
                  </nav>
                  <div className="mt-8 space-y-1">
                    <div className="text-gray-900 font-semibold ">US 1: +1 (302) 560-0010</div>
                    <div className="text-gray-900  font-semibold ">US 2: +1 (415) 555-0199</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

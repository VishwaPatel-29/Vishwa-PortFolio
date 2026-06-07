import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import vpLogo from '../assets/VP_LOGO.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const sections = useMemo(() => [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'certificates', label: 'Certificates', path: '/certificates' },
    { id: 'education', label: 'Education', path: '/education' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ], []);

  // Check scroll position to alter navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-4 pointer-events-none transition-all duration-300">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`pointer-events-auto flex items-center justify-between w-full transition-all duration-500 border rounded-full relative ${
          isScrolled 
            ? 'max-w-5xl h-14 px-6 shadow-2xl' 
            : 'max-w-5xl h-16 px-8 shadow-xl'
        } ${
          isDarkMode 
            ? 'bg-slate-950/85 border-teal/20 text-white shadow-[0_10px_35px_rgba(0,153,140,0.15)]' 
            : 'bg-white/85 border-slate-200 text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
        } backdrop-blur-xl`}
      >
        {/* Logo and Name */}
        <motion.div
          onClick={() => {
            closeMobileMenu();
            navigate('/home');
          }}
          className="flex items-center space-x-2.5 cursor-pointer relative z-10"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div className="relative flex items-center justify-center">
            <motion.img 
              src={vpLogo} 
              alt="VP Logo" 
              className="h-10 w-auto object-contain relative z-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{
                filter: 'drop-shadow(0 0 15px rgba(0, 153, 140, 0.8))',
              }}
            />
            <motion.div
              className="absolute inset-0 bg-[#00998c]/20 rounded-full blur-md opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <span className={`font-heading text-base font-bold tracking-wider hidden sm:block ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            VISHWA PATEL
          </span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 relative">
          {sections.map((section) => {
            const isActive = location.pathname === section.path;
            return (
              <NavLink
                key={section.id}
                to={section.path}
                onClick={closeMobileMenu}
                className={({ isActive: linkActive }) =>
                  `relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                    linkActive || location.pathname === section.path
                      ? 'text-teal font-semibold'
                      : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {(isActive || location.pathname === section.path) && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#00998c]/10 rounded-full border border-teal/30 z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Action Buttons: Desktop Theme Toggle / Mobile Hamburger Menu */}
        <div className="flex items-center space-x-3 relative z-10">
          {/* Desktop Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`hidden md:flex p-2 rounded-full border transition-all duration-300 items-center justify-center relative overflow-hidden ${
              isDarkMode 
                ? 'border-teal/30 text-teal hover:bg-teal/10 hover:shadow-[0_0_15px_rgba(0,153,140,0.4)]' 
                : 'border-slate-200 text-slate-700 hover:bg-slate-100 hover:shadow-[0_0_10px_rgba(0,0,0,0.08)]'
            }`}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.svg
                  key="sun"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile View Toggle and Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isDarkMode 
                  ? 'border-teal/30 text-teal bg-teal/5 hover:bg-teal/10' 
                  : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full border transition-colors duration-250 ${
                isDarkMode 
                  ? 'border-teal/20 text-gray-300 hover:text-white hover:bg-slate-800' 
                  : 'border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop filter overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden pointer-events-auto"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 md:hidden flex flex-col justify-between p-6 pointer-events-auto ${
                isDarkMode 
                  ? 'bg-slate-950/95 border-l border-teal/20 text-white' 
                  : 'bg-white/95 border-l border-slate-200 text-slate-800'
              } backdrop-blur-2xl shadow-2xl`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-700/10 dark:border-slate-200/10">
                  <div className="flex items-center space-x-2">
                    <img src={vpLogo} alt="Logo" className="h-8 w-auto" />
                    <span className="font-heading font-bold text-base tracking-wide">Vishwa Patel</span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className={`p-2 rounded-full border ${
                      isDarkMode 
                        ? 'border-teal/25 text-gray-400 hover:text-white hover:bg-slate-900' 
                        : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <nav className="flex flex-col space-y-4 py-8 overflow-y-auto flex-1">
                  {sections.map((section, idx) => {
                    const isActive = location.pathname === section.path;
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <NavLink
                          to={section.path}
                          onClick={closeMobileMenu}
                          className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-teal bg-primary/10 font-bold border-l-4 border-primary'
                              : isDarkMode
                              ? 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          {section.label}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Footer details in Drawer */}
                <div className="pt-6 border-t border-slate-700/10 dark:border-slate-200/10 text-center text-xs text-gray-500 dark:text-gray-400">
                  <p>© 2026 Vishwa Patel</p>
                  <p className="mt-1">Full-Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

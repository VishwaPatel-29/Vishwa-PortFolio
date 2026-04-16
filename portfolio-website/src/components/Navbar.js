import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import vpLogo from '../assets/VP_LOGO.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const sections = useMemo(() => [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'certificates', label: 'Certificates', path: '/certificates' },
    { id: 'education', label: 'Education', path: '/education' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ], []);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg'
            : 'bg-light-bg/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 10,
            }}
            className="flex-shrink-0 relative"
          >
            <motion.img 
              src={vpLogo} 
              alt="VP Logo" 
              className="h-24 w-auto object-contain"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{
                filter: 'drop-shadow(0 0 30px rgba(0, 153, 140, 0.8))',
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to={section.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                        isActive
                          ? 'text-teal'
                          : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`
                    }
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        color: '#00d4cc',
                        textShadow: '0 0 15px rgba(0, 212, 204, 0.8)',
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {section.label}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </NavLink>
                </motion.div>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg btn-primary glow-effect relative overflow-hidden"
                aria-label="Toggle theme"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -180, 180, 0],
                  boxShadow: '0 8px 25px rgba(0, 212, 204, 0.4)',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.svg
                      key="sun"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="moon"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${
                isDarkMode ? 'bg-dark-bg/95' : 'bg-light-bg/95'
              } backdrop-blur-md rounded-lg mt-2`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <NavLink
                    key={section.id}
                    to={section.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'text-teal bg-[#00998c]/10'
                          : isDarkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`
                    }
                  >
                    {section.label}
                  </NavLink>
                ))}
                
                {/* Mobile Theme Toggle */}
                <div className="px-3 py-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 p-2 rounded-lg btn-primary"
                  >
                    {isDarkMode ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaCode, FaEye } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Resume from './Resume';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showResume, setShowResume] = useState(false);

  const roles = useMemo(() => [
    'Full Stack Developer',
    'Creative Coder',
    'Web Designer',
    'Problem Solver',
    'UI/UX Enthusiast'
  ], []);

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  // Generate particles for background
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    setShowResume(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      {/* Animated Background */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-teal-gradient" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="space-y-8">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
                <img
                  src="/Professional Mee.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name with Gradient Animation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(135deg, #00998c, #085d56, #00998c)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Vishwa Patel
            </motion.h1>

            {/* Typing Animation for Roles */}
            <div className="h-8 sm:h-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1 h-6 sm:h-8 ml-1 text-teal align-middle"
                />
              </h2>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="btn-primary px-8 py-3 text-lg"
            >
              <div className="flex items-center space-x-2">
                <FaCode className="w-5 h-5" />
                <span>View Projects</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={viewResume}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaEye className="w-5 h-5" />
                <span>View Resume</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('connect')}
              className="btn-secondary px-8 py-3 text-lg"
            >
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5" />
                <span>Contact Me</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { name: 'GitHub', icon: FaGithub, url: 'https://github.com/VishwaPatel-29', color: 'hover:text-[#00998c]' },
              { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/vishwa-patel-8664473a0/', color: 'hover:text-[#00998c]' },
              { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/PatelVishw30565', color: 'hover:text-[#00998c]' },
              { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Vishwaa-29/', color: 'hover:text-[#00998c]' },
              { name: 'Gmail', icon: FaEnvelope, url: 'mailto:vishwa29patel.cg@gmail.com', color: 'hover:text-[#00998c]' },
              { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@VishwaPatel-29', color: 'hover:text-[#00998c]' }
            ].map((social) => (
              <motion.div
                key={social.name}
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-gray-300 hover-teal transition-colors duration-200 shadow-lg glow-effect"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-teal bg-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Open {social.name}
                </motion.div>
              </motion.div>
              
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Resume Modal */}
      <Resume isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default Home;

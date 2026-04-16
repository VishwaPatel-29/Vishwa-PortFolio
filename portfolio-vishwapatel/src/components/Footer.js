import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const { isDarkMode } = useTheme();

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

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/VishwaPatel-29' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/vishwa-patel-8664473a0/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/PatelVishw30565' },
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Vishwaa-29/' },
    { name: 'Gmail', icon: FaEnvelope, url: 'mailto:vishwa29patel.cg@gmail.com' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@VishwaPatel-29h' }
  ];

  
  return (
    <footer
      className={`py-12 ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className={`text-lg font-heading font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-900'
                  } hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={itemVariants} 
            className="text-center pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Built with
              </span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                by Vishwa Patel
              </span>
            </div>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

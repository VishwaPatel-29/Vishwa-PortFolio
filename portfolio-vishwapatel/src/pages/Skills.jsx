import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Premium3DSkills from '../components/Premium3DSkills';
import UniqueSkillsShowcase from '../components/UniqueSkillsShowcase';
import { Helmet } from 'react-helmet';

const SkillsPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Skills - Vishwa Patel | Full Stack Developer</title>
        <meta name="description" content="Explore the technical skills of Vishwa Patel - Full Stack Developer with expertise in React, JavaScript, Node.js, and modern web technologies" />
        <meta name="keywords" content="Skills, Vishwa Patel, React, JavaScript, Node.js, Full Stack Developer, Web Development" />
        <meta property="og:title" content="Skills - Vishwa Patel" />
        <meta property="og:description" content="Discover the comprehensive technical skill set of Vishwa Patel" />
      </Helmet>
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="pt-20">
        {/* Back to Home Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/home')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaHome className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.button>
        </div>

        {/* Skills Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">My Technical Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my expertise in modern web development technologies. 
              Unique interactive skills universe with dynamic visual effects.
            </p>
          </div>
          
          <UniqueSkillsShowcase />
          
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Interactive skills universe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Dynamic visual effects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span>Floating particle animations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Premium 3D Skills Section - Temporarily disabled to fix cursor freeze */}
        {/* <Premium3DSkills /> */}
      </div>
    </div>
    </>
  );
};

export default SkillsPage;

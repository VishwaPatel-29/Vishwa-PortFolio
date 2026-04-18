import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Projects from '../components/Projects';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Projects - Vishwa Patel | Full Stack Developer</title>
        <meta name="description" content="Explore projects by Vishwa Patel - Full Stack Developer featuring React, JavaScript, and modern web applications" />
        <meta name="keywords" content="Projects, Vishwa Patel, Full Stack Developer, React Projects, Web Development, Portfolio" />
        <meta property="og:title" content="Projects - Vishwa Patel" />
        <meta property="og:description" content="Discover innovative web development projects by Vishwa Patel" />
      </Helmet>
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* Page Header */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4"
          >
            <span className="gradient-text">All Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            Explore my complete portfolio of projects, from web applications to mobile apps and everything in between.
          </motion.p>
          
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/home')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Projects Component */}
      <Projects isHomePage={false} />

    </div>
    </>
  );
};

export default ProjectsPage;

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Education from '../components/Education';

const EducationPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  
  return (
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

        {/* Education Content */}
        <Education />

              </div>
    </div>
  );
};

export default EducationPage;

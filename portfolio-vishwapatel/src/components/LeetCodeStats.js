import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaSpinner, 
  FaExclamationTriangle, 
  FaExternalLinkAlt,
  FaFire,
  FaTrophy,
  FaChartLine,
  FaCode,
  FaMedal,
  FaRocket,
  FaBolt,
  FaCrown,
  FaStar,
  FaBrain,
  FaGamepad,
  FaLightbulb,
  FaGem
} from 'react-icons/fa';

const LeetCodeStats = () => {
  const { isDarkMode } = useTheme();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Main fetch function
  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching from working LeetCode API...");

      const response = await fetch(
        "https://leetcode-api-faisalshohag.vercel.app/Vishwaa-29"
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      console.log("API RESPONSE:", data);

      // Correct mapping from this API
      const processedStats = {
        totalSolved: data.totalSolved || null,
        easySolved: data.easySolved || null,
        mediumSolved: data.mediumSolved || null,
        hardSolved: data.hardSolved || null,
        ranking: data.ranking || null,
        acceptanceRate: data.acceptanceRate || null,
      };

      console.log("PROCESSED:", processedStats);

      const hasValidData = Object.values(processedStats).some(
        (val) => val !== null && val !== undefined
      );

      if (!hasValidData) {
        throw new Error("No valid data");
      }

      setStats(processedStats);
    } catch (err) {
      console.error("ERROR:", err);
      setError("Failed to load LeetCode data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-primary mb-4 mx-auto" />
          <p className="text-gray-600 dark:text-gray-400">Loading LeetCode stats...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <FaExclamationTriangle className="text-4xl text-red-500 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Failed to load LeetCode data
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={fetchStats}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!stats) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-600 dark:text-gray-400">No data available</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'} relative overflow-hidden`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          {/* Enhanced Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              <span className="inline-block animate-pulse">{'\ud83d\udc68\u200d\ud83d\udcbb'}</span>
              <span className="mx-2">LeetCode Stats</span>
              <span className="inline-block animate-pulse">{'\ud83d\udd25'}</span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            <span className="inline-block animate-bounce">{'\ud83e\udde0'}</span>
            Mastering algorithms one problem at a time
            <span className="inline-block animate-bounce">{'\ud83d\udcaa'}</span>
          </motion.p>
          
          {/* Enhanced Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
              >
                <FaFire className="text-lg" /> On Fire {'\ud83d\udd25'}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
              >
                <FaStar className="text-lg" /> Elite Coder {'\u2b50'}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
              >
                <FaMedal className="text-lg" /> Problem Solver {'\ud83c\udfc6'}
              </motion.div>
            </motion.div>
        </motion.div>

        {/* Main Layout: Data Left, Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          
          {/* Left Side - Data Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Total Solved - Premium Card */}
              {stats.totalSolved !== null && stats.totalSolved !== undefined && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: 3,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                  }}
                  className={`group relative p-6 rounded-2xl overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 border border-purple-500/50' 
                      : 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 border border-purple-300/50'
                  } shadow-2xl backdrop-blur-xl`}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="inline-block mb-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <FaCode className="text-white text-lg" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {stats.totalSolved}
                    <span className="text-lg ml-1 text-purple-500">{'\ud83d\udcdd'}</span>
                  </motion.div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    <span className="inline-block animate-bounce">{'\ud83e\udde0'}</span>
                    Total
                  </p>
                </motion.div>
              )}

              {/* Ranking - Premium Card */}
              {stats.ranking !== null && stats.ranking !== undefined && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: -3,
                    boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                  }}
                  className={`group relative p-6 rounded-2xl overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-amber-900/80 to-orange-900/80 border border-amber-500/50' 
                      : 'bg-gradient-to-br from-amber-100/80 to-orange-100/80 border border-amber-300/50'
                  } shadow-2xl backdrop-blur-xl`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block mb-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                      <FaTrophy className="text-white text-lg" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    #{stats.ranking}
                    <span className="text-lg ml-1 text-amber-500">{'\ud83c\udfc5'}</span>
                  </motion.div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    <span className="inline-block animate-pulse">{'\ud83d\udc51'}</span>
                    Rank
                  </p>
                </motion.div>
              )}

              {/* Acceptance Rate - Premium Card */}
              {stats.acceptanceRate !== null && stats.acceptanceRate !== undefined && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: 3,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                  }}
                  className={`group relative p-6 rounded-2xl overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-emerald-900/80 to-teal-900/80 border border-emerald-500/50' 
                      : 'bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-300/50'
                  } shadow-2xl backdrop-blur-xl`}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="inline-block mb-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                      <FaChartLine className="text-white text-lg" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {stats.acceptanceRate}%
                    <span className="text-lg ml-1 text-emerald-500">{'\ud83c\udfaf'}</span>
                  </motion.div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    <span className="inline-block animate-bounce">{'\ud83c\udfaf'}</span>
                    Rate
                  </p>
                </motion.div>
              )}

              {/* Special Achievement Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.9,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: -3,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                }}
                className={`group relative p-6 rounded-2xl overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-indigo-900/80 to-purple-900/80 border border-indigo-500/50' 
                    : 'bg-gradient-to-br from-indigo-100/80 to-purple-100/80 border border-indigo-300/50'
                } shadow-2xl backdrop-blur-xl`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block mb-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                    <FaGem className="text-white text-lg" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  <span className="inline-block animate-pulse">{'\u2728'}</span>
                  <span className="text-lg ml-1 text-indigo-500">{'\ud83d\udcaa'}</span>
                </motion.div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  <span className="inline-block animate-bounce">{'\ud83d\ude80'}</span>
                  Master
                </p>
              </motion.div>
            </div>

            {/* Enhanced Difficulty Section */}
            {(stats.easySolved !== null || stats.mediumSolved !== null || stats.hardSolved !== null) && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className={`p-8 rounded-3xl relative overflow-hidden mb-12 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 border border-gray-300/50'
                } shadow-2xl backdrop-blur-xl`}
              >
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
                >
                  <span className="inline-block animate-pulse">{'\ud83c\udfae'}</span>
                  <span className="mx-3">Problem Solving Journey</span>
                  <span className="inline-block animate-pulse">{'\ud83d\udc09'}</span>
                </motion.h2>
                
                <div className="grid grid-cols-3 gap-6">
                  {/* Easy Mode */}
                  {stats.easySolved !== null && stats.easySolved !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)"
                      }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 backdrop-blur-lg"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-4xl mb-3"
                      >
                        {'\ud83d\ude0a'}
                      </motion.div>
                      <div className="text-2xl font-bold text-green-500 mb-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.3 }}
                        >
                          {stats.easySolved}
                        </motion.span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                        <span className="inline-block animate-bounce">{'\ud83d\udc4d'}</span>
                        Easy
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Medium Mode */}
                  {stats.mediumSolved !== null && stats.mediumSolved !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: -5,
                        boxShadow: "0 15px 30px rgba(250, 204, 21, 0.4)"
                      }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 backdrop-blur-lg"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-4xl mb-3"
                      >
                        {'\ud83e\udd14'}
                      </motion.div>
                      <div className="text-2xl font-bold text-yellow-500 mb-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.4 }}
                        >
                          {stats.mediumSolved}
                        </motion.span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                        <span className="inline-block animate-pulse">{'\ud83e\udde0'}</span>
                        Medium
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Hard Mode */}
                  {stats.hardSolved !== null && stats.hardSolved !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 15px 30px rgba(239, 68, 68, 0.4)"
                      }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-500/50 backdrop-blur-lg"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -20, 20, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-4xl mb-3"
                      >
                        {'\ud83d\udd25'}
                      </motion.div>
                      <div className="text-2xl font-bold text-red-500 mb-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 }}
                        >
                          {stats.hardSolved}
                        </motion.span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                        <span className="inline-block animate-bounce">{'\ud83d\udcaa'}</span>
                        Hard
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Enhanced Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="text-center"
            >
              <motion.a
                href="https://leetcode.com/u/Vishwaa-29/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all relative overflow-hidden group ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white'
                    : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white'
                } shadow-2xl`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <FaRocket className="text-xl" />
                </motion.div>
                
                <span className="relative z-10">
                  <span className="inline-block animate-pulse">{'\ud83d\ude80'}</span>
                  <span className="mx-2">View LeetCode Profile</span>
                  <span className="inline-block animate-bounce">{'\u2b50'}</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: "backOut",
                delay: 0.5
              }}
              className="relative"
              style={{ 
                perspective: '1000px',
                boxShadow: '0 0 40px rgba(0, 255, 200, 0.2)',
                height: '550px',
                width: '430px'
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/Professional Mee.jpeg"
                  alt="Vishwa Patel"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center top',
                    transform: 'scale(1.1) translateY(-20px)'
                  }}
                />
                
                {/* Crown Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-xl"
                >
                  <FaCrown className="text-white text-2xl" />
                </motion.div>
                
                {/* Animated Orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md"
                />
                
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md"
                />

                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                  className="absolute top-10 -left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                />

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    x: [0, 5, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="absolute bottom-10 -right-6 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />

                {/* Rotating Ring Animation */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-xl"
                  style={{
                    borderStyle: 'dashed'
                  }}
                />

                {/* Pulse Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 border-2 border-pink-500/20 rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LeetCodeStats;

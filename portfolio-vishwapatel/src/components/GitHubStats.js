import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaSpinner, 
  FaExclamationTriangle, 
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaEye,
  FaTrophy,
  FaRocket
} from 'react-icons/fa';
import TopProjects from './TopProjects';

const GitHubStats = () => {
  const { isDarkMode } = useTheme();
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Main fetch function
  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching GitHub user data...");

      // Fetch user data
      const userResponse = await fetch(
        "https://api.github.com/users/VishwaPatel-29"
      );

      if (!userResponse.ok) {
        throw new Error("GitHub user API request failed");
      }

      const userData = await userResponse.json();
      console.log("GITHUB USER API RESPONSE:", userData);

      // Fetch repos data
      const reposResponse = await fetch(
        "https://api.github.com/users/VishwaPatel-29/repos"
      );

      if (!reposResponse.ok) {
        throw new Error("GitHub repos API request failed");
      }

      const reposData = await reposResponse.json();
      console.log("GITHUB REPOS API RESPONSE:", reposData);

      // Calculate stats from repos
      let totalStars = 0;
      let totalForks = 0;
      
      reposData.forEach(repo => {
        totalStars += repo.stargazers_count || 0;
        totalForks += repo.forks_count || 0;
      });

      const processedStats = {
        publicRepos: userData.public_repos || 0,
        followers: userData.followers || 0,
        following: userData.following || 0,
        totalStars: totalStars,
        totalForks: totalForks
      };

      console.log("PROCESSED GITHUB STATS:", processedStats);

      setStats(processedStats);
    } catch (err) {
      console.error("ERROR:", err);
      setError("Failed to load GitHub data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-primary mb-4 mx-auto" />
          <p className="text-gray-600 dark:text-gray-400">Loading GitHub stats...</p>
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
            Failed to load GitHub data
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={fetchGitHubData}
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
            <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">
              <span className="inline-block animate-pulse">{'\ud83d\udcbb'}</span>
              <span className="mx-2">GitHub Stats</span>
              <span className="inline-block animate-pulse">{'\ud83d\udc19'}</span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            <span className="inline-block animate-bounce">{'\u2728'}</span>
            Building amazing open source projects
            <span className="inline-block animate-bounce">{'\ud83d\ude80'}</span>
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
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <FaGithub className="text-lg" /> Developer {'\ud83d\udc68'}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <FaStar className="text-lg" /> Star Coder {'\u2b50'}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <FaTrophy className="text-lg" /> Top Contributor {'\ud83c\udfc6'}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Public Repositories - Premium Card */}
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
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
            }}
            className={`group relative p-6 rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900/80 to-slate-800/80 border border-gray-600/50' 
                : 'bg-gradient-to-br from-gray-100/80 to-slate-200/80 border border-gray-400/50'
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
              <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-xl">
                <FaCode className="text-white text-lg" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {stats.publicRepos}
              <span className="text-lg ml-1 text-gray-500">{'\ud83d\udce6'}</span>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              <span className="inline-block animate-bounce">{'\ud83d\udcda'}</span>
              Repos
            </p>
          </motion.div>

          {/* Followers - Premium Card */}
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
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            className={`group relative p-6 rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-900/80 to-indigo-800/80 border border-blue-600/50' 
                : 'bg-gradient-to-br from-blue-100/80 to-indigo-100/80 border border-blue-400/50'
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                <FaUsers className="text-white text-lg" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {stats.followers}
              <span className="text-lg ml-1 text-blue-500">{'\ud83d\udc65'}</span>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              <span className="inline-block animate-pulse">{'\ud83d\udc64'}</span>
              Followers
            </p>
          </motion.div>

          {/* Total Stars - Premium Card */}
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
              boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
            }}
            className={`group relative p-6 rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-amber-900/80 to-orange-800/80 border border-amber-600/50' 
                : 'bg-gradient-to-br from-amber-100/80 to-orange-100/80 border border-amber-400/50'
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
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <FaStar className="text-white text-lg" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {stats.totalStars}
              <span className="text-lg ml-1 text-amber-500">{'\u2b50'}</span>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              <span className="inline-block animate-bounce">{'\u2728'}</span>
              Stars
            </p>
          </motion.div>

          {/* Total Forks - Premium Card */}
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
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
            className={`group relative p-6 rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-emerald-900/80 to-teal-800/80 border border-emerald-600/50' 
                : 'bg-gradient-to-br from-emerald-100/80 to-teal-100/80 border border-emerald-400/50'
            } shadow-2xl backdrop-blur-xl`}
          >
            <motion.div
              animate={{
                rotate: [0, 180, -180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                <FaCodeBranch className="text-white text-lg" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              {stats.totalForks}
              <span className="text-lg ml-1 text-emerald-500">{'\ud83d\udd17'}</span>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              <span className="inline-block animate-pulse">{'\ud83c\udf33'}</span>
              Forks
            </p>
          </motion.div>
        </div>

        {/* Top Projects Section */}
        <TopProjects />

        {/* Enhanced Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/VishwaPatel-29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all relative overflow-hidden group ${
              isDarkMode
                ? 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white'
                : 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white'
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
              <FaGithub className="text-xl" />
            </motion.div>
            
            <span className="relative z-10">
              <span className="inline-block animate-pulse">{'\ud83d\ude80'}</span>
              <span className="mx-2">View GitHub Profile</span>
              <span className="inline-block animate-bounce">{'\ud83d\udc19'}</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubStats;

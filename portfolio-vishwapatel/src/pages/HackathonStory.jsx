import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaTrophy, 
  FaRocket, 
  FaLightbulb, 
  FaCode, 
  FaStar,
  FaAward,
  FaChartLine,
  FaUsers,
  FaClock,
  FaBrain,
  FaCogs,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaPlay
} from 'react-icons/fa';
import VP_LOGO from '../assets/VP_LOGO.png';
import { Helmet } from 'react-helmet';

const HackathonStory = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const slideInRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const scaleInVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const rotateInVariants = {
    hidden: { rotate: -180, scale: 0, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Hackathon Story - Vishwa Patel | Full Stack Developer</title>
        <meta name="description" content="Read the hackathon journey of Vishwa Patel - Full Stack Developer and problem solver" />
        <meta name="keywords" content="Hackathon, Vishwa Patel, Full Stack Developer, Coding Competition, Innovation" />
        <meta property="og:title" content="Hackathon Story - Vishwa Patel" />
        <meta property="og:description" content="Discover the hackathon journey and experiences of Vishwa Patel" />
      </Helmet>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00998c]/5 via-transparent to-[#085d56]/5" />
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(0, 153, 140, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(0, 153, 140, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(0, 153, 140, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(0, 153, 140, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(0, 153, 140, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00998c]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Back to Hackathon Button */}
            <motion.button
              variants={slideInLeftVariants}
              onClick={() => navigate('/hackathon')}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 40px rgba(0, 153, 140, 0.6)",
                rotate: [-2, 2, -2]
              }}
              whileTap={{ 
                scale: 0.92,
                rotate: [2, -2, 0]
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-[#085d56] to-[#00998c] text-white shadow-[0_0_20px_rgba(0,153,140,0.3)] border border-[#00998c]/30 hover:shadow-[0_0_30px_rgba(0,153,140,0.5)] transition-all duration-300"
            >
              <motion.div
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </motion.div>
              <span className="hidden sm:inline">Back to Hackathon</span>
              <span className="sm:hidden">Back</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <FaTrophy className="text-sm sm:text-lg" />
              </motion.div>
            </motion.button>

            {/* Go to Portfolio Button */}
            <motion.button
              variants={slideInRightVariants}
              onClick={() => navigate('/home')}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 40px rgba(0, 153, 140, 0.6)",
                rotate: [2, -2, 2]
              }}
              whileTap={{ 
                scale: 0.92,
                rotate: [-2, 2, 0]
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r from-[#085d56] to-[#00998c] text-white shadow-[0_0_20px_rgba(0,153,140,0.3)] border border-[#00998c]/30 hover:shadow-[0_0_30px_rgba(0,153,140,0.5)] transition-all duration-300"
            >
              <span className="hidden sm:inline">Go to Portfolio</span>
              <span className="sm:hidden">Portfolio</span>
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <FaRocket className="text-sm sm:text-lg" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={scaleInVariants}
              className="relative inline-block"
            >
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 20px rgba(0, 153, 140, 0.4)",
                    "0 0 40px rgba(0, 153, 140, 0.8)",
                    "0 0 20px rgba(0, 153, 140, 0.4)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-[#00998c] to-[#085d56] bg-clip-text text-transparent text-center"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  My Hackathon Journey
                </motion.span>
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaRocket className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00998c]" />
                </motion.div>
              </motion.h1>
              
              {/* Enhanced Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -z-10 blur-3xl"
              >
                <div className="w-full h-full bg-gradient-to-r from-[#00998c]/30 to-[#085d56]/30 rounded-3xl" />
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              A 36-hour intensive hackathon experience that transformed my approach to educational technology and innovation
            </motion.p>
          </motion.div>

          {/* Story Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mb-16"
          >
            {/* The Challenge Card */}
            <motion.div
              variants={slideInLeftVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 0 60px rgba(0, 153, 140, 0.3)",
                borderColor: "rgba(0, 153, 140, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#0a0a0a] border border-[#00998c]/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,153,140,0.1)] hover:shadow-[0_0_60px_rgba(0,153,140,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                >
                  <FaRocket className="text-xl sm:text-3xl text-white" />
                </motion.div>
                <motion.h2 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  The Challenge
                </motion.h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Participated in a 36-hour Create a full-stack professional web application called “SkillSense AI — Measuring Skills. Predicting Futures.”
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-3 text-center">
                    <FaClock className="text-2xl text-[#00998c] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">36 Hours</p>
                  </div>
                  <div className="bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-3 text-center">
                    <FaUsers className="text-2xl text-[#00998c] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Team Collaboration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Solution Card */}
            <motion.div
              variants={slideInRightVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 0 60px rgba(0, 153, 140, 0.3)",
                borderColor: "rgba(0, 153, 140, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#0a0a0a] border border-[#00998c]/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,153,140,0.1)] hover:shadow-[0_0_60px_rgba(0,153,140,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div 
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                >
                  <FaLightbulb className="text-xl sm:text-3xl text-white" />
                </motion.div>
                <motion.h2 
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                >
                  My Solution
                </motion.h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Developed an skillsense AI platform that provides personalized learning paths and real-time feedback to students, enhancing engagement and improving learning outcomes.Help Students to travk their daily Learning.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-start gap-2 bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
                    <FaBrain className="text-xl text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">AI Integration</h3>
                      <p className="text-xs text-gray-400">Machine learning algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                    <FaChartLine className="text-xl text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">Real-time Analytics</h3>
                      <p className="text-xs text-gray-400">Performance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <FaCogs className="text-xl text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">Adaptive Learning</h3>
                      <p className="text-xs text-gray-400">Dynamic content adjustment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                    <FaCheckCircle className="text-xl text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">Instant Feedback</h3>
                      <p className="text-xs text-gray-400">Real-time responses</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="bg-[#0a0a0a] border border-[#00998c]/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,153,140,0.1)]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-lg"
                >
                  <FaStar className="text-xl sm:text-3xl text-white" />
                </motion.div>
                <motion.h2 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                >
                  The Impact
                </motion.h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-purple-500/10 border border-purple-500/20 rounded-lg p-4"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    40% <FaRocket className="text-2xl" />
                  </div>
                  <p className="text-gray-300">Increase in completion rates</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-blue-500/10 border border-blue-500/20 rounded-lg p-4"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    35% <FaChartLine className="text-2xl" />
                  </div>
                  <p className="text-gray-300">Improvement in assessment scores</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-green-500/10 border border-green-500/20 rounded-lg p-4"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    100% <FaUsers className="text-2xl" />
                  </div>
                  <p className="text-gray-300">User satisfaction rate</p>
                </motion.div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mt-6">
                First Offline Hacathon as a second semester student With 36-Hours of continuous Coding Almost Zero Sleep and it dragged to 3rd runner up it's very big achivement.Finally Team's 36 hours of HardWorks get Succeed
                Our solution addressed critical needs for personalized education in remote learning environments. 
                The platform demonstrated significant improvement in student engagement and learning outcomes during testing.
              </p>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="bg-[#0a0a0a] border border-[#00998c]/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,153,140,0.1)]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                >
                  <FaTrophy className="text-xl sm:text-3xl text-white" />
                </motion.div>
                <motion.h2 
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                >
                  Key Achievements
                </motion.h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <FaAward className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">3rd Place Overall</h3>
                    <p className="text-sm text-gray-400">Recognized for technical excellence and innovation</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                    <FaStar className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Best Technical Implementation</h3>
                    <p className="text-sm text-gray-400">Advanced AI integration and system architecture</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-red-400 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">People's Choice Award</h3>
                    <p className="text-sm text-gray-400">Voted most innovative solution by participants</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-[#00998c]/10 border border-[#00998c]/20 rounded-lg p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Successful Deployment</h3>
                    <p className="text-sm text-gray-400">Fully functional prototype deployed within deadline</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Lessons Learned Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="bg-[#0a0a0a] border border-[#00998c]/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,153,140,0.1)]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg"
                >
                  <FaCode className="text-xl sm:text-3xl text-white" />
                </motion.div>
                <motion.h2 
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
                >
                  Lessons Learned
                </motion.h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  This hackathon taught me the power of combining cutting-edge technology with educational needs to create meaningful impact. 
                  Working under tight deadlines enhanced my problem-solving skills and ability to deliver complex solutions efficiently. 
                  The experience also highlighted the importance of user-centered design in educational technology.
                </p>
                
                <div className="bg-gradient-to-r from-[#00998c]/10 to-[#085d56]/10 border border-[#00998c]/30 rounded-lg p-6 mt-6">
                  <p className="text-[#00998c] font-medium text-center text-lg">
                    "This hackathon reinforced my belief that technology can transform education when built with empathy and innovation."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View Skillsense AI Live Button */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 60px rgba(0, 153, 140, 0.8)",
                rotate: [2, -2, 2]
              }}
              whileTap={{ 
                scale: 0.92,
                rotate: [-2, 2, 0]
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => window.open('https://skillsense-ai-seven.vercel.app/', '_blank')}
              className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-[#00998c] via-[#085d56] to-[#00998c] text-white shadow-[0_0_40px_rgba(0,153,140,0.4)] border-2 border-[#00998c]/50 hover:shadow-[0_0_80px_rgba(0,153,140,0.6)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Button content */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <span className="text-lg sm:text-xl xl:text-2xl">?rocket:</span>
              </motion.div>
              
              <motion.span 
                className="relative z-10 hidden sm:inline"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                View Skillsense AI Live
              </motion.span>
              
              <motion.span 
                className="relative z-10 sm:hidden"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                View Live
              </motion.span>
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <FaPlay className="text-lg sm:text-xl group-hover:text-yellow-300 transition-colors duration-300" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative z-10 hidden sm:block"
              >
                <FaExternalLinkAlt className="text-base sm:text-lg group-hover:text-cyan-300 transition-colors duration-300" />
              </motion.div>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00998c]/30 to-[#085d56]/30 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            {/* Additional text below button */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2"
            >
              <span>✨</span>
              <span>Experience the AI-powered learning platform</span>
              <span>🤖</span>
            </motion.p>
          </motion.div>
        </div>
      </main>
    </div>
    </>
  );
};

export default HackathonStory;

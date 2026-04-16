import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaTrophy, 
  FaRocket, 
  FaLightbulb, 
  FaCode, 
  FaStar,
  FaBook,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt
} from 'react-icons/fa';

// Fixed image imports
const img1 = new URL("../assets/SU_Hack1.jpeg", import.meta.url).href;
const img2 = new URL("../assets/SU_Hack2.jpeg", import.meta.url).href;
const img3 = new URL("../assets/SU_ME.jpeg", import.meta.url).href;

const HackathonAchievement = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3];

  // Auto redirect after 60 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 60000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Image loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <div className="h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Animated Background Gradient Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#085d56]/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[#00998c]/25 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#085d56]/20 to-[#00998c]/20 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Floating Elements Outside Main Container */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-70">{'\ud83c\udfc6'}</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-pulse opacity-70">{'\ud83d\ude80'}</div>
      <div className="absolute top-20 right-20 text-3xl animate-spin opacity-60" style={{ animationDuration: '8s' }}>{'\u2728'}</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>{'\ud83d\udca1'}</div>
      <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}>{'\ud83c\udfaf'}</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}>{'\u2b50'}</div>
      <div className="absolute top-1/4 left-1/3 text-2xl animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}>{'\ud83d\udcbb'}</div>

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ 
          boxShadow: '0 40px 140px rgba(0,0,0,1), 0 0 120px rgba(0,153,140,1)',
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl shadow-[0_30px_120px_rgba(0,0,0,1),0_0_80px_rgba(0,153,140,0.9)] border border-[#00998c]/40 p-6 md:p-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SIDE - CONTENT BOX */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_60px_rgba(0,153,140,0.5)] border border-[#00998c]/20"
          >
            <div className="text-white space-y-6">
              
              {/* Title Section */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaTrophy className="text-4xl text-[#00998c]" />
                </motion.div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00998c] to-[#085d56] bg-clip-text text-transparent">
                    Hackathon Achievement {'\u2728'}
                  </h1>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 mt-2"
                  >
                    <FaStar className="text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Award Winner</span>
                    <FaStar className="text-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Hackathon Details */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="bg-[#085d56]/20 rounded-xl p-4 border border-[#00998c]/30">
                  <h3 className="text-[#00998c] font-bold text-lg mb-2">
                    {'\ud83d\udccd'} Sangam University Hacathon-2026
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Prestigious 36-hour of Continuous Coding Challange
                  </p>
                </div>

                {/* Role */}
                <motion.div variants={itemVariants} className="flex items-start gap-3">
                  <FaCode className="text-teal text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#00998c] font-semibold mb-1">My Role</h4>
                    <p className="text-gray-300 text-sm">
                      <span className="text-[#085d56] font-bold">{'\ud83d\udd27'} UI Leader</span> - Lead the design and implementation of the user interface for the AI-powered educational platform
                    </p>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <h4 className="text-[#00998c] font-semibold">{'\u2699\ufe0f'} Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: FaReact, name: 'React', color: 'text-teal' },
                      { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
                      { icon: FaDatabase, name: 'MongoDB', color: 'text-green-600' },
                      { icon: FaGitAlt, name: 'Git', color: 'text-red-500' }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg border border-[#00998c]/20 ${tech.color}`}
                      >
                        <tech.icon className="text-lg" />
                        <span className="text-xs text-white">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Solution */}
                <motion.div variants={itemVariants} className="flex items-start gap-3">
                  <FaRocket className="text-[#00998c] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#00998c] font-semibold mb-1">Solution</h4>
                    <p className="text-gray-300 text-sm">
                      Successfully Buid an SkillSense AI which will help students to identify their skills and focus on their strengths
                    </p>
                  </div>
                </motion.div>

                {/* Result */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-[#085d56]/30 to-[#00998c]/30 rounded-xl p-4 border border-[#00998c]/50"
                >
                  <div className="flex items-center gap-3">
                    <FaStar className="text-yellow-400 text-2xl animate-pulse" />
                    <div>
                      <h4 className="text-white font-bold text-lg">{'\ud83c\udfaf'} Result</h4>
                      <p className="text-[#00998c] font-semibold">
                        3rd Place Winner - Recognized for technical excellence, innovation, and market potential
                      </p>
                    </div>
                    <FaStar className="text-yellow-400 text-2xl animate-pulse" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE BOX */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-black/50 backdrop-blur-md rounded-2xl p-4 shadow-[0_0_60px_rgba(0,153,140,0.5)] border border-[#00998c]/30 w-full"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Hackathon Competition"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[320px] md:h-[360px] object-contain rounded-xl"
                />
              </AnimatePresence>
              
              {/* Image Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-[#00998c]' : 'bg-gray-600'}`}
                    whileHover={{ scale: 1.5 }}
                    animate={{ scale: index === currentIndex ? [1, 1.3, 1] : 1 }}
                    transition={{ duration: 2, repeat: index === currentIndex ? Infinity : 0 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* BUTTONS */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-4 justify-center items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() => navigate('/hackathon-story')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-[#085d56] to-[#00998c] text-white shadow-[0_0_40px_rgba(0,153,140,0.6)] border border-[#00998c]/50 hover:shadow-[0_0_60px_rgba(0,153,140,0.8)] transition-all duration-300"
                whileHover={{ 
                  boxShadow: '0 0 60px rgba(0,153,140,0.8)',
                  scale: 1.05
                }}
              >
                <FaBook className="group-hover:translate-x-2 transition-transform duration-300" />
                <span>View Hackathon Story</span>
                <span className="text-xl">📖</span>
              </motion.button>

              <motion.button
                onClick={() => navigate('/home')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-[#085d56] to-[#00998c] text-white shadow-[0_0_40px_rgba(0,153,140,0.6)] border border-[#00998c]/50 hover:shadow-[0_0_60px_rgba(0,153,140,0.8)] transition-all duration-300"
                whileHover={{ 
                  boxShadow: '0 0 60px rgba(0,153,140,0.8)',
                  scale: 1.05
                }}
              >
                <span>Go to Portfolio</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                <span className="text-xl">{'\ud83d\ude80'}</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HackathonAchievement;
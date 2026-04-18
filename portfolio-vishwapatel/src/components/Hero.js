import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaTwitter, FaYoutube, FaEye } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import profileImg from '../assets/Professional Mee.jpeg';
import logoImg from '../assets/VP_LOGO.png';
import ResumeModal from './ResumeModal';
import { Helmet } from 'react-helmet';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [rotateDirection, setRotateDirection] = useState('forward');
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const roles = [
    "Aspiring Full-Stack Developer",
    "Creative Coder",
    "UI/UX Enthusiast",
    "Web Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const viewResume = () => {
    // Open resume modal
    setShowResumeModal(true);
  };

  const contactMe = () => {
    // Navigate to contact page
    navigate('/contact');
  };

  const toggleRotation = () => {
    setRotateDirection(prev => prev === 'forward' ? 'reverse' : 'forward');
  };

  return (
    <>
      <Helmet>
        <title>Vishwa Patel | Software Engineer | React Developer | Portfolio</title>
        <meta name="description" content="Vishwa Patel - Aspiring Full Stack Developer showcasing web development projects, skills, and creative coding solutions" />
        <meta name="keywords" content="Vishwa Patel, Full Stack Developer, Web Developer, React, JavaScript, Portfolio, Projects, Skills" />
        <meta name="author" content="Vishwa Patel" />
        <meta property="og:title" content="Vishwa Patel - Full Stack Developer" />
        <meta property="og:description" content="Aspiring Full Stack Developer showcasing innovative web development projects and technical skills" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwa Patel - Full Stack Developer" />
        <meta name="twitter:description" content="Creative Full Stack Developer with expertise in React, JavaScript, and modern web technologies" />
      </Helmet>
      <section className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-100'} flex items-center justify-center px-10 sm:px-10 lg:px-10 overflow-hidden`}>
      {/* Background gradient effect */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10' : 'bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10'}`} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-teal-500/20' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 ${isDarkMode ? 'bg-cyan-500/20' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse delay-1000`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${isDarkMode ? 'bg-blue-500/10' : 'bg-pink-400/10'} rounded-full blur-3xl animate-pulse delay-500`} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[80px] px-4 lg:px-8">

          {/* Left side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start w-full"
          >
            <div className="image-wrapper" style={{ position: 'relative', top: '-40px', left: '-40px' }}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 3D Flip Container */}
                <motion.div 
                  className="relative cursor-pointer"
                  style={{ 
                    perspective: '1000px',
                    boxShadow: '0 0 40px rgba(0, 255, 200, 0.2)',
                    height: '550px',
                    width: '430px'
                  }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsFlipped(true)}
                  onHoverEnd={() => setIsFlipped(false)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.7s'
                    }}
                    animate={{ 
                      rotateY: isFlipped ? 180 : 0 
                    }}
                  >
                    {/* Front - Profile Image */}
                    <div
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Back - Alternative Photo */}
                    <div
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <img
                        src={profileImg}
                        alt="Profile Alternative"
                        className="w-full h-full object-cover"
                      />
                      {/* Different overlay for back side */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Add text overlay for back */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-lg font-semibold text-center">
                          Full-Stack Developer
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start text-left space-y-8 w-full"
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 30px rgba(0, 255, 200, 0.8)',
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 10,
              }}
            >
              <motion.span 
                className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
                whileHover={{
                  backgroundPosition: '200% 0',
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Vishwa Patel
              </motion.span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl h-8 flex items-center"
            >
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{text}</span>
              <span className="inline-block w-1 h-6 bg-teal-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Passionate about creating elegant solutions to complex problems.
              I love building modern web applications that combine beautiful design
              with powerful functionality.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: '0 15px 35px rgba(168,85,247,0.4)',
                  background: 'linear-gradient(135deg, #ec4899, #a855f7, #ec4899)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={viewResume}
                className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <FaEye className="w-5 h-5" />
                  </motion.div>
                  <span>View Resume</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: '0 15px 35px rgba(0, 153, 140, 0.4)',
                  borderColor: '#00d4cc',
                  color: '#00d4cc',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={contactMe}
                className="relative overflow-hidden px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-400 font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative flex items-center space-x-2">
                  <span>Contact Me</span>
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                </div>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-start space-x-6"
            >
              {[
                { name: 'GitHub', icon: FaGithub, url: 'https://github.com/VishwaPatel-29', color: 'from-gray-700 to-gray-900' },
                { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/vishwa-patel-8664473a0/', color: 'from-blue-600 to-blue-800' },
                { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/PatelVishw30565', color: 'from-sky-500 to-sky-700' },
                { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/Vishwaa-29/', color: 'from-orange-500 to-orange-700' },
                { name: 'Gmail', icon: FaEnvelope, url: 'mailto:vishwa29patel.cg@gmail.com', color: 'from-red-500 to-red-700' },
                { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@VishwaPatel-29h', color: 'from-red-600 to-red-800' }
              ].map((social, index) => (
                <motion.div
                  key={social.name}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.25, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: '0 10px 25px rgba(0, 153, 140, 0.4)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r text-white shadow-lg transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${social.color})`,
                    }}
                    aria-label={social.name}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <social.icon className="w-6 h-6 relative z-10" />
                  </motion.a>
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full opacity-0 pointer-events-none whitespace-nowrap shadow-lg"
                    initial={{ opacity: 0, y: 5, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.name}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Resume Modal */}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />
    </section>
    </>
  );
};

export default Hero;

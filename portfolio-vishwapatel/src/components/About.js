import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5,
  FaJs,
  FaGithub,
  FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const TechOrbit = () => {
  const [rotation, setRotation] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1.2) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { icon: FaReact, color: 'from-blue-400 to-cyan-400', size: 'w-8 h-8' },
    { icon: FaNodeJs, color: 'from-green-400 to-emerald-400', size: 'w-7 h-7' },
    { icon: FaJs, color: 'from-yellow-400 to-orange-400', size: 'w-8 h-8' },
    { icon: SiTailwindcss, color: 'from-teal-400 to-cyan-400', size: 'w-7 h-7' },
    { icon: SiMongodb, color: 'from-green-500 to-green-600', size: 'w-7 h-7' },
    { icon: FaGitAlt, color: 'from-orange-400 to-red-500', size: 'w-7 h-7' },
    { icon: FaGithub, color: 'from-gray-600 to-gray-800', size: 'w-7 h-7' },
    { icon: FaFigma, color: 'from-purple-400 to-pink-500', size: 'w-7 h-7' },
    { icon: FaHtml5, color: 'from-orange-500 to-red-500', size: 'w-8 h-8' },
  ];

  const radius = 140;
  const centerX = 170;
  const centerY = 170;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative w-full h-full min-h-[340px] flex items-center justify-center"
      style={{ width: '340px', height: '340px', margin: '0 auto' }}
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5' : 'bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30'} blur-xl`}></div>
      
      {/* Orbit rings */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ width: '340px', height: '340px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        {/* Outer orbit ring */}
        <circle
          cx="170"
          cy="170"
          r="140"
          fill="none"
          stroke={isDarkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)"}
          strokeWidth="2"
          strokeDasharray="8,4"
          className="animate-pulse"
        />
        {/* Inner orbit ring */}
        <circle
          cx="170"
          cy="170"
          r="100"
          fill="none"
          stroke={isDarkMode ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.08)"}
          strokeWidth="1"
          strokeDasharray="4,2"
        />
      </svg>

      {/* Center circle */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 30px rgba(59, 130, 246, 0.1)",
            "0 0 20px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute w-24 h-24 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-white via-gray-50 to-white'} shadow-2xl border ${isDarkMode ? 'border-blue-500/20' : 'border-blue-200/50'} flex items-center justify-center backdrop-blur-xl`}
      >
        <div className="text-center">
          <span className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>TECH</span>
          <div className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>STACK</div>
        </div>
      </motion.div>

      {/* Orbiting tech icons */}
      {techStack.map((tech, index) => {
        const angle = (rotation + (index * 45)) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${x - 28}px`,
              top: `${y - 28}px`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              rotate: -rotation,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 0, ease: "linear" },
              scale: { 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.2
              }
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.5,
                rotate: 360,
                transition: { duration: 0.5, type: 'spring' },
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-white to-gray-100'} shadow-xl border ${isDarkMode ? 'border-gray-600/30' : 'border-gray-300/50'} flex items-center justify-center backdrop-blur-md relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.3,
                }}
              />
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg relative z-10`}>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5,
                  }}
                >
                  <tech.icon className={`${tech.size} text-white drop-shadow-sm`} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const About = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const aboutCards = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Fast Learner',
      description: 'Quickly adapt to new technologies and frameworks. Always eager to learn and stay updated with the latest industry trends.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Problem Solver',
      description: 'Analytical mindset with a passion for solving complex problems and creating efficient, scalable solutions.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Team Player',
      description: 'Excellent communication skills and experience working in collaborative environments to achieve common goals.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'Creative Thinker',
      description: 'Innovative approach to development with a keen eye for design and user experience.',
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            Passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
        </motion.div>

        {/* Main About Content - Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-8 mb-16 min-h-[400px]"
        >
          {/* Left Column - Who Am I Card */}
          <motion.div
            variants={itemVariants}
            className="flex-1"
          >
            <div className={`h-full p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30' : 'bg-gradient-to-br from-white/70 to-gray-100/70 backdrop-blur-xl border border-gray-300/50'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold mb-6"
              >
                <span className={`bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                  Who Am I?
                </span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                <p className="leading-relaxed">
                  I'm a passionate Full Stack Developer 🚀 with strong expertise in modern web technologies. I specialize in building responsive, high-performance, and scalable web applications that deliver smooth and engaging user experiences across all devices 📱💻.
                </p>
                <p className="leading-relaxed">
                  With a solid foundation in both frontend 🎨 and backend ⚙️ development, I turn ideas into reality using clean code, thoughtful UI design, and problem-solving skills. I enjoy learning new tools and technologies constantly to stay updated in the fast-evolving web ecosystem 🌐.
                </p>
                <p className="leading-relaxed">
                  My goal is to build impactful digital solutions that not only meet technical needs but also create meaningful user experiences and drive real-world success ⭐.
                </p>
              </motion.div>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '10+', label: 'Months Learning' },
                  { number: '100%', label: 'Dedication' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-200/50'} backdrop-blur-sm`}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Tech Orbit Animation */}
          <motion.div
            variants={itemVariants}
            className="flex-1"
          >
            <div className={`h-full p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-br from-slate-100 to-slate-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-bold mb-6 text-center"
              >
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-bold`}>
                  Tech Stack
                </span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <TechOrbit />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`text-center mt-6 ${isDarkMode ? 'text-white/90' : 'text-gray-600'}`}
              >
                Continuously evolving my skills with modern technologies and frameworks
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                }}
                whileTap={{
                  scale: 0.98,
                  rotateX: -2,
                  rotateY: -2,
                }}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30' : 'bg-gradient-to-br from-white/70 to-gray-100/70 backdrop-blur-xl border border-gray-300/50'} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5,
                  }}
                />
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 mx-auto relative`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold mb-3 text-center"
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(0, 255, 200, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className={`bg-gradient-to-r ${card.color} bg-clip-text text-transparent inline-block`}
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
                    {card.title}
                  </motion.span>
                </motion.h4>
                <motion.p 
                  className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}
                  whileHover={{
                    scale: 1.02,
                    color: isDarkMode ? '#ffffff' : '#000000',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaPalette } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import lmsImg from '../assets/LMS-Clone.png';
import typingImg from '../assets/Typing-Speed-Test.png';
import tictactoeImg from '../assets/Tic-Tac-Toe.png';
import clickcounterImg from '../assets/Click Counter.png';
import colourguessImg from '../assets/Colour Guess.png';
import whackamoleImg from '../assets/Whack a mole.png';
import memoryflipcardImg from '../assets/Memory Flip Card.png';
import udaanImg from '../assets/Udaan.png';
import todoImg from '../assets/To-Do.png';

const Projects = ({ isHomePage = false }) => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

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
    hidden: { y: 50, opacity: 0, scale: 0.9, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Gen-Z Website",
      description: "Empowering modern brands with creative strategy and smart technology.We help you grow faster, stronger, and stand out in the digital world",
      image: "https://gen-zreactwebsite.netlify.app/assets/hero-Jz0ycX1P.jpg",
      techStack: ["React","Tailwind CSS" ],
      category: "fullstack",
      liveDemo: "https://gen-zreactwebsite.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Gen-Z-Website-Tailwind_CSS",
    },
    {
      id: 2,
      title: "LMS Website Clone",
      description: "A fully functional Learning Management System (LMS) Clone built using modern web technologies. This project replicates a real-world LMS platform with a clean UI and interactive features for students and instructors.",
      image: lmsImg,
      techStack: ["React JS","Frontend","Backend","Tailwind CSS"],
      category: "fullstack",
      liveDemo: "https://lms-clone-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/LMS-Website",
    },
    {
      id: 3,
      title: "Typing Speed Test Frontend Game",
      description: "An interactive Typing Speed Test built using HTML, CSS, and JavaScript. Improve your typing skills by measuring your speed, accuracy, and consistency in real-time!",
      image: typingImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendgame-typingspeedtest-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/05.Typing-Speed-Test",
    },
    {
      id: 4,
      title: "Dream Games Website",
      description: "A platform focused on mobile and online gaming, offering a variety of casual and competitive games. It emphasizes high-quality graphics and engaging layout design..",
      image: "https://cdn.prod.website-files.com/66ba0cbc63210953b4fc73a8/66ba0cbc63210953b4fc7571_home-hero-characters-p-2000.png",
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://1stwebsite-dreamgames-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Dream%20Games",
    },
    {
      id: 5,
      title: "Tic-Tac-Toe Frontend Game",
      description: "A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. This project is perfect for beginners who want to understand DOM manipulation and basic game logic.",
      image: tictactoeImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://fontendgame-tictactoe-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/01.Tic-Tac-Toe",
    },
    {
      id: 6,
      title: "BlackBuck Website",
      description: "India’s leading logistics and trucking platform, designed to connect shippers with truck owners. This clone focuses on structured layout and clean UI design.",
      image: "https://www.indiatechdesk.com/wp-content/uploads/2021/07/BlackBuck.png",
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://2ndwebsite-blackbuck-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/BlackBuck",
    },
    {
      id: 7,
      title: "Click-Counter Frontend Game",
      description: "A fun and addictive Click Counter Game built using HTML, CSS, and JavaScript. Test your speed and see how many clicks you can make before time runs out!",
      image: clickcounterImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendgame-clickcounter-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/02.Click-Counter",
    },
    {
      id: 8,
      title: "DUER Website",
      description: "A clone of a Canadian clothing brand website showcasing modern fashion layouts, typography styling, and product presentation design.",
      image: "https://3rdwebsite-duer-vishwa.netlify.app/s3.jpeg",
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://3rdwebsite-duer-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/DUER",
    },
    {
      id: 9,
      title: "Colour-Guessing Frontend Game",
      description: "A fun and interactive RGB Color Guessing Game built using HTML, CSS, and JavaScript. Challenge your brain by guessing the correct color based on RGB values!",
      image: colourguessImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendgame-colorguess-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/03.Color-Guessing",
    },
    {
      id: 10,
      title: "Newest By OneCenter Website",
      description: "A layout-focused clone presenting organized information and structured sections for showcasing updates or trends.",
      image: "https://www.newest-onecentre.com/cdn/shop/files/NOW_OR_NEVER_1920_x_1080.jpg?v=1748002069&width=1920",
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://4thwebsite-newestbyoncenter-vishwaa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Newest%20By%20Onecenter",
    },
    {
      id: 11,
      title: "Whack-a-mole Frontend Game",
      description: "A fun and fast-paced Whack-a-Mole Game built using HTML, CSS, and JavaScript. Test your reflexes and hit as many moles as you can before time runs out!",
      image: whackamoleImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendgame-whackamole-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/04.Whack-a-mole",
    },
    {
      id: 12,
      title: "OWND Website",
      description: "A website builder landing page clone demonstrating clean design, section structuring, and modern UI styling.",
      image: "https://www.ownd.in/cdn/shop/files/Desktop-01.jpg?v=1758613176&width=1900",
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://5thwebsite-ownd-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/OWND%21",
    },
    {
      id: 13,
      title: "Memory Flip-Card Frontend Game",
      description: "A fun and engaging Memory Flip Card Game built using HTML, CSS, and JavaScript. Test your memory skills by matching pairs of cards within the time limit!",
      image: memoryflipcardImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendgame-memoryflipcard-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/06.Memory-Flip_card",
    },
    {
      id: 14,
      title: "Udaan Website",
      description: "A B2B e-commerce platform clone focusing on layout accuracy, product showcasing, and structured page sections.",
      image: udaanImg,
      techStack: ["HTML","CSS"],
      category: "frontend",
      liveDemo: "https://6thwebsite-udaan-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Udaan",
    },
    {
      id: 15,
      title: "To-Do Frontend Task",
      description: "A clean and interactive Todo List Application built using HTML, CSS, and JavaScript. Manage your daily tasks efficiently with filtering, tracking, and deletion features!",
      image: todoImg,
      techStack: ["HTML","CSS","JS"],
      category: "frontend",
      liveDemo: "https://frontendtask-todolist-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/07.To-Do",
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const featuredProjects = projects.slice(0, 3); // Show first 3 projects on homepage
  
  const filteredProjects = isHomePage 
    ? featuredProjects 
    : filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              isDarkMode ? 'bg-dark-card' : 'bg-light-card'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full btn-primary glow-effect"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl" />
              <h2 className="absolute bottom-4 left-6 text-3xl font-heading font-bold text-white">
                {project.title}
              </h2>
            </div>

            {/* Project Content */}
            <div className="p-6 sm:p-8">
              {/* Description */}
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-teal">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 py-3 text-center font-medium shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </div>
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-6 py-3 text-center font-medium"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section
      id="projects"
      className={`py-16 md:py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            <span className="text-teal">Featured Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            {isHomePage 
              ? 'Here are some of my featured projects. Click on any project to see more details or explore all my work.'
              : 'Explore my complete portfolio of projects, from web applications to mobile apps and everything in between.'
            }
          </motion.p>
        </motion.div>

        {/* View All Projects Button - Only on homepage */}
        {isHomePage && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="btn-primary px-8 py-3 text-lg"
            >
              <div className="flex items-center space-x-2">
                <FaCode className="w-5 h-5" />
                <span>View All Projects</span>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Category Tabs - Only show on full projects page */}
        {!isHomePage && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className={`inline-flex rounded-lg p-1 ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'} shadow-lg`}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'btn-primary shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`grid ${isHomePage ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 md:gap-8 mt-8`}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -15,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
              }}
              whileTap={{
                scale: 0.98,
                rotateX: -2,
                rotateY: -2,
              }}
              className={`group cursor-pointer rounded-2xl overflow-hidden p-4 md:p-5 relative ${
                isDarkMode ? 'bg-dark-card' : 'bg-light-card'
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Animated Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(0, 255, 200, 0.1) 0%, transparent 70%)',
                    'linear-gradient(225deg, rgba(0, 153, 140, 0.15) 0%, transparent 60%)',
                    'linear-gradient(315deg, rgba(0, 212, 204, 0.1) 0%, transparent 65%)',
                    'linear-gradient(135deg, rgba(0, 255, 200, 0.1) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  View Details
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-3 md:space-y-4 relative z-10">
                <motion.h3 
                  className={`text-xl font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  whileHover={{
                    scale: 1.05,
                    color: '#00d4cc',
                    textShadow: '0 0 15px rgba(0, 212, 204, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}
                  whileHover={{
                    scale: 1.02,
                    color: isDarkMode ? '#ffffff' : '#000000',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: isDarkMode ? '#00d4cc' : '#00998c',
                        color: '#ffffff',
                        boxShadow: '0 4px 12px rgba(0, 212, 204, 0.4)',
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className={`px-2 py-1 text-xs rounded-full cursor-pointer ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.techStack.length > 3 && (
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: isDarkMode ? '#00d4cc' : '#00998c',
                        color: '#ffffff',
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className={`px-2 py-1 text-xs rounded-full cursor-pointer ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      +{project.techStack.length - 3}
                    </motion.span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 25px rgba(0, 212, 204, 0.4)',
                      backgroundColor: '#00d4cc',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center py-2 px-3 btn-primary text-sm glow-effect relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: '#00d4cc',
                      color: '#00d4cc',
                      boxShadow: '0 8px 25px rgba(0, 212, 204, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-1 text-center py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all duration-300 relative overflow-hidden ${
                      isDarkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

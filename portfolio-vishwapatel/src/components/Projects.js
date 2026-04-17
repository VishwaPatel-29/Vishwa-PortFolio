import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaPalette, FaYoutube } from 'react-icons/fa';
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
      techStack: ["React", "Tailwind CSS"],
      category: "fullstack",
      projectType: "fullstack",
      liveDemo: "https://gen-zreactwebsite.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Gen-Z-Website-Tailwind_CSS",
      youtubeDemo: "https://www.youtube.com/watch?v=your-demo-video",
      apiDocumentation: "https://documenter.getpostman.com/view/your-api-docs"
    },
    {
      id: 2,
      title: "LMS Website Clone",
      description: "A fully functional Learning Management System (LMS) Clone built using modern web technologies. This project replicates a real-world LMS platform with a clean UI and interactive features for students and instructors.",
      image: lmsImg,
      techStack: ["React JS", "Frontend", "Backend", "Tailwind CSS"],
      category: "fullstack",
      projectType: "fullstack",
      liveDemo: "https://lms-clone-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/LMS-Website",
      youtubeDemo: "https://www.youtube.com/watch?v=your-lms-demo",
      apiDocumentation: "https://documenter.getpostman.com/view/your-lms-api"
    },
    {
      id: 3,
      title: "Typing Speed Test Frontend Game",
      description: "An interactive Typing Speed Test built using HTML, CSS, and JavaScript. Improve your typing skills by measuring your speed, accuracy, and consistency in real-time!",
      image: typingImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://frontendgame-typingspeedtest-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/05.Typing-Speed-Test",
      youtubeDemo: "https://www.youtube.com/watch?v=your-typing-demo"
    },
    {
      id: 4,
      title: "Dream Games Website",
      description: "A platform focused on mobile and online gaming, offering a variety of casual and competitive games. It emphasizes high-quality graphics and engaging layout design..",
      image: "https://cdn.prod.website-files.com/66ba0cbc63210953b4fc73a8/66ba0cbc63210953b4fc7571_home-hero-characters-p-2000.png",
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://1stwebsite-dreamgames-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Dream%20Games",
      youtubeDemo: "https://www.youtube.com/watch?v=your-dreamgames-demo"
    },
    {
      id: 5,
      title: "Tic-Tac-Toe Frontend Game",
      description: "A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. This project is perfect for beginners who want to understand DOM manipulation and basic game logic.",
      image: tictactoeImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://fontendgame-tictactoe-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/01.Tic-Tac-Toe",
      youtubeDemo: "https://www.youtube.com/watch?v=your-tictactoe-demo",
      apiDocumentation: ""
    },
    {
      id: 6,
      title: "BlackBuck Website",
      description: "India’s leading logistics and trucking platform, designed to connect shippers with truck owners. This clone focuses on structured layout and clean UI design.",
      image: "https://www.indiatechdesk.com/wp-content/uploads/2021/07/BlackBuck.png",
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://2ndwebsite-blackbuck-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/BlackBuck",
      youtubeDemo: "https://www.youtube.com/watch?v=your-blackbuck-demo",
      apiDocumentation: ""
    },
    {
      id: 7,
      title: "Click-Counter Frontend Game",
      description: "A fun and addictive Click Counter Game built using HTML, CSS, and JavaScript. Test your speed and see how many clicks you can make before time runs out!",
      image: clickcounterImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://frontendgame-clickcounter-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/02.Click-Counter",
      youtubeDemo: "https://www.youtube.com/watch?v=your-clickcounter-demo"
    },
    {
      id: 8,
      title: "DUER Website",
      description: "A clone of a Canadian clothing brand website showcasing modern fashion layouts, typography styling, and product presentation design.",
      image: "https://3rdwebsite-duer-vishwa.netlify.app/s3.jpeg",
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://3rdwebsite-duer-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/DUER",
      youtubeDemo: "https://www.youtube.com/watch?v=your-duer-demo"
    },
    {
      id: 9,
      title: "Colour-Guessing Frontend Game",
      description: "A fun and interactive RGB Color Guessing Game built using HTML, CSS, and JavaScript. Challenge your brain by guessing the correct color based on RGB values!",
      image: colourguessImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://frontendgame-colorguess-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/03.Color-Guessing",
      youtubeDemo: "https://www.youtube.com/watch?v=your-colorguess-demo"
    },
    {
      id: 10,
      title: "Newest By OneCenter Website",
      description: "A layout-focused clone presenting organized information and structured sections for showcasing updates or trends.",
      image: "https://www.newest-onecentre.com/cdn/shop/files/NOW_OR_NEVER_1920_x_1080.jpg?v=1748002069&width=1920",
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://4thwebsite-newestbyoncenter-vishwaa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Newest%20By%20Onecenter",
      youtubeDemo: "https://www.youtube.com/watch?v=your-newest-demo"
    },
    {
      id: 11,
      title: "Whack-a-mole Frontend Game",
      description: "A fun and fast-paced Whack-a-Mole Game built using HTML, CSS, and JavaScript. Test your reflexes and hit as many moles as you can before time runs out!",
      image: whackamoleImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://frontendgame-whackamole-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/04.Whack-a-mole",
      youtubeDemo: "https://www.youtube.com/watch?v=your-whackamole-demo"
    },
    {
      id: 12,
      title: "OWND Website",
      description: "A website builder landing page clone demonstrating clean design, section structuring, and modern UI styling.",
      image: "https://www.ownd.in/cdn/shop/files/Desktop-01.jpg?v=1758613176&width=1900",
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://5thwebsite-ownd-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/OWND%21",
      youtubeDemo: "https://www.youtube.com/watch?v=your-ownd-demo"
    },
    {
      id: 13,
      title: "Memory Flip-Card Frontend Game",
      description: "A fun and engaging Memory Flip Card Game built using HTML, CSS, and JavaScript. Test your memory skills by matching pairs of cards within the time limit!",
      image: memoryflipcardImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "games",
      liveDemo: "https://frontendgame-memoryflipcard-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/06.Memory-Flip_card",
      youtubeDemo: "https://www.youtube.com/watch?v=your-memory-demo"
    },
    {
      id: 14,
      title: "Udaan Website",
      description: "A B2B e-commerce platform clone focusing on layout accuracy, product showcasing, and structured page sections.",
      image: udaanImg,
      techStack: ["HTML", "CSS"],
      category: "frontend",
      projectType: "clones",
      liveDemo: "https://6thwebsite-udaan-vishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Website-Clones/tree/main/Udaan",
      youtubeDemo: "https://www.youtube.com/watch?v=your-udaan-demo"
    },
    {
      id: 15,
      title: "To-Do Frontend Task",
      description: "A clean and interactive Todo List Application built using HTML, CSS, and JavaScript. Manage your daily tasks efficiently with filtering, tracking, and deletion features!",
      image: todoImg,
      techStack: ["HTML", "CSS", "JS"],
      category: "frontend",
      projectType: "frontend",
      liveDemo: "https://frontendtask-todolist-byvishwa.netlify.app/",
      github: "https://github.com/VishwaPatel-29/Frontend_Games/tree/main/07.To-Do",
      youtubeDemo: "https://www.youtube.com/watch?v=your-todo-demo"
    }
  ];

  const featuredProjects = projects.slice(0, 3); // Show first 3 projects on homepage
  const displayProjects = isHomePage ? featuredProjects : projects;




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

        {/* Category Sections - Only on projects page */}
        {!isHomePage && (
          <>
            {/* Website Clones Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8 text-center"
              >
                <span className="text-teal">Website Clones</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {projects.filter(p => p.projectType === 'clones').map((project, index) => (
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
                    className={`group cursor-pointer rounded-2xl overflow-hidden p-4 md:p-5 relative ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'
                      } shadow-lg hover:shadow-2xl transition-all duration-300`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      />
                    </div>
                    <div className="flex-1 space-y-3 md:space-y-4 relative z-10 mt-4">
                      <h3 className={`text-xl font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Games Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8 text-center"
              >
                <span className="text-teal">Games Projects</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {projects.filter(p => p.projectType === 'games' || p.title === 'To-Do Frontend Task').map((project, index) => (
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
                    className={`group cursor-pointer rounded-2xl overflow-hidden p-4 md:p-5 relative ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'
                      } shadow-lg hover:shadow-2xl transition-all duration-300`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      />
                    </div>
                    <div className="flex-1 space-y-3 md:space-y-4 relative z-10 mt-4">
                      <h3 className={`text-xl font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>


            {/* Frontend Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8 text-center"
              >
                <span className="text-teal">Frontend Projects</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {[projects[0], projects[1]].map((project, index) => (
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
                    className={`group cursor-pointer rounded-2xl overflow-hidden p-4 md:p-5 relative ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'
                      } shadow-lg hover:shadow-2xl transition-all duration-300`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      />
                    </div>
                    <div className="flex-1 space-y-3 md:space-y-4 relative z-10 mt-4">
                      <h3 className={`text-xl font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Full Stack Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-8 text-center"
              >
                <span className="text-teal">Full Stack Projects</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  No full stack projects added yet
                </p>
              </motion.div>
            </motion.section>
          </>
        )}

        {/* Projects Grid - Only on homepage */}
        {isHomePage && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8"
          >
            {displayProjects.map((project, index) => (
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
                className={`group cursor-pointer rounded-2xl overflow-hidden p-4 md:p-5 relative ${isDarkMode ? 'bg-dark-card' : 'bg-light-card'
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
                        className={`px-2 py-1 text-xs rounded-full cursor-pointer ${isDarkMode
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
                        className={`px-2 py-1 text-xs rounded-full cursor-pointer ${isDarkMode
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
                      className={`flex-1 text-center py-2 px-3 rounded-lg text-sm font-medium border-2 transition-all duration-300 relative overflow-hidden ${isDarkMode
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
        )}


      </div>
    </section>
  );
};

export default Projects;

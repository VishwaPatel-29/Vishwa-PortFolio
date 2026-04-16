import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiCplusplus, SiC } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillRefs = useRef([]);

  const skills = {
    Frontend: [
      { name: 'React', icon: FaReact, level: 90, color: 'from-blue-400 to-cyan-400', emoji: 'React' },
      { name: 'JavaScript', icon: FaJs, level: 85, color: 'from-yellow-400 to-orange-400', emoji: 'JS' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: 'from-orange-500 to-red-500', emoji: 'HTML5' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'from-blue-500 to-purple-500', emoji: 'CSS3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'from-teal-400 to-cyan-500', emoji: 'Tailwind' },
      { name: 'Redux', icon: SiRedux, level: 75, color: 'from-purple-500 to-pink-500', emoji: 'Redux' },
    ],
    Backend: [
      { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'from-green-500 to-emerald-500', emoji: 'Node.js' },
      { name: 'Express.js', icon: SiExpress, level: 75, color: 'from-gray-600 to-gray-800', emoji: 'Express' },
      { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'from-green-600 to-emerald-600', emoji: 'MongoDB' },
    ],
    Languages: [
      { name: 'C', icon: SiC, level: 75, color: 'from-blue-500 to-cyan-500', emoji: 'C' },
      { name: 'C++', icon: SiCplusplus, level: 70, color: 'from-blue-600 to-indigo-600', emoji: 'C++' },
    ],
    Tools: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: 'from-orange-500 to-red-600', emoji: 'Git' },
      { name: 'GitHub', icon: FaGithub, level: 90, color: 'from-gray-700 to-gray-900', emoji: 'GitHub' },
      { name: 'Figma', icon: FaFigma, level: 75, color: 'from-purple-500 to-pink-500', emoji: 'Figma' },
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => new Set([...prev, entry.target.dataset.skillId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const getSkillDescription = (skillName) => {
    const descriptions = {
      'React': 'A powerful JavaScript library for building interactive user interfaces with component-based architecture and virtual DOM.',
      'JavaScript': 'Dynamic programming language that enables interactive web pages and is essential for modern web development.',
      'HTML5': 'Latest markup language for creating structured web content with semantic elements and multimedia support.',
      'CSS3': 'Styling language that brings visual design to life with animations, responsive layouts, and modern effects.',
      'Tailwind CSS': 'Utility-first CSS framework for rapid UI development with custom designs without writing custom CSS.',
      'Redux': 'Predictable state management container for JavaScript applications, perfect for complex state logic.',
      'Node.js': 'JavaScript runtime built on Chrome\'s V8 engine for server-side and scalable network applications.',
      'Express.js': 'Minimal and flexible Node.js web application framework for building robust APIs and web applications.',
      'MongoDB': 'NoSQL database with flexible schema design, perfect for handling large volumes of unstructured data.',
      'PostgreSQL': 'Powerful open-source relational database with advanced features and strong data integrity.',
      'Python': 'Versatile programming language known for simplicity, extensive libraries, and applications in various domains.',
      'C': 'Low-level programming language providing direct hardware access and maximum performance for system programming.',
      'C++': 'High-performance programming language combining low-level control with high-level abstractions.',
      'Git': 'Distributed version control system for tracking changes in source code and collaborating with teams.',
      'GitHub': 'Web-based hosting service for Git repositories, enabling code collaboration and project management.',
      'Figma': 'Collaborative interface design tool for creating, prototyping, and sharing user interface designs.',
      'Database': 'Organized collection of structured data for efficient storage, retrieval, and management of information.'
    };
    return descriptions[skillName] || 'A powerful technology in modern software development.';
  };

  return (
    <section className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-[#020617]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Animation Loop - Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl"></div>
          <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl ${isDarkMode ? 'border-teal-500/20 bg-gradient-to-r from-slate-900/50 to-slate-800/50' : 'border-teal-500/30 bg-gradient-to-r from-white/70 to-gray-100/70'}`}>
            <div className="py-8">
              <motion.div
                animate={{
                  x: [0, -100],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 6,
                    ease: "linear",
                  },
                }}
                className="flex space-x-8 whitespace-nowrap"
              >
                {Object.values(skills).flat().map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[140px] ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10 border-teal-500/30 hover:border-teal-400/50 hover:shadow-teal-500/30' : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-300/50 hover:border-teal-400/50 hover:shadow-teal-500/20'}`}>
                        {/* Professional Logo */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Skill Name */}
                        <div className="text-center">
                          <span className={`font-bold text-lg tracking-wide block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </div>
                  );
                })}
                {/* Duplicate for seamless loop */}
                {Object.values(skills).flat().map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={`duplicate-${index}`} className="group relative">
                      <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[140px] ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10 border-teal-500/30 hover:border-teal-400/50 hover:shadow-teal-500/30' : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-300/50 hover:border-teal-400/50 hover:shadow-teal-500/20'}`}>
                        {/* Professional Logo */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Skill Name */}
                        <div className="text-center">
                          <span className={`font-bold text-lg tracking-wide block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="space-y-8"
            >
              {/* Category Title */}
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-white"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(0, 255, 200, 0.8)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category}
                </motion.h3>
                <motion.div 
                  className="flex-1 h-px bg-gradient-to-r from-teal-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorySkills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  const skillId = `${category}-${skillIndex}`;
                  const isVisible = visibleSkills.has(skillId);

                  return (
                    <motion.div
                      key={skill.name}
                      ref={(el) => (skillRefs.current[skillIndex] = el)}
                      data-skill-id={skillId}
                      variants={cardVariants}
                      whileHover={{
                        y: -15,
                        scale: 1.05,
                        rotateX: 5,
                        rotateY: 5,
                        boxShadow: '0 25px 50px rgba(0, 255, 200, 0.25)',
                      }}
                      whileTap={{
                        scale: 0.98,
                        rotateX: -2,
                        rotateY: -2,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="group relative"
                    >
                      {/* Glass Card */}
                      <div className="relative p-6 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {/* Skill Icon */}
                        <motion.div 
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            boxShadow: '0 10px 30px rgba(0, 255, 200, 0.4)',
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Skill Name */}
                        <h4 className="text-white font-semibold text-lg mb-3">
                          {skill.name}
                        </h4>

                        {/* Skill Description */}
                        <motion.div 
                          className="mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <motion.p 
                            className="text-gray-300 text-sm leading-relaxed"
                            whileHover={{ 
                              scale: 1.02,
                              color: '#ffffff',
                              textShadow: '0 0 10px rgba(0, 255, 200, 0.5)'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {getSkillDescription(skill.name)}
                          </motion.p>
                        </motion.div>

                        {/* Enhanced Hover Glow Effect */}
                        <motion.div 
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ 
                            opacity: 1,
                            background: [
                              'radial-gradient(circle at center, rgba(0, 255, 200, 0.1) 0%, transparent 70%)',
                              'radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.2) 0%, transparent 60%)',
                              'radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15) 0%, transparent 65%)',
                              'radial-gradient(circle at center, rgba(0, 255, 200, 0.1) 0%, transparent 70%)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">
            Always learning and expanding my skill set
          </p>
          <div className="flex justify-center space-x-2">
            {['React', 'Node.js', 'TypeScript', 'Next.js'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Animation Loop - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-xl"></div>
          <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl ${isDarkMode ? 'border-blue-500/20 bg-gradient-to-r from-slate-800/50 to-slate-900/50' : 'border-blue-500/30 bg-gradient-to-r from-white/70 to-gray-100/70'}`}>
            <div className="py-8">
              <motion.div
                animate={{
                  x: [-100, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 6,
                    ease: "linear",
                  },
                }}
                className="flex space-x-8 whitespace-nowrap"
              >
                {Object.values(skills).flat().map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={`bottom-${index}`} className="group relative">
                      <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[140px] ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/30' : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-300/50 hover:border-blue-400/50 hover:shadow-blue-500/20'}`}>
                        {/* Professional Logo */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Skill Name */}
                        <div className="text-center">
                          <span className={`font-bold text-lg tracking-wide block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </div>
                  );
                })}
                {/* Duplicate for seamless loop */}
                {Object.values(skills).flat().map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={`bottom-duplicate-${index}`} className="group relative">
                      <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[140px] ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/30' : 'bg-gradient-to-br from-white/80 to-gray-100/80 border-gray-300/50 hover:border-blue-400/50 hover:shadow-blue-500/20'}`}>
                        {/* Professional Logo */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Skill Name */}
                        <div className="text-center">
                          <span className={`font-bold text-lg tracking-wide block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

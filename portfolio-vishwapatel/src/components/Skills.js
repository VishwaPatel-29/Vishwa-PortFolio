import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGitAlt, FaGithub,
  FaFigma, FaDocker, FaAws, FaDatabase, FaCode, FaPalette, FaServer, FaTools
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiRedux, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('frontend');

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

  const skillsData = {
    frontend: {
      title: '💻 Frontend',
      icon: <FaPalette />,
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899, #a855f7)',
      skills: [
        { name: 'React', icon: <FaReact />, emoji: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML5', icon: <FaHtml5 />, emoji: '🎨', color: 'from-orange-400 to-red-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, emoji: '✨', color: 'from-blue-400 to-indigo-500' },
        { name: 'JavaScript', icon: <FaJs />, emoji: '⚡', color: 'from-yellow-400 to-orange-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, emoji: '🌬️', color: 'from-teal-400 to-green-500' },
        { name: 'Express.js', icon: <FaNodeJs />, emoji: '🚂', color: 'from-green-400 to-green-600' }
      ]
    },
    backend: {
      title: '⚙️ Backend',
      icon: <FaServer />,
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899, #a855f7)',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, emoji: '🟢', color: 'from-green-500 to-green-600' },
        { name: 'MongoDB', icon: <SiMongodb />, emoji: '🍃', color: 'from-green-500 to-green-700' },
        { name: 'REST APIs', icon: <FaDatabase />, emoji: '🔌', color: 'from-purple-400 to-purple-600' },
      ]
    },
    tools: {
      title: '🛠️ Tools',
      icon: <FaTools />,
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899, #a855f7)',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, emoji: '📦', color: 'from-red-500 to-orange-500' },
        { name: 'GitHub', icon: <FaGithub />, emoji: '🐙', color: 'from-gray-700 to-gray-900' },
        { name: 'Figma', icon: <FaFigma />, emoji: '🎯', color: 'from-purple-500 to-pink-500' },
        { name: 'VS Code', icon: <FaCode />, emoji: '💻', color: 'from-blue-500 to-blue-700' }
      ]
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const SkillChip = ({ skill, index }) => (
    <motion.div
      key={skill.name}
      variants={skillVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden group cursor-pointer
        bg-gradient-to-r ${skill.color}
        p-4 rounded-2xl shadow-lg
        flex items-center gap-3
        transition-all duration-300
        ${isDarkMode ? 'text-white' : 'text-white'}
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
           style={{ background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)` }} />
      
      {/* Skill content */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="text-2xl">
          {skill.icon}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{skill.name}</span>
          <span className="text-sm opacity-90">{skill.emoji}</span>
        </div>
      </div>

      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-60"
      />
    </motion.div>
  );

  const CategoryCard = ({ category, isActive, onClick }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer p-6 rounded-2xl shadow-xl transition-all duration-300 text-white"
      style={{
        background: category.gradient,
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Active glow effect */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 rounded-2xl"
        />
      )}

      <div className="relative z-10 flex items-center gap-4">
        <div className="text-3xl">
          {category.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{category.title}</h3>
          <p className="text-sm opacity-90">
            {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
          </p>
        </div>
      </div>

      {/* Animated border for active state */}
      {isActive && (
        <motion.div
          layoutId="activeCategory"
          className="absolute inset-0 border-2 border-white rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'} relative overflow-hidden`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <span className="gradient-text">Skills Showcase</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            Interactive skill cards with modern technologies I work with
          </motion.p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {Object.entries(skillsData).map(([key, category]) => (
            <CategoryCard
              key={key}
              category={category}
              isActive={activeCategory === key}
              onClick={() => setActiveCategory(key)}
            />
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData[activeCategory].skills.map((skill, index) => (
              <SkillChip key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

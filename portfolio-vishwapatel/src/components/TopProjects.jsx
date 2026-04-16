import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaSpinner, 
  FaExclamationTriangle, 
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaRocket
} from 'react-icons/fa';

const TopProjects = () => {
  const { isDarkMode } = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Manual repository list
  const manualRepos = [
    {
      name: 'Gen-Z-Website-Tailwind_CSS',
      fullName: 'VishwaPatel-29/Gen-Z-Website-Tailwind_CSS',
      description: 'Modern Gen Z website built with Tailwind CSS featuring responsive design and animations',
      url: 'https://github.com/VishwaPatel-29/Gen-Z-Website-Tailwind_CSS'
    },
    {
      name: 'Frontend_Games',
      fullName: 'VishwaPatel-29/Frontend_Games',
      description: 'Interactive frontend games built with modern web technologies and engaging user interfaces',
      url: 'https://github.com/VishwaPatel-29/Frontend_Games'
    },
    {
      name: 'Website-Clones',
      fullName: 'VishwaPatel-29/Website-Clones',
      description: 'Collection of website clones demonstrating various frontend frameworks and design patterns',
      url: 'https://github.com/VishwaPatel-29/Website-Clones'
    }
  ];

  // Fetch data for each repository
  const fetchRepoData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const repoDataPromises = manualRepos.map(async (repo) => {
        try {
          console.log(`Fetching data for: ${repo.fullName}`);
          const response = await fetch(
            `https://api.github.com/repos/${repo.fullName}`
          );

          if (!response.ok) {
            console.warn(`Failed to fetch ${repo.name}:`, response.status);
            return {
              ...repo,
              stars: 0,
              forks: 0,
              watchers: 0
            };
          }

          const data = await response.json();
          console.log(`Data for ${repo.name}:`, data);
          
          return {
            ...repo,
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0,
            description: data.description || repo.description
          };
        } catch (err) {
          console.error(`Error fetching ${repo.name}:`, err);
          return {
            ...repo,
            stars: 0,
            forks: 0,
            watchers: 0
          };
        }
      });

      const repoData = await Promise.all(repoDataPromises);
      console.log('All repo data:', repoData);
      setProjects(repoData);
    } catch (err) {
      console.error('Error in fetchRepoData:', err);
      setError('Failed to load repository data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-primary mb-4 mx-auto" />
          <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
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
            Failed to load projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={fetchRepoData}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
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
          ? 'bg-gradient-to-br from-slate-900/90 to-gray-800/90 border border-slate-700/50' 
          : 'bg-gradient-to-br from-white/90 to-gray-100/90 border border-gray-300/50'
      } shadow-2xl backdrop-blur-xl`}
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
      >
        <span className="inline-block animate-pulse">{'\ud83c\udfc5'}</span>
        <span className="mx-3">Top Projects</span>
        <span className="inline-block animate-pulse">{'\ud83c\udfc1'}</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2 + index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 15px 30px rgba(99, 102, 241, 0.4)"
            }}
            className={`p-6 rounded-2xl text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-slate-800/80 to-gray-700/80 border border-slate-600/50' 
                  : 'bg-gradient-to-br from-gray-50/80 to-slate-100/80 border border-gray-300/50'
            } shadow-xl backdrop-blur-lg`}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
              className="text-4xl mb-4"
            >
              {'\ud83d\ude80'}
            </motion.div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
              {project.name}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <FaStar className="text-amber-500" />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCodeBranch className="text-blue-500" />
                <span>{project.forks}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye className="text-green-500" />
                <span>{project.watchers}</span>
              </div>
            </div>
            
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg text-sm font-semibold hover:from-gray-700 hover:to-gray-800 transition-all"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Repo
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopProjects;

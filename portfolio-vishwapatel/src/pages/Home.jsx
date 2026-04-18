import React from 'react';
import { useTheme } from '../context/ThemeContext';
import About from '../components/About';
import UniqueSkillsShowcase from '../components/UniqueSkillsShowcase';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import LeetCodeStats from '../components/LeetCodeStats';
import GitHubStats from '../components/GitHubStats';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FigmaDesigns from '../components/FigmaDesigns';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="pt-20">
        <Hero />
        <About />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">My Technical Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my expertise in modern web development technologies. 
              Unique interactive skills universe with dynamic visual effects.
            </p>
          </div>
          
          <div className="relative min-h-[600px] bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <UniqueSkillsShowcase />
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Interactive skills universe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Dynamic visual effects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span>Floating particle animations</span>
              </div>
            </div>
          </div>
        </div>
        <Projects isHomePage={true} />
        <Certificates isHomePage={true} />
        <FigmaDesigns />
        <Education />
        <LeetCodeStats />
        <GitHubStats />
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

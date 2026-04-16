import React from 'react';
import { useTheme } from '../context/ThemeContext';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import LeetCodeStats from '../components/LeetCodeStats';
import GitHubStats from '../components/GitHubStats';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="pt-20">
        <Hero />
        <About />
        <SkillsSection />
        <Projects isHomePage={true} />
        <Certificates isHomePage={true} />
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

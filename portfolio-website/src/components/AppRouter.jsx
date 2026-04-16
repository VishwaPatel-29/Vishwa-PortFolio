import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import AboutPage from '../pages/About';
import SkillsPage from '../pages/Skills';
import EducationPage from '../pages/EducationPage';
import Projects from './Projects';
import Footer from './Footer';
import ProjectsPage from '../pages/ProjectsPage';
import CertificatesPage from '../pages/CertificatesPage';
import ContactPage from '../pages/ContactPage';
import HackathonAchievement from '../pages/HackathonAchievement';
import HackathonStory from '../pages/HackathonStory';
import { ThemeProvider } from '../context/ThemeContext';
import CustomCursor from './CustomCursor';
import '../index.css';

const AppRouterContent = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen transition-colors duration-300 cursor-none">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HackathonAchievement />} />
        <Route path="/hackathon" element={<HackathonAchievement />} />
        <Route path="/hackathon-story" element={<HackathonStory />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <main>
              <Home />
            </main>
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <main>
              <AboutPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/skills" element={
          <>
            <Navbar />
            <main>
              <SkillsPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/education" element={
          <>
            <Navbar />
            <main>
              <EducationPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Navbar />
            <main>
              <ProjectsPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/certificates" element={
          <>
            <Navbar />
            <main>
              <CertificatesPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <main>
              <ContactPage />
            </main>
            <Footer />
          </>
        } />
      </Routes>
      
          </div>
  );
};

const AppRouter = () => {
  // Detect refresh and force redirect to landing page
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      if (window.location.pathname !== "/") {
        sessionStorage.setItem("redirectPath", window.location.pathname);
        window.location.href = "/";
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppRouterContent />
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;

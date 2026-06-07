import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import LandingPage from '../pages/LandingPage';
import SignatureLoader from './SignatureLoader';
import { ThemeProvider } from '../context/ThemeContext';
import CustomCursor from './CustomCursor';
import AIChatWidget from './AIChatWidget';
import '../index.css';

const PopupPageWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 60000); // 60 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return <HackathonAchievement />;
};

const AppRouterContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black transition-colors duration-300 cursor-none">
      <CustomCursor />
      <Routes>
        <Route path="/popuppage" element={<PopupPageWrapper />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/" element={<SignatureLoader onComplete={() => navigate('/popuppage')} />} />
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
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaDownload, FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();

  const resumeData = {
    personalInfo: {
      name: 'Vishwa Patel',
      title: 'Full Stack Developer',
      email: 'vishwa29patel.cg@gmail.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, USA',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      portfolio: 'https://vishwa-patel-portfolio.com'
    },
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science',
        school: 'University of Technology',
        period: '2019 - 2023',
        details: 'Graduated with honors, specializing in Web Development and Machine Learning'
      },
      {
        degree: 'Full Stack Web Development Bootcamp',
        school: 'Tech Academy',
        period: '2023',
        details: 'Intensive 6-month bootcamp covering modern web development technologies'
      }
    ],
    experience: [
      {
        position: 'Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2023 - Present',
        details: [
          'Developed responsive web applications using React and Node.js',
          'Implemented RESTful APIs and database designs',
          'Collaborated with cross-functional teams to deliver projects'
        ]
      },
      {
        position: 'Frontend Developer Intern',
        company: 'Digital Agency',
        period: '2022 - 2023',
        details: [
          'Created interactive user interfaces with modern JavaScript frameworks',
          'Optimized website performance and accessibility',
          'Participated in agile development processes'
        ]
      }
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      tools: ['Git', 'GitHub', 'Figma', 'Docker', 'AWS']
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vishwa_Patel_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDarkMode ? 'bg-dark-card' : 'bg-light-card'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90">
            <h2 className="text-2xl font-bold text-teal">Resume</h2>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium"
              >
                <FaDownload className="w-4 h-4" />
                Download PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8 space-y-8">
            {/* Personal Info */}
            <section className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
              <h1 className="text-4xl font-bold mb-2 gradient-text">{resumeData.personalInfo.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{resumeData.personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4" />
                  {resumeData.personalInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="w-4 h-4" />
                  {resumeData.personalInfo.phone}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  {resumeData.personalInfo.location}
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a href={resumeData.personalInfo.github} className="text-teal hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt className="w-3 h-3" /> GitHub
                </a>
                <a href={resumeData.personalInfo.linkedin} className="text-teal hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt className="w-3 h-3" /> LinkedIn
                </a>
                <a href={resumeData.personalInfo.portfolio} className="text-teal hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt className="w-3 h-3" /> Portfolio
                </a>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-teal" />
                Education
              </h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-teal pl-4">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-teal font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaBriefcase className="text-teal" />
                Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-teal pl-4">
                    <h4 className="font-semibold text-lg">{exp.position}</h4>
                    <p className="text-teal font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                    <ul className="mt-2 space-y-1">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-teal mt-1">»</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaCode className="text-teal" />
                Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.frontend.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.backend.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Resume;

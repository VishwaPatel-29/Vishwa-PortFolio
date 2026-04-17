import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaTimes, FaEye, FaDownload, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import profileImg from '../assets/Professional Mee.jpeg';

const ResumeModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();

  const resumeData = {
    personalInfo: {
      name: 'Vishwa Patel',
      title: 'Full Stack Developer',
      email: 'vishwa29patel.cg@gmail.com',
      phone: '+91 6352839671',
      location: 'Ahmedabad, India',
      github: 'https://github.com/VishwaPatel-29',
      linkedin: 'https://www.linkedin.com/in/vishwa-patel-8664473a0/',
      Youtube: 'https://www.youtube.com/@VishwaPatel-29h'
    },
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science',
        school: 'Shree Swaminarayan University,Kalol',
        period: '2025 - 2029',
        details: 'SGPA: 8.5/10 | Specializing in Web Development and Machine Learning'
      },
      {
        degree: 'Higher Secondary Education',
        school: 'N.V. Patel Vidhyamandir,Naroda',
        period: '2023 - 2025',
        details: 'Completed with distinction in science stream'
      }
    ],
    skills: {
      frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'GraphQL'],
      tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Netlify', 'Vercel'],
      other: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management']
    }
  };

  if (!isOpen) return null;

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
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:scale-110 transition-transform"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Resume Content */}
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-1">
                  <img
                    src={profileImg}
                    alt="Vishwa Patel"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {resumeData.personalInfo.name}
                </h1>
                <p className={`text-xl ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                  {resumeData.personalInfo.title}
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <FaEnvelope className="text-teal-500" />
                  <span className="text-sm">{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaPhone className="text-teal-500" />
                  <span className="text-sm">{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FaMapMarkerAlt className="text-teal-500" />
                  <span className="text-sm">{resumeData.personalInfo.location}</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center space-x-4"
              >
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={resumeData.personalInfo.Youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  YouTube
                </a>
              </motion.div>
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className={`text-2xl font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <FaGraduationCap className="mr-2 text-teal-500" />
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}
                  >
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                      {edu.school} | {edu.period}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            
            {/* Skills Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className={`text-2xl font-bold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <FaCode className="mr-2 text-teal-500" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div
                    key={category}
                    className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}
                  >
                    <h3 className={`font-bold mb-2 capitalize ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded ${
                            isDarkMode
                              ? 'bg-slate-600 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-4 mt-8"
            >
              <button
                onClick={() => window.open('https://vishwa-patel-resume.netlify.app/', '_blank')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                <FaEye className="w-5 h-5" />
                <span>View Full Resume</span>
                <FaExternalLinkAlt className="w-4 h-4" />
              </button>
              
              <button
                onClick={onClose}
                className={`px-6 py-3 border-2 ${
                  isDarkMode 
                    ? 'border-teal-500 text-teal-400 hover:bg-teal-500/20' 
                    : 'border-gray-700 text-gray-700 hover:bg-gray-100'
                } font-semibold rounded-lg transition-colors`}
              >
                Close
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;

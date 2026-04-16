import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import suhacImg from '../assets/SU_Hacathon.jpeg';
import htmlImg from '../assets/HTML SoloLearn Pic.png';
import cssImg from '../assets/CSS SoloLearn Pic.png';
import jsImg from '../assets/JavaScript SoloLearn Pic.png';
import cImg from '../assets/C SoloLearn  Pic.png';
import cppImg from '../assets/C++ Pic.png';

const Certificates = ({ isHomePage = false }) => {
  const { isDarkMode } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
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
    hidden: { y: 50, opacity: 0 },
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

  const certificates = [
    {
      id: 1,
      title: "SU Hacathon 3rd Prize Winner 2026",
      issuer: "Sangam University",
      date: "March 2026",
      credentialId: "AWS-ASA-123456789",
      image: suhacImg,
      description: "Demonstrated expertise in designing distributed systems on AWS. Validated skills in deploying, managing, and operating scalable, highly available, and fault-tolerant systems on AWS.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      verificationUrl: "https://aws.amazon.com/verify/certificate"
    },
    {
      id: 2,
      title: "Completetion of HTML Introduction",
      issuer: "SoloLearn",
      date: "January 2026",
      credentialId: "GCP-PD-987654321",
      image: htmlImg,
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies. Demonstrated expertise in designing, building, testing, and deploying applications.",
      skills: ["HTML"],
      verificationUrl: "https://cloud.google.com/credentials"
    },
    {
      id: 3,
      title: "Completetion of CSS Introduction",
      issuer: "SoloLearn",
      date: "January 2026",
      credentialId: "META-FE-456789123",
      image: cssImg,
      description: "Comprehensive understanding of frontend development principles and practices. Mastered React, HTML, CSS, and JavaScript for creating responsive and interactive web applications.",
      skills: ["CSS"],
      verificationUrl: "https://www.coursera.org/account/accomplishments"
    },
    {
      id: 4,
      title: "Completetion of JavaScript Introduction",
      issuer: "SoloLearn",
      date: "February 2026",
      credentialId: "MONGO-DEV-789123456",
      image: jsImg,
      description: "Demonstrated proficiency in developing applications using MongoDB. Validated skills in data modeling, query optimization, and performance tuning.",
      skills: ["JavaScript"],
      verificationUrl: "https://university.mongodb.com/certificates"
    },
    {
      id: 5,
      title: "Completetion of C Programming Introduction",
      issuer: "SoloLearn",
      date: "January 2026",
      credentialId: "REACT-DEV-321654987",
      image: cImg,
      description: "Advanced knowledge of React ecosystem including hooks, context API, and performance optimization. Expertise in building complex, scalable React applications.",
      skills: ["C Programming"],
      verificationUrl: "https://reacttraining.com/certificates"
    },
    {
      id: 6,
      title: "Completetion of C++ Programming Introduction",
      issuer: "SoloLearn",
      date: "March 2026",
      credentialId: "DOCKER-CA-654987321",
      image: cppImg,
      description: "Validated expertise in containerization and orchestration using Docker. Demonstrated skills in creating, managing, and deploying containerized applications.",
      skills: ["C++ Programming"],
      verificationUrl: "https://www.docker.com/certificates"
    }
  ];

  const CertificateModal = ({ certificate, onClose }) => {
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
            className={`relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              isDarkMode ? 'bg-dark-card' : 'bg-light-card'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="relative">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto rounded-t-2xl"
              />
            </div>

            {/* Certificate Content */}
            <div className="p-6 sm:p-8">
              {/* Title and Issuer */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2 gradient-text">
                  {certificate.title}
                </h2>
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {certificate.issuer}
                  </div>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {certificate.date}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {certificate.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section
      id="certificates"
      className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Certificates & Achievements</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            Professional certifications that validate my expertise and commitment to continuous learning
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(isHomePage ? certificates.slice(0, 3) : certificates).map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                isDarkMode ? 'bg-dark-card' : 'bg-light-card'
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-heading font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {certificate.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>

                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  {certificate.issuer}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {certificate.date}
                  </span>
                  <span className={`text-xs font-mono ${isDarkMode ? 'text-primary' : 'text-primary'}`}>
                    ID: {certificate.credentialId.slice(-8)}
                  </span>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {certificate.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 2 && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      isDarkMode
                        ? 'bg-gray-800 text-gray-500'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      +{certificate.skills.length - 2}
                    </span>
                  )}
                </div>

                {/* View Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Certificates Button - Only on home page */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/certificates')}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <FaAward className="w-5 h-5" />
                <span>View All Certificates</span>
              </div>
            </motion.button>
          </motion.div>
        )}

        {/* Certificate Modal */}
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Certificates;

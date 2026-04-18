import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { sendEmail, validateFormData } from '../services/emailService';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import VP_LOGO from '../assets/VP_LOGO.png';

const Connect = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className={`py-20 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-teal">Connect With Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </motion.p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                isDarkMode ? 'bg-dark-card' : 'bg-light-card'
              } shadow-xl`}
            >
              <h3 className={`text-2xl font-heading font-bold mb-6 text-teal`}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.name
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-gray-600 bg-gray-800 text-white focus-teal'
                        : 'border-gray-300 bg-white text-gray-900 focus-teal'
                    } focus:outline-none`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-gray-600 bg-gray-800 text-white focus-teal'
                        : 'border-gray-300 bg-white text-gray-900 focus-teal'
                    } focus:outline-none`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                      errors.message
                        ? 'border-red-500'
                        : isDarkMode
                        ? 'border-gray-600 bg-gray-800 text-white focus-teal'
                        : 'border-gray-300 bg-white text-gray-900 focus-teal'
                    } focus:outline-none`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 btn-primary font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Success/Error Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-6 p-4 rounded-lg flex items-start space-x-3 ${
                      submitStatus === 'success'
                        ? 'bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/20'
                        : 'bg-red-500/10 border-2 border-red-500/30 shadow-lg shadow-red-500/20'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-primary mb-1">
                            ✅ Message Sent Successfully!
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Thank you for reaching out! Your message has been delivered to my inbox. 
                            I'll get back to you as soon as possible.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <FaExclamationCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-red-600 mb-1">
                            ❌ Message Failed to Send
                          </p>
                          <p className="text-sm text-red-600">
                            {submitMessage || 'Something went wrong. Please try again later.'}
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                isDarkMode ? 'bg-dark-card' : 'bg-light-card'
              } shadow-xl`}
            >
              <h3 className={`text-2xl font-heading font-bold mb-6 text-teal`}>
                Let's Connect
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                Whether you have a project in mind, want to discuss potential collaborations, 
                or just want to say hello, I'd love to hear from you. I'm passionate about 
                creating meaningful digital experiences and am always open to new opportunities.
              </p>

              <div className="space-y-4">
                <div className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center flex-shrink-0 text-white text-lg font-semibold">
                    📧
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm">vishwa29patel.cg@gmail.com</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center flex-shrink-0 text-white text-lg font-semibold">
                    📱
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm">+91 6352839671</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center flex-shrink-0 text-white text-lg font-semibold">
                    📍
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ahmedabad</p>
                    <p className="text-sm">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            
            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-2xl btn-primary shadow-xl`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <h4 className="text-lg font-bold">Available for Work</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                I'm currently open to freelance opportunities and full-time positions. 
                If you're looking for a passionate developer to join your team or work 
                on your project, let's talk!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

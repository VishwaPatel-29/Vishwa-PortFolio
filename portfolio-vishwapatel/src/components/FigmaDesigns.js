import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaExternalLinkAlt, FaFigma, FaTimes, FaEye } from 'react-icons/fa';

const FigmaDesigns = () => {
  const { isDarkMode } = useTheme();
  const [selectedDesign, setSelectedDesign] = useState(null);

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const figmaDesigns = [
    {
      id: 1,
      title: "Hospital Website Design",
      description: "Complete UI/UX design for Hospital website with modern aesthetics and responsive layouts",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%234F46E5' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='Arial' font-size='20'%3EHospital Website%3C/text%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/hZYd1X1avzCBAlVOS64ofv/Hospital-Website?node-id=0-1&t=04kj62c9V8okPVqo-1",
      category: "Web Design"
    },
    {
      id: 2,
      title: "Messaging Mobile App",
      description: "Mobile-first Message application design with user-friendly shopping experience",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%2310B981' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='Arial' font-size='20'%3EMessaging Mobile App%3C/text%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/gwgWrly6jJJCjRg3GvslrE/KBD-Zen?node-id=0-1&t=5Fn7pTp8VgrqEmPv-1",
      category: "Mobile Design"
    },
    {
      id: 3,
      title: "Zirrle Web Design",
      description: "Analytics dashboard design with data visualization components and intuitive navigation",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23F59E0B' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='Arial' font-size='20'%3EZirrle Web%3C/text%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/NtZb9tpi0IrvIkeb2zumDO/Zirrle?node-id=0-1&t=b04EjniEAiJvezVj-1",
      category: "Dashboard Design"
    },
    {
      id: 4,
      title: "Codename Dashboard Design",
      description: "Modern social media platform design with focus on user engagement and content sharing",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23EF4444' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='Arial' font-size='20'%3EDashBoard UI%3C/text%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/sV3QX3B5UrXqsP6uIf24qP/Codename.com?node-id=0-1&t=IDRBJ9lGCK52L0RM-1",
      category: "Dashboard Design"
    }
  ];

  const DesignModal = ({ design, onClose }) => {
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

            {/* Design Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-2">{design.title}</h3>
                <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm rounded-full">
                  {design.category}
                </span>
              </div>
            </div>

            {/* Design Details */}
            <div className="p-6">
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {design.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={design.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                >
                  <FaFigma className="w-5 h-5" />
                  <span>View in Figma</span>
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
                
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Figma Designs
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my UI/UX design work and creative process. Each design showcases 
            modern aesthetics, user-centered thinking, and attention to detail.
          </p>
        </motion.div>

        {/* Designs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {figmaDesigns.map((design) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
              onClick={() => setSelectedDesign(design)}
            >
              {/* Design Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaEye className="w-5 h-5 text-gray-800" />
                    <span className="text-gray-800 font-medium">View Design</span>
                  </div>
                </div>
              </div>

              {/* Design Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs rounded-full">
                    {design.category}
                  </span>
                  <FaFigma className={`w-6 h-6 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {design.title}
                </h3>
                
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.figma.com/files/team/1620350103193972223/recents-and-sharing?fuid=1620350101565123822"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            <FaFigma className="w-5 h-5" />
            <span>View All Figma Designs</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Design Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <DesignModal 
            design={selectedDesign} 
            onClose={() => setSelectedDesign(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FigmaDesigns;

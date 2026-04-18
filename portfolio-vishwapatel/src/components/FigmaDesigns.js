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
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='bg1'%3E%3Cstop offset='0%25' style='stop-color:%236366F1'/%3E%3Cstop offset='100%25' style='stop-color:%233B82F6'/%3E%3C/radialGradient%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='3' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23bg1)' width='400' height='300'/%3E%3Cg transform='translate(200,120)'%3E%3Cpath d='M -80 -40 L 80 -40 L 80 60 L -80 60 Z' fill='white' opacity='0.1'/%3E%3Cpath d='M -70 -30 L 70 -30 L 70 50 L -70 50 Z' fill='white' opacity='0.2'/%3E%3Cpath d='M -60 -20 L 60 -20 L 60 40 L -60 40 Z' fill='white' opacity='0.3'/%3E%3Cg filter='url(%23glow)'%3E%3Cpath d='M -50 -10 Q -40 -20 -30 -10 T -10 -10 T 10 -10 T 30 -10 T 50 -10' stroke='%23FBBF24' stroke-width='3' fill='none'/%3E%3Ccircle cx='0' cy='10' r='25' fill='%2310B981' opacity='0.8'/%3E%3Cpath d='M -15 10 L -5 20 L 15 0' stroke='white' stroke-width='4' fill='none'/%3E%3C/g%3E%3Ctext x='0' y='70' text-anchor='middle' fill='white' font-family='system-ui' font-size='16' font-weight='600'%3EMedical Dashboard%3C/text%3E%3C/g%3E%3Ccircle cx='50' cy='50' r='3' fill='%23FBBF24' opacity='0.6'/%3E%3Ccircle cx='350' cy='250' r='3' fill='%23FBBF24' opacity='0.6'/%3E%3Ccircle cx='80' cy='220' r='2' fill='white' opacity='0.4'/%3E%3Ccircle cx='320' cy='80' r='2' fill='white' opacity='0.4'/%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/hZYd1X1avzCBAlVOS64ofv/Hospital-Website?node-id=0-1&t=04kj62c9V8okPVqo-1",
      category: "Web Design"
    },
    {
      id: 2,
      title: "Messaging Mobile App",
      description: "Mobile-first Message application design with user-friendly shopping experience",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6'/%3E%3Cstop offset='100%25' style='stop-color:%23EC4899'/%3E%3C/linearGradient%3E%3Cpattern id='dots' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='white' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23bg2)' width='400' height='300'/%3E%3Crect fill='url(%23dots)' width='400' height='300'/%3E%3Cg transform='translate(200,130)'%3E%3Cg transform='rotate(-15)'%3E%3Crect x='-45' y='-35' width='90' height='70' fill='white' opacity='0.95' rx='15'/%3E%3Crect x='-40' y='-30' width='80' height='60' fill='%231E293B' rx='12'/%3E%3Ccircle cx='25' cy='-20' r='3' fill='%23EF4444'/%3E%3Crect x='-35' y='-10' width='50' height='4' fill='%234ADE80' rx='2'/%3E%3Crect x='-35' y='-2' width='40' height='4' fill='%2360A5FA' rx='2'/%3E%3Crect x='-35' y='6' width='45' height='4' fill='%23F59E0B' rx='2'/%3E%3Crect x='-35' y='14' width='35' height='4' fill='%238B5CF6' rx='2'/%3E%3Ccircle cx='30' cy='20' r='8' fill='%2310B981'/%3E%3Cpath d='M 27 17 L 30 20 L 33 17' stroke='white' stroke-width='2' fill='none'/%3E%3C/g%3E%3Ctext x='0' y='60' text-anchor='middle' fill='white' font-family='system-ui' font-size='16' font-weight='600'%3EChat Interface%3C/text%3E%3C/g%3E%3Cpath d='M 100 50 Q 150 30 200 50' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M 200 250 Q 250 230 300 250' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/gwgWrly6jJJCjRg3GvslrE/KBD-Zen?node-id=0-1&t=5Fn7pTp8VgrqEmPv-1",
      category: "Mobile Design"
    },
    {
      id: 3,
      title: "Zirrle Web Design",
      description: "Analytics dashboard design with data visualization components and intuitive navigation",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B'/%3E%3Cstop offset='100%25' style='stop-color:%23EAB308'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg3)' width='400' height='300'/%3E%3Cg transform='translate(200,150)'%3E%3Crect x='-80' y='-60' width='160' height='120' fill='white' opacity='0.1' rx='20'/%3E%3Crect x='-70' y='-50' width='140' height='100' fill='white' opacity='0.15' rx='15'/%3E%3Crect x='-60' y='-40' width='120' height='80' fill='white' opacity='0.2' rx='10'/%3E%3Crect x='-50' y='-30' width='100' height='60' fill='white' opacity='0.25' rx='8'/%3E%3Cg transform='translate(0,-10)'%3E%3Crect x='-40' y='0' width='15' height='30' fill='%2310B981' rx='3'/%3E%3Crect x='-20' y='-10' width='15' height='40' fill='%233B82F6' rx='3'/%3E%3Crect x='0' y='5' width='15' height='25' fill='%238B5CF6' rx='3'/%3E%3Crect x='20' y='-15' width='15' height='45' fill='%23EC4899' rx='3'/%3E%3Crect x='40' y='10' width='15' height='20' fill='%23F59E0B' rx='3'/%3E%3C/g%3E%3Cg transform='translate(0,30)'%3E%3Cpath d='M -50 0 L -30 -20 L -10 0 L 10 -20 L 30 0' stroke='white' stroke-width='2' fill='none' opacity='0.6'/%3E%3Ccircle cx='-50' cy='0' r='3' fill='white' opacity='0.8'/%3E%3Ccircle cx='-10' cy='0' r='3' fill='white' opacity='0.8'/%3E%3Ccircle cx='30' cy='0' r='3' fill='white' opacity='0.8'/%3E%3C/g%3E%3Ctext x='0' y='60' text-anchor='middle' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3EAnalytics Dashboard%3C/text%3E%3C/g%3E%3C/svg%3E",
      figmaLink: "https://www.figma.com/design/NtZb9tpi0IrvIkeb2zumDO/Zirrle?node-id=0-1&t=b04EjniEAiJvezVj-1",
      category: "Dashboard Design"
    },
    {
      id: 4,
      title: "Codename Dashboard Design",
      description: "Modern social media platform design with focus on user engagement and content sharing",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EF4444'/%3E%3Cstop offset='50%25' style='stop-color:%23F97316'/%3E%3Cstop offset='100%25' style='stop-color:%23DC2626'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg4)' width='400' height='300'/%3E%3Cg transform='translate(200,130) scale(0.85)'%3E%3Cg transform='rotate(-10)'%3E%3Crect x='-80' y='-40' width='160' height='80' fill='white' opacity='0.08' rx='25'/%3E%3Crect x='-70' y='-30' width='140' height='60' fill='white' opacity='0.12' rx='20'/%3E%3Crect x='-60' y='-20' width='120' height='40' fill='white' opacity='0.16' rx='15'/%3E%3C/g%3E%3Cg transform='translate(0,-30)'%3E%3Ccircle cx='-50' cy='0' r='12' fill='%23EC4899' opacity='0.9'/%3E%3Ccircle cx='-15' cy='0' r='12' fill='%238B5CF6' opacity='0.9'/%3E%3Ccircle cx='20' cy='0' r='12' fill='%233B82F6' opacity='0.9'/%3E%3Ccircle cx='55' cy='0' r='12' fill='%2310B981' opacity='0.9'/%3E%3Cpath d='M -50 0 Q -32 -15 -15 0 T 20 0 T 55 0' stroke='white' stroke-width='2' fill='none' opacity='0.7'/%3E%3C/g%3E%3Cg transform='translate(0,20)'%3E%3Crect x='-60' y='-8' width='120' height='16' fill='white' opacity='0.3' rx='8'/%3E%3Crect x='-50' y='12' width='100' height='12' fill='white' opacity='0.25' rx='6'/%3E%3Crect x='-40' y='32' width='80' height='8' fill='white' opacity='0.2' rx='4'/%3E%3C/g%3E%3Cg transform='translate(0,55)'%3E%3Ccircle cx='-30' cy='0' r='6' fill='white' opacity='0.6'/%3E%3Ccircle cx='-10' cy='0' r='6' fill='white' opacity='0.6'/%3E%3Ccircle cx='10' cy='0' r='6' fill='white' opacity='0.6'/%3E%3Ccircle cx='30' cy='0' r='6' fill='white' opacity='0.6'/%3E%3C/g%3E%3Ctext x='0' y='85' text-anchor='middle' fill='white' font-family='system-ui' font-size='16' font-weight='600'%3ESocial Network%3C/text%3E%3C/g%3E%3C/svg%3E",
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

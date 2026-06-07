import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showRedirectText, setShowRedirectText] = useState(false);

  useEffect(() => {
    // Show redirect text after 6 seconds
    const redirectTextTimer = setTimeout(() => {
      setShowRedirectText(true);
    }, 6000);

    // Redirect to main homepage after 8 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 8000);

    return () => {
      clearTimeout(redirectTextTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  // Split name into individual letters for staggered animation
  const name = "Vishwa Patel";
  const letters = name.split("");

  // Animation variants for letters
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.3,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Glow animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 text-center"
      >
        {/* Name with staggered letter animation */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold relative inline-block">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${letter === ' ' ? 'mx-2' : ''}`}
                style={{
                  background: letter === ' ' ? 'none' : 'linear-gradient(45deg, #00d4cc, #00998c, #085d56)',
                  WebkitBackgroundClip: letter === ' ' ? 'none' : 'text',
                  WebkitTextFillColor: letter === ' ' ? 'white' : 'transparent',
                  backgroundClip: letter === ' ' ? 'none' : 'text',
                  textShadow: letter === ' ' ? 'none' : '0 0 30px rgba(0, 212, 204, 0.5)'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          
          {/* Glow effect behind name */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(0, 212, 204, 0.3) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Subtitle with fade-in animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mt-8 font-light tracking-wide"
        >
          Full Stack Developer
        </motion.p>

        {/* Redirect indicator */}
        {showRedirectText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <div className="flex items-center justify-center space-x-2 text-teal-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-teal-400 border-t-transparent rounded-full"
              />
              <span className="text-lg">Redirecting to portfolio...</span>
            </div>
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
          className="absolute -top-20 -left-20 w-40 h-40 border border-teal-400/20 rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.2, duration: 1, type: "spring" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 border border-teal-400/20 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaStar } from 'react-icons/fa';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hello there! I am Vishwa's Helix AI Assistant.I can Provide Information about Her Skills,Projects and Experience. How may I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Suggested prompts
  const suggestedPrompts = [
    { id: 1, text: "🚀 See Vishwa's Projects", query: "Tell me about Vishwa's projects" },
    { id: 2, text: "💻 What are her skills?", query: "What are Vishwa's skills?" },
    { id: 3, text: "📄 View Resume", query: "Tell me about Vishwa's experience" },
    { id: 4, text: "📬 Contact her", query: "How can I contact Vishwa?" },
    { id: 5, text: "👋 Tell me about Vishwa", query: "Tell me about Vishwa" }
  ];

  // Portfolio data for AI responses
  const portfolioData = {
    name: "Vishwa Patel",
    role: "Full Stack Developer",
    skills: {
      frontend: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Next.js"],
      backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL"],
      tools: ["Git", "VS Code", "Figma", "Postman", "Docker", "AWS"]
    },
    projects: [
      {
        name: "Portfolio Website",
        description: "Modern portfolio website with React, Framer Motion animations, and glassmorphism design",
        tech: ["React", "Framer Motion", "Tailwind CSS", "React Router"]
      },
      {
        name: "Website Clones",
        description: "Built high-quality clones of popular websites to demonstrate frontend skills",
        tech: ["HTML5", "CSS3"]
      },
      {
        name: "Frontend Games",
        description: "Interactive browser-based games with smooth animations and user interactions",
        tech: ["HTML","CSS","JavaScript"]
      },
      {
        name: "Gen-Z Website",
        description: "Trendy website targeting Gen-Z audience with modern design principles",
        tech: ["React JS", "Tailwind CSS", "Framer Motion"]
      }
    ],
    contact: {
      email: "vishwa29patel.cg@gmail.com",
      github: "https://github.com/VishwaPatel-29",
      location: "Ahmedabad, Gujarat, India"
    }
  };

  // Professional AI response logic
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // Check for praise/compliments
    if (message.includes('great') || message.includes('amazing') || message.includes('excellent') || message.includes('good') || message.includes('awesome')) {
      return "Thank you for your feedback. Vishwa Patel is a Full Stack Developer with strong expertise in React, Node.js, and modern web technologies, focused on building scalable and user-friendly applications.";
    }
    
    // Greetings
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello! I'm Vishwa's Helix AI, here to provide you with detailed information about Vishwa Patel's professional background and technical expertise. What would you like to know?";
    }
    
    // About
    if (message.includes('about') || message.includes('who') || message.includes('vishwa')) {
      return "Vishwa Patel is a Full Stack Developer specializing in React, Node.js, MongoDB, and Express. She focuses on building modern, responsive, and performance-driven web applications with a strong emphasis on user experience.";
    }
    
    // Skills
    if (message.includes('skills') || message.includes('tech') || message.includes('technologies')) {
      return `Vishwa's Technical Expertise:\n\n**Frontend Development:**\n• React, JavaScript, TypeScript\n• Tailwind CSS, HTML5, CSS3\n• Next.js, Responsive Design\n\n**Backend Development:**\n• Node.js, Express.js, MongoDB\n• REST APIs, GraphQL\n• Database Architecture\n\n**Development Tools:**\n• Git, GitHub, VS Code\n• Figma, Postman, Docker\n• AWS, CI/CD Pipelines\n\nHer primary focus is on creating efficient, scalable solutions with modern JavaScript ecosystems.`;
    }
    
    // Projects
    if (message.includes('projects') || message.includes('work') || message.includes('portfolio')) {
      return `Vishwa's Key Projects:\n\n**Gen-Z Website**\n• Modern, trendy design targeting Gen-Z audience\n• Technologies: React, Tailwind CSS, Framer Motion\n\n**Frontend Games Collection**\n• Interactive browser-based games\n• Technologies: JavaScript, Canvas API, CSS Animations\n\n**Website Clones**\n• High-quality reproductions of popular platforms\n• Technologies: HTML5, CSS3, JavaScript\n\n**Portfolio Website**\n• Professional showcase with advanced animations\n• Technologies: React, Framer Motion, Glassmorphism\n\nYou can explore her complete work at: https://github.com/VishwaPatel-29`;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('github')) {
      return "You can connect with Vishwa Patel through her GitHub profile for collaboration opportunities, or reach out via her portfolio contact section for professional inquiries.";
    }
    
    // Experience/Resume
    if (message.includes('experience') || message.includes('background') || message.includes('resume')) {
      return "Vishwa Patel is a dedicated Full Stack Developer with comprehensive experience building modern web applications. She specializes in React-based architectures and has successfully delivered projects ranging from interactive platforms to enterprise-grade solutions, with a consistent focus on performance and user experience.";
    }
    
    // Default professional response
    return "I can provide detailed information about Vishwa Patel's professional background, technical skills, project portfolio, or contact details for collaboration opportunities. What specific aspect would you like to explore?";
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);

    return () => {
      observer.disconnect();
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkTheme);
    };
  }, []);

  // Focus input when chat opens and reset suggestions
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
      // Reset suggestions when chat opens
      if (messages.length > 1) {
        setShowSuggestions(false);
      } else {
        setShowSuggestions(true);
      }
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        text: generateAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.query);
    setShowSuggestions(false);
    
    // Auto-send the suggestion
    setTimeout(() => {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: suggestion.query,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          text: generateAIResponse(suggestion.query),
          timestamp: new Date()
        };

        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }, 100);
  };

  // Hide suggestions when user starts typing
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  // SuggestionChip component
  const SuggestionChip = ({ suggestion, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 300
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 153, 140, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleSuggestionClick(suggestion)}
      className={`px-4 py-2 backdrop-blur-xl border border-[#00998c]/30 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap transition-all duration-300 ${
        isDarkMode 
          ? 'bg-white/10 text-white hover:bg-white/20 hover:border-[#00998c]/50'
          : 'bg-white/80 text-gray-800 hover:bg-gray-100 hover:border-[#00998c]/60'
      }`}
    >
      {suggestion.text}
    </motion.div>
  );

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9999]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            boxShadow: isDarkMode ? "0 0 30px rgba(0, 153, 140, 0.6)" : "0 0 30px rgba(0, 153, 140, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className={`w-14 h-14 rounded-full bg-gradient-to-r flex items-center justify-center text-white shadow-lg relative overflow-hidden ${
            isDarkMode ? 'from-[#00998c] to-[#085d56]' : 'from-[#00998c] to-[#007a70]'
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00998c] to-[#085d56] opacity-75 blur-md animate-pulse"></div>
          <div className="relative w-full h-full rounded-full bg-black/80 backdrop-blur-xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 180, scale: 1 }}
                  exit={{ rotate: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="robot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaRobot className="w-7 h-7 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0,
              rotateY: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: 5,
              rotateY: -5
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.4
            }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[80vh] z-[9998] md:w-96 md:h-[600px] sm:w-[calc(100vw-2rem)] sm:h-[calc(100vh-8rem)] xs:w-[calc(100vw-1rem)] xs:h-[calc(100vh-6rem)]"
          >
            {/* Chat Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode 
                  ? 'from-[#00998c]/20 via-black/90 to-[#085d56]/20' 
                  : 'from-[#00998c]/10 via-white/95 to-[#007a70]/10'
              }`}>
                <div className={`absolute inset-0 backdrop-blur-xl ${
                  isDarkMode ? 'bg-black/40' : 'bg-white/60'
                }`}></div>
                
                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(0, 153, 140, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 50%, rgba(0, 153, 140, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 20%, rgba(0, 153, 140, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 80%, rgba(0, 153, 140, 0.3) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(0, 153, 140, 0.3) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Chat Content */}
              <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="relative px-6 py-4 border-b border-white/10 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00998c] to-[#085d56] flex items-center justify-center"
                      >
                        <FaRobot className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-semibold flex items-center gap-2">
                          Vishwa's Helix AI
                          <FaStar className="w-3 h-3 text-[#00998c] animate-pulse" />
                        </h3>
                        <p className="text-gray-400 text-xs">Professional Information Assistant</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaTimes className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-[#00998c]/20 scrollbar-track-transparent">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`flex items-end space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                              : 'bg-gradient-to-r from-[#00998c] to-[#085d56]'
                          }`}>
                            {message.type === 'user' ? (
                              <FaUser className="w-4 h-4 text-white" />
                            ) : (
                              <FaRobot className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                              message.type === 'user'
                                ? isDarkMode 
                                  ? 'bg-gradient-to-r from-[#00998c] to-[#085d56] text-white ml-auto'
                                  : 'bg-gradient-to-r from-[#00998c] to-[#007a70] text-white ml-auto'
                                : isDarkMode
                                  ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                                  : 'bg-gray-100/90 backdrop-blur-xl border border-gray-300/50 text-gray-800'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                            <p className="text-xs opacity-60 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00998c] to-[#085d56] flex items-center justify-center">
                          <FaRobot className="w-4 h-4 text-white" />
                        </div>
                        <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-[#00998c] rounded-full"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Prompts */}
                <AnimatePresence>
                  {showSuggestions && messages.length === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-3 border-b border-white/10 backdrop-blur-xl"
                    >
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                        {suggestedPrompts.map((suggestion, index) => (
                          <SuggestionChip 
                            key={suggestion.id} 
                            suggestion={suggestion} 
                            index={index} 
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input Area */}
                <div className={`relative px-4 py-4 border-t backdrop-blur-xl ${
                  isDarkMode ? 'border-white/10' : 'border-gray-300/50'
                }`}>
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Vishwa..."
                      className={`flex-1 px-4 py-3 backdrop-blur-xl border rounded-full focus:outline-none focus:ring-2 transition-all ${
                        isDarkMode 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00998c]/50 focus:ring-[#00998c]/20'
                          : 'bg-white/80 border-gray-300/50 text-gray-800 placeholder-gray-500 focus:border-[#00998c]/60 focus:ring-[#00998c]/20'
                      }`}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-white shadow-lg ${
                        isDarkMode 
                          ? 'from-[#00998c] to-[#085d56]' 
                          : 'from-[#00998c] to-[#007a70]'
                      }`}
                    >
                      <FaPaperPlane className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;

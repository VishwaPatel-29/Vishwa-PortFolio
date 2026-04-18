import React, { useState, useEffect } from 'react';

const UniqueSkillsShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [floatingSkills, setFloatingSkills] = useState([]);

  const skills = [
    // Frontend Skills
    { name: 'React', icon: 'react', emoji: 'React', color: '#61DAFB', category: 'frontend' },
    { name: 'JavaScript', icon: 'js', emoji: 'JS', color: '#F7DF1E', category: 'frontend' },
        { name: 'HTML5', icon: 'html', emoji: 'HTML', color: '#E34C26', category: 'frontend' },
    { name: 'CSS3', icon: 'css', emoji: 'CSS', color: '#1572B6', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', emoji: 'Tailwind', color: '#06B6D4', category: 'frontend' },
    
    // Backend Skills
    { name: 'Node.js', icon: 'node', emoji: 'Node', color: '#339933', category: 'backend' },
    { name: 'Express.js', icon: 'express', emoji: 'Express', color: '#68A063', category: 'backend' },
    { name: 'MongoDB', icon: 'mongo', emoji: 'MongoDB', color: '#47A248', category: 'backend' },
    { name: 'REST APIs', icon: 'api', emoji: 'API', color: '#02569B', category: 'backend' },
    
    // Programming Languages
    { name: 'C Language', icon: 'c', emoji: 'C', color: '#A8B9CC', category: 'languages' },
    { name: 'C++ Language', icon: 'cpp', emoji: 'C++', color: '#00599C', category: 'languages' },
    
    // Tools Skills
    { name: 'Git', icon: 'git', emoji: 'Git', color: '#F05032', category: 'tools' },
    { name: 'GitHub', icon: 'github', emoji: 'GitHub', color: '#4078C0', category: 'tools' },
    { name: 'VS Code', icon: 'vscode', emoji: 'VSCode', color: '#007ACC', category: 'tools' },
    { name: 'Figma', icon: 'figma', emoji: 'Figma', color: '#F24E1E', category: 'tools' },
    { name: 'Postman', icon: 'postman', emoji: 'Postman', color: '#FF6C37', category: 'tools' },
    { name: 'Netlify', icon: 'netlify', emoji: 'Netlify', color: '#00C7B7', category: 'tools' },
    { name: 'Vercel', icon: 'vercel', emoji: 'Vercel', color: '#FFFFFF', category: 'tools' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingSkills(prev => {
        const newSkills = [...prev];
        if (newSkills.length < 8) {
          const randomSkill = skills[Math.floor(Math.random() * skills.length)];
          newSkills.push({
            ...randomSkill,
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            size: Math.random() * 30 + 20,
            rotation: Math.random() * 360
          });
        }
        return newSkills.slice(-8);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getIconPath = (icon) => {
    const icons = {
      // Frontend Icons
      react: 'M18.5 0C12.5 0 7.9 3.6 5.6 6.8C3.3 10 2.3 13.1 2.3 13.1L0 13.1L0 18.5L2.3 18.5C2.3 18.5 3.3 21.6 5.6 24.8C7.9 28 12.5 31.6 18.5 31.6C24.5 31.6 29.1 28 31.4 24.8C33.7 21.6 34.7 18.5 34.7 18.5L37 18.5L37 13.1L34.7 13.1C34.7 13.1 33.7 10 31.4 6.8C29.1 3.6 24.5 0 18.5 0ZM18.5 2.3C23.5 2.3 27.3 5.3 29.2 8.1C31.1 10.9 31.8 13.1 31.8 13.1L5.2 13.1C5.2 13.1 5.9 10.9 7.8 8.1C9.7 5.3 13.5 2.3 18.5 2.3ZM18.5 29.3C13.5 29.3 9.7 26.3 7.8 23.5C5.9 20.7 5.2 18.5 5.2 18.5L31.8 18.5C31.8 18.5 31.1 20.7 29.2 23.5C27.3 26.3 23.5 29.3 18.5 29.3Z',
      js: 'M0 0L32 0L32 32L0 32ZM15.9 2.7C15.8 2.7 15.6 2.7 15.5 2.7C15.3 2.7 15.1 2.7 14.9 2.7C14.7 2.7 14.5 2.7 14.3 2.7C14.1 2.7 13.9 2.7 13.7 2.7C13.5 2.7 13.3 2.7 13.1 2.7C12.9 2.7 12.7 2.7 12.5 2.7C12.3 2.7 12.1 2.7 11.9 2.7C11.7 2.7 11.5 2.7 11.3 2.7C11.1 2.7 10.9 2.7 10.7 2.7C10.5 2.7 10.3 2.7 10.1 2.7C9.9 2.7 9.7 2.7 9.5 2.7C9.3 2.7 9.1 2.7 8.9 2.7C8.7 2.7 8.5 2.7 8.3 2.7C8.1 2.7 7.9 2.7 7.7 2.7C7.5 2.7 7.3 2.7 7.1 2.7C6.9 2.7 6.7 2.7 6.5 2.7C6.3 2.7 6.1 2.7 5.9 2.7C5.7 2.7 5.5 2.7 5.3 2.7C5.1 2.7 4.9 2.7 4.7 2.7C4.5 2.7 4.3 2.7 4.1 2.7C3.9 2.7 3.7 2.7 3.5 2.7C3.3 2.7 3.1 2.7 2.9 2.7C2.7 2.7 2.5 2.7 2.3 2.7C2.1 2.7 1.9 2.7 1.7 2.7C1.5 2.7 1.3 2.7 1.1 2.7C0.9 2.7 0.7 2.7 0.5 2.7C0.3 2.7 0.1 2.7 0 2.7Z',
      ts: 'M0 0L32 0L32 32L0 32ZM16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4Z',
      html: 'M0 0L32 32L0 32ZM0 2L30 2L30 30L0 30ZM2 4L28 4L28 28L2 28Z',
      css: 'M0 0L32 0L32 32L0 32ZM2 2L30 2L30 30L2 30ZM4 4L28 4L28 28L4 28Z',
      tailwind: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      bootstrap: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      
      // Backend Icons
      node: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      express: 'M0 0L32 0L32 32L0 32ZM2 2L30 2L30 30L2 30Z',
      mongo: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      mysql: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      api: 'M0 0L32 0L32 32L0 32ZM2 2L30 2L30 30L2 30Z',
      graphql: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      
      // Tools Icons
      git: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      github: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      vscode: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      figma: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      postman: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      netlify: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      vercel: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      
      // Other Skills Icons
      problem: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      team: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      communication: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z',
      time: 'M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z'
    };
    return icons[icon] || icons.js;
  };

  return (
    <div className="relative w-full min-h-screen flex items-start justify-center overflow-visible py-8">
      {/* Floating Background Skills */}
      <div className="absolute inset-0">
        {floatingSkills.map((skill, index) => (
          <div
            key={skill.id}
            className="absolute transition-all duration-1000 ease-in-out"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              transform: `rotate(${skill.rotation}deg)`,
              fontSize: `${skill.size}px`,
              opacity: 0.1,
              color: skill.color
            }}
          >
            {skill.emoji}
          </div>
        ))}
      </div>

      {/* Main Skills Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Skills Universe
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 transform transition-all duration-300 hover:scale-105 hover:rotate-3 cursor-pointer border border-gray-700 hover:border-gray-600">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}33 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Skill Icon */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div 
                    style={{
                      fontSize: '18px',
                      color: skill.color,
                      fontWeight: 'bold',
                      textShadow: `0 0 10px ${skill.color}66`,
                      transform: 'scale(1.2)',
                      transition: 'transform 0.3s ease'
                    }}
                    className="transform transition-transform duration-300 group-hover:scale-125"
                  >
                    {skill.emoji}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium" 
                     style={{ backgroundColor: `${skill.color}22`, color: skill.color }}>
                  {skill.category}
                </div>
              </div>
              
              {/* Skill Name */}
              <div className="mt-3 text-center">
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Skill Detail */}
        {activeSkill && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl z-50 max-w-md">
            <div className="flex items-center space-x-4">
              <div 
                style={{
                  fontSize: '32px',
                  color: activeSkill.color,
                  fontWeight: 'bold',
                  textShadow: `0 0 15px ${activeSkill.color}66`,
                  transform: 'scale(1.2)',
                  minWidth: '48px',
                  textAlign: 'center'
                }}
              >
                {activeSkill.emoji}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
                <p className="text-gray-400 text-sm">Category: {activeSkill.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UniqueSkillsShowcase;

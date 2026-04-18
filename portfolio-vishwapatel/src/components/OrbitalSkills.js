import React, { useState, useEffect, useRef } from 'react';

// Add CSS animation for rotation
const style = document.createElement('style');
style.textContent = `
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;
if (!document.head.querySelector('style[data-orbital-skills]')) {
  style.setAttribute('data-orbital-skills', 'true');
  document.head.appendChild(style);
}

// Skills data distributed equally in 2 layers (8 skills each)
const skillsData = [
  // Layer 1 - Frontend & Core Skills (8 skills)
  { 
    name: 'HTML', 
    description: 'Semantic HTML5 markup, accessibility standards, and modern web structure',
    level: 'Expert',
    experience: '10+ months',
    layer: 1,
    icon: 'HTML'
  },
  { 
    name: 'CSS', 
    description: 'Advanced CSS3, animations, responsive design, and modern styling techniques',
    level: 'Expert',
    experience: '10+ months',
    layer: 1,
    icon: 'CSS'
  },
  { 
    name: 'JS', 
    description: 'Modern JavaScript ES6+, async programming, DOM manipulation, and frameworks',
    level: 'Expert',
    experience: '10+ months',
    layer: 1,
    icon: 'JS'
  },
  { 
    name: 'React JS', 
    description: 'Advanced React development with hooks, context, performance optimization',
    level: 'Expert',
    experience: '3+ months',
    layer: 1,
    icon: 'React'
  },
  { 
    name: 'Tailwind CSS', 
    description: 'Utility-first CSS framework, responsive design, and rapid UI development',
    level: 'Advanced',
    experience: '3+ months',
    layer: 1,
    icon: 'Tailwind'
  },
  { 
    name: 'Node JS', 
    description: 'Server-side JavaScript runtime, event-driven architecture, and microservices',
    level: 'Advanced',
    experience: '2+ months',
    layer: 1,
    icon: 'Node'
  },
  { 
    name: 'Express JS', 
    description: 'Node.js web framework, REST API development, and middleware integration',
    level: 'Advanced',
    experience: '3+ months',
    layer: 1,
    icon: 'Express'
  },
  { 
    name: 'MongoDB', 
    description: 'NoSQL database design, aggregation pipelines, and performance optimization',
    level: 'Advanced',
    experience: '4+ months',
    layer: 1,
    icon: 'Mongo'
  },
  
  // Layer 2 - Tools & Advanced Skills (8 skills)
  { 
    name: 'REST APIs', 
    description: 'RESTful API design, HTTP methods, status codes, and API documentation',
    level: 'Advanced',
    experience: '8+ months',
    layer: 2,
    icon: 'API'
  },
  { 
    name: 'Redis', 
    description: 'In-memory data structure store, caching strategies, and session management',
    level: 'Intermediate',
    experience: '1 month',
    layer: 2,
    icon: 'Redis'
  },
  { 
    name: 'Vercel', 
    description: 'Deployment platform, serverless functions, performance optimization',
    level: 'Intermediate',
    experience: '1 month',
    layer: 2,
    icon: 'Vercel'
  },
  { 
    name: 'Git', 
    description: 'Version control, branching strategies, collaborative development, and CI/CD',
    level: 'Advanced',
    experience: '10+ months',
    layer: 2,
    icon: 'Git'
  },
  { 
    name: 'GitHub', 
    description: 'Git hosting, collaboration, code review, and repository management',
    level: 'Advanced',
    experience: '10+ months',
    layer: 2,
    icon: 'GitHub'
  },
  { 
    name: 'VS Code', 
    description: 'Code editing, extensions, debugging, and development workflow optimization',
    level: 'Expert',
    experience: '10+ months',
    layer: 2,
    icon: 'VSCode'
  },
  { 
    name: 'Postman', 
    description: 'API testing, documentation, automation, and development workflow',
    level: 'Advanced',
    experience: '6+ months',
    layer: 2,
    icon: 'Postman'
  },
  { 
    name: 'NPM', 
    description: 'Package management, dependency handling, and build automation',
    level: 'Advanced',
    experience: '2 months',
    layer: 2,
    icon: 'NPM'
  }
];

// Centered 2-layer orbital skill component
function OrbitalSkill({ skill, index, layerSkills, hoveredSkill, setHoveredSkill }) {
  const [angle, setAngle] = useState((index * 360) / layerSkills.length);
  const orbitSpeed = 0.5 + (skill.layer * 0.2);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + orbitSpeed) % 360);
    }, 60);
    
    return () => clearInterval(interval);
  }, [orbitSpeed]);
  
  // Centered 2-layer arrangement aligned with SVG coordinate system
  const radius = skill.layer === 1 ? 120 : 200;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  
  const isHovered = hoveredSkill?.name === skill.name;
  
  // Professional color scheme
  const getSkillColor = (skillName) => {
    const colors = {
      'HTML': '#E34C26',
      'CSS': '#1572B6', 
      'JS': '#F7DF1E',
      'React JS': '#61DAFB',
      'Tailwind CSS': '#06B6D4',
      'Node JS': '#339933',
      'Express JS': '#000000',
      'MongoDB': '#47A248',
      'REST APIs': '#02569B',
      'Redis': '#DC382D',
      'Vercel': '#000000',
      'Git': '#F05032',
      'GitHub': '#181717',
      'VS Code': '#007ACC',
      'Postman': '#FF6C37',
      'NPM': '#CB3837'
    };
    return colors[skillName] || '#64748b';
  };
  
  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer transition-all duration-300"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isHovered ? 1.2 : 1})`,
        opacity: hoveredSkill && hoveredSkill.name !== skill.name ? 0.3 : 1,
        zIndex: isHovered ? 20 : skill.layer * 10,
      }}
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        style={{
          backgroundColor: `${getSkillColor(skill.name)}20`,
          boxShadow: isHovered 
            ? `0 10px 40px ${getSkillColor(skill.name)}40, 0 0 0 1px ${getSkillColor(skill.name)}30`
            : `0 4px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)`
        }}
      >
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${getSkillColor(skill.name)}30 0%, transparent 50%)`,
          }}
        />
        <span className="text-white font-bold text-xs relative z-10">
          {skill.icon}
        </span>
        
        {/* Hover effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-xl animate-pulse"
            style={{
              background: `radial-gradient(circle, ${getSkillColor(skill.name)}40 0%, transparent 70%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}

// Centered 2-layer connection lines
function ConnectionLines({ hoveredSkill }) {
  const getSkillColor = (skillName) => {
    const colors = {
      'HTML': '#E34C26',
      'CSS': '#1572B6', 
      'JS': '#F7DF1E',
      'React JS': '#61DAFB',
      'Tailwind CSS': '#06B6D4',
      'Node JS': '#339933',
      'Express JS': '#000000',
      'MongoDB': '#47A248',
      'REST APIs': '#02569B',
      'Redis': '#DC382D',
      'Vercel': '#000000',
      'Git': '#F05032',
      'GitHub': '#181717',
      'VS Code': '#007ACC',
      'Postman': '#FF6C37',
      'NPM': '#CB3837'
    };
    return colors[skillName] || '#64748b';
  };
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
      {skillsData.map((skill, index) => {
        const layerSkills = skillsData.filter(s => s.layer === skill.layer);
        const skillIndex = layerSkills.findIndex(s => s.name === skill.name);
        const angle = (skillIndex * 360) / layerSkills.length;
        const radius = skill.layer === 1 ? 120 : 200;
        const x = Math.cos((angle * Math.PI) / 180) * radius + 300;
        const y = Math.sin((angle * Math.PI) / 180) * radius + 300;
        
        return (
          <line
            key={skill.name}
            x1="300"
            y1="300"
            x2={x}
            y2={y}
            stroke={hoveredSkill?.name === skill.name ? getSkillColor(skill.name) : '#ffffff'}
            strokeWidth={hoveredSkill?.name === skill.name ? "2" : "1"}
            strokeOpacity={hoveredSkill?.name === skill.name ? "0.6" : "0.1"}
            strokeDasharray={hoveredSkill?.name === skill.name ? "none" : "5,5"}
            className={hoveredSkill?.name === skill.name ? "animate-pulse" : ""}
          />
        );
      })}
    </svg>
  );
}

// Professional center hub
function CenterHub({ hoveredSkill }) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotate 30s linear infinite',
      }}
    >
      <div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          boxShadow: hoveredSkill 
            ? '0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.1)'
            : '0 10px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.05)'
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(168,85,247,0.1) 50%, rgba(20,184,166,0.1) 100%)',
          }}
        />
        <span className="text-white font-bold text-sm relative z-10 tracking-wide">
          SKILLS
        </span>
        
        {/* Professional center decoration */}
        <div
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}

// Professional skill detail panel
function SkillDetailPanel({ skill, isVisible }) {
  const getSkillColor = (skillName) => {
    const colors = {
      'HTML': '#E34C26',
      'CSS': '#1572B6', 
      'JS': '#F7DF1E',
      'React JS': '#61DAFB',
      'Tailwind CSS': '#06B6D4',
      'Figma': '#F24E1E',
      'Node JS': '#339933',
      'Express JS': '#000000',
      'REST APIs': '#02569B',
      'MongoDB': '#47A248',
      'Redis': '#DC382D',
      'Vercel': '#000000',
      'Git': '#F05032',
      'GitHub': '#181717',
      'VS Code': '#007ACC',
      'Postman': '#FF6C37',
      'NPM': '#CB3837'
    };
    return colors[skillName] || '#64748b';
  };
  
  if (!isVisible || !skill) return null;
  
  return (
    <div
      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-80 backdrop-blur-xl rounded-2xl p-6 z-50 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate(-50%, ${isVisible ? '0' : '20px'}) scale(${isVisible ? 1 : 0.9})`,
        background: 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.95) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.05)'
      }}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div 
            className="w-4 h-4 rounded-full shadow-lg"
            style={{ 
              backgroundColor: getSkillColor(skill.name),
              boxShadow: `0 0 20px ${getSkillColor(skill.name)}40`
            }}
          />
          <h3 className="text-2xl font-bold text-white tracking-tight">{skill.name}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-3">
            <span className="text-gray-400 text-xs font-medium block">Level</span>
            <span className="text-white font-semibold text-sm block mt-1">{skill.level}</span>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <span className="text-gray-400 text-xs font-medium block">Experience</span>
            <span className="text-white font-semibold text-sm block mt-1">{skill.experience}</span>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs font-medium">Proficiency</span>
            <span className="text-white font-semibold text-xs">
              {skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '50%'}
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-500 ease-out rounded-full"
              style={{ 
                width: skill.level === 'Expert' ? '90%' : 
                       skill.level === 'Advanced' ? '75%' : '50%',
                backgroundColor: getSkillColor(skill.name),
                boxShadow: `0 0 10px ${getSkillColor(skill.name)}40`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Centered 2-layer main component
const OrbitalSkills = ({ className = "" }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  
  // Group skills equally into 2 layers (8 skills each)
  const layer1Skills = skillsData.filter(skill => skill.layer === 1); // 8 skills
  const layer2Skills = skillsData.filter(skill => skill.layer === 2); // 8 skills
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full orbital-skills-container overflow-hidden ${className} sm:min-h-[600px] md:min-h-[700px] lg:min-h-[700px]`}
      style={{ 
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* SVG wrapper for proper scaling */}
      <div 
        className="absolute inset-0 flex items-center justify-center w-full h-full max-w-[600px] max-h-[600px] mx-auto scale-75 sm:scale-90 md:scale-100"
      >
        {/* Equal 2-layer connection lines */}
        <ConnectionLines hoveredSkill={hoveredSkill} />
      </div>
      
      {/* Professional center hub */}
      <CenterHub hoveredSkill={hoveredSkill} />
      
      {/* Layer 1 - Inner circle (8 skills) */}
      {layer1Skills.map((skill, index) => (
        <OrbitalSkill
          key={skill.name}
          skill={skill}
          index={index}
          layerSkills={layer1Skills}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}
      
      {/* Layer 2 - Outer circle (8 skills) */}
      {layer2Skills.map((skill, index) => (
        <OrbitalSkill
          key={skill.name}
          skill={skill}
          index={index}
          layerSkills={layer2Skills}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}
      
      {/* Professional skill detail panel */}
      <SkillDetailPanel
        skill={hoveredSkill}
        isVisible={!!hoveredSkill}
      />
      
      {/* Professional instructions */}
      {!hoveredSkill && (
        <div className="absolute bottom-4 left-4 text-white/80 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 shadow-lg">
          <p className="font-medium">Hover over any skill to see details</p>
        </div>
      )}
    </div>
  );
};

export default OrbitalSkills;

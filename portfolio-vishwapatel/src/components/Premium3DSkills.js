import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Skills data organized in 3 layers
const skillsData = {
  layer1: [
    { name: 'HTML', category: 'Frontend', level: 'Expert', color: '#E34C26' },
    { name: 'CSS', category: 'Frontend', level: 'Expert', color: '#1572B6' },
    { name: 'JavaScript', category: 'Frontend', level: 'Expert', color: '#F7DF1E' },
    { name: 'React', category: 'Frontend', level: 'Advanced', color: '#61DAFB' },
    { name: 'Tailwind', category: 'Frontend', level: 'Advanced', color: '#06B6D4' }
  ],
  layer2: [
    { name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
    { name: 'Express', category: 'Backend', level: 'Advanced', color: '#000000' },
    { name: 'MongoDB', category: 'Backend', level: 'Advanced', color: '#47A248' },
    { name: 'REST API', category: 'Backend', level: 'Expert', color: '#02569B' },
    { name: 'Firebase', category: 'Backend', level: 'Intermediate', color: '#FFCA28' }
  ],
  layer3: [
    { name: 'Git', category: 'Tools', level: 'Advanced', color: '#F05032' },
    { name: 'GitHub', category: 'Tools', level: 'Advanced', color: '#181717' },
        { name: 'Python', category: 'Programming', level: 'Intermediate', color: '#3776AB' },
    { name: 'C++', category: 'Programming', level: 'Intermediate', color: '#00599C' },
    { name: 'C', category: 'Programming', level: 'Advanced', color: '#A8B9CC' }
  ]
};

// Individual skill component
function SkillNode({ skill, index, totalSkills, radius, speed, direction, hoveredSkill, setHoveredSkill }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Calculate position in orbit
  const angle = (index / totalSkills) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Orbital rotation
      const time = state.clock.getElapsedTime();
      const rotationSpeed = speed * (direction === 'clockwise' ? 1 : -1);
      meshRef.current.rotation.y = angle + time * rotationSpeed;
      
      // Z-axis floating
      meshRef.current.position.z = z + Math.sin(time * 2 + index) * 0.2;
      
      // Hover effect
      if (hovered) {
        meshRef.current.position.x = x + Math.sin(time * 4) * 0.1;
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.position.x = x;
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });
  
  const isHovered = hoveredSkill?.name === skill.name;
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={[x, 0, z]}
        onPointerOver={() => {
          setHovered(true);
          setHoveredSkill(skill);
        }}
        onPointerOut={() => {
          setHovered(false);
          setHoveredSkill(null);
        }}
      >
        <boxGeometry args={[1.2, 0.8, 0.3]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
          roughness={0.3}
          metalness={0.8}
        />
        
        {/* Skill text */}
        <Text
          position={[0, 0, 0.16]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {skill.name}
        </Text>
        
        {/* Glow effect */}
        {isHovered && (
          <pointLight
            position={[0, 0, 0.5]}
            intensity={2}
            color={skill.color}
            distance={3}
          />
        )}
      </mesh>
    </Float>
  );
}

// Orbital layer component
function OrbitalLayer({ skills, radius, speed, direction, hoveredSkill, setHoveredSkill }) {
  return (
    <group>
      {skills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          index={index}
          totalSkills={skills.length}
          radius={radius}
          speed={speed}
          direction={direction}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}
      
      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
        <meshBasicMaterial
          color="white"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Scene component
function SkillsScene({ hoveredSkill, setHoveredSkill }) {
  const groupRef = useRef();
  
  // Slow scene rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Layer 1 - Inner Orbit */}
      <OrbitalLayer
        skills={skillsData.layer1}
        radius={3}
        speed={0.5}
        direction="clockwise"
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
      />
      
      {/* Layer 2 - Middle Orbit */}
      <OrbitalLayer
        skills={skillsData.layer2}
        radius={5}
        speed={0.3}
        direction="counter-clockwise"
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
      />
      
      {/* Layer 3 - Outer Orbit */}
      <OrbitalLayer
        skills={skillsData.layer3}
        radius={7}
        speed={0.2}
        direction="clockwise"
        hoveredSkill={hoveredSkill}
        setHoveredSkill={setHoveredSkill}
      />
      
      {/* Center hub */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#16213e"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Main component
const Premium3DSkills = ({ className = "" }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  return (
    <section className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-8 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Technical Skills
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            I've developed expertise across the full stack of modern web development. 
            From crafting beautiful user interfaces with React and Tailwind CSS to building 
            robust backend systems with Node.js and MongoDB, I bring comprehensive solutions 
            to complex technical challenges.
          </p>
          
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">16+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">50+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
          </div>
        </motion.div>
        
        {/* Right side - 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Canvas
              camera={{ position: [0, 0, 12], fov: 60 }}
              gl={{ antialias: true, alpha: true }}
              className="w-full h-full"
            >
              <PerspectiveCamera makeDefault position={[0, 0, 12]} />
              
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a90e2" />
              <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={0.5}
                color="#ffffff"
              />
              
              {/* Skills scene */}
              <SkillsScene
                hoveredSkill={hoveredSkill}
                setHoveredSkill={setHoveredSkill}
              />
              
              {/* Controls */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
            
            {/* Hover tooltip */}
            <AnimatePresence>
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/20 shadow-xl"
                >
                  <div className="text-white font-bold">{hoveredSkill.name}</div>
                  <div className="text-gray-300 text-sm">{hoveredSkill.category}</div>
                  <div className="text-gray-400 text-xs">{hoveredSkill.level}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Premium3DSkills;

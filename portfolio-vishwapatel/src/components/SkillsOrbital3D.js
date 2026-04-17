import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

// Skill data structure
const skillsData = {
  frontend: {
    title: 'Frontend',
    color: '#FF6B6B',
    position: [0, 0, 0],
    skills: [
      { name: 'HTML', icon: 'H', color: '#E34C26' },
      { name: 'CSS', icon: 'C', color: '#1572B6' },
      { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
      { name: 'React', icon: 'R', color: '#61DAFB' },
      { name: 'Tailwind', icon: 'T', color: '#06B6D4' }
    ]
  },
  backend: {
    title: 'Backend',
    color: '#10B981',
    position: [4, 2, -2],
    skills: [
      { name: 'Node.js', icon: 'N', color: '#339933' },
      { name: 'Express', icon: 'E', color: '#000000' },
      { name: 'MongoDB', icon: 'M', color: '#47A248' },
      { name: 'Redis', icon: 'R', color: '#DC382D' },
      { name: 'REST APIs', icon: 'API', color: '#6B7280' }
    ]
  },
  programming: {
    title: 'Programming',
    color: '#8B5CF6',
    position: [-3, -2, 3],
    skills: [
      { name: 'C', icon: 'C', color: '#A8B9CC' },
      { name: 'C++', icon: 'C++', color: '#00599C' }
    ]
  },
  tools: {
    title: 'Tools',
    color: '#F59E0B',
    position: [2, -3, 2],
    skills: [
      { name: 'Git', icon: 'G', color: '#F05032' },
      { name: 'GitHub', icon: 'GH', color: '#FFFFFF' },
      { name: 'VS Code', icon: 'VS', color: '#007ACC' },
      { name: 'Figma', icon: 'F', color: '#F24E1E' }
    ]
  }
};

// Individual skill component - simplified without Text
function SkillNode({ skill, clusterPosition, clusterIndex, skillIndex, totalSkills }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Orbital parameters
  const orbitRadius = 1.5 + (skillIndex * 0.3);
  const orbitSpeed = 0.5 + (skillIndex * 0.1);
  const verticalOffset = Math.sin(skillIndex) * 0.5;
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Orbital motion around cluster center
    const angle = time * orbitSpeed + (skillIndex * (Math.PI * 2) / totalSkills);
    const x = Math.cos(angle) * orbitRadius;
    const z = Math.sin(angle) * orbitRadius;
    const y = Math.sin(time * 0.3 + skillIndex) * 0.3 + verticalOffset;
    
    // Cluster drift
    const clusterAngle = time * 0.1 + clusterIndex;
    const clusterX = Math.sin(clusterAngle) * 0.5;
    const clusterZ = Math.cos(clusterAngle * 0.7) * 0.5;
    const clusterY = Math.sin(clusterAngle * 1.3) * 0.3;
    
    // Apply positions
    meshRef.current.position.x = clusterPosition[0] + x + clusterX;
    meshRef.current.position.y = clusterPosition[1] + y + clusterY;
    meshRef.current.position.z = clusterPosition[2] + z + clusterZ;
    
    // Gentle rotation
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    
    // Hover and click effects
    if (hovered && !clicked) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
    } else if (clicked) {
      meshRef.current.scale.lerp(new THREE.Vector3(2, 2, 2), 0.1);
      // Move to front when clicked
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z, 
        5, 
        0.1
      );
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });
  
  const handleClick = () => {
    setClicked(!clicked);
    setTimeout(() => setClicked(false), 3000);
  };
  
  return (
    <mesh
      ref={meshRef}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial
        color={skill.color}
        emissive={skill.color}
        emissiveIntensity={hovered ? 0.8 : 0.3}
        roughness={0.2}
        metalness={0.8}
      />
      
      {/* Icon representation using smaller spheres */}
      <group position={[0, 0, 0.45]}>
        {skill.icon.split('').map((char, i) => (
          <mesh
            key={i}
            position={[
              (i - skill.icon.length / 2) * 0.15,
              0,
              0
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="white" />
          </mesh>
        ))}
      </group>
    </mesh>
  );
}

// Cluster component that groups skills
function SkillCluster({ cluster, clusterIndex }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Gentle cluster rotation
    groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.2;
    groupRef.current.rotation.x = Math.cos(time * 0.15) * 0.1;
  });
  
  return (
    <group ref={groupRef}>
      {cluster.skills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          clusterPosition={cluster.position}
          clusterIndex={clusterIndex}
          skillIndex={index}
          totalSkills={cluster.skills.length}
        />
      ))}
    </group>
  );
}

// Camera controller with mouse parallax
function CameraController() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouseRef.current.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#667eea" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#8b5cf6"
      />
      
      {/* Camera controller */}
      <CameraController />
      
      {/* Skill clusters */}
      {Object.values(skillsData).map((cluster, index) => (
        <SkillCluster
          key={cluster.title}
          cluster={cluster}
          clusterIndex={index}
        />
      ))}
      
      {/* Environment */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 10, 50]} />
    </>
  );
}

// Main component
const SkillsOrbital3D = () => {
  const { isDarkMode } = useTheme();
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsSupported(false);
      setError('WebGL is not supported in your browser');
    }
  }, []);
  
  if (!isSupported) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'} flex items-center justify-center`}>
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">3D Not Supported</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
          >
            Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'} relative`}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ textShadow: '0 0 40px rgba(102, 126, 234, 0.5)' }}>
          3D Orbital Skills
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Skills roaming freely in 3D space
        </p>
        <div className="mt-8 text-gray-400">
          <p className="text-sm">Move mouse for parallax effect</p>
          <p className="text-sm">Click skills to zoom in</p>
        </div>
      </div>
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true
        }}
        className="w-full h-full"
        onError={(error) => {
          console.error('Three.js error:', error);
          setError('3D rendering error occurred');
          setIsSupported(false);
        }}
      >
        <Scene />
      </Canvas>
      
      {/* Back to home button */}
      <div className="absolute bottom-8 left-8 z-10">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SkillsOrbital3D;

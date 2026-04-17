import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simplified floating particles
function FloatingParticles() {
  const points = useRef();
  const particleCount = 2000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in sphere
      const radius = Math.random() * 20 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Neon colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i3] = 0.2; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1; // Blue
      } else if (colorChoice < 0.66) {
        colors[i3] = 0.8; colors[i3 + 1] = 0.2; colors[i3 + 2] = 1; // Purple
      } else {
        colors[i3] = 0; colors[i3 + 1] = 1; colors[i3 + 2] = 0.8; // Cyan
      }
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Gentle rotation
    points.current.rotation.y = time * 0.01;
    points.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Simple wave surface
function WaveSurface() {
  const meshRef = useRef();
  const segments = 30;
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(30, 30, segments, segments);
    return geo;
  }, []);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const index = (i * (segments + 1) + j) * 3;
        const x = (i / segments - 0.5) * 30;
        const y = (j / segments - 0.5) * 30;
        
        const wave = Math.sin(x * 0.1 + time) * 0.3 + Math.cos(y * 0.1 + time * 0.8) * 0.2;
        positions[index + 2] = wave;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <meshBasicMaterial
        color="#0a0a2e"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

// Camera controller
function CameraController() {
  const { camera } = useThree();
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow camera drift
    const driftX = Math.sin(time * 0.05) * 1;
    const driftY = Math.cos(time * 0.03) * 0.5;
    
    // Mouse parallax
    const parallaxX = mousePosition.current.x * 2;
    const parallaxY = mousePosition.current.y * 1.5;
    
    // Smooth movement
    camera.position.x += (driftX + parallaxX - camera.position.x) * 0.02;
    camera.position.y += (driftY + parallaxY - camera.position.y) * 0.02;
    
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      
      {/* Camera controller */}
      <CameraController />
      
      {/* 3D elements */}
      <FloatingParticles />
      <WaveSurface />
      
      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Fog */}
      <fog attach="fog" args={['#000011', 10, 50]} />
    </>
  );
}

// Main component
const Premium3DBackground = ({ children }) => {
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsSupported(false);
      setError('WebGL is not supported in your browser');
    }
  }, []);
  
  if (!isSupported) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">3D Not Supported</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
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
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Premium3DBackground;

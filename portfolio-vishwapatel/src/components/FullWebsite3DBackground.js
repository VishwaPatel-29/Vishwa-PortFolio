import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simple noise function for natural movement
const noise = (x, y, z, t) => {
  const X = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719 + t * 0.1) * 43758.5453;
  return X - Math.floor(X);
};

// 3D Particle Galaxy with thousands of particles
function ParticleGalaxy({ mousePosition, isMobile }) {
  const points = useRef();
  const particleCount = isMobile ? 1500 : 4000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const offsets = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Galaxy-like distribution
      const radius = Math.random() * 30 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Neon colors with variety
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        // Neon blue
        colors[i3] = 0.2; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1;
      } else if (colorChoice < 0.5) {
        // Purple
        colors[i3] = 0.8; colors[i3 + 1] = 0.2; colors[i3 + 2] = 1;
      } else if (colorChoice < 0.75) {
        // Cyan
        colors[i3] = 0; colors[i3 + 1] = 1; colors[i3 + 2] = 0.8;
      } else {
        // Pink
        colors[i3] = 1; colors[i3 + 1] = 0.4; colors[i3 + 2] = 0.8;
      }
      
      // Varied sizes for depth
      sizes[i] = Math.random() * 2 + 0.5;
      
      // Random velocities for organic movement
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Random offsets for noise function
      offsets[i] = Math.random() * 1000;
    }
    
    return { positions, colors, sizes, velocities, offsets };
  }, [particleCount]);
  
  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array;
    const velocities = particles.velocities;
    const offsets = particles.offsets;
    
    // Update particle positions with noise-based movement
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Natural movement using noise
      const noiseX = noise(positions[i3], positions[i3 + 1], positions[i3 + 2], time + offsets[i]);
      const noiseY = noise(positions[i3 + 1], positions[i3 + 2], positions[i3], time + offsets[i] + 100);
      const noiseZ = noise(positions[i3 + 2], positions[i3], positions[i3 + 1], time + offsets[i] + 200);
      
      positions[i3] += velocities[i3] + noiseX * 0.01;
      positions[i3 + 1] += velocities[i3 + 1] + noiseY * 0.01;
      positions[i3 + 2] += velocities[i3 + 2] + noiseZ * 0.01;
      
      // Subtle mouse influence
      const mouseInfluence = 0.0002;
      positions[i3] += mousePosition.current.x * mouseInfluence;
      positions[i3 + 1] += mousePosition.current.y * mouseInfluence;
      
      // Boundary check with soft wrapping
      const distance = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2);
      if (distance > 40) {
        positions[i3] *= -0.8;
        positions[i3 + 1] *= -0.8;
        positions[i3 + 2] *= -0.8;
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
    
    // Gentle rotation of entire galaxy
    points.current.rotation.y = time * 0.02;
    points.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    points.current.rotation.z = Math.cos(time * 0.08) * 0.03;
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
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Flowing Energy Waves with noise/sin-cos animation
function FlowingEnergyWaves() {
  const meshRef = useRef();
  const segments = 40;
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 50, segments, segments);
    return geo;
  }, []);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;
    
    // Complex wave pattern using noise and sin/cos combinations
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const index = (i * (segments + 1) + j) * 3;
        const x = (i / segments - 0.5) * 50;
        const y = (j / segments - 0.5) * 50;
        
        // Multiple wave layers for complexity
        const wave1 = Math.sin(x * 0.1 + time) * 0.8;
        const wave2 = Math.cos(y * 0.1 + time * 0.8) * 0.6;
        const wave3 = Math.sin((x + y) * 0.05 + time * 1.2) * 0.4;
        const wave4 = Math.cos((x - y) * 0.08 + time * 0.6) * 0.3;
        
        // Add noise for natural movement
        const noiseValue = noise(x, y, time * 0.5, 0) * 0.2;
        
        positions[index + 2] = wave1 + wave2 + wave3 + wave4 + noiseValue;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
      <meshBasicMaterial
        color="#0a0a3e"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

// Neural Connections between particles
function NeuralConnections({ particles, isMobile }) {
  const lines = useRef();
  const maxDistance = 4;
  const connectionCount = isMobile ? 50 : 150;
  
  const lineData = useMemo(() => {
    const connections = [];
    const positions = new Float32Array(connectionCount * 6);
    
    for (let i = 0; i < connectionCount; i++) {
      connections.push({
        start: Math.floor(Math.random() * 1000),
        end: Math.floor(Math.random() * 1000),
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }
    
    return { connections, positions };
  }, [connectionCount]);
  
  useFrame((state) => {
    if (!lines.current || !particles?.positions) return;
    
    const time = state.clock.getElapsedTime();
    const positions = particles.positions;
    const linePositions = lines.current.geometry.attributes.position.array;
    
    lineData.connections.forEach((connection, i) => {
      const startIndex = connection.start * 3;
      const endIndex = connection.end * 3;
      
      if (startIndex < positions.length && endIndex < positions.length) {
        const i6 = i * 6;
        
        // Update line positions
        linePositions[i6] = positions[startIndex];
        linePositions[i6 + 1] = positions[startIndex + 1];
        linePositions[i6 + 2] = positions[startIndex + 2];
        
        linePositions[i6 + 3] = positions[endIndex];
        linePositions[i6 + 4] = positions[endIndex + 1];
        linePositions[i6 + 5] = positions[endIndex + 2];
        
        // Pulsing opacity effect
        connection.opacity = (Math.sin(time * connection.speed + connection.phase) + 1) / 2 * 0.6 + 0.2;
      }
    });
    
    lines.current.geometry.attributes.position.needsUpdate = true;
    lines.current.material.opacity = 0.3;
  });
  
  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={connectionCount}
          array={lineData.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#00ffff"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Camera controller with parallax and drift
function CameraController({ mousePosition }) {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Very slow camera drift for depth
    const driftX = Math.sin(time * 0.03) * 2;
    const driftY = Math.cos(time * 0.02) * 1;
    const driftZ = Math.sin(time * 0.01) * 0.5;
    
    // Mouse parallax effect
    const parallaxX = mousePosition.current.x * 3;
    const parallaxY = mousePosition.current.y * 2;
    
    // Smooth camera movement
    camera.position.x += (driftX + parallaxX - camera.position.x) * 0.02;
    camera.position.y += (driftY + parallaxY - camera.position.y) * 0.02;
    camera.position.z += (driftZ + 15 - camera.position.z) * 0.02;
    
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main scene component
function Scene({ mousePosition, isMobile, particlesRef }) {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.2} />
      <pointLight position={[15, 15, 15]} intensity={0.4} color="#00ffff" />
      <pointLight position={[-15, -15, -15]} intensity={0.3} color="#ff00ff" />
      <pointLight position={[0, 20, 0]} intensity={0.5} color="#0088ff" />
      
      {/* Camera controller */}
      <CameraController mousePosition={mousePosition} />
      
      {/* 3D elements */}
      <ParticleGalaxy mousePosition={mousePosition} isMobile={isMobile} />
      <FlowingEnergyWaves />
      <NeuralConnections particles={particlesRef.current} isMobile={isMobile} />
      
      {/* Star field background */}
      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 1000 : 3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#000011', 15, 60]} />
    </>
  );
}

// Main component
const FullWebsite3DBackground = ({ children }) => {
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particlesRef = useRef(null);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Check WebGL support
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsSupported(false);
      setError('WebGL is not supported in your browser');
    }
  }, []);
  
  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  if (!isSupported) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">3D Not Supported</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
      {/* 3D Canvas - Fixed background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          className="w-full h-full"
          dpr={window.devicePixelRatio}
          onError={(error) => {
            console.error('Three.js error:', error);
            setError('3D rendering error occurred');
            setIsSupported(false);
          }}
        >
          <Scene mousePosition={mousePosition} isMobile={isMobile} particlesRef={particlesRef} />
        </Canvas>
      </div>
      
      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      
      {/* Content overlay - this is where the website content will go */}
      <div className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default FullWebsite3DBackground;

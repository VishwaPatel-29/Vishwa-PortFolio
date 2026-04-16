import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [cursorType, setCursorType] = useState('default');
  const [particles, setParticles] = useState([]);
  
  const rafId = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Smooth mouse tracking with requestAnimationFrame
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;
      
      setMousePosition({ x: currentX, y: currentY });
      
      // Reduced particle generation for better performance
      const dx = currentX - lastMousePos.current.x;
      const dy = currentY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 15 && Math.random() > 0.95) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: currentX,
          y: currentY,
          size: Math.random() * 3 + 1,
          lifetime: 600,
        };
        setParticles(prev => [...prev.slice(-4), newParticle]);
      }
      
      lastMousePos.current = { x: currentX, y: currentY };
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Handle click events
  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Detect cursor type and hover state with throttling
  useEffect(() => {
    let timeoutId;
    const updateCursorState = (e) => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        const target = e.target;
        
        let newCursorType = 'default';
        let shouldHover = false;

        if (target.tagName === 'A' || target.getAttribute('role') === 'button') {
          newCursorType = 'pointer';
          shouldHover = true;
        } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          newCursorType = 'text';
          shouldHover = true;
        } else if (target.classList.contains('cursor-magnetic')) {
          newCursorType = 'magnetic';
          shouldHover = true;
        } else if (target.classList.contains('cursor-scale')) {
          newCursorType = 'scale';
          shouldHover = true;
        }

        setCursorType(newCursorType);
        setIsHovering(shouldHover);
        timeoutId = null;
      }, 16);
    };

    const handleMouseOver = updateCursorState;
    const handleMouseOut = updateCursorState;

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Clean up particles with optimized interval
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(particle => {
        const age = Date.now() - particle.id;
        return age < particle.lifetime;
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Cursor variants for different states
  const getCursorVariant = useCallback(() => {
    const baseVariant = {
      scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
      rotate: isClicking ? 180 : 0,
    };

    switch (cursorType) {
      case 'pointer':
        return {
          ...baseVariant,
          backgroundColor: 'rgba(0, 255, 200, 0.3)',
          borderColor: 'rgba(0, 255, 200, 0.8)',
        };
      case 'text':
        return {
          ...baseVariant,
          backgroundColor: 'rgba(147, 51, 234, 0.2)',
          borderColor: 'rgba(147, 51, 234, 0.6)',
          borderRadius: '20%',
        };
      case 'magnetic':
        return {
          ...baseVariant,
          backgroundColor: 'rgba(236, 72, 153, 0.3)',
          borderColor: 'rgba(236, 72, 153, 0.8)',
        };
      case 'scale':
        return {
          ...baseVariant,
          scale: isClicking ? 0.6 : isHovering ? 2 : 1.5,
          backgroundColor: 'rgba(34, 197, 94, 0.3)',
          borderColor: 'rgba(34, 197, 94, 0.8)',
        };
      default:
        return {
          ...baseVariant,
          backgroundColor: 'rgba(0, 255, 200, 0.1)',
          borderColor: 'rgba(0, 255, 200, 0.5)',
        };
    }
  }, [isClicking, isHovering, cursorType]);

  if (!isVisible) return null;

  return (
    <>
      {/* Particle Trail */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x - particle.size / 2,
              y: particle.y - particle.size / 2,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(0, 255, 200, 0.6) 0%, transparent 70%)`,
              position: 'fixed',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor - Outer Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          ...getCursorVariant(),
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: cursorType === 'text' ? '20%' : '50%',
          border: '2px solid',
          backgroundColor: 'transparent',
          position: 'fixed',
        }}
      />

      {/* Inner Cursor - Diamond Shape */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.5 : isHovering ? 1.2 : 1,
          rotate: isClicking ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 20,
          mass: 0.1,
        }}
        style={{
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(0, 255, 200, 0.8)',
          transform: 'rotate(45deg)',
          position: 'fixed',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isClicking ? 2 : 1,
          opacity: isClicking ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 15,
          mass: 0.05,
        }}
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 255, 200, 1)',
          position: 'fixed',
        }}
      />

      {/* Click Ripple Effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            initial={{
              x: mousePosition.x - 40,
              y: mousePosition.y - 40,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: 3,
              opacity: 0,
            }}
            exit={{
              scale: 3,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid rgba(0, 255, 200, 0.6)',
              position: 'fixed',
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;

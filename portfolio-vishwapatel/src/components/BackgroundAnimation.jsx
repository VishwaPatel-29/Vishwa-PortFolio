import React, { useEffect, useRef } from 'react';
import { loadFull } from 'tsparticles';
import { tsParticles } from '@tsparticles/engine';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const initParticles = async () => {
      if (!containerRef.current) return;

      const particlesConfig = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ['#3b82f6', '#ec4899', '#a855f7', '#eab308']
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.4,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false
            }
          },
          links: {
            enable: true,
            distance: 130,
            color: '#3b82f6',
            opacity: 0.3,
            width: 1,
            blink: false,
            consent: false,
            shadow: {
              blur: 5,
              color: '#3b82f6',
              enable: true
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        retina_detect: true,
        background: {
          color: 'transparent',
          position: 'fixed',
          repeat: 'no-repeat',
          size: 'cover'
        },
        fps_limit: 60,
        fullScreen: {
          enable: false,
          zIndex: 0
        }
      };

      // Set container first
      const container = containerRef.current;
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '0';

      // Initialize tsParticles with container
      await loadFull(tsParticles);
      particlesRef.current = await tsParticles.load({
        id: 'tsparticles',
        element: container,
        options: particlesConfig
      });
    };

    initParticles();

    // Cleanup
    return () => {
      if (particlesRef.current) {
        particlesRef.current.destroy();
        particlesRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="tsparticles"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default BackgroundAnimation;

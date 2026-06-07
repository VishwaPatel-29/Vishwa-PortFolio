import React, { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';

/* ─────────────────────────────────────────────
   Main SignatureLoader Component
   ───────────────────────────────────────────── */
const SignatureLoader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const namePathRef = useRef(null);
  const flourishPathRef = useRef(null);

  const [nameProgress, setNameProgress] = useState(0);
  const [flourishProgress, setFlourishProgress] = useState(0);

  const [penPos, setPenPos] = useState({ x: 80, y: 150 });
  const [isWritingFlourish, setIsWritingFlourish] = useState(false);
  const [showPen, setShowPen] = useState(false);

  const [nameLength, setNameLength] = useState(650);
  const [flourishLength, setFlourishLength] = useState(700);

  useEffect(() => {
    let active = true;
    const fallback = setTimeout(() => { if (active) setFontsLoaded(true); }, 1000);
    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (active) { clearTimeout(fallback); setFontsLoaded(true); }
      }).catch(() => { if (active) setFontsLoaded(true); });
    } else { setFontsLoaded(true); }
    return () => { active = false; clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    if (!fontsLoaded) return;

    if (namePathRef.current) {
      setNameLength(namePathRef.current.getTotalLength());
      const pt = namePathRef.current.getPointAtLength(0);
      setPenPos({ x: pt.x, y: pt.y });
    }
    if (flourishPathRef.current) {
      setFlourishLength(flourishPathRef.current.getTotalLength());
    }

    setShowPen(true);

    // Total 60s display time (3s signature + 1.5s flourish + 54.5s hold + 1s fade out)
    const nameAnim = animate(0, 1, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (v) => {
        setNameProgress(v);
        if (namePathRef.current) {
          const pt = namePathRef.current.getPointAtLength(v * namePathRef.current.getTotalLength());
          setPenPos({ x: pt.x, y: pt.y });
        }
      },
      onComplete: () => {
        setIsWritingFlourish(true);
        const flourishAnim = animate(0, 1, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (v) => {
            setFlourishProgress(v);
            if (flourishPathRef.current) {
              const pt = flourishPathRef.current.getPointAtLength(v * flourishPathRef.current.getTotalLength());
              setPenPos({ x: pt.x, y: pt.y });
            }
          },
          onComplete: () => {
            setShowPen(false);
            setTimeout(() => {
              setIsExiting(true);
              setTimeout(() => onComplete(), 1000);
            }, 2500);
          }
        });
        return () => flourishAnim.stop();
      }
    });

    return () => nameAnim.stop();
  }, [fontsLoaded, onComplete]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 16,
      y: (e.clientY / window.innerHeight - 0.5) * 16,
    });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.05 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #001715 0%, #000000 100%)'
      }}
    >

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)'
        }}
      />

      {/* ── Signature SVG ── */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
          rotateX: -mousePos.y * 0.06,
          rotateY: mousePos.x * 0.06,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 26 }}
        className="w-full max-w-[850px] aspect-[8/3] flex items-center justify-center p-4 relative z-10"
      >
        {fontsLoaded && (
          <svg
            viewBox="0 0 800 300"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 40px rgba(0,153,140,0.4)) drop-shadow(0 0 100px rgba(0,153,140,0.15))' }}
            fill="none"
          >
            <defs>
              {/* Unified Teal Gradient */}
              <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ffcc" />
                <stop offset="50%" stopColor="#00998c" />
                <stop offset="100%" stopColor="#085d56" />
              </linearGradient>
              <linearGradient id="flourishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#085d56" />
                <stop offset="100%" stopColor="#00ffcc" />
              </linearGradient>
              <mask id="sigMask">
                <path
                  ref={namePathRef}
                  d="M 80,150 Q 240,130 400,165 T 720,150"
                  stroke="white"
                  strokeWidth="240"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray={nameLength}
                  strokeDashoffset={nameLength * (1 - nameProgress)}
                />
              </mask>
            </defs>

            {/* Subtle Ghost Glow */}
            <text x="50%" y="150" dominantBaseline="middle" textAnchor="middle"
              fontFamily="'Mr De Haviland', cursive" fontSize="140"
              fill="#00998c" opacity="0.08" className="select-none">
              Vishwa Patel
            </text>

            {/* Masked signature */}
            <g mask="url(#sigMask)">
              <text x="50%" y="150" dominantBaseline="middle" textAnchor="middle"
                fontFamily="'Mr De Haviland', cursive" fontSize="140"
                fill="url(#sigGradient)" className="select-none" letterSpacing="1px">
                Vishwa Patel
              </text>
            </g>

            {/* Flourish underline */}
            <path ref={flourishPathRef}
              d="M 680,170 C 600,230 320,240 150,210 C 110,200 130,175 180,180 C 240,185 360,185 470,172"
              stroke="url(#flourishGradient)" strokeWidth="4.5"
              strokeLinecap="round" strokeLinejoin="round" fill="none"
              strokeDasharray={flourishLength}
              strokeDashoffset={flourishLength * (1 - flourishProgress)}
            />

            {/* Pen writing light tracker */}
            {showPen && (
              <g>
                <circle cx={penPos.x} cy={penPos.y} r="12"
                  fill={isWritingFlourish ? "#00ffcc" : "#00998c"} opacity="0.6" />
                <circle cx={penPos.x} cy={penPos.y} r="25"
                  fill={isWritingFlourish ? "#00ffcc" : "#00998c"} opacity="0.15" />
                <circle cx={penPos.x} cy={penPos.y} r="3.5" fill="#ffffff" />
              </g>
            )}
          </svg>
        )}

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={!showPen && fontsLoaded ? { opacity: 0.85, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-4 text-center text-sm tracking-[0.38em] text-[#00998c] uppercase font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Full Stack Developer
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SignatureLoader;



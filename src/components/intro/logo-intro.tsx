import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEY = 'bh_intro_v3';
const LOGO_SIZE   = 140;
const SPLIT_X     = 260;
const NAVBAR_H    = 72;
const LOGO_H      = 44;

type Phase = 'showing' | 'splitting' | 'closing' | 'morphing';

export default function LogoIntro() {
  const [visible, setVisible]         = useState(false);
  const [phase, setPhase]             = useState<Phase>('showing');
  const [morphTarget, setMorphTarget] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    // Read media query directly — avoids the null→false re-run bug with useReducedMotion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, '1');

    setVisible(true);

    const t1 = setTimeout(() => setPhase('splitting'), 700);
    const t2 = setTimeout(() => setPhase('closing'),   1300);
    const t3 = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const navPad   = isMobile ? 20 : 64;
      const cx       = window.innerWidth  / 2;
      const cy       = window.innerHeight / 2;
      setMorphTarget({
        x:     (navPad + LOGO_H / 2) - cx,
        y:     (NAVBAR_H / 2)        - cy,
        scale: LOGO_H / LOGO_SIZE,
      });
      setPhase('morphing');
    }, 1750);

    // Safety net — always hide after 3.5s no matter what
    const t4 = setTimeout(() => setVisible(false), 2700);
    const t5 = setTimeout(() => setVisible(false), 3500);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []); // ← run once only

  const isSplitting = phase === 'splitting';
  const isMorphing  = phase === 'morphing';

  const cardStyle: React.CSSProperties = {
    width: LOGO_SIZE, height: LOGO_SIZE,
    background:   isMorphing ? 'transparent'            : 'rgba(255,255,255,0.95)',
    borderRadius: isMorphing ? '0px'                    : '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
    transition: 'background 0.5s ease, border-radius 0.5s ease',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center select-none pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeIn' }}
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 42%, #1e1c6a 0%, #13104a 50%, #07060f 100%)' }}
            animate={{ opacity: isMorphing ? 0 : 1 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Ambient glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 480, height: 480,
              background: 'radial-gradient(circle, rgba(59,53,200,0.25) 0%, transparent 70%)',
              filter: 'blur(48px)',
            }}
            animate={{ opacity: isSplitting || isMorphing ? 0 : 0.9, scale: isSplitting ? 1.6 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Logo badge */}
          <motion.div
            style={{ position: 'relative', width: LOGO_SIZE, height: LOGO_SIZE }}
            initial={{ opacity: 0, scale: 0.68 }}
            animate={{
              opacity: 1,
              scale:   isMorphing ? morphTarget.scale : 1,
              x:       isMorphing ? morphTarget.x     : 0,
              y:       isMorphing ? morphTarget.y     : 0,
            }}
            transition={
              isMorphing
                ? { duration: 0.72, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0.48, ease: [0.34, 1.1, 0.64, 1] }
            }
          >
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: '0 0 56px 18px rgba(59,53,200,0.4)', borderRadius: 12 }}
              animate={{ opacity: isSplitting || isMorphing ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Left half */}
            <motion.div
              style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 50% 0 0)' }}
              animate={{ x: isSplitting ? -SPLIT_X : 0 }}
              transition={{ duration: 0.55, ease: isSplitting ? [0.4, 0, 0.15, 1] : [0.34, 1.05, 0.64, 1] }}
            >
              <div style={cardStyle}>
                <img src="/logo.jpg" alt="" width={LOGO_SIZE - 12} height={LOGO_SIZE - 12}
                  style={{ objectFit: 'contain', display: 'block' }} />
              </div>
            </motion.div>

            {/* Right half */}
            <motion.div
              style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 50%)' }}
              animate={{ x: isSplitting ? SPLIT_X : 0 }}
              transition={{ duration: 0.55, ease: isSplitting ? [0.4, 0, 0.15, 1] : [0.34, 1.05, 0.64, 1] }}
            >
              <div style={cardStyle}>
                <img src="/logo.jpg" alt="" width={LOGO_SIZE - 12} height={LOGO_SIZE - 12}
                  style={{ objectFit: 'contain', display: 'block' }} />
              </div>
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.p
            className="absolute uppercase tracking-[0.4em]"
            style={{
              top: `calc(50% + ${LOGO_SIZE / 2 + 22}px)`,
              fontSize: '10px', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.35)',
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: isSplitting || isMorphing ? 0 : 0.35, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            Bhoomika Digital
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

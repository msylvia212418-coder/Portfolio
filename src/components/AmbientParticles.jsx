import { useMemo } from 'react';

/**
 * AmbientParticles — CSS-based floating particles and light rays
 * that persist across all sections, ensuring the background is always alive.
 */
export default function AmbientParticles() {
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 60; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    return items;
  }, []);

  const orbs = useMemo(() => [
    { top: '15%', left: '10%', size: 400, color: 'rgba(0,229,255,0.04)', delay: 0 },
    { top: '35%', right: '5%', size: 500, color: 'rgba(20,83,116,0.06)', delay: 5 },
    { top: '55%', left: '60%', size: 350, color: 'rgba(0,229,255,0.03)', delay: 10 },
    { top: '75%', left: '20%', size: 450, color: 'rgba(0,179,204,0.04)', delay: 3 },
    { top: '90%', right: '30%', size: 300, color: 'rgba(0,229,255,0.03)', delay: 8 },
  ], []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="ambient-particle"
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.size > 3 ? 'var(--aqua)' : 'rgba(255,255,255,0.6)',
            boxShadow: p.size > 3 ? '0 0 10px var(--aqua)' : 'none',
            opacity: p.opacity,
            animationName: 'floatUp',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        />
      ))}

      {/* Ambient glowing orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="ambient-orb"
          style={{
            position: 'absolute',
            top: orb.top,
            left: orb.left,
            right: orb.right,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animationName: 'drift',
            animationDuration: '20s',
            animationDelay: `${orb.delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
          }}
        />
      ))}

      {/* Light rays */}
      <div style={{
        position: 'absolute', top: 0, left: '20%',
        width: '2px', height: '100%',
        background: 'linear-gradient(180deg, transparent, rgba(0,229,255,0.04) 30%, rgba(0,229,255,0.08) 50%, rgba(0,229,255,0.04) 70%, transparent)',
        opacity: 0.5,
        animationName: 'rayShimmer',
        animationDuration: '8s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '70%',
        width: '1px', height: '100%',
        background: 'linear-gradient(180deg, transparent, rgba(0,229,255,0.03) 40%, rgba(0,229,255,0.06) 60%, transparent)',
        opacity: 0.4,
        animationName: 'rayShimmer',
        animationDuration: '12s',
        animationDelay: '3s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }} />

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(${Math.random() > 0.5 ? '' : '-'}40px); opacity: 0; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
          100% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes rayShimmer {
          0% { opacity: 0.1; transform: scaleX(1); }
          50% { opacity: 0.6; transform: scaleX(2); }
          100% { opacity: 0.2; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

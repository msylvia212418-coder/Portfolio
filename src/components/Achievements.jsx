import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievements } from '../data/portfolioData';
import { Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achieve-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">Highlights</div>
          <h2 className="section-heading mt-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {achievements.map((item) => (
            <div key={item.id} className="achieve-card glass-card" style={{ padding: '40px', display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '16px', flexShrink: 0,
                background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.1)'
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', fontWeight: 700 }}>{item.title}</h3>
                  <span className="section-tag" style={{ padding: '4px 12px', fontSize: '0.7rem' }}>{item.year}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
              <Trophy size={24} color="rgba(0,229,255,0.2)" style={{ flexShrink: 0, marginLeft: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .achieve-card { flexDirection: column !important; align-items: center !important; text-align: center; }
          .achieve-card > svg { display: none; }
        }
      `}</style>
    </section>
  );
}

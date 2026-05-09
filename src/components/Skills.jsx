import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
      
      gsap.fromTo(".skill-fill", 
        { width: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
          width: (i, el) => el.dataset.level + "%",
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.05
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">Technical Arsenal</div>
          <h2 className="section-heading mt-4">
            Tools of the <span className="text-gradient">Trade</span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-card glass-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '14px', 
                  background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-pearl)' }}>{cat.category}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-pearl)', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ color: 'var(--aqua)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                      <div className="skill-fill" data-level={skill.level} style={{ 
                        height: '100%', 
                        background: 'linear-gradient(90deg, var(--deep-blue), var(--aqua))', 
                        borderRadius: '99px',
                        boxShadow: '0 0 12px rgba(0,229,255,0.3)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

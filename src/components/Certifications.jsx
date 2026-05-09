import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">Credentials</div>
          <h2 className="section-heading mt-4">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card glass-card" style={{ 
              padding: '40px 30px', 
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${cert.color || 'var(--aqua)'}, transparent)`, opacity: 0.7 }} />
              
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                marginBottom: '24px', boxShadow: `0 0 30px ${cert.color || 'var(--aqua)'}33`
              }}>
                {cert.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', marginBottom: '8px', lineHeight: 1.4 }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '24px' }}>
                {cert.issuer}
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 229, 255, 0.05)', borderRadius: '99px', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
                <Award size={14} color="var(--aqua)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--aqua)', fontWeight: 700, letterSpacing: '0.05em' }}>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

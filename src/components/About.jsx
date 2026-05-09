import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, education } from '../data/portfolioData';
import { MapPin, Calendar, Star, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="about-item" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">About Me</div>
          <h2 className="section-heading mt-4">
            The Story <span className="text-gradient">Behind the Code</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Bio */}
          <div className="glass-card about-item" style={{ padding: '50px' }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', marginBottom: '20px' }}>
              Hi, I'm Sylvia.
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              {personalInfo.bio}
            </p>
            <div style={{ padding: '24px', background: 'rgba(0, 229, 255, 0.03)', border: '1px solid rgba(0, 229, 255, 0.1)', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Target size={18} color="var(--aqua)" />
                <span style={{ fontWeight: 700, color: 'var(--aqua)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Career Objective</span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                To join a forward-thinking organization where I can apply my programming skills, continuously learn cutting-edge technologies, and contribute to impactful software that solves real-world challenges.
              </p>
            </div>
          </div>

          {/* Education & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="glass-card about-item" style={{ padding: '40px' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--aqua)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '24px' }}>Education</h4>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', marginBottom: '8px' }}>
                {education.institution}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '20px' }}>{education.degree}</p>
              
              <div style={{ display: 'flex', gap: '24px', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} /> {education.duration}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Coimbatore, India</span>
              </div>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '99px', color: 'var(--aqua)', fontWeight: 700 }}>
                <Star size={16} fill="currentColor" /> CGPA: {education.cgpa}
              </div>
            </div>

            <div className="about-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-pearl)', lineHeight: 1, marginBottom: '10px' }}>1st</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--aqua)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Year Student</div>
              </div>
              <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-pearl)', lineHeight: 1, marginBottom: '10px' }}>3+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--aqua)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #about > .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

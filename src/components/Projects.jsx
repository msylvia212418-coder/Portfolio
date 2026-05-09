import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

gsap.registerPlugin(ScrollTrigger);

const PROJECT_IMAGES = [
  '/images/corewars.png',
  '/images/preptitan.png',
  '/images/quicko.png',
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        rotationX: -10,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">Portfolio</div>
          <h2 className="section-heading mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {projects.map((project, i) => (
            <div key={project.id} className="project-card glass-card" style={{ 
              display: 'flex', 
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              padding: '0',
              gap: '0',
              alignItems: 'stretch',
              overflow: 'hidden',
            }}>
              {/* Project Image */}
              <div style={{ 
                flex: '0 0 45%', 
                position: 'relative', 
                overflow: 'hidden',
                minHeight: '400px',
              }}>
                <img 
                  src={PROJECT_IMAGES[i]} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: i % 2 === 0 
                    ? 'linear-gradient(90deg, transparent 60%, rgba(7,19,29,0.9) 100%)'
                    : 'linear-gradient(270deg, transparent 60%, rgba(7,19,29,0.9) 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Number badge */}
                <div style={{
                  position: 'absolute', top: '24px', left: i % 2 === 0 ? '24px' : 'auto', right: i % 2 !== 0 ? '24px' : 'auto',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  borderRadius: '12px', padding: '8px 16px',
                  fontSize: '0.85rem', fontWeight: 800, color: 'var(--aqua)', letterSpacing: '0.05em',
                }}>
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px' }}>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', marginBottom: '8px', lineHeight: 1.1 }}>
                  {project.title}
                </h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--aqua)', fontWeight: 600, marginBottom: '24px' }}>
                  {project.subtitle}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                  {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '14px 28px' }}>
                    <GithubIcon size={18} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .project-card { flex-direction: column !important; }
          .project-card > div:first-child { flex: unset !important; min-height: 250px !important; }
          .project-card > div:last-child { padding: 30px !important; }
        }
      `}</style>
    </section>
  );
}

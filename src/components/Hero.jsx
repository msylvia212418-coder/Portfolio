import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../data/portfolioData';
import { Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(textRef.current.children, 
        { y: 100, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.6"
      )
      .fromTo(btnRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section 
      ref={containerRef}
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Typing Effect Subtitle */}
        <div ref={textRef} style={{ perspective: 1000, marginBottom: '24px' }}>
          <div style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
            fontWeight: 600, 
            color: 'var(--aqua)', 
            letterSpacing: '0.05em', 
            marginBottom: '20px',
            minHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TypingEffect 
              sentences={[
                'Aspiring Software Developer',
                'Computer Science Student',
                'Full Stack Enthusiast',
                'Creative Problem Solver',
                'UI/UX Explorer',
              ]}
              typingSpeed={150}
              deletingSpeed={80}
              pauseDuration={3500}
            />
          </div>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(4rem, 10vw, 8rem)', 
            fontWeight: 800, 
            lineHeight: 1,
            color: 'var(--text-pearl)',
            textShadow: '0 10px 40px rgba(0, 229, 255, 0.2)'
          }}>
            Sylvia M
          </h1>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
          color: 'var(--text-muted)', 
          maxWidth: '700px', 
          lineHeight: 1.6,
          marginBottom: '50px' 
        }}>
          {personalInfo.subtitle}. Building impactful digital experiences through code and innovation.
        </p>

        {/* Buttons */}
        <div ref={btnRef} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => scrollTo('projects')} className="btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
            View Projects <ArrowRight size={20} />
          </button>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
            <Download size={20} /> Resume
          </a>
        </div>

        {/* Social Links */}
        <div style={{ position: 'absolute', bottom: '-15vh', right: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} className="hover:text-aqua transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} className="hover:text-aqua transition-colors">
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

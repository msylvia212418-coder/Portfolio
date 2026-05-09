import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['about', 'skills', 'projects', 'certifications', 'achievements', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      padding: scrolled ? '16px 0' : '28px 0',
      background: scrolled ? 'rgba(3, 9, 16, 0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 229, 255, 0.05)' : '1px solid transparent',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          <div style={{
            width: 40, height: 40, borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--aqua-dim), var(--deep-blue))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 800, color: '#030910'
          }}>S</div>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-pearl)' }}>
            Sylvia
          </span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
          {NAV_LINKS.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', color: 'var(--text-muted)',
              fontSize: '0.9rem', fontWeight: 600, textTransform: 'capitalize',
              cursor: 'pointer', transition: 'color 0.3s'
            }} className="hover:text-aqua">
              {id}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="nav-cta btn-primary" onClick={() => scrollTo('contact')} style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', color: 'var(--aqua)' }}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, width: '100%',
              background: 'rgba(3, 9, 16, 0.95)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
              padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px'
            }}
            className="mobile-menu"
          >
            {NAV_LINKS.map(id => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: 'none', border: 'none', color: 'var(--text-pearl)',
                fontSize: '1.2rem', fontWeight: 600, textTransform: 'capitalize', textAlign: 'left'
              }}>
                {id}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle, .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'rgba(3, 9, 16, 0.8)', 
      borderTop: '1px solid rgba(0, 229, 255, 0.1)', 
      padding: '60px 0 30px', 
      position: 'relative', 
      zIndex: 10,
      backdropFilter: 'blur(20px)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'linear-gradient(135deg, var(--aqua-dim), var(--deep-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 800, color: '#030910' }}>S</div>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-pearl)' }}>Sylvia</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>
              Building impactful digital experiences through code and innovation.
            </p>
          </div>
          
          <button onClick={scrollToTop} style={{ 
            width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', color: 'var(--aqua)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s'
          }} className="hover:bg-[rgba(0,229,255,0.15)] hover:-translate-y-1">
            <ArrowUp size={20} />
          </button>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '30px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Sylvia M. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 10px #4ade80' }} />
            Open to opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}

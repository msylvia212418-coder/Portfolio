import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f04d8e3d-a514-46ff-bf71-fe11546deffb',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: ${form.name}`,
          from_name: 'Portfolio Website',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="contact-elem" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-heading mt-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '20px auto 0' }}>
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Email', value: personalInfo.email, icon: Mail, href: `mailto:${personalInfo.email}` },
              { label: 'Phone', value: personalInfo.phone, icon: Phone, href: `tel:${personalInfo.phone}` },
              { label: 'LinkedIn', value: 'Sylvia M', icon: LinkedinIcon, href: personalInfo.linkedin },
              { label: 'GitHub', value: 'msylvia212418-coder', icon: GithubIcon, href: personalInfo.github }
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-elem glass-card hover-lift" style={{ 
                padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,229,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--aqua)' }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '1.05rem', color: 'var(--text-pearl)', fontWeight: 600 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-elem glass-card" style={{ padding: '50px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <CheckCircle size={60} color="var(--aqua)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-pearl)', marginBottom: '10px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-grid">
                  <input type="text" placeholder="Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--aqua)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--aqua)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
                <textarea placeholder="Message" rows="5" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--aqua)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                <button type="submit" disabled={sending} className="btn-primary" style={{ alignSelf: 'flex-start', padding: '16px 40px', opacity: sending ? 0.7 : 1 }}>
                  {sending ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,229,255,0.1) !important; }
        @media (max-width: 900px) {
          #contact > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

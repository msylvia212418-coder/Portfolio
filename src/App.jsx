import { useEffect } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import Scene3D from './components/Scene3D';
import AmbientParticles from './components/AmbientParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Setup Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* 3D Background Canvas - Fixed to viewport */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none', background: '#030910' }}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
          <Scene3D />
        </Canvas>
      </div>

      {/* CSS Ambient Particles - Always visible */}
      <AmbientParticles />

      {/* DOM Content Overlay */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

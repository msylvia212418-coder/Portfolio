import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 12, height: 12,
          backgroundColor: 'var(--aqua)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(0, 229, 255, 0.8)' : 'rgba(0, 229, 255, 0.3)',
          backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 48, height: 48,
          border: '1px solid rgba(0, 229, 255, 0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
      />
    </>
  );
}

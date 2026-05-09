import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Returns a ref and a boolean `isVisible` that turns true once the
 * element enters the viewport (with an optional threshold).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: '100px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return [ref, isVisible];
}

import { useState, useEffect, useRef } from 'react';

/**
 * useTypingEffect
 * Cycles through an array of strings with a typewriter animation.
 * @param {string[]} phrases  - Array of text phrases to cycle through
 * @param {number}   typeSpeed - ms per character when typing (default 80)
 * @param {number}   deleteSpeed - ms per character when deleting (default 45)
 * @param {number}   pauseMs - ms to pause at full phrase (default 1800)
 */
export function useTypingEffect(
  phrases = [],
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseMs = 1800,
) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!phrases.length) return;

    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          // Pause, then start deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}

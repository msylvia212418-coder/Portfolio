import { useState, useEffect, useRef } from 'react';

/**
 * TypingEffect — Types out sentences one character at a time,
 * pauses, then deletes and moves to the next sentence.
 */
export default function TypingEffect({ 
  sentences = [], 
  typingSpeed = 150, 
  deletingSpeed = 80, 
  pauseDuration = 3500 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const timerRef = useRef(null);

  const currentSentence = sentences[currentIndex] || '';

  useEffect(() => {
    if (phase === 'typing') {
      if (displayText.length < currentSentence.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Done typing — pause
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timerRef.current = setTimeout(() => {
        setPhase('deleting');
      }, pauseDuration);
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Done deleting — move to next
        setCurrentIndex((prev) => (prev + 1) % sentences.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [displayText, phase, currentSentence, currentIndex, sentences, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <span style={{
        display: 'inline-block',
        width: '2px',
        height: '1.2em',
        background: 'var(--aqua)',
        marginLeft: '4px',
        verticalAlign: 'text-bottom',
        animation: 'cursorBlink 0.8s steps(2) infinite',
      }} />
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

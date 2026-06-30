import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (isPaused) return;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, textIndex, isDeleting, isPaused, texts, pauseTime]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

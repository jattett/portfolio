import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypingAnimation = ({ text, speed = 100, delay = 0 }: UseTypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<number>();
  const timeoutRef = useRef<number>();

  const startAnimation = useCallback(() => {
    // Clear any existing animations
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setDisplayText('');
    setIsComplete(false);

    // Start the typing animation after delay
    timeoutRef.current = window.setTimeout(() => {
      let currentIndex = 0;
      
      // Use a faster interval for smoother animation
      intervalRef.current = window.setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, Math.max(speed, 30)); // 최소 30ms로 제한하여 너무 빠르지 않게
    }, delay * 1000);
  }, [text, speed, delay]);

  useEffect(() => {
    startAnimation();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startAnimation]);

  return { displayText, isComplete, restart: startAnimation };
}; 
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  root = null,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isCurrentlyIntersecting = entry.isIntersecting;
    
    setIsIntersecting(isCurrentlyIntersecting);
    
    if (isCurrentlyIntersecting && !hasIntersected) {
      setHasIntersected(true);
    }
  }, [hasIntersected]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, threshold, rootMargin, root]);

  return { elementRef, isIntersecting, hasIntersected };
}; 
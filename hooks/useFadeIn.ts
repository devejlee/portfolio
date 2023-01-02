import { useRef, useEffect } from 'react';

export const useFadeIn = <T extends HTMLElement>(delay = 0) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          if (!elementRef.current) return;
          elementRef.current.classList.add('fade-in');
        }
      }
    );

    const timeout = setTimeout(() => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }, delay);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [delay]);

  return { ref: elementRef };
};

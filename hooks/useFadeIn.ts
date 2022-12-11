import { useRef, useEffect } from 'react';

export const useFadeIn = (delay = 0) => {
  const elementRef = useRef<any>(null); // TODO: replace any with correct type

  useEffect(() => {
    const ref = elementRef.current
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (!ref) return
            ref.classList.add('fade-in');
          }, delay);
        }
      }
    );
    observer.observe(ref);
    return () => {
      observer.unobserve(ref);
    }
  }, [delay]);

  return { ref: elementRef };
};

import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export function useCountUp({ end, duration = 2000, startOnView = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export function getYearsOfExcellence(): number {
  const foundingDate = new Date(2010, 4, 27); // May 27, 2010 (month is 0-indexed)
  const today = new Date();
  let years = today.getFullYear() - foundingDate.getFullYear();
  
  // Check if we haven't reached the anniversary this year yet
  const hasHadAnniversary = 
    today.getMonth() > foundingDate.getMonth() ||
    (today.getMonth() === foundingDate.getMonth() && today.getDate() >= foundingDate.getDate());
  
  if (!hasHadAnniversary) {
    years--;
  }
  
  return years;
}

'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisSmoothScrollProps {
  children: React.ReactNode;
}

export default function LenisSmoothScroll({ children }: LenisSmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Expose lenis instance for external scroll controls (e.g., navigation)
    try {
      // @ts-ignore - attach to window for runtime use
      window.__lenis = lenis;
    } catch (e) {
      // ignore in non-browser env
    }

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      try {
        // @ts-ignore
        delete window.__lenis;
      } catch (e) {}
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

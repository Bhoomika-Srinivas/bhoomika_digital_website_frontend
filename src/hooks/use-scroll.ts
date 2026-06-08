import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrolled: boolean;   // true when scrolled past threshold
  direction: 'up' | 'down' | null;
}

export function useScroll(threshold = 64): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrolled: false,
    direction: null,
  });

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      setState({
        scrollY: y,
        scrolled: y > threshold,
        direction: y > lastY ? 'down' : 'up',
      });
      lastY = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return state;
}

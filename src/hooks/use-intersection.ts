import { useInView } from 'react-intersection-observer';

interface UseRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Returns [ref, isVisible] — attach ref to the element you want to observe.
 * Use `isVisible` to drive entrance animations.
 */
export function useReveal(options: UseRevealOptions = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return [ref, inView] as const;
}

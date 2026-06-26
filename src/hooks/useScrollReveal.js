import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a ref and
 * flips `isVisible` to true once the element enters the viewport.
 * Used to drive the `.reveal` / `.reveal-stagger` CSS classes.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

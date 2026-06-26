import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to `target` once the element
 * is in view. Powers the dashboard-style stat readouts on Home/Achievements.
 */
export default function useCountUp(target, { duration = 1400, startWhen = true } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!startWhen) return;

    const start = performance.now();
    const from = 0;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [target, duration, startWhen]);

  return value;
}

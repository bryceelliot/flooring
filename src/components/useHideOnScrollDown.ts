"use client";

import { useEffect, useState } from "react";

/* Returns true while the user is scrolling DOWN (past a small threshold), so
 * floating buttons can slide out of the way and stop covering content. They
 * reappear the moment the user scrolls up or reaches the top. Uses a passive,
 * rAF-throttled listener and only updates state on a direction change. */
export function useHideOnScrollDown(threshold = 220) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > threshold);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}

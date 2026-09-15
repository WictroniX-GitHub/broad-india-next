"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  separator?: string;
  enabled?: boolean;
}

/**
 * Lightweight count-up hook using requestAnimationFrame.
 * Provides an SSR-safe fallback value — never renders blank.
 *
 * Usage:
 *   const { ref, displayValue } = useCountUp({ end: 500, enabled: inView });
 *   <span ref={ref}>{displayValue}</span>
 */
export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  separator = ",",
  enabled = true,
}: UseCountUpOptions) {
  // SSR fallback: always show the end value so it's never blank
  const [value, setValue] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rafRef = useRef<number | null>(null);

  const formatNumber = useCallback(
    (num: number): string => {
      const fixed = num.toFixed(decimals);
      if (!separator) return fixed;

      const [intPart, decPart] = fixed.split(".");
      const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      return decPart ? `${formatted}.${decPart}` : formatted;
    },
    [decimals, separator]
  );

  useEffect(() => {
    if (!enabled || hasAnimated) return;

    // Reset to start value before animating
    setValue(start);

    const startTime = performance.now();

    const easeOutQuad = (t: number): number => t * (2 - t);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      const currentValue = start + (end - start) * easedProgress;
      setValue(Math.round(currentValue * Math.pow(10, decimals)) / Math.pow(10, decimals));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
        setHasAnimated(true);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, hasAnimated, start, end, duration, decimals]);

  return {
    value,
    displayValue: formatNumber(value),
    hasAnimated,
  };
}

import { useEffect, useRef } from "react";
import { trackEvent } from "../utils/analytics";

interface ScrollDepthThresholds {
  25: boolean;
  50: boolean;
  75: boolean;
  90: boolean;
  100: boolean;
}

export function useScrollTracking() {
  const thresholds = useRef<ScrollDepthThresholds>({
    25: false,
    50: false,
    75: false,
    90: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      // Track each threshold once
      Object.keys(thresholds.current).forEach((threshold) => {
        const thresholdValue = parseInt(threshold);
        if (
          scrollPercentage >= thresholdValue &&
          !thresholds.current[thresholdValue as keyof ScrollDepthThresholds]
        ) {
          thresholds.current[thresholdValue as keyof ScrollDepthThresholds] =
            true;

          trackEvent(
            "Engagement",
            "scroll_depth",
            `${thresholdValue}%`,
            thresholdValue
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

import { useEffect, useRef } from "react";
import { trackEvent } from "../utils/analytics";

export function useTimeOnPage() {
  const startTime = useRef<number>(Date.now());
  const timeThresholds = useRef<{ [key: number]: boolean }>({
    30: false, // 30 seconds
    60: false, // 1 minute
    120: false, // 2 minutes
    300: false, // 5 minutes
  });

  useEffect(() => {
    const checkTimeOnPage = () => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);

      Object.keys(timeThresholds.current).forEach((threshold) => {
        const thresholdValue = parseInt(threshold);
        if (
          elapsed >= thresholdValue &&
          !timeThresholds.current[thresholdValue]
        ) {
          timeThresholds.current[thresholdValue] = true;

          trackEvent(
            "Engagement",
            "time_on_page",
            `${thresholdValue}s`,
            thresholdValue
          );
        }
      });
    };

    const interval = setInterval(checkTimeOnPage, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Track page exit
  useEffect(() => {
    const handleBeforeUnload = () => {
      const totalTime = Math.floor((Date.now() - startTime.current) / 1000);

      trackEvent("Engagement", "page_exit", "Total time on page", totalTime);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
}

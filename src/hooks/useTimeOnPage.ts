import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";

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

          ReactGA.event({
            category: "Engagement",
            action: "time_on_page",
            label: `${thresholdValue}s`,
            value: thresholdValue,
          });
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

      ReactGA.event({
        category: "Engagement",
        action: "page_exit",
        label: "Total time on page",
        value: totalTime,
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
}

import { useEffect, useRef } from "react";
import { trackEvent } from "../utils/analytics";

export function useIntersectionTracking(
  sectionName: string,
  threshold: number = 0.5
) {
  const ref = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current) {
            tracked.current = true;

            trackEvent("Engagement", "section_viewed", sectionName);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, threshold]);

  return ref;
}

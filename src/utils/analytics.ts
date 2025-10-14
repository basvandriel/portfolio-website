import ReactGA from "react-ga4";

// Only enable analytics in true production (not test environments)
// Set VITE_ENABLE_ANALYTICS=true during build for production
const isAnalyticsEnabled = import.meta.env.VITE_ENABLE_ANALYTICS === "true";

// Only initialize GA when explicitly enabled
let isInitialized = false;

export const initializeAnalytics = () => {
  if (isAnalyticsEnabled && !isInitialized) {
    ReactGA.initialize("G-VGSSCQJH3Z", {
      gaOptions: {
        debug_mode: false,
      },
    });
    isInitialized = true;
    console.log("✅ Google Analytics initialized (production)");
  } else if (!isAnalyticsEnabled) {
    console.log("🔧 Google Analytics disabled (development/test environment)");
  }
};

// Wrapper functions that only track when analytics is enabled
export const trackPageView = (path: string) => {
  if (isAnalyticsEnabled && isInitialized) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (isAnalyticsEnabled && isInitialized) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  } else {
    // Log in development for debugging
    console.log("📊 [Analytics Event]", { category, action, label, value });
  }
};

// Export for compatibility with existing code
export { ReactGA };

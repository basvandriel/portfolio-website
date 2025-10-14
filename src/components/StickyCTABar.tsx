import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { trackEvent } from "../utils/analytics";

export default function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past hero (roughly 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackEvent("Conversion", "sticky_cta_clicked", "Top Bar CTA");

    window.open("https://calendly.com/basvandriel/30min", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 animate-slideDown"
      style={{
        animation: "slideDown 0.3s ease-out",
      }}
    >
      <div className="bg-gradient-to-r from-emerald-600 to-sky-600 shadow-2xl border-b-2 border-emerald-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Left: Urgency message */}
            <div className="flex items-center gap-3 flex-1">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-bold">
                  🔥 2 Spots Left
                </span>
              </div>
              <div className="text-white">
                <span className="font-bold text-sm sm:text-base">
                  Limited Q4 Availability
                </span>
                <span className="hidden md:inline text-sm text-white/90 ml-2">
                  — Book your consultation before spots fill up
                </span>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-3">
              <Button
                onClick={handleClick}
                size="sm"
                className="bg-white text-emerald-600 hover:bg-slate-100 font-bold shadow-lg whitespace-nowrap"
              >
                <span className="hidden sm:inline">Book Free Consultation</span>
                <span className="sm:hidden">Book Now</span>
                <span className="ml-2">→</span>
              </Button>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

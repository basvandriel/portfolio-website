import { useState, useEffect } from "react";
import { Button } from "./ui/Button";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 shadow-2xl">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-100 font-semibold">
              Ready to stop firefighting?
            </p>
            <p className="text-sm text-slate-400">
              Free consultation • 15+ years experience • Available now
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() =>
                window.open("https://calendly.com/basvandriel/20min", "_blank")
              }
              size="sm"
              className="whitespace-nowrap"
            >
              Book Free Call
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-1"
              aria-label="Close"
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
  );
}

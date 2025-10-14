import { useEffect } from "react";
import Homepage from "./components/Homepage";
import ProfessionalIntro from "./components/ProfessionalIntro";
import { useScrollTracking } from "./hooks/useScrollTracking";
import { useTimeOnPage } from "./hooks/useTimeOnPage";
import { trackPageView } from "./utils/analytics";

const Redesign = () => {
  // Initialize engagement tracking
  useScrollTracking();
  useTimeOnPage();

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative">
        {/* Homepage content */}
        <div className="relative">
          <Homepage professionalIntro={<ProfessionalIntro />} />
        </div>
      </div>
    </div>
  );
};

export default Redesign;

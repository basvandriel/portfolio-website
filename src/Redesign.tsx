import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import ProfessionalIntro from "./components/ProfessionalIntro";
import ContactModal from "./components/ContactModal";

const Redesign = () => {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    ReactGA.event({ category: "User", action: "redesign event" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-slate-100">
              Bas van Driel
            </div>
            <button
              onClick={() => setContactOpen(true)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors rounded-lg hover:bg-slate-800/50"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      <div className="relative">
        {/* Homepage content */}
        <div className="relative pt-20">
          <Homepage
            onContactOpen={() => setContactOpen(true)}
            professionalIntro={<ProfessionalIntro />}
          />
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default Redesign;

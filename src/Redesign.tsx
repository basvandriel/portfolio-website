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
      {/* Simple navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Home
            </span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              About
            </span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Services
            </span>
            <button
              onClick={() => setContactOpen(true)}
              className="hover:text-slate-200 transition-colors"
            >
              Contact
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

import ReactGA from "react-ga4";
import { useEffect } from "react";
import Homepage from "./components/Homepage";
import ProfessionalIntro from "./components/ProfessionalIntro";

const Redesign = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    ReactGA.event({ category: "User", action: "redesign event" });
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

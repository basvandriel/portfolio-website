import { useState } from "react";
import ContactModal from "./ContactModal";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import Engagement from "./Engagement";
import Services from "./Services";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";

export default function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-slate-100">
              Bas van Driel
            </div>
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <Hero onPrimary={() => setOpen(true)} />
        </div>

        {/* Background sections with different shades */}
        <div className="bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <ValueProps />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <Engagement />
        </div>

        <div className="bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <Services />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <Testimonials />
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="mx-auto max-w-7xl px-6">
            <FinalCTA onPrimary={() => setOpen(true)} />
          </div>
        </div>
      </main>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

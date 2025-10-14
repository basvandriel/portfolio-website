import React from "react";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import WorkExperience from "./WorkExperience";
import Engagement from "./Engagement";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import FinalCTA from "./FinalCTA";

export default function Homepage({
  professionalIntro,
}: {
  professionalIntro: React.ReactNode;
}) {
  return (
    <>
      {/* Main content */}
      <main>
        <div className="mx-auto max-w-7xl px-6">
          <Hero />
        </div>

        {/* Professional intro section */}
        {professionalIntro}

        {/* Work Experience section */}
        <WorkExperience />

        {/* Background sections with different shades */}
        <div className="bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <ValueProps />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <Engagement />
        </div>

        <div className="bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <Services />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <CaseStudies />
        </div>

        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80">
          <div className="mx-auto max-w-7xl px-6">
            <FinalCTA />
          </div>
        </div>
      </main>
    </>
  );
}

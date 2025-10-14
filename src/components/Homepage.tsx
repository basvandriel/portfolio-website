import React from "react";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import WorkExperience from "./WorkExperience";
import Engagement from "./Engagement";
import Services from "./Services";
import CaseStudies from "./CaseStudies";

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
      </main>
    </>
  );
}

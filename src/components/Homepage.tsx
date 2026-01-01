import React from "react";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import CaseStudies from "./CaseStudies";
import AssessmentOffer from "./AssessmentOffer";
import Engagement from "./Engagement";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SocialProof from "./SocialProof";
import FAQ from "./FAQ";

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

        {/* Case Studies section - replacing Work Experience */}
        <CaseStudies />

        {/* Assessment Offer section */}
        <div className="mx-auto max-w-7xl px-6">
          <AssessmentOffer />
        </div>

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
          <Testimonials />
        </div>

        <SocialProof />

        <div className="mx-auto max-w-7xl px-6">
          <FAQ />
        </div>
      </main>
    </>
  );
}

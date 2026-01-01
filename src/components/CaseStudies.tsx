import { useTranslation } from "react-i18next";
import { caseStudies } from "../case_studies_data";
import { caseStudiesNL } from "../case_studies_data_i18n";
import { Button } from "./ui/Button";
import { trackEvent } from "../utils/analytics";
import { useIntersectionTracking } from "../hooks/useIntersectionTracking";
import CVLink from "./CVLink";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  const { i18n } = useTranslation();
  const sectionRef = useIntersectionTracking("Case Studies Section");

  const studies = i18n.language === "nl" ? caseStudiesNL : caseStudies;

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-20 bg-slate-900/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              {i18n.language === "nl" ? "Bewezen Resultaten" : "Proven Results"}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {i18n.language === "nl"
              ? "Zie hoe ik 100+ teams heb geholpen om downtime te elimineren, kosten te verlagen en systemen te schalen."
              : "See how I've helped 100+ teams eliminate downtime, cut costs, and scale systems."}
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {studies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 bg-gradient-to-br from-emerald-500/5 to-sky-500/5 border border-emerald-500/20 rounded-2xl">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">
            {i18n.language === "nl"
              ? "Een Vergelijkbare Uitdaging?"
              : "Got a Similar Challenge?"}
          </h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            {i18n.language === "nl"
              ? "Laten we bespreken hoe ik je kan helpen om meetbare resultaten te behalen. Boek een gratis gesprek van 30 minuten om je specifieke behoeften te verkennen."
              : "Let's discuss how I can help you achieve measurable results. Book a free 30-minute consultation to explore your specific needs."}
          </p>
          <Button
            onClick={() => {
              trackEvent("Case Study", "Bottom CTA Clicked");
              window.open(
                "https://calendly.com/contact-basvandriel/30min",
                "_blank"
              );
            }}
            size="lg"
            className="font-semibold text-lg shadow-2xl shadow-emerald-500/25"
          >
            {i18n.language === "nl"
              ? "Plan een Gratis Gesprek"
              : "Schedule Free Consultation"}
          </Button>
        </div>

        {/* CV Link */}
        <div className="text-center pt-12 mt-12 border-t border-slate-800/50">
          <CVLink className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
            {i18n.language === "nl"
              ? "Bekijk volledige CV (traditioneel formaat)"
              : "View full resume (traditional format)"}
          </CVLink>
        </div>
      </div>
    </section>
  );
}

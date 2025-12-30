import { useParams, Link, Navigate } from "react-router";
import { useEffect } from "react";
import { caseStudies } from "../case_studies_data";
import { Button } from "../components/ui/Button";
import { trackEvent, trackPageView } from "../utils/analytics";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  useEffect(() => {
    if (study) {
      trackPageView(`/case-studies/${id}`);
    }
  }, [id, study]);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const handleCTAClick = () => {
    trackEvent("Case Study Detail", "CTA Clicked", study.id);
    window.open("https://calendly.com/contact-basvandriel/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back button */}
        <Link
          to="/#case-studies"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Case Studies</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-3">
                {study.client}
              </h1>
              <div className="flex flex-wrap gap-4 text-slate-400">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {study.industry}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {study.timeline}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Metric */}
          <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border border-emerald-500/30 rounded-2xl">
            <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text mb-3">
              {study.results.primary_metric.value}
            </div>
            <div className="text-xl text-slate-300 font-medium">
              {study.results.primary_metric.label}
            </div>
          </div>
        </header>

        {/* Story sections */}
        <div className="space-y-16">
          {/* The Problem */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-100">The Challenge</h2>
                <p className="text-slate-400">What we were up against</p>
              </div>
            </div>

            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                {study.problem.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {study.problem.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Key Pain Points
                </h4>
                {study.problem.pain_points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-100">The Solution</h2>
                <p className="text-slate-400">How we solved it</p>
              </div>
            </div>

            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                {study.solution.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {study.solution.approach}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {study.solution.key_technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium text-slate-200 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:border-sky-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The Results */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-100">The Results</h2>
                <p className="text-slate-400">Measurable impact</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {study.results.secondary_metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20 rounded-2xl"
                >
                  <div className="text-4xl font-bold text-emerald-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {study.results.testimonial && (
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl">
                <svg className="w-10 h-10 text-emerald-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-slate-200 italic mb-6 leading-relaxed">
                  "{study.results.testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-slate-900 font-bold text-lg">
                    {study.results.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">
                      {study.results.testimonial.author}
                    </div>
                    <div className="text-sm text-slate-400">
                      {study.results.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border border-emerald-500/30 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">
            Facing a Similar Challenge?
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve measurable results like these.
            Book a free 30-minute consultation to explore your specific needs.
          </p>
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="font-semibold text-lg shadow-2xl shadow-emerald-500/25"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

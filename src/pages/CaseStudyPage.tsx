import { useParams, Link, Navigate } from "react-router";
import { useEffect } from "react";
import type { CaseStudy } from "../case_studies_data";
import { caseStudies } from "../case_studies_data";
import { Button } from "../components/ui/Button";
import { trackEvent, trackPageView } from "../utils/analytics";

const VisualPattern = ({
  type,
  colors,
}: {
  type: string;
  colors: string[];
}) => {
  switch (type) {
    case "mesh":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${colors[0]}, transparent)`,
            }}
          />
          <div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${colors[1]}, transparent)`,
            }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-3/4 h-3/4 rounded-full blur-2xl opacity-20"
            style={{
              background: `radial-gradient(circle, ${colors[2]}, transparent)`,
            }}
          />
        </div>
      );

    case "waves":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C300,150 400,50 600,100 C800,150 900,50 1200,100 L1200,300 L0,300 Z"
              fill={colors[0]}
              fillOpacity="0.5"
            />
            <path
              d="M0,150 C300,200 400,100 600,150 C800,200 900,100 1200,150 L1200,300 L0,300 Z"
              fill={colors[1]}
              fillOpacity="0.4"
            />
            <path
              d="M0,200 C300,250 400,150 600,200 C800,250 900,150 1200,200 L1200,300 L0,300 Z"
              fill={colors[2]}
              fillOpacity="0.3"
            />
          </svg>
        </div>
      );

    case "geometric":
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-40 h-40 opacity-20 rotate-45"
            style={{
              background: `linear-gradient(135deg, ${colors[0]}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 opacity-25 -rotate-12"
            style={{
              background: `linear-gradient(225deg, ${colors[1]}, transparent)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-15 rotate-12"
            style={{
              background: `linear-gradient(45deg, ${colors[2]}, transparent)`,
            }}
          />
        </div>
      );

    case "abstract":
    default:
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30"
            style={{ background: colors[1] }}
          />
          <div
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-20"
            style={{ background: colors[0] }}
          />
        </div>
      );
  }
};

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner with Visual Pattern */}
      {study.visual && (
        <div className="relative h-80 md:h-96 bg-slate-900 border-b border-slate-700/30 overflow-hidden">
          <VisualPattern
            type={study.visual.type}
            colors={study.visual.colors}
          />
          {/* Subtle noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
            }}
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/80" />
          {/* Content overlay */}
          <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col justify-end pb-12">
            {/* Back button */}
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors mb-8 group self-start"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
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
              <span className="text-sm">Back to Case Studies</span>
            </Link>

            {/* Title and meta */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {study.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="font-medium">{study.client}</span>
              <span>·</span>
              <span>{study.industry}</span>
              <span>·</span>
              <span>{study.timeline}</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-14">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-800/30 border border-slate-700/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Primary Metric Callout */}
        <div className="mb-16 p-8 bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-xl">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
            Key Result
          </div>
          <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 leading-tight">
            {study.results.primary_metric.value}
          </div>
          <div className="text-base text-slate-300">
            {study.results.primary_metric.label}
          </div>
        </div>

        {/* Story sections */}
        <div className="space-y-16">
          {/* The Problem */}
          <section>
            <div className="mb-6 pb-3 border-b border-slate-700/20">
              <h2 className="text-xl font-bold text-slate-100 mb-1">
                The Challenge
              </h2>
              <p className="text-sm text-slate-400">What we were up against</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-base font-semibold text-slate-200 mb-2">
                {study.problem.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-5">
                {study.problem.description}
              </p>

              <div className="space-y-2.5">
                {study.problem.pain_points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-slate-800/30 border border-slate-700/30 rounded-lg"
                  >
                    <svg
                      className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section>
            <div className="mb-6 pb-3 border-b border-slate-700/20">
              <h2 className="text-xl font-bold text-slate-100 mb-1">
                The Solution
              </h2>
              <p className="text-sm text-slate-400">How we solved it</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-base font-semibold text-slate-200 mb-2">
                {study.solution.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-5">
                {study.solution.approach}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.solution.key_technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm text-slate-300 bg-slate-800/30 border border-slate-700/30 rounded-md"
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
            <div className="mb-6 pb-3 border-b border-slate-700/20">
              <h2 className="text-xl font-bold text-slate-100 mb-1">
                The Results
              </h2>
              <p className="text-sm text-slate-400">Measurable impact</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {study.results.secondary_metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-lg"
                >
                  <div className="text-2xl font-bold text-emerald-400 mb-1.5 leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {study.results.testimonial && (
              <div className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-lg">
                <svg
                  className="w-7 h-7 text-emerald-400/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base text-slate-200 italic mb-4 leading-relaxed">
                  "{study.results.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-slate-900 font-bold">
                    {study.results.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">
                      {study.results.testimonial.author}
                    </div>
                    <div className="text-xs text-slate-400">
                      {study.results.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-xl text-center">
          <h3 className="text-xl font-bold text-slate-100 mb-3">
            Facing a Similar Challenge?
          </h3>
          <p className="text-base text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve measurable results like
            these. Book a free 30-minute consultation.
          </p>
          <Button onClick={handleCTAClick} size="lg" className="font-semibold">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

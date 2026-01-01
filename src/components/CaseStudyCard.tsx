import { Link } from "react-router";
import type { CaseStudy } from "../case_studies_data";

interface CaseStudyCardProps {
  study: CaseStudy;
}

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

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      to={`/case-studies/${study.id}`}
      className="group block bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/40 rounded-lg overflow-hidden hover:border-slate-600/60 transition-all"
    >
      {/* Hero visual banner */}
      {study.visual && (
        <div className="relative h-40 bg-slate-900 border-b border-slate-700/30 overflow-hidden">
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
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/80" />
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-base font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2 leading-snug min-h-[3rem]">
          {study.title}
        </h3>

        {/* Client and industry */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
          <span>{study.client}</span>
          <span>·</span>
          <span>{study.industry}</span>
        </div>

        {/* Primary metric */}
        <div className="mb-5 pb-5 border-b border-slate-700/20">
          <div className="text-xl font-bold text-emerald-400 mb-1 leading-tight">
            {study.results.primary_metric.value}
          </div>
          <div className="text-sm text-slate-400 leading-relaxed">
            {study.results.primary_metric.label}
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 text-xs">
          {study.tags.slice(0, 3).map((tag, idx) => (
            <span key={tag} className="text-slate-500">
              {tag}
              {idx < Math.min(2, study.tags.length - 1) && (
                <span className="ml-2">·</span>
              )}
            </span>
          ))}
          {study.tags.length > 3 && (
            <span className="text-slate-600">+{study.tags.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

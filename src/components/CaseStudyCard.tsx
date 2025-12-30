import { Link } from "react-router";
import type { CaseStudy } from "../case_studies_data";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      to={`/case-studies/${study.id}`}
      className="group block bg-slate-800/20 border border-slate-700/40 rounded-lg p-8 hover:bg-slate-800/30 hover:border-slate-600/60 transition-all duration-200"
    >
      {/* Header with meta info */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
            {study.client}
          </h3>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>{study.industry}</span>
            <span>•</span>
            <span>{study.timeline}</span>
          </div>
        </div>
        <svg
          className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Key metric */}
      <div className="mb-5">
        <div className="text-3xl font-bold text-emerald-400 mb-1.5">
          {study.results.primary_metric.value}
        </div>
        <div className="text-sm text-slate-300 leading-relaxed">
          {study.results.primary_metric.label}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {study.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-700/40 rounded-md"
          >
            {tag}
          </span>
        ))}
        {study.tags.length > 2 && (
          <span className="px-2.5 py-1 text-xs text-slate-500">
            +{study.tags.length - 2} more
          </span>
        )}
      </div>
    </Link>
  );
}

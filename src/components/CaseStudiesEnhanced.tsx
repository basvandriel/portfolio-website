import Card from "./ui/Card";
import { useTranslation } from "react-i18next";

export default function CaseStudiesEnhanced() {
  const { t } = useTranslation();

  const caseStudies = [
    {
      client: "ABN AMRO",
      industry: "Financial Services",
      title: "How I Saved ABN AMRO €800K Annually on Data Pipeline Costs",
      challenge:
        "Processing 2M+ daily financial transactions through Azure Databricks pipelines that were failing 3-4 times per week, taking 6+ hours per batch, and costing €95K/month in compute resources.",
      solution: [
        "Architected new Dagster-based orchestration layer",
        "Implemented intelligent batch sizing and parallel processing",
        "Added comprehensive monitoring with automated rollback",
      ],
      results: [
        {
          metric: "80%",
          label: "Reduction in Pipeline Failures",
          detail: "From 3-4/week to <1/month",
        },
        {
          metric: "4x",
          label: "Faster Processing Time",
          detail: "From 6 hours to 90 minutes",
        },
        {
          metric: "€456K",
          label: "Annual Cost Savings",
          detail: "40% reduction in compute costs",
        },
        {
          metric: "0",
          label: "Data Loss Incidents",
          detail: "Zero incidents in 14 months",
        },
      ],
      technologies: [
        "Python",
        "Azure Databricks",
        "Dagster",
        "Apache Spark",
        "PostgreSQL",
      ],
      duration: "6 weeks",
      testimonial:
        "Bas identified cost-saving opportunities our internal team missed for months. His systematic approach to pipeline optimization delivered results within the first week.",
      testimonialAuthor: "Lead Data Engineer, ABN AMRO",
    },
    {
      client: "NS (Nederlandse Spoorwegen)",
      industry: "Transportation",
      title: "Zero-Downtime Migration for Critical Railway Infrastructure",
      challenge:
        "Railway maintenance planning system serving millions of passengers daily was built on legacy infrastructure, experiencing frequent outages and requiring weekend maintenance windows that cost €50K per incident.",
      solution: [
        "Designed zero-downtime migration strategy with parallel systems",
        "Built FastAPI microservices with comprehensive test coverage",
        "Implemented blue-green deployment with automated rollback",
      ],
      results: [
        {
          metric: "99.9%",
          label: "Uptime Achieved",
          detail: "Eliminated weekend outages",
        },
        {
          metric: "2hrs → 8min",
          label: "Deployment Time",
          detail: "93% reduction in release time",
        },
        {
          metric: "75%",
          label: "Fewer Critical Incidents",
          detail: "From 4/month to 1/quarter",
        },
        {
          metric: "€600K+",
          label: "Outage Costs Prevented",
          detail: "Avoided emergency contractor fees",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Kubernetes",
        "PostgreSQL",
        "React",
        "ArgoCD",
      ],
      duration: "8 weeks",
      testimonial:
        "His ability to deliver a complex migration without a single passenger-facing outage was remarkable. The system is more reliable now than it's ever been.",
      testimonialAuthor: "Thomas van der Berg, Lead Platform Engineer, NS",
    },
    {
      client: "Ministry of Health",
      industry: "Government / Healthcare",
      title:
        "Healthcare Identity System: Government-Grade Security & Compliance",
      challenge:
        "Building a healthcare identity management system requiring strict GDPR compliance, integration with 15+ legacy systems, and handling sensitive patient data for the Dutch healthcare sector.",
      solution: [
        "Architected secure .NET + Python hybrid system with encryption at rest and in transit",
        "Implemented comprehensive audit logging for regulatory compliance",
        "Built automated testing suite covering security scenarios",
      ],
      results: [
        {
          metric: "100%",
          label: "GDPR Compliance",
          detail: "Passed all security audits",
        },
        {
          metric: "15+",
          label: "Legacy Systems Integrated",
          detail: "Zero data migration issues",
        },
        {
          metric: "0",
          label: "Security Breaches",
          detail: "12 months in production",
        },
        {
          metric: "€1.2M",
          label: "Infrastructure Optimized",
          detail: "30% cost reduction via Azure optimization",
        },
      ],
      technologies: [
        "Python",
        "C#",
        ".NET",
        "Azure",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      duration: "4 months",
      testimonial:
        "Working with government systems requires patience and precision. Bas delivered both, navigating complex requirements and delivering a system that exceeded security expectations.",
      testimonialAuthor: "Technical Lead, Ministry of Health (Volksgezondheid)",
    },
  ];

  return (
    <section className="py-24" aria-labelledby="case-studies-heading">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
          📊 Proven Results
        </div>
        <h2
          id="case-studies-heading"
          className="text-3xl lg:text-5xl font-bold text-slate-100 mb-4"
        >
          Real Projects, Real Results
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          {t(
            "These aren't hypothetical scenarios. These are actual enterprise projects where I delivered measurable ROI in weeks, not quarters."
          )}
        </p>
      </div>

      {/* Case Studies */}
      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            className="p-8 lg:p-12 border-2 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Client header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-100">
                    {study.client}
                  </h3>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-400">
                    {study.industry}
                  </span>
                </div>
                <p className="text-lg text-slate-300 font-medium">
                  {study.title}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500">Project Duration</div>
                <div className="text-lg font-semibold text-emerald-400">
                  {study.duration}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Challenge & Solution */}
              <div className="lg:col-span-2 space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3 text-red-400">
                      ⚠️
                    </span>
                    The Challenge
                  </h4>
                  <p className="text-slate-300 leading-relaxed pl-11">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                      💡
                    </span>
                    The Solution
                  </h4>
                  <ul className="space-y-2 pl-11">
                    {study.solution.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-300 flex items-start leading-relaxed"
                      >
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/30 border border-slate-600/30 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-bold text-slate-100 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 text-emerald-400">
                    ✅
                  </span>
                  The Results
                </h4>
                <div className="space-y-4">
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30"
                    >
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text mb-1">
                        {result.metric}
                      </div>
                      <div className="text-sm font-semibold text-slate-200 mb-1">
                        {result.label}
                      </div>
                      <div className="text-xs text-slate-400">
                        {result.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <blockquote className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-emerald-500/20 leading-none">
                    "
                  </div>
                  <p className="text-slate-300 italic leading-relaxed pl-8 mb-3">
                    {study.testimonial}
                  </p>
                  <footer className="text-sm text-slate-400 pl-8">
                    — {study.testimonialAuthor}
                  </footer>
                </blockquote>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border-2 border-emerald-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-100">
            Ready for Similar Results?
          </h3>
          <p className="text-slate-300 max-w-2xl">
            These case studies represent just a fraction of the work I've done.
            Let's discuss how I can deliver similar outcomes for your team.
          </p>
          <a
            href="mailto:contact@basvandriel.nl?subject=Case%20Study%20Discussion"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}

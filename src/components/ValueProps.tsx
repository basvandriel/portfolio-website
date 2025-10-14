import Card from "./ui/Card";

const valueProps = [
  {
    title: "Faster Delivery",
    description:
      "Ship features 2-3x faster with predictable timelines and fewer blockers.",
    metric: "50% faster releases",
  },
  {
    title: "Bulletproof Reliability",
    description:
      "Eliminate 3AM alerts with robust monitoring and failure-resistant systems.",
    metric: "99.9% uptime",
  },
  {
    title: "Scale with Confidence",
    description:
      "Handle 10x growth without breaking your budget or your team's sanity.",
    metric: "40% lower costs",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24">
      {/* Left-aligned header with offset layout */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
        <div className="lg:max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-100">Why teams</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              choose me
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Proven results that matter to your business and your team's sanity
          </p>
        </div>
        <div className="lg:text-right">
          <div className="text-3xl font-bold text-emerald-400 mb-1">15+</div>
          <div className="text-sm text-slate-500 uppercase tracking-wide">
            Years Experience
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {valueProps.map((prop, index) => (
          <Card
            key={index}
            className="group hover:scale-[1.02] transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm"
          >
            <div className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-6 opacity-30">
                {index === 0 && (
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {prop.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {prop.description}
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-sky-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 font-semibold">
                  {prop.metric}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function SocialProof() {
  const clientStats = [
    {
      number: "€2.5M+",
      label: "Infrastructure costs saved",
      context: "Across 6 major enterprise clients",
    },
    {
      number: "50+",
      label: "Critical systems delivered",
      context: "Zero post-launch failures",
    },
    {
      number: "15+",
      label: "Years enterprise experience",
      context: "ABN AMRO, NS, Healthcare sector",
    },
    {
      number: "99.9%",
      label: "Average uptime achieved",
      context: "On mission-critical platforms",
    },
  ];

  const projectHighlights = [
    "Real-time data processing for 2M+ daily transactions",
    "Railway maintenance systems serving millions of passengers",
    "Healthcare identity management for government sector",
    "Financial data pipelines with zero tolerance for downtime",
  ];

  return (
    <section className="py-24 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-100 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">{stat.context}</div>
            </div>
          ))}
        </div>

        {/* Project highlights */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-100 mb-6 text-center">
            Mission-Critical Systems I've Built
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projectHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Trusted by organizations where reliability isn't optional
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Direct client contracts only</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>NDA & security cleared</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Long-term partnerships preferred</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

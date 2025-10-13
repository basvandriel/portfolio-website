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
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          Why teams choose me
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Proven results that matter to your business and your team's sanity
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {valueProps.map((prop, index) => (
          <Card
            key={index}
            className="group hover:scale-[1.02] transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm"
          >
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-lg"></div>
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

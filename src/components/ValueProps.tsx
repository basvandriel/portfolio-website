import Card from "./ui/Card";

const valueProps = [
  {
    title: "Proven Enterprise Experience",
    description:
      "15+ years building enterprise software for clients including ABN AMRO, NS, and government sector. I've seen what breaks at scale and know how to prevent it.",
    metric: "€2.5M+ infrastructure costs saved",
    category: "Experience",
  },
  {
    title: "Zero-Downtime Deployments",
    description:
      "Transform risky releases into routine operations. Automated rollbacks, comprehensive testing, and monitoring that prevents outages.",
    metric: "99.9% uptime achieved",
    category: "Reliability",
  },
  {
    title: "Full-Stack DevOps Expertise",
    description:
      "From Python backends to Kubernetes orchestration. I bridge the gap between development and operations for seamless delivery.",
    metric: "50+ critical systems delivered",
    category: "Technical",
  },
  {
    title: "Team Knowledge Transfer",
    description:
      "Don't just get solutions—get the knowledge to maintain and extend them. Documentation, training, and best practices included.",
    metric: "100% team retention rate",
    category: "Sustainability",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24">
      {/* Simple centered header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
          Why teams choose me
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Proven results from 15+ years building enterprise software
        </p>
      </div>

      {/* Clean 2x2 grid */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {valueProps.map((prop, index) => (
          <Card
            key={index}
            className="p-6 border border-slate-700/30 bg-slate-800/20"
          >
            <div className="mb-3">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {prop.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              {prop.title}
            </h3>

            <p className="text-slate-300 mb-4 leading-relaxed text-base">
              {prop.description}
            </p>

            <div className="text-sm text-slate-400 bg-slate-700/30 px-3 py-2 rounded font-medium">
              {prop.metric}
            </div>
          </Card>
        ))}
      </div>
      
      {/* Simple bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm mb-3">Ready to scale your systems?</p>
        <a
          href="mailto:bas@basvandriel.nl?subject=Let's%20discuss%20your%20project"
          className="text-slate-400 hover:text-slate-300 text-sm transition-colors duration-200"
        >
          Let's discuss your project →
        </a>
      </div>
    </section>
  );
}

import Card from "./ui/Card";
import { Button } from "./ui/Button";

const engagementModels = [
  {
    title: "Advisory Sprint",
    duration: "1–2 weeks",
    description:
      "Quick audit, architecture review, and prioritized roadmap you can act on immediately.",
    features: [
      "System assessment",
      "Technical roadmap",
      "Risk analysis",
      "Implementation plan",
    ],
    cta: "Get audit",
  },
  {
    title: "Scoped Project",
    duration: "2–8 weeks",
    description:
      "Deliver a specific part of your stack: pipelines, services, or CI/CD setup.",
    features: [
      "Focused delivery",
      "Knowledge transfer",
      "Documentation",
      "Testing included",
    ],
    cta: "Discuss project",
  },
  {
    title: "Retainer",
    duration: "Ongoing",
    description:
      "Monthly delivery support and hands-on implementation as part of your team.",
    features: [
      "Continuous delivery",
      "Team mentoring",
      "Process improvement",
      "Flexible hours",
    ],
    cta: "Start retainer",
  },
];

export default function Engagement() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          How we can work together
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Flexible engagement models designed around your timeline and delivery
          needs
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {engagementModels.map((model, index) => (
          <Card
            key={index}
            className="p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-slate-100">
                  {model.title}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  {model.duration}
                </span>
              </div>
            </div>

            <p className="text-slate-300 mb-6 flex-grow leading-relaxed text-lg">
              {model.description}
            </p>

            <ul className="text-slate-400 mb-8 space-y-3">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full group-hover:border-emerald-500/50 group-hover:text-emerald-400"
              onClick={() => {
                window.location.href = `mailto:bas@basvandriel.nl?subject=${encodeURIComponent(
                  model.cta + " - inquiry"
                )}`;
              }}
            >
              {model.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

import Card from "./ui/Card";

const services = [
  "Migrations & refactors — zero-downtime rollouts and measured plans",
  "Observability & alerts — meaningful signals that reduce noise",
  "Automated testing & quality — pipeline tests, contract tests, and gating",
  "Cost & performance wins — lower infra spend and faster response times",
  "Architecture reviews — identify bottlenecks and scaling challenges",
  "Team mentoring — upskill engineers and improve delivery practices",
  "DevOps automation — CI/CD, infra-as-code, and deployment hardening",
  "Data pipeline reliability — robust ETL with monitoring and recovery",
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          Service highlights
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          End-to-end engineering solutions that solve real problems
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const [title, description] = service.split(" — ");
          return (
            <Card
              key={index}
              className="p-6 group hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-md"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

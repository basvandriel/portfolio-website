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
      {/* Asymmetrical layout with sidebar */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const [title, description] = service.split(" — ");
              return (
                <Card
                  key={index}
                  className="p-6 group hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1 flex-shrink-0 opacity-40">
                      {index === 0 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      )}
                      {index === 6 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {index === 7 && (
                        <svg
                          className="w-6 h-6 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      )}
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
        </div>

        {/* Sticky sidebar with header */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
              Service highlights
            </h2>
            <p className="text-lg text-slate-400 mb-6">
              End-to-end engineering solutions that solve real problems
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">
                  Zero-downtime deployments
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">
                  Enterprise-grade reliability
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">
                  Team knowledge transfer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

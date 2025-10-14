import { Button } from "./ui/Button";
import Card from "./ui/Card";

export default function LeadMagnet() {
  const handleRequestAssessment = () => {
    window.location.href =
      "mailto:bas@basvandriel.nl?subject=DevOps%20Assessment%20Request&body=Hi%20Bas,%0A%0AI'm%20interested%20in%20getting%20a%20DevOps%20maturity%20assessment%20for%20my%20team.%20Could%20you%20provide%20more%20details%20about%20the%20process?%0A%0AThanks!";
  };

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900/20 to-sky-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="p-12 bg-slate-800/50 border-emerald-500/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-sky-500/5"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Free Assessment
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                How mature is your{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                  DevOps process
                </span>
                ?
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Get a personalized assessment showing exactly where your
                deployment process is costing you time and money
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-4">
                  You'll discover:
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    Hidden bottlenecks slowing your releases
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    Risk factors that could cause outages
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    Quick wins to improve reliability immediately
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    Benchmarks vs. similar companies
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 text-center">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">
                    Ready to get started?
                  </h4>
                  <p className="text-sm text-slate-400">
                    Email me with your current challenges and I'll provide a
                    personalized assessment
                  </p>
                </div>

                <Button
                  onClick={handleRequestAssessment}
                  className="w-full py-3 text-lg font-semibold mb-4"
                >
                  Request Free Assessment →
                </Button>

                <p className="text-xs text-slate-500">
                  No commitment • Direct personal response • Usually within 24
                  hours
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-400">
                ⏱️ Takes 5 minutes to request • 📊 Personalized assessment • 🔒
                Your data stays private
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

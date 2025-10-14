import { Button } from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-600/50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-sky-500/5"></div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-6 leading-tight">
              Ready to stop firefighting and start shipping
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                {" "}
                predictable systems
              </span>
              ?
            </h3>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how to make your engineering faster, more reliable,
              and ready to scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Button
                onClick={() => window.open("https://calendly.com/basvandriel/20min", "_blank")}
                size="lg"
                className="px-10 py-4 text-lg font-semibold"
              >
                Book a 20‑minute call
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  window.location.href =
                    "mailto:bas@basvandriel.nl?subject=Project%20inquiry";
                }}
                className="px-10 py-4 text-lg font-semibold border border-slate-600 hover:border-emerald-500/50"
              >
                Send a quick email
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Direct contracts only</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span>Rates on request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

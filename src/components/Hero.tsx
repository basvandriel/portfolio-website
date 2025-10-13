import { useEffect } from "react";
import { Button } from "./ui/Button";
import ReactGA from "react-ga4";
import { useABTest } from "../hooks/useABTest";

const headlineVariants = {
  A: "Trusted engineering to scale critical data and internal systems",
  B: "Build faster, ship reliably — stop firefighting and start scaling",
  C: "Reliable systems. Fewer incidents. Better delivery.",
};

export default function Hero({ onPrimary }: { onPrimary: () => void }) {
  const variant = useABTest("hero-headline", Object.keys(headlineVariants));

  function track(action: string) {
    if (typeof window !== "undefined") {
      ReactGA.event({
        action,
        category: "Homepage",
        label: variant,
      });
    }
  }

  // Track which headline variant is shown
  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.event({
        action: "headline_variant_view",
        category: "A/B Test",
        label: variant,
      });
    }
  }, [variant]);

  return (
    <section className="py-24 lg:py-32" aria-labelledby="hero-title">
      <div className="text-center max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Available for projects
        </div>

        {/* Main headline */}
        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-100 mb-8 tracking-tight"
        >
          <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            {headlineVariants[variant as keyof typeof headlineVariants]}
          </span>
        </h1>

        {/* Supporting text */}
        <p
          id="hero-desc"
          className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Predictable delivery, fewer incidents, and infrastructure that scales
          with your ambitions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            onClick={() => {
              track("cta_primary_clicked");
              onPrimary();
            }}
            size="lg"
            className="font-semibold text-lg px-8 py-4 bg-slate-100 text-slate-900 hover:bg-slate-200"
            aria-describedby="hero-desc"
          >
            Let's work together
          </Button>
          <Button
            onClick={() => {
              track("cta_secondary_clicked");
              window.location.href =
                "mailto:bas@basvandriel.nl?subject=Quick%20inquiry";
            }}
            variant="ghost"
            size="lg"
            className="font-semibold text-lg px-8 py-4 text-slate-300 hover:text-slate-100 border border-slate-700 hover:border-slate-600"
            aria-describedby="hero-desc"
          >
            Send a quick email
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-slate-200 mb-1">10+</div>
            <div className="text-sm text-slate-400">Years experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-slate-200 mb-1">50+</div>
            <div className="text-sm text-slate-400">Projects delivered</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-slate-200 mb-1">🇳🇱</div>
            <div className="text-sm text-slate-400">Netherlands & Remote</div>
          </div>
        </div>
      </div>
    </section>
  );
}

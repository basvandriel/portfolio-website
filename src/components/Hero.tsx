import { useEffect } from "react";
import { Button } from "./ui/Button";
import ReactGA from "react-ga4";
import { useABTest } from "../hooks/useABTest";
import NSLogoSvg from "./nslogo.svg";
import ABNAmroLogoSvg from "./abnamrologo.svg";
import ZorgsaamLogoSvg from "./zorgsaamlogo.svg";
import SGC2LogoSvg from "./sgc2.svg";

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
    <section className="py-16 lg:py-24" aria-labelledby="hero-title">
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
          className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          From chaotic deployments to seamless releases. From midnight alerts to
          peaceful sleep. Transform your engineering operations with
          battle-tested practices and infrastructure that grows with your team.
        </p>

        {/* Client logos */}
        <div className="mb-12">
          <p className="text-sm text-slate-500 text-center mb-6">
            Trusted by leading organizations
          </p>
          <div className="flex items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            <img
              src={NSLogoSvg}
              alt="NS"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={ABNAmroLogoSvg}
              alt="ABN AMRO"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={ZorgsaamLogoSvg}
              alt="Zorgsaam"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={SGC2LogoSvg}
              alt="SGC2"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            onClick={() => {
              track("cta_primary_clicked");
              onPrimary();
            }}
            size="lg"
            className="font-semibold"
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
            variant="outline"
            size="lg"
            className="font-semibold"
            aria-describedby="hero-desc"
          >
            Send a quick email
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-200">15+</span>
            <span>Years experience</span>
          </div>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-200">50+</span>
            <span>Projects delivered</span>
          </div>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-200">99.9%</span>
            <span>Uptime achieved</span>
          </div>
        </div>
      </div>
    </section>
  );
}

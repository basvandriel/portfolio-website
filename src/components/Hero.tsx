import { useEffect } from "react";
import { Button } from "./ui/Button";
import ReactGA from "react-ga4";
import { useABTest } from "../hooks/useABTest";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import NSLogoSvg from "./nslogo.svg";
import ABNAmroLogoSvg from "./abnamrologo.svg";
import ZorgsaamLogoSvg from "./zorgsaamlogo.svg";
import BASFLogoSvg from "../BASF-Logo_bw.svg";
import MinVWSLogoSvg from "../vws-logo.svg";

const headlineVariants = {
  A: "Trusted engineering to scale critical data and internal systems",
  B: "Build faster, ship reliably — stop firefighting and start scaling",
  C: "Reliable systems. Fewer incidents. Better delivery.",
};

export default function Hero() {
  const { t } = useTranslation();
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
      <div className="max-w-5xl mx-auto px-6">
        {/* Top bar with status and language toggle */}
        <div className="flex items-center justify-between mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            {t("homepage.hero_available_status")}
          </div>
          <LanguageToggle />
        </div>

        {/* Main content */}
        <div className="mb-16">
          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            {variant === "A" && (
              <span className="text-slate-100">
                {t("homepage.hero_variant_a")}
              </span>
            )}
            {variant === "B" && (
              <>
                <span className="text-slate-100">
                  {t("homepage.hero_variant_b_1")}
                </span>{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text italic">
                  {t("homepage.hero_variant_b_2")}
                </span>
                <span className="text-slate-100">
                  {t("homepage.hero_variant_b_3")}
                </span>{" "}
                <span className="text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text">
                  {t("homepage.hero_variant_b_4")}
                </span>{" "}
                <span className="text-slate-300">
                  {t("homepage.hero_variant_b_5")}
                </span>
              </>
            )}
            {variant === "C" && (
              <>
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                  {t("homepage.hero_variant_c_1")}
                </span>{" "}
                <span className="text-slate-100">
                  {t("homepage.hero_variant_c_2")}
                </span>{" "}
                <span className="text-slate-300 font-light">
                  {t("homepage.hero_variant_c_3")}
                </span>
              </>
            )}
          </h1>

          <p
            id="hero-desc"
            className="text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl"
          >
            {t("homepage.hero_desc")}
          </p>
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <p className="text-sm text-slate-500 mb-6">
            {t("homepage.hero_trusted_by")}
          </p>
          <div className="flex items-center flex-wrap gap-6 lg:gap-8 opacity-60 hover:opacity-80 transition-opacity">
            <img
              src={BASFLogoSvg}
              alt="BASF"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
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
              src={MinVWSLogoSvg}
              alt="Ministerie van Volksgezondheid"
              className="h-10 lg:h-12 w-auto filter brightness-0 invert"
            />
            <img
              src={ZorgsaamLogoSvg}
              alt="Zorgsaam"
              className="h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
          </div>
        </div>

        {/* CTA buttons - enhanced with risk reversal */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={() => {
              track("cta_primary_clicked");
              window.open("https://calendly.com/basvandriel/20min", "_blank");
            }}
            size="lg"
            className="font-medium"
            aria-describedby="hero-desc"
          >
            {t("homepage.hero_cta_primary")}
          </Button>
          <Button
            onClick={() => {
              track("cta_secondary_clicked");
              window.location.href =
                "mailto:bas@basvandriel.nl?subject=Quick%20inquiry";
            }}
            variant="ghost"
            size="lg"
            className="font-medium text-slate-300 hover:text-slate-100"
            aria-describedby="hero-desc"
          >
            {t("homepage.hero_cta_secondary")}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center flex-wrap gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>{t("homepage.hero_trust_1")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            <span>{t("homepage.hero_trust_2")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>{t("homepage.hero_trust_3")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

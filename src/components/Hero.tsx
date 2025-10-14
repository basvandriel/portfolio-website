import { Button } from "./ui/Button";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import NSLogoSvg from "./nslogo.svg";
import ABNAmroLogoSvg from "./abnamrologo.svg";
import ZorgsaamLogoSvg from "./zorgsaamlogo.svg";
import BASFLogoSvg from "../BASF-Logo_bw.svg";
import MinVWSLogoSvg from "../vws-logo.svg";

export default function Hero() {
  const { t } = useTranslation();

  function track(action: string) {
    if (typeof window !== "undefined") {
      ReactGA.event({
        action,
        category: "Homepage",
      });
    }
  }

  return (
    <section className="py-16 lg:py-24" aria-labelledby="hero-title">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top bar with status and language toggle */}
        <div className="flex items-center justify-between mb-12 gap-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            {t("homepage.hero_available_status")}
          </div>
          <LanguageToggle />
        </div>

        {/* Main content */}
        <div className="mb-16">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              {t("homepage.hero_variant_c_1")}
            </span>{" "}
            <span className="text-slate-100">
              {t("homepage.hero_variant_c_2")}
            </span>{" "}
            <span className="text-slate-300 font-light">
              {t("homepage.hero_variant_c_3")}
            </span>
          </h1>

          <p
            id="hero-desc"
            className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl"
          >
            {t("homepage.hero_desc")}
          </p>
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            {t("homepage.hero_trusted_by")}
          </p>
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 lg:gap-8 opacity-60 hover:opacity-80 transition-opacity">
            <img
              src={BASFLogoSvg}
              alt="BASF"
              className="h-7 sm:h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={NSLogoSvg}
              alt="NS"
              className="h-7 sm:h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={ABNAmroLogoSvg}
              alt="ABN AMRO"
              className="h-7 sm:h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
            <img
              src={MinVWSLogoSvg}
              alt="Ministerie van Volksgezondheid"
              className="h-9 sm:h-10 lg:h-12 w-auto filter brightness-0 invert"
            />
            <img
              src={ZorgsaamLogoSvg}
              alt="Zorgsaam"
              className="h-7 sm:h-8 lg:h-10 w-auto filter brightness-0 invert"
            />
          </div>
        </div>

        {/* CTA buttons - clean and professional */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            onClick={() => {
              track("cta_primary_clicked");
              window.open("https://calendly.com/basvandriel/30min", "_blank");
            }}
            size="lg"
            className="font-semibold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300 relative group min-h-[48px]"
            aria-describedby="hero-desc"
            aria-label="Book a free 20-minute consultation call with Bas van Driel"
          >
            <span className="relative z-10">
              {t("homepage.hero_cta_primary")}
            </span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Button>
          <Button
            onClick={() => {
              track("cta_secondary_clicked");
              window.location.href =
                "mailto:contact@basvandriel.nl?subject=Quick%20inquiry";
            }}
            variant="ghost"
            size="lg"
            className="font-medium text-slate-300 hover:text-slate-100 min-h-[48px]"
            aria-describedby="hero-desc"
            aria-label="Send a quick email to Bas van Driel"
          >
            {t("homepage.hero_cta_secondary")}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
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

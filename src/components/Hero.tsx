import { Button } from "./ui/Button";
import { trackEvent } from "../utils/analytics";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import NSLogoSvg from "./nslogo.svg";
import ABNAmroLogoSvg from "./abnamrologo.svg";
import BASFLogoSvg from "../BASF-Logo_bw.svg";
import MinVWSLogoSvg from "../vws-logo.svg";

export default function Hero() {
  const { t } = useTranslation();

  function track(action: string) {
    trackEvent("Homepage", action);
  }

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            {t("homepage.hero_available_status")}
          </div>
          <LanguageToggle />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Main content */}
          <div>
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-slate-100">
                {t("homepage.hero_variant_c_1")}
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                {t("homepage.hero_variant_c_2")}{" "}
                {t("homepage.hero_variant_c_3")}
              </span>
            </h1>

            <p
              id="hero-desc"
              className="text-lg text-slate-400 leading-relaxed mb-10"
            >
              {t("homepage.hero_desc")}
            </p>

            {/* Client logos */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4 font-medium">
                Trusted by
              </p>
              <div className="flex items-center flex-wrap gap-6">
                <img
                  src={BASFLogoSvg}
                  alt="BASF"
                  className="h-7 w-auto filter brightness-0 invert opacity-40 hover:opacity-60 transition-opacity"
                />
                <img
                  src={NSLogoSvg}
                  alt="NS"
                  className="h-7 w-auto filter brightness-0 invert opacity-40 hover:opacity-60 transition-opacity"
                />
                <img
                  src={ABNAmroLogoSvg}
                  alt="ABN AMRO"
                  className="h-7 w-auto filter brightness-0 invert opacity-40 hover:opacity-60 transition-opacity"
                />
                <img
                  src={MinVWSLogoSvg}
                  alt="Ministerie van Volksgezondheid"
                  className="h-9 w-auto filter brightness-0 invert opacity-40 hover:opacity-60 transition-opacity"
                />
              </div>
            </div>

            {/* CTA section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => {
                    track("cta_primary_clicked");
                    window.open(
                      "https://calendly.com/contact-basvandriel/30min",
                      "_blank"
                    );
                  }}
                  size="lg"
                  className="font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 group"
                  aria-describedby="hero-desc"
                  aria-label="Book a free 30-minute DevOps assessment"
                >
                  <span>{t("homepage.hero_cta_primary")}</span>
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
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
                  className="text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  aria-describedby="hero-desc"
                  aria-label="Send a quick email"
                >
                  {t("homepage.hero_cta_secondary")}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center flex-wrap gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("homepage.hero_trust_1")}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("homepage.hero_trust_2")}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("homepage.hero_trust_3")}
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Social proof card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 blur-3xl opacity-20"></div>

              {/* Stats card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 space-y-8">
                <div>
                  <p className="text-slate-400 text-sm mb-2">
                    Trusted by 100+ teams
                  </p>
                  <p className="text-2xl font-bold text-slate-100">
                    {t("homepage.hero_social_proof")}
                  </p>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      15+
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-400 mb-1">
                      100%
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Zero Failures
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      4
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Enterprise Clients
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-400 mb-1">
                      99.9%
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Avg Uptime
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="pt-6 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 italic">
                    "Enterprise-grade reliability, freelance flexibility"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

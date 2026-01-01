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

  const renderTrackRecordCard = () => {
    return (
      <div
        className="border-l border-slate-700/20 pl-8 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="space-y-7">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">
              Track Record
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Built for CTOs who need results, not promises
            </p>
          </div>
          <div className="space-y-6">
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                2-4 weeks
              </div>
              <div className="text-xs text-slate-500">
                Average time to measurable impact
              </div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                5 projects
              </div>
              <div className="text-xs text-slate-500">
                Delivered on time, on scope
              </div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                €150K+
              </div>
              <div className="text-xs text-slate-500">
                In client savings generated
              </div>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-xs text-slate-500">
              Direct contracts only · NDA & security cleared
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Full-width background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none -z-10"></div>

      {/* Animated gradient orb */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl animate-pulse opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <section
        className="relative min-h-screen flex flex-col justify-center py-12 lg:py-16"
        aria-labelledby="hero-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Top bar */}
          <div
            className="flex items-center justify-between mb-12 lg:mb-16 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              {t("homepage.hero_available_status")}
            </div>
            <LanguageToggle />
          </div>

          <div className="grid lg:grid-cols-[1.75fr_1fr] gap-12 lg:gap-20 lg:items-start">
            {/* Left column - Main content */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
                className="text-lg text-slate-400 leading-relaxed mb-10 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {t("homepage.hero_desc")}
              </p>

              {/* Client logos */}
              <div
                className="mb-10 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
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
              <div
                className="space-y-6 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row">
                    {/* CTA button */}
                    <Button
                      onClick={() => {
                        track("cta_primary_clicked");
                        window.open(
                          "https://calendly.com/contact-basvandriel/30min",
                          "_blank"
                        );
                      }}
                      size="md"
                      className="font-medium shadow-md shadow-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 group whitespace-nowrap flex-1"
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
                      size="md"
                      className="text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 flex-1"
                      aria-describedby="hero-desc"
                      aria-label="Send a quick email"
                    >
                      {t("homepage.hero_cta_secondary")}
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">
                    {t("homepage.hero_cta_subtext")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Track Record card */}
            <div className="hidden lg:block">{renderTrackRecordCard()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

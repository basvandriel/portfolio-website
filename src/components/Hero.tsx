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
                €2.5M+
              </div>
              <div className="text-xs text-slate-500">
                Documented infrastructure costs saved
              </div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                6 major
              </div>
              <div className="text-xs text-slate-500">
                Enterprise clients served
              </div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                50+
              </div>
              <div className="text-xs text-slate-500">Systems optimized</div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                15+
              </div>
              <div className="text-xs text-slate-500">
                Years enterprise experience
              </div>
            </div>
            <div className="group cursor-default transition-transform hover:translate-x-1">
              <div className="text-2xl font-bold text-emerald-400 mb-1 leading-tight group-hover:text-emerald-300 transition-colors">
                100+
              </div>
              <div className="text-xs text-slate-500">
                Production deployments managed
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
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/basvandriel/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="View source on GitHub"
                onClick={() => trackEvent("External", "github_link_clicked")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <LanguageToggle />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.75fr_1fr] gap-12 lg:gap-20 lg:items-start">
            {/* Left column - Main content */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1
                id="hero-title"
                className="text-5xl sm:text-6xl font-bold leading-[1.1] mb-8 tracking-tight"
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

              {/* Client logos - trust framing */}
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
                className="animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="space-y-4">
                  <Button
                    onClick={() => {
                      track("cta_primary_clicked");
                      window.open(
                        "https://calendly.com/contact-basvandriel/30min",
                        "_blank"
                      );
                    }}
                    size="md"
                    className="w-full sm:w-auto font-semibold !rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-200 group"
                    aria-describedby="hero-desc"
                    aria-label="Book a free 30-minute DevOps assessment"
                  >
                    <span>{t("homepage.hero_cta_primary")}</span>
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>

                  {/* Subtle meta info */}
                  <p className="text-xs text-slate-500">
                    30 min · 3 fixes you can implement · Or{" "}
                    <a
                      href="mailto:contact@basvandriel.nl"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      onClick={() => track("cta_email_clicked")}
                    >
                      just email me
                    </a>{" "}
                    ·{" "}
                    <a
                      href="#case-studies"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      onClick={() => track("hero_case_study_link_clicked")}
                    >
                      see proof
                    </a>
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

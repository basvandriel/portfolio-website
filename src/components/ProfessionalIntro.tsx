import me from "../bas.png";
import { useTranslation } from "react-i18next";

export default function ProfessionalIntro() {
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const langselect = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(langselect);
  };

  return (
    <section className="py-20 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Profile section with detailed bio */}
        <div className="text-center space-y-12">
          <div className="flex flex-col items-center gap-6 pt-12 border-t border-slate-800/30">
            <img
              className="w-28 h-28 rounded-2xl ring-2 ring-slate-700/50 object-cover shadow-xl"
              src={me}
              alt="Bas van Driel"
            />

            <div className="text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-100 mb-2">
                Bas van Driel
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Senior Software & DevOps Engineer
              </p>

              {/* Professional bio */}
              <div className="bg-slate-800/30 rounded-2xl p-6 mb-6 border border-slate-700/30">
                <p className="text-slate-300 leading-relaxed text-lg">
                  {i18n.language === "nl" ? (
                    <>
                      Senior Software & DevOps Engineer met ruim{" "}
                      <strong className="text-slate-200">
                        15 jaar ervaring
                      </strong>{" "}
                      in enterprise-omgevingen, waaronder{" "}
                      <strong className="text-slate-200">ABN AMRO en NS</strong>
                      . Gedreven, communicatief sterk en met een scherp oog voor
                      detail. Excelleer in zowel zelfstandige als teamgerichte
                      settings, met een bewezen trackrecord in het leiden van
                      complexe projecten.{" "}
                      <strong className="text-slate-200">
                        HBO/WO werk- en denkniveau
                      </strong>
                      . Gevestigd in het prachtige{" "}
                      <strong className="text-slate-200">Hulst</strong>.
                    </>
                  ) : (
                    <>
                      Senior Software & DevOps Engineer with over{" "}
                      <strong className="text-slate-200">
                        15 years of experience
                      </strong>{" "}
                      in enterprise environments, including{" "}
                      <strong className="text-slate-200">
                        ABN AMRO and NS
                      </strong>
                      . Driven, strong communicator with a sharp eye for detail.
                      Excel in both independent and team-oriented settings, with
                      a proven track record of leading complex projects.{" "}
                      <strong className="text-slate-200">
                        University-level expertise
                      </strong>
                      . Based in beautiful{" "}
                      <strong className="text-slate-200">
                        Hulst, Netherlands
                      </strong>
                      .
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>🇳🇱 Netherlands & Remote</span>
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>15+ years experience</span>
              </div>
            </div>

            {/* Language toggle */}
            <button
              className="text-xs text-slate-500 font-medium hover:text-slate-300 hover:underline decoration-slate-500 transition-colors"
              onClick={handleLanguageToggle}
            >
              {t("lang_switch")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

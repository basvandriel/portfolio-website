import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { useTranslation } from "react-i18next";

export default function AssessmentOffer() {
  const { t } = useTranslation();

  const handleRequestAssessment = () => {
    window.location.href =
      "mailto:contact@basvandriel.nl?subject=DevOps%20Assessment%20Request&body=Hi%20Bas,%0A%0AI'm%20interested%20in%20getting%20a%20DevOps%20maturity%20assessment%20for%20my%20team.%20Could%20you%20provide%20more%20details%20about%20the%20process?%0A%0AThanks!";
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="p-8 lg:p-12 border-2 border-emerald-500/20 relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-sky-500/5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6 animate-pulse">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                ⚡ Limited Availability - Only 2 Spots Left This Month
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                {t("homepage.leadmagnet_title_1")}{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                  {t("homepage.leadmagnet_title_2")}
                </span>
                ?
              </h2>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {t("homepage.leadmagnet_description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-4">
                  {t("homepage.leadmagnet_discover_title")}
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    {t("homepage.leadmagnet_discover_1")}
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    {t("homepage.leadmagnet_discover_2")}
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    {t("homepage.leadmagnet_discover_3")}
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-emerald-400 text-sm">✓</span>
                    </div>
                    {t("homepage.leadmagnet_discover_4")}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">
                    {t("homepage.leadmagnet_ready_title")}
                  </h4>
                  <p className="text-slate-400 mb-6">
                    {t("homepage.leadmagnet_ready_desc")}
                  </p>

                  <Button
                    onClick={handleRequestAssessment}
                    size="lg"
                    className="font-semibold mb-4 w-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    {t("homepage.leadmagnet_cta")}
                  </Button>

                  <p className="text-xs text-slate-500 mb-4">
                    {t("homepage.leadmagnet_commitment")}
                  </p>
                  
                  {/* Social proof indicators */}
                  <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>5-min request</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📊</span>
                      <span>Personalized</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🔒</span>
                      <span>Private</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

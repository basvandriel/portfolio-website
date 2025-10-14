import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { useTranslation } from "react-i18next";

export default function LeadMagnet() {
  const { t } = useTranslation();

  const handleRequestAssessment = () => {
    window.location.href =
      "mailto:contact@basvandriel.nl?subject=DevOps%20Assessment%20Request&body=Hi%20Bas,%0A%0AI'm%20interested%20in%20getting%20a%20DevOps%20maturity%20assessment%20for%20my%20team.%20Could%20you%20provide%20more%20details%20about%20the%20process?%0A%0AThanks!";
  };

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900/20 to-sky-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="p-12 bg-slate-800/50 border-emerald-500/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-sky-500/5"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                {t("homepage.leadmagnet_badge")}
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                {t("homepage.leadmagnet_title_1")}{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
                  {t("homepage.leadmagnet_title_2")}
                </span>
                ?
              </h2>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {t("homepage.leadmagnet_description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
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

              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 text-center">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">
                    {t("homepage.leadmagnet_ready_title")}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {t("homepage.leadmagnet_ready_desc")}
                  </p>
                </div>

                <Button
                  onClick={handleRequestAssessment}
                  className="w-full py-3 text-lg font-semibold mb-4"
                >
                  {t("homepage.leadmagnet_cta")}
                </Button>

                <p className="text-xs text-slate-500">
                  {t("homepage.leadmagnet_commitment")}
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-400">
                {t("homepage.leadmagnet_footer")}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

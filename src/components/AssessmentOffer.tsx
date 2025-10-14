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
        <Card className="p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Limited to 3 assessments per month
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
              {t("homepage.leadmagnet_title_1")}{" "}
              <span className="text-slate-300">
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
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("homepage.leadmagnet_discover_1")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("homepage.leadmagnet_discover_2")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("homepage.leadmagnet_discover_3")}
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t("homepage.leadmagnet_discover_4")}
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-slate-100 mb-3">
                  {t("homepage.leadmagnet_ready_title")}
                </h4>
                <p className="text-slate-400 mb-6">
                  {t("homepage.leadmagnet_ready_desc")}
                </p>

                <Button
                  onClick={handleRequestAssessment}
                  size="lg"
                  className="font-medium mb-3"
                >
                  {t("homepage.leadmagnet_cta")}
                </Button>

                <p className="text-xs text-slate-500">
                  {t("homepage.leadmagnet_commitment")}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

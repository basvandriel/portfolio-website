import Card from "./ui/Card";
import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";

export default function Engagement() {
  const { t } = useTranslation();

  const engagementModels = [
    {
      titleKey: "homepage.engagement_advisory_title",
      durationKey: "homepage.engagement_advisory_duration",
      descriptionKey: "homepage.engagement_advisory_desc",
      featureKeys: [
        "homepage.engagement_advisory_feature_1",
        "homepage.engagement_advisory_feature_2",
        "homepage.engagement_advisory_feature_3",
        "homepage.engagement_advisory_feature_4",
      ],
      ctaKey: "homepage.engagement_advisory_cta",
    },
    {
      titleKey: "homepage.engagement_scoped_title",
      durationKey: "homepage.engagement_scoped_duration",
      descriptionKey: "homepage.engagement_scoped_desc",
      featureKeys: [
        "homepage.engagement_scoped_feature_1",
        "homepage.engagement_scoped_feature_2",
        "homepage.engagement_scoped_feature_3",
        "homepage.engagement_scoped_feature_4",
      ],
      ctaKey: "homepage.engagement_scoped_cta",
    },
    {
      titleKey: "homepage.engagement_retainer_title",
      durationKey: "homepage.engagement_retainer_duration",
      descriptionKey: "homepage.engagement_retainer_desc",
      featureKeys: [
        "homepage.engagement_retainer_feature_1",
        "homepage.engagement_retainer_feature_2",
        "homepage.engagement_retainer_feature_3",
        "homepage.engagement_retainer_feature_4",
      ],
      ctaKey: "homepage.engagement_retainer_cta",
    },
  ];
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
          {t("homepage.engagement_title")}
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          {t("homepage.engagement_subtitle")}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {engagementModels.map((model, index) => (
          <Card
            key={index}
            className="p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-slate-100">
                  {t(model.titleKey)}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  {t(model.durationKey)}
                </span>
              </div>
            </div>

            <p className="text-slate-300 mb-6 flex-grow leading-relaxed text-lg">
              {t(model.descriptionKey)}
            </p>

            <ul className="text-slate-400 mb-8 space-y-3">
              {model.featureKeys.map((featureKey, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  {t(featureKey)}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full group-hover:border-emerald-500/50 group-hover:text-emerald-400"
              onClick={() => {
                window.location.href = `mailto:bas@basvandriel.nl?subject=${encodeURIComponent(
                  t(model.ctaKey) + " - inquiry"
                )}`;
              }}
            >
              {t(model.ctaKey)}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

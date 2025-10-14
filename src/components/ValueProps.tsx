import Card from "./ui/Card";
import { useTranslation } from "react-i18next";

export default function ValueProps() {
  const { t } = useTranslation();

  const valueProps = [
    {
      titleKey: "homepage.valueprops_experience_title",
      descKey: "homepage.valueprops_experience_desc",
      metricKey: "homepage.valueprops_experience_metric",
      category: "Experience",
    },
    {
      titleKey: "homepage.valueprops_reliability_title",
      descKey: "homepage.valueprops_reliability_desc",
      metricKey: "homepage.valueprops_reliability_metric",
      category: "Reliability",
    },
    {
      titleKey: "homepage.valueprops_technical_title",
      descKey: "homepage.valueprops_technical_desc",
      metricKey: "homepage.valueprops_technical_metric",
      category: "Technical",
    },
    {
      titleKey: "homepage.valueprops_sustainability_title",
      descKey: "homepage.valueprops_sustainability_desc",
      metricKey: "homepage.valueprops_sustainability_metric",
      category: "Sustainability",
    },
  ];

  return (
    <section className="py-24" aria-labelledby="value-props-heading">
      {/* Simple centered header */}
      <div className="text-center mb-16">
        <h2
          id="value-props-heading"
          className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4"
        >
          {t("homepage.valueprops_title")}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t("homepage.valueprops_subtitle")}
        </p>
      </div>

      {/* Clean 2x2 grid */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto" role="list">
        {valueProps.map((prop, index) => (
          <Card
            key={index}
            className="p-6 border border-slate-700/30 bg-slate-800/20"
            role="listitem"
            as="article"
            aria-labelledby={`value-prop-${index}-title`}
          >
            <div className="mb-3">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {prop.category}
              </span>
            </div>

            <h3
              id={`value-prop-${index}-title`}
              className="text-xl font-bold text-slate-100 mb-3"
            >
              {t(prop.titleKey)}
            </h3>

            <p className="text-slate-300 mb-4 leading-relaxed text-base">
              {t(prop.descKey)}
            </p>

            <div
              className="text-sm text-slate-400 bg-slate-700/30 px-3 py-2 rounded font-medium"
              role="status"
              aria-label={`Metric: ${t(prop.metricKey)}`}
            >
              {t(prop.metricKey)}
            </div>
          </Card>
        ))}
      </div>

      {/* Simple bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm mb-3">
          {t("homepage.valueprops_cta_question")}
        </p>
        <a
          href="mailto:contact@basvandriel.nl?subject=Let's%20discuss%20your%20project"
          className="text-slate-400 hover:text-slate-300 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded px-2 py-1"
          aria-label="Contact us to discuss your project via email"
        >
          {t("homepage.valueprops_cta_link")}
        </a>
      </div>
    </section>
  );
}

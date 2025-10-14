import { useTranslation } from "react-i18next";

export default function SocialProof() {
  const { t } = useTranslation();

  const clientStats = [
    {
      number: "€2.5M+",
      label: t("homepage.socialproof_savings_label"),
      context: t("homepage.socialproof_savings_context"),
    },
    {
      number: "50+",
      label: t("homepage.socialproof_systems_label"),
      context: t("homepage.socialproof_systems_context"),
    },
    {
      number: "15+",
      label: t("homepage.socialproof_experience_label"),
      context: t("homepage.socialproof_experience_context"),
    },
    {
      number: "99.9%",
      label: t("homepage.socialproof_uptime_label"),
      context: t("homepage.socialproof_uptime_context"),
    },
  ];

  const projectHighlights = [
    t("homepage.socialproof_project_1"),
    t("homepage.socialproof_project_2"),
    t("homepage.socialproof_project_3"),
    t("homepage.socialproof_project_4"),
  ];

  return (
    <section className="py-24 bg-slate-900/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-100 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">{stat.context}</div>
            </div>
          ))}
        </div>

        {/* Project highlights */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
          <h2 className="text-gray-900 text-4xl font-extrabold mb-4">
            {t("homepage.social_proof_title")}
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            {t("homepage.social_proof_subtitle")}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {projectHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-emerald-400 text-sm">✓</span>
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">{t("homepage.socialproof_trust_desc")}</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>{t("homepage.socialproof_trust_1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>{t("homepage.socialproof_trust_2")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>{t("homepage.socialproof_trust_3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

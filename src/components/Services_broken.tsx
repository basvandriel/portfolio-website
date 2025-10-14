import { useTranslation } from "react-i18next";
import Card from "./ui/Card";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
          {t("homepage.services_title")}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t("homepage.services_subtitle")}
        </p>
      </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              {t("homepage.services_fullstack_title")}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t("homepage.services_fullstack_desc")}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              {t("homepage.services_devops_title")}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t("homepage.services_devops_desc")}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              {t("homepage.services_data_title")}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t("homepage.services_data_desc")}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              {t("homepage.services_consulting_title")}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t("homepage.services_consulting_desc")}
            </p>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
            Service Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_1")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_2")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_3")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_4")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_5")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_6")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_7")}
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed">
                {t("homepage.services_item_8")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
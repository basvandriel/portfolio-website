import { useTranslation } from "react-i18next";
import Card from "./ui/Card";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("homepage.services_fullstack_title"),
      description: t("homepage.services_fullstack_desc"),
    },
    {
      title: t("homepage.services_devops_title"),
      description: t("homepage.services_devops_desc"),
    },
    {
      title: t("homepage.services_data_title"),
      description: t("homepage.services_data_desc"),
    },
    {
      title: t("homepage.services_consulting_title"),
      description: t("homepage.services_consulting_desc"),
    },
  ];

  const serviceItems = [
    t("homepage.services_item_1"),
    t("homepage.services_item_2"),
    t("homepage.services_item_3"),
    t("homepage.services_item_4"),
    t("homepage.services_item_5"),
    t("homepage.services_item_6"),
    t("homepage.services_item_7"),
    t("homepage.services_item_8"),
  ];

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

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-16">
        {services.map((service, index) => (
          <Card key={index} className="p-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-8 max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-100 mb-6 text-center">
          Service Highlights
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

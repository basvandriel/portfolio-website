import { useTranslation } from "react-i18next";
import Card from "./ui/Card";
import ReactGA from "react-ga4";
import { useIntersectionTracking } from "../hooks/useIntersectionTracking";

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useIntersectionTracking("Services Section");

  const trackServiceInterest = (serviceTitle: string) => {
    ReactGA.event({
      category: "Engagement",
      action: "service_card_hovered",
      label: serviceTitle,
    });
  };

  const services = [
    {
      title: t("homepage.services_fullstack_title"),
      description: t("homepage.services_fullstack_desc"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      accent: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: t("homepage.services_devops_title"),
      description: t("homepage.services_devops_desc"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
          />
        </svg>
      ),
      accent: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: t("homepage.services_data_title"),
      description: t("homepage.services_data_desc"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      accent: "from-purple-500/20 to-violet-500/20",
    },
    {
      title: t("homepage.services_consulting_title"),
      description: t("homepage.services_consulting_desc"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      accent: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24"
      aria-labelledby="services-heading"
    >
      {/* Header with better visual hierarchy */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm mb-6">
          <svg
            className="w-4 h-4 mr-2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Services
        </div>
        <h2
          id="services-heading"
          className="text-3xl lg:text-4xl font-bold text-slate-100 mb-6 leading-tight"
        >
          {t("homepage.services_title")}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {t("homepage.services_subtitle")}
        </p>
      </div>

      {/* Main services grid with enhanced cards */}
      <div
        className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-20"
        role="list"
      >
        {services.map((service, index) => (
          <Card
            key={index}
            className="group p-8 hover:bg-slate-800/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
            as="article"
            role="listitem"
            aria-labelledby={`service-${index}-title`}
            onMouseEnter={() => trackServiceInterest(service.title)}
          >
            {/* Subtle gradient accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative">
              {/* Icon header */}
              <div className="flex items-center mb-6">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700/50 text-slate-300 group-hover:bg-slate-600/50 group-hover:text-slate-200 transition-all duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3
                    id={`service-${index}-title`}
                    className="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

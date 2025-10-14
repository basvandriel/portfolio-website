import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: t("homepage.services_fullstack_title"),
      description: t("homepage.services_fullstack_desc"),
      color: "emerald",
      bgGradient: "from-emerald-500/5 via-emerald-500/10 to-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
        </svg>
      ),
      title: t("homepage.services_devops_title"),
      description: t("homepage.services_devops_desc"),
      color: "sky",
      bgGradient: "from-sky-500/5 via-sky-500/10 to-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t("homepage.services_data_title"),
      description: t("homepage.services_data_desc"),
      color: "purple",
      bgGradient: "from-purple-500/5 via-purple-500/10 to-transparent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t("homepage.services_consulting_title"),
      description: t("homepage.services_consulting_desc"),
      color: "amber",
      bgGradient: "from-amber-500/5 via-amber-500/10 to-transparent"
    }
  ];

  const getIconClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      sky: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    };
    return colorMap[color] || 'bg-slate-500/10 border-slate-500/20 text-slate-400';
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-100 mb-6">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
              {t("homepage.services_title")}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("homepage.services_subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/70 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${service.color}-500/10`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl mb-6 border transition-transform duration-300 group-hover:scale-110 ${getIconClasses(service.color)}`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-sky-400 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/0 to-slate-900/0 group-hover:from-slate-800/20 group-hover:to-slate-900/40 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-3xl p-8 lg:p-12 border border-slate-600/30 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-slate-100 mb-12 text-center">
            Why Choose My Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                {t("homepage.services_feature_1")}
              </h4>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors duration-300">
                {t("homepage.services_feature_2")}
              </h4>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex p-4 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {t("homepage.services_feature_3")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

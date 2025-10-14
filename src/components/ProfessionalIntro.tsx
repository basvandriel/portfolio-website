import me from "../bas.png";
import { useTranslation } from "react-i18next";

export default function ProfessionalIntro() {
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const langselect = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(langselect);
  };

  return (
    <section className="py-20" aria-labelledby="professional-intro-heading">
      <div className="max-w-5xl mx-auto px-6">
        {/* 2-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Profile image and basic info */}
          <aside className="lg:col-span-2" aria-label="Contact information">
            <img
              className="w-32 h-32 rounded-xl object-cover mb-6"
              src={me}
              alt="Professional headshot of Bas van Driel"
              loading="lazy"
            />

            <h2 id="professional-intro-heading" className="text-2xl font-bold text-slate-100 mb-2">
              Bas van Driel
            </h2>
            <p className="text-lg text-slate-400 mb-6">
              Senior Software & DevOps Engineer
            </p>

            {/* Contact & Key info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></div>
                <span>Available for projects</span>
              </div>
              <div className="pt-2 border-t border-slate-800/30">
                <nav aria-label="Contact methods">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="mailto:contact@basvandriel.nl"
                        className="hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded inline-block"
                        aria-label="Send email to contact@basvandriel.nl"
                      >
                        <span aria-hidden="true">✉️ </span>contact@basvandriel.nl
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+31618234567"
                        className="hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded inline-block"
                        aria-label="Call +31 6 18 23 45 67"
                      >
                        <span aria-hidden="true">📱 </span>+31 6 18 23 45 67
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/basvandriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded inline-block"
                        aria-label="Visit Bas van Driel's LinkedIn profile (opens in new tab)"
                      >
                        <span aria-hidden="true">💼 </span>LinkedIn
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="pt-2 border-t border-slate-800/30">
                <address className="not-italic" aria-label="Location">
                  <span aria-hidden="true">📍 </span>Hulst, Netherlands
                </address>
              </div>
            </div>

            {/* Language toggle */}
            <button
              className="mt-6 text-xs text-slate-500 hover:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded px-2 py-1"
              onClick={handleLanguageToggle}
              aria-label={`Switch language to ${i18n.language === "nl" ? "English" : "Dutch"}`}
            >
              {t("lang_switch")}
            </button>
          </aside>

          {/* Right column - Bio */}
          <article className="lg:col-span-3">
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-300 leading-relaxed text-lg">
                {i18n.language === "nl" ? (
                  <>
                    Senior Software & DevOps Engineer met ruim{" "}
                    <strong className="text-slate-200">15 jaar ervaring</strong>{" "}
                    in enterprise-omgevingen, waaronder{" "}
                    <strong className="text-slate-200">
                      ABN AMRO, NS, BASF en het Ministerie van Volksgezondheid
                    </strong>
                    . Gespecialiseerd in het transformeren van chaotische
                    systemen naar betrouwbare, schaalbare infrastructuur.
                  </>
                ) : (
                  <>
                    Senior Software & DevOps Engineer with over{" "}
                    <strong className="text-slate-200">
                      15 years of experience
                    </strong>{" "}
                    in enterprise environments, including{" "}
                    <strong className="text-slate-200">
                      ABN AMRO, NS, BASF, and the Dutch Ministry of Health
                    </strong>
                    . Specialized in transforming chaotic systems into reliable,
                    scalable infrastructure.
                  </>
                )}
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                {i18n.language === "nl" ? (
                  <>
                    Van CI/CD pipelines die deployment-angst elimineren tot
                    monitoring systemen die 3AM alerts voorkomen. Ik help
                    engineering teams sneller deliveren met minder stress en
                    meer vertrouwen. Gedreven, communicatief sterk en met een
                    scherp oog voor detail.
                  </>
                ) : (
                  <>
                    From CI/CD pipelines that eliminate deployment anxiety to
                    monitoring systems that prevent 3AM alerts. I help
                    engineering teams deliver faster with less stress and more
                    confidence. Driven, strong communicator with a sharp eye for
                    detail.
                  </>
                )}
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                {i18n.language === "nl" ? (
                  <>
                    Excelleer in zowel zelfstandige als teamgerichte settings,
                    met een bewezen trackrecord in het leiden van complexe
                    projecten van concept tot productie. HBO/WO werk- en
                    denkniveau, gevestigd in het prachtige Hulst maar werkzaam
                    voor klanten door heel Nederland en daarbuiten.
                  </>
                ) : (
                  <>
                    Excel in both independent and team-oriented settings, with a
                    proven track record of leading complex projects from concept
                    to production. University-level expertise, based in
                    beautiful Hulst but serving clients throughout the
                    Netherlands and beyond.
                  </>
                )}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

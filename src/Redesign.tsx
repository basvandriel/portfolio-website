import { Link } from "react-router-dom";
import me from "./bas.png";
import EducationSection from "./RedesignedEducationSection";
import WorkSection from "./RedesignedWorkSection";
import { useTranslation } from "react-i18next";

const HeadBanner = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-24 w-24 rounded-full ring-1 ring-zinc-600">
        <img
          src={me}
          className="h-full w-full rounded-full object-cover"
          alt="me"
        />
      </div>

      <div className="">
        <h4 className="text-base font-semibold text-zinc-200">Bas van Driel</h4>
        <span className="text-sm text-zinc-400">
          Senior Python Developer, DevOps Engineer
        </span>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4 ">
      <ul className="col-span-4">
        <li className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-400">
            {t("telephone")}
          </span>
          <a
            className="text-sm text-zinc-500 hover:underline lg:col-span-4"
            href="tel:+31683864762"
          >
            +316 83 86 47 62
          </a>
        </li>
        <li className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 mb-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-400">
            {t("emailaddress")}
          </span>
          <a
            className="text-sm text-zinc-500 hover:underline lg:col-span-4"
            href="mailto:contact@basvandriel.nl"
          >
            contact@basvandriel.nl
          </a>
        </li>
        <li className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-400">
            LinkedIn
          </span>
          <a
            className="text-sm text-zinc-500 hover:underline lg:col-span-4"
            href="https://www.linkedin.com/in/basvandriel/"
          >
            @basvandriel
          </a>
        </li>
        <li className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-400">
            GitHub
          </span>
          <a
            className="text-sm text-zinc-500 hover:underline lg:col-span-4"
            href="https://github.com/basvandriel"
          >
            @basvandriel
          </a>
        </li>
      </ul>
    </div>
  );
};

const AboutMeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-8 mb-8">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">{t("profile")}</h4>
      <p className="text-sm text-zinc-400">{t("profile_intro")}</p>
      <SocialLinks />
      <div className="flex items-center mt-4 space-x-4">
        <Link to="https://calendly.com/contact-basvandriel/30min">
          <button className="text-sm text-slate-400 font-medium bg-slate-800 py-1 px-4 rounded-md">
            Plan een kennismaking
          </button>
        </Link>

        <Link to="/cv" className="hover:underline decoration-slate-600">
          <span className="text-sm text-slate-600">Download volledig cv</span>
        </Link>
      </div>
    </section>
  );
};

const Redesign = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="text-white max-w-xl mx-auto mt-8">
        <button
          className="text-xs text-zinc-600 mb-8 font-medium hover:underline decoration-zinc-600"
          onClick={() => {
            const langselect = i18n.language === "nl" ? "en" : "nl";
            i18n.changeLanguage(langselect);
          }}
        >
          {t("lang_switch")}
        </button>

        <HeadBanner />
        <AboutMeSection />
        <WorkSection />
        <EducationSection />
      </div>
    </>
  );
};

export default Redesign;

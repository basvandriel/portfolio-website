import { Link } from "react-router-dom";
import me from "./bas.png";
import EducationSection from "./RedesignedEducationSection";
import WorkSection from "./RedesignedWorkSection";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import ReactGA from "react-ga4";

const HeadBanner = () => {
  return (
    <div className="flex items-center space-x-4 lg:px-2">
      <img
        className="size-24 rounded-full ring-1 ring-zinc-600 object-cover"
        src={me}
        alt="me"
      />

      <div className="">
        <h4 className="text-base font-semibold text-zinc-200">Bas van Driel</h4>
        <span className="text-sm text-zinc-400">
          Senior Software & DevOps Engineer
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
        <li className="grid grid-cols-1 lg:gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-5 mb-2 lg:mb-0">
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

        <li className="grid grid-cols-1 lg:gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-5 mb-2">
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

        <li className="grid grid-cols-1 lg:gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-5 mb-2 lg:mb-0">
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

        <li className="grid grid-cols-1 lg:gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-5">
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
    <section className="mt-8 mb-8 lg:px-2">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">{t("profile")}</h4>
      <p className="text-sm text-zinc-400">{t("profile_intro")}</p>
      <SocialLinks />
      <div className="flex items-center mt-4 space-x-4">
        <Link
          to="https://calendly.com/contact-basvandriel/30min"
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "plan_meeting_clicked",
            });
          }}
        >
          <button className="text-sm text-slate-400 font-medium bg-slate-800 py-1 px-4 rounded-md">
            {t("scheduleintroduction")}
          </button>
        </Link>

        <Link
          to="/cv"
          className="hover:underline decoration-slate-600"
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "download_cv_button_clicked",
            });
          }}
        >
          <span className="text-sm text-slate-600">{t("downloadresume")}</span>
        </Link>
      </div>
    </section>
  );
};

const Redesign = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    ReactGA.event({ category: "User", action: "redesign event" });
  }, []);

  return (
    <>
      <div className="text-white max-w-2xl mx-auto lg:mt-8 p-8 lg:p-0">
        <button
          className="text-xs text-zinc-600 mb-8 font-medium hover:underline decoration-zinc-600 lg:px-2"
          onClick={() => {
            const langselect = i18n.language === "nl" ? "en" : "nl";
            i18n.changeLanguage(langselect);

            ReactGA.event({
              category: "User",
              action: `Language switched to ${langselect}`,
            });
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

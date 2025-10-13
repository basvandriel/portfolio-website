import me from "./bas.png";
import { useTranslation } from "react-i18next";

import ReactGA from "react-ga4";
import { Link } from "react-router";
import { useEffect } from "react";
import Homepage from "./components/Homepage";

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
        <Homepage />
      </div>
    </>
  );
};

export default Redesign;

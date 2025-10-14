import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);

    // Track language changes
    ReactGA.event({
      category: "Language",
      action: "language_switched",
      label: `${i18n.language} -> ${newLang}`,
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 font-medium"
      aria-label="Switch language"
    >
      {i18n.language === "nl" ? "EN" : "NL"}
    </button>
  );
}

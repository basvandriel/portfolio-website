import { useTranslation } from "react-i18next";
import { trackEvent } from "../utils/analytics";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);

    // Track language changes
    trackEvent(
      "Language",
      "language_switched",
      `${i18n.language} -> ${newLang}`
    );
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-600/30 text-slate-500 hover:text-slate-300 hover:border-slate-500/50 text-sm transition-all duration-200 font-medium"
      aria-label="Switch language"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      {i18n.language === "nl" ? "EN" : "NL"}
    </button>
  );
}

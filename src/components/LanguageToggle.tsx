import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "nl" ? "en" : "nl";
    i18n.changeLanguage(newLang);
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

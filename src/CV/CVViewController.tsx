import { PDFViewer } from "@react-pdf/renderer";
import CV from ".";

import "./register_fonts_require";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CVViewController = ({ lang }: { lang: string }) => {
  const { i18n } = useTranslation();
  const [languageLoaded, setLanguageLoaded] = useState(false);

  useEffect(() => {
    // Ensure we set languageLoaded only after the language actually changed.
    if (i18n.language !== lang) {
      // changeLanguage returns a promise in i18next
      i18n.changeLanguage(lang).then(() => setLanguageLoaded(true));
    } else {
      setLanguageLoaded(true);
    }
  }, [i18n, lang]);

  if (!languageLoaded) return null;

  return (
    <PDFViewer
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <CV />
    </PDFViewer>
  );
};

export default CVViewController;

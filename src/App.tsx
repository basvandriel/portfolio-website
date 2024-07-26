import { useState } from "react";
import IntroBox from "./IntroBox";
import AboutBox from "./AboutBox";

import ExperienceBox from "./ExperienceBox";
import EducationBox from "./EducationBox";
import OpenToWorBox from "./OpenToWorkBox";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation()
  const [openToWorkBannerActive, setOpenToWorkBannerActive] = useState(true);

  return (
    <>
      {openToWorkBannerActive && (
        <OpenToWorBox
          onClose={() => {
            setOpenToWorkBannerActive(false);
          }}
        />
      )}

      <div className="max-w-5xl mx-auto m-4 px-4">

        <div className="flex justify-end mb-2">
          <button onClick={() => {
            const langselect = i18n.language === 'nl' ? 'en' : 'nl'
            i18n.changeLanguage(langselect)
          }}>
            <span className="text-xs text-gray-800 font-medium">{t('lang_switch')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          <div className="space-y-4">
            <IntroBox />
            <AboutBox />
          </div>

          <div className="col-span-2 space-y-4">
            <ExperienceBox />
            <EducationBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

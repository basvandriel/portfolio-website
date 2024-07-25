import { useTranslation } from "react-i18next";
import ExperienceListing from "./ExperienceListing";

import data from './translateable_experience_data'

const ExperienceBox = () => {
  const { t  } = useTranslation()
  return (
    <div className="bg-white rounded-xl mt-4 lg:mt-0">
      <div className="p-1">
        <div className="p-4 font-medium text-base">{t('experience')}</div>
        {data.map((v, i) => {
          return <ExperienceListing {...v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;

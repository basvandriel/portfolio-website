import { useTranslation } from "react-i18next";
import ExperienceListing from "./ExperienceListing";
import EXPERIENCE from "./experience";
import EXPERIENCE_EN from './experience_en'

const ExperienceBox = () => {
  const { i18n } = useTranslation()

  const data = i18n.language === 'nl' ? EXPERIENCE : EXPERIENCE_EN

  return (
    <div className="bg-white rounded-xl mt-4 lg:mt-0">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Ervaring</div>
        {data.map((v, i) => {
          return <ExperienceListing {...v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;

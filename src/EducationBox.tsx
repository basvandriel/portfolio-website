import { useTranslation } from "react-i18next";
import EducationListing from "./EducationListing";

const EducationBox = () => {
  const { t } = useTranslation()


  return (
    <div className="bg-white rounded-xl">
      <div className="p-1">
        <div className="p-4 font-medium text-base">{t('education')}</div>

        <EducationListing
          title={"Applicatie- en mediaontwikkeling (niveau 4)"}
          school="ROC"
          location={`Vlissingen, ${t('netherlands')}`}
          start_date={"2016"}
          end_date="2019"
          current_experience={false}
        />
        <EducationListing
          title={"Medewerker Beheer ICT (niveau 3)"}
          school="ROC"
          location={`Vlissingen, ${t('netherlands')}`}
          start_date={"2015"}
          end_date="2016"
          current_experience={false}
        />
        <EducationListing
          title={"Medewerker ICT (niveau 2)"}
          school="ROC"
          location={`Vlissingen, ${t('netherlands')}`}
          start_date={"2015"}
          end_date="2016"
          current_experience={false}

        />
      </div>
    </div>
  );
};

export default EducationBox;

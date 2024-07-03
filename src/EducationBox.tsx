import EducationListing from "./EducationListing";

const EducationBox = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Educatie</div>

        <EducationListing
          title={"Applicatie- en mediaontwikkeling (niveau 4)"}
          school="ROC"
          location="Vlissingen, Nederland"
          start_date={"2016"}
          end_date="2019"
        />
        <EducationListing
          title={"Medewerker Beheer ICT (niveau 3)"}
          school="ROC"
          location="Vlissingen, Nederland"
          start_date={"2015"}
          end_date="2016"
        />
        <EducationListing
          title={"Medewerker ICT (niveau 2)"}
          school="ROC"
          location="Vlissingen, Nederland"
          start_date={"2015"}
          end_date="2016"
        />
      </div>
    </div>
  );
};

export default EducationBox;

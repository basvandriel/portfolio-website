import ExperienceListing from "./ExperienceListing";
import abnlogo from "./abn_amro_logo.jpeg";
const DEFAULT_DESCRIPTION = `
Het ontwikkelen, beheren en ondersteunen van een stuk maatwerksoftware
voor het beschikbaar stellen en transformeren van data op grootte
schaal. Hierbij werd gebruik gemaakt van verschillende Azure services
zoals Databricks, Data Factory en de pipelines. Tevens word ook veel
DevOps gerelateerd werk verricht: denk hierbij aan het ontwikkelen en
beheren van CI/CD pipelines en het onderhouden en productie-klaar maken
van een Azure omgeving.
`;

let default_tags = [
  "Python",
  "Test-driven development",
  "Azure",
  "DevOps",
  "Git",
  "Agile",
  "CI/CD",
  "Azure DevOps",
  "Azure Databricks",
  "Azure Functions",
  "Azure Data Factory"
];


const ExperienceBox = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Experience</div>

        <ExperienceListing
          title={"Senior Python Developer, DevOps Engineer"}
          company="ABN AMRO"
          location="Amsterdam, Nederland"
          start_date={"april 2023"}
          current_experience={true}
          description={DEFAULT_DESCRIPTION}
          tags={default_tags}
          company_logo={abnlogo}
        />
      </div>
    </div>
  );
};

export default ExperienceBox
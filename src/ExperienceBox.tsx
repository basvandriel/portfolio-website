import ExperienceListing from "./ExperienceListing";
import abnlogo from "./abn_amro_logo.jpeg";
import nslogo from "./nslogo.jpeg";
import hetveerlogo from "./hetveer.jpeg";
import pixelsquarelogo from "./pixelsquarelogo.jpeg";
import EXPERIENCE from "./experience";
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
  "Azure Data Factory",
];

const ExperienceBox = () => {
  return (
    <div className="bg-white rounded-xl mt-4 lg:mt-0">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Ervaring</div>
        {EXPERIENCE.map((v, i) => {
          return <ExperienceListing {...v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;

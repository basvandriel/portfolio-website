import ExperienceListing from "./ExperienceListing";
import abnlogo from "./abn_amro_logo.jpeg";
import nslogo from './nslogo.jpeg'
import hetveerlogo from './hetveer.jpeg'

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
    <div className="bg-white rounded-xl">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Ervaring</div>

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
        <ExperienceListing
          title={"Senior Python Developer, DevOps Engineer"}
          company="Het Veer"
          location="Deinze, België"
          start_date={"october 2022"}
          end_date="april 2023"
          description={`
            Het ontwikkelen en beheren van een applicatie die voor de real-time aansturing en testen zorgt van meerdere soorten middenspanningsinstallaties.
            Hierbij ligt mijn focus voornamelijk op Python development, te samen met het werk aan DevOps tools zoals Git, Jenkins en verschillende Microsoft Azure services. Tevens verzorg ik de front-end ontwikkeling.
          `}
          company_logo={hetveerlogo}
          tags={[
            "Python",
            "Test-driven development",
            "Embedded software development",
            "Git",
            "Agile",
            "CI/CD",
            "Azure DevOps",
            "TypeScript",
            "JavaScript"
          ]}
        />
        <ExperienceListing
          title={"Senior Python Developer, DevOps Engineer"}
          company="NS"
          location="Utrecht, Nederland"
          start_date={"may 2022"}
          end_date="october 2022"
          description={`
            Het werk aan innovatie en uitdagende software development; een beslissingsondersteunende applicatie voor het en real-time inroosteren van spoorweg werkzaamheden. Hierbij ligt mijn focus op Python development in samenwerking met verschillende Microsoft Azure services.
          `}
          company_logo={nslogo}
          tags={[
            "Python",
            "Test-driven development",
            "Embedded software development",
            "Git",
            "Agile",
            "CI/CD",
            "Azure DevOps",
          ]}
        />
      </div>
    </div>
  );
};

export default ExperienceBox;

import React from "react";
import IntroBox from "./IntroBox";
import AboutBox from "./AboutBox";

import ExperienceBox from "./ExperienceBox";

import abnlogo from "./abn_amro_logo.jpeg";

function App() {
  let default_tags = [
    "Python",
    "Databricks",
    "Test-driven development",
    "Azure",
    "DevOps",
    "Git",
    "Agile",
    "CI/CD",
    "Azure DevOps",
    "Azure Functions",
  ];

  const DEFAULT_DESCRIPTION = `
    Het ontwikkelen, beheren en ondersteunen van een stuk maatwerksoftware
    voor het beschikbaar stellen en transformeren van data op grootte
    schaal. Hierbij werd gebruik gemaakt van verschillende Azure services
    zoals Databricks, Data Factory en de pipelines. Tevens word ook veel
    DevOps gerelateerd werk verricht: denk hierbij aan het ontwikkelen en
    beheren van CI/CD pipelines en het onderhouden en productie-klaar maken
    van een Azure omgeving.
  `;

  return (
    <div className="max-w-5xl mx-auto m-4 px-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <IntroBox />
          <AboutBox />

        </div>

        {/* TODO experience thing */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl">
            <div className="p-1">
              <div className="p-4 font-medium text-base">Experience</div>

              <ExperienceBox
                title={"Senior Python Developer, DevOps Engineer"}
                company="ABN AMRO"
                location="Amsterdam, Nederland"
                start_date={"april 2023"}
                current_experience={true}
                description={DEFAULT_DESCRIPTION}
                tags={default_tags}
                company_logo={abnlogo}
              />
              <ExperienceBox
                title={"Senior Python Developer, DevOps Engineer"}
                company="ABN AMRO"
                location="Amsterdam, Nederland"
                start_date={"april 2023"}
                end_date="april 2023"
                description={DEFAULT_DESCRIPTION}
                tags={default_tags}
              />
              <ExperienceBox
                title={"Senior Python Developer, DevOps Engineer"}
                company="ABN AMRO"
                location="Amsterdam, Nederland"
                start_date={"april 2023"}
                end_date="april 2023"
                description={DEFAULT_DESCRIPTION}
                tags={default_tags}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

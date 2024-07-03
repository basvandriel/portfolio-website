import React from "react";
import IntroBox from "./IntroBox";
import AboutBox from "./AboutBox";

import Briefcase from "@heroicons/react/24/outline/BriefcaseIcon";
import Map from "@heroicons/react/24/outline/MapPinIcon";

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type ExperienceProps = {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date?: string;
  current_experience: boolean;
};

const ExperienceBox = ({
  title,
  company,
  location,
  start_date,
  end_date,
  current_experience,
}: ExperienceProps) => {
  return (
    <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm mb-1">
      {/* job title */}
      <span className="font-medium">{title}</span>

      {/* job tags */}
      <div className="flex w-full gap-x-4 gap-y-2 items-center my-2">
        <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
          <Briefcase className="h-4 w-4" />
          {company}
        </div>

        <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
          <Map className="h-4 w-4" />
          {location}
        </div>

        <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
          <CalendarDaysIcon className="h-4 w-4" />
          {start_date} - {current_experience ? "present" : end_date}
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Het ontwikkelen, beheren en ondersteunen van een stuk maatwerksoftware
        voor het beschikbaar stellen en transformeren van data op grootte
        schaal. Hierbij werd gebruik gemaakt van verschillende Azure services
        zoals Databricks, Data Factory en de pipelines. Tevens word ook veel
        DevOps gerelateerd werk verricht: denk hierbij aan het ontwikkelen en
        beheren van CI/CD pipelines en het onderhouden en productie-klaar maken
        van een Azure omgeving.
      </p>
    </div>
  );
};
ExperienceBox.defaultProps = {
  current_experience: false,
};

function App() {
  return (
    <div className="max-w-5xl mx-auto m-4 px-4">
      <div className="grid grid-cols-3 gap-4">
        <IntroBox />
        {/* TODO experience thing */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl">
            <div className="p-1">
              <div className="p-4">Experience</div>

              <ExperienceBox
                title={"Senior Python Developer, DevOps Engineer"}
                company="ABN AMRO"
                location="Amsterdam, Nederland"
                start_date={"april 2023"}
                current_experience={true}
              />
              <ExperienceBox
                title={"Senior Python Developer, DevOps Engineer"}
                company="ABN AMRO"
                location="Amsterdam, Nederland"
                start_date={"april 2023"}
                end_date="april 2023"
              />
            </div>
          </div>
        </div>
        <AboutBox />
      </div>
    </div>
  );
}

export default App;

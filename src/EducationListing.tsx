import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import Briefcase from "@heroicons/react/24/outline/BriefcaseIcon";
import Map from "@heroicons/react/24/outline/MapPinIcon";
import { useTranslation } from "react-i18next";
import { EducationProps } from "./EducationProps";

const ExperienceListing = ({
  title,
  school,
  location,
  start_date,
  end_date,
  current_experience,
  description,
  company_logo,
}: EducationProps) => {
  const { t } = useTranslation()

  return (
    <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm mb-1 group">
      <div className="flex w-full gap-4">
        {company_logo ? (
          <img
            src={company_logo}
            alt="companylogo"
            className="h-12 w-12 max-w-full block rounded-full shadow-sm"
          />
        ) : (
          <div>
            <div className="h-12 w-12 block rounded-full shadow-sm bg-gray-200"></div>
          </div>
        )}

        <div>
          <span className="font-medium">{title}</span>

          {/* job tags */}
          <div className="flex flex-wrap w-full gap-x-2 lg:gap-x-4 gap-y-2 items-center my-2">
            <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
              <Briefcase className="h-4 w-4" />
              {school}
            </div>

            <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
              <Map className="h-4 w-4" />
              {location}
            </div>

            <div className="flex items-center align-middle text-xs text-gray-600 gap-1 font-medium">
              <CalendarDaysIcon className="h-4 w-4" />
              {start_date} - {current_experience ? t('present') : end_date}
            </div>
          </div>

          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
ExperienceListing.default = {
  current_experience: false,
};

export default ExperienceListing;

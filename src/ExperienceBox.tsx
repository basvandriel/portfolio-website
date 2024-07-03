import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import Briefcase from "@heroicons/react/24/outline/BriefcaseIcon";
import Map from "@heroicons/react/24/outline/MapPinIcon";

const ExperienceTag = ({ text }: { text: string }) => {
  return (
    <span className="text-xs bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-md items-center text-center group-hover:bg-gray-300">
      {text}
    </span>
  );
};

type ExperienceProps = {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date?: string;
  current_experience: boolean;
  description: string;
  tags: string[];
};

const ExperienceBox = ({
  title,
  company,
  location,
  start_date,
  end_date,
  current_experience,
  description,
  tags,
}: ExperienceProps) => {
  return (
    <div className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm mb-1 group">
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

      <p className="text-sm text-gray-600">{description}</p>

      <div className="mt-4 space-x-1">
        {tags.map((v, i) => {
          return <ExperienceTag key={i} text={v} />;
        })}
      </div>
    </div>
  );
};
ExperienceBox.defaultProps = {
  current_experience: false,
};

export default ExperienceBox
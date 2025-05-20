import { useTranslation } from "react-i18next";
import WorkListing from "./WorkListing";
import data from "./work_data";

const WorkExperienceTag = ({ value }: { value: string }) => (
  <span className="flex items-center align-middle text-xs text-zinc-400 bg-slate-800 font-medium py-1 px-2 rounded-md ">
    {value}
  </span>
);

const WorkExperienceListing = ({
  work: { start, end, jobTitle, tags, company, description_translation_key },
}: {
  work: WorkListing;
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: `workexp.${start.getFullYear()}`,
  });
  const { t: tbase } = useTranslation();

  let formattedStart = start.getFullYear();
  let formattedEnd = end != null ? end.getFullYear() : tbase("present");

  const formattedDate =
    formattedStart !== formattedEnd
      ? `${formattedStart} - ${formattedEnd}`
      : formattedStart;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-2 lg:gap-4 hover:bg-slate-800/50 p-2 rounded-md transition-all">
      <div className="text-xs text-zinc-400 font-medium">{formattedDate}</div>

      <div className="col-span-4">
        <h4 className="text-sm text-zinc-200 font-semibold align-middle leading-none">
          {jobTitle.trim()}
        </h4>
        <h5 className="text-sm text-zinc-400 font-medium mt-1">{company}</h5>
        <p className="text-sm my-2 text-zinc-400">
          {t(description_translation_key)}
        </p>
        {/* work tags */}
        <div className="flex flex-row flex-wrap w-auto gap-1">
          {tags.map((value, index) => {
            return <WorkExperienceTag key={index} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-4 mb-8">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">
        {t("work_experience_word")}
      </h4>

      <div className="space-y-8">
        {data.map((value, index) => {
          return <WorkExperienceListing key={index} work={value} />;
        })}
      </div>
    </section>
  );
};

export default WorkSection;

import WorkListing from "./WorkListing";
import data from "./work_data";

const WorkExperienceTag = ({ value }: { value: string }) => (
  <span className="flex items-center align-middle text-xs text-zinc-400 bg-zinc-800 font-medium py-1 px-2 rounded-md ">
    {value}
  </span>
);

const WorkExperienceListing = ({
  work: { start, end, jobDescription, jobTitle, tags, company },
}: {
  work: WorkListing;
}) => {
  const startYear = start.getFullYear();
  const endYear = start.getFullYear();

  const formattedDate =
    startYear === endYear ? startYear : startYear + " - heden";

  return (
    <div className="grid grid-cols-5 w-full gap-4">
      <div className="text-xs text-zinc-400 font-medium">{formattedDate}</div>

      {/* description section */}
      <div className="col-span-4">
        <h4 className="text-sm text-zinc-200 font-semibold align-middle leading-none">
          {jobTitle.trim()}
        </h4>
        <h5 className="text-sm text-zinc-400 font-medium mt-1">{company}</h5>
        <p className="text-sm my-2 text-zinc-400">{jobDescription.trim()}</p>

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
  return (
    <section className="mt-4 mb-8">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">Werkervaring</h4>

      <div className="space-y-8">
        {data.map((value, index) => {
          return <WorkExperienceListing key={index} work={value} />;
        })}
      </div>
    </section>
  );
};

export default WorkSection;

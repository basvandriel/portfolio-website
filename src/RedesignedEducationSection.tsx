interface EducationListingData {
  start: Date;
  end: Date;
  trainingName: string;
}

const data: EducationListingData[] = [
  {
    start: new Date("2016-01-01"),
    end: new Date("2019-01-01"),
    trainingName: "Applicatie en mediaontwikkeling",
  },
  {
    start: new Date("2015-01-01"),
    end: new Date("2016-01-01"),
    trainingName: "Medewerker Beheer ICT",
  },
];

const EducationListing = ({
  work: { start, end, trainingName },
}: {
  work: EducationListingData;
}) => {
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  let formattedDate =
    startYear === endYear ? startYear : startYear + " - " + endYear;

  if (!endYear) {
    formattedDate = startYear + " - heden";
  }

  return (
    <div className="grid grid-cols-5 w-full gap-4">
      <div className="text-xs text-zinc-400 font-medium">{formattedDate}</div>

      {/* description section */}
      <div className="col-span-4">
        <h4 className="text-sm text-zinc-200 font-semibold align-middle leading-none">
          {trainingName.trim()}
        </h4>
        {/* <h5 className="text-sm text-zinc-400 font-medium mt-1">{company}</h5>
        <p className="text-sm my-2 text-zinc-400">{jobDescription.trim()}</p> */}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className="mt-4 pb-8">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">Educatie</h4>

      <div className="space-y-4">
        {data.map((value, index) => {
          return <EducationListing key={index} work={value} />;
        })}
      </div>
    </section>
  );
};

export default EducationSection;

import me from "./bas.png";

const HeadBanner = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-24 w-24 rounded-full ring-1 ring-zinc-600">
        <img
          src={me}
          className="h-full w-full rounded-full object-cover"
          alt="me"
        />
      </div>

      <div className="">
        <h4 className="text-base font-semibold text-zinc-200">Bas van Driel</h4>
        <span className="text-sm text-zinc-400">
          Senior Python Developer, DevOps Engineer
        </span>
      </div>
    </div>
  );
};

const AboutMeSection = () => (
  <section className="mt-8">
    <h4 className="text-sm mb-4 font-medium text-zinc-200">Over mij</h4>
    <p className="text-sm text-zinc-400">
      Ik ben een ambitieuze, hardwerkende en gedreven Senior Software Engineer
      met meer dan vieftien jaar ervaring in het vak. Ik heb een oog voor
      detail, ben communicatief vaardig en kan onafhankelijk in groepen en
      zelfstandig werken.
    </p>
  </section>
);

const WorkExperienceTag = ({ value }: { value: string }) => (
  <span className="flex items-center align-middle text-xs text-zinc-400 bg-zinc-800 font-medium py-1 px-2 rounded-md ">
    {value}
  </span>
);

interface WorkListing {
  jobTitle: string;
  jobDescription: string;
  start: Date;
  end: Date | null;
  tags: string[];
}

const WorkExperienceListing = ({
  work: { start, end, jobDescription, jobTitle, tags },
}: {
  work: WorkListing;
}) => {
  const formatter = new Intl.DateTimeFormat("nl-NL", {
    month: "long", // Full month name (e.g., "januari")
    year: "numeric", // Full year (e.g., "2025")
  });
  const formattedStart = formatter.format(start);

  let formattedEnd = "heden";

  if (end) {
    formattedEnd = formatter.format(end);
  }

  return (
    <div className="flex w-full">
      {/* duration section */}
      <div className="w-1/3 text-xs text-zinc-400 font-medium">
        {formattedStart} - {formattedEnd}
      </div>

      {/* description section */}
      <div className="w-2/3">
        <h4 className="text-sm text-zinc-200 font-semibold align-middle leading-none">
          {jobTitle.trim()}
        </h4>
        <p className="text-sm mt-2 text-zinc-400">{jobDescription.trim()}</p>

        {/* work tags */}
        <div className="flex flex-row flex-wrap w-auto mt-2 gap-1 relative">
          {tags.map((value, index) => {
            return <WorkExperienceTag key={index} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const sampleJobDescription: WorkListing = {
    start: new Date("2025-04-01T00:00:00"),
    end: new Date("2025-12-01T00:00:00"),
    jobTitle: "Senior Python Developer, DevOps Engineer",
    jobDescription: `
        Ik ben een ambitieuze, hardwerkende en gedreven Senior Software Engineer
        met meer dan vieftien jaar ervaring in het vak. Ik heb een oog voor
        detail, ben communicatief vaardig en kan onafhankelijk in groepen en
        zelfstandig werken.
      `,
    tags: [
      "Python",
      "C#",
      ".NET",
      "Data Science",
      "PostgreSQL",
      "Test-driven development",
      "Automatic Testing",
      "Go",
      "Azure",
      "DevOps",
      "Git",
      "Agile",
      "CI/CD",
      "SonarQube",
      "Linux",
      "BitBucket",
      "JIRA",
      "RBAC",
      "OAUTH2",
      "IAM",
      "Docker",
      "Kubernetes",
      "HTML",
      "CSS",
      "Containerisation",
      "VoIP",
      "TypeScript",
      "Node.js",
      "Ansible",
    ],
  };
  return (
    <section className="mt-8">
      <h4 className="text-sm mb-4 font-medium text-zinc-200">Werkervaring</h4>

      {/* TOOD fetch experience from files */}
      <div className="space-y-8">
        <WorkExperienceListing work={sampleJobDescription} />
        <WorkExperienceListing work={sampleJobDescription} />
        <WorkExperienceListing work={sampleJobDescription} />
        <WorkExperienceListing work={sampleJobDescription} />
      </div>
    </section>
  );
};

const Redesign = () => {
  return (
    <div className="text-white max-w-xl mx-auto mt-16">
      <HeadBanner />
      <AboutMeSection />
      <WorkSection />
    </div>
  );
};

export default Redesign;

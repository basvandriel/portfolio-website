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

const WorkExperienceListing = () => (
  <div className="flex w-full">
    {/* duration section */}
    <div className="w-1/3 text-xs text-zinc-400 font-semibold">
      juni 2024 - december 2025
    </div>

    {/* description section */}
    <div className="w-2/3">
      <h4 className="text-sm text-zinc-200 font-semibold align-middle leading-none">
        Senior Software Engineer, DevOps Engineer
      </h4>
      <p className="text-sm mt-2 text-zinc-400">
        Ik ben een ambitieuze, hardwerkende en gedreven Senior Software Engineer
        met meer dan vieftien jaar ervaring in het vak. Ik heb een oog voor
        detail, ben communicatief vaardig en kan onafhankelijk in groepen en
        zelfstandig werken.
      </p>
    </div>
  </div>
);

const Redesign = () => {
  return (
    <div className="text-white max-w-xl mx-auto mt-16">
      <HeadBanner />
      <AboutMeSection />

      {/* Work section */}
      <section className="mt-8">
        <h4 className="text-sm mb-4 font-medium text-zinc-200">Werkervaring</h4>

        <div className="space-y-8">
          <WorkExperienceListing />
          <WorkExperienceListing />
          <WorkExperienceListing />
          <WorkExperienceListing />
        </div>
      </section>
      {/* TODO implement work section */}
      {/* TODO implement section for  */}
    </div>
  );
};

export default Redesign;

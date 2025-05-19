import me from "./bas.png";
import EducationSection from "./RedesignedEducationSection";
import WorkSection from "./RedesignedWorkSection";

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
      Senior Software & DevOps Engineer met ruim 15 jaar ervaring in
      enterprise-omgevingen, waaronder ABN AMRO en NS. Gedreven, communicatief
      sterk en met een scherp oog voor detail. Excelleer in zowel zelfstandige
      als teamgerichte settings, met een bewezen trackrecord in het leiden van
      complexe projecten. HBO/WO werk- en denkniveau. Gevestigd in de het
      prachtige Hulst.
    </p>
  </section>
);

const Redesign = () => {
  return (
    <div className="text-white max-w-2xl mx-auto mt-16">
      <HeadBanner />
      <AboutMeSection />
      <WorkSection />
      <EducationSection />
    </div>
  );
};

export default Redesign;

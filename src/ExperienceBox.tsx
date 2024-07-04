import ExperienceListing from "./ExperienceListing";
import EXPERIENCE from "./experience";

const ExperienceBox = () => {
  return (
    <div className="bg-white rounded-xl mt-4 lg:mt-0">
      <div className="p-1">
        <div className="p-4 font-medium text-base">Ervaring</div>
        {EXPERIENCE.map((v, i) => {
          return <ExperienceListing {...v} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceBox;

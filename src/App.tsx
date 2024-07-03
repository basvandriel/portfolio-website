import React from "react";
import IntroBox from "./IntroBox";
import AboutBox from "./AboutBox";

import ExperienceListing from "./ExperienceListing";

import ExperienceBox from "./ExperienceBox";
import EducationBox from "./EducationBox";

function App() {
  return (
    <div className="max-w-5xl mx-auto m-4 px-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <IntroBox />
          <AboutBox />
        </div>

        <div className="col-span-2 space-y-4">
          <ExperienceBox />
          <EducationBox/>
        </div>
      </div>
    </div>
  );
}

export default App;

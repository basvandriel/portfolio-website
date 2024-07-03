import React from "react";
import IntroBox from "./IntroBox";
import AboutBox from "./AboutBox";



function App() {
  return (
    <div className="max-w-5xl mx-auto m-4 px-4">
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white rounded-xl p-1">
          <IntroBox />
        </div>

        {/* TODO experience thing */}
        <div className="col-span-2"></div>
        <AboutBox />
      </div>
    </div>
  );
}

export default App;

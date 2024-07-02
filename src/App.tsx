import React from "react";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ROLE = "Senior Python Developer, DevOps Engineer";
const SMALL_DESCRIPTION =
  "Ambitious and hard working developer with eye for detail with 10+ years of experience. Eyes for detail, communicative and able to work independently in groups or by myself. Based in Netherlands.";

const PersonalTag = ({ children }: any) => {
  return (
    <span className="text-xs bg-gray-200 text-gray-600 font-medium py-1 px-2 rounded-md items-center text-center">
      {children}
    </span>
  );
};
function Pinger() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
    </span>
  );
}

const Button = ({ children, className }: any) => {
  return (
    <div className="w-full bg-blue-600 hover:bg-blue-700 rounded-md text-white mt-4 text-center font-medium py-2.5 px-2 cursor-pointer text-sm flex justify-center items-center">
      {children}
    </div>
  );
};

const IntroBox = () => {
  return (
    <>
      <div className="p-4">
        <p className="font-sans font-medium text-base flex items-center gap-x-2 align-middle">
          Bas van Driel
          <Pinger />
        </p>
        <p className="font-sans text-sm gap-x-2 align-middle items-center flex">
          {ROLE}
        </p>
      </div>

      <div className="bg-gray-100  mt-1 rounded-xl p-4">
        <p className="text-sm text-gray-600">{SMALL_DESCRIPTION}</p>

        {/* personal tags */}
        <div className="flex flex-wrap mt-4 gap-1">
          <PersonalTag>Python</PersonalTag>
          <PersonalTag>Databricks</PersonalTag>
          <PersonalTag>Azure</PersonalTag>
          <PersonalTag>DevOps</PersonalTag>
          <PersonalTag>Git</PersonalTag>
          <PersonalTag>SQL</PersonalTag>
          <PersonalTag>Test-driven development</PersonalTag>
          <PersonalTag>CI/CD</PersonalTag>
          <PersonalTag>Agile</PersonalTag>
          <PersonalTag>JavaScript</PersonalTag>
          <PersonalTag>TypeScript</PersonalTag>
        </div>

        <Button>
          <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="max-w-5xl mx-auto m-4 px-4">
      <div className="grid grid-cols-3 gap-4">
        {/* box */}
        <div className="bg-white rounded-xl p-1">
          <IntroBox />
        </div>

        {/* TODO experience thing */}
        <div className="col-span-2"></div>

        {/* box */}
        <div className="bg-white rounded-xl p-1">
          <div className="p-4">
            <p className="font-sans font-medium">About me</p>
            <p className="font-sans text-sm align-middle items-center flex gap-x-2">
              Passionate about technology, user experience and guitars.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl text-sm">
            <p className="text-sm">
              I am passionate about using technology to solve real-world
              problems. I am always looking for new ways to improve the user
              experience and make software more accessible to everyone. I am
              also a strong advocate for open source software and I am always
              willing to contribute to the community.
            </p>

            <div className="my-4 border-b border-gray-300"></div>

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex font-medium gap-x-2 items-center">
                <EnvelopeIcon className="h-4 w-4" />
                contact@basvandriel.nl
              </div>

              <div className="inline-flex font-medium gap-x-2 items-center">
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                https://basvandriel.nl
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

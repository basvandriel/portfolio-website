import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

import cover from "./cover2.jpg";
import me from './me2.jpeg'

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
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative">
        <div className="relative">
          <img
            src={cover}
            alt="cover"
            className="object-cover object-center from-gray-600 bg-gradient-to-t"
          ></img>
          <div className="absolute inset-0 bg-gradient-to-t from-white from-5%"></div>
        </div>

        {/* <div className="flex flex-end p-5 absolute bottom-0">
          <img
            src={me}
            // src="https://preview.launchoice.com/personal_cv/assets/images/photo.jpg"
            alt="me"
            className="h-16 w-16 rounded-full border border-white object-center"
          />
        </div> */}
      </div>


      <div className="p-1">
        <div className="px-4 pb-4">
          {/* <img
            src="https://preview.launchoice.com/personal_cv/assets/images/photo.jpg"
            alt="me"
            className="h-16 w-16 rounded-full mb-2 border border-white"
          /> */}

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

          <a href="/cv.pdf" target="_blank" download={true}>
            <Button>
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroBox;

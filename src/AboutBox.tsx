/* eslint-disable jsx-a11y/anchor-is-valid */
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/outline/ArrowTopRightOnSquareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";

const EMAIL = "contact@basvandriel.nl";

const AboutBox = () => {
  return (
    <div className="bg-white rounded-xl p-1">
      <div className="p-4">
        <p className="font-sans font-medium">About me</p>
        <p className="font-sans text-sm align-middle items-center flex gap-x-2">
          Technology and user experience
        </p>
      </div>

      <div className="p-4 bg-gray-100 rounded-xl text-sm">
        <p className="text-sm text-gray-600">
          Ik ben gepassioneerd over het gebruik van technologie om problemen in
          de echte wereld op te lossen. Ik ben altijd op zoek naar nieuwe
          manieren om de gebruikerservaring te verbeteren en software
          toegankelijker te maken voor iedereen. Ik ben ook een groot
          voorstander van open source software en ik ben altijd bereid om bij te
          dragen aan deze community.
        </p>

        <div className="mt-4 mb-8">
          <ul className="text-sm">
            <li className="flex justify-between border-b py-2">
              <span className="text-gray-600">Locatie</span>
              <span>Hulst, Netherlands</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span className="text-gray-600">Ervaring</span>
              <span>10 years+</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="inline-flex font-medium gap-x-2 items-center">
            <a
              className="inline-flex font-medium gap-x-2 items-center"
              href="#"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              https://basvandriel.nl
            </a>
          </div>
          <div className="inline-flex font-medium gap-x-2 items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex font-medium gap-x-2 items-center"
            >
              <EnvelopeIcon className="h-4 w-4" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutBox;

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
          I am passionate about using technology to solve real-world problems. I
          am always looking for new ways to improve the user experience and make
          software more accessible to everyone. I am also a strong advocate for
          open source software and I am always willing to contribute to the
          community.
        </p>


        <div className="mt-4 mb-8">
          <ul className="text-sm">
            <li className="flex justify-between border-b py-2">
              <span className="text-gray-600">Location</span>
              <span>Hulst, Netherlands</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span className="text-gray-600">Experience</span>
              <span>10 years+</span>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex font-medium gap-x-2 items-center">
            <a className="inline-flex font-medium gap-x-2 items-center" href="#">
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

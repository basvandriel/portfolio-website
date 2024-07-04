import { XMarkIcon } from "@heroicons/react/24/outline";

type OpenToWorBoxAttrs = {
  onClose: any;
};

const OpenToWorBox = ({ onClose }: OpenToWorBoxAttrs) => {
  return (
    <div className="relative text-white py-2 w-full bg-blue-700">
      <div className="max-w-5xl mx-auto px-4 font-medium text-xs">
        <div className="flex items-center relative w-full justify-between">
          {/* text */}
          <div>
            #OpenToWork
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            Vanaf volgend kwartaal weer beschikbaar voor nieuwe opdrachten!
          </div>

          <button onClick={onClose}>
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenToWorBox
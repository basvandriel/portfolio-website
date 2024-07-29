import { createTw } from "react-pdf-tailwind";

const tw = createTw(
    // Tailwind config
    {
      theme: {}
    },
    // Additional options
    {
      // Set the base font size in points (see note below regarding units)
      ptPerRem: 12,
    }
  );

export default tw
import "./index.css";
import "./i18n/index";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
// import Redesign from "./Redesign";
import ReactGA from "react-ga4";
import Redesign from "./Redesign";

ReactGA.initialize("G-VGSSCQJH3Z", {});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redesign />,
    // element: <p>hi aaaa</p>,
  },
  // {
  //   path: "/cv",
  //   element: <CVViewController lang="nl" />,
  // },
  // {
  //   path: "/cv/en",
  //   element: <CVViewController lang="en" />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

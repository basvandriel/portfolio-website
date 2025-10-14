import "./index.css";
import "./i18n/index";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactGA from "react-ga4";
import Redesign from "./Redesign";
import CVViewController from "./CV/CVViewController";

ReactGA.initialize("G-VGSSCQJH3Z", {});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redesign />,
  },
  {
    path: "/cv",
    element: <CVViewController lang="nl" />,
  },
  {
    path: "/cv/en",
    element: <CVViewController lang="en" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

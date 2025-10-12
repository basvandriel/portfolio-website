import "./i18n/index";

import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

import { createRoot } from "react-dom/client";

import { createBrowserRouter } from "react-router";
// import CVViewController from "./CV/CVViewController";
import Redesign from "./Redesign";

import ReactGA from "react-ga4";

const root = createRoot(document.getElementById("root") as HTMLElement);

const BASE_URL = import.meta.env.BASE_URL;

const basename = BASE_URL ? new URL(BASE_URL).pathname : "/";

ReactGA.initialize("G-VGSSCQJH3Z", {});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Redesign />,
    },
    // {
    //   path: "/cv",
    //   element: <CVViewController lang="nl" />,
    // },
    // {
    //   path: "/cv/en",
    //   element: <CVViewController lang="en" />,
    // },
  ],
  {
    basename,
  }
);

root.render(
  <React.StrictMode>
    <p>hi</p>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

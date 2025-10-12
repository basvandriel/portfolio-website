import "./i18n/index";

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

import { createBrowserRouter } from "react-router";
import CVViewController from "./CV/CVViewController";
import Redesign from "./Redesign";

import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const basename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL).pathname
  : "/";

ReactGA.initialize("G-VGSSCQJH3Z", {});

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: basename,
  }
);

root.render(
  <React.StrictMode>
    hi
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

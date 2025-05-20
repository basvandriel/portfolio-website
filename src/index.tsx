import "./i18n/index";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CVViewController from "./CV/CVViewController";
import Redesign from "./Redesign";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const basename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL).pathname
  : "/";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

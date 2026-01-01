import "./index.css";
import "./i18n/index";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import { initializeAnalytics } from "./utils/analytics";
import Redesign from "./Redesign";
import CVViewController from "./CV/CVViewController";
import CaseStudyPage from "./pages/CaseStudyPage";

// Initialize Google Analytics (only in production)
initializeAnalytics();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redesign />,
  },
  {
    path: "/case-studies/:id",
    element: <CaseStudyPage />,
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

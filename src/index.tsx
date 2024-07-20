import "./i18n/index";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { PDFViewer } from "@react-pdf/renderer";

import CV from "./CV";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cv",
    element: (
      <PDFViewer style={{
        height: '100vh',
        width: '100%'
      }}>
        <CV />
      </PDFViewer>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

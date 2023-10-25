import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.module.css";
import { ProjectPage } from "./pages/ProjectPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "project/:titleString",
        element: <ProjectPage />,
      },
      {
        path: "",
        element: <Home />
      },
      {
        path: "project/under-construction",
        element: <UnderConstruction /> 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

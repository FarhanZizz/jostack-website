import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { TransitionProvider } from "./context/TransitionContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TransitionProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </TransitionProvider>
  </React.StrictMode>,
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { TransitionProvider } from "./context/TransitionContext";
import { Toaster } from "react-hot-toast";
import smoothscroll from "smoothscroll-polyfill";

const root = ReactDOM.createRoot(document.getElementById("root"));
smoothscroll.polyfill(); // Enables smooth scrolling behavior
window.__forceSmoothScrollPolyfill__ = true;
root.render(
  <TransitionProvider>
    <RouterProvider router={routes} />
    <Toaster />
  </TransitionProvider>,
);

reportWebVitals();

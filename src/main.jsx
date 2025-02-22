import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./Router/Router";


const helmetContext = {};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      
        <RouterProvider router={router}>
          <router />  
        </RouterProvider>
      
    </HelmetProvider>
  </React.StrictMode>
);

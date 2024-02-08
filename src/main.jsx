// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import DataContext from "./components/DataContext/DataContext.jsx";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} > */}
    <BrowserRouter>
    <DataContext>
      <App/>
    </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);

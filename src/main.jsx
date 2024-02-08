// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Post from "./Pages/Post.jsx";
import { useEffect } from "react";
import Contact from "./Pages/Contact.jsx";

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

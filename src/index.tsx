import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { MoviesLibrary } from "./components/MoviesLibrary";
import { NavBar } from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MoviesLibrary />
  </React.StrictMode>,
  document.getElementById("root")
);

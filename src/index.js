import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { img } from "../assets/image1.png";
import { Frame } from "../assets/Frame.png";
import { Path } from "../assets/Path.png";
import { imagesOutline } from "../assets/images-outline.png";
import { Vector } from "../assets/Vector.png";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

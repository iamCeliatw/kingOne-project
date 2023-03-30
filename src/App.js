import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobslStyles from "../Glogal";

const App = () => {
  return (
    <div className="App">
      <GlobslStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};
export default App;

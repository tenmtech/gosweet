import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/home";
import Adminsweet from "./layout/adminsweet";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Adminsweet />} />
      </Routes>
    </div>
  );
}

export default App;

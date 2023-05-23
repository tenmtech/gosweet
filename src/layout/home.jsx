import React from "react";
import Navbar from "../components/navbar/navbar";

import Presentation from "../components/presentation/presentation";
const home = () => {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Navbar />
      <Presentation />
    </div>
  );
};

export default home;

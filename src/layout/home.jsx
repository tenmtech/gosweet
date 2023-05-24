import React from "react";
import Navbar from "../components/navbar/navbar";

import Presentation from "../components/presentation/presentation";
import FirstDescription from "../components/firstDescription/FirstDescription";
import Tort from "../components/Tort/Tort";
const home = () => {
  return (
    <div className="container mx-auto  px-8 xl:px-32">
      <Navbar />
      <Presentation />
      <FirstDescription />
      <Tort />
    </div>
  );
};

export default home;

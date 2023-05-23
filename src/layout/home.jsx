import React from "react";
import Navbar from "../components/navbar/navbar";

import Presentation from "../components/presentation/presentation";
import FirstDescription from "../components/firstDescription/FirstDescription";
const home = () => {
  return (
    <div className="container mx-auto  px-8 xl:px-32">
      <Navbar />
      <Presentation />
      <FirstDescription />
    </div>
  );
};

export default home;

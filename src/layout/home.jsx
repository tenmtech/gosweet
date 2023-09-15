import React from "react";
import Navbar from "../components/navbar/navbar";
import Presentation from "../components/presentation/presentation";
import FirstDescription from "../components/firstDescription/FirstDescription";
import Tort from "../components/Tort/Tort";
import Prajituri from "../components/Prajituri/Prajituri";
import Termeni from "../components/Termeni/Termeni";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Instagram from "../components/Instagram/Instagram";
import Patiserie from "../components/Patiserie/Patiserie";

const home = () => {
  return (
    <div className="container mx-auto flex flex-col align-middle justify-left  px-8 xl:px-32  ">
      <Navbar />
      <Presentation />
      <FirstDescription />
      <Tort />
      <Prajituri />
      <Patiserie />
      <Instagram />
      <Termeni />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default home;

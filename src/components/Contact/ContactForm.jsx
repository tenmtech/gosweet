import React from "react";
import Contact from "./Contact";
import MapPreview from "./MapPreview";
function ContactForm() {
  return (
    <div className="justify-center py-2" id="contact">
      <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-7">Contact</h1>
      <div className="flex flex-col sm:flex-row gap-8 ">
        <Contact />
        <MapPreview />
      </div>
    </div>
  );
}

export default ContactForm;

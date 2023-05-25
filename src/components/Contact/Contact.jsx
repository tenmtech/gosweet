import React from "react";

import { FaTty, FaEnvelope, FaCity } from "react-icons/fa";

function Contact() {
  return (
    <section className="">
      <div className="flex sm:py-2 gap-4 md:text-xl place-items-center">
        <FaTty />
        <h1>Telefon: +40 755 384 117</h1>
      </div>
      <div className="flex sm:py-2 gap-4 md:text-xl place-items-center">
        <FaEnvelope />
        <a href="mailto:comenzi@gosweet.ro">
          <h1>comenzi@gosweet.ro</h1>
        </a>
      </div>
      <div className="flex sm:py-2 gap-4 md:text-xl ">
        <FaCity className="my-1" />
        <h1>
          Bd. G.al Vasile Milea nr.37 <br />
          (colț cu Vasile Aaron)
        </h1>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";

import {
  FaPhoneSquareAlt,
  FaInstagramSquare,
  FaLocationArrow,
} from "react-icons/fa";

import "../../index.css";

function Footer() {
  return (
    <section className="flex justify-between place-items-center center px-2 bg-[#D1A4A9]/60 ">
      <span className="text-sm">© Copyright {new Date().getFullYear()}</span>
      <div className="flex text-xl p-2 gap-2 align-middle text-slate-700">
        <FaPhoneSquareAlt />
        <FaInstagramSquare />
        <FaLocationArrow />
      </div>
    </section>
  );
}

export default Footer;

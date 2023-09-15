import React from "react";
import "../../index.css";

function FirstDescription() {
  return (
    <section className="grid grid-rows-2 bg-[url('/public/images/descriptionbackground.jpeg')] bg-cover bg-no-repeat bg-center  my-5 items-center  h-full sm:grid sm:grid-cols-2 sm:grid-rows-1">
      <div className="bg-[#D1A4A9]/20">
        <h1 className="p-4 md:p-7 text-xl text-center text-1xl md:text-3xl font-bold">
          Produsele noastre
        </h1>
        <p className="p-4  md:p-16 text-sm text-justify sm:text-md md:text-lg">
          Realizăm torturi, prăjituri și sweet bar pentru evenimentul tău
          special, pentru viața de zi cu zi, pentru fiecare ocazie în care vrei
          sa imparti cu cei dragi produsele brandului Go Sweet. Acestea sunt
          realizate cu multa atentie la detalii, cu ingrediente alese si 100%
          naturale.
        </p>
      </div>
      <div className="bg-[url('/public/images/cakebar.jpeg')] bg-cover bg-no-repeat bg-center h-full min-h-full"></div>
    </section>
  );
}

export default FirstDescription;

import React from "react";
import "../../index.css";

function FirstDescription() {
  return (
    <section className="grid grid-rows-2 bg-[url('/public/images/descriptionbackground.jpeg')] bg-cover bg-no-repeat bg-center  my-5 items-center  h-full sm:grid sm:grid-cols-2 sm:grid-rows-1">
      <div className="">
        <h1 className="p-4 text-xl text-center sm:text-1xl md:text-3xl">
          Produsele noastre
        </h1>
        <p className="p-4 text-sm text-justify sm:text-md md:text-lg">
          Realizam torturi, prajituri si sweet bar pentru evenimentul tau
          special, pentru viata de zi cu zi, pentru fiecare ocazie in care vrei
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

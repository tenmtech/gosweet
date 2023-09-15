import React from "react";

const Presentation = () => {
  return (
    <section className=" bg-[url('/public/images/pink1.jpeg')] bg-cover bg-no-repeat bg-center h-auto ">
      <div className=" flex flex-col bg-[#D1A4A9]/50  items-center p-5 h-fit  md:gap-9">
        <h1 className="p-2 md:p-7 text-xl text-center text-1xl md:text-3xl font-bold">
          We combine sweet with love
        </h1>
        <p className="p-2 md:p-16 text-sm md:px-8 text-center text-md md:text-lg ">
          Go sweet și-a început activitatea ca un hobby dintr-o pasiune pentru
          artă, pentru dulce și pentru natural. Curând am descoperit clienți
          care empatizează cu noi și care caută aceste produse artizanale,
          aceste produse unice. Încet, încet, această pasiune s-a transformat în
          mod organic într-un business. Motiv pentru care reorientarea mea ca
          artist a fost necesară. Am decis să merg alături de voi pe acest drum
          al frumosului, al bunului gust, al artei cofetăriei.
        </p>
        <button
          className="bg-amber-800/60 hover:bg-amber-800/100 text-white font-bold  px-4 rounded-full h-9 w-auto "
          id="#contact"
        >
          <a href="#contact">COMANDĂ ACUM</a>
        </button>
      </div>
    </section>
  );
};

export default Presentation;

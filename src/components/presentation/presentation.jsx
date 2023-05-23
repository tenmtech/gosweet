import React from "react";

const Presentation = () => {
  return (
    <section className="flex flex-col bg-[url('/public/images/pink1.jpeg')] bg-cover bg-no-repeat bg-center py-10 my-5 items-center gap-8">
      <h1 className="text-2xl">We combine sweet with love</h1>
      <p className="px-8 text-justify">
        Go sweet si-a inceput activitatea ca un hobby dintr-o pasiune pentru
        arta, pentru dulce si pentru natural. Curand am descoperit clienti care
        empatizeaza cu noi si care cauta aceste produse artizanale, aceste
        produse unice. Incet, incet, aceasta pasiune s-a transformat in mod
        organic intr-un business. Motiv pentru care reorientarea mea ca artist a
        fost necesara. Am decis sa merg alaturi de voi pe acest drum al
        frumosului, al bunului gust, al artei cofetariei.
      </p>
      <button
        className="bg-amber-800/60 hover:bg-amber-800/100 text-white font-bold  px-4 rounded-full h-9 w-auto "
        id="#contact"
      >
        COMANDĂ ACUM
      </button>
    </section>
  );
};

export default Presentation;

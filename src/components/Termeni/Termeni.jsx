import React from "react";
import "../../index.css";
import { AiOutlineCheck } from "react-icons/ai";

function Termeni() {
  return (
    <div>
      <section
        className="flex flex-col bg-[url('/public/images/descriptionbackground.jpeg')] bg-cover bg-no-repeat bg-center my-5 items-center p-5  h-auto md:gap-9"
        id="termeniconditii"
      >
        <h1 className="text-xl font-bold md:text-3xl py-6">
          {" "}
          Termeni și Condiții
        </h1>
        <ul className="flex flex-col gap-2 sm:gap-4">
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Toate comenzile se ridica de la sediul nostru de Luni până Sâmbătă
              între orele 10-16 (vă rugă să veniți la ora stabilită și să nu
              întârziați sau să veniți mai repede), duminica este închis!
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Comnezile se ridică de pe Bd. G.al Vasile Milea nr. 37, colț cu
              Vasile Aron (peste drum de spălătoria auto)
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Gramajul tortului poate fi cu aproximativ 250g mai mare sau mai
              mic, în funcție de sortiment
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Diametrul și înăltimea sunt standard, pentru o anumită greutate
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Decorul special(orice modificare a decorului standard cu fructe)
              se achită separat, iar prețul se va stabili în funcție de
              complexitate (acesta reprezintă costul manoperei)
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Torturile se vor cântări decorate. Vă rugăm să țineți cont că în
              cazul torturilor decorate, cu figurine din pastă de zahăr, acestea
              vor genera costuri suplimentare (acesta reprezinta costul
              materialelor)
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              ssssssss Comanda se va plasa cu minim 4 zile înainte, pentru
              torturile cu decor standard (din fructe) și 7 zile pentru cele
              decorate special (cu figurine din pastă de zahăr)
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Comenzile se modifică sau se anulează cu minim 3 zile lucrătoare
              înaintea evenimentului
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <AiOutlineCheck className="text-xl text-red-300" />
            <p className="flex-1 text-justify text-sm md:text-lg">
              Torturile conțin creme și blaturi grele (cu ciocolată, cheescake,
              sosuri de fructe). Din acest motiv, la unele sortimente, calculăm
              120/150g per persoană
            </p>
          </li>
        </ul>
        <p className=" py-4 font-bold md:text-2xl">
          Mulțumim! <span className="text-red-400">&hearts;</span>{" "}
        </p>
      </section>
    </div>
  );
}

export default Termeni;

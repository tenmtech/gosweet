import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-400 py-8 px-8 ">
      <a href="/" className=" md:basis-3/5">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>

              {/* sectiune hamburger menu */}
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#map" onClick={() => setIsNavOpen(false)}>
                  Home Sweet
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#torturi" onClick={() => setIsNavOpen(false)}>
                  Sortimente Tort
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#prajituri" onClick={() => setIsNavOpen(false)}>
                  Sortimente Prăjituri
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#patiserie" onClick={() => setIsNavOpen(false)}>
                  Sortimente Patiserie
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#termeniconditii" onClick={() => setIsNavOpen(false)}>
                  Termeni și condiții
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#instagram" onClick={() => setIsNavOpen(false)}>
                  Instagram
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact" onClick={() => setIsNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* sectiune navbar in mod desktop */}
        </section>
        <ul className="DESKTOP-MENU hidden  space-x-7 lg:flex  text-center text-[#D1A4A9]  text-sm  font-bold  content-center">
          <li className="hover:text-red-900">
            <a href="#map">Home Sweet</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#torturi">Sortimente Tort</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#prajituri">Sortimente Prăjituri</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#patiserie">Sortimente Patiserie</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#termeniconditii">Termeni și condiții</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#instagram">Instagram</a>
          </li>
          <li className="hover:text-red-900">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

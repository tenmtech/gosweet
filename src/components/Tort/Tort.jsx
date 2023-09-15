import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Tort() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://89.33.44.24:5000/publicapi/cake")
      ).json();

      setSlides(data);
    };

    dataFetch();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!slides[currentIndex]) return null;

  return (
    <div>
      <h1 className="text-xl text-center text-1xl md:text-3xl font-bold mt-8">
        Sortimente Tort
      </h1>
      <div
        className="max-w-[2160px] h-[400px] md:h-[600px] w-full my-2 py-2 md:my-2 md:py-2 relative group "
        id="torturi"
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-auto h-full bg-center  md:bg-right bg-cover md:bg-cover bg-no-repeat duration-500 drop-shadow-2xl "
        >
          <div className="md:grid md:grid-cols-2 bg-slate-800/60 bg-cover bg-no-repeat h-full ">
            <div className="text-center text-slate-50 ">
              <h1 className="text-xl font-bold py-4 px-2 md:text-4xl md:py-7 md:px-2">
                {slides[currentIndex].name}
              </h1>
              <p className="pt-8 px-4 text-sm md:pt-16 md:px-20 md:text-md text-justify ">
                {slides[currentIndex].description}
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tort;

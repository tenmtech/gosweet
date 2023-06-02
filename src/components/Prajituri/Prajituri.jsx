import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Prajituri() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("http://localhost:5000/api/prajituri")
      ).json();

      setSlides(data);
    };

    dataFetch();
  }, []);
  console.log(slides);

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
    <div
      className="max-w-[1920px] h-[400px] md:h-[600px] w-full my-4 py-8 md:my-10 md:py-10  relative group "
      id="prajituri"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-auto h-full bg-center  md:bg-right bg-cover md:bg-cover bg-no-repeat duration-500 drop-shadow-2xl "
      >
        <div className="md:grid md:grid-cols-2 bg-slate-800/70 bg-cover bg-no-repeat h-full ">
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
  );
}

export default Prajituri;

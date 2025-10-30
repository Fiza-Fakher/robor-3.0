import React, { useState, useEffect } from "react";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const homeServiceCards = [
    {
      img: "/home/about1.jpg",
      title: "Machine Learning Solution",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
    {
      img: "/home/about2.jpg",
      title: "Custom AI SOftware Devleopment",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
    {
      img: "/home/about3.jpg",
      title: "Data Analytics And Insights",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
    {
      img: "/home/about3.jpg",
      title: "Machine Learning Solution",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
    {
      img: "/home/about1.jpg",
      title: "Custom AI SOftware Devleopment",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
    {
      img: "/home/about2.jpg",
      title: "Data Analytics And Insights",
      des: "AI technology services aim to provide intelligent solutions that help businesses improve efficiency, make better decisions.",
    },
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeServiceCards.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, homeServiceCards.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homeServiceCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeServiceCards.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    const visibleCount = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % homeServiceCards.length;
      cards.push({ ...homeServiceCards[index], displayIndex: i });
    }
    return cards;
  };

  return (
    <section className="bg-[var(--primary)] flex justify-center items-center flex-col pt-12 sm:pt-20 lg:pt-30 mt-12 sm:mt-40 lg:mt-60 pb-12 sm:pb-20 lg:pb-24 px-4">
      <div className="flex justify-center items-center gap-4 pt-2">
        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        <h1 className="text-purple-600 text-xl sm:text-2xl font-semibold">
          Our Services
        </h1>
      </div>
      <h3 className="uppercase text-xl sm:text-2xl lg:text-3xl pt-6 lg:pt-8 text-center font-bold px-4">
        AI technology services aim to provide intelligent <br className="hidden sm:block" />
        solutions.
      </h3>

      <div className='relative w-full mx-auto mt-8 lg:mt-10'>
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className='absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg'
        >
          <FaChevronLeft className='text-base sm:text-xl' />
        </button>

        {/* Cards Container */}
        <div className='flex justify-center items-stretch gap-2 sm:gap-4 w-[90%] sm:w-[95%] mx-auto'>
          {getVisibleCards().map((items, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-[var(--background)] rounded-2xl sm:rounded-3xl flex-1 flex flex-col justify-center items-center p-4 sm:p-6 transition-all duration-500 ease-in-out"
            >
              <img src={items.img} alt={items.title} className="rounded-xl w-full h-32 sm:h-40 lg:h-48 object-cover" />
              <h3 className="text-lg sm:text-xl lg:text-2xl text-center font-semibold pt-3 sm:pt-4 uppercase">
                {items.title}
              </h3>
              <h5 className="text-[var(--text-primary)] text-sm sm:text-base pt-2 sm:pt-3 text-center">
                {items.des}
              </h5>
              <div className="border border-[var(--text-primary)] rounded-full h-12 w-20 sm:h-14 sm:w-24 mt-4 sm:mt-8 flex justify-center items-center hover:bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:border-bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:text-white transition-transform duration-500 cursor-pointer">
                <FaArrowRightLong size={18} className="sm:hidden" />
                <FaArrowRightLong size={22} className="hidden sm:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className='absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg'
        >
          <FaChevronRight className='text-base sm:text-xl' />
        </button>
      </div>

      {/* Indicators */}
      <div className='flex justify-center items-center gap-2 mt-6 sm:mt-8'>
        {homeServiceCards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-purple-600 w-6 sm:w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default OurServices;
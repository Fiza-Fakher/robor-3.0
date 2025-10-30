import React, { useState, useEffect } from 'react'
import { homeBlogCards } from '../../constant';
import { FaRegUser, FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeBlogCards.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? homeBlogCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeBlogCards.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    const visibleCount = window.innerWidth < 768 ? 1 : 2;
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % homeBlogCards.length;
      cards.push({ ...homeBlogCards[index], displayIndex: i });
    }
    return cards;
  };

  return (
    <section className='py-6 sm:py-8 lg:py-10 px-4'>
      <div className="flex justify-center items-center gap-4 pt-2">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-full"></div>
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent text-xl sm:text-2xl font-semibold">
          Our Blog & News
        </h1>
      </div>

      <h3 className="uppercase text-2xl sm:text-3xl pt-6 sm:pt-8 text-center font-bold px-4">
        Our Latest News and Blog
      </h3>

      <div className='relative w-full mx-auto mt-8 sm:mt-10'>
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className='absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg'
        >
          <FaChevronLeft className='text-base sm:text-xl' />
        </button>

        {/* Cards Container */}
        <div className='flex justify-center items-stretch gap-4 w-[85%] sm:w-[90%] lg:w-[95%] mx-auto'>
          {getVisibleCards().map((item, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className='flex-1 transition-all duration-500 ease-in-out'
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className='rounded-xl sm:rounded-2xl w-full h-48 sm:h-56 lg:h-64 object-cover'
              />
              <div className='flex justify-start items-center gap-4 sm:gap-6 lg:gap-8 mt-3 sm:mt-4'>
                <div className='flex justify-center items-center gap-1 sm:gap-2'>
                  <FaRegUser className='text-purple-600 text-sm sm:text-base'/>
                  <h6 className='text-gray-600 text-xs sm:text-sm'>By Robor</h6>
                </div>
                <div className='flex justify-center items-center gap-1 sm:gap-2'>
                  <CiCalendar className='text-purple-600 text-sm sm:text-base'/>
                  <h6 className='text-gray-600 text-xs sm:text-sm'>May 20, 2025</h6>
                </div>
              </div>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 line-clamp-2'>{item.title}</h3>
              <button className='flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-2 sm:py-2.5 lg:py-3 px-4 sm:px-5 lg:px-6 rounded-xl text-white hover:bg-purple-700 transition-colors text-sm sm:text-base'>
                Read More <FaArrowRightLong className='text-sm sm:text-base'/>
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className='absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg'
        >
          <FaChevronRight className='text-base sm:text-xl' />
        </button>
      </div>

      {/* Indicators */}
      <div className='flex justify-center items-center gap-2 mt-6 sm:mt-8'>
        {homeBlogCards.map((_, index) => (
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
  )
}

export default Blog
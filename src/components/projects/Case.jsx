import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import {projectsCards} from '../../constant/index'
import { Link } from 'react-router-dom';

function Case() {
    
  return (
    <>
      <section className='bg-[var(--primary)] relative flex flex-col justify-center items-center pb-12 sm:pb-20 px-4 sm:px-6 lg:px-4'>
        
        {/* Background Text */}
        <h1 className='text-[80px] sm:text-[160px] lg:text-[320px] flex justify-center items-center absolute z-0 -top-6 sm:-top-10 lg:-top-34 lg:pt-6 font-bold text-[#F8F8F8]'>
          Case
        </h1>

        {/* Content */}
        <div className='z-20 flex justify-center items-center flex-col pt-16 sm:pt-24 lg:pt-40'>
          <div className='flex gap-4 sm:gap-6 text-[var(--text)] justify-center items-center'>
            <div className='h-[2px] w-10 sm:w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 '></div>
            <h6 className='text-base sm:text-xl uppercase whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent'>Case Study</h6>
            <div className='h-[1px] w-10 sm:w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 '></div>
          </div>

          <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:pt-20 font-bold py-6 sm:py-10 text-center px-4'>
            AI Projects Case Study
          </h1>

          <h5 className='flex flex-col justify-center items-center text-[var(--text-secondary)] text-sm sm:text-base lg:text-xl text-center max-w-xs sm:max-w-md lg:max-w-xl px-4'>
            <span>An AI agency is a specialized organization dedicated to helping businesses and</span> 
            <span>organizations leverage artificial intelligence to achieve their goals.</span>
          </h5>
        </div>
      </section>

      <section className="bg-[var(--primary)] py-6 sm:py-10 px-4 sm:px-6 lg:px-4">

        <div className="w-full h-[1px] bg-gray-400 mb-6 sm:mb-8"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 cursor-pointer bg-[var(--primary)]">
          {projectsCards.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-2 sm:mt-4 group relative bg-[var(--primary)]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl w-full">
                <img
                  src={items.img}
                  alt={items.title}
                  className="rounded-2xl sm:rounded-3xl w-full h-auto transition-all duration-300 group-hover:blur-xs"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link to={`/projects/${items.slug}`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/40 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-[#6D30FB]">
                      <GoArrowUpRight size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Type Badge */}
              <div className="flex justify-center items-center w-auto px-4 sm:w-44 h-8 sm:h-10 gap-2 border border-gray-400 text-gray-400 rounded-full mt-3 sm:mt-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                <h4 className="text-xs sm:text-sm lg:text-base">{items.type}</h4>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold pt-3 sm:pt-4 px-4">{items.title}</h2>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-gray-400 mt-6 sm:mt-8"></div>
      </section>
    </>
  )
}

export default Case
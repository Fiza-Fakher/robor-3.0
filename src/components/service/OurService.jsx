import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { serviceCards } from "../../constant/index"

function OurServices() {
  return (
    <>
      <section className="bg-[var(--primary)]  relative flex flex-col justify-center items-center pb-30 pt-15 px-4 sm:px-6 lg:px-0 overflow-x-hidden">
        
        <h1 className="text-[320px] text-center absolute z-0 -top-25 font-bold text-[#F8F8F8]
        lg:text-[320px] md:text-[200px] sm:text-[120px] xs:text-[80px]">
          Services
        </h1>

        <div className="z-20 flex justify-center items-center flex-col pt-30 px-4">
          <div className="flex gap-6 text-[#6D30FB] justify-center items-center flex-wrap text-center">
            <div className="h-[2px] w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  bg-text-clip "></div>
            <h6 className="text-xl uppercase sm:text-lg xs:text-base bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  bg-clip-text text-transparent">
              our services
            </h6>
            <div className="h-[1px] w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  bg-text-clip "></div>
          </div>

          <h1 className="text-6xl font-bold py-4 text-center lg:text-6xl md:text-4xl sm:text-3xl xs:text-2xl">
            Intelligent Innovations:
          </h1>
          <h1 className="text-6xl font-bold py-2 text-center lg:text-6xl md:text-4xl sm:text-3xl xs:text-2xl">
            Tailored AI Solutions
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 lg:gap-10 mt-14">
          {serviceCards.map((item, index) => (
            <Link to={`/services/${item.slug}`} key={index}>
              <div
                className="h-76 lg:w-102 bg-[var(--background)] rounded-4xl pl-7 
                           flex flex-col justify-center items-start gap-4 p-4 my-4 
                           transition-transform duration-300 hover:scale-105"
              >
                <img src={item.icon} alt={item.title} className="pb-2 w-10 sm:w-12 lg:w-auto" />
                <h6 className="text-2xl font-bold sm:text-xl text-[var(--primary)] xs:text-lg">{item.title}</h6>
                <p className="text-lg text-[var(--primary)] sm:text-base xs:text-sm">{item.des}</p>
                <div className="cursor-pointer group">
                  <h5 className="flex justify-center items-center text-[var(--primary)] gap-2 lg:text-md font-bold group-hover:text-[#6D30FB] sm:text-sm ">
                    Read More <FaArrowRightLong size={20} className="mt-1" />
                  </h5>
                  <div className="h-[1px] mt-1 w-28 bg-[var(--primary)] transition-all duration-300 group-hover:w-22 group-hover:bg-[#6D30FB]"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </>
  );
}

export default OurServices;

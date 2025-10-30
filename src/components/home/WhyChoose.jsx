import React from "react";
import { cardData } from "../../constant";

function WhyChoose() {
  
  return (
    <>
      <section className="bg-[var(--background)] flex flex-col lg:flex-row justify-around items-center py-8 sm:py-10 lg:py-14 overflow-hidden px-4 sm:px-6 lg:px-0">
  
        {/* Images Section */}
        <div className="lg:mr-32 relative flex-shrink-0 mb-8 lg:mb-0">
          <img src="/home/why1.jpg" alt="" className="w-full sm:w-96 lg:w-160 rounded-2xl" />
          <img
            src="/home/why2.png"
            alt=""
            className="absolute bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-90px] left-[50%] sm:left-[240px] lg:left-[330px] rounded-2xl w-32 sm:w-48 lg:w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-start pb-10 max-w-xl mt-16 sm:mt-20 lg:mt-0">
          
          {/* Badge */}
          <div className="flex gap-2 items-center pt-4 pb-4">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
            <h1 className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent uppercase">
              Why Choose us
            </h1>
          </div>

          {/* Main Heading */}
          <h3 className="flex flex-col font-bold text-2xl sm:text-3xl lg:text-4xl space-y-2 mb-2">
            <span>Empowering Businesses with</span>
            <span>Cutting-Edge AI Solutions to</span>
            <span>Drive Innovation.</span>
          </h3>

          {/* Description */}
          <h6 className="flex flex-col text-[var(--text-primary)] pt-4 space-y-2 w-full text-base sm:text-lg">
            <span>
              Our AI agency is a cutting-edge technology partner that specializes in
              delivering
            </span>
            <span>decision-making, and enhance customer experiences.</span>
          </h6>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 w-full">
            {cardData.map((card, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{card.title}</h3>
                <h5 className="text-base sm:text-lg flex flex-col space-y-1 sm:space-y-2 text-[var(--text-primary)]">
                  {card.desc.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Circle from '../extra/Circle'

function Hero() {
  return (
    <>
      <section className="bg-[var(--background)] lg:h-[900px] py-4 lg:py-0">
        <div className="flex justify-center items-center px-4 lg:px-0">
          <div className="flex justify-center items-center flex-col lg:flex-row w-full lg:w-auto">
            <div className="flex justify-center items-center flex-col text-center lg:text-left">
              <h1 className="text-[var(--text-secondary)] flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
                <span>The Intelligence </span> <span>Behind Your Growth</span>
              </h1>
              <p className="text-base sm:text-lg pt-4 lg:pt-8 px-4 lg:pl-6 lg:px-0">
                AI technology services aim to provide intelligent solutions <br className="hidden sm:block" />
                that help businesses improve efficiency,
              </p>
              <button className="bg-purple-600 text-[var(--primary)] py-3 px-4 sm:py-4 sm:px-5 mt-3 lg:mt-4 flex gap-3 sm:gap-4 justify-center items-center rounded-xl text-sm sm:text-base lg:mr-68">
                Get Started Now <FaArrowRightLong />
              </button>
            </div>
            
            <div className="pt-12 lg:pt-24 lg:ml-15 hidden lg:block">
              <p className="text-[var(--text-secondary)] pb-4 font-semibold">Award Winning <br />AI Agency</p>
              <img src="/home/arrow.svg" alt="" className=""/>
              <Circle />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-4 lg:mt-0 px-4 lg:px-0">
          <img src="/home/hero.jpg" alt="" className="w-[95%] sm:w-[90%] max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:h-140 object-cover rounded-2xl sm:rounded-3xl lg:rounded-4xl" />
        </div>
      </section>
    </>
  );
}

export default Hero;
import React from "react";
import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";
import { buttons } from "../../constant";

function About() {
  
  return (
    <>
      <section className="bg-[var(--secondary)] py-8 sm:py-12 lg:py-18 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-around items-center pt-6 lg:pt-10 gap-8 lg:gap-4">
          <div className="flex flex-col justify-center items-start lg:pl-4 pb-8 lg:pb-20">
            <div className="flex gap-2 justify-center items-center pt-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

              <h1 className="font-semibold text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                About Us
              </h1>
            </div>
            <h3 className="flex flex-col space-y-2 font-bold text-[var(--primary)] text-2xl sm:text-3xl lg:text-4xl uppercase pt-4">
                <span>The impact of ai on the world is </span><span>far-reaching and profound,</span><span className="hidden sm:inline"> changing the way we live, work,</span> <span className="hidden sm:inline"> and interact.</span>
                <span className="sm:hidden">changing the way we live, work, and interact.</span>
            </h3>
            <h6 className="flex flex-col text-[var(--text-primary)] text-sm sm:text-base pt-4 space-y-1">
                <span>Our AI agency is a cutting-edge technology partner that specializes in delivering</span><span> artificial intelligence solutions to help businesses streamline operations, improve</span><span> decision-making, and enhance customer experiences. By leveraging the power of AI,</span><span> we aim to revolutionize industries and empower organizations to stay competitive in</span> <span> a rapidly evolving digital landscape.</span>
            </h6>
          </div>
          <img src="/home/aboutthumb1.jpg" alt="" className="rounded-2xl sm:rounded-3xl lg:rounded-4xl pt-2 w-full sm:w-auto max-w-md lg:max-w-none"/>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-purple-600">
              <CountUp end={24} duration={4} />
            </h1>
            <h5 className="uppercase text-[var(--text-primary)] text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Years of <br />experience
            </h5>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-4 mt-8 lg:mt-0">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <img src="/home/aboutthumb2.png" alt="" className="rounded-2xl w-full sm:w-auto max-w-sm mx-auto sm:mx-0" />
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:mt-14 justify-center items-center">
              {buttons.map((item, index) => (
                <div
                  key={index}
                  className="h-16 sm:h-21 w-44 sm:w-52 border border-[var(--text-primary)] text-white rounded-full flex items-center justify-center">
                  <h1 className="text-lg sm:text-2xl font-semibold">{item}</h1>
                </div>
              ))}
            </div>
            <div className="hidden lg:block h-104 w-[1px] bg-[var(--text-primary)]"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-3 w-full lg:w-auto">
            <div>
              <h6 className="text-[var(--text-primary)] text-sm sm:text-base flex flex-col font-medium">
                <span>To be a leading AI agency recognized for <br className="hidden sm:block" /> creating intelligent solutions that drive <br className="hidden sm:block" /> meaningful change across industries, fostering <br className="hidden sm:block" /> smarter decision-making, and enabling <br className="hidden sm:block" /> businesses to achieve their full potential through <br className="hidden sm:block" /> automation and data-driven insights.</span>
              </h6>
              <div className="text-[var(--primary)] font-bold flex flex-col gap-3 sm:gap-5 mt-4 sm:mt-6 text-base sm:text-lg">
                <h3>Business Processes Automation</h3>
                <h3>Improved Decision-Making</h3>
                <h3>Personalized Customer Experiences</h3>
                <h3>Technology Integration</h3>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/home/aboutthumb3.png" alt="" className="rounded-2xl lg:relative lg:bottom-4 w-full sm:w-auto max-w-sm" />
              <button className='flex justify-center items-center gap-2 mt-6 sm:mt-8 lg:mt-12 lg:relative lg:right-6
                bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                py-3 px-3 sm:py-4 text-sm sm:text-base rounded-xl text-[var(--primary)] cursor-pointer 
                hover:bg-[var(--text-secondary)] hover:text-[var(--primary)] 
                transition-all duration-300'>
                Get Started Now <FaArrowRightLong size={20} className="sm:hidden" /><FaArrowRightLong size={22} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
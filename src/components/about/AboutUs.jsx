import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { aboutUsCards, icons } from "../../constant/index";

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <>
      <section className="flex flex-col lg:flex-col justify-between items-start gap-12 pt-12 px-4 sm:px-6 lg:space-y-0 space-y-10 bg-[var(--primary)]">
        
        {/* Left Images */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <img src="/about/about_1.jpg" alt="" className="rounded-2xl sm:rounded-3xl w-full" />
          <div className="flex justify-center lg:justify-start items-center gap-6 sm:gap-10 ml-0 lg:ml-6 flex-wrap mt-6 sm:mt-0">
            <img src="/home/about.png" alt="" className="h-32 sm:h-40 lg:h-50 mt-6 sm:mt-10" />
            <img
              src="/about/about_2.jpg"
              alt=""
              className="border-white border-[6px] sm:border-[10px] rounded-2xl sm:rounded-3xl -mt-12 sm:-mt-20 lg:-mt-110 lg:ml-90 w-48 sm:w-auto"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full">
          <div className="flex justify-start items-center gap-4 sm:gap-6 ml-0 lg:ml-4 pt-4">
            <h5 className="uppercase text-base sm:text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Who we are?
            </h5>
            <div className="w-20 sm:w-30 h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 "></div>
          </div>

          <h1 className="font-bold w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center lg:text-left pt-2 px-4 lg:px-0">
            Leading the Future of Business Innovation with Tailor-Made AI Solutions
          </h1>

          <h6 className="text-[var(--text-secondary)] flex flex-col text-base sm:text-lg pt-4 pl-0 lg:pl-4 pb-2 leading-relaxed text-center lg:text-left">
            <span className="mt-4">
              We begin by understanding your business goals, challenges, and
              opportunities for AI integration. Our experts assess your current
              systems and identify areas where AI can bring the most impact.
              Our team designs a tailor-made AI solution based on your specific
              requirements. We develop machine learning models, build algorithms,
              and create prototypes to ensure the solution aligns with your
              business objectives.
            </span>
          </h6>

          <div className="flex justify-center items-start gap-6 sm:gap-10 lg:gap-120 pt-6 pb-10 flex-wrap px-4">
            {aboutUsCards.map((items, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full sm:w-80 lg:w-96">
                <img src={items.icon} alt={items.title} className="w-12 sm:w-16 h-12 sm:h-16 mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{items.title}</h2>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  {items.des}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className="flex justify-center items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  gap-2 h-14 sm:h-16 w-44 sm:w-50 border text-white rounded-full mt-4 lg:ml-6 hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer transition-transform duration-500 text-sm sm:text-base">
              More About Us <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        className="flex justify-center items-center gap-6 sm:gap-8 pt-16 sm:pt-24 lg:pt-34 flex-wrap pb-12 sm:pb-20 bg-[var(--primary)] px-4"
      >
        {icons.map((item, index) => (
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-53 lg:h-53 border border-gray-400 rounded-full flex flex-col justify-center items-center text-center p-4"
            key={index}
          >
            <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[var(--text)] flex items-center">
              {inView && <CountUp end={item.number} duration={2.5} />}
              <span>{item.suffix}</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg pt-2 sm:pt-4 px-2">
              {item.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default AboutUs;
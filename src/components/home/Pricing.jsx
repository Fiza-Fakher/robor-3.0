import React from 'react'
import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";

function Pricing() {
    const priceCards = [
  {
    title: 'Standard',
    des: 'Ideal for personal projects',
    monthly: '$35',
    yearly: '$350'
  },
  {
    title: 'Professional',
    des: 'For growing teams and freelancers',
    monthly: '$62',
    yearly: '$620'
  },
  {
    title: 'Business',
    des: 'For large-scale businesses',
    monthly: '$86',
    yearly: '$860'
  },
  {
    title: 'Enterprise',
    des: 'For enterprise-level support',
    monthly: '$99',
    yearly: '$990'
  }
];

    const lists=['Access AI tools','Exculsive features','Discord access','24/7 support']
     const [toggleStates, setToggleStates] = useState(
    new Array(priceCards.length).fill("monthly")
  );

  // har card ke toggle par click karne se state change hogi
  const handleToggle = (index) => {
    setToggleStates((prev) =>
      prev.map((state, i) =>
        i === index ? (state === "monthly" ? "yearly" : "monthly") : state
      )
    );
  };
  return (
<>
<section className='bg-[#F5F0F2] py-10 sm:py-16 lg:py-20 px-4'>
    <div className='flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4'>
      <div className="flex flex-col items-start sm:ml-6 w-full sm:w-auto">
        <div className="flex gap-2 items-center pt-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
          <h1 className="font-semibold text-base sm:text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            POPULAR PACKAGE
          </h1>
        </div>

        <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase mt-4">
          <span>Competitive package best</span> <br />
          <span>AI Expertise</span>
        </h3>
      </div>
      
      <button className='flex justify-center items-center gap-2 sm:mr-6 w-full sm:w-auto
        bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
        py-3 sm:py-4 px-3 rounded-xl text-[var(--primary)] cursor-pointer 
        hover:bg-[var(--text-secondary)] hover:text-[var(--primary)] 
        transition-all duration-300 text-sm sm:text-base'>
        Get Started Now <FaArrowRightLong size={18} className="sm:hidden" /><FaArrowRightLong size={22} className="hidden sm:block" />
      </button>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mt-8 sm:mt-10 gap-6 px-0 sm:px-6">
      {priceCards.map((item, index) => (
        <div
          key={index}
          className="bg-[var(--primary)] w-full sm:w-84 h-auto sm:h-[34rem] rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 relative"
        >
          {/* Toggle Button */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <button
              onClick={() => handleToggle(index)}
              className="flex items-center bg-[var(--background)] border border-[var(--background)] rounded-full p-1 w-28 sm:w-32 h-7 sm:h-8 justify-between text-xs font-semibold text-white relative"
            >
              <span
                className={`z-10 px-2 ${
                  toggleStates[index] === "monthly"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Monthly
              </span>
              <span
                className={`z-10 px-2 ${
                  toggleStates[index] === "yearly"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Yearly
              </span>
              <div
                className={`absolute w-1/2 h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-full transition-all duration-300 ${
                  toggleStates[index] === "yearly"
                    ? "translate-x-full"
                    : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Top Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
            <h6 className="text-[var(--text-primary)] text-sm sm:text-base pt-2 mb-4 sm:mb-6">
              {item.des}
            </h6>

            {/* Price */}
            <div className="flex items-end gap-2 mb-4 sm:mb-6">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-black">
                {toggleStates[index] === "monthly"
                  ? item.monthly
                  : item.yearly}
              </h4>
              <h3 className="text-[var(--text-primary)] text-xs sm:text-sm font-medium">
                /Per {toggleStates[index] === "monthly" ? "Month" : "Year"}
              </h3>
            </div>

            {/* Divider */}
            <div className="bg-[var(--text-primary)] w-full h-[1px] opacity-40 mb-4 sm:mb-6"></div>

            {/* Features */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {lists.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[var(--text-primary)] text-sm sm:text-base pt-1 sm:pt-2"
                >
                  <FaCheckDouble className="text-pink-500 text-base sm:text-lg flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-2 sm:py-2.5 text-white rounded-xl font-semibold transition-all text-sm sm:text-base">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
</section>
</>
  )
}

export default Pricing
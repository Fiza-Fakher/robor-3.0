import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { plans } from '../../constant/index';
import { Link } from 'react-router-dom';

function Plan() {
  return (
    <>
      <div className='bg-[var(--primary)]'>
        
        
        <div className="w-full h-[1px] bg-[var(--primary)]"></div>

        <section className='bg-[var(--primary)] text-black pt-30 flex flex-col justify-center items-center pb-30 rounded-4xl px-4'>
          <div className='flex gap-6 text-[#6D30FB] justify-center items-center'>
            <div className='h-[2px] w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 '></div>
            <h6 className='text-xl uppercase bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text'>pricing plan</h6>
            <div className='h-[1px] w-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 '></div>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-10 text-black'>
            Affordable Pricing Plan
          </h1>

          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 sm:gap-8 py-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between bg-[var(--background)] rounded-2xl shadow-md p-6 sm:p-8 
                        w-full sm:w-[320px] md:w-[380px] lg:w-[400px]"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">{plan.title}</h2>
                <p className="text-gray-500 mb-6 text-sm sm:text-base">
                  This is an excellent option for people & small businesses who are starting out.
                </p>

                <div className="border border-[var(--primary)] rounded-xl text-center py-4 sm:py-6 mb-6">
                  <p className="text-2xl sm:text-4xl font-extrabold text-white">{plan.price}</p>
                  <p className="text-gray-500 text-sm sm:text-md">
                    /{plan.period} <br />
                    {plan.members}
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg text-gray-700">
                      {feature.available ? (
                        <FaCheckCircle className="text-[#6D30FB]" />
                      ) : (
                        <IoMdCloseCircle className="text-gray-300" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link to='/contact'><button className="w-full py-3 sm:py-5 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  hover:text-[var(--primary)] hover:bg-[var(--text)] cursor-pointer transform-tarnsition duration-500">
                  Choose Your Plan
                </button></Link>
              </div>
            ))}
          </div>
        </section>

        
        <div className="w-full h-[1px] bg-gray-500"></div>

      </div>
    </>
  );
}

export default Plan;

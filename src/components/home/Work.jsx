import React from 'react'
import FastMarquee from "react-fast-marquee"

function Work() {
  const topics = [
    "AI ALGORITHMS",
    "DEEP LEARNING",
    "CUSTOMER SERVICE",
    "HEALTHCARE",
    "AI ALGORITHMS",
    "DEEP LEARNING",
  ];
  return (
    <>
      <section className='relative overflow-hidden bg-[var(--primary)] text-[var] py-16 sm:py-20 md:py-28 lg:py-40'>
        {/* First Marquee */}
        <div className='absolute -rotate-2 sm:-rotate-3 left-0 top-[30%] w-full'>
          <FastMarquee className='bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-[var(--primary)] py-3 sm:py-4 md:py-5 lg:py-6' speed={50} direction='left' delay={0} gradient={false} play={true}>
            {topics.map((items, index) => (
              <div key={index} className='px-6 sm:px-10 md:px-14 lg:px-18 text-base sm:text-xl md:text-2xl lg:text-3xl flex gap-2 sm:gap-3 lg:gap-4 font-semibold'>
                <span>•</span>{items}
              </div>
            ))}
          </FastMarquee>
        </div>

        {/* Second Marquee */}
        <div className='absolute rotate-2 sm:rotate-3 left-0 top-[50%] w-full'>
          <FastMarquee className='bg-[var(--secondary)] text-[var(--primary)] py-4 sm:py-5 md:py-6 lg:py-8' speed={50} direction='left' delay={0} gradient={false} play={true}>
            {topics.map((items, index) => (
              <div key={index} className='px-6 sm:px-10 md:px-14 lg:px-18 text-base sm:text-xl md:text-2xl lg:text-3xl flex gap-2 sm:gap-3 lg:gap-4 font-semibold'>
                <span>•</span> {items}
              </div>
            ))}
          </FastMarquee>
        </div>
      </section>
    </>
  )
}

export default Work
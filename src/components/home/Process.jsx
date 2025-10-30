import React from "react";

function Process() {
  return (
    <>
      <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-0">
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold text-5xl sm:text-8xl lg:text-[15rem] uppercase text-[#F8F8F8] relative">
            Process
          </h3>
          <div className="relative bottom-8 sm:bottom-20 lg:bottom-50">
            <div className="flex gap-2 justify-center items-center pt-4 relative">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
              <h1 className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Work Process
              </h1>
            </div>
            <h4 className="font-semibold text-xl sm:text-3xl lg:text-4xl pt-4 sm:pt-6 text-center lg:text-left">
              Our 4-Step Process for Delivering AI Solutions
            </h4>
          </div>
        </div>
        <div>
          {/* Desktop Layout - Hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <div className="flex justify-around items-center">
              {/* card1 */}
              <div>
                <h3 className="text-3xl font-bold space-y-1 text-center">
                  Discovery & <br />
                  Consultation
                </h3>
                <h5 className="text-[var(--text-primary)] pt-4 text-md text-center flex flex-col space-y-2">
                  <span>We begin by understanding your business goals,</span>
                  <span>Challenges, and opportunities for AI integration.</span>
                  <span>Our experts assess your current systems</span>
                  <span>And identify areas.</span>
                </h5>
              </div>
              <div className="pb-20">
                <img src="/home/process1.jpg" alt="" className="rounded-2xl rotate-10 transition-transform duration-500 hover:scale-105" />
                <h2 className="text-8xl text-[#D7D7D7] text-center font-bold pt-2">
                  2
                </h2>
              </div>
              <div>
                <h3 className="text-3xl text-center space-y-1 font-bold">
                  Implementation & <br />
                  Integration
                </h3>
                <h5 className="text-[var(--text-primary)] pt-4 text-center flex flex-col space-y-2">
                  <span>We begin by understanding your business goals,</span>
                  <span>Challenges, and opportunities for AI integration.</span>
                  <span>Our experts assess your current systems</span>
                  <span>And identify areas.</span>
                </h5>
              </div>
              <div className="pb-20">
                <img src="/home/process2.jpg" alt="" className="rounded-2xl rotate-10 transition-transform duration-500 hover:scale-105" />
                <h2 className="text-8xl pt-2 text-[#D7D7D7] text-center font-bold">
                  4
                </h2>
              </div>
            </div>
            {/* line */}
            <div className="relative w-full flex justify-center items-center mb-6">
              {/* Line */}
              <div className="w-[95%] h-[1px] bg-[var(--text-primary)]"></div>

              <div className="absolute -top-3 flex justify-between w-[50%]">
                <div className="w-5 h-5 relative right-34 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
                <div className="w-5 h-5 relative left-28 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
                <div className="w-5 h-5 relative left-56 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex justify-around items-center">
              {/* card1 */}
              <div className="pb-20 pl-20">
                <h2 className="text-8xl text-[#D7D7D7] text-center font-bold pb-2">
                  1
                </h2>
                <img src="/home/process1.jpg" alt="" className="rounded-2xl rotate-10 transition-transform duration-500 hover:scale-105" />
              </div>
              <div>
                <h3 className="text-3xl font-bold space-y-1 text-center">
                  Discovery & <br />
                  Consultation
                </h3>
                <h5 className="text-[var(--text-primary)] pt-4 text-md text-center flex flex-col space-y-2">
                  <span>We begin by understanding your business goals,</span>
                  <span>Challenges, and opportunities for AI integration.</span>
                  <span>Our experts assess your current systems</span>
                  <span>And identify areas.</span>
                </h5>
              </div>
              <div className="pb-20 pl-10">
                <h2 className="text-8xl pb-2 text-[#D7D7D7] text-center font-bold">
                  3
                </h2>
                <img src="/home/process2.jpg" alt="" className="rounded-2xl rotate-10 transition-transform duration-500 hover:scale-105" />
              </div>
              <div>
                <h3 className="text-3xl text-center space-y-1 font-bold">
                  Implementation & <br />
                  Integration
                </h3>
                <h5 className="text-[var(--text-primary)] pt-4 text-center flex flex-col space-y-2">
                  <span>We begin by understanding your business goals,</span>
                  <span>Challenges, and opportunities for AI integration.</span>
                  <span>Our experts assess your current systems</span>
                  <span>And identify areas.</span>
                </h5>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical Stack */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <h2 className="text-5xl sm:text-6xl text-[#D7D7D7] font-bold mb-4">1</h2>
              <img src="/home/process1.jpg" alt="" className="rounded-2xl w-48 sm:w-56 mb-4 transition-transform duration-500 hover:scale-105" />
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
                Discovery & <br />
                Consultation
              </h3>
              <p className="text-[var(--text-primary)] text-sm sm:text-base text-center px-4">
                We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <h2 className="text-5xl sm:text-6xl text-[#D7D7D7] font-bold mb-4">2</h2>
              <img src="/home/process1.jpg" alt="" className="rounded-2xl w-48 sm:w-56 mb-4 transition-transform duration-500 hover:scale-105" />
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
                Implementation & <br />
                Integration
              </h3>
              <p className="text-[var(--text-primary)] text-sm sm:text-base text-center px-4">
                We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <h2 className="text-5xl sm:text-6xl text-[#D7D7D7] font-bold mb-4">3</h2>
              <img src="/home/process2.jpg" alt="" className="rounded-2xl w-48 sm:w-56 mb-4 transition-transform duration-500 hover:scale-105" />
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
                Discovery & <br />
                Consultation
              </h3>
              <p className="text-[var(--text-primary)] text-sm sm:text-base text-center px-4">
                We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <h2 className="text-5xl sm:text-6xl text-[#D7D7D7] font-bold mb-4">4</h2>
              <img src="/home/process2.jpg" alt="" className="rounded-2xl w-48 sm:w-56 mb-4 transition-transform duration-500 hover:scale-105" />
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
                Implementation & <br />
                Integration
              </h3>
              <p className="text-[var(--text-primary)] text-sm sm:text-base text-center px-4">
                We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
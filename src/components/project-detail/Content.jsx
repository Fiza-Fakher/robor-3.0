import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../../constant/index";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Content() {
  const { slug } = useParams();
  const data = projectDetails.find((item) => item.slug === slug);

  if (!data) {
    return (
      <div className="text-center py-20 text-xl sm:text-2xl font-semibold text-red-500 px-4">
        Project not found 
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[var(--primary)]">
      <div className="w-full h-[1px] bg-[var(--text-secondary)]"></div>
      
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 sm:gap-8 px-4 sm:px-6 lg:px-4 py-6 sm:py-10">
        
        
        <section className="flex-1 w-full">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-md mb-6 sm:mb-8"
          />
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{data.title}</h1>
          
          <div className="flex justify-center sm:justify-start items-center w-36 sm:w-44 h-9 sm:h-10 gap-2 border border-gray-400 text-[var(--text-secondary)] rounded-full mt-4">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[var(--text-secondary)]"></div>
            <h4 className="text-sm sm:text-base">{data.type}</h4>
          </div>
          
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 mt-6 sm:mt-8 text-base sm:text-lg">
            {data.description}
          </p>

          <div className="mt-6 sm:mt-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Working Process</h3>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              {data.workingProcess}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Result & Impact</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg pt-3 sm:pt-4">
              {data.resultImpact}
            </p>
          </div>
        </section>

        
        <section className="flex flex-col items-center lg:items-start w-full lg:w-auto">
          
          {/* Get In Touch Form */}
          <div className="max-w-sm w-full mx-auto lg:mx-0 bg-[var(--background)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 mb-6 sm:mb-10 lg:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--primary)] mb-4 sm:mb-5">
              Get In touch
            </h2>
            <form className="space-y-3 sm:space-y-4">
              <input
                type="text" 
                required
                placeholder="Your name"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[var(--background)] rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
              />
              <input
                type="email" 
                required
                placeholder="Email Address"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[var(--background)] rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
              />
              <textarea
                placeholder="Write Message..."
                rows="4" 
                required
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[var(--background)] rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-medium hover:bg-[var(--text)] hover:text-[var(--primary)] transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>

          
          <div className="bg-[var(--background)] text-white w-full max-w-sm h-auto lg:h-[436px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-start gap-5 sm:gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Contact info</h2>
              <p className="text-xs sm:text-sm mt-2 opacity-90">
                Need Any Help, Call Us 24/7 For Support
              </p>
            </div>

            
            <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center border-2 border-white rounded-full flex-shrink-0">
                <FaPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div>
                <h6 className="text-xs sm:text-sm opacity-80">Call Us</h6>
                <p className="font-semibold text-base sm:text-lg">+286 985 2156</p>
              </div>
            </div>

            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center border-2 border-white rounded-full flex-shrink-0">
                <FaEnvelope size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div>
                <h6 className="text-xs sm:text-sm opacity-80">Mail Us</h6>
                <p className="font-semibold text-base sm:text-lg break-all">info@example.com</p>
              </div>
            </div>

            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center border-2 border-white rounded-full flex-shrink-0">
                <FaMapMarkerAlt size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div>
                <h6 className="text-xs sm:text-sm opacity-80">Office Address</h6>
                <p className="font-semibold text-base sm:text-lg leading-snug">125 Berlin, Germany</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full h-[1px] bg-[var(--text-secondary)]"></div>
    </div>
  );
}

export default Content;
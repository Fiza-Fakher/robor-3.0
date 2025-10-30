import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Form() {
  return (
    <section className='flex justify-center items-center text-[var(--text)] bg-[var(--primary)] pb-8 sm:pb-12 lg:pb-16 px-4'>
      <div className='w-full sm:w-[95%] lg:w-[90%] flex flex-col items-center justify-center gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20 rounded-lg sm:rounded-xl bg-[var(--background)]'>
        
        {/* Image */}
        <img 
          src="/contact/contact.png" 
          alt="Contact" 
          className='rounded-lg sm:rounded-xl w-[96%] sm:w-[98%] h-auto sm:h-100 lg:h-130 mt-2 sm:mt-3 lg:mt-4' 
        />

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center text-white">
            Get In Touch!
          </h1>

          <form className="w-full max-w-5xl bg-[var(--baclground)] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
            
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Name Input */}
              <div className="flex items-center border rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[var(--background)] border-white">
                <input 
                  required
                  type="text"
                  placeholder="Your name"
                  className="flex-1 outline-none bg-[var(--background)] text-[var(--primary)] placeholder-white text-sm sm:text-base"
                />
                <FaUser className="text-[var(--primary)] text-lg sm:text-xl flex-shrink-0" />
              </div>

              {/* Email Input */}
              <div className="flex items-center border rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[var(--background)] border-[var(--primary)]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 outline-none bg-[var(--background)] text-white placeholder-white text-sm sm:text-base"
                />
                <FaEnvelope className="text-[var(--primary)] text-lg sm:text-xl flex-shrink-0" />
              </div>

              {/* Phone Input */}
              <div className="flex items-center border rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[var(--background)] border-white">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 outline-none bg-[var(--background)] text-[var(--primary)] placeholder-white text-sm sm:text-base"
                />
                <FaPhone className="text-[var(--primary)] text-lg sm:text-xl flex-shrink-0" />
              </div>

              {/* Subject Select */}
              <div className="flex items-center border rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[var(--background)] border-white text-white">
                <select
                  className="flex-1 outline-none bg-[var(--background)] text-[var(--primary)] appearance-none text-sm sm:text-base"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option>Web Development</option>
                  <option>Brand Marketing</option>
                  <option>UI/UX Designing</option>
                  <option>Digital Marketing</option>
                </select>
                <MdKeyboardArrowDown className="text-whitw text-xl sm:text-2xl flex-shrink-0" />
              </div>
            </div>

            {/* Company Name Input */}
            <div className="flex items-center border rounded-full px-4 sm:px-5 py-2.5 sm:py-3 mt-4 sm:mt-6 bg-[var(--background)] border-white">
              <input
                type="text"
                placeholder="Company name"
                className="flex-1 outline-none bg-[var(--background)] text-[var(--primary)] placeholder-white text-sm sm:text-base"
              />
              <FaInfoCircle className="text-[var(--primary)] text-lg sm:text-xl flex-shrink-0" />
            </div>

            {/* Message Textarea */}
            <div className="border rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-3 mt-4 sm:mt-6 bg-[var(--background)] border-white">
              <textarea
                rows="4"
                placeholder="How can we help you? Feel free to get in touch!*"
                className="w-full outline-none bg-[var(--background)] text-[var(--primary)] placeholder-white resize-none text-sm sm:text-base"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  text-white px-8 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base hover:border-2 hover:border-white rounded-full transition hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer w-full sm:w-auto"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
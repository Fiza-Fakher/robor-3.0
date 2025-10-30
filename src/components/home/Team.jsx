import React from 'react'
import { aboutTeam } from '../../constant'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Team() {
  return (
    <>
      <section className='bg-[var(--secondary)] flex flex-col justify-center items-center py-10 sm:py-16 lg:py-20 px-4'>
        <div className="flex gap-2 justify-center items-center pt-4 relative">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
          <h1 className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Work Process
          </h1>
        </div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-2 font-bold text-[var(--primary)] text-center'>Expert Team</h1>
        
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl mt-6 sm:mt-8">
          {aboutTeam.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

              {/* Social Icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <a href="https://facebook.com" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaFacebookF size={14} className="sm:hidden" />
                  <FaFacebookF size={16} className="hidden sm:block" />
                </a>
                <a href="https://x.com/" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaTwitter size={14} className="sm:hidden" />
                  <FaTwitter size={16} className="hidden sm:block" />
                </a>
                <a href="http://instagram.com" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaInstagram size={14} className="sm:hidden" />
                  <FaInstagram size={16} className="hidden sm:block" />
                </a>
                <a href="http://whatsappweb.com" className="p-2 sm:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                  <FaWhatsapp size={14} className="sm:hidden" />
                  <FaWhatsapp size={16} className="hidden sm:block" />
                </a>
              </div>

              {/* Name */}
              <div className="absolute bottom-3 sm:bottom-4 left-0 w-full text-center text-white z-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Team
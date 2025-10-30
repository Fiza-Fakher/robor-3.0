import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { links } from '../constant/index'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section className='bg-[var(--background)] flex justify-center items-center py-8'>
        <nav className='flex justify-between items-center gap-6 bg-[var(--primary)] w-[90%] rounded-3xl shadow-md py-6 px-6'>
          <Link to='/'><img src="logo.svg" alt="" className='w-24 sm:w-auto' /></Link>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex gap-6'>
            {links.map((item, index) => (
              <li key={index} className='font-semibold text-lg'>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <Link to='/contact' className='hidden lg:block'>
            <button className='flex justify-center items-center gap-2 
            bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
            py-4 px-3 rounded-xl text-[var(--primary)] cursor-pointer 
            hover:bg-[var(--text-secondary)] hover:text-[var(--primary)] 
            transition-all duration-300'>
              Get Started Now <FaArrowRightLong size={22} />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className='lg:hidden text-3xl'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setIsMenuOpen(false)}>
            <div className='fixed right-0 top-0 h-full w-[70%] bg-[var(--primary)] shadow-lg z-50 p-6' onClick={(e) => e.stopPropagation()}>
              <button 
                className='absolute top-6 right-6 text-3xl'
                onClick={() => setIsMenuOpen(false)}
              >
                <IoClose />
              </button>

              <ul className='flex flex-col gap-6 mt-16'>
                {links.map((item, index) => (
                  <li key={index} className='font-semibold text-lg'>
                    <Link to={item.path} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
                  </li>
                ))}
              </ul>

              <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                <button className='flex justify-center items-center gap-2 
                bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                py-4 px-3 rounded-xl text-[var(--primary)] cursor-pointer 
                hover:bg-[var(--text-secondary)] hover:text-[var(--primary)] 
                transition-all duration-300 mt-8 w-full'>
                  Get Started Now <FaArrowRightLong size={22} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Navbar
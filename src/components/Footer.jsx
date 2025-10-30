import React from "react";
import { footerSections,socialIcons } from "../constant/index";
import { Link } from "react-router-dom";

function Footer() {
  const instaImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

  return (
    <>
      {/* ======= Top Section ======= */}
      <section className="flex flex-col justify-center items-center bg-[var(--secondary)] text-[var(--primary)] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-10">
        <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-8 md:mb-12 lg:mb-16 text-center">
          Let's Talk
        </h1>

        
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">

        
          <div>
            <h3 className="uppercase font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Location
            </h3>
            <p className="text-sm md:text-base font-semibold leading-relaxed">
              56 Moo 9 Ladlumkaew-Pathumthani Rd.,
              <br />
              Pathum Thani 12140, Thailand
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="uppercase font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Phone Call
            </h3>
            <p className="text-base md:text-lg font-semibold lg:text-6xl hover:text-purple-700">
              +6624073460
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="uppercase font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Email Address
            </h3>
            <p className="text-base md:text-lg font-semibold break-all hover:text-purple-700">
              help24/7.info@robor.com
            </p>
            <p className="text-base md:text-lg font-semibold hover:text-purple-700">
              info@robor.com
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[var(--text-secondary)] mt-12 md:mt-16 lg:mt-20"></div>
      </section>

      {/* ======= Footer Section ======= */}
      <footer className="bg-[var(--secondary)] text-white py-10 md:py-14 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* Subscribe Section */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-3">
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-400 mb-6 text-sm md:text-base max-w-md">
              Get Monthly insights from founders around the globe. No spam –
              promise.
            </p>

            {/* Input */}
            <form className="flex bg-[#1a1a1a] rounded-full overflow-hidden max-w-md h-12 md:h-14">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-5 py-3 bg-[#141414] text-white outline-none placeholder-gray-500 text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 font-medium rounded-full transition-all text-sm md:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            
            <div className="flex gap-4 mt-6">
  {socialIcons.map(({ id, icon: Icon, link, name }) => (
    <Link
      key={id}
      to={link}
      title={name}
      target="_blank"
      className="w-10 h-10 rounded-full border border-gray-700 flex justify-center items-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all"
    >
      <Icon />
    </Link>
  ))}
</div>
          </div>

          {/* Links + Instagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 flex-1">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-purple-600 after:via-pink-500 after:to-orange-400 after:mt-1">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.link}
                        className="hover:text-white transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Instagram section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-purple-600 after:via-pink-500 after:to-orange-400 after:mt-1">
                Instagram
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {instaImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`insta-${i}`}
                    className="w-20 h-20 object-cover rounded-lg hover:opacity-80 transition"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-[var(--text)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm flex items-center gap-2 text-center md:text-left">
              <span className="text-lg">©</span> Copyright 2025
              <span className="text-[var(--button)] font-medium"> Robor</span>.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of services
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

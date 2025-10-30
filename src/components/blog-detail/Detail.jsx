import React from 'react';
import { blogCards } from '../../constant/index';
import { useParams, Link } from 'react-router-dom';
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaGlobe, FaPen } from "react-icons/fa";

function Detail() {
  const { slug } = useParams();
  const blog = blogCards.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center text-2xl font-bold mt-20 text-[var(--text-secondary)]">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-start gap-8 pt-14 pb-10 px-4 lg:px-0 bg-[var(--primary)]">
        <div className='w-full lg:w-[65%]'>
          <img src={blog.img} alt={blog.title} className='rounded-xl w-full' />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-6 flex-wrap">
            <h4 className="flex items-center gap-2 text-xl text-[var(--text-secondary)] hover:text-[#6D30FB] cursor-pointer">
              <MdPersonOutline size={24} className="text-[var(--button)]" />
              {blog.author}
            </h4>

            <h4 className="flex items-center gap-2 text-xl text-[var(--text-secondary)] hover:text-[#6D30FB] cursor-pointer">
              <CiCalendar size={24} className="text-[var(--button)]" />
              {blog.date}
            </h4>
          </div>

          <h2 className="text-3xl font-bold mt-4">{blog.title}</h2>
          <h5 className="text-[var(--text-secondary)] mt-4 text-xl leading-relaxed whitespace-pre-line">
            {blog.des || "Description coming soon..."}
          </h5>
        </div>

        <div className="w-full lg:w-[30%] flex flex-col mt-10 lg:mt-0">
          {/* Form */}
          <div className="max-w-full lg:max-w-sm mx-auto bg-[var(--background)] rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-5 text-white">
              Get In touch
            </h2>

            <form className="space-y-4">
              <input required
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[var(--background)] rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
              />
              <input
                type="email" required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-[var(--background)] rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
              />
              <textarea
                placeholder="Write Message..."
                rows="4" required
                className="w-full px-4 py-3 bg-[var(--background)] rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  text-white py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[var(--background)] mt-10 text-white w-full lg:w-[375px] rounded-3xl p-8 flex flex-col justify-start gap-6">
            <div>
              <h2 className="text-2xl font-bold">Contact info</h2>
              <p className="text-sm mt-2 opacity-90">
                Need Any Help, Call Us 24/7 For Support
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaPhone size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Call Us</h6>
                <p className="font-semibold text-lg">+286 985 2156</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Mail Us</h6>
                <p className="font-semibold text-lg">info@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center border-2 border-white rounded-full">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h6 className="text-sm opacity-80">Office Address</h6>
                <p className="font-semibold text-lg leading-snug">
                  125 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="bg-[var(--primary)] pt-20">

  <div className="w-full h-[2px] bg-[var(--secondary)] mb-10"></div>

  <section className="bg-[var(--background)] text-white rounded-2xl p-6 sm:p-10 w-full lg:w-[50%] ml-0 lg:ml-10">
    <h2 className="text-2xl font-semibold mb-3 text-[var(--text)]">
      Leave a Comment
    </h2>
    <p className="text-[var(--primary)] text-md mb-8">
      Your email address will not be published. Required fields are marked{" "}
      <span className="text-red-500">*</span>
    </p>

    <form className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative flex justify-center items-center bg-[var(--background)]">
          <FaUser className="absolute left-4 text-[var(--text)]" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-12 pr-4 py-3 border border-white rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
            required
          />
        </div>

        <div className="relative flex justify-center items-center bg-[var(--background)]">
          <FaEnvelope className="absolute left-4 text-[var(--text)]" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full pl-12 pr-4 py-3 border border-white rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="relative flex justify-center items-center bg-[var(--background)]">
        <FaGlobe className="absolute left-4 text-[var(--text)]" />
        <input
          type="text"
          placeholder="Website"
          className="w-full pl-12 pr-4 py-3 border border-white rounded-xl focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
        />
      </div>

      <div className="relative flex justify-center items-center bg-[var(--background)]">
        <FaPen className="absolute left-4 top-4 text-[var(--text)]" />
        <textarea
          placeholder="Comment*"
          rows="5"
          className="w-full pl-12 pr-4 py-3 border border-white rounded-xl resize-none focus:ring-2 focus:ring-[#6D30FB] focus:outline-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-fit px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400  text-white font-semibold rounded-xl hover:bg-[var(--text)] hover:text-[var(--primary)] transition-all duration-300"
      >
        Submit Comment
      </button>
    </form>
  </section>


  <div className="w-full h-[2px] bg-[var(--secondary)] mt-10"></div>
</div>

    </>
  );
}

export default Detail;

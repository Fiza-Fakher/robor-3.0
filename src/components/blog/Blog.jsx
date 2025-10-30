import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { blogCards } from "../../constant/index";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section className="pt-8 sm:pt-16 lg:pt-30 pb-8 sm:pb-16 lg:pb-30 bg-[var(--primary)] px-4 sm:px-6 lg:px-0">
        
        {/* Heading + Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 sm:pt-6 pl-0 sm:pl-4">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-0">
            Our Latest News & Blog
          </h1>
          <button className="h-12 sm:h-12 lg:h-14 w-full sm:w-auto px-6 lg:w-43 mr-0 sm:mr-4 lg:mr-8 flex justify-center items-center rounded-full gap-2 sm:gap-3 text-base sm:text-lg border-2 border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer transition-transform duration-500 whitespace-nowrap">
            View All Post <FaArrowRight />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-6 sm:mt-8 lg:mt-12">
          {blogCards.map((blog, index) => (
            <div key={index} className="w-full sm:w-auto lg:w-104">
              <Link to={`/blog/${blog.slug}`}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full h-auto object-cover"
                />
              </Link>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 pt-4 sm:pt-6 text-gray-500">
                <h4 className="flex items-center gap-2 text-base sm:text-lg lg:text-xl hover:text-[#6D30FB] cursor-pointer transition-colors">
                  <MdPersonOutline size={20} className="sm:w-6 sm:h-6 text-[#6D30FB] flex-shrink-0" />
                  {blog.author}
                </h4>

                <h4 className="flex items-center gap-2 text-base sm:text-lg lg:text-xl hover:text-[#6D30FB] cursor-pointer transition-colors">
                  <CiCalendar size={20} className="sm:w-6 sm:h-6 text-[#6D30FB] flex-shrink-0" />
                  {blog.date}
                </h4>
              </div>

              <div>
                <Link to={`/blog/${blog.slug}`}>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold w-full pt-4 sm:pt-6 cursor-pointer hover:text-[#6D30FB] transition-colors leading-snug">
                    {blog.title}
                  </h2>
                </Link>
              </div>

              <div className="cursor-pointer group flex flex-col pt-4 sm:pt-6">
                <Link to={`/blog/${blog.slug}`}>
                  <h5 className="flex items-center gap-2 text-base sm:text-lg font-semibold group-hover:text-[#6D30FB] transition-colors">
                    Read More <FaArrowRight size={16} className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1" />
                  </h5>
                </Link>
                <div className="h-[1px] mt-1 w-24 sm:w-28 bg-black transition-all duration-300 group-hover:w-28 sm:group-hover:w-32 group-hover:bg-[#6D30FB]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] bg-[var(--text-secondary)] mt-12 sm:mt-16"></div>
      </section>
    </>
  );
}

export default Blog;
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <div className="bg-[#141517] text-white -mt-1 lg:py-32 lg:px-20 p-5 py-16">
        <h1 className="text-3xl lg:text-6xl  font-semibold capitalize ">
          Our Projects
        </h1>
        <p className="lg:text-2xl text-lg capitalize lg:w-4/6 mt-5">
          These are practical projects that showcase our work. Explore these
          examples for hands-on insights and a deeper understanding of our
          approach and solutions.
        </p>

        <section className="card max-w-[1250px] mt-20 space-y-10">
          {/* card - 1 */}
          <div className="card-1 lg:h-64  lg:w-[1000px] lg:flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
            {/* img */}
            <div className="image lg:h-56 h-60 lg:hover:h-96 lg:hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] lg:w-[50%] w-full rounded-2xl"></div>
            {/* content */}
            <div className="content-div space-y-4">
              <h1 className="project-title lg:text-4xl text-3xl lg:mt-0 mt-4 font-bold ">
                Portfolio
              </h1>
              <p className="max-w-xl capitalize lg:text-xl text-lg">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>

          {/* card - 2 */}
          <div className="card-1 lg:h-64  lg:w-[1000px] lg:flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
            {/* img */}
            <div className="image lg:h-56 h-60 lg:hover:h-96 lg:hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] lg:w-[50%] w-full rounded-2xl"></div>
            {/* content */}
            <div className="content-div space-y-4">
              <h1 className="project-title lg:text-4xl text-3xl lg:mt-0 mt-4 font-bold ">
                Portfolio
              </h1>
              <p className="max-w-xl capitalize lg:text-xl text-lg">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>

          {/* card - 3 */}
          <div className="card-1 lg:h-64  lg:w-[1000px] lg:flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
            {/* img */}
            <div className="image lg:h-56 h-60 lg:hover:h-96 lg:hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] lg:w-[50%] w-full rounded-2xl"></div>
            {/* content */}
            <div className="content-div space-y-4">
              <h1 className="project-title lg:text-4xl text-3xl lg:mt-0 mt-4 font-bold ">
                Portfolio
              </h1>
              <p className="max-w-xl capitalize lg:text-xl text-lg">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

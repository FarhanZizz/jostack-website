import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Project = () => {
  return (
    <div className=" bg-[#141517] text-white pt-2">
      <section className="content lg:ml-40 lg:p-20 p-10">
        <h1 className="lg:text-[3vw] text-[7vw] font-extrabold capitalize grotesk ">
          project we have build
        </h1>
        <p>
          Here we create some practical projects . You can also take some
          practical idea about our work !
        </p>
      </section>

      <section className="card max-w-[1250px] mx-auto lg:py-10 p-5 space-y-7">
        {/* card - 1 */}
        <div className="card-1 lg:h-64  lg:w-[1000px] lg:flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
          {/* img */}
          <div className="image lg:h-56 h-60 lg:hover:h-96 lg:hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] lg:w-[50%] w-full rounded-2xl"></div>
          {/* content */}
          <div className="content-div space-y-4">
            <h1 className="project-title lg:text-[2vw] text-[7vw] lg:mt-0 mt-4 font-bold ">Portfolio</h1>
            <p className="max-w-xl capitalize">
              This Website present your identity | Live Updates | your
              introduction and more yourself
            </p>
            <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
              visit
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
            <h1 className="project-title lg:text-[2vw] text-[7vw] lg:mt-0 mt-4 font-bold ">Portfolio</h1>
            <p className="max-w-xl capitalize">
              This Website present your identity | Live Updates | your
              introduction and more yourself
            </p>
            <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
              visit
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
            <h1 className="project-title lg:text-[2vw] text-[7vw] lg:mt-0 mt-4 font-bold ">Portfolio</h1>
            <p className="max-w-xl capitalize">
              This Website present your identity | Live Updates | your
              introduction and more yourself
            </p>
            <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
              visit
              <div>
                <FaArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

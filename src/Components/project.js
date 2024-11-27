import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Project = () => {
  return (
    <div className=" bg-[#141517] text-white -mt-2">
      <section className="content ml-40 p-20">
        <h1 className="text-[3vw] font-extrabold capitalize grotesk ">
          project we have build
        </h1>
        <p>
          Here we create some practical projects . You can also take some
          practical idea about our work !
        </p>
      </section>

      <section className="card max-w-[1250px] mx-auto py-10 space-y-7">
        {/* card - 1 */}
        <div className="card-1 h-64  w-[1000px] flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
          {/* img */}
          <div className="image h-56 hover:h-96 hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] w-[50%] rounded-2xl"></div>

          {/* content */}
          <div className="content-div space-y-4">
            <h1 className="project-title text-[2vw] font-bold ">Portfolio</h1>
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
        <div className="card-1 h-64  w-[1000px] flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
          {/* img */}
          <div className="image h-56 hover:h-96 hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] w-[50%] rounded-2xl"></div>

          {/* content */}
          <div className="content-div space-y-4">
            <h1 className="project-title text-[2vw] font-bold ">Portfolio</h1>
            <p className="max-w-xl capitalize">
              This Website present your identity | Live Updates | your
              introduction and more yourself
            </p>
            <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
              Link
              <div>
                <FaArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>

        {/* card - 3 */}
        <div className="card-1 h-64  w-[1000px] flex gap-7 justify-between items-center p-5 rounded-2xl hover:bg-[#23094394] bg-primary text-[#ffffffb0]">
          {/* img */}
          <div className="image h-56 hover:h-96 hover:w-full hover:z-10 delay-100 duration-300 bg-[#ffffffb0] w-[50%] rounded-2xl"></div>

          {/* content */}
          <div className="content-div space-y-4">
            <h1 className="project-title text-[2vw] font-bold ">Portfolio</h1>
            <p className="max-w-xl capitalize">
              This Website present your identity | Live Updates | your
              introduction and more yourself
            </p>
            <div className="hover:bg-[#bcedff52] hover:text-[#fff] hover:font-bold delay-100 duration-300 rounded-3x bg-white px-3 py-1 rounded-xl text-black flex items-center justify-center cursor-pointer gap-3 w-36 hover:w-full hover:justify-start">
              Link
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

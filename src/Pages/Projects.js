import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import EmerlyLark from "../Projects/Emerlylark";
import Styleus from "../Projects/Styleus";
const Projects = () => {
  return (
    <div>
      <div className="bg-[#141517] p-5 py-28 text-white lg:px-20 lg:py-32">
        <h1 className="text-3xl font-semibold capitalize lg:text-6xl">
          Our Projects
        </h1>
        <p className="mt-5 text-lg capitalize lg:w-4/6 lg:text-2xl">
          These are practical projects that showcase our work. Explore these
          examples for hands-on insights and a deeper understanding of our
          approach and solutions.
        </p>

        <div className="space-y-24 pt-24">
          <EmerlyLark />
          <hr />
          <Styleus />
          <h1 className="text-center text-3xl">
            Stay tuned, more exciting projects are on the way!
          </h1>
        </div>
        {/* <section className="card mt-20 max-w-[1250px] space-y-10">
          <div className="card-1 items-center justify-between gap-7 rounded-2xl bg-primary p-5 text-[#ffffffb0] hover:bg-[#23094394] lg:flex lg:h-64 lg:w-[1000px]">
            <img
              src={Emerlylark}
              alt="EmerlyLark Project"
              className="image h-60 w-full rounded-2xl bg-[#ffffffb0] delay-100 duration-300 hover:z-10 lg:h-56 lg:w-[50%] lg:hover:h-96 lg:hover:w-full"
            />

            <div className="content-div space-y-4">
              <h1 className="project-title mt-4 text-3xl font-bold lg:mt-0 lg:text-4xl">
                Portfolio
              </h1>
              <p className="max-w-xl text-lg capitalize lg:text-xl">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="rounded-3x flex w-36 cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-3 py-1 text-black delay-100 duration-300 hover:w-full hover:justify-start hover:bg-[#bcedff52] hover:font-bold hover:text-[#fff]">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>

          <div className="card-1 items-center justify-between gap-7 rounded-2xl bg-primary p-5 text-[#ffffffb0] hover:bg-[#23094394] lg:flex lg:h-64 lg:w-[1000px]">
            <div className="image h-60 w-full rounded-2xl bg-[#ffffffb0] delay-100 duration-300 hover:z-10 lg:h-56 lg:w-[50%] lg:hover:h-96 lg:hover:w-full"></div>

            <div className="content-div space-y-4">
              <h1 className="project-title mt-4 text-3xl font-bold lg:mt-0 lg:text-4xl">
                Portfolio
              </h1>
              <p className="max-w-xl text-lg capitalize lg:text-xl">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="rounded-3x flex w-36 cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-3 py-1 text-black delay-100 duration-300 hover:w-full hover:justify-start hover:bg-[#bcedff52] hover:font-bold hover:text-[#fff]">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>

          <div className="card-1 items-center justify-between gap-7 rounded-2xl bg-primary p-5 text-[#ffffffb0] hover:bg-[#23094394] lg:flex lg:h-64 lg:w-[1000px]">
            <div className="image h-60 w-full rounded-2xl bg-[#ffffffb0] delay-100 duration-300 hover:z-10 lg:h-56 lg:w-[50%] lg:hover:h-96 lg:hover:w-full"></div>

            <div className="content-div space-y-4">
              <h1 className="project-title mt-4 text-3xl font-bold lg:mt-0 lg:text-4xl">
                Portfolio
              </h1>
              <p className="max-w-xl text-lg capitalize lg:text-xl">
                This Website present your identity | Live Updates | your
                introduction and more yourself
              </p>
              <div className="rounded-3x flex w-36 cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-3 py-1 text-black delay-100 duration-300 hover:w-full hover:justify-start hover:bg-[#bcedff52] hover:font-bold hover:text-[#fff]">
                Visit
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Projects;

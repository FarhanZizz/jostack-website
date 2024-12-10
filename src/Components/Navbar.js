import { useGSAP } from "@gsap/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is "/projects"
  const isProjectsRoute = location.pathname === "/projects";
  // check if current route is "/contact"
  const isContactRoute = location.pathname === "/contact";
  //  using gsap in navbar //
  useGSAP(() => {
    gsap.from(".navbar-end", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      delay: 1,
    });

    gsap.from(".jostack", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    });
    gsap.from(".hamburger", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    });

    gsap.from(".route", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      delay: 0.7,
    });
  });

  return (
    <div
      className={`
  navbar 
  px-24 md:px-8 lg:px-16 
  ${isProjectsRoute || isContactRoute ? "bg-[#141517] text-white" : "bg-white text-black"}
`}

    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg h-5 w-5 hamburger"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-40 p-2 shadow"
          >
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>

            <li>
              <CustomLink to="/projects">Projects</CustomLink>
            </li>
          </ul>
        </div>

        <CustomLink
          to="/"
          className={`jostack  text-2xl ${isProjectsRoute || isContactRoute ? "text-white" : "text-primary"
            } uppercase font-bold`}
        >
          jostack .
        </CustomLink>
      </div>
      <div className="navbar-center  hidden lg:flex route">
        <ul
          className={`flex gap-10 ${isProjectsRoute || isContactRoute ? "text-white" : "text-primary"
            } uppercase font-medium `}
        >
          <li
            className={`border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] ${isProjectsRoute || isContactRoute ? "after:bg-white" : "after:bg-primary"
              }
              after:w-0 after:transition-all hover:after:w-full p-1`}
          >
            <CustomLink to="/">Home</CustomLink>
          </li>

          <li
            className={`border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] ${isProjectsRoute ? "after:bg-white" : "after:bg-primary"
              }
              after:w-0 after:transition-all hover:after:w-full p-1`}
          >
            <CustomLink to="/projects">Projects</CustomLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <CustomLink
          to="/contact"
          className="rounded-3x bg-primary px-3 py-1 rounded-xl text-white flex items-center gap-3"
        >
          Contact <FaArrowAltCircleRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;

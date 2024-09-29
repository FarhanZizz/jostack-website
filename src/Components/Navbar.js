import { useGSAP } from "@gsap/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";

//
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar  px-24 md:px-8 lg:px-16 bg-[#cccccc]  ">
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
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="jostack grostesk text-2xl text-primary uppercase font-bold "
        >
          jostack
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex route">
        <ul className="flex gap-10 text-primary  uppercase font-medium ">
          <li
            className="home border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-primary
              after:w-0 after:transition-all hover:after:w-full p-1  "
          >
            <NavLink to="/">Home</NavLink>
          </li>

          <li
            className="border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-primary 
              after:w-0 after:transition-all hover:after:w-full p-1  "
          >
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="rounded-3x bg-primary px-3 py-1 rounded-xl text-white flex items-center gap-3">
          Contact <FaArrowAltCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

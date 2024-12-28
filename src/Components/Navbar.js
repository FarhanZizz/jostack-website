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
    gsap.from(".jostack", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    });
  });

  return (
    <div
      style={{
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "color 0.3s ease, background-color 0.3s ease",
      }}
      className={`flex items-center justify-between bg-none px-5 py-3 lg:px-20 ${
        isProjectsRoute || isContactRoute
          ? "bg-[#141517] text-white"
          : "bg-white text-black"
      } `}
    >
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg hamburger h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isProjectsRoute || isContactRoute ? "white" : "#281046"}
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
            className="menu dropdown-content z-[1] mt-3 w-52 bg-primary text-lg text-white shadow-2xl"
          >
            <li className="hover:bg-white hover:text-primary focus:text-white">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="hover:bg-white hover:text-primary">
              <CustomLink to="/projects">Projects</CustomLink>
            </li>
          </ul>
        </div>

        <CustomLink
          to="/"
          className={`jostack text-2xl ${
            isProjectsRoute || isContactRoute ? "text-white" : "text-primary"
          } font-bold uppercase`}
        >
          jostack .
        </CustomLink>
      </div>
      <div className="hidden lg:flex">
        <ul
          className={`flex gap-10 ${
            isProjectsRoute || isContactRoute ? "text-white" : "text-primary"
          } font-medium uppercase`}
        >
          <li
            className={`border-b-3 duration-600 relative border-transparent transition-all ease-linear after:absolute after:bottom-0 after:left-0 after:h-[3px] after:content-[''] ${
              isProjectsRoute || isContactRoute
                ? "after:bg-white"
                : "after:bg-primary"
            } p-1 after:w-0 after:transition-all hover:after:w-full`}
          >
            <CustomLink to="/">Home</CustomLink>
          </li>

          <li
            className={`border-b-3 duration-600 relative border-transparent transition-all ease-linear after:absolute after:bottom-0 after:left-0 after:h-[3px] after:content-[''] ${
              isProjectsRoute || isContactRoute
                ? "after:bg-white"
                : "after:bg-primary"
            } p-1 after:w-0 after:transition-all hover:after:w-full`}
          >
            <CustomLink to="/projects">Projects</CustomLink>
          </li>
        </ul>
      </div>
      <div className="">
        <CustomLink
          to="/contact"
          className="rounded-3x flex items-center gap-3 rounded-xl bg-primary px-3 py-1 text-white"
        >
          Contact <FaArrowAltCircleRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;

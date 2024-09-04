import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuitems = (
    <>
      <li
        className="border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-primary 
              after:w-0 after:transition-all hover:after:w-full p-1 "
      >
        <NavLink to="/">Home</NavLink>
      </li>

      <li
        className="border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-primary 
              after:w-0 after:transition-all hover:after:w-full p-1"
      >
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            {menuitems}
          </ul>
        </div>
        <a
          className="text-2xl font-medium border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-primary 
              after:w-0 after:transition-all hover:after:w-full"
        >
          Jostack
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 text-[#454343] text-[14px]">{menuitems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn min-h-1 h-9  btn-primary font-medium rounded-[10px]">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

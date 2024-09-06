
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 
// 
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const menuitems = (
    <>
      <li
        className="home border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#ffff]
              after:w-0 after:transition-all hover:after:w-full p-1  "
      >
        <NavLink to="/">Home</NavLink>
      </li>

      <li
        className="border-b-3 border-transparent relative transition-all duration-600 ease-linear 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#ffff] 
              after:w-0 after:transition-all hover:after:w-full p-1  "
      >
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </>
    
  );

//  using gsap in navbar //

const tl = gsap.timeline() ; 
useGSAP(() =>{
   gsap.from('.navbar-end',{
    y:-10 ,
    opacity : 0 ,
    duration : 1 ,
    delay : 1
   }) ;

   gsap.from('.jostack',{
    y:-10 ,
    opacity : 0 ,
    duration : 1 ,
    delay : 0.3
  }) ;

  gsap.from('.route',{
    y:-10 ,
    opacity : 0 ,
    duration : 1 ,
    delay : 0.7
  }) ;

}) ;


  return (
    <div className="navbar px-36 bg-slate-400 max-w-screen-1xl mx-auto  shadow-lg ">
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


        <span className="jostack text-2xl text-[#281046] md:uppercase font-bold ">
          jostack
        </span>

      </div>
      <div className="navbar-center  hidden lg:flex route">
        <ul className="flex gap-10 text-[#281046] text-black md:uppercase font-medium ">{menuitems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost bg-primary text-[#ffff]">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

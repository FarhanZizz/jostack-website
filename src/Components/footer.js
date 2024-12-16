import gsap from "gsap";
import React, { useRef, useState } from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";

const Footer = () => {
  const initialPath = "M 10 100 Q 500 100 1800 100";
  const finalPath = "M 10 100 Q 500 100 1800 100";

  // Reference to the SVG path element
  const pathRef = useRef(null);

  // State to keep track of the current path
  const [path, setPath] = useState(initialPath);

  // Handle mousemove event
  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    const newPath = `M 10 100 Q ${x} ${y} 1800 100`;
    setPath(newPath);

    // Animate the path change using GSAP
    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // Handle mouseleave event
  const handleMouseLeave = () => {
    setPath(finalPath);

    // Animate the path back to the finalPath with elastic effect
    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
    });
  };

  const location = useLocation();

  // Check if the current route is "/projects"
  const isProjectsRoute = location.pathname === "/projects";
  const isContactRoute = location.pathname === "/contact";
  return (
    <div
      className={` grotesk lg:p-20 p-5  ${
        isProjectsRoute || isContactRoute
          ? "bg-[#141517] text-white -mt-1"
          : "bg-white text-black mt-7"
      }`}
    >
      {/*  */}

      <svg
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="lea"
        width="100%" // Ensure full width
        height="300px" // Fixed height of 400px
        viewBox="0 0 1800 300" // Increased the viewBox width for a longer path
      >
        <path
          ref={pathRef}
          d={path}
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {/*  */}

      <div className="lg:flex flex-col ">
        <h1 className="lg:text-5xl text-3xl font-bold grotesk ">
          Contact Information
        </h1>
      </div>
      <div className="lg:flex justify-between lg:space-y-0 space-y-7  mt-9">
        <div className="text-3xl">
          <h1>Socials</h1>
          <div className="flex gap-4 mt-4 ">
            <FaTelegram className="hover:text-primary" />
            <FaLinkedin className="hover:text-primary" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-3">Email</h1>
          <code className="text-2xl">jostackservices@gmail.com</code>
        </div>
        <div>
          <CustomLink
            to="/contact"
            className={`btn btn-outline ${
              isProjectsRoute || isContactRoute
                ? "border-white text-white hover:border-primary hover:bg-primary"
                : "btn-primary"
            } text-2xl w-full`}
          >
            Get In Touch
          </CustomLink>
          <p className="text-lg mt-2">
            © 2024 Jostack Services. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import CustomLink from "./CustomLink";

const Footer = () => {
  const location = useLocation();

  // Check if the current route is "/projects"
  const isProjectsRoute = location.pathname === "/projects";
  return (
    <div
      className={` grotesk p-20  ${
        isProjectsRoute
          ? "bg-[#141517] text-white -mt-1"
          : "bg-white text-black mt-7"
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold grotesk">Contact Information</h1>
      </div>
      <div className="flex justify-between mt-9">
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
              isProjectsRoute
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

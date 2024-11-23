import React from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" grotesk p-20 mt-7">
      <div className="flex flex-col justify-between h-5/6">
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
          <button className="btn btn-outline btn-primary text-2xl w-full">
            Get In Touch
          </button>
          <p className="text-lg mt-2">
            © 2024 Jostack Services. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

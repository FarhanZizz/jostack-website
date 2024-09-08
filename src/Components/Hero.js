import { useGSAP } from "@gsap/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import React from "react";
import bannerimg from "../assets/banner_img.png";
const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title p ", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 0.5,
      stagger: 0.3,
    });
    gsap.from(".hero-details h1", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 0.7,
      stagger: 0.3,
    });
    gsap.from(".hero-details p", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 0.7,
      stagger: 0.3,
    });
    gsap.from(".btn-hero ", {
      x: -10,
      opacity: 0,
      duration: 1.6,
      delay: 3,
    });
  });

  return (
    <div className="hero-section bg-[rgb(245,245,220)] p-10 flex items-center  flex-col-reverse lg:flex-row ">
      <div className="text-container grotesk">
        <div className="hero-title space-y-6 mt-10">
          <p className="text-3xl md:text-6xl md:uppercase font-bold leading-10">
            <span className="block md:inline">Transforming ideas</span>
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>
            <span className="block md:inline">into digital</span>
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>
            <span className="block md:inline">reality</span>
          </p>
        </div>

        <div className="hero-details mt-10 text-[17px] space-y-1 ">
          <h1 className="hidden md:block">
            {" "}
            At Jostack, we transform your ideas into digital reality with expert
            website{" "}
          </h1>
          <h1 className="hidden md:block">
            {" "}
            creation, management and branding. Explore our wide range of IT
            services{" "}
          </h1>
          <h1 className="hidden md:block">
            designed to elevate your business in the digital world.
          </h1>
          <p className="md:hidden">
            At Jostack, we transform your ideas into digital reality with expert
            website creation, management and branding. Explore our wide range of
            IT services designed to elevate your business in the digital world.
          </p>
        </div>
        <button className="btn-hero rounded-3xl uppercase flex gap-1 items-center btn-ghost mt-10 bg-primary text-[#FFFF] p-4 ">
          contact us <FaLongArrowAltRight />{" "}
        </button>
      </div>

      <img className=" md:max-w-xl lg:mx-auto" src={bannerimg}></img>
    </div>
  );
};

export default Hero;

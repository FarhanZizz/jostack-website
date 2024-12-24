import { useGSAP } from "@gsap/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../assets/circle.json";
import React from "react";
import CustomLink from "./CustomLink";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title h1 ", {
      y: 50,
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 0.5,
    });
    gsap.from(".hero-details p", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 1,
      stagger: 0.5,
    });
    gsap.from(".btn-hero ", {
      x: -10,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(".svg", {
      opacity: 0.3,
      delay: 3,
      duration: 2.5,
    });
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lg:flex justify-between lg:px-20 lg:py-20 2xl:py-28  px-5">
      <div className="hero-title lg:text-left text-center grotesk ">
        <h1 className="lg:text-8xl 2xl:text-9xl text-5xl font-bold uppercase">
          TRANSFORMING IDEAS <br /> INTO DIGITAL <br /> REALITY
        </h1>
      </div>

      <div className="hero-details">
        <div className="svg lg:mb-20 2xl:w-[250px] 2xl:h-[250px] h-[225px] w-[225px] mx-auto">
          <Lottie options={defaultOptions} />
        </div>
        <div className="text-xl lg:text-left text-center lg:p-0 p-4 max-w-xl capitalize">
          <p>
            At Jostack, we transform your ideas into digital reality with expert
            website creation, management and branding. Explore our wide range of
            IT services designed to elevate your business in the digital world.
          </p>
        </div>
        <div className="flex items-center lg:justify-normal justify-center lg:mt-4">
          <CustomLink
            to="/contact"
            className="btn-hero rounded-3x bg-primary px-3 py-1 rounded-xl text-white flex items-center gap-3"
          >
            Contact <FaArrowAltCircleRight />{" "}
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;

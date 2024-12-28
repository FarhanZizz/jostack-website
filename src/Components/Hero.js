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
    <div className="justify-between px-5 py-28 lg:flex lg:px-20 2xl:py-44">
      <div className="hero-title grotesk text-center lg:text-left">
        <h1 className="text-5xl font-bold uppercase lg:text-8xl 2xl:text-9xl">
          TRANSFORMING IDEAS <br /> INTO DIGITAL <br /> REALITY
        </h1>
      </div>

      <div className="hero-details">
        <div className="svg mx-auto h-[225px] w-[225px] lg:mb-20 2xl:h-[250px] 2xl:w-[250px]">
          <Lottie options={defaultOptions} />
        </div>
        <div className="max-w-xl p-4 text-center text-xl capitalize lg:p-0 lg:text-left">
          <p>
            At Jostack, we transform your ideas into digital reality with expert
            website creation, management and branding. Explore our wide range of
            IT services designed to elevate your business in the digital world.
          </p>
        </div>
        <div className="flex items-center justify-center lg:mt-4 lg:justify-normal">
          <CustomLink
            to="/contact"
            className="btn-hero rounded-3x flex items-center gap-3 rounded-xl bg-primary px-3 py-1 text-white"
          >
            Contact <FaArrowAltCircleRight />{" "}
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;

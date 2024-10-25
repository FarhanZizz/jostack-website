/* eslint-disable jsx-a11y/anchor-is-valid */
import { useGSAP } from "@gsap/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../assets/circle.json";
import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../assets/circle.json";
const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title h1 ", {
      y: 50,
      opacity: 0,
      duration: 2,
      delay: 3,
      stagger: 0.3,
    });
    gsap.from(".hero-details p", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 3.5,
      stagger: 0.3,
    });
    gsap.from(".btn-hero ", {
      x: -10,
      opacity: 0,
      duration: 1.6,
      delay: 3.6,
    });
    gsap.from(".svg", {
      x: -550,
      opacity: 0.3,
      delay: 2,
      duration: 3,
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
    <div className="">
      <div className="hero-section max-w-[1500px] mx-auto flex justify-between  min-h-screen mt-44  ">
        <div className=" hero-title  grotesk ">
          <h1 className="text-9xl font-bold "> TRANSFORMING IDEAS </h1>
          <h1 className="text-9xl font-bold  ">INTO DIGITAL </h1>
          <h1 className="text-9xl font-bold  ">REALITY</h1>
        </div>

        <div className="hero-details   text-[14px] space-y-2">
          <div className="svg mb-32">
            <Lottie options={defaultOptions} height={250} width={250} />
          </div>
          <div className="text-[20px] max-w-xl capitalize">
            <p>
              At Jostack, we transform your ideas into digital reality with
              expert website
            </p>
            <p>
              creation, management and branding. Explore our wide range of IT
              services
            </p>
            <p> designed to elevate your business in the digital world.</p>
          </div>
          <div className="flex items-center mt-4">
            <a className="btn-hero rounded-3x bg-primary px-3 py-1 rounded-xl text-white flex items-center gap-3">
              Contact <FaArrowAltCircleRight />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

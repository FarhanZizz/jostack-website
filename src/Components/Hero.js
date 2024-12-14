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
    <div className="">
      <div className="hero-section max-w-[1500px] mx-auto lg:flex justify-between  min-h-screen lg:mt-44
      mt-20  ">
        <div className=" hero-title lg:text-left text-center grotesk ">
          <h1 className="lg:text-9xl text-5xl font-bold "> TRANSFORMING IDEAS </h1>
          <h1 className="lg:text-9xl text-5xl font-bold  ">INTO DIGITAL </h1>
          <h1 className="lg:text-9xl text-5xl font-bold  ">REALITY</h1>
        </div>

        <div className="hero-details   text-[14px] space-y-2">
          <div className="svg lg:mb-32 m-10">
            <Lottie options={defaultOptions} height={250} width={250} />
          </div>
          <div className="text-[20px] lg:text-left text-center lg:p-0 p-4 max-w-xl capitalize">
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
          <div className="flex items-center lg:justify-normal justify-center lg:mt-4">
            <a
              href="/contact"
              className="btn-hero rounded-3x bg-primary px-3 py-1 rounded-xl text-white flex items-center gap-3"
            >
              Contact <FaArrowAltCircleRight />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

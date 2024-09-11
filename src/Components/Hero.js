import { useGSAP } from "@gsap/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationData from "../assets/circle.json";
import React from "react";
import bannerimg from "../assets/banner_img.png";
const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title h1 ", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 0.5,
      stagger: 0.3,
    });
    gsap.from(".hero-details p", {
      y: 50,
      opacity: 0,
      duration: 1.6,
      delay: 0.7,
      stagger: 0.3,
    });
    // gsap.from("", {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1.6,
    //   delay: 0.7,
    //   stagger: 0.3,
    // });
    gsap.from(".btn-hero ", {
      x: -10,
      opacity: 0,
      duration: 1.6,
      delay: 3,
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
    <div className="hero-section p-52 bg-[#cccccc]  flex justify-between  ">
      {/* <div className="text-container grotesk">
        <div className="hero-title text-7xl space-y-9 mt-10">
          <p className=" text-[] md:text-6xl md:uppercase font-bold leading-10">
            <span className=" text-9xl block md:inline">Transforming ideas</span>
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>
            <span className="text-8xl block md:inline">into digital</span>
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
       
      </div> */}
      {/* <img className=" md:max-w-xl lg:mx-auto" src={bannerimg}></img> */}

      <div className=" hero-title grotesk ">
        <h1 className="text-9xl font-bold "> TRANSFORMING IDEAS </h1>
        <h1 className="text-9xl font-bold  ">INTO DIGITAL </h1>
        <h1 className="text-9xl font-bold  ">REALITY</h1>
      </div>

      <div className="hero-details  text-[14px] space-y-2">
        <Lottie options={defaultOptions} height={300} width={300} />
        <p>
          At Jostack, we transform your ideas into digital reality with expert
          website
        </p>
        <p>
          creation, management and branding. Explore our wide range of IT
          services
        </p>
        <p> designed to elevate your business in the digital world.</p>
        <div>
          <button className="btn-hero rounded-xl uppercase flex gap-1 items-center btn-ghost mt-10 bg-primary text-[#FFFF] text-[14px] px-5 py-2 ">
            contact us <FaLongArrowAltRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

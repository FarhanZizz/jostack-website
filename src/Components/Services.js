import React, { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const scrollEl = document.querySelector(".smooth-scroll");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-main",
        scroller: ".smooth-scroll",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(".text-service", { top: "-12%" }, "a")
      .to("#card-1", { top: "35%" }, "a")
      .to("#card-2", { top: "130%" }, "a")
      .to("#card-2", { top: "42%" }, "b")
      .to("#card-1", { width: "65%", height: "65vh" }, "b")
      .to("#card-3", { top: "130%" }, "b")
      .to("#card-3", { top: "50%" }, "c")
      .to("#card-2", { width: "70%", height: "70vh" }, "c");
  }, []);

  return (
    <div className="service-main z-50 relative min-h-[150vh] w-[100%] bg-[#141517] smooth-scroll">
      <div className="text-service md:uppercase relative text-[6vh] text-white font-semibold flex flex-col items-center justify-center min-h-screen grotesk">
        let's begin with{" "}
        <span className="text-[9vh] jostack text-primary">jostack</span>
      </div>

      <div
        className="absolute top-[250%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-red-500 h-[80vh] w-[80%] rounded-xl"
        id="card-1"
      >
        <div className="flex flex-col justify-between items-center mt-12">
          <h1 className="text-[9vh] text-white font-bold md:uppercase grotesk">
            Branding Your Website
          </h1>
          <div className="bg-white px-5 py-1 font-bold fixed rounded-xl flex items-center gap-2 mt-96 md:uppercase">
            Start
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>

      <div
        className="absolute top-[230%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-red-800 h-[80vh] w-[80%] rounded-xl"
        id="card-2"
      >
        <div className="flex flex-col justify-between items-center mt-12">
          <h1 className="text-[9vh] text-white font-bold md:uppercase grotesk">
            Build your website
          </h1>
          <div className="bg-white px-5 py-1 font-bold fixed rounded-xl flex items-center gap-2 mt-96 md:uppercase">
            Start
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>

      <div
        className="absolute top-[250%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-red-300 h-[80vh] w-[80%] rounded-xl"
        id="card-3"
      >
        <div className="flex flex-col justify-between items-center mt-12">
          <h1 className="text-[9vh] text-white font-bold md:uppercase grotesk">
            Maintain Your Website
          </h1>
          <div className="bg-white px-5 py-1 font-bold fixed rounded-xl flex items-center gap-2 mt-96 md:uppercase">
            Start
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

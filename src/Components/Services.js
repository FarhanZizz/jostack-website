import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomLink from "./CustomLink";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-main",
        scroller: ".smooth-scroll",
        start: "top top",
        end: "+=200%",
        scrub: 3,
        pin: true,
      },
    });

    tl.to(".text-service", { top: "-12%" }, "a")
      .to("#card-1", { top: "35%" }, "a")
      .to("#card-2", { top: "130%" }, "a")
      .to("#card-2", { top: "42%" }, "b")
      // .to("#card-1", { width: "75%", height: "65vh" }, "b")
      .to("#card-3", { top: "130%" }, "b")
      .to("#card-3", { top: "50%" }, "c");
    // .to("#card-2", { width: "75%", height: "70vh" }, "c");
  });

  return (
    <div className="service-main relative min-h-[150vh] w-[100%]  smooth-scroll">
      <div className="text-service uppercase relative lg:text-[6vh] text-[40px] text-white font-semibold flex flex-col items-center justify-center min-h-screen grotesk ">
        let's begin with{" "}
        <span className="lg:text-[9vh] jostack text-primary lg:m-0 m-5 px-12 py-1 bg-[#ffffffee] rounded-3xl">
          jostack
        </span>
      </div>

      <div
        className="absolute top-[250%] left-[50%]  -translate-x-[50%] -translate-y-[50%] bg-[#999999]  lg:w-[80%] w-full  rounded-xl "
        id="card-1"
      >
        <div className="lg:grid grid-cols-3  h-full items-center">
          <div className="col-span-2 lg:p-16 p-10">
            <h1 className="lg:text-6xl text-3xl text-white font-bold uppercase grotesk">
              Website Building
            </h1>
            <h1 className="lg:text-3xl text-2xl text-primary mt-5">
              Crafted from Scratch to Success
            </h1>
            <p className="lg:text-3xl text-2xl mt-5 leading-loose ">
              We design and develop fully tailored websites to create a{" "}
              <span className="bg-primary text-white px-2 py-1 rounded-xl capitalize">
                unique digital identity
              </span>{" "}
              for your brand, ensuring it stands out from the competition.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Building"}`}
              className="btn btn-outline border-none btn-primary bg-white mt-5 font-bold grotesk text-2xl w-full"
            >
              Start Your Project
            </CustomLink>
          </div>
          <div className="bg-white rounded-e-xl place-content-center"></div>
        </div>
      </div>

      <div
        className="absolute top-[230%] left-[50%] text-white  -translate-x-[50%] -translate-y-[50%] bg-[#2f463e]  lg:w-[80%] w-full rounded-xl"
        id="card-2"
      >
        <div className="lg:grid grid-cols-3  h-full items-center">
          <div className="col-span-2 lg:p-16 p-10">
            <h1 className="lg:text-6xl text-3xl  font-bold md:uppercase grotesk">
              Website Branding
            </h1>
            <h1 className="lg:text-3xl text-2xl mt-5 ">
              A brand that leaves a{" "}
              <span className="bg-primary  px-2 py-1 rounded-xl capitalize">
                lasting impression
              </span>{" "}
            </h1>
            <p className="lg:text-3xl text-2xl mt-5 leading-loose ">
              From logo design to color schemes we ensure every detail aligns
              with your{" "}
              <span className="bg-primary  px-2 py-1 rounded-xl capitalize">
                brand’s personality
              </span>{" "}
              and resonates with your target audience.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Branding"}`}
              className="btn btn-outline border-none btn-primary bg-white mt-5 font-bold grotesk text-2xl w-full"
            >
              Create Your Brand
            </CustomLink>
          </div>
          <div className="bg-white rounded-e-xl place-content-center"></div>
        </div>
      </div>

      <div
        className="absolute top-[230%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#101d2e]  lg:w-[80%] w-full rounded-xl text-white"
        id="card-3"
      >
        <div className="lg:grid grid-cols-3  h-full items-center">
          <div className="col-span-2 lg:p-16 p-10">
            <h1 className="lg:text-6xl text-3xl  font-bold md:uppercase grotesk">
              Website Maintenance
            </h1>
            <h1 className="lg:text-3xl text-2xl mt-5">
              <span className="bg-primary  px-2 py-1 rounded-xl capitalize">
                Hassle-free upkeep
              </span>{" "}
              for a high-performing website.
            </h1>
            <p className="lg:text-3xl text-2xl mt-5 leading-loose ">
              Our team manages regular security updates, speed optimization, and{" "}
              <span className="bg-primary  px-2 py-1 rounded-xl capitalize">
                technical support
              </span>{" "}
              to keep your website running smoothly.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Maintenance"}`}
              className="btn btn-outline border-none btn-primary bg-white mt-5 font-bold grotesk text-2xl w-full"
            >
              Optimize Now
            </CustomLink>
          </div>
          <div className="bg-white rounded-e-xl place-content-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;

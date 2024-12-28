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
    <div className="service-main smooth-scroll relative min-h-[150vh] w-[100%]">
      <div className="text-service grotesk relative flex min-h-screen flex-col items-center justify-center text-[40px] font-semibold uppercase text-white lg:text-[6vh]">
        let's begin with{" "}
        <span className="jostack m-5 rounded-3xl bg-[#ffffffee] px-12 py-1 text-primary lg:m-0 lg:text-[9vh]">
          jostack
        </span>
      </div>

      <div
        className="absolute left-[50%] top-[250%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-[#999999] lg:w-[80%]"
        id="card-1"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="col-span-2 p-10 lg:p-16">
            <h1 className="grotesk text-3xl font-bold uppercase text-white lg:text-6xl">
              Website Building
            </h1>
            <h1 className="mt-5 text-2xl text-primary lg:text-3xl">
              Crafted from Scratch to Success
            </h1>
            <p className="mt-5 text-2xl leading-loose lg:text-3xl">
              We design and develop fully tailored websites to create a{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize text-white">
                unique digital identity
              </span>{" "}
              for your brand, ensuring it stands out from the competition.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Building"}`}
              className="grotesk btn btn-outline btn-primary mt-5 w-full border-none bg-white text-2xl font-bold"
            >
              Start Your Project
            </CustomLink>
          </div>
          <div className="place-content-center rounded-e-xl bg-white"></div>
        </div>
      </div>

      <div
        className="absolute left-[50%] top-[230%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-[#2f463e] text-white lg:w-[80%]"
        id="card-2"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="col-span-2 p-10 lg:p-16">
            <h1 className="grotesk text-3xl font-bold md:uppercase lg:text-6xl">
              Website Branding
            </h1>
            <h1 className="mt-5 text-2xl lg:text-3xl">
              A brand that leaves a{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize">
                lasting impression
              </span>{" "}
            </h1>
            <p className="mt-5 text-2xl leading-loose lg:text-3xl">
              From logo design to color schemes we ensure every detail aligns
              with your{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize">
                brand’s personality
              </span>{" "}
              and resonates with your target audience.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Branding"}`}
              className="grotesk btn btn-outline btn-primary mt-5 w-full border-none bg-white text-2xl font-bold"
            >
              Create Your Brand
            </CustomLink>
          </div>
          <div className="place-content-center rounded-e-xl bg-white"></div>
        </div>
      </div>

      <div
        className="absolute left-[50%] top-[230%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-[#101d2e] text-white lg:w-[80%]"
        id="card-3"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="col-span-2 p-10 lg:p-16">
            <h1 className="grotesk text-3xl font-bold md:uppercase lg:text-6xl">
              Website Maintenance
            </h1>
            <h1 className="mt-5 text-2xl lg:text-3xl">
              <span className="rounded-xl bg-primary px-2 py-1 capitalize">
                Hassle-free upkeep
              </span>{" "}
              for a high-performing website.
            </h1>
            <p className="mt-5 text-2xl leading-loose lg:text-3xl">
              Our team manages regular security updates, speed optimization, and{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize">
                technical support
              </span>{" "}
              to keep your website running smoothly.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Maintenance"}`}
              className="grotesk btn btn-outline btn-primary mt-5 w-full border-none bg-white text-2xl font-bold"
            >
              Optimize Now
            </CustomLink>
          </div>
          <div className="place-content-center rounded-e-xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;

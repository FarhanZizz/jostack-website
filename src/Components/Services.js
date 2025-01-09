import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomLink from "./CustomLink";
import building from "../assets/Building.png";
import branding from "../assets/branding.png";
import maintenance from "../assets/maintenance.png";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1024px)", () => {
      // Animations for devices smaller than lg
      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-main",
          scroller: ".smooth-scroll",
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
        },
      });

      tlMobile
        .to(".text-service", { top: "-20%" }, "a") // Adjust for mobile
        .to("#card-1", { top: "28%" }, "a")
        .to("#card-2", { top: "118%" }, "a")
        .to("#card-2", { top: "35%" }, "b")
        .to("#card-3", { top: "115%" }, "b")
        .to("#card-3", { top: "42%" }, "c");
    });

    mm.add("(min-width: 1025px)", () => {
      // Animations for larger screens
      const tlDesktop = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-main",
          scroller: ".smooth-scroll",
          start: "top top",
          end: "+=200%",
          scrub: 3,
          pin: true,
        },
      });

      tlDesktop
        .to(".text-service", { top: "-12%" }, "a")
        .to("#card-1", { top: "35%" }, "a")
        .to("#card-2", { top: "130%" }, "a")
        .to("#card-2", { top: "42%" }, "b")
        .to("#card-3", { top: "130%" }, "b")
        .to("#card-3", { top: "50%" }, "c");
    });

    return () => mm.revert(); // Clean up on unmount
  });
  return (
    <div className="service-main smooth-scroll relative mx-auto min-h-[150vh] w-[90%] lg:w-[100%]">
      <div className="text-service grotesk relative flex min-h-screen flex-col items-center justify-center text-[40px] font-semibold uppercase text-white lg:text-[6vh]">
        let's begin with{" "}
        <span className="jostack m-5 rounded-3xl bg-[#ffffffee] px-12 py-1 text-primary lg:m-0 lg:text-[9vh]">
          jostack
        </span>
      </div>

      <div
        className="absolute left-[50%] top-[250%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-white lg:w-[80%]"
        id="card-1"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="z-30 col-span-2 p-7 lg:p-16">
            <h1 className="grotesk text-3xl font-bold uppercase text-primary lg:text-5xl 2xl:text-6xl">
              Website Building
            </h1>
            <h1 className="mt-5 text-xl text-primary lg:text-2xl 2xl:text-3xl">
              Crafted from Scratch to Success
            </h1>
            <p className="mt-5 text-xl leading-loose lg:text-2xl 2xl:text-3xl">
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
          <img
            src={building}
            alt="Bulding"
            className="absolute right-0 hidden h-full rounded-e-xl object-cover lg:block"
          />
        </div>
      </div>

      <div
        className="absolute left-[50%] top-[250%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-[#2f463e] lg:w-[80%]"
        id="card-2"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="z-30 col-span-2 p-7 lg:p-16">
            <h1 className="grotesk text-3xl font-bold uppercase text-black lg:text-5xl 2xl:text-6xl">
              Website Branding
            </h1>
            <h1 className="mt-5 text-xl text-black lg:text-2xl 2xl:text-3xl">
              A brand that leaves a{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize text-white">
                lasting impression
              </span>{" "}
            </h1>
            <p className="mt-5 text-xl leading-loose lg:text-2xl 2xl:text-3xl">
              From logo design to color schemes we ensure every detail aligns
              with your{" "}
              <span className="rounded-xl bg-primary px-2 py-1 capitalize text-white">
                Brand’s personality
              </span>{" "}
              and resonates with your target audience.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Branding"}`}
              className="grotesk btn btn-outline mt-5 w-full border-none bg-black text-2xl font-bold text-white hover:bg-primary"
            >
              Create Your Brand
            </CustomLink>
          </div>
          <img
            src={branding}
            alt="Bulding"
            className="absolute right-0 hidden h-full rounded-e-xl object-cover lg:block"
          />
        </div>
      </div>
      <div
        className="absolute left-[50%] top-[250%] w-full -translate-x-[50%] -translate-y-[50%] rounded-xl bg-[#101d2e] lg:w-[80%]"
        id="card-3"
      >
        <div className="h-full grid-cols-3 items-center lg:grid">
          <div className="z-30 col-span-2 p-7 lg:p-16">
            <h1 className="grotesk text-3xl font-bold uppercase text-white lg:text-5xl 2xl:text-6xl">
              Website Maintenance
            </h1>
            <h1 className="mt-5 text-xl text-white lg:text-2xl 2xl:text-3xl">
              <span className="rounded-xl bg-white px-2 py-1 font-semibold capitalize text-primary">
                Hassle-free upkeep
              </span>{" "}
              for your website.
            </h1>
            <p className="mt-5 text-xl leading-loose text-white lg:text-2xl 2xl:text-3xl">
              Our team manages regular security updates, speed optimization, and{" "}
              <span className="rounded-xl bg-white px-2 py-1 font-semibold capitalize text-primary">
                technical support
              </span>{" "}
              to keep your website running smoothly.
            </p>
            <CustomLink
              to={`/contact?service=${"Website Branding"}`}
              className="grotesk btn btn-outline mt-5 w-full border-none bg-white text-2xl font-bold text-primary hover:bg-primary"
            >
              Create Your Brand
            </CustomLink>
          </div>
          <img
            src={maintenance}
            alt="Bulding"
            className="absolute right-0 hidden h-full rounded-e-xl object-cover lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

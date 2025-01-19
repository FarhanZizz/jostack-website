import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",

        start: "top top",
        end: "+=400%",
        scrub: 4,
        pin: true,
      },
    });

    // Animate the visibility of each section one by one as you scroll
    tl.to(".a-one", {
      opacity: 1,
      y: "0%",
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5, // delay to control when it appears
    })
      .to(".a-one", {
        opacity: 0,
        y: "-20%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".a-two", {
        opacity: 1,
        y: "0%",
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      })
      .to(".a-two", {
        opacity: 0,
        y: "-20%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".a-three", {
        opacity: 1,
        y: "0%",
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      })
      .to(".a-three", {
        opacity: 0,
        y: "-20%",
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".about-title", {
        marginRight: "-100%",
        duration: 2,
        ease: "power2.out",
      });
  });

  return (
    <div className="about-section relative grid grid-cols-1 items-center justify-center gap-y-64 px-5 pt-20 lg:h-screen lg:grid-cols-2 lg:px-0 lg:pt-0">
      {/* Left section */}
      <div>
        <span className="about-title grotesk flex items-center gap-4 text-3xl font-bold capitalize text-white lg:justify-center lg:text-[3vw]">
          how jostack works <BsFillPatchQuestionFill />
        </span>
      </div>

      {/* Right section */}
      <div className="relative flex items-center justify-center">
        {/* Stack all sections on top of each other */}
        <div className="a-one absolute mx-auto opacity-0 lg:top-1/2 lg:w-2/3 lg:-translate-y-1/2 lg:transform">
          <h1 className="grotesk text-[6vw] capitalize text-white lg:text-[3vw]">
            Discover and Plan
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-3 text-base capitalize text-white lg:mt-5 lg:text-[20px]">
            We begin by understanding your business needs and goals. From there,
            we create a tailored plan, outlining the digital tools and services
            that will best suit your brand.
          </p>
        </div>

        <div className="a-two absolute mx-auto opacity-0 lg:top-1/2 lg:w-2/3 lg:-translate-y-1/2 lg:transform">
          <h1 className="grotesk text-[6vw] capitalize text-white lg:text-[3vw]">
            Design and Develop
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-3 text-base capitalize text-white lg:mt-5 lg:text-[20px]">
            Our team designs and builds your project, focusing on seamless
            functionality, responsive design, and user experience. Every detail
            is crafted to align with your vision and objectives.
          </p>
        </div>

        <div className="a-three absolute mx-auto opacity-0 lg:top-1/2 lg:w-2/3 lg:-translate-y-1/2 lg:transform">
          <h1 className="grotesk text-[6vw] capitalize text-white lg:text-[3vw]">
            Launch and Support
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-3 text-base capitalize text-white lg:mt-5 lg:text-[20px]">
            Once reviewed and approved, we launch your project with ongoing
            support. We monitor project performance, provide updates, and offer
            services that help you grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

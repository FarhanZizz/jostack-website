import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        scroller: ".smooth-scroll",
        // markers: true ,
        start: "top top",
        end: "+=400%",
        scrub: 4,
        pin: true,
      },
    });

    tl.to(
      ".a-one",
      {
        opacity: "1",
        marginTop: "-35%",
        duration: 3,
        delay: 2,
      },
      "a",
    )

      .to(".a-one", {
        opacity: 0,
        marginTop: "-40%",
        duration: 3,
        delay: 2,
      })

      .to(".a-two", {
        opacity: "1",
        marginTop: "-25%",
        duration: 3,
        delay: 2,
      })

      .to(".a-two", {
        opacity: 0,
        marginTop: "-40%",
        duration: 3,
        delay: 2,
      })

      .to(".a-three", {
        opacity: "1",
        marginTop: "-15%",
        duration: 3,
        delay: 2,
      })

      .to(".a-three", {
        opacity: 0,
        marginTop: "-100%",
        duration: 3,
        delay: 2,
      })

      .to(".about-title", {
        marginLeft: "70%",
        duration: 10,
        delay: 2,
      });
  });

  return (
    <div className="about-section flex h-[100vh]">
      {/* left */}
      <div className="right ml-20 h-[100%] w-[50%]">
        <span className="about-title grotesk about-title mt-[40%] flex w-[80%] items-center justify-center gap-4 text-[3vw] font-bold capitalize text-white">
          how jostack works <BsFillPatchQuestionFill />{" "}
        </span>
      </div>
      {/* <span className='text-white text-[6vw] mt-[25%] question '></span> */}

      {/* right */}
      <div className="left ml-44 mt-[30%] h-[100%] w-[50%]">
        <div className="a-one mt-20 w-[70%] opacity-0">
          <h1 className="grotesk mb-4 text-[3vw] capitalize text-white">
            Discover and Plan
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-5 text-[20px] capitalize text-white">
            We begin by understanding your business needs and goals. From There,
            we create a tailored plan, outlining the digital tools and services
            that will best suit your brand.
          </p>
        </div>

        <div className="a-two mt-20 w-[70%] opacity-0">
          <h1 className="grotesk mb-4 text-[3vw] capitalize text-white">
            Design and Develop
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-5 text-[20px] capitalize text-white">
            Our team designs and builds your project, focusing on seamless
            functionality, responsive design, and user experience. Every detail
            is crafted to align with your vision and objectives.
          </p>
        </div>

        <div className="a-three mt-20 w-[70%] opacity-0">
          <h1 className="grotesk mb-4 text-[3vw] capitalize text-white">
            Launch and Support
          </h1>
          <div className="h-[0.5px] w-full rounded-xl bg-white"></div>
          <p className="mt-5 text-[20px] capitalize text-white">
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

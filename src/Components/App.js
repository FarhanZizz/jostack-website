import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
// import { FaCircleArrowRight } from "react-icons/fa6";
import { PiSealQuestionFill } from "react-icons/pi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
  // using GSAP //

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        // toggleActions:"restart pause reverse none "
        scroller: "body",
        // markers: true ,
        start: "top 100%",
        scrub: 1,
      },
      // scale:0,
      fontSize: 100,
      duration: 3,
      delay: 2,
      // duration: 0.7 ,
    });
    gsap.from(".about-details p", {
      scrollTrigger: {
        trigger: ".about-details p",
        start: "top 100%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  });

  return (
    <>
      <section className="Container-about py-24  bg-[#000]">
        {/* title of about section */}
        <div className=" mt-5 ">
          <div className="items-end">
            <p className="about-title  grotesk text-[5px]  font-semibold mt-3 flex items-center mr-44 flex-row-reverse gap-5 align-right text-[#fff]  ">
              {" "}
              How Jostack Work <PiSealQuestionFill />
            </p>
          </div>

          {/* <div className="max-w-7xl mt-10 mx-auto bg-white h-1  rounded-3xl">br</div> */}
          {/* content of  about section */}
          <div className="about-details p-28 space-y-6 text-[26px] md:capitalize">
            <p className="text-[#fff]">
              Our commitment to clients is rooted in strong, transparent
              relationships and a deep understanding of their{" "}
            </p>
            <p className="text-[#fff]">
              unique needs. We collaborate closely to bring your ideas to life,
              leveraging our expertise in branding,{" "}
            </p>
            <p className="text-[#fff]">
              website development, and digital marketing to create tailored
              solutions that resonate with target{" "}
            </p>
            <p className="text-[#fff]">
              audiences. With a passion for innovation, our skilled team stays
              at the forefront of technology, delivering{" "}
            </p>
            <p className="text-[#fff]">
              cutting-edge solutions that enhance online presence, streamline
              operations, and drive business growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

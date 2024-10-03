import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { PiSealQuestionFill } from "react-icons/pi";
const About = () => {
  // use gsap , emne joss . kintu if you stuck , you will get big duck !

  useGSAP(() =>{
    const tl = gsap.timeline({scrollTrigger:{
      trigger : ".Container-about",
      scroll: ".smooth-scroll",
      markers: true ,
      start : "50% 50%",
      end :"100% 50%",
      scrub: 2 ,
      pin : true 
    }});
  })



  return (
    <>
      <section className="Container-about min-h-screen py-38  bg-[#000] max-w-[1630px] rounded-3xl mx-auto shadow-xl mt-24 ">
        {/* title of about section */}
        <div className=" mt-5 ">
          <div className="items-end">
            <p className="about-title  grotesk text-[20px]  font-semibold mt-3 flex items-center mr-44 flex-row-reverse gap-5 align-right text-[#fff]  ">
              {" "}
              How Jostack Work <PiSealQuestionFill />
            </p>
          </div>

          {/* <div className="max-w-7xl mt-10 mx-auto bg-white h-1  rounded-3xl">br</div> */}
          {/* content of  about section */}
          <div className="about-details p-28 space-y-6 text-[26px] md:capitalize max-w-[1700px]">
            <p className="text-[#fff]">
              Our commitment to clients is rooted in strong, transparent
              relationships and a deep understanding of{" "}
            </p>
            <p className="text-[#fff]">
              their unique needs. We collaborate closely to bring your ideas to
              life, leveraging our expertise in branding ,{" "}
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

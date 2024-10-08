import { useTypewriter } from "react-simple-typewriter";
import img1 from "../assets/Card.0.1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Services = () => {
  const [text] = useTypewriter({
    words: ["Our Services"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  // gsap //
  useGSAP(() => {
    gsap.from(".div-1", {
      scrollTrigger: {
        trigger: ".div-1",
        start: "top 100%",
        scroller: ".smooth-scroll",
        scrub: 1,
      },
      y: -200,
    });

    gsap.from('service-title',{
     scrollTrigger:{
      trigger  : 'service-title' , 
      // start : "top 100%"  ,
      scroller : ".smooth-scroll",
      // markers : true ,
      scrub : 1
     } ,
     y : 20 ,
     opacity : 0
    })
  });

  const exploreRef = useRef(null);
  const serviceRef = useRef(null); // Reference for the service component

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const serviceRect = serviceRef.current.getBoundingClientRect();

      // Calculate the mouse position relative to the component
      const xPos = clientX - serviceRect.left;
      const yPos = clientY - serviceRect.top;

      // Ensure the ball only follows the cursor inside the component
      if (
        xPos > 0 &&
        xPos < serviceRect.width &&
        yPos > 0 &&
        yPos < serviceRect.height
      ) {
        gsap.to(exploreRef.current, {
          left: xPos,
          top: yPos,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    // Attach the event listener to the specific component
    const serviceElement = serviceRef.current;
    serviceElement.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      serviceElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="service relative mt-32" ref={serviceRef}>
      <div className="service-title   p-9 md:capitalize  text-[60px] font-bold  grotek flex items-center justify-center gap-5 ">
        Explore<span className="text-primary"> {text}</span>
      </div>
      <section className="flex  gap-1 px-1  items-center justify-between mt-10">
        <div
          className=" explore bg-[#000000e7] px-5 py-10 border border-[#fff] grotesk font-bold text-[20px] absolute rounded-full z-30"
          ref={exploreRef}
          style={{ left: 0, top: 0 }}
        >
          <p className="text-white">Explore</p>
        </div>

        <div className="card1 h-[750px] w-[610px] bg-red-400  flex items-center justify-center rounded-md">
          <div className=" div-1 px-16 py-3 bg-[#f9f8f6f2] rounded-3xl flex gap-24  border border-[#000] ">
            <span className="font-bold text-primary md:uppercase grotesk text-[20px] capitalize flex items-center  gap-1 cursor-pointer ">
              web Building <FaLongArrowAltRight />
            </span>
          </div>
        </div>
  
        <div className="card2  h-[750px] w-[610px] bg-red-400  flex items-center justify-center rounded-md">
          <div className=" div-1 px-16 py-3 bg-[#f9f8f6c0] rounded-3xl flex gap-24  border border-[#000] ">
            <span className="font-bold text-primary md:uppercase grotesk text-[20px] capitalize flex items-center  gap-1 cursor-pointer ">
              Branding <FaLongArrowAltRight />
            </span>
          </div>
        </div>

        <div className="card3 h-[750px] w-[610px] bg-red-400  flex items-center justify-center rounded-md">
          <div className=" div-1 px-16 py-3 bg-[#f9f8f6c0] rounded-3xl flex gap-24  border border-[#000] ">
            <span className="font-bold text-primary md:uppercase grotesk text-[20px] capitalize flex items-center  gap-1 cursor-pointer ">
              Maintaining <FaLongArrowAltRight />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

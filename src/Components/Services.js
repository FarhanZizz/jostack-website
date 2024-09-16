import { useTypewriter } from "react-simple-typewriter";
import img1 from "../assets/Card.0.1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

//
const Services = () => {
  const [text] = useTypewriter({
    words: ["Our", "Services"],
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
        scroller: "[data-scroll-container]",
        scrub: 1,
      },
      y: -200,
    });
  });
 // 
 const exploreRef = useRef(null);
 useEffect(() => {
    const handleMouseMove = (dets) => {
      // Use GSAP to animate the element on mousemove
      gsap.to(exploreRef.current, {
        left: dets.clientX-20,  // Use clientX and clientY for mouse position
        top: dets.clientY-20,
        duration: 0.2, 
        ease: "power2.out",     // Optional: Add smoothness with duration
      });
    };

    // Add event listener on mount
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (

   
    <div className="service "  >

      <div className="service-title  p-9 md:capitalize  text-[40px] font-bold  grotek flex items-center justify-center gap-5 mt-10 ">
        Explore<span className="text-primary"> {text}</span>
      </div>

     

      <section className="flex  p-10  items-center justify-between mt-10"  >
      
      <div className=" explore bg-[#000] py-10 px-6  fixed rounded-full"  ref={exploreRef}>
     <p className="text-white">Explore</p>
    </div>

        <div className="card1 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center">
          <div className=" div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24 ">
            <span className="font-bold text-primary text-[15px] capitalize cursor-pointer">
              contact
            </span>
            <span className="font-bold text-primary text-[15px] capitalize flex items-center  gap-1 cursor-pointer ">
              web Building <FaLongArrowAltRight />
            </span>
          </div>
        </div>

        {/*  */}

        <div className="card2 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center">
          <div className=" div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24">
            <span className="font-bold text-primary text-[15px] capitalize cursor-pointer">
              contact
            </span>
            <span className="font-bold text-primary text-[15px] capitalize flex items-center gap-1 cursor-pointer ">
              Branding <FaLongArrowAltRight />
            </span>
          </div>
        </div>

        {/*  */}

        <div className="card3 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center">
          <div className=" div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24">
            <span className="font-bold text-primary text-[15px] capitalize cursor-pointer ">
              contact
            </span>
            <span className="font-bold text-primary text-[15px] capitalize flex items-center gap-1 cursor-pointer">
              Maintaining <FaLongArrowAltRight />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

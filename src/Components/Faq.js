import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import asker from "../assets/asker.json";
import answer from "../assets/answer.json";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: asker,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: answer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  
  useGSAP(() =>{
     var tl = gsap.timeline({scrollTrigger:{
    trigger: "#FAQ",
    scroller:".smooth-scroll",
   
    start : "-10% 70%" ,
    end:"50% 50%" ,
    scrub : 2,
   
  } }) ;

  tl.to('#rounded-div-wrapper',{
    height: 0 ,
    marginTop : 0 ,
   
   
  })

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".chat-container",
      scroller: ".smooth-scroll",
      start: "top top",
      end: "+=2500",
      scrub: true,
      pin: true,
    },
  });

 
  tl2.from(".chat-start", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
    .from(".chat-end", {
      opacity: 0,
      y: 100,
      duration: 1,
    }, "+=1");

  })

  return (

    <div id="FAQ">

  
   <div id='rounded-div-wrapper' className='w-full h-[100px] bg-[#141517] relative overflow-hidden mt-[-100px]' >
    
    <div id='rounded-div' className='w-[150%] h-[750%] rounded-[50%] bg-white absolute left-[50%] -translate-x-[50%]  overflow-hidden '>
    
    </div>

    </div>

    <div className="flex justify-center items-center min-h-screen chat-container ">

      <div className="w-[60%] space-y-6">
        {/* First chat bubble */}
        <div className="chat chat-start">
          
          <div className="chat-bubble text-3xl bg-gray-500 text-white grotesk">
            But what if I have questions about your services ?
          </div>
        </div>

        {/* Second chat bubble */}
        <div className="chat chat-end">
          
          <div className="chat-bubble text-3xl  chat-bubble-primary text-white grotesk">
            Don't worry, we've got you covered {":)"}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;

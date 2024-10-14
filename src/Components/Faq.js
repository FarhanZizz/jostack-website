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
    // markers: true ,
    start : "-10% 70%" ,
    end:"50% 50%" ,
    scrub : 2,
    // pin:true 
  } }) ;

  tl.to('#rounded-div-wrapper',{
    height: 0 ,
    marginTop : 0 ,
    // duration :1 ,
    // delay : 0.5
  })

  })

  return (

    <div id="FAQ">

  
   <div id='rounded-div-wrapper' className='w-full h-[100px] bg-[#141517] relative overflow-hidden mt-[-100px]' >
    
    <div id='rounded-div' className='w-[150%] h-[750%] rounded-[50%] bg-white absolute left-[50%] -translate-x-[50%]  overflow-hidden '>
    
    </div>

    </div>

    <div className="flex justify-center items-center min-h-screen chat-container">

      <div className="w-2/3">
        {/* First chat bubble */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-[55px] rounded-full">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <div className="chat-bubble text-3xl chat-bubble-primary text-white grotesk">
            But I still have questions about your services.
          </div>
        </div>

        {/* Second chat bubble */}
        <div className="chat chat-end gap-y-10">
          <div className="chat-image avatar">
            <div className="w-[55px]">
              <Lottie options={defaultOptions2} />
            </div>
          </div>
          <div className="chat-bubble text-3xl bg-gray-500 text-white">
            Don't worry, we've got you covered!
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;

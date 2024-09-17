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

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".chat-start",
  //     { opacity: 0, y: -100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ".chat-start",
  //         scroller: ".smooth-scroll",
  //         start: "top 100%",
  //         end: "bottom 100%",
  //         scrub: true,
  //         pin: true,
  //         pinSpacing: false,
  //       },
  //     }
  //   );
  // });

  return (
    <div className="flex justify-center items-center min-h-screen chat-container">
      <div className="w-2/3">
        {/* First chat bubble */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-[55px] rounded-full">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <div className="chat-bubble text-3xl chat-bubble-primary text-white">
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
  );
};

export default Faq;

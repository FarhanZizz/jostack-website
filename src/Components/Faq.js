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

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#FAQ",
        scroller: ".smooth-scroll",

        start: "-10% 70%",
        end: "50% 50%",
        scrub: 2,
      },
    });

    tl.to("#rounded-div-wrapper", {
      height: 0,
      marginTop: 0,
    });

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

    tl2
      .from(".chat-start", {
        opacity: 0,
        y: 100,
        duration: 1,
      })
      .from(
        ".chat-end",
        {
          opacity: 0,
          y: 100,
          duration: 1,
        },
        "+=1"
      );
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-container",
        scroller: ".smooth-scroll",
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: true,
      },
    });

    tl3
      .from(".faq-1", {
        opacity: 0,
        y: 100,
        duration: 1,
      })
      .from(
        ".faq-2",
        {
          opacity: 0,
          y: 100,
          duration: 1,
        },
        "+=1"
      )
      .from(
        ".faq-3",
        {
          opacity: 0,
          y: 100,
          duration: 1,
        },
        "+=1"
      )
      .from(
        ".faq-4",
        {
          opacity: 0,
          y: 100,
          duration: 1,
        },
        "+=1"
      );
  });

  return (
    <div id="FAQ">
      <div
        id="rounded-div-wrapper"
        className="w-full h-[100px] bg-[#141517] relative overflow-hidden mt-[-100px]"
      >
        <div
          id="rounded-div"
          className="w-[150%] h-[750%] rounded-[50%] bg-white absolute left-[50%] -translate-x-[50%]  overflow-hidden "
        ></div>
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
      <div className="min-h-screen faq-container py-10">
        <div className="faq-text text-center">
          <h1 className="text-3xl text-primary">Here's Some</h1>
          <h1 className="text-9xl  leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="question-container my-20 grid grid-cols-2 gap-14 w-[90%] mx-auto">
          <div className="faq-1 collapse collapse-plus rounded-none border-b-4 border-primary ">
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              What services does Jostack offer?
            </div>
            <div className="collapse-content text-2xl px-5">
              <p>
                Jostack provides a range of business services including website
                building, management, video editing, and ad promotion. We focus
                on helping businesses establish a strong online presence through
                custom website development and digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="faq-2 collapse collapse-plus rounded-none border-b-4 border-primary ">
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              What services does Jostack offer?
            </div>
            <div className="collapse-content text-2xl px-5">
              <p>
                Jostack provides a range of business services including website
                building, management, video editing, and ad promotion. We focus
                on helping businesses establish a strong online presence through
                custom website development and digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="faq-3 collapse collapse-plus rounded-none border-b-4 border-primary ">
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              What services does Jostack offer?
            </div>
            <div className="collapse-content text-2xl px-5">
              <p>
                Jostack provides a range of business services including website
                building, management, video editing, and ad promotion. We focus
                on helping businesses establish a strong online presence through
                custom website development and digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="faq-4 collapse collapse-plus rounded-none border-b-4 border-primary ">
            <input type="checkbox" />
            <div className="collapse-title text-3xl font-medium">
              What services does Jostack offer?
            </div>
            <div className="collapse-content text-2xl px-5">
              <p>
                Jostack provides a range of business services including website
                building, management, video editing, and ad promotion. We focus
                on helping businesses establish a strong online presence through
                custom website development and digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

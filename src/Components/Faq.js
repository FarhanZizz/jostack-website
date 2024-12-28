import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".collapse input");
    faqItems.forEach((input) =>
      input.addEventListener("change", () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200); // Add delay to account for animation duration
      }),
    );

    return () => {
      // Cleanup event listeners
      faqItems.forEach((input) =>
        input.removeEventListener("change", () => ScrollTrigger.refresh()),
      );
    };
  }, []);
  const handleFaqToggle = (index) => {
    const allCheckboxes = document.querySelectorAll(".collapse input");
    allCheckboxes.forEach((checkbox, i) => {
      if (i !== index) {
        checkbox.checked = false;
      }
    });
  };
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#FAQ",
        scroller: ".smooth-scroll",
        start: "-10% 70%",
        end: "50% 50%",
        scrub: 1,
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
        end: "+=1500",
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
        "+=1",
      );

    // FAQ animation
    var faqTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-container",
        scroller: ".smooth-scroll",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    faqTimeline
      .from(".faq-1", { x: 100, opacity: 0, duration: 1 })
      .from(".faq-2", { x: 100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".faq-3", { x: 100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".faq-4", { x: 100, opacity: 0, duration: 1 }, "-=0.8");
  });

  return (
    <div id="FAQ">
      <div
        id="rounded-div-wrapper"
        className="relative mt-[-100px] h-[100px] w-full overflow-hidden bg-[#141517]"
      >
        <div
          id="rounded-div"
          className="absolute left-[50%] h-[750%] w-[150%] -translate-x-[50%] overflow-hidden rounded-[50%] bg-white"
        ></div>
      </div>

      <div className="chat-container flex min-h-screen items-center justify-center">
        <div className="w-[60%] space-y-6">
          {/* First chat bubble */}
          <div className="chat chat-start">
            <div className="grotesk chat-bubble bg-gray-500 text-4xl text-white lg:text-3xl">
              But what if I have questions about your services ?
            </div>
          </div>

          {/* Second chat bubble */}
          <div className="chat chat-end">
            <div className="grotesk chat-bubble chat-bubble-primary text-4xl text-white lg:text-3xl">
              Don't worry, we've got you covered {":)"}
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 lg:p-20">
        <div className="faq-container rounded-3xl border-2 border-black bg-primary px-5 py-10 text-white shadow-2xl lg:grid lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="faq-text">
            <h1 className="text-center text-2xl lg:text-left lg:text-4xl">
              Here's Some
            </h1>
            <h1 className="text-center text-4xl font-bold leading-tight lg:text-left lg:text-8xl">
              <span className="underline">F</span>requently <br />{" "}
              <span className="underline">A</span>sked <br />{" "}
              <span className="underline">Q</span>uestions
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-20 lg:mt-0">
            <div className="faq-1 collapse collapse-plus rounded-none border-b-4 border-white">
              <input type="checkbox" onClick={() => handleFaqToggle(0)} />
              <div className="collapse-title text-3xl font-medium">
                What services does Jostack offer?
              </div>
              <div className="collapse-content px-5 text-2xl">
                <p>
                  Jostack provides a range of business services including
                  website building, management, video editing, and ad promotion.
                  We focus on helping businesses establish a strong online
                  presence through custom website development and digital
                  marketing strategies.
                </p>
              </div>
            </div>
            <div className="faq-2 collapse collapse-plus rounded-none border-b-4 border-white">
              <input type="checkbox" onClick={() => handleFaqToggle(1)} />
              <div className="collapse-title text-3xl font-medium">
                What is the process for starting a project?
              </div>
              <div className="collapse-content px-5 text-2xl">
                <p>
                  Starting a project is simple! Contact us to discuss your
                  project goals and needs, after which we’ll provide a detailed
                  proposal, timeline, and cost estimate to get things started.
                </p>
              </div>
            </div>
            <div className="faq-3 collapse collapse-plus rounded-none border-b-4 border-white">
              <input type="checkbox" onClick={() => handleFaqToggle(2)} />
              <div className="collapse-title text-3xl font-medium">
                Can Jostack manage my website?
              </div>
              <div className="collapse-content px-5 text-2xl">
                <p>
                  Yes, Jostack offers ongoing website management services,
                  handling everything from regular updates and security checks
                  to content revisions and SEO adjustments to keep your site
                  performing optimally.
                </p>
              </div>
            </div>
            <div className="faq-4 collapse collapse-plus rounded-none border-b-4 border-white">
              <input type="checkbox" onClick={() => handleFaqToggle(3)} />
              <div className="collapse-title text-3xl font-medium">
                How long does a website project take?
              </div>
              <div className="collapse-content px-5 text-2xl">
                <p>
                  Project timelines vary based on requirements, but our typical
                  website development projects range from two to four weeks.
                  We'll provide a detailed timeline once we understand your
                  specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

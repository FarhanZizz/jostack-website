import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Newsletter = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Newsletter",
        scroller: ".smooth-scroll",
        start: "-10% 70%",
        end: "50% 50%",
        // markers:true
      },
    });

    tl.from(
      ".Text",
      {
        x: -100,
        opacity: 0,
        delay: 0.5,
        duration: 1,
      },
      "a",
    );
    tl.from(
      ".input",
      {
        x: 100,
        opacity: 0,
        delay: 0.5,
        duration: 1,
      },
      "a",
    );
  });

  return (
    <div className="Newsletter mx-auto mb-10 mt-10 max-w-[1700px] rounded-xl bg-black p-12">
      <section className="content items-center justify-between text-white lg:flex">
        <h1 className="grotesk Text text-2xl font-semibold uppercase lg:text-[3vw]">
          Want to get in touch ?
        </h1>
        <div className="input mt-12 flex items-center gap-3 lg:mt-0 lg:p-10">
          <input
            placeholder="email@gmail.com"
            required
            className="grotesk w-96 rounded-2xl border-2 border-white bg-[#f1f1f1fb] p-3 px-10 text-[20px] text-[#000]"
          ></input>
          <button className="grotesk rounded-xl bg-[#8768b77d] px-6 py-3 text-[1vw] font-semibold uppercase text-white delay-100 duration-100 hover:bg-primary hover:px-10 hover:text-white">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;

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
        // markers: true,
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
    <div className="mt-16 px-5 lg:px-20">
      <div className="Newsletter rounded-xl bg-black p-5 lg:p-10">
        <section className="content items-center justify-between text-white lg:flex">
          <h1 className="grotesk Text text-2xl font-semibold uppercase lg:text-[3vw]">
            Want to get in touch ?
          </h1>
          <div className="input mt-8 flex items-center p-0 lg:mt-0 lg:p-10">
            <input
              placeholder="email@gmail.com"
              required
              className="grotesk w-full rounded-xl border-2 border-white bg-[#f1f1f1fb] pl-2 text-[20px] text-[#000]"
            ></input>
            <button className="grotesk rounded bg-[#8768b77d] px-6 py-3 text-base font-semibold uppercase text-white delay-100 duration-100 hover:bg-primary hover:px-10 hover:text-white lg:rounded-xl">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;

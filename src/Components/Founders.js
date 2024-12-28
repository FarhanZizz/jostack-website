import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import ratib from "../assets/ratib.jpg";
import farhan from "../assets/farhan.JPG";

const Founders = () => {
  // This is gsap !!! bohut joss { kintu stuck hoilee duck niyee ber hoite hobe }.

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        scroller: ".smooth-scroll",
        // markers: true ,
        start: "top top",
        end: "+=150%",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(
      ".top",
      {
        top: "-50%",
      },
      "a",
    )
      .to(
        ".bottom",
        {
          bottom: "-50%",
        },
        "a",
      )
      .to(
        ".top-h",
        {
          top: "80%",
        },
        "a",
      )
      .to(
        ".bottom-h",
        {
          bottom: "60%",
        },
        "a",
      )

      .to(
        ".content",
        {
          marginTop: "0",
        },
        "a",
      );
  });

  return (
    <div className="main relative z-0 my-20 overflow-hidden bg-white">
      {/* top */}
      <div className="top absolute top-[0%] h-[50%] w-full overflow-hidden bg-[#141517]">
        <h1 className="top-h grotesk relative top-[88.22%] flex justify-center text-[70px] font-bold text-white lg:top-[17rem] lg:text-[250px]">
          FOUNDERS
        </h1>
      </div>

      {/* center */}
      <div className="center h-[100vh] w-full overflow-hidden bg-white">
        {/* content  */}
        <div className="content mt-[50%]">
          {/* ratib */}

          <div className="flex items-center justify-center gap-20">
            {/* image of Founder */}

            <div>
              <div className="rounded-full border-[8px] border-primary p-3">
                <div className="h-56 w-56 rounded-full bg-slate-900">
                  <img
                    alt="Ratib"
                    src={ratib}
                    className="h-56 w-56 rounded-full bg-slate-900"
                  ></img>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-5 text-[20px]">
                <p>Ratib</p>
                <BiLogoGmail />
                <FaLinkedin />
              </div>
            </div>

            {/* contents of Founder */}

            <div className="f-details space-y-3 capitalize">
              {/* <p> Hi  || I am ratib   </p> */}
              <p>
                {" "}
                As the founder of Jostack Company, Ratib brings a wealth of
                experience in web development and{" "}
              </p>
              <p>
                {" "}
                a passion for creating innovative digital solutions. With a
                strong technical background, he has{" "}
              </p>
              <p>
                {" "}
                dedicated himself to building platforms that empower businesses
                and enhance user experiences.{" "}
              </p>
              <p className="font-bold">
                {" "}
                “Crafting the future, one line of code at a time”{" "}
              </p>

              <div className="h-[0.5px] w-full rounded-xl bg-slate-950"></div>
              <div>
                <p>CEO & Founder</p>
              </div>
            </div>
          </div>

          {/* mukto */}

          <div className="mt-20 flex items-center justify-center gap-20">
            {/* contents of Founder */}

            <div className="mx-w-xl space-y-4 capitalize">
              <p>
                with early experience in the industry, working alongside
                establish companies , farhan brings a wealth{" "}
              </p>
              <p>
                of knowledge and expertise to his role as COO . His background
                enables him to oversee operations with
              </p>
              <p>
                {" "}
                precision and insights . farhan's attention to detail guarantees
                that jostack delivers precise.
              </p>
              <p className="font-bold">
                "Redefining possibilities through constant innovation and
                precision"
              </p>

              <div className="h-[0.5px] w-full rounded-xl bg-slate-950"></div>
              <div className="items-end">
                <p>COO & Founder</p>
              </div>
            </div>

            {/* image of Founder */}
            <div>
              <div className="rounded-full border-[8px] border-primary p-3">
                <div className="">
                  <img
                    alt="Farhan"
                    src={farhan}
                    className="h-56 w-56 rounded-full bg-slate-900"
                  ></img>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-5 text-[20px]">
                <p>Farhan</p>
                <BiLogoGmail />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bottom absolute bottom-[0%] h-[50vh] w-full overflow-hidden bg-[#141517]">
        <h1 className="bottom-h grotesk relative bottom-[5rem] flex justify-center text-[70px] font-bold text-white lg:bottom-[13rem] lg:text-[250px]">
          FOUNDERS
        </h1>
      </div>
    </div>
  );
};

export default Founders;

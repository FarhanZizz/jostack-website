import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ShuffleText from "react-shuffle-text";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const formRef = useRef();
  const location = useLocation();
  const [preSelectedService, setPreSelectedService] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get("service");
    if (service) {
      setPreSelectedService(service);
    }
  }, [location]);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".form",
        scroller: ".smooth-scroll",
        start: "-10% 70%",
        end: "50% 50%",
      },
    });
    tl.from(".first-input", { x: -100, opacity: 0, duration: 1 })
      .from(".second-input", { x: -100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".third-input", { x: -100, opacity: 0, duration: 1 }, "-=0.8")
      .from(".fourth-input", { x: -100, opacity: 0, duration: 1 }, "-=0.8");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jostack",
        "template_jostack",
        formRef.current,
        "e1PhT7BYMYbukEgf9",
      )
      .then(
        (result) => {
          toast.success("Your message has been sent!", {
            style: {
              background: "#281046",
              color: "#fff",
              borderBottom: "1px solid #fff",
              borderRadius: "0",
            },
          });
        },
        (error) => {
          toast.error("An error occurred, Please try again.", {
            style: {
              background: "#281046",
              text: "#fff",
              borderBottom: "1px solid #fff",
              borderRadius: "0",
            },
          });
        },
      );

    e.target.reset();
  };
  console.log(preSelectedService);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="-mt-1 grid-cols-3 justify-between bg-[#141517] p-5 py-28 text-white lg:grid lg:px-20 lg:py-32"
    >
      <section className="text-contact col-span-2">
        <h1 className="text-3xl font-semibold capitalize lg:text-6xl">
          Fill out the form!
        </h1>
        <p className="mt-5 text-lg capitalize lg:text-2xl">
          Have questions or need assistance? please take a moment to fill out a
          short form. This will give you{" "}
          <span className="rounded bg-primary px-2 font-semibold">
            direct access to all our services
          </span>{" "}
          and make it easier to connect with our team
        </p>
        <div className="form mt-20 items-center justify-between lg:flex">
          <section className="inputs space-y-20">
            {/* First Input */}
            <div className="first-input items-center gap-5 lg:flex">
              <h1 className="grotesk text-lg font-semibold lg:text-2xl">
                What should we call you?
              </h1>
              <input
                name="name"
                required
                className="h-[50px] w-full rounded-none border-b-[1px] border-b-white bg-transparent text-white outline-none lg:w-[350px] lg:text-center lg:text-xl"
                placeholder="Enter your Name"
              ></input>
            </div>

            {/* Second Input */}
            <div className="second-input items-center gap-5 lg:flex">
              <h1 className="grotesk text-lg font-semibold lg:text-2xl">
                Cool! Whats Your mail address?
              </h1>
              <input
                name="email"
                type="email"
                className="h-[50px] w-full rounded-none border-b-[1px] border-b-white bg-transparent text-white outline-none lg:w-[350px] lg:text-center lg:text-xl"
                placeholder="email@gmail.com"
                required
              ></input>
            </div>

            {/* Third Input */}
            <div className="third-input items-center gap-5 lg:flex">
              <h1 className="grotesk text-lg font-semibold lg:text-2xl">
                Which type of project you have?
              </h1>
              <select
                className="h-[50px] w-full rounded-none border-0 border-b-[1px] border-b-white bg-[#141517] text-white outline-none hover:bg-none lg:w-[350px] lg:text-center lg:text-xl"
                name="projectType"
                placeholder="E-commerce"
                required
              >
                <option value="Ecommerce Website">E-commerce Website</option>
                <option value="Portfolio Website">Portfolio Website</option>
                <option value="Blog Website">Blog Website</option>
                <option value="Educational Website">Educational Website</option>
                <option value="Business Website">Business Website</option>
                <option value="Event Website">Event Website</option>
                <option value="News And Magazine Website">
                  News and Magazine Website
                </option>
                <option value="Personal Website">Personal Website</option>
                <option value="Travel And Booking Website">
                  Travel and Booking Website
                </option>
                <option value="Others (Custom Website)">
                  Others (Custom Website)
                </option>
              </select>
            </div>
            {/* Fourth Input */}
            <div className="fourth-input items-center gap-5 lg:flex">
              <h1 className="grotesk text-lg font-semibold lg:text-2xl">
                Which Service you want to take?
              </h1>
              <select
                onChange={(e) => setPreSelectedService(e.target.value)}
                value={preSelectedService || ""}
                className="h-[50px] w-full rounded-none border-0 border-b-[1px] border-b-white bg-[#141517] text-white outline-none hover:bg-none lg:w-[350px] lg:text-center lg:text-xl"
                name="service"
                placeholder="Website Building"
                required
              >
                <option value="Website Building">Website Building</option>
                <option value="Website Branding">Website Branding</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="All Of The Above">All Of The Above</option>
              </select>
            </div>
          </section>
        </div>
      </section>
      <div className="grid grid-cols-1 items-center justify-center gap-5 text-center">
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={80} content="J" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={100} content="O" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={120} content="S" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={140} content="T" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={160} content="A" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={180} content="C" />
        </h1>
        <h1 className="grotesk hidden text-7xl lg:block">
          <ShuffleText charFrameTime={200} content="K" />
        </h1>

        <button
          type="submit"
          className="btn btn-outline mx-auto mt-20 w-full border-white text-white hover:border-primary hover:bg-primary lg:mt-5 lg:w-1/2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;

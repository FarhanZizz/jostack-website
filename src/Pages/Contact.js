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
        "e1PhT7BYMYbukEgf9"
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
            },
          });
        }
      );

    e.target.reset();
  };
  console.log(preSelectedService);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-[#141517]  lg:py-32 lg:px-20 p-5 py-16 text-white lg:grid grid-cols-3 justify-between -mt-1"
    >
      <section className="text-contact col-span-2">
        <h1 className=" text-3xl lg:text-6xl  font-semibold capitalize">
          Fill out the form!
        </h1>
        <p className="mt-5 lg:text-2xl text-lg capitalize">
          Have questions or need assistance? please take a moment to fill out a
          short form. This will give you{" "}
          <span className="bg-primary  rounded font-semibold px-2">
            direct access to all our services
          </span>{" "}
          and make it easier to connect with our team
        </p>
        <div className=" mt-20 lg:flex justify-between items-center form">
          <section className="space-y-20 inputs">
            {/* First Input */}
            <div className="first-input lg:flex items-center  gap-5">
              <h1 className="lg:text-2xl text-lg grotesk font-semibold">
                What should we call you?
              </h1>
              <input
                name="name"
                required
                className="
             outline-none 
              
             w-full
             lg:w-[350px]
             h-[50px]
             lg:text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
             rounded-none
            "
                placeholder="Enter your Name"
              ></input>
            </div>

            {/* Second Input */}
            <div className="second-input lg:flex items-center gap-5">
              <h1 className="lg:text-[27px] text-[19px] grotesk font-semibold">
                Cool! Whats Your mail address?
              </h1>
              <input
                name="email"
                type="email"
                className="
             outline-none 
              
             w-full
             lg:w-[350px]
             h-[50px]
             lg:text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
             rounded-none
            "
                placeholder="email@gmail.com"
                required
              ></input>
            </div>

            {/* Third Input */}
            <div className="third-input lg:flex items-center gap-5">
              <h1 className="lg:text-[27px] text-[19px] grotesk font-semibold">
                Which type of project you have?
              </h1>
              <input
                className="
             outline-none 
             
             w-full
             lg:w-[350px] 
             h-[50px]
             text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
             rounded-none
            "
                name="projectType"
                placeholder="E-commerce"
                required
              ></input>
            </div>
            {/* Fourth Input */}
            <div className="fourth-input lg:flex items-center gap-5">
              <h1 className="lg:text-[27px] text-[19px] grotesk font-semibold">
                Which Service you want to take?
              </h1>
              <select
                onChange={(e) => setPreSelectedService(e.target.value)}
                value={preSelectedService || ""}
                className="
                hover:bg-none
             outline-none 
             w-full
             lg:w-[350px]
             h-[50px]
             lg:text-[20px] 
             text-white
            border-0
             bg-[#141517] 
             border-b-white 
             border-b-[1px]
             lg:text-center
             rounded-none
            "
                name="service"
                placeholder="Website Building"
                required
              >
                <option value="Website Building">Website Building</option>
                <option value="Website Branding">Website Branding</option>
                <option value="Website Maintenance">Website Maintenance</option>
              </select>
            </div>
          </section>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-5 items-center justify-center text-center">
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={80} content="J" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={100} content="O" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={120} content="S" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={140} content="T" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={160} content="A" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={180} content="C" />
        </h1>
        <h1 className="text-7xl grotesk hidden lg:block">
          <ShuffleText charFrameTime={200} content="K" />
        </h1>

        <button
          type="submit"
          className=" btn btn-outline border-white text-white hover:border-primary hover:bg-primary mt-20 lg:mt-5 w-full lg:w-1/2 mx-auto "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;

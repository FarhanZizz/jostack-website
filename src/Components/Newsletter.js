import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const toastSettings = {
    success: {
      style: {
        background: "#281046",
        color: "#fff",
        borderBottom: "1px solid #fff",
        borderRadius: "0",
      },
    },
    error: {
      style: {
        background: "#281046",
        color: "#fff",
        borderBottom: "1px solid #fff",
        borderRadius: "0",
      },
    },
  };

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Newsletter",

        start: "-10% 70%",
        end: "50% 50%",
      },
    });

    tl.from(".Text", { x: -100, opacity: 0, delay: 0.5, duration: 1 }, "a");
    tl.from(".input", { x: 100, opacity: 0, delay: 0.5, duration: 1 }, "a");
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xlddavld", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("You are subscribed!", toastSettings.success);
        e.target.reset();
      } else {
        toast.error("Subscription failed. Try again.", toastSettings.error);
      }
    } catch (error) {
      toast.error("An error occurred. Try again later.", toastSettings.error);
    }
  };

  return (
    <div className="mt-16 px-5 lg:px-20">
      <div className="Newsletter rounded-xl bg-black p-5 lg:p-10">
        <section className="content items-center justify-between text-white lg:flex">
          <h1 className="grotesk Text text-2xl font-semibold uppercase lg:text-[3vw]">
            Want to get in touch?
          </h1>
          <form
            onSubmit={handleSubmit}
            className="input mt-8 flex items-center p-0 lg:mt-0 lg:p-10"
          >
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              required
              className="grotesk w-full rounded-xl border-2 border-white bg-[#f1f1f1fb] pl-2 text-[20px] text-[#000]"
            />
            <button
              type="submit"
              className="grotesk rounded bg-[#8768b77d] px-6 py-3 text-base font-semibold uppercase text-white delay-100 duration-100 hover:bg-primary hover:px-10 hover:text-white lg:rounded-xl"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;

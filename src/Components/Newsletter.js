import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className=" mt-40">
      <div className="bg-[#957dad] ">
        <h1 className="text-7xl text-black font-bold relative px-12  z-20  grotesk">
          Let’s work together!
        </h1>
        <svg
          viewBox="0 0 1356 200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="relative -top-[75px] w-4/6"
        >
          <path
            fill="rgba(204, 204, 204, 1)"
            d="M 0 200 C 482.29999999999995 200 206.70000000000005 110 689 110 L 689 110 L 689 0 L 0 0 Z"
            strokeWidth="0"
          />
          <path
            fill="rgba(204, 204, 204, 1)"
            d="M 688 110 C 1155.6 110 888.4000000000001 0 1356 0 L 1356 0 L 1356 0 L 688 0 Z"
            strokeWidth="0"
          />
        </svg>

        <div className="grid grid-cols-2 pb-32 ">
          <div>
            {/* <p className="text-white text-3xl text-center">
              Find us on Social Media{" "}
            </p>
            <div className="grid gap-5 justify-center items-center ">
              <button className="text-xl btn btn-outline hover:bg-[#24A1DE] border-[#24A1DE] text-[#24A1DE]">
                <FaTelegram />
                Telegram
              </button>
              <button className="text-xl btn btn-outline hover:bg-[#25d366] border-[#25d366] text-[#25d366]">
                <FaWhatsapp />
                Whatsapp
              </button>
              <button className="text-xl btn btn-outline hover:bg-[#0077B5] border-[#0077B5] text-[#0077B5]">
                <FaLinkedinIn />
                LinkedIn
              </button>
            </div> */}
          </div>
          <div>
            <p className="text-[#000] text-3xl">Want to stay in the loop?</p>
            <h1 className="text-5xl font-bold text-black mt-5 leading-relaxed">
              Drop your email to get latest updates from Jostack
            </h1>
            <div className="flex items-center mt-8">
              <label className="input input-bordered flex items-center gap-2 w-3/5 ">
                <input type="text" placeholder="example@mail.com" />
              </label>
              <button className="btn btn-primary hover:border-white border-white relative -left-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

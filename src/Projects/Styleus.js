import React from "react";
import img from "../assets/Styleus.png";

const Styleus = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-2">
      <div className="order-2 space-y-7 lg:order-1">
        <h1 className="text-3xl font-medium lg:text-5xl">E-Commerce Website</h1>
        <p className="text-lg leading-relaxed lg:text-xl">
          Styleus is a modern e-commerce platform offering a wide range of
          stylish and affordable clothing for men, women, and kids. Styleus
          delivers an exceptional shopping experience through an intuitive
          interface, personalized recommendations, and hassle-free checkout.
        </p>
        <a
          target="_blank"
          href="https://styleus1.netlify.app/"
          className="btn btn-outline w-full border-white text-xl text-white hover:border-primary hover:bg-primary lg:text-2xl"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>
      <div className="order-1 lg:order-2">
        <div class="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 md:h-[294px] md:max-w-[512px] dark:border-gray-800">
          <div class="h-[156px] overflow-hidden rounded-lg bg-white md:h-[278px] dark:bg-gray-800">
            <img
              src={img}
              class="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
              alt=""
            />
          </div>
        </div>
        <div class="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 md:h-[21px] md:max-w-[597px] dark:bg-gray-700">
          <div class="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Styleus;

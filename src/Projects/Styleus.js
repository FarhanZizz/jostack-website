import React, { useEffect, useRef } from "react";
import video from "../assets/styleus.mp4";

const Styleus = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && videoRef.current) {
      videoRef.current.play();
    }
  }, []);
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
        <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 md:h-[294px] md:max-w-[512px] dark:border-gray-800">
          <div className="h-[156px] overflow-hidden rounded-lg bg-white md:h-[278px] dark:bg-gray-800">
            <video
              className="h-[156px] w-full rounded-lg md:h-[278px] lg:transition-transform lg:duration-500 lg:hover:scale-125"
              src={video}
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 md:h-[21px] md:max-w-[597px] dark:bg-gray-700">
          <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Styleus;

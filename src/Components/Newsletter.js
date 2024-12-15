import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Newsletter = () => {



  useGSAP(() => {
    let tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".Newsletter",
          scroller: ".smooth-scroll",
          start: "-10% 70%",
          end: "50% 50%",
          // markers:true 
        }
      }
    );

    tl.from(".Text", {
      x: -100,
      opacity: 0,
      delay: 0.5,
      duration: 1
    }, 'a')
    tl.from(".input", {
      x: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1
    }, 'a')
  })



  return (
    <div className='bg-black Newsletter p-12 max-w-[1700px] mx-auto rounded-xl mt-10 mb-10'>
      <section className='content text-white lg:flex justify-between items-center'>
        <h1 className='uppercase lg:text-[3vw] text-2xl font-semibold grotesk Text'>Want to get in touch ?</h1>
        <div className='flex gap-3 items-center lg:mt-0 mt-12 lg:p-10 input'>
          <input placeholder='email@gmail.com' required className='bg-[#f1f1f1fb] w-96 p-3 text-[#000] grotesk rounded-2xl text-[20px] px-10 border-2 border-white'></input>
          <button className='bg-[#8768b77d] px-6 py-3 rounded-xl hover:bg-primary hover:text-white hover:px-10 delay-100 duration-100 text-[1vw] grotesk font-semibold uppercase  text-white'>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
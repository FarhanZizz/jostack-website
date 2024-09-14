import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaHandshake } from "react-icons/fa6";
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';


const Services = () => {

 const scrollRef = useRef(null);

 useEffect(() => {
   // Initialize Locomotive Scroll
   const scroll = new LocomotiveScroll ({
     el: scrollRef.current,
     smooth: true,
   });
   return () => {
    scroll.destroy(); // Clean up on component unmount
  };
}, []);


 return (
  <div ref={scrollRef} data-scroll-container >
  <div  className='p-9 md:capitalize mt-20 text-[50px] font-bold tracking-wider grotek flex items-center gap-5'>our services <FaHandshake /></div>
  <section className='flex    p-10  items-center justify-between'>
   <div className='card1 h-[650px] w-[510px] bg-red-400  '

    data-scroll 
    data-scroll-speed
   
   >

   </div>

   <div className='card2 h-[650px] w-[510px] bg-red-400 rounded-xl'>

   </div>
   <div className='card3 h-[650px] w-[510px] bg-red-400 rounded-xl'>

   </div>
  </section>
  </div>
 );
};

export default Services;
import { useGSAP } from '@gsap/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from 'gsap';
import React from 'react';

const Hero = () => {

useGSAP(() =>{
  
  gsap.from('.hero-title p ',{
   y : 50 ,
   opacity: 0 ,
   duration : 2 ,
   delay : 0.5 ,
   stagger : 0.3 
  }) ;
  gsap.from('.hero-details h1 ',{
   y : 50 ,
   opacity: 0 ,
   duration : 2 ,
   delay : 0.7 ,
   stagger : 0.3 
  }) ;
  gsap.from('.btn-hero ',{
   x:-10 ,
   opacity : 0 ,
   duration : 2 ,
   delay : 3
  }) ;


})

 return (
  <div className=' hero-section bg-slate-400  p-11'>

   <div className='text-container max-w-[1400px] mx-auto grotesk'>
     <div className='hero-title space-y-6 mt-10'>
     <p className='text-7xl text-[#ffff] md:uppercase font-bold'>Transforming ideas </p>
     <p className='text-7xl text-[#ffff] md:uppercase font-bold  '>  into  digital</p>
     <p className='text-7xl text-[#ffff] md:uppercase font-bold '>reality  </p>
     </div>

     <div className='hero-details max-w-2xl mt-16  text-[18px] space-y-1 '>
      <h1> At Jostack, we transform your ideas into digital reality with expert website </h1>
      <h1> creation, management and branding. Explore our wide range of IT services </h1>
       <h1>designed to elevate your business in the digital world.</h1>
      
     </div>

     <button className='btn-hero rounded-3xl flex gap-1 items-center btn-ghost mt-16 bg-primary text-[#FFFF] p-4 '>contact us <FaLongArrowAltRight /> </button>
   </div>

   {/* <div>
    <img src='/public/banner_img.png'></img>
   </div> */}
   
  </div>
 );
};

export default Hero;
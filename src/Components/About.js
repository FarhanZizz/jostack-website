import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {

// using GSAP //

gsap.registerPlugin(ScrollTrigger);
useGSAP(()=>{
  gsap.to('.about-title',{
    scrollTrigger: {
      trigger: ".about-title",
      // toggleActions:"restart pause reverse none "
      scroller: "body",
      markers: true ,
      start:"top 90%",
      scrub: 1
    },
    // scale:0,
    fontSize : 70,
    duration:2,
    delay:1
    // duration: 0.7 ,
    
  })
})



 return (
  <>
 <section className='Container-about py-24  bg-[#000]'>
 
 {/* title of about section */}
 <div className=' mt-24 '>

<div className='items-end'>
<p className='about-title ml-20 grotesk text-[60px]  font-semibold mt-10 flex items-center gap-5 align-right text-[#fff] '>How Jostack Work  <FaCircleArrowRight /></p>
</div>
{/* content of  about section */}
  <p className='max-w-5xl  text-[30px] font-light  text-[#fff] macondo'>pe and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

 
 </div>

 
  </section>
  </>
 );
};

export default About;
import{useTypewriter} from 'react-simple-typewriter'
import img1 from "../assets/Card.0.1.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";

// 
const Services = () => {
 const [text] =useTypewriter({
 words :  ['Our', 'Services'] ,
 loop: {},
 typeSpeed : 100 ,
 deleteSpeed : 50  ,
 delaySpeed : 1000 ,
 })

 // gsap //

 useGSAP(() =>{
  
  gsap.from ('.div-1',{
   scrollTrigger:{
    trigger : '.div-1' ,
    markers : true ,
    start : "top 100%" ,
    scrub : 1 
   } ,
   y: -200  ,
  })
 })



 return (
  <div className='mt-16'>
   <div className='service-title  p-9 md:capitalize  text-[40px] font-bold  grotek flex items-center justify-center gap-5 mt-10 '> 
   Explore<span className="text-primary"> {text}</span>
     </div>
  
  <section className='flex  p-10  items-center justify-between mt-10'>

   <div  className='card1 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center' >   
  <div className=' div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24 '>
  <span className='font-bold text-primary text-[15px] capitalize cursor-pointer'>contact</span>
  <span className='font-bold text-primary text-[15px] capitalize flex items-center  gap-1 cursor-pointer '>web Building <FaLongArrowAltRight /></span>
  </div>
   </div>

   {/*  */}

   <div  className='card2 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center' >   
  <div className=' div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24'>
  <span className='font-bold text-primary text-[15px] capitalize cursor-pointer'>contact</span>
  <span className='font-bold text-primary text-[15px] capitalize flex items-center gap-1 cursor-pointer '>Branding <FaLongArrowAltRight /></span>
  </div>
   </div>

   {/*  */}

   <div  className='card3 h-[650px] w-[510px] bg-red-400 rounded-xl flex items-center justify-center' >   
  <div className=' div-1 px-10 py-3 bg-[#fcebd6] rounded-3xl flex gap-24'>
  <span className='font-bold text-primary text-[15px] capitalize cursor-pointer '>contact</span>
  <span className='font-bold text-primary text-[15px] capitalize flex items-center gap-1 cursor-pointer'>Maintaining <FaLongArrowAltRight /></span>
  </div>
   </div>




  </section>
  </div>
 );
};

export default Services;
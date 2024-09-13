import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Services = () => {


// useGSAP(() => {

//  gsap.from('card',{
//   display:"flex-row"
//  })
// })


 return (
  <div>
  <div  className='p-9 md:uppercase text-[50px] font-bold tracking-wider grotesk'>our services</div>
  <section className='flex    p-10  items-center justify-between'>
   <div className='card1 h-[650px] w-[510px] bg-red-400 rounded-xl  '>

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
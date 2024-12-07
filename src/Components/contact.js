import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Contact = () => {


 useGSAP(() => {
  var tl = gsap.timeline({
   scrollTrigger: {
    trigger: ".form",
    scroller: ".smooth-scroll",
    start: "-10% 70%",
    end: "50% 50%",
   }
  });
  tl
   .from(".first-input", { x: - 100, opacity: 0, duration: 1 })
   .from(".second-input", { x: -  100, opacity: 0, duration: 1 }, "-=0.8")
   .from(".third-input", { x: - 100, opacity: 0, duration: 1 }, "-=0.8")
   .from(".fourth-input", { x: -  100, opacity: 0, duration: 1 }, "-=0.8");
 })

 return (

  <div className='bg-[#141517] lg:p-20 lg:py-28 p-9 text-white'>
   <section className='text-contact   '>
    <h1 className='lg:text-[3vw] text-[6vw] text-white font-semibold capitalize'> Fill out the form !</h1>
    <p className='text-white max-w-4xl  lg:text-[25px] text-[18px] capitalize mt-3 '>
     We hope you're doing well! To make sure we can serve you as quickly and efficiently as possible, we invite you to
     fill out a quick form. By doing so,<span className='bg-white text-black rounded font-semibold px-3'> you’ll have
      direct access to all of our services </span>and be able to easily get in touch with our team.
    </p>
   </section>



   <form className='mt-24  lg:flex justify-between items-center form' >
    <section className='space-y-20 inputs' >

     {/* First Input */}
     <div className='first-input lg:flex items-center gap-7 '>
      <h1 className='lg:text-[27px] text-[19px] grotesk font-semibold'>What should we call you ? </h1>
      <input
       className='
             outline-none 
             lg:w-[400px] 
             w-[300px]
             h-[50px]
             lg:text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
            '
       placeholder='Enter your Name'
       required
      ></input>
     </div>

     {/* Second Input */}
     <div className='second-input lg:flex items-center gap-7'>
      <h1 className='lg:text-[27px] text-[19px] grotesk font-semibold'>Cool! Whats Your mail address? </h1>
      <input
       className='
             outline-none 
             lg:w-[400px] 
             w-[300px]
             h-[50px]
             lg:text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
            '
       placeholder='email@gmail.com'
       required
      ></input>
     </div>

     {/* Third Input */}
     <div className='third-input lg:flex items-center gap-7'>
      <h1 className='lg:text-[27px] text-[19px] grotesk font-semibold'>Which type of project you have? </h1>
      <input
       className='
             outline-none 
             lg:w-[400px]
             w-[300px] 
             h-[50px]
             text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
            '
       placeholder='Website Building'
       required
      ></input>
     </div>
     {/* Fourth Input */}
     <div className='fourth-input lg:flex items-center gap-7'>
      <h1 className='lg:text-[27px] text-[19px] grotesk font-semibold'>Which type of Service you want to take ? </h1>
      <input
       className='
             outline-none 
             lg:w-[400px] 
             w-[300px]
             h-[50px]
             lg:text-[20px] 
             text-white
             bg-transparent 
             border-b-white 
             border-b-[1px]
             lg:text-center
            '
       placeholder='E-commerce'
       required
      ></input>
     </div>
    </section>

    <div className='button lg:mt-0 mt-12 lg:pr-[10%]'>
     <button className='w-full bg-white text-black hover:bg-[#fdfdfdac] font-bold py-4 px-20 rounded-xl  '>
      Submit
     </button>
    </div>
   </form>
  </div>
 );
};

export default Contact;
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import ratib from "../assets/ratib.jpg"
import farhan from "../assets/farhan.JPG"

const Founders = () => {

// This is gsap !!! bohut joss { kintu stuck hoilee duck niyee ber hoite hobe }.

useGSAP(() => {
  const tl = gsap.timeline({scrollTrigger:{
    trigger: ".main",
    scroller:".smooth-scroll",
    // markers: true ,
    start : "top top" ,
    end:"+=150%" ,
    scrub : 2,
    pin:true 
  } }) ;
 tl
 .to(".top",{
  top:"-50%",
 },'a') 
 .to(".bottom",{
  bottom:"-50%",
 },'a')
 .to(".top-h",{
  top:"80%"
 },'a')
 .to(".bottom-h",{
  bottom:"60%"
 },'a')

 .to(".content",{
  marginTop: "0"
 },'a')
 
})


  return (
    <div className='main   relative bg-white overflow-hidden z-0 my-20'> 
       
  

  {/* top */}
  <div className='top bg-[#141517]  h-[50%] w-full absolute top-[0%] overflow-hidden ' >
  <h1 className='top-h flex justify-center relative top-[11rem] text-[250px] grotesk font-bold text-white'>FOUNDERS</h1>
  </div>

{/* center */}
<div className='center bg-white w-full h-[100vh] overflow-hidden   '>

{/* content  */}
<div className='content mt-[50%]'>

  {/* ratib */}

<div className=' flex gap-20 items-center justify-center '>

{/* image of Founder */}

<div>
<div className='  border-primary border-[8px] p-3 rounded-full '>
<div className='h-56 w-56 bg-slate-900 rounded-full'>
 <img src={ratib} className='h-56 w-56 bg-slate-900 rounded-full'></img>
 </div>
</div>


<div className=' flex gap-5 justify-center items-center mt-6  text-[20px]'>
<p>Ratib</p>
<BiLogoGmail />
<FaLinkedin />
</div>
</div>

{/* contents of Founder */}

<div className=' f-details  space-y-3 capitalize '>
    {/* <p> Hi  || I am ratib   </p> */}
    <p> As the founder of Jostack Company, Ratib brings a wealth of experience in web development and </p>
    <p> a passion for creating innovative digital solutions. With a strong technical background, he has </p>
    <p> dedicated himself to building platforms that empower businesses and enhance user experiences. </p>
    <p className='font-bold'> “Crafting the future, one line of code at a time” </p>

  <div className=' h-[0.5px] w-full bg-slate-950 rounded-xl'></div>
  <div>
    <p>CEO & Founder</p>
  </div>
    
</div>



</div>

{/* mukto */}

<div className=' flex gap-20 mt-20  items-center justify-center'>

{/* contents of Founder */}


<div className='space-y-4 capitalize mx-w-xl '>
    <p>with early experience in the industry, working alongside establish companies , farhan brings a wealth   </p>
    <p>of  knowledge and expertise to his role as COO . His background enables him to oversee  operations with</p>
    <p> precision and insights . farhan's attention to detail guarantees that jostack delivers precise.</p>
    <p className='font-bold' >"Redefining possibilities through constant innovation and precision"</p>

  <div className='h-[0.5px] w-full bg-slate-950 rounded-xl'></div>
  <div className='items-end' >
    <p>COO & Founder</p>
  </div>
    
</div>


 {/* image of Founder */}
 <div>

<div className='  border-primary border-[8px] p-3 rounded-full '>
<div className=''>
  <img src={farhan} className='h-56 w-56 bg-slate-900 rounded-full'></img>
 </div>
 
</div>

<div className=' flex gap-5 justify-center items-center mt-6 text-[20px] '>
<p>Farhan</p>
<BiLogoGmail />
<FaLinkedin />
</div>

</div>
</div>

</div>


</div>

{/* bottom */} 
<div className='bottom bg-[#141517] w-full h-[50vh] absolute bottom-[0%] overflow-hidden'>
 <h1 className='bottom-h flex justify-center relative bottom-[13rem] text-[250px] grotesk font-bold text-white'>FOUNDERS</h1>
</div>



    </div>
  );
};

export default Founders;
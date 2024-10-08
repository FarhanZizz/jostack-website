import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BsFillPatchQuestionFill } from "react-icons/bs";
// import { SplitText } from 'gsap/all';
import { FaChevronDown } from "react-icons/fa";

const About = () => {

  // useEffect(() => {
  // let  myText = new SplitText(".about-title");
  // console.log(myText)
  // }, []);

useGSAP(()=>{

 const tl = gsap.timeline({scrollTrigger:{
  trigger: ".about-section",
  scroller:".smooth-scroll",
  markers: true ,
  start : "50% 50%" ,
  end:"120% 50%" ,
  scrub : 2,
  pin:true 
} }) ;


tl.to(".a-one",{
  opacity : "1",
  marginTop:"-25%",
  duration : 3 ,
  delay : 2
},'a')

.to(".a-one",{
  opacity: 0 ,
  marginTop : "-40%"
}) 

.to(".a-two",{
  opacity : "1",
  marginTop:"-25%",
  duration : 3 ,
  delay : 2
}) 

.to(".a-two",{
  opacity: 0 ,
  marginTop :"-40%" ,


})

.to(".a-three",{
  opacity : "1",
  marginTop:"-15%",
  duration : 3 ,
  delay : 2
}) 

.to(".a-three",{
  opacity : 0 ,
  marginTop: "-100%"
})








.to(".about-title",{
  marginLeft: "80%",
  duration : 2,
  delay : 1
})




})




 return (
  <div className=' about-section  bg-[#000000b5]  border  h-[100vh]  flex  rounded-xl'>


  {/* left */}
 <div className='right h-[100%] p-10   w-[50%]'>

  <span className='text-white text-[3vw] about-title grotesk font-bold capitalize  mt-[55%] underline w-[80%]  flex justify-center items-center gap-4 about-title '>how jostack work <BsFillPatchQuestionFill />  </span>
  
 
 </div>
 {/* <span className='text-white text-[6vw] mt-[25%] question '></span> */}

{/* right */}
<div className='left h-[200%] w-[50%]  ml-44 mt-[30%]'> 

<div className='w-[60%]  a-one opacity-0'>
 <h1 className='text-white text-[3vw] capitalize mb-4  grotesk  '>
  TItle 1
 </h1>
 <div className=' h-[0.5px] w-full bg-white rounded-xl'></div>
 <p className='text-white text-[20px] capitalize mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
</div>


<div className='a-two opacity-0 w-[60%] mt-20'>
 <h1 className='text-white text-[3vw] capitalize mb-4  grotesk '>
   Title 2
 </h1>
 <div className=' h-[0.5px] w-full bg-white rounded-xl'></div>
 <p className='text-white text-[20px] capitalize mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
</div>


<div className='a-three opacity-0 w-[60%] mt-20'>
 <h1 className='text-white text-[3vw] capitalize mb-4  grotesk   '>
  Title 3
 </h1>
 <div className=' h-[0.5px] w-full bg-white rounded-xl'></div>
 <p className='text-white text-[20px] capitalize mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
</div>

<h1 className='text-black text-[4vw] mt-9'></h1>


</div>
   
  </div>
 );
};

export default About;
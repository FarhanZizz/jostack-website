import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {

  const [val , setval] = useState('') ;
  const [val2,setval2] = useState('') ;
  const [val3,setval3] = useState('') ;
  const [val4,setval4] = useState('') ;


const data = [
  "Corporate Websites",
  "E-commerce Websites",
  "Portfolio Websites",
  "Service Websites",
  "Streaming Websites",
  "Gaming Websites",
  "News and Media Websites",
  "Online Learning Platforms",
  "Educational Institutions",
  "E-Libraries",
  "Social Networking Sites",
  "Discussion Forums",
  "Blogs",
  "Wikis",
  "Government Websites",
  "Charities and NGOs",
  "Personal Blogs or Portfolios",
  "Family Websites",
  "Search Engines",
  "Cloud Services",
  "Online Tools and Apps",
  "Health and Fitness Websites",
  "Food and Recipe Websites",
  "Travel Websites",
  "Classifieds Websites",
  "Auction Websites",
  "Cause-Based Communities",
  "Fan Sites",
  "Web Applications",
  "Interactive Content Sites",
  "Tech News Websites",
  "Tutorials & Developer Resources",
  "Dating Websites",
  "Real Estate Websites",
  "Job Search Websites"
];

const data_2 = ['Website Building','Website Branding','Website Maintenance'] ;


 return (

  <div className='h-full w-screen bg-white flex items-center justify-center mt-7 p-5'>


    <div className='h-[90%] w-[90%] bg-primary rounded-3xl shadow-2xl '>
       
    <section className='text-contact  p-9 '>
    <h1 className='text-[3vw] text-white font-semibold capitalize'> Fill out the form !</h1>
    <p className='text-white max-w-4xl space-y-12 text-[20px] capitalize mt-3 '>
      We hope you're doing well! To make sure we can serve you as quickly and efficiently as possible, we invite you to fill out a quick form. By doing so,<span className='bg-white text-black rounded font-semibold px-3'> you’ll have direct access to all of our services </span>and be able to easily get in touch with our team.
    </p>
    </section>


    <form className=' px-10 py-12 flex items-center justify-between '>
    
    {/* right side */}
     <section className='space-y-24'>
          <div className='flex flex-col items-ce gap-5'>
       <span className='text-white text-[21px] grotesk'>What should we call you </span>
        <input type='text' placeholder='Name' required  onChange={(e) => setval2 (e.target.value)}
        className='bg-[#f1f1f12e] w-96 p-3 text-[#fff] grotesk rounded-2xl text-[20px] px-10 border-2 border-white  '/>
      </div>

        <div className='flex flex-col items-ce gap-5 mt-7'>
       <span className='text-white text-[21px] grotesk'>Cool! Whats Your mail address?</span>
        <input type='email' placeholder='email@gmail.com'  required
        className='bg-[#f1f1f12e] w-96 p-3 text-[#fff] grotesk rounded-2xl text-[20px] px-10 border-2 border-white  '/>
      </div>


  </section>
  {/* middle side */}
  <section className='space-y-24' >
     <div className='flex flex-col items-ce gap-5 '>
       <span className='text-white text-[21px] grotesk'> Which type of project you have? </span>
        <input type='text' placeholder='E-commerce'list='data' onChange={(e) => setval (e.target.value)} required
        className='bg-[#f1f1f12e] w-96 p-3 text-[#fff] grotesk rounded-2xl text-[20px] px-10 border-2 border-white  '/>
        <datalist id='data'>
         {data.map((op) => <option>{op}</option>)}
        </datalist>
      </div>
      {/*  */}

         <div className='flex flex-col items-ce gap-5 mt-7'>
       <span className='text-white text-[21px] grotesk'> Which type of Service you want to take  ? </span>
        <input type='text' placeholder='Website Building'list='data_2' onChange={(e) => setval3 (e.target.value)} required
        className='bg-[#f1f1f12e] w-96 p-3 text-[#fff] grotesk rounded-2xl text-[20px] px-10 border-2 border-white '/>
        <datalist id='data_2'>
         {data_2.map((op) => <option>{op}</option>)}
        </datalist>
      </div>
    {/*  */}
    
   </section>
   {/* left side  */}
      <section className='w-[400px] h-[500px] bg-[#ffffff5c] rounded-3xl p-5 space-y-5  border-2 border-white'>
     <h1 className='text-white grotesk text-[21px] capitalize font-semibold'>Hey<span className='bg-[#0000008b] py-1 px-4 mr-1 ml-1 rounded-xl'>{val2}</span> </h1>
     <h1 className='text-white grotesk text-[21px] capitalize font-semibold mt-2'>Type of project You have which is <br/>
       <span className='bg-[#0000008b] py-1 px-4  rounded-xl '>
   {val}</span></h1>
     <h1 className='text-white grotesk text-[21px] capitalize font-semibold mt-2'>And you want to take a service  which is  
       <span className='bg-[#0000008b] py-1 px-4  rounded-xl ml-[3px] '>
   {val3}</span></h1>
   
   <h1 className='text-white grotesk text-[21px] capitalize font-semibold '>That's Cool !!</h1>
   <h1 className=' grotesk text-[18px] capitalize mt-1 text-[#f3f0b8]'>Now you can SUBMIT your information to us And we will contact you very soon via Email.</h1>

   <button className='w-full bg-primary text-white font-bold py-2 rounded-xl'>
    Submit
   </button>

   </section>
      
    </form>
    </div>

  </div>
 );
};

export default Contact;
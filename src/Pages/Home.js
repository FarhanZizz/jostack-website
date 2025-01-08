import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Newsletter from "../Components/Newsletter";
import About from "../Components/About";
import Faq from "../Components/Faq";
import Founders from "../Components/Founders";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-[#141517]">
        <About />
        <Services />
      </div>
      <Faq />
      {/* out of service 
       <Founders /> 
       */}
      <Newsletter />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";

import Newsletter from "../Components/Newsletter";
import About from "../Components/About";
import Faq from "../Components/Faq";
const Home = () => {
  return (
    <div className="my-20">
      <Hero />
      <About />
      <Services />
      <Newsletter />
      <Faq />
    </div>
  );
};

export default Home;

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
      <About />
      <Services />
      <Faq />
      <Founders />
      <Newsletter />
    </div>
  );
};

export default Home;

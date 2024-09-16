import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";

import Newsletter from "../Components/Newsletter";
import About from "../Components/About";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Services/>
      <Newsletter />
    </div>
  );
};

export default Home;

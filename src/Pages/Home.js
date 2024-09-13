import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/App";
import Services from "../Components/Services";

import Newsletter from "../Components/Newsletter";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Services />
      <Newsletter />
    </div>
  );
};

export default Home;

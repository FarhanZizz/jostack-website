import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/App';
import Services from '../Components/Services';
   
const Home = () => {
  
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Services/>
    </div>
  );
};

export default Home;
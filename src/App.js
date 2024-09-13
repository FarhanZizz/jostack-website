import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Optional: Add inertia or multiplier for custom speed
      inertia: 0.75,
      multiplier: 1,
    });

    return () => {
      scroll.destroy(); // Clean up on component unmount
    };
  }, []);
  return (
    <div className="App" ref={scrollRef} data-scroll-container>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

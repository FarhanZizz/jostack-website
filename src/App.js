import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./Components/footer";

function App() {
  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    
    locoScroll.on("scroll", ScrollTrigger.update);

    
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  return (
    <div className="App smooth-scroll">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./Components/footer";

function App() {
  const location = useLocation();
  const locoScrollRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locoScrollRef.current.scrollTo(value, {
              duration: 0,
              disableLerp: true,
            })
          : locoScrollRef.current.scroll.instance.scroll.y;
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

    ScrollTrigger.addEventListener("refresh", () =>
      locoScrollRef.current.update()
    );
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () =>
        locoScrollRef.current.update()
      );
      locoScrollRef.current.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
        ScrollTrigger.refresh();
      }
    });
  }, [location]);

  return (
    <div className="App smooth-scroll">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

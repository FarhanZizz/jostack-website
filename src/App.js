import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
// import ImageJos from "../src/assets/jos-removebg-preview.png"
import {
  TransitionProvider,
  useTransitionContext,
} from "./context/TransitionContext";
import { useGSAP } from "@gsap/react";

function App() {
  const location = useLocation();
  const locoScrollRef = useRef(null);
  const { isAnimating, nextPath } = useTransitionContext();

  const overlayVariants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  };

  const transition = { duration: 0.7, ease: "easeInOut" };

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
      <AnimatePresence mode="wait" initial={false}>
        {isAnimating && (
          <motion.div
            key={nextPath}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="fixed  top-0 left-0 w-full h-full bg-[#141517] z-[9999] flex justify-center   "
          >

            <h1 className="text-white grotesk font-bold text-6xl capitalize  ">
              {nextPath === "/" ? "Home" : nextPath.slice(1)}
            </h1>

          </motion.div>
        )}
      </AnimatePresence>
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

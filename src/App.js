import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import { useTransitionContext } from "./context/TransitionContext";
import logo from "./assets/logo.png";
import ShuffleText from "react-shuffle-text";

function App() {
  const { isAnimating, nextPath } = useTransitionContext();

  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        {isAnimating && (
          <>
            {/* Purple Transition */}
            <motion.div
              variants={{
                initial: { y: "100%" },
                animate: {
                  y: "0%",
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
                exit: {
                  y: "-100%",
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 z-[9990] flex h-full w-full items-center justify-center bg-primary"
            ></motion.div>

            {/* Logo Animation */}
            <motion.div
              variants={{
                initial: { scale: 0.5, opacity: 0 },
                animate: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
                },
                exit: {
                  scale: 0.8,
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn", delay: 0.8 },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 z-[9990] flex h-screen w-full items-center justify-center bg-transparent"
            >
              <motion.img
                src={logo}
                alt="Logo"
                className="w-1/4 md:w-[250px]"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            {/* Black Transition */}
            <motion.div
              variants={{
                initial: { x: "100%" },
                animate: {
                  x: "0%",
                  transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 },
                },
                exit: {
                  x: "-100%",
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 z-[9998] flex h-screen w-full items-center justify-center bg-black"
            >
              <h1 className="grotesk text-6xl text-white">
                <ShuffleText
                  charIncInterval={100}
                  charFrameTime={80}
                  content={(() => {
                    const path = nextPath.split("?")[0]; // Extract the base path
                    return path === "/"
                      ? "Home"
                      : path.slice(1).replace(/^./, path[1].toUpperCase()); // Format the path
                  })()}
                />
              </h1>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Navbar />
      <div className="smooth-scroll">
        <div className="content-wrapper">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

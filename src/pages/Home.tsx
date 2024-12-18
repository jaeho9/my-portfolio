import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import TechStack from "../components/TechStack";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import HomeAnimation from "../components/LottieAnimation/HomeAnimation";
import ScrollArrow from "../components/ScrollArrow";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white px-4 md:px-12 lg:px-24"
    >
      {/* Lottie Animation */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-20 sm:w-24 md:w-32">
        <HomeAnimation />
      </div>

      {/* Main Text Animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Large Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.h1>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Jaeho Lee
        </motion.h1>

        {/* Subtext with ReactTyped */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-600 mb-8">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "UI/UX Focused Developer",
              "Crafting Responsive Web Designs",
              "Always Learning New Frontend Technologies",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </p>
      </motion.div>

      {/* Scroll Arrow */}
      <ScrollArrow scrollToId="about" />

      {/* Parallax Tech Stack */}
      <Parallax translateY={[-20, 20]} className="mt-12 sm:mt-16 md:mt-20">
        <TechStack />
      </Parallax>
    </section>
  );
};

export default Home;

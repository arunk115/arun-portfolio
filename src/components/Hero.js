import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import MatrixParticles from "./MatrixParticles";

export default function Hero() {
  return (
    <motion.section id="hero-section"
      className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 py-24 bg-black overflow-hidden"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Matrix Background */}
      <MatrixParticles />

      {/* Content Layer */}
      <div className="relative z-10">
        <img
          src="/ArunPhoto.jpg"
          alt="Arun Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-green-400 mb-6 shadow-lg mx-auto scale-90"
        />

        <h1 className="text-5xl sm:text-6xl font-bold text-green-400 mb-4">
          Hi, I'm Arun
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          Backend Developer | AI Enthusiast
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition-all"
        >
          Hire Me <FaArrowRight />
        </a>
      </div>
    </motion.section>
  );
}

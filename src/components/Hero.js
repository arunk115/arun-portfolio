import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-black"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-green-400 mb-4">
        Hi, I'm Arun
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
        Backend Developer | AI Enthusiast | YouTube Automation Expert
      </p>
      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition-all"
      >
        Hire Me <FaArrowRight />
      </a>
    </motion.section>
  );
}

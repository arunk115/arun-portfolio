import React from "react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <FaUserTie size={36} className="text-green-400" />
        </div>
        <h2 className="text-3xl font-semibold text-green-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate backend developer with strong experience in Java,
          Spring Boot, and API development. I also explore AI tools and build
          automated workflows and YouTube content using modern tech like
          ChatGPT, Canva, and Midjourney. My goal is to help clients build fast,
          clean, and scalable solutions while delivering creative automation
          ideas for online presence and monetization.
        </p>
      </div>
    </motion.section>
  );
}

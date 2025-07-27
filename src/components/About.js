// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaReact, FaBrain, FaYoutube } from "react-icons/fa";
import { SiSpring, SiMicrodotblog, SiFlutter, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import SectionNav from "./SectionNav";

export default function About() {
  return (
    <motion.section
      id="about-section"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-8">About Me</h2>

      <div className="max-w-4xl text-center">
        <p className="text-lg text-gray-300 mb-8">
          I’m a passionate <span className="text-green-400 font-semibold">Backend Developer</span> with over 
          <span className="text-green-400 font-semibold"> 7 years of experience</span> in building scalable applications using 
          <span className="text-green-400 font-semibold"> Java, Spring Boot, Microservices, Hibernate</span>, and more.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          I’m also skilled in 
          <span className="text-green-400 font-semibold"> system design</span>, 
          <span className="text-green-400 font-semibold"> design patterns</span>, and 
          <span className="text-green-400 font-semibold"> DSA</span>, and I love solving backend challenges.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          While backend is my core, I have hands-on experience with 
          <span className="text-green-400 font-semibold"> React.js</span>, 
          <span className="text-green-400 font-semibold"> HTML</span>, 
          <span className="text-green-400 font-semibold"> CSS</span>, 
          <span className="text-green-400 font-semibold"> JavaScript</span>, and 
          <span className="text-green-400 font-semibold"> Flutter</span> for front-end and cross-platform development.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Currently exploring the world of <span className="text-green-400 font-semibold">AI</span> starting with 
          <span className="text-green-400 font-semibold"> Data Analytics</span>. I’m also creatively engaged in 
          <span className="text-green-400 font-semibold"> YouTube branding</span>—crafting thumbnails and logos using AI tools.
        </p>
      </div>

      {/* Icon Row */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 mt-10 text-green-400 text-4xl">
        <FaJava title="Java" />
        <SiSpring title="Spring Boot" />
        <SiMicrodotblog title="Microservices" />
        <FaDatabase title="SQL / Hibernate" />
        <FaReact title="React.js" />
        <SiFlutter title="Flutter" />
        <SiHtml5 title="HTML" />
        <SiCss3 title="CSS" />
        <SiJavascript title="JavaScript" />
        <FaBrain title="AI / Data Analytics" />
        <FaYoutube title="YouTube Design" />
      </div>
    </motion.section>
  );
}

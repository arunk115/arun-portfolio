import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaMagic } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered YouTube Channel",
    description:
      "Scripted and produced videos using ChatGPT, ElevenLabs, and Canva. Built a faceless, monetized YouTube brand in a high-RPM niche.",
    icon: <FaMagic className="text-purple-400" />,
  },
  {
    title: "Java Image Classifier",
    description:
      "Created a backend service that classifies uploaded images into categories like invoice, document, vehicle damage, and junk using Java + ML integration.",
    icon: <FaTools className="text-yellow-400" />,
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-400 mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-left flex flex-col gap-3"
            >
              <div className="text-3xl">{project.icon}</div>
              <h3 className="text-xl font-bold text-green-300">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

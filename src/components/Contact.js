import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact-section"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 text-lg mb-10">
          Interested in working together or hiring me for your next project? Reach out via email or connect through social platforms.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:arunsk6006@gmail.com"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition"
          >
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://github.com/arunk115"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arunkavi115/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

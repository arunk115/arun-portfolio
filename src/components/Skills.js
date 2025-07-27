import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaRobot,
  FaDatabase,
  FaYoutube,
} from "react-icons/fa";

const skills = [
  { name: "Java & Spring Boot", icon: <FaJava className="text-orange-400" /> },
  { name: "React & Tailwind", icon: <FaReact className="text-cyan-400" /> },
  { name: "SQL & Databases", icon: <FaDatabase className="text-yellow-300" /> },
  { name: "Git & Gradle", icon: <FaGitAlt className="text-red-500" /> },
  { name: "AI Tools & Automation", icon: <FaRobot className="text-purple-400" /> },
  { name: "YouTube Content Creation", icon: <FaYoutube className="text-red-600" /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-400 mb-10">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-gray-300 text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

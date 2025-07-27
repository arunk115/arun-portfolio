import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-center border-t border-gray-800">
      <div className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Arun — Built with 💻 React & Tailwind
      </div>

      <a
        href="#"
        className="mt-3 inline-block text-green-400 hover:text-green-500 transition text-sm"
        aria-label="Scroll to top"
      >
        <div className="flex justify-center items-center gap-2 mt-2">
          <FaArrowUp className="animate-bounce" />
          Back to top
        </div>
      </a>
    </footer>
  );
}

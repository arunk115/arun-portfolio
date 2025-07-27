// src/components/SectionNav.js
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const sectionOrder = ["hero", "about", "skills", "projects", "contact"];

export default function SectionNav() {
  const [current, setCurrent] = useState("hero");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // center of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setCurrent(id);
        }
      });
    }, options);

    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentIndex = sectionOrder.indexOf(current);
  const upTarget = sectionOrder[currentIndex - 1];
  const downTarget = sectionOrder[currentIndex + 1];

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {upTarget && (
        <button
          onClick={() => scrollTo(upTarget)}
          className="bg-green-500 hover:bg-green-600 text-black p-3 rounded-full shadow-lg transition-all"
          title="Scroll Up"
        >
          <FaArrowUp />
        </button>
      )}
      {downTarget && (
        <button
          onClick={() => scrollTo(downTarget)}
          className="bg-green-500 hover:bg-green-600 text-black p-3 rounded-full shadow-lg transition-all"
          title="Scroll Down"
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
}

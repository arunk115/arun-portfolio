// src/Portfolio.js
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionNav from "./components/SectionNav";

export default function Portfolio() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <section className="h-screen w-full" id="hero"><Hero /></section>
      <section className="h-screen w-full" id="about"><About /></section>
      <section className="h-screen w-full" id="skills"><Skills /></section>
      <section className="h-screen w-full" id="projects"><Projects /></section>
      <section className="h-screen w-full" id="contact"><Contact /></section>
      <Footer />
      <SectionNav />
    </div>
  );
}

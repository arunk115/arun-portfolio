// src/Portfolio.js
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <section className="h-screen w-full"><Hero /></section>
      <section className="h-screen w-full"><About /></section>
      <section className="h-screen w-full"><Skills /></section>
      <section className="h-screen w-full"><Projects /></section>
      <section className="h-screen w-full"><Contact /></section>
      <Footer />
    </div>
  );
}

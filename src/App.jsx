import React, { useEffect, useState } from "react";

import Nav from "./Portfolio/Nav";
import Header from "./Header/Header";
import CoreSkills from "./CoreSkills/CoreSkills";
import ITSkills from "./ITSkills/ITSkills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import ProjectShow from "./ProjectShow/ProjectShow";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  // ==========================================
  // GLOBAL THEME STATE (Universal Fix)
  // ==========================================
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fallback to system preference if no local storage exists
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // ==========================================
  // APPLY THEME TO HTML & BODY GOBALLY
  // ==========================================
  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#030712]
        dark:text-white
      "
    >
      {/* NAVBAR */}
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <section id="home"><Header /></section>
        <section id="skills"><CoreSkills /></section>
        <section id="stack"><ITSkills /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><ProjectShow /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
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
  // GLOBAL THEME STATE (Supports LocalStorage & System Preference)
  // ==========================================
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") return false;
    if (savedTheme === "dark") return true;
    // Fallback to system preference if no explicit choice saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // ==========================================
  // APPLY THEME TO ENTIRE WEBSITE & DOCUMENT ROOT
  // ==========================================
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (darkMode) {
      html.classList.add("dark");
      body.classList.remove("bg-white");
      body.classList.add("bg-[#030712]");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("bg-[#030712]");
      body.classList.add("bg-white");
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
        {/* HOME */}
        <section id="home">
          <Header />
        </section>

       
        {/* STACK */}
        <section id="stack">
          <ITSkills />
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <ProjectShow />
        </section>

        {/* EDUCATION */}
        <section id="education">
          <Education />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};


export default App;
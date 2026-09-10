import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Code2,
  Layers3,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Mail,
  MessageSquare,
} from "lucide-react";

const Nav = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // 🎨 Perfect Matching Emerald & Cyber Neon Theme Config
  const customBg = {
    dark: "bg-[#061a14]/90 backdrop-blur-3xl", 
    light: "bg-emerald-50/90 backdrop-blur-2xl",    
    mobileDark: "bg-[#061a14]/95 backdrop-blur-3xl",
    mobileLight: "bg-emerald-50/98 backdrop-blur-3xl",
  };

  const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "Skills", id: "skills", icon: Code2 },
    { name: "Stack", id: "stack", icon: Layers3 },
    { name: "Education", id: "education", icon: GraduationCap },
    { name: "Experience", id: "experience", icon: BriefcaseBusiness },
    { name: "Projects", id: "projects", icon: FolderGit2 },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav") && !e.target.closest("#mobile-menu")) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const goToSection = useCallback((id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (!section) return;
    const offset = 92;
    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        
        className={`
          fixed left-1/2 top-4 z-[9999] -translate-x-1/2
          w-[calc(100%-16px)] sm:w-[calc(100%-24px)] lg:w-[calc(100%-36px)]
          max-w-7xl rounded-2xl border transition-all duration-300
          ${
            darkMode
              ? `border-emerald-500/30 ${customBg.dark} shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]`
              : `border-emerald-200/80 ${customBg.light} shadow-[0_20px_40px_rgba(16,185,129,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]`
          }
          ${scrolled ? "shadow-2xl py-0.5" : "py-1"}
        `}
        
      >
        {/* Top Emerald Neon Accent Line */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-95 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />

        <div className="relative flex items-center justify-between px-3 sm:px-5 lg:px-6 h-[60px]">
          
          {/* Logo */}
          <button type="button" onClick={() => goToSection("home")} className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-[0_6px_20px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="relative text-sm font-black text-slate-950">A</span>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className={`text-[16px] font-black tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                Amit<span className="text-emerald-400">.</span>dev
              </span>
              <span className={`mt-1 hidden sm:block text-[8px] font-bold uppercase tracking-[0.18em] ${darkMode ? "text-emerald-400/80" : "text-emerald-600"}`}>
                AI • MERN • Full Stack
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:block">
            <div className={`flex items-center gap-1 rounded-xl border p-1 ${darkMode ? "border-emerald-500/20 bg-[#0a261d]/80 shadow-inner" : "border-emerald-200/60 bg-emerald-100/50 shadow-inner"}`}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={`
                      relative group flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[11px] font-extrabold transition-all duration-200
                      ${
                        active
                          ? "text-white"
                          : darkMode
                          ? "text-emerald-100/70 hover:text-white"
                          : "text-slate-700 hover:text-emerald-800"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 shadow-[0_4px_15px_rgba(52,211,153,0.4)]"
                      />
                    )}
                    <Icon size={14} strokeWidth={2.5} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Switch theme"
              className={`
                group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 active:scale-95 shadow-md
                ${darkMode ? "border-emerald-500/30 bg-[#0a261d] text-emerald-400 hover:bg-[#11382b]" : "border-emerald-300 bg-white text-emerald-600 hover:bg-emerald-50"}
              `}
            >
              {darkMode ? <Sun size={15} className="transition-transform group-hover:rotate-45" /> : <Moon size={15} className="transition-transform group-hover:-rotate-12" />}
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="
                hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-4 py-2 text-xs font-black text-white shadow-[0_6px_20px_rgba(52,211,153,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(52,211,153,0.5)] active:scale-95
              "
            >
              <MessageSquare size={13} />
              Let's Talk
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 lg:hidden shadow-md ${darkMode ? "border-emerald-500/30 bg-[#0a261d] text-white" : "border-emerald-300 bg-white text-slate-800"}`}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`
              fixed inset-x-3 top-20 z-[9998] rounded-2xl border p-3 lg:hidden
              ${
                darkMode
                  ? `border-emerald-500/30 ${customBg.mobileDark} shadow-[0_25px_60px_rgba(0,0,0,0.85)]`
                  : `border-emerald-200 ${customBg.mobileLight} shadow-2xl`
              }
            `}
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSection(item.id)}
                    className={`
                      flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-extrabold transition-all
                      ${
                        active
                          ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-md"
                          : darkMode
                          ? "text-emerald-100/70 hover:bg-white/[0.04]"
                          : "text-slate-700 hover:bg-emerald-100/60"
                      }
                    `}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-4 py-3 text-xs font-black text-white shadow-lg"
              >
                <MessageSquare size={14} />
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
